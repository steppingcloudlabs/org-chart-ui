<template>
  <v-card
    min-height="800px"
    max-width="50%"
    style="margin-left:auto;margin-right:auto;border:5px solid #CFECED"
  >
    <v-container class="lighten-5">
      <v-row no-gutters>
        <v-col class="ml-5 mr-5">
          <div style="text-align:center">
            <v-avatar class="profile" color="grey" size="100" tile style="border:2px solid">
              <v-img style="border:2px" :src="'data:image/jpg;base64,'+profileBasicData.img"></v-img>
            </v-avatar>
            <p class="pt-2 name" style="font-size:20px;font-weight:600;color:#166AB8">{{profileBasicData.userName}}</p>
            <p
              class="name"
              style="font-size:15px;font-weight:600;color:black; line-height: 0px; margin-top: -6px;"
            >{{profileBasicData.positionTitle}}</p>
          </div>
        </v-col>
        <v-col class="ml-5 mr-5">
          <div>
            <p
              class="pa-2 header"
              style="font-size:15px;font-weight:600;color:#166AB8;margin-bottom:-2px"
            >Employee Information</p>
            <p
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
            </p>
          </div>
        </v-col>
      </v-row>
      <v-divider ></v-divider>
       <v-row no-gutters class="mt-5 mb-5">
        <v-col class="ml-5 mr-5">
          <div v-if="this.empProfileData.bgEducation.length">
            <p
              class="pa-2 header"
              style="font-size:15px;font-weight:600;color:#166AB8;margin-bottom:-2px"
            >Academics</p>
             <p  class="pt-3" style="font-size:12px;font-weight:400;color:black;margin-bottom:-2px">
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
        </v-col>
        <v-col class="ml-5 mr-5">
          <div>
            <p
              class="pa-2 header"
              style="font-size:15px;font-weight:600;color:#166AB8;margin-bottom:-2px"
            > Skills</p>
             <p  class="pt-3" style="font-size:12px;font-weight:400;color:black;">
              <v-row>
                  <v-col>
                      <v-progress-circular
                        :rotate="90"
                        :size="60"
                        :width="5"
                         value="60"
                        color="#20E3EA"
                        >
                        60
                        </v-progress-circular>
                  </v-col>   
                  <v-col>
                      <v-progress-circular
                        :rotate="90"
                        :size="60"
                        :width="5"
                        value="10"
                        color="#20E3EA"
                        >
                        10
                        </v-progress-circular>
                  </v-col>   
                  <v-col>
                      <v-progress-circular
                        :rotate="90"
                        :size="60"
                        :width="5"
                        value="40"
                        color="#20E3EA"
                        >
                        40
                        </v-progress-circular>
                  </v-col>   
              </v-row>   
              <v-row>
                  <v-col>
                      Programming
                  </v-col>
                  <v-col>
                      Marketing
                  </v-col>
                   <v-col>
                      Management
                  </v-col>
              </v-row> 
    
                 </p>
          </div>
        </v-col>
      </v-row>
     <v-divider></v-divider>
       <v-row no-gutters class="mt-5 mb-5">
        <v-col class="ml-5 mr-5">
          <div v-if="this.empProfileData.previousExperience.length">
            
               <p
              class="pa-2 header"
              style="font-size:15px;font-weight:600;color:#166AB8;margin-bottom:-2px"
            > Pre RE Work Experience</p>
             <p  class="pt-3" style="font-size:12px;font-weight:400;color:black;margin-bottom:-2px">
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
        </v-col>
        <v-col class="ml-5 mr-5">
          <div  v-if="this.empProfileData.insideExperience.length">
            <p
              class="pa-2 header"
              style="font-size:15px;font-weight:600;color:#166AB8;margin-bottom:-2px"
            > RE Work Experience</p>
             <p  class="pt-3" style="font-size:12px;font-weight:400;color:black;margin-bottom:-2px">
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
        </v-col>
      </v-row>
     <v-divider></v-divider>
      <v-row no-gutters class="mt-5 mb-5">
        <v-col class="ml-5 mr-5" v-if="this.empProfileData.competencyRating.length">
           <p
              class="pa-1 header"
              style="text-align:center;font-size:15px;font-weight:600;color:#166AB8;margin-bottom:-2px"
            > Competency Rating</p>   
          <table class="performance-table" style="font-size:12px;font-weight:500;">
           <tbody>
                  <tr v-for="(data, k) in competencyRating" :key="'competencyRating'+k">
                    <td
                      style="width:73%;font-size:12px;font-weight:500;color:black;margin-bottom:-2px"
                    >{{data.source}}({{data.module}})</td>
                    <td class="text-left">
                      {{data.rating}}/{{data.max}}
                   
                    </td>
                  </tr>
                </tbody>
          </table>
        </v-col>
        <v-col class="ml-2 mr-2" v-if="this.empProfileData.performanceRating.length">
          <p
              class="pa-2 header"
              style="text-align:center;font-size:15px;font-weight:600;color:#166AB8;margin-bottom:-2px"
            > Performance Rating</p>
          <table class="performance-table"  style="font-size:12px;font-weight:500;">
            <tbody>
                  <tr v-for="(data, k) in performanceRating" :key="'performanceRating'+k">
                    <td
                      style="width:63%;font-size:12px;font-weight:500;color:black;margin-bottom:-2px"
                    >Perf Rating FY {{getRatingYear(data.startDate, data.endDate)}}</td>
                    <td class="text-left">
                     {{data.rating}}/{{data.max}}
                   
                    </td>
                  </tr>
                </tbody>
          </table>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row>

        <v-col v-if="this.empProfileData.performanceRating &&
      this.empProfileData.potentialRating">
           <p
              class="pa-2 header"
              style="text-align:center;font-size:15px;font-weight:600;color:#166AB8;margin-bottom:-2px"
            > 9 Grid Box</p>
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
                  id="rect21"
                  stroke="rgb(217,217,217)"
                  stroke-width="1"
                  fill="rgb(217,217,217)"
                />
                <text
                  x="470"
                  y="115"
                  text-anchor="middle"
                  id="text21"
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
        </v-col>
      </v-row>
      <v-divider ></v-divider>
    </v-container>
  </v-card>
</template>
<script>
import moment from "moment";
import $ from "jquery";
export default {
  name: "TemplateThree",
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
         if(parseInt(element.max)==20)
        {
           element.max=element.max/4
           element.rating=element.rating/4
        }
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

    
  }
}

</script>

<style scoped>
.name {
  letter-spacing: 3px;
}
.header {
  letter-spacing: 2px;
}
.column-header
{
    font-weight: 700;
}
</style>