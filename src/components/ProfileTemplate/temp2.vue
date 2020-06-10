<template>
  <v-layout row wrap id="profile">
    <div class="maincontainer" id="profilecontainer" ref="content">
      <div class="column" id="div-1">
        <div class="table-container">
          <table class="profile-info-table">
            <tbody>
              <tr>
                <td rowspan="4" style="width: 20%;">
                  <img id="emp-profile-img" class="avatar" />
                </td>
                <td style="width: 15%;" class="table-heading">Position</td>
                <td id="emp-profile-role" style="width: 16%;" class="table-value" colspan="3">hello</td>
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
                >hello</td>
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
          <div class="column" id="nestedcolumn">
            <table class="performance-table">
              <tbody>
                <tr>
                  <td class="table-heading" style="width:40%">Perf Rating FY16-17</td>
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

        <div style="padding-top:0px;">
          <p class="table-heading" style="text-align: center;">9 Box Grid</p>
          <div id="gridbox"></div>
        </div>
      </div>
      <div class="clearfix"></div>
      <div class="row">
        <div class="column">
          <div class="position-container">
            <table style="margin-left:5px">
              <tbody>
                <tr>
                  <td style="width: 40%;"></td>
                  <td style="width: 40%;" class="table-heading">Proposed Position</td>
                  <td
                    colspan="3"
                    style="width: 20%; text-align: center;"
                    class="table-heading"
                  >Position Readiness</td>
                </tr>
                <tr>
                  <td style="width: 40%;" class="table-heading">Proposed role within function</td>
                  <td style="width: 30%;" class="table-value"></td>
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
                  <td style="width: 40%;" class="table-heading">Proposed role outside function</td>
                  <td style="width: 30%;" class="table-value"></td>
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
            <table style="margin-left:5%">
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
import $ from "jquery";

