<template>
  <v-overlay
    :value="showLoading"
    
    z-index="2000"
  class="d-flex justify-center align-center"
    opacity="0.5"
  >
  <div style="width: 200px; text-align: center;">
      <v-progress-linear
        indeterminate
        color="amber"
        size="38"
      ></v-progress-linear>
      <!-- <div class="mt-2">Loading...</div> -->
    </div>
  
  </v-overlay>
</template>

<script>
export default {
  computed: {
   showLoading: {
      get() {
        return this.$store.getters.getshowLoading;
     
      },
      set(data) {
        this.$store.commit("setshowLoading", data);
      },
    },
  },
  mounted(){
    console.log("HIIIII from LoaderOverlay",this.showLoading)
  }
};
</script>
