<template>
  <v-container fluid class="px-6">
    <v-row class="pt-5" dense>
      <!-- Loop through cardsData and create Vuetify cards dynamically -->
      <v-col
        v-for="(card, index) in allSavedPlans"
        :key="index"
        cols="12"
        md="4"
      >
        <!-- <v-col v-for="(card, index) in showdeptView" :key="index" cols="12" md="4"> -->
        <v-card @click="onPlanClick(card)">
          <v-card-title>
            <v-icon color="primary" class="mr-2"> mdi-domain </v-icon
            >{{ card.planName }} ({{ card.planId }})</v-card-title
          >
          <v-card-text>
            {{ card.planStatus }}
          </v-card-text>

          <v-spacer></v-spacer>

          <!-- Action -->
          <!-- <v-divider></v-divider> -->
          <v-card-actions class="">
            <v-btn text color="primary" @click="openUpdateDialog(card)">
              Edit Plan
            </v-btn>
            <!-- <v-btn
              text
              color="primary"
              @click="OpenViewPlanPage()"
             
            >
              View Saved Plan
            </v-btn> -->
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
      }
  },
  methods: {
    onPlanClick(data) {
      console.log("data=", data);
var currentData = JSON.parse((data?.chartData));
this.userData = currentData ["currentData"]
      this.$router.push({ path: "/orgchart2" });
         this.selectedPlan=data;
         this.planOrgChart = true;
         this.isPlanOrgChart=true;
      // this.$router.push({ path: "/orgchart2" });
    },
    openUpdateDialog(card) {
      console.log("card data in openUpdateDialog=", card);
      this.selectedPlan=card;
      // this.saveDraftDialog= true;
     

    },
  },
};
</script>
