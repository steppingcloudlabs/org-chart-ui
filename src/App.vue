<template>
  <v-app>
    <v-main>
    <core-view></core-view></v-main>
<div  v-if="showLoading">
    <LoaderOverlay></LoaderOverlay>

<!-- <Filter v-model="filterDrawer"></Filter> -->
    </div>
    <!-- <overlayloader></overlayloader> -->
  </v-app>
</template>

<script>
//import overlayloader from './components/overlayloader.vue';
import LoaderOverlay from './components/LoaderOverlay.vue';
// import Filter from './components/Sidenav.vue';
export default {

  components: {
    CoreView: () => import("@/components/view"),
    LoaderOverlay,
    // Filter
    // overlayloader
  },
  computed: {
       filterDrawer: {
      get() {
        return this.$store.getters.getfilterDrawer;
        // return true;
      },
      set(data) {
        this.$store.commit("setfilterDrawer", data);
      },
    },
     showLoading: {
      get() {
        return this.$store.getters.getshowLoading;
        // return true;
      },
      set(data) {
        this.$store.commit("setshowLoading", data);
      },
    },
  //  showoverlay: {
  //     get() {
  //       return this.$store.getters.getshowoverlay;
  //       // return true;
  //     },
  //     set(data) {
  //       this.$store.commit("setshowoverlay", data);
  //     }
  //   },

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

