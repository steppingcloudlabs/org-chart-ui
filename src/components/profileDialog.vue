<template>
  <v-row justify="center">
    <v-dialog
      v-model="showProfileDialog"
      fullscreen
      hide-overlay
      transition="dialog-right-transition"
    >
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="showProfileDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>User Profile</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="showProfileDialog = false">Print</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <div class="container">
          <div class="division"  id="div-1">
        <div class="displayImage">
           <img src="placeholder.png" class='avatar'/>
          </div>

    
     <div class="nextToImage">
     
     <span  class="FieldTag">Position</span>
     <span class="FieldValue">Test</span><br>
     <span class="FieldTag">Incumbent</span>
     <span class="FieldValue">Test</span><br>
     <span class="FieldTag">Designation</span>
     <span class="FieldValue">Test</span><br>
     <span class="FieldTag" style="margin-right:30px">DOB</span>
     <span class="FieldValue">Test</span>
     <span class="FieldTag" style="margin-left:15px !important">DOR</span>
     <span class="FieldValue" style="position:relative;left:-25px">Test</span>
     </div>
     
    
     <div class="belowImage">
     <span class="FieldTag1">Academics</span>
     <span class="FieldValue1 " >
     <ul style="padding:15px">
     <li>
     BSc (Hons) Mech. Engg, Univ. of Southampton - 1987
     </li>
     <li>
     Leading Product Development, HBS - 2008
     </li>
     </ul>
     </span><br>
     <span class="FieldTag1">Pre- Re Work experience</span>
     <span class="FieldValue1" style="height:150px !important">
     <ol type="1" style="padding:15px">
     <li>
     Triumph Motorcycles - Design Engineer (Jan 1997 - Jan 2006)
     </li>
     <li>
     Triumph Motorcycles - Product Manager (Jan 2006 - Oct 2014)
     </li>
     </ol>
     </span><br>
     <span class="FieldTag1">Re work experience</span>
     <span class="FieldValue1" style="height:150px !important">
     <ol type="1" style="padding:15px">
     <li>
     Joined in Jan 2015 as Head of Product Planning and Strategy
     </li>
     <li>
    Managed Product Development from Jul 2015
     </li>
     <li>
     Re-designated as Head Product Development in Aug 2016
     </li>
     </ol>
     </span><br>
      
     </div>
   </div>
   



   
   <div class="division"  >
    
   
    <div class="division" id="nesteddivision">
    <div class="behaviourTags">RE Behaviours</div>
    <div class="behaviourTags"><p>Levels</p>
     <p>1&nbsp;2&nbsp;3&nbsp;4&nbsp;5</p>
    </div><br>
    <div class="behaviourfield">Empowering LeaderShip</div>
    <div class="behaviourrating"><img src="rating.png" class="rating"></div><br>
    <div class="behaviourfield">Customer Advocacy</div>
    <div class="behaviourrating"><img src="rating.png" class="rating"></div><br>
    <div class="behaviourfield">Thinking unconditional</div>
    <div class="behaviourrating"><img src="rating.png" class="rating"></div><br>
    <div class="behaviourfield">Boundaryless collaboration</div>
    <div class="behaviourrating"><img src="rating.png" class="rating"></div><br>
    <br>
    <br>
    <br>
    <hr>
    </div>
    

    
    <div class="division" id="nesteddivision">
    
    <div class="behaviourfield">Perf  Rating FY16-17</div>
    <div class="behaviourrating"><img src="rating.png" class="rating"></div><br>
    <div class="behaviourfield">Perf  Rating FY17-18</div>
    <div class="behaviourrating"><img src="rating.png" class="rating"></div><br>
    <div class="behaviourfield">Perf  Rating FY18-19</div>
    <div class="behaviourrating"><img src="rating.png" class="rating"></div><br>
    <div class="behaviourfield">Pot Rating 2019</div>
    <div class="behaviourrating"><img src="rating.png" class="rating"></div><br>
    <div class="behaviourfield">Culture Fit</div>
    <div class="behaviourrating"><img src="rating.png" class="rating"></div><br>
    <div class="behaviourfield">Position Criticality</div>
    <div class="behaviourrating"><img src="rating.png" class="rating"></div><br>
    <div class="behaviourfield">Talent Risk</div>
    <div class="behaviourrating"><img src="rating.png" class="rating"></div><br>
    <hr>
    </div>

    
    <div class="division">
    <p style="text-align:center;color:goldenrod">Strengths</p>
    <div  class="twoblocks">
    <ul style="margin-left:20px;margin-top:10px">
    <li>
    Systematic approach in overall PD Administration, government liasioning in UK, relationship management and poised leader

    </li>
    <li>
    Able administrator, good communication skills, perseverance
    </li>
    
    </ul>
    </div>
    <hr>
    </div>
    
    
     <div class="division">
     <p style="text-align:center;color:goldenrod">Areas of Devlopment</p>
    <div class="twoblocks">
    <ul style="margin-left:20px;margin-top:10px">
    <li >
      Review and provide clarity on resolving issues
    </li> 
     </ul>
    </div>
    <hr>
    </div>
     
     
    <p style="text-align:center;margin-top:10px;margin-bottom:10px;color:goldenrod">9 Grid Box</p>
    
    <div class="outer-grid" id="gridbox">
    </div>
     <p style="text-align:center;margin-top:10px;margin-bottom: 10px;color:goldenrod">Performance</p>
    


   </div>
   



   <div class="row">
   <hr>
   
   <div class="division">
   <div class="lowersection">
   <div class="lowersectiontag"> </div>
   <div class="lowersectionvalue" style="background-color:white!important;color:goldenrod">Proposed Position </div>
   <div class="lowersectionrating" style="top:0px !important">Position Readiness </div><br>
   <div class="lowersectiontag">Proposed role within function </div>
   <div class="lowersectionvalue"></div>
   <div class="lowersectionrating"><img src="rating.png" class="rating"></div><br>
   <div class="lowersectiontag">Proposed role outside function </div>
   <div class="lowersectionvalue"></div>
   <div class="lowersectionrating"><img src="rating.png" class="rating"></div><br>
   </div>
   </div>

   
    <div class="division">
   <div class="lowersection">
   <div class="lowersectiontag" style="min-width:100px !important"> </div>
   <div class="lowersectionvalue" style="background-color:white!important;color:goldenrod;">Proposed incumbents to the above position 
