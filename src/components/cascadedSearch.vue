<template>
  <v-row>
     <v-col cols="12" sm="3">
       <v-select
        :items="dropdown_data"
        item-text="name"
        item-value="id"
        label="Select BU"
        v-model="outertemp"
        :append-icon="isLoading?'mdi-spin mdi-loading':'mdi-menu-down'"
        @change="RefreshGrid"
      ></v-select>
    </v-col>
    <v-col cols="12" sm="3" >
      <v-select
        :items="dropdown_font"
        item-text="name"
        item-value="id"   
        @change="getlocation"
        label="Select Cluster"
        :append-icon="isLoading1?'mdi-spin mdi-loading':'mdi-menu-down'"
        v-model="outerSelect"
      ></v-select>
    </v-col>

     

    <v-col cols="12" sm="4" >
     
    <v-select
        :items="dropdown_font2"
        item-text="name"
        item-value="id"
       
       :append-icon="isLoading2?'mdi-spin mdi-loading':'mdi-menu-down'"
        label="Select Location"
        v-model="innerSelect"
      ></v-select>
    </v-col>
    <v-col cols="12" sm="2">
      <v-btn depressed color="primary" @click="getOrgData"><v-icon>search</v-icon></v-btn>
    </v-col>
  </v-row>
</template>

<script>

export default {
  data: () => ({
    searchQuery: "",
    isTyping: false,
    userList: [],
    isLoading: false,
    isLoading1: false,
    isLoading2: false,

    searchUser: null,
    search: "",
    outerSelect: "",
    innerSelect: "",
    dropdown_data: [],
    dropdown_font: [],
    dropdown_font2: [],
    outertemp:"",
     timeout: null
  }),
  beforeMount()
  {
     let g = this;
     this.isLoading=true
     this.$store.dispatch("getAllBusinessUnitList").then((response) => {
         
          g.dropdown_data = response.d.results.map(function (item) {
            let obj = {};
            obj["name"] = item.name;
            obj["id"] = item.externalCode;
            return obj;
          });
           this.isLoading=false 
        });
      
  },
  methods: {
    RefreshGrid() {
      let g = this;
      g.dropdown_font = [];
      this.isLoading1=true
      if (this.outertemp!="") {
        console.log(encodeURIComponent(this.outertemp))
        this.$store.dispatch("getAllClusterListFilter",{"filter":encodeURIComponent(this.outertemp)}).then((response) => {
         
          g.dropdown_font = response.d.results.map(function (item) {
            let obj = {};
            obj["name"] = item.name;
            obj["id"] = item.externalCode;
            return obj;
          });
           this.isLoading1=false
        });
      }
      
    },
    getlocation() {
      let g = this;
      g.dropdown_font2= [];
      this.isLoading2=true
      if (this.outerSelect!="") {
        console.log(encodeURIComponent(this.outerSelect))
        this.$store.dispatch("getLocationListFilter",{"filter":encodeURIComponent(this.outerSelect)}).then((response) => {
         
          g.dropdown_font2 = response.d.results.map(function (item) {
            let obj = {};
            obj["name"] = item.name;
            obj["id"] = item.externalCode;
            return obj;
          });
           this.isLoading2=false
        });
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
     
      
       //let searchData = this.innerSelect;
       let userObj={}
     
     
        userObj["value"]=this.innerSelect
      
        userObj["category"]="location"
        userObj["template"]=this.outertemp
      
       this.$emit("getUserData", userObj);
    },

    searchh(val)
    {
      
                this.$store.dispatch("getAllUser", val).then((response) => {
                 this.userList = response;
                 })
                
           

          },
           clearEntries() {
      
      this.userList = []
    },
    
    
    
    fetchEntriesDebounced(val) {
      clearTimeout(this._searchTimerId)
      this._searchTimerId = setTimeout(() => {
        this.searchh(val)
      }, 500) /* 500ms throttle */
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
      if(this.isLoading)
      {
        return
      }

      this.isLoading=true
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