<template>
  <div class="">
    <!-- <v-toolbar class="pt-1 pb-5">
      <v-layout row wrap>
        <v-flex xs3>
          <img src="/assets/hdr_logo.png" style="height: 50px; width:80px; margin-left: 20px;margin-top: 10px;" />
        </v-flex>
        <v-toolbar-title
      class="text-center flex-grow-1"
      v-if="hideAppBar"
    >
      Department List
    </v-toolbar-title>


    <v-btn
      v-if="hideAppBar"
      text
      outlined
      class="ml-auto"
      @click="openDialog()"
    >
      <span>Merge Departments</span>
      <v-icon right>mdi-merge</v-icon>
    </v-btn> -->
    <v-app-bar app flat height="60">
      <!-- Left: Logo -->
      <!-- <v-img
    src="/assets/hdr_logo.png"
    contain
    max-height="50"
    max-width="150"
    class="ml-4"
  /> -->
      <img
        src="/assets/hdr_logo.png"
        style="height: 50px; width: 100px; margin-left: 5px; margin-top: 2px"
      />

      <!-- Center: Title -->
      <v-toolbar-title class="absolute-center font-weight-medium">
        Re-Org
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <!-- {{departmentList}} -->
      <!-- {{departmentSearchText}} -->
    <v-autocomplete
  v-if="!isorgChartPage"
  v-model="departmentSearchText"
  :items="filteredDepartments"
  item-text="name"
  item-value="externalCode"
  placeholder="Search departments"
  outlined
  dense
  hide-details
  clearable
  class="mr-3"
  style="max-width: 260px"
  append-icon="mdi-magnify"
  @click:append="applySearch()"
/>
<!-- <v-text-field
  v-if="!isorgChartPage"
  v-model="departmentSearchText"
  placeholder="Search departments"
  outlined
  dense
  hide-details
  clearable
  class="mr-3"
  style="max-width: 260px"
  append-icon="mdi-magnify"
  @click:append="applySearch"
/> -->


      <!-- Right: Button -->
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-if="!isorgChartPage"
            icon
            color="primary"
            v-bind="attrs"
            v-on="on"
            @click="openDialog()"
          >
            <v-icon>mdi-merge</v-icon>
          </v-btn>
        </template>

        <span>Merge Departments</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-if="!isorgChartPage"
            icon
            color="primary"
            v-bind="attrs"
            v-on="on"
           @click="$emit('open-filter')"
          >
            <v-icon>mdi-filter</v-icon>
          </v-btn>
        </template>

        <span>Filter Departments</span>
      </v-tooltip>
      <v-tooltip bottom v-if="!isorgChartPage && isSavedPlanpage"
>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            color="primary"
            v-bind="attrs"
            v-on="on"
           
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>

        <span>Create Plan</span>
      </v-tooltip>
      <!-- {{isMainOrgChartPage}} -->
      <v-tooltip bottom             v-if="isMainOrgChartPage"
>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            color="primary"
            v-bind="attrs"
            v-on="on"
            @click="saveplan()"
           
          >
            <v-icon>mdi-content-save</v-icon>
          </v-btn>
        </template>

        <span>Save Draft</span>
      </v-tooltip>
      <v-tooltip bottom             v-if="isPlanOrgChart"
>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            color="primary"
            v-bind="attrs"
            v-on="on"
            @click="saveplan()"
           
          >
            <v-icon>mdi-content-save</v-icon>
          </v-btn>
        </template>

        <span>Save Plan</span>
      </v-tooltip>
      <v-tooltip bottom             v-if="isPlanOrgChart"
