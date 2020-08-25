<template>
  <v-layout row wrap class="search-alumni-wrapper">
    <v-flex xs12 style="padding-top:10px">
      <v-autocomplete
        v-model="search"
        :loading="isLoading"
        :items="userList"
        :search-input.sync="searchUser"
        solo-inverted
        rounded
        filled
        label="Begin Your Search"
        append-icon="search"
        item-text="userNav.defaultFullName"
        item-value="userId"
        @change="getData()"
      >
        <template v-slot:item="data">
          <template>
            <v-list-item-content>
              <v-list-item-title v-html="data.item.userNav.defaultFullName"></v-list-item-title>
              <v-list-item-subtitle v-html="data.item.userNav.userId"></v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </template>
      </v-autocomplete>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "SearchAlumni",
  data() {
    return {
      userList: [],
      isLoading: false,
      search: "",
      searchUser: null
    };
  },
  computed: {
    userPayGrade: {
      get() {
        return this.$store.getters.getuserPayGrade;
        // return true;
      },
      set(data) {
        this.$store.commit("setuserPayGrade", data);
      }
    },
     department: {
      get() {
        return this.$store.getters.getdepartment;
        // return true;
      },
      set(data) {
        this.$store.commit("setdepartment", data);
      }
    },
    division: {
      get() {
        return this.$store.getters.getdivision;
        // return true;
      },
      set(data) {
        this.$store.commit("setdivision", data);
      }
    },
  },
  watch: {
    searchUser(val) {
      if (!val || !val.trim()) {
        this.userList = [];
        this.search = "";
        return;
      }
      if (this.isLoading) {
        return;
      }
      this.isLoading = true;
      console.log(this.search);

      let data = val;

      this.$store
        .dispatch("getAllUser", data)
        .then(response => {
          this.userList = response;

          console.log(this.userList);
        })
        .finally(() => (this.isLoading = false));
    }
  },

  methods: {
    getData() {
      this.userPayGrade = [];
      this.department=[];
      this.division=[];
      let searchData = this.search;
      this.search = "";
      let userObj = this.userList.find(element => {
        return searchData == element.userId;
      });
      this.$emit("getUserData", userObj);

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