//import printJS from 'print-js'
export default {
  name: "TemplateOne",
  props: {
    profileBasicData: {
      default: undefined,
      type: Object
    }
  },
  mounted() {
    this.createSvg();
    this.printProfile();
  
  },
  methods: {
    test() {
      //  let profileCss = ["height", "width", "border", "margin", "margin-left", "margin-right", "margin-bottom",
      //   "margin-top", "padding", "padding-left", "padding-right", "padding-bottom", "padding-top", "float",
      //   "display", "border-collapse", "borderCollapse", "text-align", "color", "text-transform",
      //   "font-weight", "border-radius","stroke","stroke-width","border-radius","display","list","text-align",
      //   "font-size", "max-width","line-height","transform","table","tbody","tr","td","fill","color","background-color",
      //   "min-height","min-width","float","clear","content","overflow"]
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

    createSvg() {
      var ArrayRating = [
        ["Rough Diamond", "Future Star", "ConsistentStar"],
        ["Inconsitent performer", "Key Player", "Current Star"],
        ["Talent Risk", "Solid performer", "Consistent Performer"]
      ];
      var ArrayRating1 = [
        ["Rough Diamond1", "Future Star1", "ConsistentStar1"],
        ["Inconsitent performer1", "Key Player1", "Current Star1"],
        ["Talent Risk1", "Solid performer1", "Consistent Performer1"]
      ];
      var x = 10;
      var y = 0;
      var tempX;
      var tempY;
      // var svgx=document.getElementById("gridbox").style.width
      // var svgy=document.getElementById("gridbox").style.height
      var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("width", 600);
      svg.setAttribute("height", 200);
      svg.setAttribute("id", "svg");
      for (var i = 0; i < 3; i++) {
        x = 5;
        y = i * 55;
        for (var j = 0; j < 3; j++) {
          x = 100 + j * 150;

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
          rectangle.setAttribute("width", "130");
          rectangle.setAttribute("height", "47");
          rectangle.setAttribute("stroke", "green");
          rectangle.setAttribute("stroke-width", 1);
          rectangle.setAttribute("fill", "#EFEFEF");
          rectangle.setAttribute("id", ArrayRating1[i][j]);

          var text = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "text"
          );
          //var txt = document.createTextNode(ArrayRating[i][j]);
          text.setAttribute("x", x + 70);
          text.setAttribute("y", y + 20);
          text.setAttribute("text-anchor", "middle");
          text.setAttribute("id", ArrayRating[i][j]);
          text.setAttribute("fill", "black");
          text.setAttribute("font-size", "12");

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

      line.setAttribute("stroke", "green");
      line.setAttribute("stroke-width", 2);

      svg.appendChild(line);

      line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", 75);
      line.setAttribute("y1", 0);
      line.setAttribute("x2", 95);
      line.setAttribute("y2", 0);
      line.setAttribute("stroke", "green");
      line.setAttribute("stroke-width", 3);
      svg.appendChild(line);

      line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", 85);
      line.setAttribute("y1", tempY + 60);
      line.setAttribute("x2", tempX + 150);
      line.setAttribute("y2", tempY + 60);
      line.setAttribute("stroke", "green");
      line.setAttribute("stroke-width", 2);

      svg.appendChild(line);

      line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", tempX + 150);
      line.setAttribute("y1", tempY + 50);
      line.setAttribute("x2", tempX + 150);
      line.setAttribute("y2", tempY + 70);
      line.setAttribute("stroke", "green");
      line.setAttribute("stroke-width", 3);
      svg.appendChild(line);

      group = document.createElementNS("http://www.w3.org/2000/svg", "g");
      text = document.createElementNS("http://www.w3.org/2000/svg", "text");
      text.setAttribute("x", 130);
      text.setAttribute("y", 2);
      text.setAttribute("text-anchor", "middle");
      text.setAttribute("id", "text1");
      text.setAttribute("fill", "black");
      text.setAttribute("font-size", "8");
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
      text1.setAttribute("font-size", "8");
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
      text2.setAttribute("font-size", "8");
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
      text.setAttribute("x", 160);
      text.setAttribute("y", 190);
      text.setAttribute("text-anchor", "middle");
      text.setAttribute("id", "text4");
      text.setAttribute("fill", "black");
      text.setAttribute("font-size", "8");

      text1 = document.createElementNS("http://www.w3.org/2000/svg", "text");
      text1.setAttribute("x", 320);
      text1.setAttribute("y", 190);
      text1.setAttribute("text-anchor", "middle");
      text1.setAttribute("id", "text5");
      text1.setAttribute("fill", "black");
      text1.setAttribute("font-size", "8");

      text2 = document.createElementNS("http://www.w3.org/2000/svg", "text");
      text2.setAttribute("x", 450);
      text2.setAttribute("y", 190);
      text2.setAttribute("text-anchor", "middle");
      text2.setAttribute("id", "text6");
      text2.setAttribute("fill", "black");
      text2.setAttribute("font-size", "8");

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
      document.getElementById("Solid performer1").style.fill = "green";
      document.getElementById("svg").style.marginLeft = "-53px";
    },

    printProfile() {
      //   this.test();
      //   $("#profile").makeProfileCssInline();
      //   //var printContents = document.getElementById("#container").innerHTML;
      //   //console.log(printContents)
      this.$htmlToPaper("profilecontainer");
      //window.print();
    },
   
  }
};
</script>

<style>
.v-application p {
  margin-bottom: 3px !important;
}
.maincontainer {
  margin-left: 50px;
  margin-right: 50px;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

table tbody tr td {
  padding: 2px;
}

.profile-info-table {
  padding-right: 20px;
}

.table-heading {
  color: rgb(162, 145, 97);
  font-weight: 700;
  font-size: 10px;
  margin-bottom: 1px;
}
.performance-table {
  line-height: 0.9;
}
.profile-info-table .table-value,
.position-container .table-value {
  background-color: rgb(239, 239, 239);
  font-size: 10px;
}

.profile-info-table .avatar {
  width: 160px;
  height: 190px;
  border-radius: 0;
}

.section-wrapper {
  margin: 3px 0;
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
  min-height: 80px;
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
  padding: 0px;
}

.strength-body {
  background-color: rgb(239, 239, 239);
  min-height: 110px;
  padding: 10px 10px;
  margin: 0 5px 0 0;
  min-width: 270px;
  font-size: 10px;
}
li {
  line-height: 1.2;
}
.position-container table tbody td {
  height: 23px;
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
  padding-left: 4px;
  /* Should be removed. Only for demonstration */
}
#gridbox {
  text-align: center;
}
</style>