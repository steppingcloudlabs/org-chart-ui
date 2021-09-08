<template>
  <div >
    <v-app light>   
       <v-navigation-drawer
      v-model="drawer"
      app
      permanent
    >
              <v-tabs grow  v-model="tab" background-color="grey lighten-4" >
             <v-tab   >Filters</v-tab>
             <v-tab  v-if="gradecount.length" >Head Count</v-tab>
            </v-tabs>
            <v-tabs-items  v-model="tab" >
                  <v-tab-item >
                    <Sidenav :chartData="orgChartData" @redraw="redraw" @reset="reset"></Sidenav>
                    <v-simple-table id="tabb" background-color="grey lighten-4" style="position: absolute;top: 10px;right: 50px;color:#231e39;visibility:hidden">
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left">
                            Pay Grade
                          </th>
                          <th class="text-left">
                            Head Count
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(item,i) in gradecount"
                          :key="i"
                        >
                          <td>{{userPayGrade[i]}}</td>
                          <td>{{item}}</td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                  </v-tab-item>
                  <v-tab-item v-if="gradecount.length" >
                    <v-simple-table  background-color="grey lighten-4" style="top: 10px;left: 20px;">
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left">
                            Pay Grade
                          </th>
                          <th class="text-left">
                            Head Count
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(item,i) in gradecount"
                          :key="i"
                        >
                          <td>{{userPayGrade[i]}}</td>
                          <td>{{item}}</td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                  </v-tab-item>
            </v-tabs-items>
       
       </v-navigation-drawer>
       <v-content >
     
        <div id="tree" ref="tree" style="background:white"></div>
       
      
    </v-content>
         
     
    </v-app>
    <profile></profile>
    <nodeProfile></nodeProfile>
  </div>
</template>

<script>
import OrgChart from "@balkangraph/orgchart.js/orgchart";
import Sidenav from "@/components/Sidenav";
import profile from "@/components/profileDialog";
import nodeProfile from "@/components/NodeProfile";
import $ from "jquery";
import Canvg from "canvg";
import {legendTable} from "@/mixins/legendTable.js"


//import imageToBase64 from "image-to-base64";

