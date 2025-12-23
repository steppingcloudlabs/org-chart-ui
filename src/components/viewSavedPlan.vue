<template>
   <v-container fluid class="px-6">
 
      <v-row class="pt-5" dense>
       
      
        <!-- Loop through cardsData and create Vuetify cards dynamically -->
        <v-col v-for="(card, index) in allSavedPlans" :key="index" cols="12" md="4">
        <!-- <v-col v-for="(card, index) in showdeptView" :key="index" cols="12" md="4"> -->
          <v-card @click="onPlanClick(card)">
            <v-card-title> <v-icon color="primary" class="mr-2">
      mdi-domain
    </v-icon>{{ card.planName }} ({{card.planId}})</v-card-title>
            <v-card-text>
              {{card.planStatus}}
            </v-card-text>
          
               <v-spacer></v-spacer>

          <!-- Action -->
          <!-- <v-divider></v-divider> -->
          <v-card-actions class="">
            <!-- <v-btn
              text
              color="primary"
              @click="getUserListView(card)"
            >
              View Plan
            </v-btn> -->
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
  data () {
    return {
     
    }
  },
   computed: {
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
    },
    methods:{
            onPlanClick(data){
              console.log("data=",data);
              this.$router.push({ path: "/deptOrgChart" });},

    }
}

</script>
