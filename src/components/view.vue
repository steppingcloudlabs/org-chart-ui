<template>
  <v-content class="red lighten-3">
    <div id="core-view">
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </div>
  </v-content>
</template>

<script>
export default {
  name: "CoreView",

  metaInfo() {
    return {
      title: "Vue Material Dashboard by CreativeTim",
    };
  },
 
};
</script>
