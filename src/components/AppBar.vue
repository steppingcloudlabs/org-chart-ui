<template>
  <div class="">
    <!-- <v-toolbar class="pt-1 pb-5">
      <v-layout row wrap>
        <v-flex xs3>
          <img src="/assets/hdr_logo.png" style="height: 50px; width:80px; margin-left: 20px;margin-top: 10px;" />
        </v-flex>
        <v-toolbar-title
      class="text-center flex-grow-1"
      v-if="hideAppBar"
    >
      Department List
    </v-toolbar-title>


    <v-btn
      v-if="hideAppBar"
      text
      outlined
      class="ml-auto"
      @click="openDialog()"
    >
      <span>Merge Departments</span>
      <v-icon right>mdi-merge</v-icon>
    </v-btn> -->
    <v-app-bar app flat height="60">
  <!-- Left: Logo -->
  <!-- <v-img
    src="/assets/hdr_logo.png"
    contain
    max-height="50"
    max-width="150"
    class="ml-4"
  /> -->
            <img src="/assets/hdr_logo.png" style="height: 50px; width:100px; margin-left: 5px;margin-top: 2px;" />


  <!-- Center: Title -->
  <v-toolbar-title
    class="absolute-center font-weight-medium"
    v-if="hideAppBar"
  
  >
    Department List
  </v-toolbar-title>

  <v-spacer></v-spacer>

  <!-- Right: Button -->
  <v-btn
    color="primary"
    v-if="hideAppBar"
    outlined
    class="mr-4"
    @click="openDialog()"
  >
    MERGE DEPARTMENTS
    <v-icon right>mdi-merge</v-icon>
  </v-btn>


        <v-flex xs6 class="pr-5 pt-5" v-if="!hideAppBar">
          <!-- <SearchAlumni @getUserData="getUserData"></SearchAlumni> -->
          <search @getUserData="getUserData"></search>
        </v-flex>

        <v-flex xs3 class="pt-5 pl-5" style="margin-top: 10px;" v-if="!hideAppBar">
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
      <!-- </v-layout> -->
  </v-app-bar>
    <!-- <v-layout row wrap>
      <v-flex xs12>
        <v-divider color="rgba(0,0,0,.12)"></v-divider>
      </v-flex>
    </v-layout> -->
    <!-- <div v-if="showLoading">
      <v-overlay :value="showLoading" z-index="9999">
        <v-progress-circular indeterminate size="64"  style="z-index: 10000"></v-progress-circular>
      </v-overlay>
    </div> -->
 

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
       
    hideAppBar() {
      return this.$route.meta.hideAppBar === true
    },
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
    showmergedialog:
    {
        get() {
        return this.$store.getters.getshowmergedialog;
        // return true;
      },
      set(data) {
        this.$store.commit("setshowmergedialog", data);
      }

    },
  },

  methods: {
      openDialog()
        {
          this.showmergedialog=true
        },
    getUserData(data) {
      this.showFilter = false;
      // this.$router.push({ path: "/" });
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
.absolute-center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: #1976D2;
}

.v-main {
  padding: 17px 0px 0px !important;
}
#core-app-bar a {
  text-decoration: none;
}
</style>
