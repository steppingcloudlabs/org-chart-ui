<template>
  <div>
    <v-card height="550px" width="100%" color="white" elevation="0">
      <v-layout row wrap>
        <v-flex xs2>
          <Sidenav :chartData="orgChartData" @redraw="redraw" @reset="reset"></Sidenav>
        </v-flex>
        <v-flex xs10>
          <div id="tree" ref="tree"></div>
        </v-flex>
      </v-layout>
    </v-card>
    <profile></profile>
  </div>
</template>

<script>
import OrgChart from "@balkangraph/orgchart.js/orgchart";
import Sidenav from "@/components/Sidenav";
import profile from "@/components/profileDialog";
import $ from "jquery";
//import { DOMParser } from "xmldom";
import Canvg from "canvg";
// const preset = presets.node({
//   DOMParser
// });

export default {
  name: "tree",
  data() {
    return {
      nodes: {},
      chart: {},
      isbuffered: [],

      fieldToDisplay: [
        "userPayGrade",
        "userDepartmentId",
        "userDivision",
        "businessUnit"
      ],
      filter1: [],
      orgChartData: [],
      field: "true",
      field1: "true",

      selectedId: null,
      temp: {}
    };
  },
  components: {
    Sidenav,
    profile
  },
  beforeMount() {
    const plugin = document.createElement("script");
    plugin.setAttribute("src", "https://unpkg.com/canvg@3.0.4/lib/umd.js");
    plugin.setAttribute("type", "text/javascript");
    plugin.setAttribute("body", "true");
    //plugin.async = true;
    document.head.appendChild(plugin);
  },

  computed: {
    inputDate: {
      get() {
        return this.$store.getters.getinputDate;
        // return true;
      },
      set(data) {
        this.$store.commit("setinputDate", data);
      }
    },
    userData: {
      get() {
        return this.$store.getters.getuserData;
        // return true;
      },
      set(data) {
        this.$store.commit("setuserData", data);
      }
    },
    userPayGrade: {
      get() {
        return this.$store.getters.getuserPayGrade;
        // return true;
      },
      set(data) {
        this.$store.commit("setuserPayGrade", data);
      }
    },
    userMasterData: {
      get() {
        return this.$store.getters.getuserMasterData;
        // return true;
      },
      set(data) {
        this.$store.commit("setuserMasterData", data);
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
    showProfileDialog: {
      get() {
        return this.$store.getters.getShowProfileDialog;
        // return true;
      },
      set(data) {
        this.$store.commit("setShowProfileDialog", data);
      }
    }
  },
  watch: {
    userData() {
      this.temp = this.userData;
    }
  },
  methods: {
    getData() {
      if (this.userData) {
        console.log(this.userData);
        this.nodes = this.userData;
        this.nodes = this.addTags(this.nodes);
        for (var i = 0; i < this.nodes.length; i++) {
          this.getChlidData(this.nodes[i]);
        }
        console.log(this.nodes);
        this.orgChartData = this.nodes;
        this.getPayGrade(this.orgChartData);
        this.oc(this.$refs.tree, this.orgChartData, null);
      }
    },

    redraw(data) {
      this.fieldToDisplay = data.fieldToDisplay;
      this.oc(this.$refs.tree, data.output, data.orderBy);
    },

    reset() {
      (this.fieldToDisplay = [
        "userPayGrade",
        "userDepartmentId",
        "userDivision",
        "businessUnit"
      ]),
        this.oc(this.$refs.tree, this.orgChartData, null);
    },

    exportUserProfile(nodeId) {
      var nodeData = this.chart.get(nodeId);
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
        var date1 = new Date(this.inputDate).toISOString();
        if (!node.isRoot) {
          userNameInput = node.userId;
          this.isbuffered[node.userId] = false;
        } else {
          userNameInput = node.userManagerId;
          this.isbuffered[node.userManagerId] = false;
        }
        this.$store
          .dispatch("testcall1", {
            userid: userNameInput,
            date: date1
          })
          .then(response => {
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
                  element => {
                    return node.userId == element.userId;
                  }
                );
                this.isbuffered[node.userManagerId] = true;
                console.log(index);
                this.userMasterData[node.userManagerId] = this.userMasterData[
                  node.userManagerId
                ].filter(function(item) {
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
    getPayGrade(orgChartData) {
      for (var i = 0; i < orgChartData.length; i++) {
        console.log(orgChartData[i].userPayGrade);
        if (this.userPayGrade.indexOf(orgChartData[i].userPayGrade) === -1) {
          this.userPayGrade.push(orgChartData[i].userPayGrade);
        }
      }

      console.log(this.userPayGrade.sort());
    },

    addTags(nodes) {
      for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        switch (node.positionVacant) {
          case true:
            node.tags = ["Vacant"];
            break;

          case false:
            node.tags = ["Occupied"];
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
        if (node.resignationStatus == "On Notice Period") {
          node.tags.splice(node.tags.indexOf("Occupied"), 1);
          node.tags.push("Resigned");
        }
        if (node["positionVacant"] == false && node.img) {
          node["img"] = "data:image/jpg;base64," + node.img;
        } else if (node["positionVacant"] == false && !node.img) {
          node["img"] = "/placeholder.png";
        } else {
          node["img"] = "/vacantposition.png";
        }
        if (node.userId == "poojas") {
          node.tags.push("assistant");
        }
      }
      if (nodes[3]) {
        nodes[3].tags.push("Critical");
        nodes[3].tags.push("MediumImpact");
        nodes[3].tags.push("HighRisk");
      }

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
          let index = this.orgChartData.findIndex(element => {
            return nodeData.userId == element.userId;
          });
          if (index > -1) {
            this.orgChartData[index].isRoot = false;
            let tagIndex = nodeData.tags.findIndex(element => {
              return element == "RootNode";
            });
            this.orgChartData[index].tags.splice(tagIndex, 1);
            this.userMasterData[nodeData.userManagerId][0].isRoot = true;
            this.userMasterData[nodeData.userManagerId] = this.addTags(
              this.userMasterData[nodeData.userManagerId]
            );
            bufferedChild = this.userMasterData[nodeData.userManagerId];
            this.getPayGrade(this.userMasterData[nodeData.userManagerId]);
            this.orgChartData = this.orgChartData.concat(
              this.userMasterData[nodeData.userManagerId]
            );
            this.orgChartData = JSON.parse(JSON.stringify(this.orgChartData));
            console.log(JSON.stringify(this.orgChartData));
          }
        } else {
          this.userMasterData[nodeData.userId] = this.addTags(
            this.userMasterData[nodeData.userId]
          );
          bufferedChild = this.userMasterData[nodeData.userId];
          this.getPayGrade(this.userMasterData[nodeData.userId]);
          this.orgChartData = this.orgChartData.concat(
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
    },

    download() {
      this.test();
      $("#tree svg").makeCssInline();
      var svg = $("#tree").html();

      svg = svg.substr(0, svg.lastIndexOf("</svg>") + 6);
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
        "d"
      ];
      $.extend($.fn, {
        makeCssInline: function() {
          this.each(function(idx, el) {
            var style = el.style;
            var properties = [];
            for (var property in style) {
              if ($(this).css(property) && cssProporty.indexOf(property) > -1) {
                properties.push(property + ":" + $(this).css(property));
              }
            }
            this.style.cssText = properties.join(";");
            $(this)
              .children()
              .makeCssInline();
          });
        }
      });
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

    binder(sender, node) {
      var isResigned = false;
      var isCritical = false;
      var data = sender.get(node.id);

      let resignedIndex = data.tags.findIndex(element => {
        return element == "Resigned";
      });
      let criticalIndex = data.tags.findIndex(element => {
        return element == "Critical";
      });
      console.log(resignedIndex + criticalIndex);
      var field =
        '<image   xlink:href="/caution.png" x="10" y="230" width="22" height="22"> <title>Vacant Position</title></image>';
      var flag_field =
        '<image class="redflag"  xlink:href="/flag.png" x="10" y="225" width="22" height="22"> <title>Resigned</title></image>';
      if (resignedIndex > -1) {
        isResigned = true;
      }
      if (criticalIndex > -1) {
        isCritical = true;
      }
      if (isResigned && isCritical) {
        field =
          '<image   xlink:href="/caution.png" x="35" y="230" width="22" height="22"> <title>Vacant Position</title></image>';
        flag_field =
          '<image class="redflag"  xlink:href="/redflag.png" x="10" y="230" width="22" height="22"> <title>Impact of loss</title></image>';

        return field + flag_field;
      } else if (isResigned) {
        flag_field =
          '<image class="redflag"  xlink:href="/yellowflag.png" x="10" y="225" width="22" height="22"> <title>Impact of Loss</title></image>';
        var field1 =
          '<image   xlink:href="/greenface.png" x="35" y="225" width="22" height="22"> <title>Risk of Loss</title></image>';
        var field2 =
          '<image   xlink:href="/resign.png" x="65" y="225" width="22" height="22"> <title>Resigned</title></image>';

        return flag_field + field1 + field2;
      } else if (isCritical) {
        var field5 =
          '<image   xlink:href="/redface.png" x="35" y="229" width="20" height="20"> <title>Risk of Loss</title></image>';
        return field + field5;
      } else {
        return null;
      }
    },

    oc: function(domEl, x, orderBy) {
      OrgChart.templates.myTemplate = Object.assign(
        {},
        OrgChart.templates.rony
      );
      OrgChart.templates.myTemplate.field_0 =
        '<text width="200" text-overflow="ellipsis" style="font-size: 12px;" fill="white" x="90" y="150" text-anchor="middle">{val}</text>';
      OrgChart.templates.myTemplate.field_8 =
        '<text text-overflow="ellipsis" style="font-size: 12px;" fill="white" x="155" y="130" text-anchor="middle">({val})</text>';
      OrgChart.templates.myTemplate.field_1 =
        '<text width="120" text-overflow="ellipsis" style="font-size: 16px;" fill="white" x="80" y="130" font-weight="BOLD" text-anchor="middle">{val}</text>';

      OrgChart.templates.myTemplate.field_3 = "{val}";
      OrgChart.templates.myTemplate.field_4 = "{val}";
      OrgChart.templates.myTemplate.field_5 = "{val}";
      OrgChart.templates.myTemplate.field_7 = "{val}";
      OrgChart.templates.myTemplate.field_6 =
        '<g><rect x="0" y="220" width="180" height="40"  fill="#03BFCB" rx="5" ry="5"></rect> </g>';
      OrgChart.templates.myTemplate.field_9 =
        '<g><line x1="1" y1="1" x2="179" y2="1"  /> </g>';
      OrgChart.templates.myTemplate.img_0 =
        '<clipPath id="ulaImg"><circle cx="90" cy="60" r="40" stroke="white" stroke-width="5"></circle></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#ulaImg)" xlink:href="{val}" x="50" y="20"  width="80" height="80"></image>';
      // OrgChart.templates.myTemplate.webcallMe = '<g  transform="translate(35,230)" class="flag"><path d="M18.344,16.174l-7.98-12.856c-0.172-0.288-0.586-0.288-0.758,0L1.627,16.217c0.339-0.543-0.603,0.668,0.384,0.682h15.991C18.893,16.891,18.167,15.961,18.344,16.174 M2.789,16.008l7.196-11.6l7.224,11.6H2.789z M10.455,7.552v3.561c0,0.244-0.199,0.445-0.443,0.445s-0.443-0.201-0.443-0.445V7.552c0-0.245,0.199-0.445,0.443-0.445S10.455,7.307,10.455,7.552M10.012,12.439c-0.733,0-1.33,0.6-1.33,1.336s0.597,1.336,1.33,1.336c0.734,0,1.33-0.6,1.33-1.336S10.746,12.439,10.012,12.439M10.012,14.221c-0.244,0-0.443-0.199-0.443-0.445c0-0.244,0.199-0.445,0.443-0.445s0.443,0.201,0.443,0.445C10.455,14.021,10.256,14.221,10.012,14.221"></path></g>'
      OrgChart.templates.myTemplate.field_10 = "{val}";

      OrgChart.templates.myTemplate.plus =
        '<rect x="3" y="0" width="22" height="22" rx="12" ry="12" fill="#2E2E2E" stroke="#aeaeae" stroke-width="1"></rect>' +
        '<line x1="3" y1="12" x2="24" y2="12" stroke-width="1" stroke="#aeaeae"></line>' +
        '<line x1="14" y1="0" x2="14" y2="22" stroke-width="1" stroke="#aeaeae"></line>';

      OrgChart.templates.myTemplate.minus =
        '<rect x="3" y="0" width="22" height="22" rx="12" ry="12" fill="#2E2E2E" stroke="#aeaeae" stroke-width="1"></rect>' +
        '<line x1="3" y1="12" x2="24" y2="12" stroke-width="1" stroke="#aeaeae"></line>';

      OrgChart.templates.myTemplate.exportMenuButton =
        '<div class="tooltip" style="position:absolute;right:{p}px;top:{p}px; width:40px;height:50px;cursor:pointer;" control-export-menu="">' +
        '<hr style="background-color: black; margin:10px 0;height:3px; border: none;">' +
        '<hr style="background-color: black; margin:10px 0;height:3px; border: none;">' +
        '<hr style="background-color: black; margin:10px 0;height:3px; border: none;">' +
        "</div>";
      OrgChart.templates.myTemplate.defs +=
        '<filter id="f1" > \
                    <feGaussianBlur in="SourceGraphic" stdDeviation="4" /> \
                    </filter>';
      this.chart = new OrgChart(domEl, {
        enableDragDrop: true,

        nodeMouseClick: OrgChart.action.none,
        toolbar: {
          zoom: true,
          fit: true,
          expandAll: false
        },
        showXScroll: OrgChart.scroll.visible,
        showYScroll: OrgChart.scroll.visible,
        mouseScrool: OrgChart.action.none,

        enableSearch: false,

        menu: {
          Export: {
            text: "Export Chart",
            icon: OrgChart.icon.svg(18, 18),
            onClick: this.download
          }
        },
        nodeMenu: {
          levelDown: {
            text: "Level Down",
            icon: OrgChart.icon.add(18, 18, "#7A7A7A"),
            onClick: this.addChildDataToChart
          },
          exportProfile: {
            text: "View Profile",
            icon: OrgChart.icon.pdf(18, 18, "#7A7A7A"),
            onClick: this.exportUserProfile
          },
          edit: {
            text: "Edit"
          }
        },

        tags: {
          RootNode: {
            nodeMenu: {
              levelUp: {
                text: "Level Up",
                icon: OrgChart.icon.add(18, 18, "#7A7A7A"),
                onClick: this.addChildDataToChart
              },
              exportProfile: {
                text: "View Profile",
                icon: OrgChart.icon.pdf(18, 18, "#7A7A7A"),
                onClick: this.exportUserProfile
              },
              edit: {
                text: "Edit"
              }
            }
          },
          assistant: {
            template: "belinda"
          }
        },

        template: "myTemplate",
        nodes: x,
        orderBy: orderBy,
        nodeBinding: {
          field_0: "positionTitle",
          field_1: "userName",
          field_3: this.field2_binding,
          field_4: this.field3_binding,
          field_5: this.field4_binding,
          field_6: "positionVacant",
          field_7: this.field5_binding,
          field_8: "jobLevel",
          field_9: "positionVacant",
          img_0: "img",
          field_10: this.binder
        }
      });
      this.chart.fit();
      this.chart.on("click", (sender, args) => {
        var data = sender.get(args.node.id);
        this.selectedId = data.id;
        this.blur();
        // document.getElementsByClassName("edit-fields")[0].style.visibility = "hidden"
      });
    },
    blur() {
      if (this.selectedId == null) {
        return;
      }
      var node = this.chart.getBGNode(this.selectedId);
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
    }
  },

  mounted() {
    this.getData();
    // this.oc(this.$refs.tree, this.orgChartData);
  }
};
</script>
<style>
[node-id] rect {
  fill: #231e39;
  filter: none;
}

[node-id] g rect {
  fill: #1f1a36;
  filter: none;
}

[node-id] g line {
  stroke: blue;
  stroke-width: 3;
}

.node.Vacant g line {
  stroke: rgb(255, 255, 0);
  stroke-width: 3;
}

.node.GR-18 g line {
  stroke: rgb(255, 0, 0);
  stroke-width: 3;
}

.GR-18 path {
  stroke: rgb(255, 0, 0) !important;
  stroke-width: 2;
}

.GR-18 path:hover {
  stroke: rgb(255, 0, 0) !important;
  stroke-width: 2;
}

.node.GR-14 g line {
  stroke: orange;
  stroke-width: 3;
}

.GR-14 path {
  stroke: orange !important;
  stroke-width: 2;
}

.GR-14 path:hover {
  stroke: orange !important;
  stroke-width: 6;
}

.node.GR-17 g line {
  stroke: green;
  stroke-width: 3;
}

.GR-17 path {
  stroke: green !important;
  stroke-width: 2;
}

.GR-17 path:hover {
  stroke: green !important;
  stroke-width: 6;
}

[node-id] g path {
  fill: "aqua";
  filter: none;
}

[link-id] path {
  stroke: blue;
  cursor: pointer;
}

.Vacant path {
  stroke: yellow !important;
  stroke-dasharray: 5 !important;
  stroke-width: 3;
}

.Vacant path:hover {
  stroke: yellow !important;
  stroke-dasharray: 5 !important;
  stroke-width: 7;
}

.node.Vacant rect {
  fill: #013565;
  cursor: pointer;
}

.node.Vacant rect:hover .Vacant path {
  stroke-width: 7 !important;
}

.node.assistant circle {
  fill: rgb(74, 101, 114, 0.7);
}

.assistant path {
  stroke: rgb(74, 101, 114) !important;
  stroke-dasharray: 20, 10, 5, 5, 5, 10 !important;
  stroke-width: 3;
}

.node.assistant g line {
  stroke: #4e0d3a;
  stroke-width: 3;
}

[control-expcoll-id] circle {
  fill: #231e39;
  stroke: #ffc809;
}

.body #tree > svg {
  background-color: rgb(0, 0, 0, 0) !important;
  height: 100%;
}
</style>