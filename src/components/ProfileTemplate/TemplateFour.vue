<template>
  <v-card min-height="800px" max-width="80%" style="margin-left:auto;margin-right:auto;">
    <v-container style="padding: unset;">
      <v-row justify="center" no-gutters style="height:800px">
        <v-col cols="5" style="background:#b0e7e2">
          <div style="text-align:center;" class="mb-5">
            <v-avatar
              class="profile"
              color="grey"
              size="150"
              tile
              style="border-radius:20%;border:2px solid"
            >
              <v-img :src="profileBasicData.img"></v-img>
            </v-avatar>
            <p class="pt-2 name" style="font-size:20px;font-weight:600;color:#35383f">{{profileBasicData.userName}}</p>
            <p
              class="name"
              style="font-size:15px;font-weight:600;color:black; line-height: 0px; margin-top: -6px;"
            >{{profileBasicData.positionTitle}}</p>
          </div>
          <v-divider style="margin-left:25px;margin-right:25px;color:#35383f"></v-divider>

          <div style="margin-left:25px">
            <p
              class="pa-1 header"
              style="font-size:15px;font-weight:600;color:#35383f;margin-bottom:-2px;text-align:center"
            >Employee Information</p>
            <div
              class="pt-3"
              style="font-size:12px;font-weight:500;color:black;margin-bottom:-2px;margin-left:2px"
            >
              <v-row style="line-height:2px">
                <v-col class="column-header">Position:</v-col>
                <v-col>{{profileBasicData.pid}}</v-col>
              </v-row>
              <v-row style="line-height:2px">
                <v-col class="column-header">Manager:</v-col>
                <v-col>{{profileBasicData.userManagerName}}</v-col>
              </v-row>
               <v-row style="line-height:2px">
                <v-col class="column-header">Pay Grade:</v-col>
                <v-col>{{profileBasicData.userPayGradeName}}</v-col>
              </v-row>
              <v-row style="line-height:2px">
                <v-col class="column-header">Business Unit </v-col>
                <v-col>{{profileBasicData.businessUnitName}} </v-col>
              </v-row>
            </div>
          </div>
          <v-divider style="margin-left:25px;margin-right:25px;color:#35383f"></v-divider>
          <div>
            <p
              class="pa-1 header"
              style="font-size:15px;font-weight:600;color:#35383f;margin-bottom:-2px;text-align:center"
            >Skills</p>
            <div
              class="pt-3 ml-5"
              style="font-size:12px;font-weight:500;color:black;margin-bottom:-2px;margin-left:2px"
            >
              <v-row
                v-for="(item, i) in star"
                :key="i"
                style="line-height:2px;text-align:left;height: 33px;"
              >
                <v-col style="margin-top: 15px;">
                  <span class="pt-5">{{item}}</span>
                </v-col>
                <v-col>
                  <v-rating
                    v-model="rating"
                    color="yellow darken-3"
                    background-color="grey darken-1"
                    empty-icon="$ratingFull"
                    half-increments
                    size="14"
                  ></v-rating>
                </v-col>
              </v-row>
            </div>
          </div>
          <v-divider class="mt-5" style="margin-left:25px;margin-right:25px;color:#35383f"></v-divider>
          <div v-if="this.empProfileData.bgEducation.length">
            <p
              class="pa-1 header"
              style="font-size:15px;font-weight:600;color:#35383f;text-align:center;margin-bottom:2px"
            >Academics</p>
            <div
              class="pt-3 ml-5"
              style="font-size:12px;font-weight:500;color:black;margin-left:2px"
            >
              <v-layout row wrap class="ml-3">
               <v-row
                    class="mt-2"
                    v-for="(data, k) in empProfileData.bgEducation"
                    :key="'bgEducation' + k"
                    style="text-align:left;height: 33px;width: 100%;"
                  >
                    <p>{{ getEmployeeEducation(data) }}</p>
                  </v-row>
              </v-layout>
            </div>
          </div>
          <v-divider class="mt-5" style="margin-left:25px;margin-right:25px;color:#35383f"></v-divider>
          <div  v-if="this.empProfileData.previousExperience.length">
            <p
              class="pa-1 header"
              style="font-size:15px;font-weight:600;color:#35383f;text-align:center;margin-bottom:2px"
            >Pre RE-Work</p>
            <div
              class="pt-3 ml-5"
              style="font-size:12px;font-weight:500;color:black;margin-left:2px"
            >
              <v-layout row wrap class="ml-3">
               <v-row
                    class="mt-2"
                    v-for="(data, k) in empProfileData.previousExperience"
                    :key="'previousExperience'+k"
                   
                  >
                    <p>{{ getPreviousExperience(data) }}</p>
                  </v-row>
              </v-layout>
            </div>
          </div>
        </v-col>
        <v-col cols="7" style="background:#35383f">
          <div v-if="this.empProfileData.insideExperience.length">
            <p
              class="pa-1 header"
              style="font-size:15px;font-weight:600;color:white;text-align:center;margin-bottom:2px"
            >RE-Work</p>
            <div
              class="pt-3 ml-5"
              style="font-size:12px;font-weight:500;color:white;margin-left:2px"
            >
              <v-layout row wrap class="ml-3">
               <v-row
                    class="mt-2"
                    v-for="(data, k) in empProfileData.insideExperience"
                    :key="'insideExperience'+k"
                    style="text-align:left;height: 33px;"
                  >
                    <p>{{ getInsideExperience(data) }}</p>
                  </v-row>
              </v-layout>
            </div>
          </div>
          <v-divider  style="margin-left:25px;margin-right:25px;background:white"></v-divider>
          <div class="mt-2" v-if="this.empProfileData.competencyRating.length">
             <p
              class="pa-1 header"
              style="text-align:center;font-size:15px;font-weight:600;color:#B0E7E2;margin-bottom:-2px"
            > Competency Rating</p>   
          <table class="performance-table" style="font-size:12px;font-weight:500;">
           <tbody>
                  <tr v-for="(data, k) in competencyRating" :key="'competencyRating'+k">
                    <td
                      style="width:73%;font-size:12px;font-weight:500;color:white;margin-bottom:-2px"
                    >{{data.source}}({{data.module}})</td>
                    <td class="text-left">
                      <v-rating small v-model="data.rating" dense readonly :length="data.max"></v-rating>
                    </td>
                  </tr>
                </tbody>
          </table>
          </div>
           <v-divider  style="margin-left:25px;margin-right:25px;background:white"></v-divider>
          <div class="mt-2"  v-if="this.empProfileData.performanceRating.length">
              <p
              class="pa-2 header"
              style="text-align:center;font-size:15px;font-weight:600;color:#B0E7E2;margin-bottom:-2px"
            > Performance Rating</p>
          <table class="performance-table"  style="font-size:12px;font-weight:500;">
            <tbody>
                  <tr v-for="(data, k) in performanceRating" :key="'performanceRating'+k">
                    <td
                      style="width:63%;font-size:12px;font-weight:500;color:white;margin-bottom:-2px"
                    >Perf Rating FY {{getRatingYear(data.startDate, data.endDate)}}</td>
                    <td class="text-left">
                      <v-rating small v-model="data.rating" dense readonly :length="data.max"></v-rating>
                    </td>
                  </tr>
                </tbody>
          </table>
          </div>
           <v-divider  style="margin-left:25px;margin-right:25px;background:white"></v-divider>
          <div class="mt-2">
             <p
              class="pa-1 header"
              style="font-size:15px;font-weight:600;color:white;text-align:center;margin-bottom:2px"
            >9 Grid-Box</p>
            <div id="gridbox" class="pt-4">
                </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>  

