<template>
  <div>
    <v-navigation-drawer permanent height="650px" style="border-right:5px;width: 100%;">
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-icon>mdi-filter</v-icon>
        </v-list-item-avatar>

        <v-list-item-title>Filter</v-list-item-title>
      </v-list-item>
      <div class="text-center">
        <v-btn
          class="mr-2 mb-2"
          style="font-size:10px"
          rounded
          color="primary"
          dark
          @click="ApplyFilter"
        >Apply</v-btn>
        <v-btn
          class="ml-2 mb-2"
          style="font-size:10px"
          rounded
          color="secondary"
          dark
          @click="reset"
        >Reset</v-btn>
      </div>

      <v-divider></v-divider>

      <v-container fluid style="font-size:12px">
        <v-treeview selectable selected-color="red" :items="items" v-model="selectedItem"></v-treeview>
                <v-treeview selectable selected-color="red" :items="itemsdepartment" v-model="selecteddepItem"></v-treeview>
                  <v-treeview selectable selected-color="red" :items="itemsdivision" v-model="selecteddivItem"></v-treeview>
        <v-treeview
          selectable
          selected-color="red"
          :items="itemVacant"
          v-model="selectedVacantItem"
          @input="validateVacant"
        ></v-treeview>
        <v-treeview
          selectable
          selected-color="red"
          :items="fieldItems"
          v-model="fieldToDisplay"
          @input="validateFields"
        ></v-treeview>
        <v-treeview
          selectable
          selected-color="red"
          :items="sortBy"
          v-model="selectedSortItem"
          @input="validateSort"
        ></v-treeview>
      </v-container>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
      mini: true,
      selectedItem: [],
      selecteddepItem: [],
      selecteddivItem: [],
      selectedVacantItem: [],
      selectedSortItem: [],
      fieldToDisplay: [0, 1, 2, 3],
      items: [
        {
          id: 999,
          name: "Pay Grade",
          children: []
        }
      ],
       itemsdepartment: [
        {
          id: 999,
          name: "Department",
          children: []
        }
      ],
      itemsdivision: [
        {
          id: 999,
          name: "Division",
          children: []
        }
      ],
      itemVacant: [
        {
          id: 999,
          name: "Filter",
          children: [
            { id: 0, name: "Vacant", value: "Vacant" },
            { id: 1, name: "Occupied", value: "Occupied" },
            { id: 2, name: "Resigned", value: "Resigned" }
          ]
        }
      ],

      fieldItems: [
        {
          id: 999,
          name: " Display Fields",
          children: [
            { id: 0, name: "Pay Grade", value: "userPayGrade" },
            { id: 1, name: "Department", value: "userDepartmentName" },
            { id: 2, name: "Division", value: "userDivisionName" },
            { id: 3, name: "Business Unit", value: "businessUnit" },
            { id: 4, name: "Location", value: "location" }
          ]
        }
      ],
      sortBy: [
        {
          id: 999,
          name: "Sort By",
          children: [{ id: 0, name: "Pay Grade", value: "userPayGrade" }]
        }
      ]
    };
  },
  props: {
    chartData: {
      type: Array,
      default: null
    }
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
    showNavDrawer: {
      get() {
        return this.$store.getters.getshownavDrawer;
        // return true;
      },
      set(data) {
        this.$store.commit("setshownavDrawer", data);
      }
    }
  },
  watch: {
    userPayGrade() {
      this.userGradeData();
    },
    division() {
      this.divData();
    },
     department() {
      this.depData();
    }
  },

  methods: {
    validateVacant() {
      var count = 0;
      for (var i = 0; i < this.selectedVacantItem.length; i++) {
        count++;
      }
      console.log(this.selectedVacantItem);
      if (count > 1) {
        this.selectedVacantItem.pop();
        setTimeout(function() {
          alert("You can Filter by one field only");
        }, 1000);
      }
    },
    validateSort() {
      var count = 0;
      for (var i = 0; i < this.selectedSortItem.length; i++) {
        count++;
      }

      if (count > 1) {
        this.selectedSortItem.pop();
        setTimeout(function() {
          alert("You can sort by one field only");
        }, 1000);
      }
    },
    validateFields() {
      var count = 0;
      for (var i = 0; i < this.fieldToDisplay.length; i++) {
        count++;
      }

      if (count > 4) {
        this.fieldToDisplay.pop();
        setTimeout(function() {
          alert("You can select upto 4 fields");
        }, 1000);
      }
    },

    userGradeData() {
      console.log(this.items);
      this.items[0].children = this.userPayGrade.map((data, index) => {
        let item = {};
        if (data != undefined) {
          item["id"] = index;
          item["name"] = data;
          this.selectedItem.push(index);
          return item;
        } else {
          item["id"] = index;
          item["name"] = undefined;
          this.selectedItem.push(index);
          return item;
        }
      });
      console.log(this.selectedItem);
    },
     divData() {
      console.log(this.itemsdivision);
      this.itemsdivision[0].children = this.division.map((data, index) => {
        let item = {};
        if (data != undefined) {
          item["id"] = index;
          item["name"] = data;
          this.selecteddivItem.push(index);
          return item;
        } else {
          item["id"] = index;
          item["name"] = undefined;
          this.selecteddivItem.push(index);
          return item;
        }
      });
      console.log(this.selecteddivItem);
    },
     depData() {
      console.log(this.itemsdepartment);
      this.itemsdepartment[0].children = this.department.map((data, index) => {
        let item = {};
        if (data != undefined) {
          item["id"] = index;
          item["name"] = data;
          this.selecteddepItem.push(index);
          return item;
        } else {
          item["id"] = index;
          item["name"] = undefined;
          this.selecteddepItem.push(index);
          return item;
        }
      });
      console.log(this.selectedItem);
    },
    filterapplied(orgChartData, filterArray, filterType) {
      var test = [];
     orgChartData.filter(function(item) {
        if (
          filterArray.indexOf(item[filterType]) > -1 ||
          item["isRoot"] == true
        ) {
         test.push(item);
        }
       else{
          var dummy={}
           var tags=[]
           dummy.id=item.id
           dummy.pid=item.pid
           tags.push("dummy")
           dummy.tags=tags
         test.push(dummy)
       }
           
        
      });

      return test;
    },
    filterappliedTags(orgChartData, filterArray, filterType) {
      var test = [];
     
      orgChartData.filter(function(item) {
         var flag=0
        for (var i = 0; i < item[filterType].length; i++) {
          if (
            filterArray.indexOf(item[filterType][i]) > -1 ||
            item["isRoot"] == true
          ) {
            flag=1
            break
          }
           
        }
        if(flag==0)
        {
           var dummy={}
           var tags=[]
           dummy.id=item.id
           dummy.pid=item.pid
           tags.push("dummy")
           dummy.tags=tags
           test.push(dummy)
        }
        else
        {
          test.push(item)
        }
      });

      return test;
    },

    applySort(sortValue, newB) {
      if (sortValue == "userPayGrade") {
        newB = newB.map(function(element) {
          if (this.userPayGrade.indexOf(element.userPayGrade) > -1) {
            element["orderByPayGrade"] = this.userPayGrade.indexOf(
              element.userPayGrade
            );
          } else {
            element["orderByPayGrade"] = -1;
          }

          return element;
        });
      }
      return newB;
    },

    ApplyFilter() {
      var gradeFilter = [];
      var divFilter=[];
      var depFilter=[];
      var vacantFilter = [];
      var filteredData = this.chartData;
      var fields = [];
      var sortValue = null;
      for (var i = 0; i < this.fieldToDisplay.length; i++) {
        fields.push(
          this.fieldItems[0].children[this.fieldToDisplay[i]]["value"]
        );
      }
      console.log(fields);
      if (this.selectedItem.length) {
        for (i = 0; i < this.selectedItem.length; i++) {
          gradeFilter.push(
            this.items[0].children[this.selectedItem[i]]["name"]
          );
        }
        console.log(gradeFilter);
        filteredData = this.filterapplied(
          this.chartData,
          gradeFilter,
          "userPayGrade"
        );
        console.log(filteredData);
      }

      if (this.selecteddepItem.length) {
        for (i = 0; i < this.selecteddepItem.length; i++) {
          depFilter.push(
            this.itemsdepartment[0].children[this.selecteddepItem[i]]["name"]
          );
        }
        console.log(depFilter);
        filteredData = this.filterapplied(
          filteredData,
         depFilter,
          "userDepartmentName"
        );
        console.log(filteredData);
      }
      if (this.selecteddivItem.length) {
        for (i = 0; i < this.selecteddivItem.length; i++) {
          divFilter.push(
            this.itemsdivision[0].children[this.selecteddivItem[i]]["name"]
          );
        }
        console.log(divFilter);
        filteredData = this.filterapplied(
          filteredData,
          divFilter,
          "userDivisionName"
        );
        console.log(filteredData);
      }



      if (this.selectedVacantItem.length) {
        for (i = 0; i < this.selectedVacantItem.length; i++) {
          vacantFilter.push(
            this.itemVacant[0].children[this.selectedVacantItem[i]]["value"]
          );
        }
        filteredData = this.filterappliedTags(
          filteredData,
          vacantFilter,
          "tags"
        );
      }
      if (this.selectedSortItem.length) {
        console.log(this.selectedSortItem[0]);
        sortValue = this.sortBy[0].children[this.selectedSortItem[0]]["value"];
        console.log(sortValue);
      }

      // var finalData = this.applySort(sortValue, filteredData)
      this.$emit("redraw", {
        output: filteredData,
        orderBy: sortValue,
        fieldToDisplay: fields
      });
    },

    reset() {
      this.selectedItem = [999];

      this.selectedVacantItem = [];

      this.selectedSortItem = [];
      this.fieldToDisplay = [0, 1, 2, 3];

      this.$emit("reset");
    }
  },
  mounted() {
    this.userGradeData();
  }
};
</script>
<style >
.arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  margin-right: 15px;
}

.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}
</style>
