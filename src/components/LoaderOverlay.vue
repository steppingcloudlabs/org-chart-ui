<template>
  <v-overlay
    :value="showLoading"
    app
    z-index="2000"
  
    opacity="0.5"
  >
    <v-progress-circular
   
      indeterminate
      size="64"
      color="amber"
    />
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
