<template>
<v-navigation-drawer
  right
  temporary
  clipped
  width="420"
  v-model="jobInfo"
  class="mt-7"
  height="100vh"
>
  <v-card flat>
    <v-card-title class="text-h6">
      Job Details
    </v-card-title>

    <v-divider />

    <v-card-text>
      <!-- BASIC INFO -->
<!-- JOB HEADER -->
<div class="mb-4">
  <!-- Job Title -->
  <p class="text-h6 font-weight-bold mb-1">
    {{ jobProfileData?.jobProfile?.name_en_US }}
  </p>

  <!-- Job Req ID & Status -->
  <v-row dense align="center">
    <v-col cols="6">
      <p class="mb-0">
        <strong>Job Req ID:</strong>
        <span class="ml-1">{{ jobProfileData?.jobReqId }}</span>
      </p>
    </v-col>

    <v-col cols="6" class="text-right">
      <v-chip small color="green" dark>
        {{ jobProfileData?.internalStatus }}
      </v-chip>
    </v-col>
  </v-row>
</div>

<v-divider class="my-3" />

       <!-- DESCRIPTION -->
      <div class="job-description">
       <p><strong>  Job Description:</strong></p>
      </div>
      <div v-html="jobProfileData?.jobProfile?.shortDesciptions?.results[0]?.desc_en_US"></div>

      <v-divider class="my-3" />

    <!-- <div class="text-subtitle-1 font-weight-medium mb-1">
        Responsibilities
      </div> -->
      <div v-html="jobProfileData?.jobProfile?.longDesciptions?.results[0]?.desc_en_US"></div>

      <v-divider class="my-3" />
     

      <!-- SKILLS -->
      <div >
       <p><strong>  Required Skills:</strong></p>
      </div>

      <v-chip-group column  v-if="
    jobProfileData &&
    jobProfileData?.jobProfile &&
    jobProfileData?.jobProfile?.competencyContents
  ">
        <v-chip
          v-for="(skill, i) in jobProfileData?.jobProfile?.competencyContents?.results || []"
          :key="i"
          small
          outlined
        >
          {{ skill?.entityNav?.name_en_US }}
        </v-chip>
      </v-chip-group>
    </v-card-text>
  </v-card>
</v-navigation-drawer>

</template>


<script>
export default {
  data() {
    return {
        
    }
    },
    computed:{
        
      jobProfileData: {
      get() {
        return this.$store.getters.getJobProfileData;
        // return true;
      },
      set(data) {
        this.$store.commit("setJobProfileData", data);
      },
    },
      jobInfo: {
      get() {
        return this.$store.getters.getjobInfo;
        // return true;
      },
      set(data) {
        this.$store.commit("setjobInfo", data);
      },
    },
   
    }
}
</script>
<style scoped>
.job-description {
  text-align: justify;
}

</style>