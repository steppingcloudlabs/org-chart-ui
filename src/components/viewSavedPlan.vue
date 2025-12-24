<template>
  <v-container fluid class="px-6 pt-10">
    <v-row dense>
      <v-col
        v-for="(card, index) in filteredDeptCards"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card
          class="plan-card"
          outlined
          elevation="2"
          @click="onPlanClick(card)"
        >
          <!-- Header -->
          <v-card-title class="d-flex align-start">
            <v-icon color="primary" class="mr-2 mt-1">
              mdi-file-document-outline
            </v-icon>

            <div class="flex-grow-1">
              <div class="plan-title">
                 {{ card.planId }}
              </div>
              <div class="plan-subtitle">
               {{ card.planName }} ({{ card.planVersion }})
              </div>
            </div>
          </v-card-title>

        <!-- Status + Action Row -->
<v-card-actions class="px-4 pb-4 d-flex align-center">
  <v-chip
     v-if="card.planStatus"
    small
    :color="statusColor(card.planStatus)"
    text-color="white"
    class="text-capitalize"
  >
    {{ card.planStatus }}
  </v-chip>
  

  <v-spacer></v-spacer>

  <v-btn
    text
    small
    color="primary"
    @click="openUpdateDialog(card)"
  >
    Edit Plan
  </v-btn>
</v-card-actions>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
     selectedStatus: {
      get() {
        return this.$store.getters.getselectedStatus;
        // return true;
      },
      set(data) {
        this.$store.commit("setselectedStatus", data);
      },
    },
     isPlanOrgChart: {
      get() {
        return this.$store.getters.getisPlanOrgChart;
        // return true;
      },
      set(data) {
        this.$store.commit("setisPlanOrgChart", data);
      },
    },
    allSavedPlans: {
      get() {
        return this.$store.getters.getallSavedPlans;
        // return true;
      },
      set(data) {
        this.$store.commit("setallSavedPlans", data);
      },
    },
    isSavedPlanpage: {
      get() {
        return this.$store.getters.getisSavedPlanpage;
        // return true;
      },
      set(data) {
        this.$store.commit("setisSavedPlanpage", data);
      },
    },
     saveDraftDialog: {
      get() {
        return this.$store.getters.getsaveDraftDialog;
        // return true;
      },
      set(data) {
        this.$store.commit("setsaveDraftDialog", data);
      },
    },
     selectedPlan: {
      get() {
        return this.$store.getters.getselectedPlan;
        // return true;
      },
      set(data) {
        this.$store.commit("setselectedPlan", data);
      },
    },
     userData: {
        get() {
          return this.$store.getters.getuserData;
          // return true;
        },
        set(data) {
          this.$store.commit("setuserData", data);
        },
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
     isMainOrgChartPage: {
      get() {
        return this.$store.getters.getisMainOrgChartPage;
        // return true;
      },
      set(data) {
        this.$store.commit("setisMainOrgChartPage", data);
      },
    },
     filteredDeptCards() {

      const selectedStatus = this.selectedStatus;
      console.log("selectedStatus=",selectedStatus);

      // 1️⃣ Department search has priority
      if (selectedStatus) {
        return this.allSavedPlans.filter(
          (card) => card.planStatus === selectedStatus
        );
      }

     
    

      // 3️⃣ No filter → show all
      return this.allSavedPlans;
    },
  },
//   methods: {
//     onPlanClick(data) {
//       console.log("data=", data);

// console.log("chartData type:", typeof data.chartData);
// console.log("chartData value:", data.chartData);
// var currentData = JSON.parse((data?.chartData));
// this.userData = currentData ["currentData"]
//       this.$router.push({ path: "/orgchart2" });
//          this.selectedPlan=data;
//          this.planOrgChart = true;
//          this.isPlanOrgChart=true;
//       // this.$router.push({ path: "/orgchart2" });
//     },
//     openUpdateDialog(card) {
//       console.log("card data in openUpdateDialog=", card);
//       this.selectedPlan=card;
//       // this.saveDraftDialog= true;
     

//     },
//     getUserListView()
//         {
          
//           this.showoverlay=true
//             let index=this.showdeptView.findIndex(item => item.id === this.showselecteddept.id);
//             if(this.showdeptView[index].users.length<=0)
//             {
//               console.log("deptttt",this.showselecteddept)
//               this.$store
//               .dispatch("getDepUser",this.showselecteddept.details.externalCode)
//               .then((response) => {
              
//                 this.showdeptView[index].users = response;
//                 this.showselecteddept=this.showdeptView[index]
//                 console.log(this.showdeptView[index])
               
//         })
//             }
//             else{
//               this.showselecteddept=this.showdeptView[index]
//             }
//            this.showoverlay=false
//             // this.$router.push({ path: "/detailplan" })
          
//         },
//   },
  methods: {
  statusColor(status) {
    if (!status) return ''

    switch (status.toLowerCase()) {
      case 'draft':
        return 'blue'
      case 'pending approval':
        return 'orange'
      case 'approved':
        return 'green'
      default:
        return 'grey'
    }
  },

  onPlanClick(data) {
      console.log("data=", data);
      this.showLoading = true;
console.log("chartData type:", typeof data.chartData);
console.log("chartData value:", data.chartData);
var currentData = JSON.parse((data?.chartData));
this.userData = currentData ["currentData"]
      this.$router.push({ path: "/orgchart2" });
         this.selectedPlan=data;
         this.planOrgChart = true;
         this.isPlanOrgChart=true;
         this.isMainOrgChartPage = false;
         this.showLoading = true;
      // this.$router.push({ path: "/orgchart2" });
    },
  openUpdateDialog(card) {
    this.selectedPlan = card;
             this.isMainOrgChartPage = false;
         this.planOrgChart = true;

  }, 
  getUserListView()
        {
          
          this.showoverlay=true
            let index=this.showdeptView.findIndex(item => item.id === this.showselecteddept.id);
            if(this.showdeptView[index].users.length<=0)
            {
              console.log("deptttt",this.showselecteddept)
              this.$store
              .dispatch("getDepUser",this.showselecteddept.details.externalCode)
              .then((response) => {
              
                this.showdeptView[index].users = response;
                this.showselecteddept=this.showdeptView[index]
                console.log(this.showdeptView[index])
               
        })
            }
            else{
              this.showselecteddept=this.showdeptView[index]
            }
           this.showoverlay=false
            // this.$router.push({ path: "/detailplan" })
          
        },
},

  mounted(){

    this.getUserListView()
  
  }
};
</script>


<style scoped>
.plan-card {
  height: 100%;
  border-radius: 4px;
  /* transition: all 0.2s ease; */
  cursor: pointer;
}

.plan-card:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  transform: translateY(-3px);
}

.plan-title {
  font-size: 16px;
  font-weight: 600;
  line-height: 1.3;
}

.plan-subtitle {
  font-size: 13px;
  color: #6b7280;
}
</style>
