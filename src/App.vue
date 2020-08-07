<template>
  <v-app>
    <core-view></core-view>
  </v-app>
</template>

<script>
export default {
  components: {
    CoreView: () => import("@/components/view"),
  },
};
</script>
<style >
.body #tree > svg {
  background-color: white !important;
}
</style>

