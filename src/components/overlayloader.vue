<template>
   
       <v-overlay v-if="showoverlay" z-index="5" > 
       
        <ring-loader  :size="size" :color="color" ></ring-loader>
      </v-overlay>
  
  </template>

<script>
import RingLoader from 'vue-spinner/src/RingLoader.vue'
export default {
    components:
    {
        RingLoader
    },

  data: () => ({
    overlay: false,
    size: '90px',
    color:'#5bc0de'
  }),
  computed: {
   showoverlay: {
      get() {
        return this.$store.getters.getshowoverlay;
        // return true;
      },
      set(data) {
        this.$store.commit("setshowoverlay", data);
      }
    },

}
  
}
</script>
<style>
.v-overlay__scrim{
    opacity: 0.90!important;

}
</style>