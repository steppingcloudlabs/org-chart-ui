<template>
  <v-layout row wrap class="search-alumni-wrapper">
    <v-flex xs12 style="padding-top:10px">
      <v-text-field
        v-model="search"
        :loading="isLoading"
        solo-inverted
        rounded
        filled
        color="#F1F3F4"
        label="Search User"
        append-icon="search"
        @keyup.enter.native="getData()"
      ></v-text-field>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "SearchAlumni",
  data() {
    return {
      alumniList: [],
      isLoading: false,
      searchAlumni: null,
      search:""
    };
  },
  
  
  methods: {
    getData() {
      this.$emit("getUserData", this.search);
      
      // this.$store.dispatch("testcall", data).then(response => {
      //   var nodes = response;
      //   console.log(nodes);
      // nodes = addTags(nodes)
      // for (var i = 0; i < nodes.length; i++) {
      //   getChlidData(nodes[i])
      // }
      // console.log(nodes)
      // orgChartData = nodes
      // getPayGrade(orgChartData)
      // subList("sublist", 0, userPayGrade)
      // // document.getElementById("switch_id").style.visibility = "visible"
      // document.getElementById("mySidebar").style.visibility = "visible"
      // drawOrgChart(orgChartData, null)
      // appendChild(orgChartData)
      // });
    }
  }
};
</script>

<style >
.search-alumni-wrapper .v-text-field__details {
  display: none;
}
</style>