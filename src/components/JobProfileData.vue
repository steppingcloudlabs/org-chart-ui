<template>
  <div>
    <!-- STACKED DRAWERS -->
    <v-navigation-drawer
  v-for="(drawer, index) in drawers"
  :key="drawer.id"
  right
  absolute
  clipped
  width="420"
  :value="drawer.open"
  :style="drawerStyle(index)"
 
 
  class="mt-7 stacked-drawer"
>

      <v-card flat>
        <!-- HEADER -->
        <v-card-title class="text-h6 d-flex justify-space-between">
          Job Details
          <v-btn icon @click="closeDrawer(index)">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-divider />
  <div
      class="drawer-body"
      ref="drawerBody"
      @scroll="syncScroll"
    >
        <!-- BODY -->
        <v-card-text>
          <!-- Job Title -->
          <p class="text-h6 font-weight-bold mb-1">
            {{ drawer.jobProfileData?.jobProfile?.name_en_US }}
          </p>

          <!-- Job Req & Status -->
          <v-row dense align="center">
            <v-col cols="6">
              <strong>Job Req ID:</strong>
              {{ drawer.jobProfileData?.jobReqId }}
            </v-col>

            <v-col cols="6" class="text-right">
              <v-chip small color="green" dark>
                {{ drawer.jobProfileData?.internalStatus }}
              </v-chip>
            </v-col>
          </v-row>

          <v-divider class="my-3" />

          <!-- Description -->
          <p><strong>Job Description:</strong></p>
          <div
            v-html="drawer.jobProfileData?.jobProfile?.shortDesciptions?.results?.[0]?.desc_en_US"
          />

          <v-divider class="my-3" />

          <div
            v-html="drawer.jobProfileData?.jobProfile?.longDesciptions?.results?.[0]?.desc_en_US"
          />

          <v-divider class="my-3" />

          <!-- Skills -->
          <p><strong>Required Skills:</strong></p>
          <v-chip-group column>
            <v-chip
              v-for="(skill, i) in drawer.jobProfileData?.jobProfile?.competencyContents?.results || []"
              :key="i"
              small
              outlined
            >
              {{ skill?.entityNav?.name_en_US }}
            </v-chip>
          </v-chip-group>
        </v-card-text>
  </div>
      </v-card>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "JobProfileDrawerStack",

  data() {
    return {
      drawers: [] // STACK of drawers
    };
  },

  methods: {
     syncScroll(event) {
    const scrollTop = event.target.scrollTop;

    // sync scroll for all drawers
    this.$refs.drawerBody.forEach(el => {
      if (el !== event.target) {
        el.scrollTop = scrollTop;
      }
    });
  },
    // Call this when clicking "Show Profile"
 openDrawer(jobProfileData) {
  console.log("this.drawers=",this.drawers)
  console.log("this.jobProfileData=",this.jobProfileData)
  const exists = this.drawers.find(
    d => d?.jobProfileData?.jobReqId === jobProfileData?.jobReqId
  );
  if (exists) return;

  this.drawers.push({
    id: `${jobProfileData.jobReqId}-${Date.now()}`,
    jobProfileData,
    open: true
  });
},



    closeDrawer(index) {
      this.drawers.splice(index, 1);
    },

    drawerStyle(index) {
      return {
        right: `${index * 420}px`,
        zIndex: 2000 + index
      };
    }
  },
  watch: {
  drawers(val) {
    console.log("OPEN DRAWERS:", val.length);
  }
}
};
</script>
<style scoped>
.drawer-body {
  height: calc(100vh - 120px); /* header height compensation */
  overflow-y: auto;
}

.v-navigation-drawer {
  overflow: hidden !important; /* disable native drawer scroll */
}

.stacked-drawer {
  transition: right 0.3s ease;
}

.job-description {
  text-align: justify;
}
</style>
