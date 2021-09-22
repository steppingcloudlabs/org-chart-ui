<template>
 
    
     
             <v-layout row wrap class="dialogClass">
    <v-dialog v-model="showTheme" persistent max-width="600px">    
              
                        <v-card
                           
                           
                            max-width="374"
                        >
                        <v-toolbar class="mb-5 primary">
                        <v-toolbar-title class="ml-5 white--text " >Change Theme</v-toolbar-title>
                        <div class="flex-grow-1"></div>
                        </v-toolbar>
       
                        <v-row justify="center" align="center">
                            <v-col md="4" class="shrink" >
                                Default Node Color
                            </v-col>
                            <v-col md="7" class="shrink" style="min-width: 220px;">
                                <colorpick :color.sync="colors.node"></colorpick>
                            </v-col>
                        </v-row>
                        <v-row justify="center" align="center">
                            <v-col md="4" class="shrink" >
                                Vacant Node Color
                            </v-col>
                            <v-col md="7" class="shrink" style="min-width: 220px;">
                                <colorpick :color.sync="colors.vacant"></colorpick>
                            </v-col>
                        </v-row>
                        <v-row justify="center" align="center">
                            <v-col md="4" class="shrink" >
                               Text Color
                            </v-col>
                            <v-col md="7" class="shrink" style="min-width: 220px;">
                                <colorpick :color.sync="colors.text"></colorpick>
                            </v-col>
                        </v-row>
                         <v-card-actions>
                            <div class="flex-grow-1"></div>
                            <v-btn color="accent darken-1" text @click="resetDialog">Reset to Default</v-btn>
                            <v-btn color="error darken-1" text @click="closeDialog">Cancel</v-btn>
                            <v-btn color="primary darken-1" text @click="saveDialog">Save</v-btn>
                            </v-card-actions>
                    </v-card>      
       
    </v-dialog>
             </v-layout>
              
     
           
           
 
   
  
</template>

<script>

import colorpick from "@/components/colorpicker.vue"

export default {
    components:
    {
      colorpick,
    },
  computed: {
    
    showTheme: {
      get() {
        return this.$store.getters.getshowThemeDialog;
      },
      set(data) {
        this.$store.commit("setShowTheme", data);
      },
    },
    showColor: {
      get() {
        return this.$store.getters.getColor;
      },
      set(data) {
        this.$store.commit("setColor", data);
      },
    },
    showDefaultColor: {
      get() {
        return this.$store.getters.getDefaultColor;
      },
      set(data) {
        this.$store.commit("setDefaultColor", data);
      },
    },
  },
  data() {
    return {
        tab: null,
        items: ['Color', 'Images', 'Director'],
        
      titleRules: [(v) => !!v || "Title is required"],
      bodyRules: [(v) => !!v || "Body is required"],
      date: new Date().toISOString().substr(0, 10),
      menu2: false,
       colors: {
          node: "#E65100",
          vacant: "#7CB342",
          text: "#689F38"
          
        },
         defaultcolors: {
          node: "#E65100",
          vacant: "#7CB342",
          text: "#689F38"
          
        },
    };
  },
  beforeMount()
  {
    //   this.$store.dispatch('userModule/getColorTheme',{}).then((response)=>
    // {
    //   if(response.status=="200")
    //   {
    //      Object.keys(response.result).forEach(i => {
    //     this.$vuetify.theme.themes.light[i]=response.result[i];
    //      Object.keys(this.$vuetify.theme.themes.light).forEach(i => {
    //     this.colors[i]=this.$vuetify.theme.themes.light[i] ;
    //   });
    //   });
    //   }
    // })
  
    
  },
  methods: {
      resetDialog()
      {
           this.showTheme=false
           this.colors=this.showDefaultColor
          this.showColor=this.showDefaultColor
          this.cssupdtae("orgchartStyle")

        
      },
      closeDialog()
      {   console.log(this.colors.primary)
      

          this.showTheme=false
      },
      cssupdtae(titulo)
      {  
          let i=0;
        while (i<document.styleSheets.length) {
            if (document.styleSheets[i].title==titulo) {
                let y=0;
                while (y<document.styleSheets[i].cssRules.length) {
                    if (document.styleSheets[i].cssRules[y].selectorText==".node.Occupied rect") {                                               
                        document.styleSheets[i].cssRules[y].style["fill"] = this.colors.node;                                                                       
                        // y = document.styleSheets[i].cssRules.length;
                    } 
                   else if (document.styleSheets[i].cssRules[y].selectorText=="[node-id] text") {                                               
                        document.styleSheets[i].cssRules[y].style["fill"] = this.colors.text;                                                                       
                        // y = document.styleSheets[i].cssRules.length;
                    } 
                    else if (document.styleSheets[i].cssRules[y].selectorText==".node.Vacant rect") {                                               
                        document.styleSheets[i].cssRules[y].style["fill"] = this.colors.vacant;                                                                       
                        // y = document.styleSheets[i].cssRules.length;
                    } 
                    else if (document.styleSheets[i].cssRules[y].selectorText==".node.female rect") {                                               
                        document.styleSheets[i].cssRules[y].style["fill"] = this.colors.node;  
                          console.log(document.getElementById("myStyles").outerHTML)                                                                     
                        // y = document.styleSheets[i].cssRules.length;
                    } 
                    y++;
                }   
                 i=document.styleSheets.length;      
            } 
            i++;
            
        }


      },
      saveDialog()
      {
         this.showColor=this.colors
          this.cssupdtae("orgchartStyle")
          
       let data={payload:this.colors}   
       console.log(data)
        this.showTheme=false
        // var Nodeelem=document.getElementsByClassName('[node-id] rect')
        // var vacelem=document.querySelectorAll('.node.Vacant rect')
        // var textelem=document.querySelectorAll('[node-id] text')
        // for(var i=0;i<Nodeelem.length;i++)
        // {
        //     Nodeelem[i].style.fill=this.colors.node
        // }
        // for(i=0;i<vacelem.length;i++)
        // {
        //     vacelem[i].style.fill=this.colors.vacant
        // }
        // for( i=0;i<textelem.length;i++)
        // {
        //     textelem[i].style.fill=this.colors.text
        // }

               this.$store.commit("showSnackbar", {
                                color: "success",
                                duration: 1000,
                                message: "Color Theme Updated Sucessfully",
                                heading: "Success"
                                })
         
  }
  }
};
</script>