<template>
  <v-content class="grey lighten-3" style="padding-left:0px !important">
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
