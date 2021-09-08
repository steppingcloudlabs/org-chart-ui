<template>
  <v-app width="100%">
    <core-view></core-view>
    <SnackbarComponent></SnackbarComponent>
  </v-app>
</template>

<script>
import SnackbarComponent from "@/components/snackbar";
export default {
  components: {
    CoreView: () => import("@/components/view"),
    SnackbarComponent
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