>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            color="primary"
            v-bind="attrs"
            v-on="on"
            @click="sendForApproval()"
           
          >
            <v-icon>mdi-comment-account</v-icon>
          </v-btn>
        </template>

        <span>Send For approval</span>
      </v-tooltip>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    // date: new Date().toISOString().substr(0, 10),
    // menu: false,
    // search: "",
    departmentList: [],
    searchText: "",
  selectedDepartment: null
  }),

  components: {},
  computed: {
     isPlanOrgChart: {
      get() {
        return this.$store.getters.getisPlanOrgChart;
        // return true;
      },
      set(data) {
        this.$store.commit("setisPlanOrgChart", data);
      },
    },
     saveDraftDialog: {
      get() {
        return this.$store.getters.getsaveDraftDialog;
        // return true;
      },
      set(data) {
        this.$store.commit("setsaveDraftDialog", data);
      },
    },
     isMainOrgChartPage: {
      get() {
        return this.$store.getters.getisMainOrgChartPage;
        // return true;
      },
      set(data) {
        this.$store.commit("setisMainOrgChartPage", data);
      },
    },
     isSavedPlanpage: {
      get() {
        return this.$store.getters.getisSavedPlanpage;
        // return true;
      },
      set(data) {
        this.$store.commit("setisSavedPlanpage", data);
      },
    },
     departmentSearchText: {
    get() {
      return this.$store.getters.getDepartmentSearchText
    },
    set(data) {
      this.$store.commit("setDepartmentSearchText", data)
    }
  },
    filteredDepartments() {
    if (!this.searchText) return this.departmentList

    return this.departmentList.filter(dep =>
      dep.name
        .toLowerCase()
        .startsWith(this.searchText.toLowerCase())
    )
  },
    isorgChartPage: {
      get() {
        return this.$store.getters.getisorgChartPage;
        // return true;
      },
      set(data) {
        this.$store.commit("setisorgChartPage", data);
      },
    },
  
    filterDrawer: {
      get() {
        return this.$store.getters.getfilterDrawer;
        // return true;
      },
      set(data) {
        this.$store.commit("setfilterDrawer", data);
      },
    },

    hideAppBar() {
      return this.$route.meta.hideAppBar === true;
    },
    inputDate: {
      get() {
        return this.$store.getters.getinputDate;
        // return true;
      },
      set(data) {
        this.$store.commit("setinputDate", data);
      },
    },
    showLoading: {
      get() {
        return this.$store.getters.getshowLoading;
        // return true;
      },
      set(data) {
        this.$store.commit("setshowLoading", data);
      },
    },
    showNavDrawer: {
      get() {
        return this.$store.getters.getshownavDrawer;
        // return true;
      },
      set(data) {
        this.$store.commit("setshownavDrawer", data);
      },
    },
    showFilter: {
      get() {
        return this.$store.getters.getshowFilter;
        // return true;
      },
      set(data) {
        this.$store.commit("setshowFilter", data);
      },
    },
    showmergedialog: {
      get() {
        return this.$store.getters.getshowmergedialog;
        // return true;
      },
      set(data) {
        this.$store.commit("setshowmergedialog", data);
      },
    },
  },

  methods: {
  
    applyFilter() {
      console.log("inside applyfilter");
      this.filterDrawer = true;
    },
    saveplan(){
 this.$store.commit("TRIGGER_SAVE");
 this.openSaveDraftDialog();
    },
    openSaveDraftDialog() {
      console.log(" this.saveDraftDialog=", this.saveDraftDialog);
      this.saveDraftDialog = true;
    },
    openDialog() {
      this.showmergedialog = true;
    },
    getDepartment() {

  this.$store.dispatch("getAllDepartmentList").then((response) => {
          console.log("response.d.results",response.d.results);
          this.departmentList = response.d.results;
          // for (let i = 0; i < response.d.results.length; i++) {
          //  // console.log(g.selectedSearchField[i])
          //   g.dropdown_data.push(response.d.results[i].externalCode) ;
          // }
         
        });
    },
    getUserData(data) {
      this.showFilter = false;
      // this.$router.push({ path: "/" });
      var date1 = new Date(this.inputDate).getTime();
      this.showLoading = true;
      if (data.category == "People") {
        this.$store
          .dispatch("testcall", {
            userid: data.userId,
            position: data.position,
            date: date1,
          })
          .then((response) => {
            if (response) {
              console.log("testing");
              this.showLoading = false;
              this.$router.push({ path: "/orgchart2" });
            }
          });
      } else {
        this.$store
          .dispatch("orgCategory", {
            type: data.category,       //department- hard code
            typeValue: data.value,     //deptId
            date: date1,               //currentDate
          })
          .then((response) => {
            if (response) {
              console.log("testing");
              this.showLoading = false;
              this.$router.push({ path: "/orgchart2" });
            }
          });
      }
    },
  },
  mounted(){
    this.getDepartment();
  }
};
</script>

<style>
/* Fix coming in v2.0.8 */
#core-app-bar {
  width: auto;
}
.absolute-center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: #1976d2;
}

.v-main {
  padding: 17px 0px 0px !important;
}
#core-app-bar a {
  text-decoration: none;
}
</style>
