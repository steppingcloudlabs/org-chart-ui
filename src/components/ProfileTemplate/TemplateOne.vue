<template>
  <v-layout row wrap>
    <div class="container">
      <div class="column" id="div-1">
        <div class="table-container">
          <table class="profile-info-table">
            <tbody>
              <tr>
                <td rowspan="4" style="width: 20%;">
                  <img id="emp-profile-img" :src="profileBasicData.img" class="avatar" />
                </td>
                <td style="width: 15%;" class="table-heading">Position</td>
                <td
                  id="emp-profile-role"
                  style="width: 16%;"
                  class="table-value"
                  colspan="3"
                >{{profileBasicData.positionTitle}}</td>
              </tr>
              <tr>
                <td style="width: 15%;" class="table-heading">Incumbent</td>
                <td style="width: 16%;" class="table-value" colspan="3">Simon Ralph Warburton</td>
              </tr>
              <tr>
                <td style="width: 15%;" class="table-heading">Designation</td>
                <td
                  id="emp-profile-designation"
                  style="width: 16%;"
                  class="table-value"
                  colspan="3"
                >{{profileBasicData.jobLevel}}</td>
              </tr>
              <tr>
                <td style="width: 15%;" class="table-heading">DOB</td>
                <td id="emp-profile-dob" style="width: 16%;" class="table-value">14-Aug-1965</td>
                <td style="width: 15%;" class="table-heading">DOR</td>
                <td style="width: 16%;" class="table-value">Aug 2023</td>
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
                <li>BSc (Hons) Mech. Engg, Univ. of Southampton - 1987</li>
                <li>Leading Product Development, HBS - 2008</li>
              </ul>
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="section-wrapper">
            <div class="heading-section">
              <p class="table-heading">Pre- RE work experience</p>
            </div>
            <div class="data-section">
              <ol>
                <li>Triumph Motorcycles - Design Engineer (Jan 1997 - Jan 2006)</li>
                <li>Triumph Motorcycles - Product Manager (Jan 2006 - Oct 2014)</li>
              </ol>
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="section-wrapper">
            <div class="heading-section">
              <p class="table-heading">RE work experience</p>
            </div>
            <div class="data-section">
              <ol>
                <li>Joined in Jan 2015 as Head of Product Planning and Strategy</li>
                <li>Managed Product Development from Jul 2015</li>
                <li>Re-designated as Head Product Development in Aug 2016</li>
              </ol>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
      <div class="column">
        <div>
          <div class="column" id="nestedcolumn">
            <table class="performance-table">
              <tbody>
                <tr>
                  <td style="width:60%" class="table-heading">RE Behaviours</td>
                  <td
                    style="width:10%; text-align: center; text-align:center"
                    class="table-heading"
                    colspan="4"
                  >Levels</td>
                </tr>
                <tr>
                  <td style="width:60%"></td>
                  <td style="width:10%; text-align: center" class="table-heading">1</td>
                  <td style="width:10%; text-align: center" class="table-heading">2</td>
                  <td style="width:10%; text-align: center" class="table-heading">3</td>
                  <td style="width:10%; text-align: center" class="table-heading">4</td>
                </tr>
                <tr>
                  <td class="table-heading" style="width:60%">Empowering Leadership</td>
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
                  <td class="table-heading" style="width:60%">Customer Advocacy</td>
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
                  <td class="table-heading" style="width:60%">Thinking Unconventional</td>
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
                  <td class="table-heading" style="width:60%">Boundaryless Collaboration</td>
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
          </div>
          <div class="column" id="nestedcolumn" style="padding-left: 20px;">
            <table class="performance-table">
              <tbody>
                <tr>
                  <td class="table-heading">Perf Rating FY16-17</td>
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
                  <td class="table-heading">Perf Rating FY17-18</td>
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
                  <td class="table-heading">Perf Rating FY18-19</td>
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
                  <td class="table-heading">Pot Rating 2019</td>
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
                  <td class="table-heading">Culture Fit</td>
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
                  <td class="table-heading">Position Criticality</td>
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
                  <td class="table-heading">Talent Risk</td>
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
          </div>
          <div class="clearfix"></div>
        </div>

        <div>
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
        </div>

        <div style="padding-top: 20px;">
          <p class="table-heading" style="text-align: center;">9 Box Grid</p>
          <div id="gridbox">
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
                  font-size="14"
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
                  font-size="14"
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
                  font-size="14"
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
                  font-size="14"
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
                  font-size="14"
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
                  font-size="14"
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
                  font-size="14"
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
                  font-size="14"
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
                  font-size="14"
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
          <p class="table-heading" style="text-align: center;">Performance</p>
        </div>
      </div>
      <div class="clearfix"></div>
      <div class="row">
        <div class="column">
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
export default {
  name: "TemplateOne",
  props: {
    profileBasicData: {
      default: undefined,
      type: Object
    }
  }
};
</script>

<style>
.container {
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
  font-size: 16px;
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
  padding: 20px;
}

.acad-exp-container .data-section {
  width: 77%;
  background-color: rgb(239, 239, 239);
  float: right;
  padding: 20px 30px;
  min-height: 140px;
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
  height: 20px;
  width: 22px;
  border-radius: 50%;
  margin: auto;
}

.strength-header {
  padding: 10px;
}

.strength-body {
  background-color: rgb(239, 239, 239);
  min-height: 150px;
  padding: 10px 30px;
  margin: 0 10px 0 0;
}

.position-container table td {
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
  width: 48%;
  padding-left: 20px;
  /* Should be removed. Only for demonstration */
}
#gridbox {
  text-align: center;
}
</style>