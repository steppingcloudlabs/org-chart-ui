<template>
  <v-app width="100%">
    <core-view></core-view>
  </v-app>
</template>

<script>
export default {
  components: {
    CoreView: () => import("@/components/view"),
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

