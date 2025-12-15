<template>
  <v-app>
    <core-view></core-view>
    <!-- <overlayloader></overlayloader> -->
  </v-app>
</template>

<script>
//import overlayloader from './components/overlayloader.vue';
export default {

  components: {
    CoreView: () => import("@/components/view"),
    // overlayloader
  },
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

},
   methods:{
    getPaygrade()
    {
        this.$store.dispatch("getAllPaygradeList").then((response) => {
          console.log(response);
         
          })
      
    }
  },
  mounted()
  {
this.getPaygrade()
  }
};
</script>
<style >
.body #tree > svg {
  background-color: white !important;
}
</style>

