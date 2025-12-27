<template>
  <v-layout row wrap class="pt-5">
     <!--<v-flex xs2 >
        
        <Sidenav :chartData="orgChartData" @redraw="redraw" @reset="reset"></Sidenav>
      </v-flex>-->
       <v-flex xs12>
         <div id="tree" ref="tree"></div>
       </v-flex>
      
   <nodeProfile></nodeProfile>
     </v-layout>
    

 

</template>

<script>

import OrgChart from "../assets/orgchart";
//import Sidenav from "@/components/Sidenav";
// import profile from "@/components/profileDialog";
import nodeProfile from "@/components/NodeProfile";
import $ from "jquery";
import Canvg from "canvg";

 export default {

     name: 'tree',
     data() {
         return {
             nodes:  []  ,
intersectPay: [],
selectedView:true,
     chart: {},
     isbuffered: [],
     totalHeadCount: 0,
     vacantCount: 0,
     resignedCount: 0,
     maleCount: 0,
     femaleCount: 0,
     totalPositionCount:0,
     totalCriticalPosition:0,
     gradecount: [],
     gradeOccurence: [],
     originalMasterData:[],
     finalPlan:{},
     fieldToDisplay: [
       "userPayGrade",
       "userDepartmentName",
       "userDivisionName",
       "businessUnit",
     ],
     filter1: [],
     orgChartData: [],
     field: "true",
     field1: "true",
     str:"",
     selectedId: null,
     temp: {},
         }
     },

     components:{
       //  Sidenav,
         nodeProfile
     },
   
     computed: {
    
      triggerSavePlan() {
    return this.$store.getters.getTriggerSavePlan
  },
  triggerApprovalPlan() {
    return this.$store.getters.getTriggerApprovalPlan
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

   showNodeProfile: {
     get() {
       return this.$store.getters.getshowNodeProfile;
       // return true;
     },
     set(data) {
       this.$store.commit("setshowNodeProfile", data);
     },
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
   inputDate: {
     get() {
       return this.$store.getters.getinputDate;
       // return true;
     },
     set(data) {
       this.$store.commit("setinputDate", data);
     },
   },
   userData: {
     get() {
       return this.$store.getters.getuserData;
       // return true;
     },
     set(data) {
       this.$store.commit("setuserData", data);
     },
   },
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
   userMasterData: {
     get() {
       return this.$store.getters.getuserMasterData;
       // return true;
     },
     set(data) {
       this.$store.commit("setuserMasterData", data);
     },
   },
   imgRequire: {
     get() {
       return this.$store.getters.getimgRequire;
       // return true;
     },
     set(data) {
       this.$store.commit("setimgRequire", data);
     },
   },
   allPaygrade: {
     get() {
       return this.$store.getters.getallPaygradeData;
       // return true;
     },
     set(data) {
       this.$store.commit("setallPaygradeData", data);
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
   showProfileDialog: {
     get() {
       return this.$store.getters.getShowProfileDialog;
       // return true;
     },
     set(data) {
       this.$store.commit("setShowProfileDialog", data);
     },
   },
   businessunit: {
     get() {
       return this.$store.getters.getbusinessunit;
       // return true;
     },
     set(data) {
       this.$store.commit("setbusinessunit", data);
     },
   },
   location: {
     get() {
       return this.$store.getters.getlocation;
       // return true;
     },
     set(data) {
       this.$store.commit("setlocation", data);
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
   },
   originalData: {
        get() {
          return this.$store.getters.getoriginalData;
          // return true;
        },
        set(data) {
          this.$store.commit("setoriginalData", data);
        },
      },
 },

     methods: {

     pdf() {
       OrgChart.pdfPrevUI.show(this.chart, {
           format: 'A4'
       });
   },

     test() {
     let cssProporty = [
       "stroke-dasharray",
       "fill",
       "color",
       "stroke",
       "stop-color",
       "flood-color",
       "lighting-color",
       "background",
       "background-color",
       "filter",
       "stroke-width",
       "d",
     ];
     $.extend($.fn, {
       makeCssInline: function () {
         this.each(function (idx, el) {
           var style = el.style;
           var properties = [];
           for (var property in style) {
             if ($(this).css(property) && cssProporty.indexOf(property) > -1) {
               properties.push(property + ":" + $(this).css(property));
             }
           }
           this.style.cssText = properties.join(";");
           $(this).children().makeCssInline();
         });
       },
     });
   },
     
         redraw(data) {
     this.fieldToDisplay = data.fieldToDisplay;
     var view = !this.selectedView
     this.mytree(this.$refs.tree, data,view);
     var legent = document.createElement("div");
     legent.setAttribute("id", "legendd");
     legent.style.position = "absolute";
     legent.style.top = "20px";
     legent.style.left = "50px";
     legent.style.color = "#2B81D6";
     legent.style.width = "150px";
     legent.style.border = "2px solid black";
     this.str = ""
     for (var j = 0; j < this.gradecount.length; j = j + 3) {
       this.str +=
         "<p class='pl-2 pr-2 pt-1' style='font-size:10px;margin-bottom:1px;'><span>" +
         this.userPayGrade[j] +
         ":" +
         this.gradecount[j] +
         "</span><span class='ml-2'>" +
         this.userPayGrade[j + 1] +
         ":" +
         this.gradecount[j + 1] +
         "</span>";
       if (this.gradecount[j + 3]) {
         this.str +=
           "<span class='ml-2'>" +
           this.userPayGrade[j + 2] +
           ":" +
           this.gradecount[j + 2] +
           "</span></p>";
       } else {
         this.str += "</p>";
       }
     }
     legent.innerHTML =
     "<p class='pl-2 pr-2 pt-1' style='font-size:10px;margin-bottom:1px;'>Total Position -" +
                  this.totalPositionCount +
                  "</p><p class='pl-2 pr-2'style='font-size:10px;margin-bottom:1px;'>Total Vacant Position-" +
                  this.vacantCount +
                  "<p class='pl-2 pr-2 pt-1' style='font-size:10px;margin-bottom:1px;'>Total HeadCount-" +
                  this.totalHeadCount +
                  "<p class='pl-2 pr-2 pt-1' style='font-size:10px;margin-bottom:1px;'>Total Critical Position-" +
                  this.totalCriticalPosition +
                  "</p>"  +
       this.str;
     this.chart.element.appendChild(legent);
     //this.gradeCounting();
     var leg = document.createElement("div");
     leg.setAttribute("id", "legTag");
     leg.style.position = "absolute";
     leg.style.top = "20px";
     leg.style.right = "100px";
     leg.style.color = "#2B81D6";
     //leg.style.border = "1px solid black";
     leg.innerHTML =
       '<div style="font-size:8px"><div ><div id="UCgrade"></div> UC</div><div><div id="Mgrade"></div>M1-M5</div><div><div id="Sgrade"></div>S1-S5</div><div><div class="mr-1" id="vac"></div>Vacant</div></div>';
     this.chart.element.appendChild(leg);
   },

   reset() {
     (this.fieldToDisplay = [
       "userPayGrade",
       "userDepartmentName",
       "userDivisionName",
       "businessUnit",
     ]),
      this.isLevel=false
         for(let i=0;i<this.orgChartData.length;i++)
         {
           this.orgChartData[i].tags = this.orgChartData[i].tags.filter(function (item) {
            return item.indexOf("subLevels") !== 0;
});
         }

       this.mytree(this.$refs.tree, this.orgChartData);
     this.str = "";
     for (var j = 0; j < this.gradecount.length; j = j + 3) {
       this.str +=
         "<p class='pl-2 pr-2 pt-1' style='font-size:10px;margin-bottom:1px;'><span>" +
         this.userPayGrade[j] +
         ":" +
         this.gradecount[j] +
         "</span><span class='ml-2'>" +
         this.userPayGrade[j + 1] +
         ":" +
         this.gradecount[j + 1] +
         "</span>";
       if (this.gradecount[j + 3]) {
         this.str +=
           "<span class='ml-2'>" +
           this.userPayGrade[j + 2] +
           ":" +
           this.gradecount[j + 2] +
           "</span></p>";
       } else {
         this.str += "</p>";
       }
     }
     var legent = document.createElement("div");
     legent.setAttribute("id", "legendd");
     legent.style.position = "absolute";
     legent.style.top = "20px";
     legent.style.left = "50px";
     legent.style.color = "#2B81D6";
     legent.style.width = "150px";
     legent.style.border = "2px solid black";

     legent.innerHTML =
     "<p class='pl-2 pr-2 pt-1' style='font-size:10px;margin-bottom:1px;'>Total Position -" +
                  this.totalPositionCount +
                  "</p><p class='pl-2 pr-2'style='font-size:10px;margin-bottom:1px;'>Total Vacant Position-" +
                  this.vacantCount +
                  "<p class='pl-2 pr-2 pt-1' style='font-size:10px;margin-bottom:1px;'>Total HeadCount-" +
                  this.totalHeadCount +
                  "<p class='pl-2 pr-2 pt-1' style='font-size:10px;margin-bottom:1px;'>Total Critical Position -" +
                  this.totalCriticalPosition +
                  "</p>"  +
       this.str;
     this.chart.element.appendChild(legent);
     var leg = document.createElement("div");
     leg.setAttribute("id", "legTag");
     leg.style.position = "absolute";
     leg.style.top = "20px";
     leg.style.right = "100px";
     leg.style.color = "#2B81D6";
     //leg.style.border = "1px solid black";
     leg.innerHTML =
       '<div style="font-size:8px"><div ><div id="UCgrade"></div> UC</div><div><div id="Mgrade"></div>M1-M5</div><div><div id="Sgrade"></div>S1-S5</div><div><div class="mr-1" id="vac"></div>Vacant</div></div>';
     this.chart.element.appendChild(leg);
   },

   exportUserProfile(nodeId) {
     var nodeData = this.chart.get(nodeId);
     var data1 = this.chart.get(nodeId.pid);
     this.blur();
       if (!this.showNodeProfile) {
         this.$store.commit("ShowNodeProfile", nodeData);
         this.$store.commit("parentNodeData", data1);
       } else {
         this.showNodeProfile = !this.showNodeProfile;
       }
     
   }, 
   
   gradeCounting() {
        for (var i = 0; i < this.userPayGrade.length; i++) {
          var g = this;
          this.gradecount[i] = this.gradeOccurence.filter(function (item) {
            return item === g.userPayGrade[i];
          }).length;
          console.log(this.gradecount);
        }
      },

 getPayGrade(orgChartData) {
     let g = this;
     for (var i = 0; i < orgChartData.length; i++) {
       console.log(orgChartData[i].userPayGrade);
       console.log("orgChartData[i].userDepartmentName==",orgChartData[i].userDepartmentName);
       this.gradeOccurence.push(orgChartData[i].userPayGrade);
       if (this.userPayGrade.indexOf(orgChartData[i].userPayGrade) === -1) {
         this.userPayGrade.push(orgChartData[i].userPayGrade);
       }
       // if (this.division.indexOf(orgChartData[i].userDivisionName) === -1) {
       //   this.division.push(orgChartData[i].userDivisionName);
       // }
       const divisionValue = orgChartData[i].userDivision;

if (divisionValue && !this.division.includes(divisionValue)) {
this.division.push(divisionValue);
}

       // if (this.division.indexOf(orgChartData[i].userDivision) === -1) {
       //   this.division.push(orgChartData[i].userDivision);
       // }
       // if (
       //   this.department.indexOf(orgChartData[i].department) === -1
       // ) {
       //   this.department.push(orgChartData[i].department);
       // }
       const deptValue = orgChartData[i].userDepartmentName || orgChartData[i].department; 
       if (deptValue && !this.department.includes(deptValue)) 
       { this.department.push(deptValue); }
       // if (
       //   this.department.indexOf(orgChartData[i].userDepartmentName) === -1
       // ) {
       //   this.department.push(orgChartData[i].userDepartmentName);
       // }
       // if (
       //   this.businessunit.indexOf(orgChartData[i].businessUnitName) === -1
       // ) {
       //   this.businessunit.push(orgChartData[i].businessUnitName);
       // }
       const businessUnitValue = orgChartData[i].businessUnit;
       if (businessUnitValue && !this.businessunit.includes(businessUnitValue)) {
         this.businessunit.push(businessUnitValue);
       }
       const locationValue = orgChartData[i].location;
       if (locationValue && !this.location.includes(locationValue)) {
         this.location.push(locationValue);
       }

       // if (this.location.indexOf(orgChartData[i].location) === -1) {
       //   this.location.push(orgChartData[i].location);
       // }
     }

     console.log(this.userPayGrade);

     this.userPayGrade.map(function (item) {
       var test = g.allPaygrade.find(function (element) {
         return element.externalCode == item;
       });
       if (test != undefined) {
         g.intersectPay.push(test);
       }
     });

     this.intersectPay.sort(
       (a, b) => parseInt(b.paygradeLevel) - parseInt(a.paygradeLevel)
     );

     let jsonObject = this.intersectPay.map(JSON.stringify);
     let uniqueSet = new Set(jsonObject);
     let uniqueArray = Array.from(uniqueSet).map(JSON.parse);
     this.intersectPay = uniqueArray;
     this.levelPay=this.intersectPay
     console.log(this.intersectPay);
    this.gradeCounting();
   },

   addTags(nodes) {
     for (var i = 0; i < nodes.length; i++) {
       this.totalHeadCount++;
       this.totalPositionCount++;
       if (nodes[i].positionCritical == "Critical")
       {
        this.totalCriticalPosition++;
       }
       var node = nodes[i];
       var indexpay = this.intersectPay.findIndex(
         (x) => x.externalCode == node.userPayGrade
       );
       console.log(indexpay);

       switch (node.positionVacant) {
         case true: {
           node.tags = ["Vacant"];
           this.vacantCount++;
           break;
         }

         case false:
           node.tags = ["Occupied"];
           break;
       }
       switch (node.gender) {
         case "M":
           node.tags.push("male");
           this.maleCount++;
           break;

         case "F":
           node.tags.push("female");
           this.femaleCount++;
           break;
       }
       node.tags.push(node.userPayGrade);
       node.tags.push(node.positionCritical);
       switch (node.isRoot) {
         case true:
           node.tags.push("RootNode");
           break;
         case false:
           break;
       }
       if (node.resignationStatus == "On Notice Period") {
         node.tags.splice(node.tags.indexOf("Occupied"), 1);
         node.tags.push("Resigned");
         this.resignedCount++;
       }
       if (node["positionVacant"] == false && node.img) {
         console.log("hello")
       } else if (node["positionVacant"] == false && !node.img) {
         node["img"] = "https://i.ibb.co/zxjJ4TK/placeholder.png";
       } else {
         node["img"] = "https://i.ibb.co/LShM7dV/vacantposition.png";
       }
       if (node.userId == "poojas") {
         node.tags.push("assistant");
       }
       if(this.isLevel==true)
       {
       node.tags.push("subLevels" + indexpay);
       }
     
     }
    //  if (nodes[3]) {
    //    nodes[3].tags.push("Critical");
    //    nodes[3].tags.push("MediumImpact");
    //    nodes[3].tags.push("HighRisk");
    //  }
     console.log(this.vacantCount);
     // if(this.intersectPay.length<10)
     // {

     //}
     return nodes;
   },
   getChlidData(node) {
     console.log(node);
     if (
       node &&
       node.userId &&
       (!this.userMasterData[node.userId] ||
         !this.userMasterData[node.userManagerId])
     ) {
       var userNameInput = null;
       var userPosition = null;
       var date1 = new Date(this.inputDate).getTime();
       if (!node.isRoot) {
         userNameInput = node.userId;
         userPosition = node.id;
         this.isbuffered[node.userId] = false;
       } else {
         userNameInput = node.userManagerId;
         userPosition = node.pid;
         this.isbuffered[node.userManagerId] = false;
       }
       this.$store
         .dispatch("testcall1", {
           userid: userNameInput,
           position: userPosition,
           date: date1,
         })
         .then((response) => {
           if (response && response.length) {
             if (!node.isRoot) {
               this.userMasterData[node.userId] = response.splice(
                 1,
                 response.length
               );
               console.log(node.userId, this.userMasterData[node.userId]);
               this.isbuffered[node.userId] = true;
             } else {
               // userMasterData[node.userManagerId] = response.data.splice(1, response.data.length)
               this.userMasterData[node.userManagerId] = response;
               let index = this.userMasterData[node.userManagerId].findIndex(
                 (element) => {
                   return node.userId == element.userId;
                 }
               );
               this.isbuffered[node.userManagerId] = true;
               console.log(index);
               this.userMasterData[node.userManagerId] = this.userMasterData[
                 node.userManagerId
               ].filter(function (item) {
                 if (node.userId != item.userId) {
                   return item;
                 }
               });

               console.log(
                 node.userManagerId,
                 this.userMasterData[node.userManagerId]
               );
             }
           }
         });
     }
   },
   addChildDataToChart(nodeId) {
     var nodeData = this.chart.get(nodeId);
     var bufferedChild = [];
     var id;
     if (nodeData.isRoot) {
       id = nodeData.userManagerId;
     } else {
       id = nodeData.userId;
     }
     if (this.isbuffered[id] == true) {
       if (nodeData.isRoot) {
         let index = this.orgChartData.findIndex((element) => {
           return nodeData.userId == element.userId;
         });
         if (index > -1) {
           this.orgChartData[index].isRoot = false;
           let tagIndex = nodeData.tags.findIndex((element) => {
             return element == "RootNode";
           });
           this.orgChartData[index].tags.splice(tagIndex, 1);
           this.userMasterData[nodeData.userManagerId][0].isRoot = true;
           this.getPayGrade(this.userMasterData[nodeData.userManagerId]);
           this.userMasterData[nodeData.userManagerId] = this.addTags(
             this.userMasterData[nodeData.userManagerId]
           );
           bufferedChild = this.userMasterData[nodeData.userManagerId];

           this.orgChartData = this.orgChartData.concat(
             this.userMasterData[nodeData.userManagerId]
           );
           this.originalMasterData = this.originalMasterData.concat(
           this.userMasterData[nodeData.userManagerId]
         );
           this.orgChartData = JSON.parse(JSON.stringify(this.orgChartData));
           console.log(JSON.stringify(this.orgChartData));
         }
       } else {
         this.getPayGrade(this.userMasterData[nodeData.userId]);
         this.userMasterData[nodeData.userId] = this.addTags(
           this.userMasterData[nodeData.userId]
         );
         bufferedChild = this.userMasterData[nodeData.userId];

         this.orgChartData = this.orgChartData.concat(
           this.userMasterData[nodeData.userId]
         );
         this.originalMasterData = this.originalMasterData.concat(
           this.userMasterData[nodeData.userId]
         );
       }

       if (
         this.userMasterData[nodeData.userId] &&
         this.userMasterData[nodeData.userId].length == 0
       ) {
         alert("No Hierarchy for this Employee!");
       }
       for (var i = 0; i < bufferedChild.length; i++) {
         this.getChlidData(bufferedChild[i]);
       }
       this.chart.load(this.orgChartData);
       //  this.subList("sublist", 0, this.userPayGrade);
     } else if (this.isbuffered[id] == false) {
       alert("Data Processing!Please try again");
     } else {
       alert("No Data!");
     }
     this.str = "";
     for (var j = 0; j < this.gradecount.length; j = j + 3) {
       this.str +=
         "<p class='pl-2 pr-2 pt-1' style='font-size:10px;margin-bottom:1px;'><span>" +
         this.userPayGrade[j] +
         ":" +
         this.gradecount[j] +
         "</span><span class='ml-2'>" +
         this.userPayGrade[j + 1] +
         ":" +
         this.gradecount[j + 1] +
         "</span>";
       if (this.gradecount[j + 3]) {
         this.str +=
           "<span class='ml-2'>" +
           this.userPayGrade[j + 2] +
           ":" +
           this.gradecount[j + 2] +
           "</span></p>";
       } else {
         this.str += "</p>";
       }
     }
     var legent = document.getElementById("legendd");

     legent.innerHTML =
     "<p class='pl-2 pr-2 pt-1' style='font-size:10px;margin-bottom:1px;'>Total Position -" +
                  this.totalPositionCount +
                  "</p><p class='pl-2 pr-2'style='font-size:10px;margin-bottom:1px;'>Total Vacant Position:" +
                  this.vacantCount +
                  "<p class='pl-2 pr-2 pt-1' style='font-size:10px;margin-bottom:1px;'>Total HeadCount:" +
                  this.totalHeadCount +
                  "<p class='pl-2 pr-2 pt-1' style='font-size:10px;margin-bottom:1px;'>Total Critical Position :" +
                  this.totalCriticalPosition +
                  "</p>"  +
       this.str;
     this.chart.element.appendChild(legent);
   },
   
   async inlineSvgImages(svgEl) {
   const images = Array.from(svgEl.querySelectorAll("image"));

   for (const img of images) {
     const href = img.getAttribute("href") || img.getAttribute("xlink:href");
     if (!href || href.startsWith("data:")) continue;

     try {
       const res = await fetch(href, { mode: "cors" });
       const blob = await res.blob();

       const dataUrl = await new Promise((resolve) => {
         const r = new FileReader();
         r.onloadend = () => resolve(r.result);
         r.readAsDataURL(blob);
       });

       img.setAttribute("href", dataUrl);
       img.setAttribute("xlink:href", dataUrl);
     } catch (e) {
       console.warn("Could not inline image:", href, e);
     }
   }
 },



 async download() {
     this.test();
     $("#tree svg").makeCssInline();
     
     // 2) Grab ONLY the svg markup
     const svgEl = document.querySelector("#tree svg");
     
     await this.inlineSvgImages(svgEl);

     let svg = new XMLSerializer().serializeToString(svgEl);

     // 3) Ensure namespaces exist (Canvg is picky sometimes)
     if (!svg.includes('xmlns="http://www.w3.org/2000/svg"')) {
     svg = svg.replace("<svg", '<svg xmlns="http://www.w3.org/2000/svg"');
     }
     if (!svg.includes('xmlns:xlink="http://www.w3.org/1999/xlink"')) {
     svg = svg.replace("<svg", '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
     }

    // svg = document.getElementById("tree").innerHTML;

    //  svg = svg.substr(0, svg.indexOf("</svg>") + 6);
    //  svg = svg.split("</svg>")[0];
    //  svg += document.getElementById("legendd").innerHTML + "</svg>";
    //  svg += "</svg>";
    //  console.log(svg);
     const canvas = document.createElement("canvas");
     canvas.height = 4000; //parseInt($("svg")[0].getAttribute("height")) * 40
     canvas.width = 4000; //parseInt($("svg")[0].getAttribute("width")) * 40
     const ctx = canvas.getContext("2d");
     var v = Canvg.fromString(ctx, svg);
     v.start();
     setTimeout(() => {
       const urlImg = canvas.toDataURL("image/png");
       console.log("BASE64",urlImg)
       var dl = document.createElement("a");
       document.body.appendChild(dl);
       dl.setAttribute("href", urlImg);
       dl.setAttribute("download", "OrgChart.png");
       dl.click();
     }, 3000);
   },

   async getAttachement() {
     this.test();
     $("#tree svg").makeCssInline();
     
     // 2) Grab ONLY the svg markup
     const svgEl = document.querySelector("#tree svg");
     
     await this.inlineSvgImages(svgEl);

     let svg = new XMLSerializer().serializeToString(svgEl);

     // 3) Ensure namespaces exist (Canvg is picky sometimes)
     if (!svg.includes('xmlns="http://www.w3.org/2000/svg"')) {
     svg = svg.replace("<svg", '<svg xmlns="http://www.w3.org/2000/svg"');
     }
     if (!svg.includes('xmlns:xlink="http://www.w3.org/1999/xlink"')) {
     svg = svg.replace("<svg", '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
     }

     // var svg = document.getElementById("tree").innerHTML;

     //svg = svg.substr(0, svg.indexOf("</svg>") + 6);
     // svg = svg.split("</svg>")[0];
     // svg += document.getElementById("legendd").innerHTML + "</svg>";
     // svg += "</svg>";
     console.log(svg);
     const canvas = document.createElement("canvas");
     canvas.height = 4000; //parseInt($("svg")[0].getAttribute("height")) * 40
     canvas.width = 4000; //parseInt($("svg")[0].getAttribute("width")) * 40
     const ctx = canvas.getContext("2d");
     var v = Canvg.fromString(ctx, svg);
     var cleanBase64
     v.start();
     setTimeout(() => {
       const urlImg = canvas.toDataURL("image/png");
       cleanBase64 = urlImg.replace(/^data:image\/[a-zA-Z]+;base64,/, "");
       this.$store.commit("SET_FINAL_PLAN_ATTACH", cleanBase64)
     console.log(cleanBase64)
     }, 1000);
    
   },   

  
     getData() {
       
     if (this.userData) {
     this.showLoading = true    
     this.nodes = this.userData;
      for (var i = 0; i < this.nodes.length; i++) {
      this.getChlidData(this.nodes[i]);
      }
     console.log("Hellllllo", this.nodes);
     this.getPayGrade(this.nodes);
     // this.nodes = this.addTags(this.nodes);
     this.nodes=this.addTags(this.nodes);
     this.orgChartData = this.nodes;
     this.originalMasterData = this.nodes;
     console.log("BYEEE", this.nodes);
     this.mytree(this.$refs.tree, JSON.parse(JSON.stringify(this.nodes)));
    //  setTimeout(() => {
    //    this.mytree(this.$refs.tree, JSON.parse(JSON.stringify(this.nodes)));
    //  }, 10)
    this.showLoading = false
     for (var j = 0; j < this.gradecount.length; j = j + 3) {
         this.str +=
           "<p class='pl-2 pr-2 pt-1' style='font-size:10px;margin-bottom:1px;'><span>" +
           this.userPayGrade[j] +
           ":" +
           this.gradecount[j] +
           "</span><span class='ml-2'>" +
           this.userPayGrade[j + 1] +
           ":" +
           this.gradecount[j + 1] +
           "</span>";

         if (this.gradecount[j + 3]) {
           this.str +=
             "<span class='ml-2'>" +
             this.userPayGrade[j + 2] +
             ":" +
             this.gradecount[j + 2] +
             "</span></p>";
         } else {
           this.str += "</p>";
         }
       }
       console.log("Paygroade", this.str)
       var legent = document.createElement("div");
       legent.setAttribute("id", "legendd");
       legent.style.position = "absolute";
       legent.style.top = "150px";
       legent.style.left = "50px";
       legent.style.color = "#2B81D6";
       legent.style.width = "150px";
       legent.style.border = "1px solid black";
       legent.innerHTML =
       "<p class='pl-2 pr-2 pt-1' style='font-size:10px;margin-bottom:1px;'>Total Position -" +
                  this.totalPositionCount +
                  "</p><p class='pl-2 pr-2'style='font-size:10px;margin-bottom:1px;'>Total Vacant Position-" +
                  this.vacantCount +
                  "<p class='pl-2 pr-2 pt-1' style='font-size:10px;margin-bottom:1px;'>Total HeadCount-" +
                  this.totalHeadCount +
                  "<p class='pl-2 pr-2 pt-1' style='font-size:10px;margin-bottom:1px;'>Total Critical Position -" +
                  this.totalCriticalPosition +
                  "</p>"  +
         this.str;
       this.chart.element.appendChild(legent);

       var leg = document.createElement("div");
       leg.setAttribute("id", "legTag");
       leg.style.position = "absolute";
       leg.style.top = "20px";
       leg.style.right = "100px";
       leg.style.color = "#2B81D6";
       //leg.style.border = "1px solid black";
       leg.innerHTML =
         '<div style="font-size:8px"><div ><div id="UCgrade"></div> UC</div><div><div id="Mgrade"></div>M1-M5</div><div><div id="Sgrade"></div>S1-S5</div><div><div class="mr-1" id="vac"></div>Vacant</div></div>';
       this.chart.element.appendChild(leg);
       this.gradeCounting()
       console.log("Versin",OrgChart.VERSION)
      
 }
     
 
 },

 saveData()
 {
  var currentNodes= this.chart?.config?.nodes || []
       /* eslint-disable no-unused-vars */
       const nodesWithoutImg = currentNodes.map(({ img, ...rest }) => rest);
       /* eslint-enable no-unused-vars */
       this.finalPlan["currentData"] = nodesWithoutImg;
       if(!this.originalData.length)
       {
         /* eslint-disable no-unused-vars */
       const nodesWithoutImg1 = this.originalMasterData.map(({ img, ...rest }) => rest);
       /* eslint-enable no-unused-vars */
       this.finalPlan["originalData"] = nodesWithoutImg1;
       }
       else
       {
        this.finalPlan["originalData"] = this.originalData;
       
       }
      
       console.log(this.finalPlan);
       
  this.$store.commit("SET_FINAL_PLAN_DATA", this.finalPlan)
       

    
 },

 changeView()
 {
     var filteredData=this.chart.config.nodes ? this.chart.config.nodes : this.orgChartData
    
    if(this.selectedView)
     {
       this.isLevel=true
       for(let i=0;i<filteredData.length;i++)
       {
          var indexpay = this.levelPay.findIndex(
       (x) => x.externalCode == filteredData[i].userPayGrade
     );
     console.log(indexpay);
       filteredData[i].tags.push("subLevels" + indexpay);
       }
       this.selectedView = !this.selectedView
       
     }
     else{
       this.isLevel=false
       for(let i=0;i<filteredData.length;i++)
       {
         filteredData[i].tags = filteredData[i].tags.filter(function (item) {
          return item.indexOf("subLevels") !== 0;
});
       }
       this.selectedView = !this.selectedView

     }
    this.redraw(filteredData)
 },

 diffNodes(original, current) {
  // Build fast lookup maps by id
  const originalMap = new Map(original.map(o => [o.id, o]));
  const currentMap  = new Map(current.map(c => [c.id, c]));

  const add = [];
  const del = [];
  const update = [];

  // 1) Check current -> find new & updated
  for (const [id, curNode] of currentMap.entries()) {
    const origNode = originalMap.get(id);

    if (!origNode) {
      // id exists only in current => ADD
      add.push(curNode);
    } else {
      // id exists in both => check pid change
      if (origNode.pid !== curNode.pid) {
        // you can push just curNode or include oldPid for reference
        update.push({
          ...curNode,
          oldPid: origNode.pid, // optional, for tracking
        });
      }
    }
  }

  // 2) Check original -> find deleted
  for (const [id, origNode] of originalMap.entries()) {
    if (!currentMap.has(id)) {
      // id exists only in original => DELETE
      del.push(origNode);
    }
  }

  return { add, del, update };
},


 copyHandler(nodeId){
   var data = this.chart.get(nodeId);
    data.id = this.chart.generateId();
    data.pid = nodeId;
    data.isRoot = false;
    data.positionType = "Vacant";
    data.positionVacant = true;
    data.tags = ["Vacant",data.userPayGrade];
    data.img = "https://i.ibb.co/LShM7dV/vacantposition.png";
    data.userDepartmentId = ""
    data.userDivision = ""
    data.userId = ""
    data.userManagerId = ""
    data.userName =""
    data.positionTitle = "New Position"
   this.chart.addNode(data);
},

 field2_binding(sender, node) {
     var data = sender.get(node.id);
     if (data[this.fieldToDisplay[0]] != null) {
       var field =
         '<text text-overflow="multiline" style="font-size: 14px;" fill="white" x="90" y="170" text-anchor="middle">' +
         data[this.fieldToDisplay[0]] +
         "</text>";
       return field;
     }

     return null;
   },

   field3_binding(sender, node) {
     var data = sender.get(node.id);
     if (data[this.fieldToDisplay[1]] != null) {
       var field =
         '<text text-overflow="multiline" style="font-size: 14px;" fill="white" x="90" y="190" text-anchor="middle">' +
         data[this.fieldToDisplay[1]] +
         "</text>";
       return field;
     }
     return null;
   },

   field4_binding(sender, node) {
     var data = sender.get(node.id);
     if (data[this.fieldToDisplay[2]] != null) {
       var field =
         '<text  text-overflow="multiline" style="font-size: 14px;" fill="white" x="60" y="210" text-anchor="middle">' +
         data[this.fieldToDisplay[2]] +
         "</text>";
       return field;
     }
     return null;
   },

   field5_binding(sender, node) {
     var data = sender.get(node.id);
     if (data[this.fieldToDisplay[3]] != null) {
       var field =
         '<text text-overflow="multiline" style="font-size: 14px;" fill="white" x="120" y="210" text-anchor="middle">(' +
         data[this.fieldToDisplay[3]] +
         ")</text>";
       return field;
     }
     return null;
   },

   img_binding(sender, node) {
     var data = sender.get(node.id);
     if (this.imgRequire == true) {
       // var ind=data.tags.indexOf("nonImage")
       //  ind > -1 ? data.tags.splice(ind, 1) : -1
       //console.log(data.img)
      var field= '<clipPath id="ulaImg"><circle cx="90" cy="60" r="40" stroke="white" stroke-width="5"></circle></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#ulaImg)" xlink:href="'+ (data.img && data.img.indexOf('https') > -1 ? data.img : `data:image/jpg;base64,${data.img}` ) + '" x="50" y="20"  width="80" height="80"></image>';
     //console.log(field)
     return field
     } else {
       // data.tags.push("nonImage");
       // sender.updateNode(data)
       return null
     }
   },

   binder(sender, node) {
     var isResigned = false;
     var isCritical = false;
     var data = sender.get(node.id);

     let resignedIndex = data.tags.findIndex((element) => {
       return element == "Resigned";
     });
     let criticalIndex = data.tags.findIndex((element) => {
       return element == "Critical";
     });
     console.log(resignedIndex + criticalIndex);

     var field =
       '<image     xlink:href="https://i.ibb.co/rxM0SM2/caution-Copy.png" x="10" y="230" width="22" height="22"> <title>Vacant Position</title></image>';
     var flag_field =
       '<image class="redflag" xlink:href="/assets/redflag.png" x="10" y="225" width="22" height="22"> <title>Resigned</title></image>';
     if (resignedIndex > -1) {
       isResigned = true;
     }
     if (criticalIndex > -1) {
       isCritical = true;
     }
     if (isResigned && isCritical) {
       field =
         '<image   xlink:href="https://i.ibb.co/FWZTmXh/resign-Copy.png" x="35" y="230" width="22" height="22"> <title>Vacant Position</title></image>';
       flag_field =
         '<image class="redflag" xlink:href="https://i.ibb.co/phcGNq5/redflag-Copy.png" x="10" y="230" width="22" height="22"> <title>Impact of loss</title></image>';

       return field + flag_field;
     } else if (isResigned) {
       flag_field =
         '<image class="redflag"  xlink:href="https://i.ibb.co/phcGNq5/redflag-Copy.png" x="10" y="225" width="22" height="22"> <title>Impact of Loss</title></image>';
       var field1 =
         '<image   xlink:href="https://i.ibb.co/wSZNKXY/yellowface.png" x="35" y="225" width="22" height="22"> <title>Risk of Loss</title></image>';
       var field2 =
         '<image  xlink:href="https://i.ibb.co/FWZTmXh/resign-Copy.png" x="65" y="225" width="22" height="22"> <title>Resigned</title></image>';

       return flag_field + field1 + field2;
     } else if (isCritical) {
       var field5 =
         '<image  xlink:href="https://i.ibb.co/phcGNq5/redflag-Copy.png" x="35" y="229" width="20" height="20"> <title>Risk of Loss</title></image>';
       return field + field5;
     } else {
       return null;
     }
   },
         mytree: function(domEl, x,test=false) {
             // alert(OrgChart.VERSION)
     OrgChart.templates.myTemplate = Object.assign(
       {},
       OrgChart.templates.rony
     );
     //OrgChart.templates.myTemplate.size=[300, 180];
     OrgChart.templates.myTemplate.field_0 =
       '<text width="200" text-overflow="ellipsis" style="font-size: 11px;" fill="white" x="90" y="150" text-anchor="middle">{val}</text>';
     OrgChart.templates.myTemplate.field_8 =
       '<text text-overflow="ellipsis" style="font-size: 12px;" fill="white" x="155" y="130" text-anchor="middle">({val})</text>';
     OrgChart.templates.myTemplate.field_3 =
       '<text width="120" text-overflow="ellipsis" style="font-size: 16px;" fill="white" x="80" y="130" font-weight="BOLD" text-anchor="middle">{val}</text>';

     OrgChart.templates.myTemplate.field_1 = '<text text-overflow="multiline" style="font-size: 14px;" fill="white" x="90" y="190" text-anchor="middle">{val}</text>';
     OrgChart.templates.myTemplate.field_4 =  '<text  text-overflow="multiline" style="font-size: 14px;" fill="white" x="60" y="210" text-anchor="middle">{val}</text>';
     OrgChart.templates.myTemplate.field_5 =  '<text text-overflow="multiline" style="font-size: 14px;" fill="white" x="120" y="210" text-anchor="middle">({val})</text>';
     OrgChart.templates.myTemplate.field_7 = "{val}";
     OrgChart.templates.myTemplate.field_6 =
       '<g><rect x="0" y="220" width="180" height="40"  fill="#03BFCB" rx="5" ry="5"></rect> </g>';
     OrgChart.templates.myTemplate.field_9 =
       '<g><line x1="1" y1="1" x2="179" y2="1"  /> </g>';
     // OrgChart.templates.myTemplate.field_11 =
     //   '<g><line x1="1" y1="260" x2="179" y2="260"  /> </g>';
      OrgChart.templates.myTemplate.img_0 ='<clipPath id="ulaImg"><circle cx="90" cy="60" r="40" stroke="white" stroke-width="5"></circle></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#ulaImg)" xlink:href="{val}" x="50" y="20"  width="80" height="80"></image>';
     // OrgChart.templates.myTemplate.webcallMe = '<g  transform="translate(35,230)" class="flag"><path d="M18.344,16.174l-7.98-12.856c-0.172-0.288-0.586-0.288-0.758,0L1.627,16.217c0.339-0.543-0.603,0.668,0.384,0.682h15.991C18.893,16.891,18.167,15.961,18.344,16.174 M2.789,16.008l7.196-11.6l7.224,11.6H2.789z M10.455,7.552v3.561c0,0.244-0.199,0.445-0.443,0.445s-0.443-0.201-0.443-0.445V7.552c0-0.245,0.199-0.445,0.443-0.445S10.455,7.307,10.455,7.552M10.012,12.439c-0.733,0-1.33,0.6-1.33,1.336s0.597,1.336,1.33,1.336c0.734,0,1.33-0.6,1.33-1.336S10.746,12.439,10.012,12.439M10.012,14.221c-0.244,0-0.443-0.199-0.443-0.445c0-0.244,0.199-0.445,0.443-0.445s0.443,0.201,0.443,0.445C10.455,14.021,10.256,14.221,10.012,14.221"></path></g>'
     OrgChart.templates.myTemplate.field_10 = function(node, data, template, config){
     // var isResigned = false;
    // var isCritical = false;
     
     console.log("Console",template,config,node)
    //  let resignedIndex = data.tags.findIndex((element) => {
    //    return element == "Resigned";
    //  });
     let criticalIndex = data.tags.findIndex((element) => {
       return element == "Critical";
     });
     if (criticalIndex > -1) {
      //return '<image  xlink:href="https://i.ibb.co/phcGNq5/redflag-Copy.png" x="35" y="229" width="20" height="20"> <title>Risk of Loss</title></image>';
     return '<text data-width="230" style="font-size: 18px;" fill="#ffffff" x="125" y="200" text-anchor="middle">${data.positionCritical}<</text>';
    }
     else{
      return null
     }



    //  var field =
    //    '<image     xlink:href="https://i.ibb.co/rxM0SM2/caution-Copy.png" x="10" y="230" width="22" height="22"> <title>Vacant Position</title></image>';
    //  var flag_field =
    //    '<image class="redflag" xlink:href="/assets/redflag.png" x="10" y="225" width="22" height="22"> <title>Resigned</title></image>';
    //  if (resignedIndex > -1) {
    //    isResigned = true;
    //  }
    //  if (criticalIndex > -1) {
    //    isCritical = true;
    //  }
    //  if (isResigned && isCritical) {
    //    field =
    //      '<image   xlink:href="https://i.ibb.co/FWZTmXh/resign-Copy.png" x="35" y="230" width="22" height="22"> <title>Vacant Position</title></image>';
    //    flag_field =
    //      '<image class="redflag" xlink:href="https://i.ibb.co/phcGNq5/redflag-Copy.png" x="10" y="230" width="22" height="22"> <title>Impact of loss</title></image>';

    //    return field + flag_field;
    //  } else if (isResigned) {
    //    flag_field =
    //      '<image class="redflag"  xlink:href="https://i.ibb.co/phcGNq5/redflag-Copy.png" x="10" y="225" width="22" height="22"> <title>Impact of Loss</title></image>';
    //    var field1 =
    //      '<image   xlink:href="https://i.ibb.co/wSZNKXY/yellowface.png" x="35" y="225" width="22" height="22"> <title>Risk of Loss</title></image>';
    //    var field2 =
    //      '<image  xlink:href="https://i.ibb.co/FWZTmXh/resign-Copy.png" x="65" y="225" width="22" height="22"> <title>Resigned</title></image>';

    //    return flag_field + field1 + field2;
    //  } else if (isCritical) {
    //    var field5 =
    //      '<image  xlink:href="https://i.ibb.co/phcGNq5/redflag-Copy.png" x="35" y="229" width="20" height="20"> <title>Risk of Loss</title></image>';
    //    return field + field5;
    //  } else {
    //    return null;
    //  }
};

     OrgChart.templates.myTemplate.plus =
       '<rect x="3" y="0" width="22" height="22" rx="12" ry="12" fill="#2E2E2E" stroke="#aeaeae" stroke-width="1"></rect>' +
       '<line x1="3" y1="12" x2="24" y2="12" stroke-width="1" stroke="#aeaeae"></line>' +
       '<line x1="14" y1="0" x2="14" y2="22" stroke-width="1" stroke="#aeaeae"></line>';

     OrgChart.templates.myTemplate.minus =
       '<rect x="3" y="0" width="22" height="22" rx="12" ry="12" fill="#2E2E2E" stroke="#aeaeae" stroke-width="1"></rect>' +
       '<line x1="3" y1="12" x2="24" y2="12" stroke-width="1" stroke="#aeaeae"></line>';

     OrgChart.templates.myTemplate.exportMenuButton =
       '<div class="tooltip" style="position:absolute;right:{p}px;top:{p}px; width:40px;height:50px;cursor:pointer;" control-export-menu="">' +
       '<hr  style="background-color: black; margin:10px 0;height:3px; border: none;">' +
       '<hr  style="background-color: black; margin:10px 0;height:3px; border: none;">' +
       '<hr  style="background-color: black; margin:10px 0;height:3px; border: none;">' +
       "</div>";
     OrgChart.templates.myTemplate.defs +=
       '<filter id="f1" > \
                   <feGaussianBlur in="SourceGraphic" stdDeviation="4" /> \
                   </filter>';
     
     
     OrgChart.templates.myTemplate.min = Object.assign({}, OrgChart.templates.ana);
     OrgChart.templates.myTemplate.min.size = [250, 80];
   OrgChart.templates.myTemplate.min.img_0 = "";
   OrgChart.templates.myTemplate.min.field_0 = '<text data-width="230" style="font-size: 18px;" fill="#ffffff" x="125" y="40" text-anchor="middle">{val}</text>';
   OrgChart.templates.myTemplate.min.field_1 = '<text data-width="230" style="font-size: 18px;" fill="#ffffff" x="125" y="60" text-anchor="middle">{val}</text>';



                   this.chart = new OrgChart (domEl, {
                 nodes: x,
                 enableDragDrop: true,
                 min: test,
                 scaleInitial: OrgChart.match.boundary,
                 levelSeparation: 30,
                 subtreeSeparation: 30,
                 nodeMouseClick: OrgChart.action.none,
                 toolbar: {
                     zoom: true,
                     fit: true,
                     expandAll: false,
                 },
                 showXScroll: OrgChart.scroll.visible,
                 showYScroll: OrgChart.scroll.visible,
                 mouseScrool: OrgChart.action.none,
                 filterBy: {
                         positionTitle:{label:"Position Title"},
                         userPayGrade:{},
                         positionType:{}
                 },
                 editForm: {
                  generateElementsFromFields: false,
     elements: [
         { type: 'textbox', label: 'Position Title', binding: 'positionTitle' },
         { type: 'textbox', label: 'Position Code', binding: 'id' },
         { type: 'textbox', label: 'Position PayGrade', binding: 'userPayGrade' },
         { type: 'textbox', label: 'Department', binding: 'department' }
         

     ]
    
 },
                 enableSearch: false,
                 menu: {
         Export: {
           text: "Export Chart",
           icon: OrgChart.icon.svg(18, 18),
           onClick: this.download,
         },
         View:{
             text: "Change View",
             icon:OrgChart.icon.visio(24, 24, "#7A7A7A"),
             onClick:this.changeView
         },
         pdf_export: { text: "Export PDF" },
         pp_export: { text: "Export PowerPoint" },
         json_export: { text: "Export JSON" },
       },
       nodeMenu: {
         levelDown: {
           text: "Level Down",
           icon: OrgChart.icon.add(18, 18, "#7A7A7A"),
           onClick: this.addChildDataToChart,
         },
         exportProfile: {
           text: "View Profile",
           icon: OrgChart.icon.pdf(18, 18, "#7A7A7A"),
           onClick: this.exportUserProfile,
         },
         edit: {
           text: "Edit",
         },
        add: {text:"Add New Position", onClick: this.copyHandler},
        remove: {text:"Remove Position"}
       },
       tags:{
         subLevels0: {
           subLevels: 0,
           levelSeparation: 10,
         },
         subLevels1: {
           subLevels: 1,
           levelSeparation: 10,
         },
         subLevels2: {
           subLevels: 2,
           levelSeparation: 10,
         },
         subLevels3: {
           subLevels: 3,
           levelSeparation: 10,
         },
         subLevels4: {
           subLevels: 4,
           levelSeparation: 10,
         },
         subLevels5: {
           subLevels: 5,
           levelSeparation: 10,
         },
         subLevels6: {
           subLevels: 6,
           levelSeparation: 10,
         },
         subLevels7: {
           subLevels: 7,
           levelSeparation: 10,
         },
         subLevels8: {
           subLevels: 8,
           levelSeparation: 10,
         },
         subLevels9: {
           subLevels: 9,
           levelSeparation: 10,
         },
         RootNode: {
           nodeMenu: {
             levelUp: {
               text: "Level Up",
               icon: OrgChart.icon.add(18, 18, "#7A7A7A"),
               onClick: this.addChildDataToChart,
             },
             exportProfile: {
               text: "View Profile",
               icon: OrgChart.icon.pdf(18, 18, "#7A7A7A"),
               onClick: this.exportUserProfile,
             },
             edit: {
               text: "Edit",
             },
             add: {text:"Add New Position", onClick:this.copyHandler},
             remove: {text:"Remove Position"}
           },
         },
         filter: {
         template: 'dot'
     }

       },
         template :"myTemplate",
         nodeBinding: {
         field_0: "positionTitle",
         field_1: "userPayGrade",
         img_0: "img",
         field_3: "userName",
         field_4: "userDepartmentName",
         field_5:  "userDivisionName",
         field_6: "positionVacant",
         field_7:  "businessUnit",
         field_8: "jobLevel",
         field_9: "positionVacant",
         // field_11: "positionVacant",
         field_10: this.binder,
       }
             });
         
       this.chart.on("click", (sender, args) => {
       var data = sender.get(args.node.id);
       
       //var data1 = sender.get(args.node.pid);

       this.selectedId = data.id;
      //  this.blur();
      //  if (!this.showNodeProfile) {
      //    this.$store.commit("ShowNodeProfile", data);
      //    this.$store.commit("parentNodeData", data1);
      //  } else {
      //    this.showNodeProfile = !this.showNodeProfile;
      //  }
       if (args.node.min) {
     sender.maximize(args.node.id);
 }
 else {
     sender.minimize(args.node.id);
 }
 return false;
     });

     this.chart.onExportStart((args) => {

      args.options.header = "Plan 2026"
    
   args.styles += document.getElementById('myStyles').outerHTML;
   
  //   // add legend html
  // const legendEl = document.getElementById('legendd');
  // if (legendEl) {
  //   args.content += legendEl.outerHTML; // << adds legend to exported content
  // }


});

this.chart.onRedraw(() => {

  const elPositionTitle = document.querySelector('[data-filter-field="positionTitle"]');

  if (elPositionTitle) {
    elPositionTitle.innerHTML = 'Position Title';
  }

  const elpositionType = document.querySelector('[data-filter-field="positionType"]');

  if (elpositionType) {
    elpositionType.innerHTML = 'Position Type';
  }


  const eluserPayGrade = document.querySelector('[data-filter-field="userPayGrade"]');

  if (eluserPayGrade) {
    eluserPayGrade.innerHTML = 'Pay Grade';
  }



const legenddEl = document.getElementById("legendd");
       if (!legenddEl) {
       
         var legent = document.createElement("div");
                legent.setAttribute("id", "legendd");
                
                legent.style.position = "absolute";
                legent.style.top = "28px";
                legent.style.right = "70px";
                legent.style.color = "#2B81D6";
                legent.style.width = "150px";
                legent.style.border = "1px solid black";
                legent.innerHTML =
                  "<p style = 'font-size:10px;text-align: center;margin-bottom:1px'>Position Stats </p><p class='pl-2 pr-2 pt-1' style='font-size:10px;margin-bottom:1px;'>Total Position: " +
                  this.totalPositionCount +
                  "</p><p class='pl-2 pr-2'style='font-size:10px;margin-bottom:1px;'>Total Vacant Position: " +
                  this.vacantCount +
                  "<p class='pl-2 pr-2' style='font-size:10px;margin-bottom:1px;'>Total HeadCount: " +
                  this.totalHeadCount +
                  "<p class='pl-2 pr-2' style='font-size:10px;margin-bottom:1px;'>Total Critical Position: " +
                  this.totalCriticalPosition +
                  "</p>" 


                var legent1 = document.createElement("div");
                legent1.setAttribute("id", "legendd1");
                
                legent1.style.position = "absolute";
                legent1.style.top = "28px";
                legent1.style.right = "230px";
                legent1.style.color = "#2B81D6";
                legent1.style.width = "150px";
                legent1.style.border = "1px solid black";
                legent1.innerHTML ="<p style = 'font-size:10px;text-align: center;margin-bottom:1px'>Pay Grade Count </p>" +this.str
                 
                // Recrutiment Stats

                var legent2 = document.createElement("div");
                legent2.setAttribute("id", "legendd2");
                
                legent2.style.position = "absolute";
                legent2.style.top = "28px";
                legent2.style.right = "390px";
                legent2.style.color = "#2B81D6";
                legent2.style.width = "150px";
                legent2.style.border = "1px solid black";
                legent2.innerHTML =
                  "<p style = 'font-size:10px;text-align:center;margin-bottom:1px'>Recruitment Stats </p><p class='pl-2 pr-2 pt-1' style='font-size:10px;margin-bottom:1px;'>Approved Offers: " +
                  0 +
                  "</p><p class='pl-2 pr-2'style='font-size:10px;margin-bottom:1px;'>Approved Resignation: " +
                  0 +
                  "<p class='pl-2 pr-2' style='font-size:10px;margin-bottom:1px;'>Open Requistion: " +
                  0 +
                 
                  "</p>" 



                  this.chart.element.appendChild(legent); 
                this.chart.element.appendChild(legent1);
                this.chart.element.appendChild(legent2);

      
      }   
      
       

});

     // this.chart.on("exportstart", function (sender, args) {
     //   args.content +=
     //     '<link href="https://fonts.googleapis.com/css?family=Gochi+Hand" rel="stylesheet">';
     //   args.content += document.getElementById("myStyles").outerHTML;
     //  // args.content += document.getElementById("legendd").outerHTML;
     //   //args.content += document.getElementById("legTag").outerHTML;
     // });  
     
     this.chart.filterUI.on('add-filter', function(sender, args){
 var names = Object.keys(sender.filterBy);
 var index = names.indexOf(args.name);
 if (index == names.length - 1) {
     args.html += `<div data-btn-reset style="color: #039BE5;">reset</div>`;
 }  
});

this.chart.filterUI.on('add-item', function(sender, args){
 var count = 0;
 var totalCount = 0;
 for (var i = 0; i < sender.instance.config.nodes.length; i++){
     var data = sender.instance.config.nodes[i];      
     if (data[args.name] != undefined){
         totalCount++;

         if (data[args.name] == args.value){            
             count++;    
         }            
     }
 }

 var dataAllAttr = '';
 if (args.text == '[All]'){
     count = totalCount;
     dataAllAttr = 'data-all';
 }
 args.html = `<div class="filter-item">
                 <input ${dataAllAttr} type="checkbox" id="${args.value}" name="${args.value}" ${args.checked ? 'checked' : ''}>
                 <label for="${args.value}">${args.text} (${count})</label>
             </div>`;
});
this.chart.filterUI.on('update', function(sender, args){
 var btnResetElement = sender.element.querySelector('[data-btn-reset]');
 btnResetElement.addEventListener('click', function(e){
     console.log(e,args)
     sender.filterBy = null;
     sender.update();
     sender.instance.draw();
 });
});

this.chart.filterUI.on('show-items', function(sender, args){
 var filterItemElements = sender.element.querySelectorAll('.filter-item');
 for(var i = 0; i < filterItemElements.length; i++){        
     filterItemElements[i].addEventListener('mouseenter', function(e){
         var val = e.target.querySelector('input').id;           
         if (val != args.name){//[All]
             for(var j = 0; j < sender.instance.config.nodes.length; j++){
                 var data = sender.instance.config.nodes[j];
                 if (data[args.name] == val){
                     var nodeElement = sender.instance.getNodeElement(data.id);
                     nodeElement.classList.add('filter-item-hovered');
                 }
             }
         }
     });
     
     filterItemElements[i].addEventListener('mouseleave', function(e){
         var val = e.target.querySelector('input').id;           
         if (val != args.name){//[All]
             for(var j = 0; j < sender.instance.config.nodes.length; j++){
                 var data = sender.instance.config.nodes[j];
                 if (data[args.name] == val){
                     var nodeElement = sender.instance.getNodeElement(data.id);
                     nodeElement.classList.remove('filter-item-hovered');
                 }
             }
         }
     });
 }
});
                 
         },
     
         blur() {
     if (this.selectedId == null) {
       return;
     }
     var node = this.chart.getNode(this.selectedId);
     var skipBlur = [node.id];
     var skipBlurLink = [];
     while (node.parent) {
       skipBlur.push(node.parent.id);
       skipBlurLink.push("[" + node.parent.id + "][" + node.id + "]");
       node = node.parent;
     }

     var nodeElements = document.querySelectorAll("[node-id]");
     for (var i = 0; i < nodeElements.length; i++) {
       var id = nodeElements[i].getAttribute("node-id");
       if (skipBlur.indexOf(id) == -1)
         nodeElements[i].setAttribute("filter", "url(#f1)");
     }

     var expcollElements = document.querySelectorAll("[control-expcoll-id]");
     for (i = 0; i < expcollElements.length; i++) {
       id = expcollElements[i].getAttribute("control-expcoll-id");
       if (skipBlur.indexOf(id) == -1)
         expcollElements[i].setAttribute("filter", "url(#f1)");
     }

     var linksElements = document.querySelectorAll("[link-id]");
     for (i = 0; i < linksElements.length; i++) {
       id = linksElements[i].getAttribute("link-id");

       if (skipBlurLink.indexOf(id) == -1)
         linksElements[i].setAttribute("filter", "url(#f1)");
     }
   },    


     },

    mounted(){
    console.log("From mounted",this.userData) 
    this.$store.commit("RESET_TRIGGER_APPROVAL")
    this.$store.commit("RESET_TRIGGER_SAVE")
  this.getData()
 //    this.nodes = JSON.parse(JSON.stringify(this.userData));
  //  this.mytree(this.$refs.tree, this.nodes)  
 //    console.log("After mounted",this.userData) 
    
     },
     watch: {
  triggerSavePlan(val) {
    if (val) {
      this.saveData()
      this.$store.commit("RESET_TRIGGER_SAVE")
    }
  },
  triggerApprovalPlan(val) {
    if (val) {
      this.getAttachement()
      this.$store.commit("RESET_TRIGGER_APPROVAL")
    }
  },

},
beforeDestroy()
{
  this.originalData = null
}

 }
</script>

<style scoped>
 
</style>