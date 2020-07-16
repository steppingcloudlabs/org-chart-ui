<template>
  <v-card min-height="800px" max-width="50%" style="margin-left:auto;margin-right:auto;">
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
              <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
            </v-avatar>
            <p class="pt-2 name" style="font-size:20px;font-weight:600;color:#35383f">WILLIAM JHON</p>
            <p
              class="name"
              style="font-size:15px;font-weight:600;color:black; line-height: 0px; margin-top: -6px;"
            >DEVELOPER</p>
          </div>
          <v-divider style="margin-left:25px;margin-right:25px;color:#35383f"></v-divider>

          <div style="margin-left:25px">
            <p
              class="pa-1 header"
              style="font-size:15px;font-weight:600;color:#35383f;margin-bottom:-2px;text-align:center"
            >Personal Information</p>
            <div
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
          <div>
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
                  v-for="(item, i) in academics"
                  :key="i"
                  style="text-align:left;height: 33px;"
                  class="mt-2"
                >
                  <span>{{i+1}}.{{item}}</span>
                </v-row>
              </v-layout>
            </div>
          </div>
          <v-divider class="mt-5" style="margin-left:25px;margin-right:25px;color:#35383f"></v-divider>
          <div>
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
                  v-for="(item, i) in pre_work"
                  :key="i"
                  style="text-align:left;height: 33px;"
                  class="mt-2"
                >
                  <span>{{i+1}}.{{item}}</span>
                </v-row>
              </v-layout>
            </div>
          </div>
        </v-col>
        <v-col cols="7" style="background:#35383f">
          <div>
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
                  v-for="(item, i) in work"
                  :key="i"
                  style="text-align:left;height: 33px;"
                  class="mt-2"
                >
                  <span>{{i+1}}.{{item}}</span>
                </v-row>
              </v-layout>
            </div>
          </div>
          <v-divider  style="margin-left:25px;margin-right:25px;background:white"></v-divider>
          <div class="mt-2">
            <table class="performance-table" style="font-size:12px;font-weight:500;margin-left:25px">
            <tbody>
              <tr>
                <td style="font-size:15px;font-weight:600;color:white;margin-bottom:-2px" class="header">Re Behavior</td>
                <td
                  style="font-size:15px;font-weight:600;color:white;margin-bottom:-2px;"
                  class="header"
                  colspan="4"
                >Levels</td>
              </tr>
              <tr>
                <td style="width:60%"></td>
                <td style="width:10%; text-align: center" class="head">1</td>
                <td style="width:10%; text-align: center" class="head">2</td>
                <td style="width:10%; text-align: center" class="head">3</td>
                <td style="width:10%; text-align: center" class="head">4</td>
              </tr>
              <tr>
                <td class="head" style="width:60%">Empowering Leadership</td>
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
                <td class="head" style="width:60%">Customer Advocacy</td>
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
                <td class="head" style="width:60%">Thinking Unconventional</td>
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
                <td class="head" style="width:60%">Boundaryless Collaboration</td>
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
           <v-divider  style="margin-left:25px;margin-right:25px;background:white"></v-divider>
          <div class="mt-2">
             
             <table class="performance-table"  style="font-size:12px;font-weight:500;margin-left:25px">
            <tbody>
              <tr>
                <td class="head" style="width:50%">Perf Rating FY16-17</td>
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
                <td class="head">Perf Rating FY17-18</td>
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
                <td class="head">Perf Rating FY18-19</td>
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
                <td class="head">Pot Rating 2019</td>
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
                <td class="head">Culture Fit</td>
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
                <td class="head">Position Criticality</td>
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
                <td class="head">Talent Risk</td>
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
export default {
  data: () => ({
    rating: 3.5,
    star: ["Marketing", "Programming", "Management"],
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
  }),
  mounted()
  {
    this.createSvg()
  },
  methods:
  {
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

      line.setAttribute("stroke", "white");
      line.setAttribute("stroke-width", 2);

      svg.appendChild(line);

      line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", 75);
      line.setAttribute("y1", 0);
      line.setAttribute("x2", 95);
      line.setAttribute("y2", 0);
      line.setAttribute("stroke", "white");
      line.setAttribute("stroke-width", 3);
      svg.appendChild(line);

      line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", 85);
      line.setAttribute("y1", tempY + 60);
      line.setAttribute("x2", tempX + 100);
      line.setAttribute("y2", tempY + 60);
      line.setAttribute("stroke", "white");
      line.setAttribute("stroke-width", 2);

      svg.appendChild(line);

      line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", tempX + 100);
      line.setAttribute("y1", tempY + 50);
      line.setAttribute("x2", tempX + 100);
      line.setAttribute("y2", tempY + 70);
      line.setAttribute("stroke", "white");
      line.setAttribute("stroke-width", 3);
      svg.appendChild(line);

      group = document.createElementNS("http://www.w3.org/2000/svg", "g");
      text = document.createElementNS("http://www.w3.org/2000/svg", "text");
      text.setAttribute("x", 130);
      text.setAttribute("y", 2);
      text.setAttribute("text-anchor", "middle");
      text.setAttribute("id", "text1");
      text.setAttribute("fill", "white");
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
      text1.setAttribute("fill", "white");
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
      text2.setAttribute("fill", "white");
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
      text.setAttribute("fill", "white");
      text.setAttribute("font-size", "7.5");

      text1 = document.createElementNS("http://www.w3.org/2000/svg", "text");
      text1.setAttribute("x", 250);
      text1.setAttribute("y", 190);
      text1.setAttribute("text-anchor", "middle");
      text1.setAttribute("id", "text5");
      text1.setAttribute("fill", "white");
      text1.setAttribute("font-size", "7.5");

      text2 = document.createElementNS("http://www.w3.org/2000/svg", "text");
      text2.setAttribute("x", 340);
      text2.setAttribute("y", 190);
      text2.setAttribute("text-anchor", "middle");
      text2.setAttribute("id", "text6");
      text2.setAttribute("fill", "white");
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
      document.getElementById("Solid performer1").style.fill = "#B0E7E2";
      document.getElementById("svg").style.marginLeft = "-53px";
      
    }
  }
};
</script>

<style scoped>
.head
{
  font-weight:400;
  color:white
  
  
}
</style>