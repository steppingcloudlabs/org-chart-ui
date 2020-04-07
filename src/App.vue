<template>
  <v-app style="background: rgb(35, 43, 43)">
    
    <core-view></core-view>
  </v-app>
</template>

<script>
export default {
  components: {
   
    CoreView: () => import("@/components/view")
  }
};
</script>
<style >
</style>

