<template>
  <v-layout row wrap id="profile">
    <div class="maincontainer" id="container">
      <div class="column" id="div-1">
        <div class="table-container">
          <table class="profile-info-table">
            <tbody>
              <tr>
                <td rowspan="4" style="width: 20%;">
                  <img id="emp-profile-img" :src="'data:image/jpg;base64,'+profileBasicData.img" class="avatar" />
                </td>
                <td style="width: 15%;" class="table-heading">Name</td>
                <td
                  id="emp-profile-role"
                  style="width: 16%;"
                  class="table-value"
                  colspan="3"
                >{{profileBasicData.userName}}</td>
              </tr>
              <tr>
                <td style="width: 15%;" class="table-heading">Position</td>
                <td
                  style="width: 16%;"
                  class="table-value"
                  colspan="3"
                >{{profileBasicData.positionTitle}}({{profileBasicData.pid}})</td>
              </tr>
              <tr>
                <td style="width: 15%;" class="table-heading">Manager</td>
                <td
                  id="emp-profile-designation"
                  style="width: 16%;"
                  class="table-value"
                  colspan="3"
                >{{profileBasicData.userManagerName}}</td>
              </tr>
              <tr>
                <td style="width: 15%;" class="table-heading">Pay Grade</td>
                <td
                  id="emp-profile-dob"
                  style="width: 16%;"
                  class="table-value"
                >{{profileBasicData.userPayGradeName}}</td>
                <td style="width: 15%;" class="table-heading">Division</td>
                <td style="width: 16%;" class="table-value">{{profileBasicData.userDivisionName}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="acad-exp-container">
          <div class="section-wrapper">
            <div class="heading-section">
              <p class="table-heading">Academics</p>
            </div>
            <div class="data-section">
              <ul>
                <li
                  v-for="(data, k) in empProfileData.bgEducation"
                  :key="'bgEducation' + k"
                >{{ getEmployeeEducation(data) }}</li>
              </ul>
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="section-wrapper">
            <div class="heading-section">
              <p class="table-heading">Pre-Work Experience</p>
            </div>
            <div class="data-section">
              <ol>
                <li
                  v-for="(data, k) in empProfileData.previousExperience"
                  :key="'previousExperience'+k"
                >{{ getPreviousExperience(data) }}</li>
              </ol>
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="section-wrapper" v-if="empProfileData.insideExperience.length">
            <div class="heading-section">
              <p class="table-heading">Re-Work Experience</p>
            </div>
            <div class="data-section">
              <ol>
                <li
                  v-for="(data, k) in empProfileData.insideExperience"
                  :key="'insideExperience'+k"
                >{{ getInsideExperience(data) }}</li>
                <!-- <li>Joined in Jan 2015 as Head of Product Planning and Strategy</li>
                <li>Managed Product Development from Jul 2015</li>
                <li>Re-designated as Head Product Development in Aug 2016</li>-->
              </ol>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
      <div class="column">
        <div>
          <div style="padding-top:2%" >
            <table class="performance-table">
              <tbody>
                <tr>
                  <th class="table-heading text-left" style="width:63%">Competency</th>
                  <th class="text-left table-heading">Ratings</th>
                </tr>
                <tr v-for="(data, k) in competencyRating" :key="'competencyRating'+k">
                  <td class="table-row" style="width:75%">{{data.source}}({{data.module}})</td>
                  <td class="text-left">
                    <v-rating v-model="data.rating" dense readonly :length="data.max"></v-rating>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div   style="padding-top:10%">
            <table class="performance-table">
              <tbody>
                <tr>
                  <th class="table-heading text-left" style="width:63%">Performance</th>
                  <th class="text-left table-heading">Ratings</th>
                </tr>
                <tr v-for="(data, k) in performanceRating" :key="'performanceRating'+k">
                  <td
                    class="table-row"
                    style="width:75%"
                  >Perf Rating FY {{getRatingYear(data.startDate, data.endDate)}}</td>
                  <td class="text-left">
                    <v-rating v-model="data.rating" dense readonly :length="data.max"></v-rating>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="clearfix"></div>
        </div>

        <!-- <div>
          <div class="column">
            <div class="strength-wrapper">
              <div class="strength-header">
                <p class="table-heading" style="text-align: center;">Strengths</p>
              </div>
              <div class="strength-body">
                <ul>
                  <li>
                    Systematic approach in overall PD Administration, government liasioning in UK, relationship
                    managementand poised leader
                  </li>
                  <li>Able administrator, good communication skills, perseverance</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="strength-wrapper">
              <div class="strength-header">
                <p class="table-heading" style="text-align: center;">Areas of Devlopment</p>
              </div>
              <div class="strength-body">
                <ul>
                  <li>Review and provide clarity on resolving issues</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>-->

        <div
          style="padding-top: 20px;"
          v-if="empProfileData.performanceRating.length &&empProfileData.potentialRating.length"
        >
          <p class="table-heading" style="text-align: center;">9 Box Grid</p>
          <div id="gridbox">
            <svg width="600" height="250" id="svg">
              <g>
                <rect
                  x="100"
                  y="0"
                  width="140"
                  height="67"
                  id="rect31"
                  stroke="rgb(217,217,217)"
                  stroke-width="1"
                  fill="rgb(217,217,217)"
                />
                <text
                  x="170"
                  y="40"
                  text-anchor="middle"
                  id="text31"
                  fill="black"
                  font-size="12"
                >Rough Diamond</text>
              </g>
              <g>
                <rect
                  x="250"
                  y="0"
                  width="140"
                  height="67"
                  id="rect32"
                  stroke="rgb(217,217,217)"
                  stroke-width="1"
                  fill="rgb(217,217,217)"
                />
                <text
                  x="320"
                  y="40"
                  text-anchor="middle"
                  id="text32"
                  fill="black"
                  font-size="12"
                >Future Star</text>
              </g>
              <g>
                <rect
                  x="400"
                  y="0"
                  width="140"
                  height="67"
                  id="rect33"
                  stroke="rgb(217,217,217)"
                  stroke-width="1"
                  fill="rgb(217,217,217)"
                />
                <text
                  x="470"
                  y="40"
                  text-anchor="middle"
                  id="text33"
                  fill="black"
                  font-size="12"
                >ConsistentStar</text>
              </g>
              <g>
                <rect
                  x="100"
                  y="75"
                  width="140"
                  height="67"
                  id="rect21"
                  stroke="rgb(217,217,217)"
                  stroke-width="1"
                  fill="rgb(217,217,217)"
                />
                <text
                  x="170"
                  y="115"
                  text-anchor="middle"
                  id="text21"
                  fill="black"
                  font-size="12"
                >Inconsitent performer</text>
              </g>
              <g>
                <rect
                  x="250"
                  y="75"
                  width="140"
                  height="67"
                  id="rect22"
                  stroke="rgb(217,217,217)"
                  stroke-width="1"
                  fill="rgb(217,217,217)"
                />
                <text
                  x="320"
                  y="115"
                  text-anchor="middle"
                  id="text22"
                  fill="black"
                  font-size="12"
                >Key Player</text>
              </g>
              <g>
                <rect
                  x="400"
                  y="75"
                  width="140"
                  height="67"
                  id="rect23"
                  stroke="rgb(217,217,217)"
                  stroke-width="1"
                  fill="rgb(217,217,217)"
                />
                <text
                  x="470"
                  y="115"
                  text-anchor="middle"
                  id="text23"
                  fill="black"
                  font-size="12"
                >Current Star</text>
              </g>
              <g>
                <rect
                  x="100"
                  y="150"
                  width="140"
                  height="67"
                  id="rect11"
                  stroke="rgb(217,217,217)"
                  stroke-width="1"
                  fill="rgb(217,217,217)"
                />
                <text
                  x="170"
                  y="190"
                  text-anchor="middle"
                  id="text11"
                  fill="black"
                  font-size="12"
                >Talent Risk</text>
              </g>
              <g>
                <rect
                  x="250"
                  y="150"
                  width="140"
                  height="67"
                  id="rect12"
                  stroke="rgb(217,217,217)"
                  stroke-width="1"
                  fill="rgb(217,217,217)"
                />
                <text
                  x="320"
                  y="190"
                  text-anchor="middle"
                  id="text12"
                  fill="black"
                  font-size="12"
                >Solid performer</text>
              </g>
              <g>
                <rect
                  x="400"
                  y="150"
                  width="140"
                  height="67"
                  id="rect13"
                  stroke="rgb(217,217,217)"
                  stroke-width="1"
                  fill="rgb(217,217,217)"
                />
                <text
                  x="470"
                  y="190"
                  text-anchor="middle"
                  id="text13"
                  fill="black"
                  font-size="12"
                >Consistent Performer</text>
              </g>
              <line x1="85" y1="0" x2="85" y2="230" stroke="rgb(217,217,217)" stroke-width="2" />
              <line x1="75" y1="0" x2="95" y2="0" stroke="rgb(217,217,217)" stroke-width="3" />
              <line x1="85" y1="230" x2="550" y2="230" stroke="rgb(217,217,217)" stroke-width="2" />
              <line x1="550" y1="220" x2="550" y2="240" stroke="rgb(217,217,217)" stroke-width="3" />
              <g>
                <text
                  x="180"
                  y="2"
                  text-anchor="middle"
                  id="text1"
                  fill="black"
                  font-size="10"
                  transform="rotate(90 20,40)"
                >Continue</text>
                <text
                  x="100"
                  y="2"
                  text-anchor="middle"
                  id="text2"
                  fill="black"
                  font-size="10"
                  transform="rotate(90 20,40)"
                >Grow</text>
                <text
                  x="22"
                  y="2"
                  text-anchor="middle"
                  id="text3"
                  fill="black"
                  font-size="10"
                  transform="rotate(90 20,40)"
                >High Potential</text>
              </g>
              <g>
                <text
                  x="160"
                  y="250"
                  text-anchor="middle"
                  id="text4"
                  fill="black"
                  font-size="10"
                >Partially meets expectation</text>
                <text
                  x="320"
                  y="250"
                  text-anchor="middle"
                  id="text5"
                  fill="black"
                  font-size="10"
                >Meets expectation</text>
                <text
                  x="450"
                  y="250"
                  text-anchor="middle"
                  id="text6"
                  fill="black"
                  font-size="10"
                >Exceed expectation</text>
              </g>
            </svg>
          </div>
         
        </div>
      </div>
      <div class="clearfix"></div>
      <div class="row" v-if="empProfileData.incumbents">
        <div class="column" style="padding-left: 20px;">
          <div class="position-container">
            <table>
              <tbody>
                <tr>
                  <td style="width: 23%;"></td>
                  <td style="width: 50%;" class="table-heading">Proposed Position</td>
                  <td
                    colspan="3"
                    style="width: 10%; text-align: center;"
                    class="table-heading"
                  >Position Readiness</td>
                </tr>
                <tr>
                  <td style="width: 23%;" class="table-heading">Proposed role within function</td>
                  <td style="width: 50%;" class="table-value"></td>
                  <td style="width: 9%;">
                    <div class="perf-circle perf-four-color"></div>
                  </td>
                  <td style="width: 9%;">
                    <div class="perf-circle perf-three-color"></div>
                  </td>
                  <td style="width: 9%;">
                    <div class="perf-circle perf-two-color"></div>
                  </td>
                </tr>
                <tr>
                  <td style="width: 23%;" class="table-heading">Proposed role outside function</td>
                  <td style="width: 50%;" class="table-value"></td>
                  <td style="width: 9%;">
                    <div class="perf-circle perf-four-color"></div>
                  </td>
                  <td style="width: 9%;">
                    <div class="perf-circle perf-three-color"></div>
                  </td>
                  <td style="width: 9%;">
                    <div class="perf-circle perf-two-color"></div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="column">
          <div class="position-container">
            <table>
              <tbody>
                <tr>
                  <td style="width: 23%;"></td>
                  <td
                    style="width: 50%;"
                    class="table-heading"
                  >Proposed incumbents to the above position</td>
                  <td
                    colspan="3"
                    style="width: 10%; text-align: center;"
                    class="table-heading"
                  >Incumbent Readiness</td>
                </tr>
                <tr>
                  <td style="width: 23%;" class="table-heading">Incumbent 1</td>
                  <td style="width: 50%;" class="table-value"></td>
                  <td style="width: 9%;">
                    <div class="perf-circle perf-four-color"></div>
                  </td>
                  <td style="width: 9%;">
                    <div class="perf-circle perf-three-color"></div>
                  </td>
                  <td style="width: 9%;">
                    <div class="perf-circle perf-two-color"></div>
                  </td>
                </tr>
                <tr>
                  <td style="width: 23%;" class="table-heading">Incumbent 2</td>
                  <td style="width: 50%;" class="table-value"></td>
                  <td style="width: 9%;">
                    <div class="perf-circle perf-four-color"></div>
                  </td>
                  <td style="width: 9%;">
                    <div class="perf-circle perf-three-color"></div>
                  </td>
                  <td style="width: 9%;">
                    <div class="perf-circle perf-two-color"></div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="clearfix"></div>
    </div>
  </v-layout>
</template>

<script>
import moment from "moment";
import $ from "jquery";
export default {
  name: "TemplateOne",
  data() {
    return {
      rating: 3
    };
  },
  props: {
    profileBasicData: {
      default: undefined,
      type: Object
    }
  },
  mounted() {
    this.printProfile();
    console.log(moment);
    if (
      this.empProfileData.performanceRating &&
      this.empProfileData.potentialRating
    ) {
      var c = this.empProfileData.potentialRating[0].rating;
      var r = this.empProfileData.performanceRating[0].rating;
      var id = "rect" + r.toString() + c.toString();
      var textid="text" + r.toString() + c.toString();
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
      return this.empProfileData.performanceRating.filter(element => {
        element.rating = parseInt(element.rating);
        return element.rating > -1;
      });
    },
    competencyRating() {
      return this.empProfileData.competencyRating.filter(element => {
        element.rating = parseInt(element.rating);
        if(parseInt(element.max)==20)
        {
           element.max=element.max/4
           element.rating=element.rating/4
        }
        return element.rating > -1;
      });
    }
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
        makeProfileCssInline: function() {
          this.each(function(idx, el) {
            var style = el.style;
            var properties = [];
            for (var property in style) {
              if ($(this).css(property)) {
                properties.push(property + ":" + $(this).css(property));
              }
            }
            this.style.cssText = properties.join(";");
            $(this)
              .children()
              .makeProfileCssInline();
          });
        }
      });
    },

    printProfile() {
      // this.test();
      // $("#profile").makeProfileCssInline();
      //var printContents = document.getElementById("").innerHTML;
      // this.$htmlToPaper("container");
    }
  }
};
</script>

