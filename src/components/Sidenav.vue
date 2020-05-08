<template>
<div>
  <v-navigation-drawer permanent height="650px" style="border-right:5px">
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
      <v-treeview selectable selected-color="red" :items="itemVacant" v-model="selectedVacantItem" ></v-treeview>
      <v-treeview selectable selected-color="red" :items="fieldItems" v-model="fieldToDisplay" @input="validateFields"></v-treeview>
      <v-treeview selectable selected-color="red" :items="sortBy" v-model="selectedSortItem" @input="validateSort"></v-treeview>
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
      selectedVacantItem: [],
      selectedSortItem: [],
      fieldToDisplay:[],
      items: [
        {
          id: 999,
          name: "PayGrade",
          children: []
        }
      ],
      itemVacant: [
        {
          id: 999,
          name: "Vacant/Occupied",
          children: [
            { id: 0, name: "Vacant", value: true },
            { id: 1, name: "Occupied", value: false }
          ]
        }
      ],

      fieldItems: [
        {
          id: 999,
          name: "Fields",
          children: [
            { id: 0, name: "PayGrade",value:"userPayGrade" },
            { id: 1, name: "DepartmentId",value:"userDepartmentId" },
            { id: 2, name: "Division",value:"userDivision" },
            { id: 3, name: "businessUnit",value:"businessUnit" },
            { id: 4, name: "Job Level",value:"jobLevel" }
          ]
        }
      ],
      sortBy: [
        {
          id: 999,
          name: "Sort By",
          children: [
            { id: 0, name: "PayGrade", value: "userPayGrade" },
            { id: 1, name: "Cost Center", value: "cost-center" }
          ]
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
    }
  },
  methods: {
    validateSort()
  {
    var count=0
    for(var i=0;i<this.selectedSortItem.length;i++)
    {
      count++
    }
      
      if(count>1)
      {
        this.selectedSortItem.pop()
       setTimeout(function(){alert("You can sort by one field only")},2000); 
      }
  

  },
  validateFields()
  {
    var count=0
    for(var i=0;i<this.fieldToDisplay.length;i++)
    {
      count++
    }
      
      if(count>4)
      {
        this.fieldToDisplay.pop()
       setTimeout(function(){alert("You can select upto 4 fields")},2000); 
      }
  

  },

    userGradeData() {
      console.log(this.items);
      this.items[0].children = this.userPayGrade.map((data, index) => {
        let item = {};
        if (data != undefined) {
          item["id"] = index;
          item["name"] = data;
          return item;
        } else {
          item["id"] = index;
          item["name"] = "undefined";
          return item;
        }
      });
    },
    filterapplied(orgChartData, filterArray, filterType) {
      var newA = orgChartData.filter(function(item) {
        if (!(filterArray.indexOf(item[filterType]) > -1)) {
          return item;
        }
      });

      return newA;
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
      var vacantFilter = [];
      var filteredData = this.chartData;
      var fields=[]
      var sortValue = null;
        for (var i = 0; i < this.fieldToDisplay.length; i++) {
         fields.push(
            this.fieldItems[0].children[this.fieldToDisplay[i]]["value"]
          );
        }
       console.log(fields) 
      if (this.selectedItem.length) {
        for ( i = 0; i < this.selectedItem.length; i++) {
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

      if (this.selectedVacantItem.length) {
        for (i = 0; i < this.selectedVacantItem.length; i++) {
          vacantFilter.push(
            this.itemVacant[0].children[this.selectedVacantItem[i]]["value"]
          );
        }
        filteredData = this.filterapplied(
          filteredData,
          vacantFilter,
          "positionVacant"
        );
      }
      if (this.selectedSortItem.length) {
        console.log(this.selectedSortItem[0]);
        sortValue = this.sortBy[0].children[this.selectedSortItem[0]]["value"];
        console.log(sortValue);
      }

      // var finalData = this.applySort(sortValue, filteredData)
      this.$emit("redraw", { output: filteredData, orderBy: sortValue ,fieldToDisplay:fields});
    },

    reset() {
      this.selectedItem = [];

      this.selectedVacantItem = [];

      this.selectedSortItem = [];
      this.fieldToDisplay=[];

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
