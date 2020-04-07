<template>
  <v-layout row wrap class="search-alumni-wrapper">
    <v-flex xs12 style="padding-top:10px">
      <v-text-field
        v-model="search"
        :loading="isLoading"
        rounded
        dark
        filled
        color="blue-grey lighten-2"
        label="Search User"
        append-icon="search"
        @keyup.enter.native="getData(search)"
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
      search: "",
      isLoading: false,
      searchAlumni: null
    };
  },
  methods: {
    getData(Searchdata) {
      var data = Searchdata;
      console.log(data);
      this.search=""
    }
  }
};
</script>

<style >
.search-alumni-wrapper .v-text-field__details {
  display: none;
}
</style>