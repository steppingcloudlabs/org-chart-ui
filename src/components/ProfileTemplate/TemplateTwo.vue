<template>
  <v-card
    min-height="800px"
    max-width="80%"
    style="margin-left:auto;margin-right:auto;border-left:20px solid #166AB8"
  >
    <v-container class="lighten-5">
      <v-row no-gutters>
        <v-col class="ml-5 mr-1">
          <v-card class="pa-2" style="box-shadow: none">
            <!-- Profile with title -->
            <div style="text-align:center">
              <v-avatar class="profile" color="grey" size="100" tile>
                <v-img style="border:2px" :src="'data:image/jpg;base64,'+profileBasicData.img"></v-img>
              </v-avatar>
              <p
                class="pt-2 name"
                style="font-size:15px;font-weight:600;color:#166AB8"
              >{{profileBasicData.userName}}</p>
              <p
                class="name"
                style="font-size:15px;font-weight:600;color:black;margin-bottom: -1px; line-height: 0px; margin-top: -6px;"
              >{{profileBasicData.positionTitle}}</p>
            </div>
            <!-- Data division -->
            <div style="padding-top:35px">
              <v-divider></v-divider>
              <p
                class="pa-2 header"
                style="font-size:12px;font-weight:500;color:#166AB8;margin-bottom:-2px"
              >Employee Information</p>
              <v-divider></v-divider>
              <p
                class="pt-3"
                style="font-size:12px;font-weight:400;color:black;margin-bottom:-2px;margin-left:2px"
              >
                <v-row style="line-height:12px">
                  <v-col>Position Id:</v-col>
                  <v-col>{{profileBasicData.pid}}</v-col>
                </v-row>
                <v-row style="line-height:12px">
                  <v-col>Manager:</v-col>
                  <v-col>{{profileBasicData.userManagerName}}</v-col>
                </v-row>
                <v-row style="line-height:12px">
                  <v-col>Pay Grade:</v-col>
                  <v-col>{{profileBasicData.userPayGrade}}</v-col>
                </v-row>
                <v-row style="line-height:12px">
                  <v-col>Business Unit </v-col>
                  <v-col>{{profileBasicData.businessUnitName}}</v-col>
                </v-row>
              </p>
            </div>
            <div style="padding-top:35px" v-if="this.empProfileData.bgEducation.length">
              <v-divider></v-divider>
              <p
                class="pa-2 header"
                style="font-size:12px;font-weight:500;color:#166AB8;margin-bottom:-2px"
              >Academics</p>
              <v-divider></v-divider>
              <p class="pt-3 ml-5" style="font-size:12px;font-weight:400;color:black;margin-bottom:-2px">
                <v-layout row wrap class="ml-1">
                  <v-row
                    class="mt-2"
                    v-for="(data, k) in empProfileData.bgEducation"
                    :key="'bgEducation' + k"
                    style="text-align:left;height: 33px;width: 100%;"
                  >
                    <p>{{ getEmployeeEducation(data) }}</p>
                  </v-row>
                </v-layout>
              </p>
            </div>
            <!-- Pre work division -->
            <div style="padding-top:35px" v-if="this.empProfileData.previousExperience.length">
              <v-divider></v-divider>
              <p
                class="pa-2 header"
                style="font-size:12px;font-weight:500;color:#166AB8;margin-bottom:-2px"
              >Pre- RE work experience</p>
              <v-divider></v-divider>
              <p class="pt-3 ml-5" style="font-size:12px;font-weight:400;color:black;margin-bottom:-2px">
                <v-layout row wrap class="ml-1">
                  <v-row
                    class="mt-2"
                    v-for="(data, k) in empProfileData.previousExperience"
                    :key="'previousExperience'+k"
                   
                  >
                    <p>{{ getPreviousExperience(data) }}</p>
                  </v-row>
                </v-layout>
              </p>
            </div>

            <!-- Re work division -->
            <div style="padding-top:35px" v-if="this.empProfileData.insideExperience.length" >
              <v-divider></v-divider>
              <p
                class="pa-2 header"
                style="font-size:12px;font-weight:500;color:#166AB8;margin-bottom:-2px"
              >RE-Work ExperIence</p>
              <v-divider></v-divider>
              <p class="pt-3" style="font-size:12px;font-weight:400;color:black;margin-bottom:-2px">
                <v-layout row wrap class="ml-1">
                  <v-row
                    class="mt-2"
                    v-for="(data, k) in empProfileData.insideExperience"
                    :key="'insideExperience'+k"
                    style="text-align:left;height: 33px;"
                  >
                    <p>{{ getInsideExperience(data) }}</p>
                  </v-row>
                </v-layout>
              </p>
            </div>
            <div style="padding-top:35px" v-if="this.empProfileData.certification.length" >
              <v-divider></v-divider>
              <p
                class="pa-2 header"
                style="font-size:12px;font-weight:500;color:#166AB8;margin-bottom:-2px"
              >Certification/Training</p>
              <v-divider></v-divider>
              <p class="pt-3" style="font-size:12px;font-weight:400;color:black;margin-bottom:-2px">
                <v-layout row wrap class="ml-1">
                  <v-row
                    class="mt-2"
                    v-for="(data, k) in empProfileData.certification"
                    :key="'certification'+k"
                    style="text-align:left;height: 33px;"
                  >
                    <p>{{ getCertification(data) }}</p>
                  </v-row>
                </v-layout>
              </p>
            </div>
          </v-card>
        </v-col>

        <!-- Column two -->
        <v-col class="ml-5 mr-5">
          <v-card class="pa-2" style="box-shadow: none;">
             <div >
              <v-divider></v-divider>
              <p
                class="pa-2 header"
                style="font-size:12px;font-weight:500;color:#166AB8;margin-bottom:-2px"
              >Total Experience</p>
              <v-divider></v-divider>
              <table class="performance-table">
               
                <tbody>
                  <tr>
                       <td style="width:73%;font-size:12px;font-weight:500;color:black;margin-bottom:-2px" >Total Experience</td>
                        <td style="width:73%;font-size:12px;font-weight:500;color:black;margin-bottom:-2px" >{{ profileBasicData.experiencearray }}</td>
                        
                  </tr>
                  <tr>
                    <td style="width:73%;font-size:12px;font-weight:500;color:black;margin-bottom:-2px">Total Current Experience</td>
                        <td style="width:73%;font-size:12px;font-weight:500;color:black;margin-bottom:-2px">{{ profileBasicData.currentexp }}</td>
                  </tr>
                  <tr>
                    <td style="width:73%;font-size:12px;font-weight:500;color:black;margin-bottom:-2px">Total Previous Experience</td>
                        <td style="width:73%;font-size:12px;font-weight:500;color:black;margin-bottom:-2px">{{ profileBasicData.prevexp }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div style="padding-top:35px" v-if="this.empProfileData.competencyRating.length" >
              <v-divider></v-divider>
              <p
                class="pa-2 header"
                style="font-size:12px;font-weight:500;color:#166AB8;margin-bottom:-2px"
              >Competency Behaviours</p>
              <v-divider></v-divider>
              <table class="performance-table">
                <tbody>
                  <tr v-for="(data, k) in competencyRating" :key="'competencyRating'+k">
                    <td
                      style="width:73%;font-size:12px;font-weight:500;color:black;margin-bottom:-2px"
                    >{{data.source}}({{getRatingYear(data.startDate, data.endDate)}})</td>
                    <td style="width:73%;font-size:12px;font-weight:500;color:black;margin-bottom:-2px">
                      {{data.rating}}/{{data.max}}
                   
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div style="padding-top:35px" v-if="this.empProfileData.performanceRating.length">
              <v-divider></v-divider>
              <p
                class="pa-2 header"
                style="font-size:12px;font-weight:500;color:#166AB8;margin-bottom:-2px"
              >Performance Behaviours</p>
              <v-divider></v-divider>
              <table class="performance-table">
                <tbody>
                  <tr v-for="(data, k) in performanceRating" :key="'performanceRating'+k">
                    <td
                      style="width:63%;font-size:12px;font-weight:500;color:black;margin-bottom:-2px"
                    >Perf Rating FY {{getRatingYear(data.startDate, data.endDate)}}</td>
                    <td style="width:73%;font-size:12px;font-weight:500;color:black;margin-bottom:-2px">
                      {{data.rating}}/{{data.max}}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div style="padding-top:35px" v-if="this.empProfileData.potentialRating.length">
              <v-divider></v-divider>
              <p
                class="pa-2 header"
                style="font-size:12px;font-weight:500;color:#166AB8;margin-bottom:-2px"
              >Potential Behaviours</p>
              <v-divider></v-divider>
              <table class="performance-table">
                <tbody>
                  <tr v-for="(data, k) in potentialRating" :key="'performanceRating'+k">
                    <td
                      style="width:63%;font-size:12px;font-weight:500;color:black;margin-bottom:-2px"
                    >Perf Rating FY {{getRatingYear(data.startDate, data.endDate)}}</td>
                    <td style="width:73%;font-size:12px;font-weight:500;color:black;margin-bottom:-2px">
                      {{data.rating}}/{{data.max}}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- <div style="padding-top:30px">
                    <v-divider></v-divider>
                     <p class="pa-2 header" style="font-size:12px;font-weight:500;color:#166AB8;margin-bottom:-2px">Strength</p>
                     <v-divider></v-divider> 
                     <p   class="pt-3" style="font-size:12px;font-weight:400;color:black;margin-bottom:-2px">
                     <ul>
                  <li>
                    Systematic approach in overall PD Administration, government liasioning in UK, relationship
                    managementand poised leader
                  </li>
                  <li>Able administrator, good communication skills, perseverance</li>
                </ul>
                 </p>
                </div>   
                 <div style="padding-top:35px">
                    <v-divider></v-divider>
                     <p class="pa-2 header" style="font-size:12px;font-weight:500;color:#166AB8;margin-bottom:-2px">Area of development</p>
                     <v-divider></v-divider> 
                     <p  class="pt-3" style="font-size:12px;font-weight:400;color:black;margin-bottom:-2px">
                     <ul>
                  <li>Review and provide clarity on resolving issues</li>
                </ul>
                 </p>
            </div>-->

            <div style="padding-top:35px" v-if="this.empProfileData.performanceRating &&
      this.empProfileData.potentialRating">
              <v-divider></v-divider>
              <p
                class="pa-2 header"
                style="font-size:12px;font-weight:500;color:#166AB8;margin-bottom:-2px"
              >9 Grid Box</p>
              <v-divider></v-divider>
              <div id="gridbox" class="pt-5">
                <svg width="400" height="200" id="svg" style="margin-left: -53px;">
                  <g>
                    <rect
                      x="100"
                      y="0"
                      width="90"
                      height="47"
                      stroke="white"
                      stroke-width="1"
                      fill="#EFEFEF"
                      id="rect31"
                    />
                    <text
                      x="145"
                      y="20"
                      text-anchor="middle"
                      id="text31"
                      fill="black"
                      font-size="8.5"
                    >Rough Diamond</text>
                  </g>
                  <g>
                    <rect
                      x="200"
                      y="0"
                      width="90"
                      height="47"
                      stroke="white"
                      stroke-width="1"
                      fill="#EFEFEF"
                      id="rect32"
                    />
                    <text
                      x="245"
                      y="20"
                      text-anchor="middle"
                      id="text32"
                      fill="black"
                      font-size="8.5"
                    >Future Star</text>
                  </g>
                  <g>
                    <rect
                      x="300"
                      y="0"
                      width="90"
                      height="47"
                      stroke="white"
                      stroke-width="1"
                      fill="#EFEFEF"
                      id="rect33"
                    />
                    <text
                      x="345"
                      y="20"
                      text-anchor="middle"
                      id="text33"
                      fill="black"
                      font-size="8.5"
                    >ConsistentStar</text>
                  </g>
                  <g>
                    <rect
                      x="100"
                      y="50"
                      width="90"
                      height="47"
                      stroke="white"
                      stroke-width="1"
                      fill="#EFEFEF"
                      id="rect21"
                    />
                    <text
                      x="145"
                      y="70"
                      text-anchor="middle"
                      id="text21"
                      fill="black"
                      font-size="8.5"
                    >Inconsitent performer</text>
                  </g>
                  <g>
                    <rect
                      x="200"
                      y="50"
                      width="90"
                      height="47"
                      stroke="white"
                      stroke-width="1"
                      fill="#EFEFEF"
                      id="rect22"
                    />
                    <text
                      x="245"
                      y="70"
                      text-anchor="middle"
                      id="text22"
                      fill="black"
                      font-size="8.5"
                    >Key Player</text>
                  </g>
                  <g>
                    <rect
                      x="300"
                      y="50"
                      width="90"
                      height="47"
                      stroke="white"
                      stroke-width="1"
                      fill="#EFEFEF"
                      id="rect23"
                    />
                    <text
                      x="345"
                      y="70"
                      text-anchor="middle"
                      id="text23"
                      fill="black"
                      font-size="8.5"
                    >Current Star</text>
                  </g>
                  <g>
                    <rect
                      x="100"
                      y="100"
                      width="90"
                      height="47"
                      stroke="white"
                      stroke-width="1"
                      fill="#EFEFEF"
                      id="rect11"
                    />
                    <text
                      x="145"
                      y="120"
                      text-anchor="middle"
                      id="text11"
                      fill="black"
                      font-size="8.5"
                    >Talent Risk</text>
                  </g>
                  <g>
                    <rect
                      x="200"
                      y="100"
                      width="90"
                      height="47"
                      stroke="white"
                      stroke-width="1"
                      fill="#EFEFEF"
                      id="rect12"
                     
                    />
                    <text
                      x="245"
                      y="120"
                      text-anchor="middle"
                      id="text12"
                      fill="black"
                      font-size="8.5"
                    >Solid performer</text>
                  </g>
                  <g>
                    <rect
                      x="300"
                      y="100"
                      width="90"
                      height="47"
                      stroke="white"
                      stroke-width="1"
                      fill="#EFEFEF"
                      id="rect13"
                    />
                    <text
                      x="345"
                      y="120"
                      text-anchor="middle"
                      id="text13"
                      fill="black"
                      font-size="8.5"
                    >Consistent Performer</text>
                  </g>
                  <line x1="85" y1="0" x2="85" y2="160" stroke="#166AB8" stroke-width="2" />
                  <line x1="75" y1="0" x2="95" y2="0" stroke="#166AB8" stroke-width="3" />
                  <line x1="85" y1="160" x2="400" y2="160" stroke="#166AB8" stroke-width="2" />
                  <line x1="400" y1="150" x2="400" y2="170" stroke="#166AB8" stroke-width="3" />
                  <g>
                    <text
                      x="130"
                      y="2"
                      text-anchor="middle"
                      id="text1"
                      fill="black"
                      font-size="7.5"
                      transform="rotate(90 20,40)"
                    >Continue</text>
                    <text
                      x="80"
                      y="2"
                      text-anchor="middle"
                      id="text2"
                      fill="black"
                      font-size="7.5"
                      transform="rotate(90 20,40)"
                    >Grow</text>
                    <text
                      x="15"
                      y="2"
                      text-anchor="middle"
                      id="text3"
                      fill="black"
                      font-size="7.5"
                      transform="rotate(90 20,40)"
                    >High Potential</text>
                  </g>
                  <g>
                    <text
                      x="140"
                      y="190"
                      text-anchor="middle"
                      id="text4"
                      fill="black"
                      font-size="7.5"
                    >Partially meets expectation</text>
                    <text
                      x="250"
                      y="190"
                      text-anchor="middle"
                      id="text5"
                      fill="black"
                      font-size="7.5"
                    >Meets expectation</text>
                    <text
                      x="340"
                      y="190"
                      text-anchor="middle"
                      id="text6"
                      fill="black"
                      font-size="7.5"
                    >Exceed expectation</text>
                  </g>
                </svg>
              </div>
            </div>
          </v-card>
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
         if(parseInt(element.max)==20)
        {
           element.max=element.max/4
           element.rating=element.rating/4
        }
        element.rating = parseInt(element.rating);

        return element.rating > -1;
      });
    },
  },
  methods: {
    getCertification(preExp) {
      return (
        preExp.name +
        " from " +
        preExp.institution +
        " started on " +
        moment
          .unix(preExp.startDate.substring(6, preExp.startDate.length - 5))
          .format("MM-YYYY")
        // " to " +
        // moment
        //   .unix(preExp.endDate.substring(6, preExp.endDate.length - 5))
        //   .format("MM-YYYY")
      );
    },
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
ul {
  list-style-type: square;
}
hr {
  color: rgb(7, 1, 59);
}
.heading {
  font-size: 12px;
  color: black;
  font-weight: 500;
}
table.performance-table tbody tr td {
  padding: 2px;
}

.level-one-color {
  background-color: rgb(243, 243, 243);
}

.level-two-color {
  background-color: rgb(217, 234, 211);
}

.level-three-color {
  background-color: rgb(182, 215, 168);
}

.level-four-color {
  background-color: rgb(106, 168, 79);
}

.perf-zero-color {
  background-color: rgb(153, 153, 153);
}

.perf-one-color {
  background-color: rgb(183, 183, 183);
}

.perf-two-color {
  background-color: rgb(255, 0, 0);
}

.perf-three-color {
  background-color: rgb(255, 153, 0);
}

.perf-four-color {
  background-color: rgb(182, 215, 168);
}

.perf-five-color {
  background-color: rgb(106, 168, 79);
}

.perf-circled-border {
  border: 2px solid black;
}

.perf-circle {
  height: 15px;
  width: 15px;
  border-radius: 50%;
  margin: auto;
}
.name {
  letter-spacing: 3px;
}
.header {
  letter-spacing: 2px;
}
</style>