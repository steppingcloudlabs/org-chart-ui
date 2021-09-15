<template>
  <div class="grey lighten-4">
   
      
      <div class="text-center pt-2">
        <v-btn
          class="mr-2 mb-2"
          style="font-size:10px"
         
          color="primary"
          dark
          @click="ApplyFilter"
        >Apply</v-btn>
        <v-btn
          class="ml-2 mb-2"
          style="font-size:10px"
          
          color="secondary"
          dark
          @click="reset"
        >Reset</v-btn>
      </div>

      <v-divider></v-divider>

      <v-container fluid style="font-size:12px">
        
        <v-treeview selectable selected-color="red" :items="items" v-model="selectedItem"></v-treeview>
        <v-treeview selectable selected-color="red" :items="itemsImage" v-model="selectedImage" @input="validate(selectedImage)"></v-treeview>
                <!-- <v-treeview selectable selected-color="red" :items="itemsdepartment" v-model="selecteddepItem"></v-treeview>
                  <v-treeview selectable selected-color="red" :items="itemsdivision" v-model="selecteddivItem"></v-treeview>
                     <v-treeview selectable selected-color="red" :items="itemsBU" v-model="selectedBUItem"></v-treeview>
                      <v-treeview selectable selected-color="red" :items="itemsLocation" v-model="selectedLocationItem"></v-treeview> -->
        <v-treeview
          selectable
          selected-color="red"
          :items="itemVacant"
          v-model="selectedVacantItem"
          @input="validate(selectedVacantItem)"
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
          @input="validate(selectedSortItem)"
        ></v-treeview>
        <v-treeview
          selectable
          selected-color="red"
          :items="viewItem"
          v-model="selectedView"
           @input="validate(selectedView)"
        ></v-treeview>
        <v-treeview
          selectable
          selected-color="red"
          :items="displayItem"
          v-model="selectedDisplay"
           @input="validate(selectedDisplay)"
        ></v-treeview>
      </v-container>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
      mini: true,
      selectedImage:[0],
      selectedView:[0],
      selectedItem: [],
      selecteddepItem: [],
      selecteddivItem: [],
      selectedVacantItem: [2],
      selectedSortItem: [],
      selectedBUItem:[],
       selectedLocationItem:[],
      fieldToDisplay: [0, 1, 2, 3,4],
      selectedDisplay:[2],

      viewItem:[
          {
          id: 999,
          name: "View",
          children: [ { id: 0, name: "Regular", value: "Regular" },
            { id: 1, name: "Level Wise", value: "LevelWise" },]
        }

      ],
       itemsImage:[
          {
          id: 999,
          name: "Image filter",
          children: [ { id: 0, name: "show Image", value: "image" },
            { id: 1, name: "hide image", value: "hide" },]
        }

      ],

       displayItem:[
          {
          id: 999,
          name: "Display type",
          children: [ { id: 0, name: "Direct", value: "Direct" },
            { id: 1, name: "Functional", value: "Indirect" },
            { id: 2, name: "Both", value: "all" },]
        }

      ],

      items: [
        {
          id: 999,
          name: "Band",
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
      itemsBU: [
        {
          id: 999,
          name: "Business Unit",
          children: []
        }
      ],
      itemsLocation: [
        {
          id: 999,
          name: "Location",
          children: []
        }
      ],
      itemVacant: [
        {
          id: 999,
          name: " Status Filter",
          children: [
            { id: 0, name: "Vacant", value: "Vacant" },
            { id: 1, name: "Occupied", value: "Occupied" },
            { id: 2, name: "Both", value: "Both" }
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
           
            { id: 4, name: "Experience", value: "totexp" },
             { id: 5, name: "Band", value: "band" }
           
            
          
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
    userBand: {
      get() {
        return this.$store.getters.getuserBand;
        // return true;
      },
      set(data) {
        this.$store.commit("setuserBand", data);
      }
    },
     imgRequire: {
      get() {
        return this.$store.getters.getimgRequire;
        // return true;
      },
      set(data) {
        this.$store.commit("setimgRequire", data);
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
    businessunit: {
      get() {
        return this.$store.getters.getbusinessunit;
        // return true;
      },
      set(data) {
        this.$store.commit("setbusinessunit", data);
      }
    },
    
    location: {
      get() {
        return this.$store.getters.getlocation;
        // return true;
      },
      set(data) {
        this.$store.commit("setlocation", data);
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
    },
    levelPay: {
      get() {
        return this.$store.getters.getlevelPay;
        // return true;
      },
      set(data) {
        this.$store.commit("setlevelPay", data);
      },
    },
    isLevel: {
      get() {
        return this.$store.getters.getisLevel;
        // return true;
      },
      set(data) {
        this.$store.commit("setisLevel", data);
      },
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
    },
     businessunit() {
      this.BUData();
    },
     location() {
      this.locationData();
    }
  
  },
  

  methods: {
    validate(item)
    {
      var count = 0;
       for (var i = 0; i < item.length; i++) {
        count++;
      }
      //console.log(this.selectedView);
      if (count > 1) {
        let data=item.pop();
       item.pop();
       item.push(data)
        // setTimeout(function() {
        //   alert("You can View by one field only");
        // }, 1000);
      }
    },
    // validateView()
    // {
    //  var count = 0;
    //   for (var i = 0; i < this.selectedView.length; i++) {
    //     count++;
    //   }
    //   console.log(this.selectedView);
    //   if (count > 1) {
    //     let data=this.selectedView.pop();
    //    this.selectedView.pop();
    //    this.selectedView.push(data)
    //     // setTimeout(function() {
    //     //   alert("You can View by one field only");
    //     // }, 1000);
    //   }
    // },

    //  validateDisplay()
    // {
    //  var count = 0;
    //   for (var i = 0; i < this.selectedDisplay.length; i++) {
    //     count++;
    //   }
     
    //   if (count > 1) {
    //     let data=this.selectedDisplay.pop();
    //    this.selectedDisplay.pop();
    //    this.selectedDisplay.push(data)
    //   }
    // },
    // validateVacant() {
    //   var count = 0;
    //   for (var i = 0; i < this.selectedVacantItem.length; i++) {
    //     count++;
    //     console.log(count);
    //   }
    //   console.log(this.selectedVacantItem);
    //   if (count > 1) {
    //    let data=this.selectedVacantItem.pop();
    //    this.selectedVacantItem.pop();
    //    this.selectedVacantItem.push(data)
    //   }
    // },
    // validateSort() {
    //   var count = 0;
    //   for (var i = 0; i < this.selectedSortItem.length; i++) {
    //     count++;
    //   }

    //   if (count > 1) {
    //     let data=this.selectedSortItem.pop();
    //    this.selectedSortItem.pop();
    //    this.selectedSortItem.push(data)
    //   }
    // },
    validateFields() {
      var count = 0;
      for (var i = 0; i < this.fieldToDisplay.length; i++) {
        count++;
      }

      if (count > 5) {
        let data=this.fieldToDisplay.pop();
       this.fieldToDisplay.pop();
       this.fieldToDisplay.push(data)
      }
    },

    userGradeData() {
      console.log(this.items);
      this.items[0].children = this.userBand.map((data, index) => {
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
    locationData(){
      console.log(this.itemsLocation);
      this.itemsLocation[0].children = this.location.map((data, index) => {
        let item = {};
        if (data != undefined) {
          item["id"] = index;
          item["name"] = data;
          this.selectedLocationItem.push(index);
          return item;
        } else {
          item["id"] = index;
          item["name"] = undefined;
          this.selectedLocationItem.push(index);
          return item;
        }
      });
      console.log(this.selectedLocationItem);
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
     BUData() {
      console.log(this.itemsdepartment);
      this.itemsBU[0].children = this.businessunit.map((data, index) => {
        let item = {};
        if (data != undefined) {
          item["id"] = index;
          item["name"] = data;
          this.selectedBUItem.push(index);
          return item;
        } else {
          item["id"] = index;
          item["name"] = undefined;
          this.selectedBUItem.push(index);
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

     filterappliedDisplay(orgChartData, filterArray, filterType) {
      var test = [];
     
      orgChartData.filter(function(item) {
        
        for (var i = 0; i < item[filterType].length; i++) {
          if (
            filterArray.indexOf(item[filterType][i]) > -1) {
              test.push(item)
           
          }
           
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
    ApplyView()
    {
      var filteredData=this.chartData
       if(this.selectedView==1)
        {
          this.isLevel=true
          console.log(this.levelPay)
          for(let i=0;i<filteredData.length;i++)
          {
             var indexpay = this.levelPay.findIndex(
          (x) => x.band == filteredData[i].band
        );
        console.log(indexpay);
        
         if(filteredData[i]["isRoot"]==true)
         {
            console.log("hi")
         }
         else
         {
             filteredData[i].tags.push("subLevels" + indexpay);
         }
         
          }
          
        }
        else{
          this.isLevel=false
          for(let i=0;i<filteredData.length;i++)
          {
            filteredData[i].tags = filteredData[i].tags.filter(function (item) {
             return item.indexOf("subLevels") !== 0;
});
          }

        }
        return filteredData
       
    },
    ApplyFilter() {
      var gradeFilter = [];
      var BUFilter=[];
      var divFilter=[];
      var depFilter=[];
      var locFilter=[];
      var vacantFilter = [];
      var filteredData = this.chartData;
      var fields = [];
      var sortValue = null;
      var displaytype=[];
      for (var i = 0; i < this.fieldToDisplay.length; i++) {
        fields.push(
          this.fieldItems[0].children[this.fieldToDisplay[i]]["value"]
        );
      }
      console.log(fields);
      var indexImage=fields.indexOf("image")
      indexImage > -1 ? fields.splice(indexImage, 1) : -1

      if(indexImage>-1)
      {
        this.imgRequire=true
      }
      else
      {
        this.imgRequire=false
      }

      console.log(fields);
      if (this.selectedItem.length) {
        for (i = 0; i < this.selectedItem.length; i++) {
          gradeFilter.push(
            this.items[0].children[this.selectedItem[i]]["name"]
          );
        }
        console.log(gradeFilter);
       
       filteredData=this.ApplyView()

        filteredData = this.filterapplied(
          filteredData,
          gradeFilter,
          "band"
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

      if (this.selectedBUItem.length) {
        for (i = 0; i < this.selectedBUItem.length; i++) {
          BUFilter.push(this.itemsBU[0].children[this.selectedBUItem[i]]["name"]);
        }
        console.log(depFilter);
        filteredData = this.filterapplied(
          filteredData,
         BUFilter,
          "businessUnitName"
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
       
        if (this.selectedLocationItem.length) {
        for (i = 0; i < this.selectedLocationItem.length; i++) {
          locFilter.push(
            this.itemsLocation[0].children[this.selectedLocationItem[i]]["name"]
          );
        }
        console.log(locFilter);
        filteredData = this.filterapplied(
          filteredData,
         locFilter,
          "location"
        );
        console.log(filteredData);
      }


      if (this.selectedVacantItem.length) {
        for (i = 0; i < this.selectedVacantItem.length; i++) {
           if(this.selectedVacantItem[i]!=2)
          {
          vacantFilter.push(
            this.itemVacant[0].children[this.selectedVacantItem[i]]["value"]
          );
       
        filteredData = this.filterappliedTags(
          filteredData,
          vacantFilter,
          "tags"
        );
        }
        else
        {
            vacantFilter=[]
            vacantFilter.push("Vacant")
            vacantFilter.push("Occupied")
            filteredData = this.filterappliedTags(
          filteredData,
          vacantFilter,
          "tags"
        );
        }
      }
      }
      
      if (this.selectedDisplay.length) {
        for (i = 0; i < this.selectedDisplay.length; i++) {
          if(this.selectedDisplay[i]!=2)
          {
              displaytype.push(
            this.displayItem[0].children[this.selectedDisplay[i]]["value"]
          );
          }
          else
          {
            displaytype=[]
            displaytype.push("Direct")
             displaytype.push("Indirect")
          }
        filteredData = this.filterappliedDisplay(
          filteredData,
          displaytype,
          "tags"
        );
        }
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
      this.isLevel=false
      this.selectedVacantItem = [2];
      this.selectedView=[0]
      this.selectedSortItem = [];
      this.fieldToDisplay = [0, 1, 2, 3,4];
      this.selectedDisplay=[2]
      
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
