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
              <v-img style="border:2px" src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
            </v-avatar>
            <p class="pt-2 name" style="font-size:20px;font-weight:600;color:#166AB8">WILLIAM JHON</p>
            <p
              class="name"
              style="font-size:15px;font-weight:600;color:black; line-height: 0px; margin-top: -6px;"
            >DEVELOPER</p>
          </div>
        </v-col>
        <v-col class="ml-5 mr-5">
          <div>
            <p
              class="pa-2 header"
              style="font-size:15px;font-weight:600;color:#166AB8;margin-bottom:-2px"
            >Personal Information</p>
            <p
              class="pt-3"
              style="font-size:12px;font-weight:500;color:black;margin-bottom:-2px;margin-left:2px"
            >
              <v-row style="line-height:2px">
                <v-col class="column-header">Position:</v-col>
                <v-col>Test</v-col>
              </v-row>
              <v-row style="line-height:2px">
                <v-col class="column-header">Incumbent:</v-col>
                <v-col>Test</v-col>
              </v-row>
              <v-row style="line-height:2px">
                <v-col class="column-header">Date Of birth:</v-col>
                <v-col>24th Aug,1998</v-col>
              </v-row>
              <v-row style="line-height:2px">
                <v-col class="column-header">DOR</v-col>
                <v-col>Test</v-col>
              </v-row>
            </p>
          </div>
        </v-col>
      </v-row>
      <v-divider ></v-divider>
       <v-row no-gutters class="mt-5 mb-5">
        <v-col class="ml-5 mr-5">
          <div>
            <p
              class="pa-2 header"
              style="font-size:15px;font-weight:600;color:#166AB8;margin-bottom:-2px"
            >Academics</p>
             <p  class="pt-3" style="font-size:12px;font-weight:400;color:black;margin-bottom:-2px">
                <v-layout row wrap class="ml-1">
                <v-row
                  class="mt-2"
                  v-for="(item, i) in academics"
                  :key="i"
                  style="text-align:left;height: 33px;"
                >
                  <p>{{i+1}}.{{item}}</p>
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
          <div>
            
               <p
              class="pa-2 header"
              style="font-size:15px;font-weight:600;color:#166AB8;margin-bottom:-2px"
            > Pre RE Work Experience</p>
             <p  class="pt-3" style="font-size:12px;font-weight:400;color:black;margin-bottom:-2px">
                <v-layout row wrap class="ml-1">
                <v-row
                  class="mt-2"
                  v-for="(item, i) in pre_work"
                  :key="i"
                  style="text-align:left;height: 33px;"
                >
                  <p>{{i+1}}.{{item}}</p>
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
            > RE Work Experience</p>
             <p  class="pt-3" style="font-size:12px;font-weight:400;color:black;margin-bottom:-2px">
                <v-layout row wrap class="ml-1">
                <v-row
                  class="mt-2"
                  v-for="(item, i) in work"
                  :key="i"
                  style="text-align:left;height: 33px;"
                >
                  <p>{{i+1}}.{{item}}</p>
                </v-row>
              </v-layout>
                 </p>
          </div>
        </v-col>
      </v-row>
     <v-divider></v-divider>
      <v-row no-gutters class="mt-5 mb-5">
        <v-col class="ml-5 mr-5">
            
          <table class="performance-table" style="font-size:12px;font-weight:500;">
            <tbody>
              <tr>
                <td style="font-size:15px;font-weight:600;color:#166AB8;margin-bottom:-2px" class="header">Re Behavior</td>
                <td
                  style="font-size:15px;font-weight:600;color:#166AB8;margin-bottom:-2px;"
                  class="header"
                  colspan="4"
                >Levels</td>
              </tr>
              <tr>
                <td style="width:60%"></td>
                <td style="width:10%; text-align: center" class="heading">1</td>
                <td style="width:10%; text-align: center" class="heading">2</td>
                <td style="width:10%; text-align: center" class="heading">3</td>
                <td style="width:10%; text-align: center" class="heading">4</td>
              </tr>
              <tr>
                <td class="heading" style="width:60%">Empowering Leadership</td>
                <td style="width:10%; text-align: center">
                  <div class="perf-circle level-one-color"></div>
                </td>
                <td style="width:10%; text-align: center">
                  <div class="perf-circle level-two-color"></div>
                </td>
                <td style="width:10%; text-align: center">
                  <div class="perf-circle level-three-color"></div>
                </td>
                <td style="width:10%; text-align: center">
                  <div class="perf-circle level-four-color"></div>
                </td>
              </tr>
              <tr>
                <td class="heading" style="width:60%">Customer Advocacy</td>
                <td style="width:10%; text-align: center">
                  <div class="perf-circle level-one-color"></div>
                </td>
                <td style="width:10%; text-align: center">
                  <div class="perf-circle level-two-color"></div>
                </td>
                <td style="width:10%; text-align: center">
                  <div class="perf-circle level-three-color"></div>
                </td>
                <td style="width:10%; text-align: center">
                  <div class="perf-circle level-four-color"></div>
                </td>
              </tr>
              <tr>
                <td class="heading" style="width:60%">Thinking Unconventional</td>
                <td style="width:10%; text-align: center">
                  <div class="perf-circle level-one-color"></div>
                </td>
                <td style="width:10%; text-align: center">
                  <div class="perf-circle level-two-color"></div>
                </td>
                <td style="width:10%; text-align: center">
                  <div class="perf-circle level-three-color"></div>
                </td>
                <td style="width:10%; text-align: center">
                  <div class="perf-circle level-four-color"></div>
                </td>
              </tr>
              <tr>
                <td class="heading" style="width:60%">Boundaryless Collaboration</td>
                <td style="width:10%; text-align: center">
                  <div class="perf-circle level-one-color"></div>
                </td>
                <td style="width:10%; text-align: center">
                  <div class="perf-circle level-two-color"></div>
                </td>
                <td style="width:10%; text-align: center">
                  <div class="perf-circle level-three-color"></div>
                </td>
                <td style="width:10%; text-align: center">
                  <div class="perf-circle level-four-color"></div>
                </td>
              </tr>
            </tbody>
          </table>
        </v-col>
        <v-col class="ml-2 mr-2">
          <table class="performance-table"  style="font-size:12px;font-weight:500;">
            <tbody>
              <tr>
                <td class="heading" style="width:50%">Perf Rating FY16-17</td>
                <td></td>
                <td>
                  <div class="perf-circle perf-one-color"></div>
                </td>
                <td>
                  <div class="perf-circle perf-two-color"></div>
                </td>
                <td>
                  <div class="perf-circle perf-three-color"></div>
                </td>
                <td>
                  <div class="perf-circle perf-four-color perf-circled-border"></div>
                </td>
                <td>
                  <div class="perf-circle perf-five-color"></div>
                </td>
              </tr>
              <tr>
                <td class="heading">Perf Rating FY17-18</td>
                <td></td>
                <td>
                  <div class="perf-circle perf-one-color"></div>
                </td>
                <td>
                  <div class="perf-circle perf-two-color"></div>
                </td>
                <td>
                  <div class="perf-circle perf-three-color"></div>
                </td>
                <td>
                  <div class="perf-circle perf-four-color perf-circled-border"></div>
                </td>
                <td>
                  <div class="perf-circle perf-five-color"></div>
                </td>
              </tr>
              <tr>
                <td class="heading">Perf Rating FY18-19</td>
                <td></td>
                <td>
                  <div class="perf-circle perf-one-color"></div>
                </td>
                <td>
                  <div class="perf-circle perf-two-color"></div>
                </td>
                <td>
                  <div class="perf-circle perf-three-color"></div>
                </td>
                <td>
                  <div class="perf-circle perf-four-color perf-circled-border"></div>
                </td>
                <td>
                  <div class="perf-circle perf-five-color"></div>
                </td>
              </tr>
              <tr>
                <td class="heading">Pot Rating 2019</td>
                <td>
                  <div class="perf-circle perf-zero-color"></div>
                </td>
                <td>
                  <div class="perf-circle perf-one-color"></div>
                </td>
                <td>
                  <div class="perf-circle perf-two-color"></div>
                </td>
                <td>
                  <div class="perf-circle perf-three-color perf-circled-border"></div>
                </td>
                <td>
                  <div class="perf-circle perf-four-color"></div>
                </td>
                <td>
                  <div class="perf-circle perf-five-color"></div>
                </td>
              </tr>
              <tr>
                <td class="heading">Culture Fit</td>
                <td></td>
                <td>
                  <div class="perf-circle perf-one-color"></div>
                </td>
                <td>
                  <div class="perf-circle perf-two-color"></div>
                </td>
                <td>
                  <div class="perf-circle perf-three-color"></div>
                </td>
                <td>
                  <div class="perf-circle perf-four-color"></div>
                </td>
                <td></td>
              </tr>
              <tr>
                <td class="heading">Position Criticality</td>
                <td></td>
                <td></td>
                <td>
                  <div class="perf-circle perf-two-color"></div>
                </td>
                <td>
                  <div class="perf-circle perf-three-color"></div>
                </td>
                <td>
                  <div class="perf-circle perf-four-color"></div>
                </td>
                <td></td>
              </tr>
              <tr>
                <td class="heading">Talent Risk</td>
                <td></td>
                <td></td>
                <td>
                  <div class="perf-circle perf-two-color"></div>
                </td>
                <td>
                  <div class="perf-circle perf-three-color"></div>
                </td>
                <td>
                  <div class="perf-circle perf-four-color"></div>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row>

        <v-col>
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
                  id="rect00"
                  stroke="rgb(217,217,217)"
                  stroke-width="1"
                  fill="rgb(217,217,217)"
                />
                <text
                  x="170"
                  y="40"
                  text-anchor="middle"
                  id="Rough Diamond"
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
                  id="rect01"
                  stroke="rgb(217,217,217)"
                  stroke-width="1"
                  fill="rgb(217,217,217)"
                />
                <text
                  x="320"
                  y="40"
                  text-anchor="middle"
                  id="Future Star"
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
                  id="rect02"
                  stroke="rgb(217,217,217)"
                  stroke-width="1"
                  fill="rgb(217,217,217)"
                />
                <text
                  x="470"
                  y="40"
                  text-anchor="middle"
                  id="ConsistentStar"
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
                  id="rect10"
                  stroke="rgb(217,217,217)"
                  stroke-width="1"
                  fill="rgb(217,217,217)"
                />
                <text
                  x="170"
                  y="115"
                  text-anchor="middle"
                  id="Inconsitent performer"
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
                  id="rect11"
                  stroke="rgb(217,217,217)"
                  stroke-width="1"
                  fill="rgb(217,217,217)"
                />
                <text
                  x="320"
                  y="115"
                  text-anchor="middle"
                  id="Key Player"
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
                  id="rect12"
                  stroke="rgb(217,217,217)"
                  stroke-width="1"
                  fill="rgb(217,217,217)"
                />
                <text
                  x="470"
                  y="115"
                  text-anchor="middle"
                  id="Current Star"
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
                  id="rect20"
                  stroke="rgb(217,217,217)"
                  stroke-width="1"
                  fill="rgb(217,217,217)"
                />
                <text
                  x="170"
                  y="190"
                  text-anchor="middle"
                  id="Talent Risk"
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
                  id="rect21"
                  stroke="rgb(217,217,217)"
                  stroke-width="1"
                  fill="rgb(134, 188, 37)"
                />
                <text
                  x="320"
                  y="190"
                  text-anchor="middle"
                  id="Solid performer"
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
                  id="rect22"
                  stroke="rgb(217,217,217)"
                  stroke-width="1"
                  fill="rgb(217,217,217)"
                />
                <text
                  x="470"
                  y="190"
                  text-anchor="middle"
                  id="Consistent Performer"
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
export default {
  
  data: () => ({
      academics: [
      "BSc (Hons), Univ. of Southampton - 1987",
      "Leading Product Development, HBS - 2008"
    ],
    pre_work: [
      "Triumph-Engineer(Jan 1997-Jan 2006)",
      "Triumph-Manager(Jan 2006-Oct 2014)"
    ],
   work: [
      "Joined in Jan 2015 as Head of Product Planning and Strategy",
      "Managed Product Development from Jul 2015",
      "Re-designated as Head Product Development in Aug 2016"
    ]
  })
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