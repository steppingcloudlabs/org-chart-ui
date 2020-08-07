<template>
  <v-container class="mt-5 emp-profile-bg">
    <router-view />
  </v-container>
</template>

<script>
export default {
  name: "EmpProfileContainer",
  data: () => {
    return {};
  },
};
</script>

<style>
.emp-profile-bg {
  background: white;
  border-radius: 10px;
}
</style>