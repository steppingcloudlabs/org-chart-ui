<template>
  <v-row>
     <v-col cols="12" sm="2" v-if="$route.path == '/'">
       <v-select
        :items="dropdown_font1"
        item-text="text"
        item-value="value"
        label="Select template"
        v-model="outertemp"
      ></v-select>
    </v-col>
    <v-col cols="12" sm="4" v-if="$route.path == '/'">
      <v-select
        :items="dropdown_font"
        item-text="text"
        item-value="value"
       
        @change="RefreshGrid"
        label="Select Category"
        v-model="outerSelect"
      ></v-select>
    </v-col>

     <v-col cols="12" sm="5" v-else>
      <v-select
        :items="dropdown_font"
        item-text="text"
        item-value="value"
       
        @change="RefreshGrid"
        label="Select Category"
        v-model="outerSelect"
      ></v-select>
    </v-col>

    <v-col cols="12" sm="4" v-if="outerSelect!='People'">
      <v-select
        :items="dropdown_data"
        item-text="name"
        item-value="id"
        label="Select"
        v-model="innerSelect"
        :loading="isLoading"
        :append-icon="isLoading?'mdi-spin mdi-loading':'mdi-menu-down'"
        loader-height="3"
      ></v-select>
    </v-col>
    <v-col cols="12" sm="4" v-else>
      <v-autocomplete
        v-model="innerSelect"
        :loading="isLoading"
        :items="userList"
        :append-icon="isLoading?'mdi-spin mdi-loading':'mdi-menu-down'"
        :search-input.sync="searchUser"
        label="Enter UserId"
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
    </v-col>
    <v-col cols="12" sm="2">
      <v-btn depressed color="primary" @click="getOrgData">Search</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    userList: [],
    isLoading: false,

    searchUser: null,
    search: "",
    outerSelect: "",
    innerSelect: "",
    dropdown_data: [],
    dropdown_font: [{text:"Business Unit",value:"businessUnit"},{text:"Department",value:"department"},{text:"Cluster",value:"cluster"},{text:"Location",value:"location"},{text:"People",value:"People"}],
    dropdown_font1: [{text:"Template1",value:"temp1"},{text:"Template2",value:"temp2"}],
    outertemp:"temp1"
  }),
  methods: {
    RefreshGrid() {
      let g = this;
      g.dropdown_data = [];
      this.isLoading=true
      if (this.outerSelect === "businessUnit") {
        this.$store.dispatch("getAllBusinessUnitList").then((response) => {
         
          g.dropdown_data = response.d.results.map(function (item) {
            let obj = {};
            obj["name"] = item.name;
            obj["id"] = item.externalCode;
            return obj;
          });
           this.isLoading=false
        });
      }
      if (this.outerSelect === "division") {
        this.$store.dispatch("getAllDivisionList").then((response) => {
         
          // for (let i = 0; i < response.d.results.length; i++) {
          //  // console.log(g.selectedSearchField[i])
          //   g.dropdown_data.push(response.d.results[i].externalCode) ;
          // }
          g.dropdown_data = response.d.results.map(function (item) {
            let obj = {};
            obj["name"] = item.name;
            obj["id"] = item.externalCode;
            return obj;
          });
          this.isLoading=false
        });
      }
      if (this.outerSelect === "department") {
        this.$store.dispatch("getAllDepartmentList").then((response) => {
         
          // for (let i = 0; i < response.d.results.length; i++) {
          //  // console.log(g.selectedSearchField[i])
          //   g.dropdown_data.push(response.d.results[i].externalCode) ;
          // }
          g.dropdown_data = response.d.results.map(function (item) {
            let obj = {};
            obj["name"] = item.name;
            obj["id"] = item.externalCode;
            return obj;
          });
          this.isLoading=false
        });
      }

        if (this.outerSelect === "cluster") {
        this.$store.dispatch("getAllClusterList").then((response) => {
         
          // for (let i = 0; i < response.d.results.length; i++) {
          //  // console.log(g.selectedSearchField[i])
          //   g.dropdown_data.push(response.d.results[i].externalCode) ;
          // }
          g.dropdown_data = response.d.results.map(function (item) {
            let obj = {};
            obj["name"] = item.name;
            obj["id"] = item.externalCode;
            return obj;
          });
          this.isLoading=false
        });
      }
      if (this.outerSelect === "location") {
        this.$store.dispatch("getLocationList").then((response) => {

          // for (let i = 0; i < response.d.results.length; i++) {
          //  // console.log(g.selectedSearchField[i])
          //   g.dropdown_data.push(response.d.results[i].externalCode) ;
          // }
          g.dropdown_data = response.d.results.map(function (item) {
            let obj = {};
            obj["name"] = item.name;
            obj["id"] = item.externalCode;
            return obj;
          });
          this.isLoading=false
        });
      }

      if (this.outerSelect === "People") {
        // this.$store.dispatch("getAllUser").then((response) => {
        //   console.log(response);
        //   // for (let i = 0; i < response.d.results.length; i++) {
        //   //  // console.log(g.selectedSearchField[i])
        //   //   g.dropdown_data.push(response.d.results[i].externalCode) ;
        //   // }
        //   g.dropdown_data=response.d.results.map(function(item){
        //     let obj={}
        //     obj["name"]=item.name
        //     obj["id"]=item.externalCode
        //     return obj
        //   })
        // });
      }
    },
    getData() {
      this.userPayGrade = [];
      this.department = [];
      this.division = [];
     // let searchData = this.search;
      this.search = "";
      // let userObj = this.userList.find((element) => {
      //   return searchData == element.userId;
      // });
      //this.$emit("getUserData", userObj);
      //userObj["category"]=this.outerSelect
      //console.log(userObj);
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
    },
    getOrgData() {
     
      
       let searchData = this.innerSelect;
       let userObj={}
     
      if (this.outerSelect == "People") {

         userObj = this.userList.find((element) => {
          return searchData == element.userId;
        });
        
      } else {
        userObj["value"]=this.innerSelect
      }
        userObj["category"]=this.outerSelect
        userObj["template"]=this.outertemp
      
       this.$emit("getUserData", userObj);
    },
  },
  computed: {
    userPayGrade: {
      get() {
        return this.$store.getters.getuserPayGrade;
        // return true;
      },
      set(data) {
        this.$store.commit("setuserPayGrade", data);
      },
    },
    department: {
      get() {
        return this.$store.getters.getdepartment;
        // return true;
      },
      set(data) {
        this.$store.commit("setdepartment", data);
      },
    },
    division: {
      get() {
        return this.$store.getters.getdivision;
        // return true;
      },
      set(data) {
        this.$store.commit("setdivision", data);
      },
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


      let data = val;

      this.$store
        .dispatch("getAllUser", data)
        .then((response) => {
          this.userList = response;

         
        })
        .finally(() => (this.isLoading = false));
    },
  },
};
</script>