<script>
import moment from "moment";
import $ from "jquery";
export default {
  name: "TemplateTwo",
  data() {
    return {
      rating: 3,
    };
  },
  props: {
    profileBasicData: {
      default: undefined,
      type: Object,
    },
  },

  mounted() {
    //this.createSvg();
    this.printProfile();
    console.log(moment);
    if (
      this.empProfileData.performanceRating &&
      this.empProfileData.potentialRating
    ) {
      var c = this.empProfileData.potentialRating[0].rating;
      var r = this.empProfileData.performanceRating[0].rating;
      var id = "rect" + r.toString() + c.toString();
      var textid = "text" + r.toString() + c.toString();
      var elem = document.getElementById(id);
      elem.style.fill = "#1976D2";
      var elem1 = document.getElementById(textid);
      elem1.style.fill = "white";
    }
  },
  computed: {
    empProfileData() {
      return this.$store.getters.getEmpProfileData;
    },
    performanceRating() {
      return this.empProfileData.performanceRating.filter((element) => {
        element.rating = parseInt(element.rating);
        return element.rating > -1;
      });
    },
    competencyRating() {
      return this.empProfileData.competencyRating.filter((element) => {
        element.rating = parseInt(element.rating);
        return element.rating > -1;
      });
    },
  },
  methods: {
    getInsideExperience(insideExp) {
      return (
        insideExp.title +
        " in " +
        insideExp.department +
        " department from, " +
        moment
          .unix(
            insideExp.startDate.substring(6, insideExp.startDate.length - 5)
          )
          .format("MM-YYYY") +
        " to " +
        moment
          .unix(insideExp.endDate.substring(6, insideExp.endDate.length - 5))
          .format("MM-YYYY")
      );
    },
    getEmployeeEducation(bgEducation) {
      let educationString =
        bgEducation.degree +
        (bgEducation.major ? " in " + bgEducation.major : "") +
        " from " +
        bgEducation.school +
        ", " +
        bgEducation.year;
      return educationString;
    },
    getPreviousExperience(preExp) {
      return (
        preExp.startTitle +
        " in " +
        preExp.employer +
        " from " +
        moment
          .unix(preExp.startDate.substring(6, preExp.startDate.length - 5))
          .format("MM-YYYY") +
        " to " +
        moment
          .unix(preExp.endDate.substring(6, preExp.endDate.length - 5))
          .format("MM-YYYY")
      );
    },
    getRatingYear(startDate, endDate) {
      return (
        moment.unix(startDate.substring(6, startDate.length - 5)).format("YY") +
        "-" +
        moment.unix(endDate.substring(6, endDate.length - 5)).format("YY")
      );
    },
    test() {
      $.extend($.fn, {
        makeProfileCssInline: function () {
          this.each(function (idx, el) {
            var style = el.style;
            var properties = [];
            for (var property in style) {
              if ($(this).css(property)) {
                properties.push(property + ":" + $(this).css(property));
              }
            }
            this.style.cssText = properties.join(";");
            $(this).children().makeProfileCssInline();
          });
        },
      });
    },

    printProfile() {
      // this.test();
      // $("#profile").makeProfileCssInline();
      //var printContents = document.getElementById("").innerHTML;
      // this.$htmlToPaper("container");
    },
    createSvg() {
      var ArrayRating = [
        ["Rough Diamond", "Future Star", "ConsistentStar"],
        ["Inconsitent performer", "Key Player", "Current Star"],
        ["Talent Risk", "Solid performer", "Consistent Performer"],
      ];
      var ArrayRating1 = [
        ["Rough Diamond1", "Future Star1", "ConsistentStar1"],
        ["Inconsitent performer1", "Key Player1", "Current Star1"],
        ["Talent Risk1", "Solid performer1", "Consistent Performer1"],
      ];
      var x = 10;
      var y = 0;
      var tempX;
      var tempY;
      // var svgx=document.getElementById("gridbox").style.width
      // var svgy=document.getElementById("gridbox").style.height
      var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("width", 400);
      svg.setAttribute("height", 200);
      svg.setAttribute("id", "svg");
      for (var i = 0; i < 3; i++) {
        x = 5;
        y = i * 50;
        for (var j = 0; j < 3; j++) {
          x = 100 + j * 100;

          var group = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "g"
          );

          var rectangle = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "rect"
          );
          rectangle.setAttribute("x", x);
          rectangle.setAttribute("y", y);
          rectangle.setAttribute("width", "90");
          rectangle.setAttribute("height", "47");
          rectangle.setAttribute("stroke", "white");
          rectangle.setAttribute("stroke-width", 1);
          rectangle.setAttribute("fill", "#EFEFEF");
          rectangle.setAttribute("id", ArrayRating1[i][j]);

          var text = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "text"
          );
          //var txt = document.createTextNode(ArrayRating[i][j]);
          text.setAttribute("x", x + 45);
          text.setAttribute("y", y + 20);
          text.setAttribute("text-anchor", "middle");
          text.setAttribute("id", ArrayRating[i][j]);
          text.setAttribute("fill", "black");
          text.setAttribute("font-size", "8.5");

          group.appendChild(rectangle);
          group.appendChild(text);
          svg.appendChild(group);
        }
        tempX = x;
        tempY = y;
      }

      var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", 85);
      line.setAttribute("y1", 0);
      line.setAttribute("x2", 85);
      line.setAttribute("y2", tempY + 60);

      line.setAttribute("stroke", "#166AB8");
      line.setAttribute("stroke-width", 2);

      svg.appendChild(line);

      line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", 75);
      line.setAttribute("y1", 0);
      line.setAttribute("x2", 95);
      line.setAttribute("y2", 0);
      line.setAttribute("stroke", "#166AB8");
      line.setAttribute("stroke-width", 3);
      svg.appendChild(line);

      line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", 85);
      line.setAttribute("y1", tempY + 60);
      line.setAttribute("x2", tempX + 100);
      line.setAttribute("y2", tempY + 60);
      line.setAttribute("stroke", "#166AB8");
      line.setAttribute("stroke-width", 2);

      svg.appendChild(line);

      line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", tempX + 100);
      line.setAttribute("y1", tempY + 50);
      line.setAttribute("x2", tempX + 100);
      line.setAttribute("y2", tempY + 70);
      line.setAttribute("stroke", "#166AB8");
      line.setAttribute("stroke-width", 3);
      svg.appendChild(line);

      group = document.createElementNS("http://www.w3.org/2000/svg", "g");
      text = document.createElementNS("http://www.w3.org/2000/svg", "text");
      text.setAttribute("x", 130);
      text.setAttribute("y", 2);
      text.setAttribute("text-anchor", "middle");
      text.setAttribute("id", "text1");
      text.setAttribute("fill", "black");
      text.setAttribute("font-size", "7.5");
      text.setAttribute("transform", "rotate(90 20,40)");

      var text1 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
      );
      text1.setAttribute("x", 80);
      text1.setAttribute("y", 2);
      text1.setAttribute("text-anchor", "middle");
      text1.setAttribute("id", "text2");
      text1.setAttribute("fill", "black");
      text1.setAttribute("font-size", "7.5");
      text1.setAttribute("transform", "rotate(90 20,40)");

      var text2 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
      );
      text2.setAttribute("x", 15);
      text2.setAttribute("y", 2);
      text2.setAttribute("text-anchor", "middle");
      text2.setAttribute("id", "text3");
      text2.setAttribute("fill", "black");
      text2.setAttribute("font-size", "7.5");
      text2.setAttribute("transform", "rotate(90 20,40)");

      group.appendChild(text);
      group.appendChild(text1);
      group.appendChild(text2);
      svg.appendChild(group);

      document.getElementById("gridbox").appendChild(svg);

      document.getElementById("text1").textContent = "Continue";
      document.getElementById("text2").textContent = "Grow";
      document.getElementById("text3").textContent = "High Potential";

      group = document.createElementNS("http://www.w3.org/2000/svg", "g");
      text = document.createElementNS("http://www.w3.org/2000/svg", "text");
      text.setAttribute("x", 140);
      text.setAttribute("y", 190);
      text.setAttribute("text-anchor", "middle");
      text.setAttribute("id", "text4");
      text.setAttribute("fill", "black");
      text.setAttribute("font-size", "7.5");

      text1 = document.createElementNS("http://www.w3.org/2000/svg", "text");
      text1.setAttribute("x", 250);
      text1.setAttribute("y", 190);
      text1.setAttribute("text-anchor", "middle");
      text1.setAttribute("id", "text5");
      text1.setAttribute("fill", "black");
      text1.setAttribute("font-size", "7.5");

      text2 = document.createElementNS("http://www.w3.org/2000/svg", "text");
      text2.setAttribute("x", 340);
      text2.setAttribute("y", 190);
      text2.setAttribute("text-anchor", "middle");
      text2.setAttribute("id", "text6");
      text2.setAttribute("fill", "black");
      text2.setAttribute("font-size", "7.5");

      group.appendChild(text);
      group.appendChild(text1);
      group.appendChild(text2);
      svg.appendChild(group);

      document.getElementById("gridbox").appendChild(svg);

      document.getElementById("text1").textContent = "Continue";
      document.getElementById("text2").textContent = "Grow";
      document.getElementById("text3").textContent = "High Potential";

      document.getElementById("text4").textContent =
        "Partially meets expectation";
      document.getElementById("text5").textContent = "Meets expectation";
      document.getElementById("text6").textContent = "Exceed expectation";

      for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
          document.getElementById(ArrayRating[i][j]).textContent =
            ArrayRating[i][j];
        }
      }
      document.getElementById("Solid performer1").style.fill = "#166AB8";
      document.getElementById("svg").style.marginLeft = "-53px";
      var elem3 = document.getElementById("svg");
      console.log(elem3.outerHTML);
    },
  },
};
</script>
<style scoped>
.head
{
  font-weight:400;
  color:white
  
  
}
</style>