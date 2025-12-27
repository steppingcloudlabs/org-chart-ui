<template>
  <v-container fluid class="px-6 pt-5" style="height: 100vh">
    <!-- <v-toolbar
      color='primary accent-4'
      dark flat class="px-6" >
      
      <v-toolbar-title>
        Department List
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn text outlined @click="openDialog()">
        <span>Merge Departments</span>
        <v-icon>mdi-merge</v-icon>
      </v-btn>
    </v-toolbar>-->
    <v-row class="pt-5 mt-2" dense>
      <!-- {{departmentSearchText}}
      {{HII}}-->
      <!-- {{showdeptView}} -->

      <!-- Loop through cardsData and create Vuetify cards dynamically -->
      <v-col v-for="(card, index) in filteredDeptCards" :key="index" cols="12" md="4">
        <!-- <v-col v-for="(card, index) in showdeptView" :key="index" cols="12" md="4"> -->
        <v-card
          class="dept-card ma-1"
          :class="card.details.status === 'I' ? 'inactive' : 'active'"
          elevation="4"
          
          hover
        >
          <!-- Status Strip -->
          <div class="status-strip"></div>

          <!-- Header -->
          <v-card-title class="d-flex align-center">
            <!-- <v-avatar size="42" class="mr-3 dept-icon">
              <v-icon color="white">mdi-domain</v-icon>
            </v-avatar> -->

            <div class="title-wrapper">
              <div class="dept-name">{{ card.details.name }}</div>
              <div class="dept-code">{{ card.details.externalCode }}</div>
            </div>

            <v-spacer />

            <v-chip
              small
              :color="card.details.status === 'I' ? 'grey darken-1' : 'green darken-1'"
              text-color="white"
            >{{ card.details.status === 'I' ? 'Inactive' : 'Active' }}</v-chip>
          </v-card-title>

          <!-- Body -->
          <v-card-text class="pt-0">
            <div class="info-row">
              <v-icon small color="primary" class="mr-1">mdi-account</v-icon>
              <span
                v-if="card.details.headOfUnitNav"
              >{{ card.details.headOfUnitNav.defaultFullName }}</span>
              <span v-else class="text--disabled">No Head of Department</span>
            </div>
          </v-card-text>

          <v-divider />

          <!-- Actions -->
          <v-card-actions class="px-4 pb-4">
            <v-btn
              color="primary"
              rounded
              outlined
              small
              @click="getUserListView(card)"
              :loading="loadingCardId"
            >{{ card.details.headOfUnitNav ? 'Start Planning' : 'Start Planning' }}</v-btn>

            <v-spacer />

            <v-btn color="secondary" rounded text small @click="OpenViewPlanPage(card)">View Plan</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <mergedialog></mergedialog>
  </v-container>
</template>

<script>
import mergedialog from "./updates/mergedialog.vue";
import { v4 as uuidv4 } from "uuid";