export default {
  mixins:[legendTable],
  name: "tree",
  data() {
    return {
      drawer: true,
       mini: true,
      tab:null,
      intersectPay: [],
      nodes: {},
      chart: {},
      isbuffered: [],
      totalHeadCount: 0,
      vacantCount: 0,
      resignedCount: 0,
      maleCount: 0,
      femaleCount: 0,
      gradecount: [],
      gradeOccurence: [],

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

      selectedId: null,
      temp: {},
    };
  },
  components: {
    Sidenav,
    profile,
    nodeProfile
   
  },
  computed: {
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
    }
  },
  watch: {
    userData() {
      this.temp = this.userData;
    },
  },
  methods: {
    getbase64(file) {
      var canvas = document.createElement("CANVAS");
      var img = document.createElement("img");
      img.src = file;
      var base;
      img.onload = function () {
        canvas.height = img.height;
        canvas.width = img.width;
        var dataURL = canvas.toDataURL("image/png");
        base = dataURL;
        canvas = null;
      };
      return base;
    },
    getData() {
      if (this.userData) {
        console.log(this.userData);
        this.nodes = this.userData;
        
         
        for (var i = 0; i < this.nodes.length; i++) {
          this.getChlidData(this.nodes[i]);
          if(this.nodes[i].experiencearray)
          {
           let expyear=this.nodes[i].experiencearray.sort((a,b) => a.startDate - b.startDate);
           this.nodes[i].experiencearray=new Number((new Date().getTime() - new Date(expyear[0].startDate).getTime()) / 31536000000).toFixed(0)+" years";
           console.log(this.nodes[i].experiencearray)
          }
           
        }
        console.log(this.nodes);

        this.getPayGrade(this.nodes);
        this.nodes = this.addTags(this.nodes);
        this.orgChartData = this.nodes;
        this.oc(this.$refs.tree, this.orgChartData, null);
        //var str = "";
        // let intersectPay = [];
          this.gradeCounting()
          //var table=this.drawlegend(this.userPayGrade,this.gradecount)
        // for (var j = 0; j < this.gradecount.length; j = j + 3) {
        //   str +=
        //     "<p class='pl-2 pr-2 pt-1' style='font-size:10px;margin-bottom:5px;'><span>" +
        //     this.userPayGrade[j] +
        //     "-" +
        //     this.gradecount[j] +
        //     "</span><span class='ml-2'>" +
        //     this.userPayGrade[j + 1] +
        //     "-" +
        //     this.gradecount[j + 1] +
        //     "</span>";

        //   if (this.gradecount[j + 3]) {
        //     str +=
        //       "<span class='ml-2'>" +
        //       this.userPayGrade[j + 2] +
        //       "-" +
        //       this.gradecount[j + 2] +
        //       "</span></p>";
        //   } else {
        //     str += "</p>";
        //   }
        // }
         
        // var legent = document.createElement("div");
        // legent.setAttribute("id", "legendd");
        // legent.style.position = "absolute";
        // legent.style.top = "20px";
        // legent.style.left = "50px";
        // legent.style.color = "#2B81D6";
        // legent.style.width = "150px";
        // legent.style.border = "1px solid black";
        // legent.innerHTML =
        //   "<p class='pl-2 pr-2 pt-1' style='font-size:10px;margin-bottom:5px;'>Total Head Count-" +
        //   this.totalHeadCount +
        //   "</p><p class='pl-2 pr-2'style='font-size:10px;margin-bottom:5px;'>Total Vacant Position-" +
        //   this.vacantCount +
        //   "</p><p class='pl-2 pr-2'style='font-size:10px;margin-bottom:5px;'>Diversity Ratio(M:F)-" +
        //   this.maleCount +
        //   ":" +
        //   this.femaleCount +
        //   "</p>" +
        //   str;
        // this.chart.element.appendChild(table);

        // var leg = document.createElement("div");
        // leg.setAttribute("id", "legTag");
        // leg.style.position = "absolute";
        // leg.style.top = "20px";
        // leg.style.right = "100px";
        // leg.style.color = "#2B81D6";
        // //leg.style.border = "1px solid black";
        // leg.innerHTML =
        //   '<div style="font-size:8px"><div ><div id="UCgrade"></div> UC</div><div><div id="Mgrade"></div>M1-M5</div><div><div id="Sgrade"></div>S1-S5</div><div><div class="mr-1" id="vac"></div>Vacant</div></div>';
        // this.chart.element.appendChild(leg);
       
      }
    },

    redraw(data) {
      this.fieldToDisplay = data.fieldToDisplay;
      this.oc(this.$refs.tree, data.output, data.orderBy);
      
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

       this.oc(this.$refs.tree, this.orgChartData, null);
      
     
      //leg.style.border = "1px solid black";
      // leg.innerHTML =
      //   '<div style="font-size:8px"><div ><div id="UCgrade"></div> UC</div><div><div id="Mgrade"></div>M1-M5</div><div><div id="Sgrade"></div>S1-S5</div><div><div class="mr-1" id="vac"></div>Vacant</div></div>';
      // this.chart.element.appendChild(leg);
      // 
    },

    exportUserProfile(nodeId) {
      var nodeData = this.chart.get(nodeId);
      // this.$router.push(`/profile/${nodeData.userId}/template-selection`);
      this.$store.commit("ShowProfileDialog", nodeData);
      console.log(nodeId);
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

    subList(classId, index, arrayList) {
      var test = document.getElementsByClassName(classId);
      test[index].innerHTML = null;
      for (var i = 0; i < arrayList.length; i++) {
        test[index].innerHTML +=
          '<li class="optionlist"><label class="container">' +
          arrayList[i] +
          '<input type="checkbox" class="subOption" value=' +
          arrayList[i] +
          '><span class="checkmark"></span></label></li>';
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
        this.gradeOccurence.push(orgChartData[i].userPayGrade);
        if (this.userPayGrade.indexOf(orgChartData[i].userPayGrade) === -1) {
          this.userPayGrade.push(orgChartData[i].userPayGrade);
        }
        if (this.division.indexOf(orgChartData[i].userDivisionName) === -1) {
          this.division.push(orgChartData[i].userDivisionName);
        }
        if (
          this.department.indexOf(orgChartData[i].userDepartmentName) === -1
        ) {
          this.department.push(orgChartData[i].userDepartmentName);
        }
        if (
          this.businessunit.indexOf(orgChartData[i].businessUnitName) === -1
        ) {
          this.businessunit.push(orgChartData[i].businessUnitName);
        }
        if (this.location.indexOf(orgChartData[i].location) === -1) {
          this.location.push(orgChartData[i].location);
        }
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
        switch (node.isRoot) {
          case true:
            node.tags.push("RootNode");
            break;
          case false:
            break;
        }
        switch (node.type) {
          case "Direct":
            node.tags.push("Direct");
            break;
          case "Indirect":
            node.tags.push("Indirect");
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
      // if (nodes[3]) {
      //   nodes[3].tags.push("Critical");
      //   nodes[3].tags.push("MediumImpact");
      //   nodes[3].tags.push("HighRisk");
      // }
      console.log(this.vacantCount);
      // if(this.intersectPay.length<10)
      // {

      //}
      return nodes;
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
        }

        if (
          this.userMasterData[nodeData.userId] &&
          this.userMasterData[nodeData.userId].length == 0
        ) {
          // alert("No Hierarchy for this Employee!");
          this.$store.commit("showSnackbar", {
            message: "No Hierarchy for Employee-"+nodeData.userId,
            color: "Yellow",
            heading: "Info",
            duration: 3000,
          });
          console.log("No Hierarchy for this Employee!")
        }
        for (var i = 0; i < bufferedChild.length; i++) {
          this.getChlidData(bufferedChild[i]);
        }
        this.chart.load(this.orgChartData);
        //  this.subList("sublist", 0, this.userPayGrade);
      } else if (this.isbuffered[id] == false) {
       // alert("Data Processing!Please try again");
        console.log("Data Processing!Please try again")
         this.$store.commit("showSnackbar", {
            message: "Data Processing!Please try again",
            color: "Yellow",
            heading: "Info",
            duration: 3000,
          });
      } else {
        //alert("No Data!");
        this.$store.commit("showSnackbar", {
            message: "No Data!",
            color: "Yellow",
            heading: "Info",
            duration: 3000,
          });
         console.log("No Data!")
      }
      // var str = "";
      // for (var j = 0; j < this.gradecount.length; j = j + 3) {
      //   str +=
      //     "<p class='pl-2 pr-2 pt-1' style='font-size:10px;margin-bottom:5px;'><span>" +
      //     this.userPayGrade[j] +
      //     "-" +
      //     this.gradecount[j] +
      //     "</span><span class='ml-2'>" +
      //     this.userPayGrade[j + 1] +
      //     "-" +
      //     this.gradecount[j + 1] +
      //     "</span>";
      //   if (this.gradecount[j + 3]) {
      //     str +=
      //       "<span class='ml-2'>" +
      //       this.userPayGrade[j + 2] +
      //       "-" +
      //       this.gradecount[j + 2] +
      //       "</span></p>";
      //   } else {
      //     str += "</p>";
      //   }
      // }
      // var legent = document.getElementById("legendd");

      // legent.innerHTML =
      //   "<p class='pl-2 pr-2 pt-1' style='font-size:10px;margin-bottom:5px;'>Total Head Count-" +
      //   this.totalHeadCount +
      //   "</p><p class='pl-2 pr-2'style='font-size:10px;margin-bottom:5px;'>Total Vacant Position-" +
      //   this.vacantCount +
      //   "</p><p class='pl-2 pr-2'style='font-size:10px;margin-bottom:5px;'>Diversity Ratio(M:F)-" +
      //   this.maleCount +
      //   ":" +
      //   this.femaleCount +
      //   "</p>" +
      //   str;
      // this.chart.element.appendChild(legent);
    },

     expandLevelChild(nodeId)
     {
       var nodeData = this.chart.get(nodeId);
       console.log(nodeId)
      var siblings=this.orgChartData.filter(item=>item.pid==nodeData.pid)
      console.log(siblings)
      siblings.forEach((item)=>{
        this.addChildDataToChart(item.id)
      })
     },


    pdf() {
        OrgChart.pdfPrevUI.show(this.chart, {
            format: 'A4'
        });
    },

    download() {
      this.test();
      $("#tree svg").makeCssInline();
      var svg = document.getElementById("tree").innerHTML;

      svg = svg.substr(0, svg.indexOf("</svg>") + 6);
      svg = svg.split("</svg>")[0];
      svg += document.getElementById("legendd").innerHTML + "</svg>";
      console.log(svg);
      const canvas = document.createElement("canvas");
      canvas.height = 4000; //parseInt($("svg")[0].getAttribute("height")) * 40
      canvas.width = 4000; //parseInt($("svg")[0].getAttribute("width")) * 40
      const ctx = canvas.getContext("2d");
      var v = Canvg.fromString(ctx, svg);
      v.start();
      setTimeout(() => {
        const urlImg = canvas.toDataURL("image/png");
        var dl = document.createElement("a");
        document.body.appendChild(dl);
        dl.setAttribute("href", urlImg);
        dl.setAttribute("download", "OrgChart.png");
        dl.click();
      }, 3000);
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

    field2_binding(sender, node) {
      var data = sender.get(node.id);
      if (data[this.fieldToDisplay[0]] != null) {
        var field ='<text width="120" style="font-size: 10px;" fill="#757575" x="70" y="85" text-anchor="middle" font-weight="bold"> '+data[this.fieldToDisplay[0]] +'</text>';

          // '<text text-overflow="multiline" style="font-size: 14px;" fill="white" x="90" y="170" text-anchor="middle">' +
          // data[this.fieldToDisplay[0]] +
          // "</text>";
        return field;
      }

      return null;
    },

    field3_binding(sender, node) {
      var data = sender.get(node.id);
      if (data[this.fieldToDisplay[1]] != null) {
        var field ='<text width="120" style="font-size: 10px;" fill="#757575" x="70" y="105" text-anchor="middle" font-weight="bold">' +
          data[this.fieldToDisplay[1]] +'</text>'
          // '<text text-overflow="multiline" style="font-size: 14px;" fill="white" x="90" y="190" text-anchor="middle">' +
          // data[this.fieldToDisplay[1]] +
          // "</text>";
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
       //var field= '<clipPath id="ulaImg"><circle cx="90" cy="60" r="40" stroke="white" stroke-width="5"></circle></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#ulaImg)" xlink:href="'+ (data.img && data.img.indexOf('https') > -1 ? data.img : `data:image/jpg;base64,${data.img}` ) + '" x="50" y="20"  width="80" height="80"></image>';
      
      // var field='<clipPath id="{randId}"><rect  fill="#ffffff" stroke="#039BE5" stroke-width="5" x="10" y="10" rx="10" ry="10" width="80" height="100"></rect></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="'+ (data.img && data.img.indexOf('https') > -1 ? data.img : `data:image/jpg;base64,${data.img}` ) + '" x="10" y="10"  width="80" height="100"></image><rect fill="none" stroke="#F57C00" stroke-width="2" x="10" y="10" rx="10" ry="10" width="80" height="100"></rect>';
      // var field='<clipPath id="ulaImg"><circle cx="50" cy="60" r="35"></circle></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#ulaImg)" xlink:href="'+ (data.img && data.img.indexOf('https') > -1 ? data.img : `data:image/jpg;base64,${data.img}` ) + '" x="10" y="20"  width="80" height="80"></image>';
       var field='<clipPath id="ulaImg"><circle  cx="70" cy="20" r="30"></circle></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#ulaImg)" xlink:href="'+ (data.img && data.img.indexOf('https') > -1 ? data.img : `data:image/jpg;base64,${data.img}` ) + '" x="40" y="-10" r="30"  width="60" height="60"></image>';
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

    oc: function (domEl, x, orderBy) {
    OrgChart.templates.myTemplate = Object.assign({}, OrgChart.templates.isla);
  OrgChart.templates.myTemplate.size = [140, 140];
  OrgChart.templates.myTemplate.node = 
    '<rect filter="url(#isla-shadow1)" x="0" y="20" rx="5" ry="5" height="110" width="140" fill="#FFF" stroke-width="1" stroke="#1EC9E8" ></rect> ' + 
    '<circle cx="70" cy="20" fill="#ffffff" r="25" stroke="#757575" stroke-width="0.5"></circle>' +
    '<circle stroke="#757575" stroke-width="3" fill="#757575" cx="70" cy="10" r="8"></circle> ' + 
    '<path d="M55,34 C55,17 85,17 85,34" stroke="#757575" stroke-width="1" fill="#757575"></path>';


  
  OrgChart.templates.myTemplate.defs = '<filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="isla-shadow1">' + 
  '<feOffset dx="2" dy="2" in="SourceAlpha" result="shadowOffsetOuter1" /><feGaussianBlur stdDeviation="3" in="shadowOffsetOuter1" result="shadowBlurOuter1" />' + 
  '<feColorMatrix values="0 0 0 1 0   0 0 0 1 0   0 0 0 1 0  0 0 0 0.5 0" in="shadowBlurOuter1" type="matrix" result="shadowMatrixOuter1" />' +
  '<feMerge>' + 
  '<feMergeNode in="shadowMatrixOuter1" /><feMergeNode in="SourceGraphic" /></feMerge></filter>';

  OrgChart.templates.myTemplate.ripple = {
    radius: 0,
    color: "#F57C00",
    rect: { x: 0, y: 20, width: 140, height: 110 }
  };



  OrgChart.templates.myTemplate.img_0 ="{val}"

  OrgChart.templates.myTemplate.field_0 = '<text width="160" style="font-size: 10px;" fill="#757575" x="70" y="65" text-anchor="middle" font-weight="bold">{val}</text>';
  OrgChart.templates.myTemplate.field_1 = "{val}"
  OrgChart.templates.myTemplate.field_2 = "{val}";

  OrgChart.templates.myTemplate.link = 
    '<path stroke-linejoin="round" stroke="red" stroke-width="1px" fill="none" d="M{xa},{ya} {xb},{yb} {xc},{yc} L{xd},{yd}" />';

  OrgChart.templates.myTemplate.minus = 
    '<circle cx="15" cy="5" r="13" fill="#fff" stroke="red" stroke-width="1"></circle>' + 
    '<line x1="8" y1="5" x2="22" y2="5" stroke-width="1" stroke="red"></line>';
  OrgChart.templates.myTemplate.plus = 
    '<circle cx="15" cy="5" r="13" fill="#ffffff" stroke="red" stroke-width="1"></circle>' + 
    '<line x1="8" y1="5" x2="22" y2="5" stroke-width="1" stroke="red"></line><line x1="15" y1="-2" x2="15" y2="12" stroke-width="1" stroke="red"></line>';

  OrgChart.templates.myTemplate.nodeMenuButton = '<g style="cursor:pointer;" transform="matrix(1,0,0,1,225,105)" control-node-menu-id="{id}">' + 
  '<rect x="-110" y="0" fill="red" fill-opacity="0" width="22" height="22"></rect>' + 
  '<circle cx="-102" cy="15" r="1" fill="red"></circle><circle cx="-98" cy="15" r="1" fill="red"></circle><circle cx="-94" cy="15" r="1" fill="red"></circle></g>';

  OrgChart.templates.myTemplate.linkAdjuster = {
    fromX: 0,
    fromY: -5,
    toX: 0,
    toY: 0
  }
      
      this.chart = new OrgChart(domEl, {
        enableDragDrop: true,
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

        enableSearch: false,

        menu: {
          Export: {
            text: "Export Chart",
            icon: OrgChart.icon.svg(18, 18),
            onClick: this.download,
          },
          pdf: {
            text: "Export PDF",
           
            icon: OrgChart.icon.pdf(24, 24, "#7A7A7A"),
           
          },
          png: {
            text: "Export PNG",
          },
        },
        nodeMenu: {
          levelDown: {
            text: "Level Down",
            icon: OrgChart.icon.add(18, 18, "#7A7A7A"),
            onClick: this.addChildDataToChart,
          },
          allLevel:
          {
            text:"Expand all siblings",
            onClick:this.expandLevelChild,
            icon: OrgChart.icon.add(18, 18, "#7A7A7A"),

          },
          exportProfile: {
            text: "View Profile",
            icon: OrgChart.icon.pdf(18, 18, "#7A7A7A"),
            onClick: this.exportUserProfile,
          },
          edit: {
            text: "Edit",
          },
        },

        tags: {
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
            },
          },
          assistant: {
            template: "belinda",
          },
           nonImage: {
            template: "ula",
          },
          dummy: {
            template: "deborah",
            nodeMenu: {},
          },
        },

        template: "myTemplate",
        nodes: x,
        orderBy: orderBy,
        nodeBinding: {
          
          field_0:'userName',
          field_1: this.field2_binding,
          field_2: this.field3_binding,
          img_0: this.img_binding,

          
       
        },
      });
     // this.chart.fit();
      this.chart.on("click", (sender, args) => {
        var data = sender.get(args.node.id);
        
        var data1 = sender.get(args.node.pid);

        this.selectedId = data.id;
        this.blur();
        if (!this.showNodeProfile) {
          this.$store.commit("ShowNodeProfile", data);
          this.$store.commit("parentNodeData", data1);
        } else {
          this.showNodeProfile = !this.showNodeProfile;
        }
      });

      this.chart.on("exportstart", function (sender, args) {
        document.getElementById("tabb").style.visibility="visible"
        args.content +=
          '<link href="https://fonts.googleapis.com/css?family=Gochi+Hand" rel="stylesheet">';
        args.content += document.getElementById("myStyles").outerHTML;
       args.content += document.getElementById("tabb").outerHTML;
        //args.content += document.getElementById("legTag").outerHTML;
        document.getElementById("tabb").style.visibility="hidden"
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

  mounted() {
    this.getData();
    // this.oc(this.$refs.tree, this.orgChartData);
  },
};
</script>
