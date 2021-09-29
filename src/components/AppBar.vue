<template>
  <div class="pb-5">
    <v-toolbar class="pt-1 pb-5"  color="grey lighten-4">
      <v-layout row wrap>
        <v-flex xs3 >
          <!-- <img src="/assets/hdr_logo.png" style="height: 60px; width:120px; margin-left: 20px;margin-top: 10px;" /> -->
        
        </v-flex>
        <v-flex xs4 class="pr-5 pt-5">
          <!-- <SearchAlumni @getUserData="getUserData"></SearchAlumni> -->
          <search v-if="searchfilter=='simple'"  @getUserData="getUserData"></search>
          <cascadedsearch v-if="searchfilter=='cascaded'"  @getUserData="getUserData"></cascadedsearch>
        </v-flex>
        <v-flex xs2 class="pr-2 pt-5">
          <v-switch
            v-model="switch1"
            class="pt-2"
            :label="`Search: ${searchfilter.toString()}`"
            @change="changeSearch"
          ></v-switch>
        </v-flex>
        <v-flex xs2 class="pt-5 pl-5" style="margin-top: 10px;">
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
        <v-flex xs1 class="pr-5 pt-5" v-if="$route.path=='/temporgchart'">
          
              <v-btn color="primary" @click="showTheme=true">
               <v-icon >mdi-palette</v-icon>
              </v-btn>
             
           
        </v-flex>
      </v-layout>
    </v-toolbar>
    <v-layout row wrap>
      <v-flex xs12>
        <v-divider color="rgba(0,0,0,.12)"></v-divider>
      </v-flex>
    </v-layout>
    <div v-if="showLoading">
      <v-overlay style="z-index:9999">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>
    </div>
    <homepage></homepage>
  </div>
</template>

<script>
// Utilities

//import SearchAlumni from "@/components/SearchAlumni";
import search from "@/components/search.vue";
import homepage from '@/components/homepage.vue'
import cascadedsearch from "@/components/cascadedSearch.vue"

export default {
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    search: "",
    switch1:true
    
  }),

  components: {
    // SearchAlumni,
    search,
    homepage,
    cascadedsearch
    
  },
  beforeMount()
  {
    if(this.searchfilter=="simple")
    {
      this.switch1=false
    }
    else
    {
      this.switch1=true
    }
  },

    computed: {
      searchfilter: {
      get() {
        return this.$store.getters.getSelectedFilter;
        // return true;
      },
      set(data) {
        this.$store.commit("setSelectedFilter", data);
      }
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
        showTheme: {
      get() {
        return this.$store.getters.getshowThemeDialog;
      },
      set(data) {
        this.$store.commit("setShowTheme", data);
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
    changeSearch()
    {
      if(this.switch1==true)
      {
        this.searchfilter="cascaded"
      }
      else if(this.switch1==false)
      {
        this.searchfilter="simple"
      }
    },
    getUserData(data) {
      this.showFilter = false;
      this.$router.push({path:"/"});
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
          if (response && !response["msg"]) {
            console.log("testing");
            this.showLoading = false;
           
              this.$router.push({path:"temporgchart"});
            
          }
          else if(response["msg"])
            {
               this.$store.commit("showSnackbar", {
            message: "No Position mapped",
            color: "Error",
            heading: "Error",
            duration: 3000,
          });
            }
        }).catch((error) => {
            this.$store.commit("closeProgressBar", {});
           this.$store.commit("showSnackbar", {
          color: "error",
          duration: 1000,
          message: error,
          heading: "Error",
        });})
      }
      else{
        this.$store
        .dispatch("orgCategory",{
          type: data.category,
          typeValue: data.value,
          date: date1,
        })
        .then((response) => {
          if (response ) {
            console.log("testing");
            this.showLoading = false;
            console.log(response.response)
            if(response.response=="No Data Available")
            {
               this.$store.commit("showSnackbar", {
            message: "No Position mapped",
            color: "Red",
            heading: "Error",
            duration: 3000,
          });
            }
            else{
              this.$router.push({path:"/temporgchart"});
          

            }
         
            
          }
          
        }).catch((error) => {
            this.$store.commit("closeProgressBar", {});
           this.$store.commit("showSnackbar", {
          color: "error",
          duration: 1000,
          message: error,
          heading: "Error",
        });
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
.v-dialog
{
  -webkit-box-shadow:none;
  box-shadow: none;
}
</style>