export default {
  components: {
    mergedialog
  },
  data() {
    return {
      loadingCardId: false,
      cardsData: []
    };
  },
  computed: {
      isEdit: {
      get() {
        return this.$store.getters.getisEdit;
        // return true;
      },
      set(data) {
        this.$store.commit("setisEdit", data);
      },
    },
    isPlanOrgChart: {
      get() {
        return this.$store.getters.getisPlanOrgChart;
        // return true;
      },
      set(data) {
        this.$store.commit("setisPlanOrgChart", data);
      }
    },
    isMainOrgChartPage: {
      get() {
        return this.$store.getters.getisMainOrgChartPage;
        // return true;
      },
      set(data) {
        this.$store.commit("setisMainOrgChartPage", data);
      }
    },
    isSavedPlanpage: {
      get() {
        return this.$store.getters.getisSavedPlanpage;
        // return true;
      },
      set(data) {
        this.$store.commit("setisSavedPlanpage", data);
      }
    },
    allSavedPlans: {
      get() {
        return this.$store.getters.getallSavedPlans;
        // return true;
      },
      set(data) {
        this.$store.commit("setallSavedPlans", data);
      }
    },
    selectedBusinessUnit: {
      get() {
        return this.$store.getters.getselectedBusinessUnit;
        // return true;
      },
      set(data) {
        this.$store.commit("setselectedBusinessUnit", data);
      }
    },
    selectedDivision: {
      get() {
        return this.$store.getters.getselectedDivision;
        // return true;
      },
      set(data) {
        this.$store.commit("setselectedDivision", data);
      }
    },
    selectedLocation: {
      get() {
        return this.$store.getters.getselectedLocation;
        // return true;
      },
      set(data) {
        this.$store.commit("setselectedLocation", data);
      }
    },
    showLoading: {
      get() {
        return this.$store.getters.getshowLoading;
        // return true;
      },
      set(data) {
        this.$store.commit("setshowLoading", data);
      }
    },

    filteredDeptCards() {
      const selectedDeptCode = this.$store.getters.getDepartmentSearchText;
      const selectedBU = this.selectedBusinessUnit;
      const selectedDiv = this.selectedDivision;

      // 1️⃣ Department search has priority
      if (selectedDeptCode) {
        return this.showdeptView.filter(
          card => card.details.externalCode === selectedDeptCode
        );
      }

      // 2️⃣ Business Unit filter
      if (selectedBU) {
        return this.showdeptView.filter(card => {
          const division = card.details.cust_toDivision?.results || [];

          return division.some(div =>
            div.cust_toBusinessUnit?.results?.some(
              bu => bu.externalCode === selectedBU
            )
          );
        });
      }
      if (selectedDiv) {
        return this.showdeptView.filter(card => {
          const divisions = card.details.cust_toDivision?.results || [];

          return divisions.some(div => div.externalCode === selectedDiv);
        });
      }

      // 3️⃣ No filter → show all
      return this.showdeptView;
    },

    departmentSearchText: {
      get() {
        return this.$store.getters.getDepartmentSearchText;
      },
      set(data) {
        this.$store.commit("setDepartmentSearchText", data);
      }
    },

    isorgChartPage: {
      get() {
        return this.$store.getters.getisorgChartPage;
        // return true;
      },
      set(data) {
        this.$store.commit("setisorgChartPage", data);
      }
    },
    showdeptUser: {
      get() {
        return this.$store.getters.getdeptUserData;
        // return true;
      },
      set(data) {
        this.$store.commit("setdeptUserData", data);
      }
    },
    showdeptView: {
      get() {
        return this.$store.getters.getDepartmentList;
        // return true;
      },
      set(data) {
        this.$store.commit("setDepartmentList", data);
      }
    },
    showselecteddept: {
      get() {
        return this.$store.getters.getselectedDept;
        // return true;
      },
      set(data) {
        this.$store.commit("setselectedDept", data);
      }
    },
    showmergedialog: {
      get() {
        return this.$store.getters.getshowmergedialog;
        // return true;
      },
      set(data) {
        this.$store.commit("setshowmergedialog", data);
      }
    },
    showoverlay: {
      get() {
        return this.$store.getters.getshowoverlay;
        // return true;
      },
      set(data) {
        this.$store.commit("setshowoverlay", data);
      }
    },
    selectedDept: {
      get() {
        return this.$store.getters.getselectedDept;
        // return true;
      },
      set(data) {
        this.$store.commit("setselectedDept", data);
      }
    },
    selectedPlan: {
      get() {
        return this.$store.getters.getselectedPlan;
        // return true;
      },
      set(data) {
        this.$store.commit("setselectedPlan", data);
      }
    }
  },
  methods: {
    OpenViewPlanPage(card) {
      this.showLoading = true;
      this.selectedDept = card;
      this.loadingCardId = true;
      this.isorgChartPage = true;
      console.log("HII");
      const departmentId = card?.details?.externalCode;
      const params = {
        userId: "Admin",
        departmentId: departmentId,
        status: ""
      };
      console.log("params==", params);
      this.$store
        .dispatch("getSavedPlan", params)
        .then(response => {
          console.log("response from savedpalnapi==", response);
          this.allSavedPlans = response;
          this.isSavedPlanpage = true;
          this.showLoading = false;
          this.$router.push({ path: "/viewSavedPlan" });
          this.loadingCardId = false;
        })
        .catch(err => {
          console.error("Failed to load saved plan", err);
        });
    },

    openDialog() {
      this.showmergedialog = true;
    },
    getdepartmentView() {
      this.showoverlay = true;
      this.$store.dispatch("getAllDepartmentView").then(response => {
        this.showLoading = false;
        var dept = [];
        for (var i = 0; i < response.length; i++) {
          var newObj = {
            id: response[i].externalCode,
            details: response[i],
            users: []
          };
          dept.push(newObj);
        }
        this.showoverlay = false;
        this.showdeptView = dept;
      });
    },
    getUserListView(data) {
      this.showLoading = true;
      this.isEdit = false;
      // current date (YYYY-MM-DD)
      // this.selectedPlan = {};
      this.selectedDept = data;
      var date1 = new Date().getTime();
      this.isorgChartPage = true;
      this.isMainOrgChartPage = true;
      this.isPlanOrgChart = false;
      console.log(data);
      this.$store
        .dispatch("orgCategory", {
          type: "department",
          typeValue: data.details.externalCode,
          date: date1
        })
        .then(response => {
          if (response) {
            console.log("testing");
            this.showLoading = false;
           
            this.$router.push({ path: "/orgchart2" });
             // Generate Plan ID
        const generatedPlanId = `PLAN-${uuidv4().slice(0, 8).toUpperCase()}`;
        const generatedPlanName = `${data.details.name}-PLAN-${uuidv4().slice(0,6).toUpperCase()}`;

        // Set plan detail (CREATE mode)
        this.selectedPlan = {
          planId: generatedPlanId,
          planName: generatedPlanName,
          planVersion: "V1.0",
          planStatus: "draft"
        };

        console.log("Generated Plan:", this.selectedPlan);
          }
        });
      //  this.$store
      // .dispatch("getSavedPlan", params)
      // .then((response) => {
      //   console.log("response from savedpalnapi==", response);
      //   this.allSavedPlans = response;})

      // this.$router.push({ path: "/orgchart2" });
    },

    getDetails() {
      this.$router.push({ path: "/detailplan" });
    }
  },
  mounted() {
    this.showLoading = true;
    if (this.showdeptView.length <= 0) {
      this.getdepartmentView();
    } else {
      this.showLoading = false;
    }
  }
};
</script>

<style scoped>
.color-strip-green {
  background-color: #172017; /* Change the color as per your preference */
  color: white;
}
.color-strip-red {
  background-color: rgb(
    63,
    59,
    59
  ); /* Change the color as per your preference */
  color: white;
}

.color-active-green {
  background-color: rgb(3, 96, 3); /* Change the color as per your preference */
  color: white;
}
.color-active-red {
  background-color: rgb(71, 3, 3); /* Change the color as per your preference */
  color: white;
}
/* Add your component-specific styles here if needed */
</style>