</div>
   <div class="lowersectionrating" style="top:0px !important">Incumbent Readiness </div><br>
   <div class="lowersectiontag">Incumbent 1 </div>
   <div class="lowersectionvalue"></div>
   <div class="lowersectionrating"><img src="rating.png" class="rating"></div><br>
   <div class="lowersectiontag">Incumbent 2 </div>
   <div class="lowersectionvalue"></div>
   <div class="lowersectionrating"><img src="rating.png" class="rating"></div><br>
   </div>
   </div>
</div>
</div>
  </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false
    };
  },
 
  computed: {
    showProfileDialog: {
      get() {
        return this.$store.getters.getShowProfileDialog;
        // return true;
      },
      set(data) {
        this.$store.commit("setShowProfileDialog", data);
      }
    }
  }
};
</script>

<style  scoped>


.avatar {
    width: 150px;
    height: 180px;

}


.displayImage {
    padding: 10px 10px 10px 10px;
    width: 20%;
    float: left;

}

.nextTOImage {
    padding: 10px 10px 10px 30px;
    display: table-row;
    width: 70%;
    float: left;
}

.belowImage {
    padding: 10px 10px 10px 10px;
    width: 100%;
    float: left;
    display: table-row;
}

.nextTOImage>span {
    display: table-cell
}

.belowImage>span {
    display: table-cell
}



.fieldValue {
    background-color: #EFEFEF;
    height: 30px;
    width: 330px;
    display: inline-block;
    padding-left: 10px;
}

.fieldValue1 {
    background-color: #EFEFEF;
    height: 100px;
    width: 450px;
    display: inline-block;
    position: relative;
    left: 25px;
    padding: 10px;
}

.fieldTag {
    height: 30px;
    min-width: 100px;
    display: inline-block;
    padding-left: 10px;
    color: goldenrod;

}

.fieldTag1 {
    height: 30px;
    min-width: 130px;
    max-width: 130px;
    display: inline-block;
    position: relative;
    top: 25px;
    left: 15px;
    color: goldenrod;


}

#nesteddivision {
    display: table-row;
}

#nesteddivision>div {
    display: table-cell;
}

.division {
    float: left;
    width: 50%;

    /* Should be removed. Only for demonstration */
}

.behaviourTags {

    height: 30px;
    min-width: 200px;
    display: inline-block;
    position: relative;

    left: 10px;
    color: goldenrod;

}

.behaviourfield {

    min-width: 200px;
    display: inline-block;
    position: relative;

    left: 10px;
    color: goldenrod;

}

.twoblocks {
    margin: 10px 10px 10px 20px;
    min-height: 150px;
    width: 90%;
    background: #ccc;
    padding: 10px;
}

.behaviourrating {

    min-width: 200px;
    display: inline-block;
    position: relative;

    left: 10px;
    color: goldenrod;

}

.rating {
    height: 15px;
    width: 100px;
}

.row {
    float: left;
    width: 100%;
    height: 300px;

    /* Should be removed. Only for demonstration */
}

.outer-grid {
    position: relative;
    float: left;
    width: 100%;
    padding-bottom: 33.3%;

}

.outer-square {
    position: absolute;
    left: 0;
    top: 0;
    width: 90%;
    height: 90%;

    margin: 1% 1% 2% 9%;
    display: -webkit-flex;
    -webkit-flex-wrap: wrap;
    display: flex;
    flex-wrap: wrap;
}

.inner-grid {
    width: 25.3%;
    height: 33.3%;
    border: none;
    display: table;
    background-color: #ccc;
    margin: 4px 2px 0px 10px;
}

.inner-square {
    line-height: 100%;
    font-size: 15px;
    font-weight: bold;
    display: table-cell;
    text-align: center;
    vertical-align: middle;
}

.lowersection {
    padding: 10px 10px 10px 10px;
    width: 100%;
    float: left;
    display: table-row;
}

.lowersection>div {
    display: table-cell
}

.lowersectiontag {
    height: 38px;
    min-width: 130px;
    max-width: 130px;
    display: inline-block;
    position: relative;

    left: 15px;
    color: goldenrod;

}

.lowersectionvalue {
    background-color: #EFEFEF;
    min-height: 38px;
    min-width: 300px;
    display: inline-block;
    padding-left: 10px;
    position: relative;
    left: 20px;
}

.lowersectionrating {

    min-width: 200px;
    display: inline-block;
    position: relative;
    top: 10px;
    left: 8%;
    color: goldenrod;

}

</style>