<style>
.maincontainer {
  margin-top: 20px;
  margin-left: 50px;
  margin-right: 50px;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

table tbody tr td {
  padding: 5px;
}

.profile-info-table {
  padding-right: 20px;
}

.table-heading {
  color: rgb(162, 145, 97);
  font-weight: 700;
  font-size: 14px;
}
.table-row
{
  color: rgb(162, 145, 97);
  font-weight: 500;
  font-size: 12px;
}
.performance-table {
  line-height: 0.9;
  width: 100%;
}
.profile-info-table .table-value,
.position-container .table-value {
  background-color: rgb(239, 239, 239);
}

.profile-info-table .avatar {
  width: 160px;
  height: 190px;
  border-radius: 0;
}

.section-wrapper {
  margin: 10px 0;
}
.acad-exp-container {
  padding-right: 20px;
}

.acad-exp-container .heading-section {
  width: 23%;
  float: left;
  padding: 12px;
}

.acad-exp-container .data-section {
  width: 77%;
  background-color: rgb(239, 239, 239);
  float: right;
  padding: 20px 30px;
  min-height: 100px;
  font-size: 12px;
}

.clearfix::after {
  content: "";
  clear: both;
  display: table;
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

.strength-header {
  padding: 10px;
}

.strength-body {
  background-color: rgb(239, 239, 239);
  min-height: 120px;
  padding: 10px 10px;
  margin: 0 5px 0 0;
  min-width: 270px;
  font-size: 12px;
}

.position-container table tbody td {
  height: 48px;
}

.overlay li {
  margin-top: 0;
}

.overlay ul {
  list-style: disc;
}

#nestedcolumn {
  display: block;
}

#nestedcolumn > div {
  display: table-cell;
}

.column {
  float: left;
  width: 50%;
  /* Should be removed. Only for demonstration */
}
#gridbox {
  text-align: center;
}
</style>