<template>
  <div class="mb-4">
    <v-toolbar class="pt-1 pb-5">
      <v-layout row wrap>
        <v-flex xs3>
          <img src="/assets/hdr_logo.png" style="height: 60px; width:80px; margin-left: 20px;margin-top: 10px;" />
        </v-flex>
        <v-flex xs6 class="pr-5 pt-5">
          <!-- <SearchAlumni @getUserData="getUserData"></SearchAlumni> -->
          <search @getUserData="getUserData"></search>
        </v-flex>

        <v-flex xs3 class="pt-5 pl-5" style="margin-top: 10px;">
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="inputDate"
                label="Effective Date"
                prepend-icon="event"
                v-on="on"
                style="width:70%"
              ></v-text-field>
            </template>
            <v-date-picker v-model="inputDate" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(inputDate)">OK</v-btn>
            </v-date-picker>
          </v-menu>
        </v-flex>
        <!-- <v-flex xs2 class="pr-5">
          <v-menu transition="scale-transition" offset-y>
            <template v-slot:activator="{ attrs, on }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-icon v-on="on">mdi-view-dashboard</v-icon>
                  </template>
                  <span>Legends</span>
                </v-tooltip>
              </v-btn>
            </template>
            <v-card dark max-width="250">
              <v-img src="/assets/legendicon.png"></v-img>
            </v-card>
          </v-menu>
        </v-flex>-->
      </v-layout>
    </v-toolbar>
    <v-layout row wrap>
      <v-flex xs12>
        <v-divider color="rgba(0,0,0,.12)"></v-divider>
      </v-flex>
    </v-layout>
    <div v-if="showLoading">
      <v-overlay>
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>
    </div>
  </div>
</template>

<script>
// Utilities

//import SearchAlumni from "@/components/SearchAlumni";
import search from "@/components/search.vue";
export default {
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    search: "",
  }),

  components: {
    // SearchAlumni,
    search,
  },
    computed: {
      inputDate: {
        get() {
          return this.$store.getters.getinputDate;
          // return true;
        },
        set(data) {
          this.$store.commit("setinputDate", data);
        },
      },
    showLoading: {
      get() {
        return this.$store.getters.getshowLoading;
        // return true;
      },
      set(data) {
        this.$store.commit("setshowLoading", data);
      },
    },
    showNavDrawer: {
      get() {
        return this.$store.getters.getshownavDrawer;
        // return true;
      },
      set(data) {
        this.$store.commit("setshownavDrawer", data);
      },
    },
    showFilter: {
      get() {
        return this.$store.getters.getshowFilter;
        // return true;
      },
      set(data) {
        this.$store.commit("setshowFilter", data);
      },
    },
  },

  methods: {
    getUserData(data) {
      this.showFilter = false;
      this.$router.push({ path: "/" });
      var date1 = new Date(this.inputDate).getTime();
      this.showLoading = true;
      if(data.category=="People")
      {
        this.$store
        .dispatch("testcall", {
          userid: data.userId,
          position: data.position,
          date: date1,
        })
        .then((response) => {
          if (response) {
            console.log("testing");
            this.showLoading = false;
            this.$router.push({ path: "/orgchart2" });
          }
        });
      }
      else{
        this.$store
        .dispatch("orgCategory",{
          type: data.category,
          typeValue: data.value,
          date: date1,
        })
        .then((response) => {
          if (response) {
            console.log("testing");
            this.showLoading = false;
            this.$router.push({ path: "/orgchart2" });
          }
        });
      }
      
    },
  },
};
</script>

<style>
/* Fix coming in v2.0.8 */
#core-app-bar {
  width: auto;
}

#core-app-bar a {
  text-decoration: none;
}
</style>
