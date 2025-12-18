<template>
    <v-container fluid class="px-6">
      <!-- <v-toolbar
      color='primary accent-4'
      dark flat class="px-6" >
      
      <v-toolbar-title>
        Department List
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn text outlined @click="openDialog()">
        <span>Merge Departments</span>
        <v-icon>mdi-merge</v-icon>
      </v-btn>
    </v-toolbar> -->
      <v-row class="pt-5" dense>
        <!-- Loop through cardsData and create Vuetify cards dynamically -->
        <v-col v-for="(card, index) in showdeptView" :key="index" cols="12" md="4">
          <v-card color="grey" v-if="card.details.status=='I'">
            <v-card-title>{{ card.details.name }}</v-card-title>
            <v-card-text v-if="card.details.headOfUnitNav">
              {{ card.details.headOfUnitNav.defaultFullName }}({{ card.details.externalCode }})
            </v-card-text>
            <v-card-text v-else>
              No Head of Department ({{ card.details.externalCode }})
            </v-card-text>
               <v-spacer></v-spacer>

          <!-- Action -->
          <v-divider></v-divider>
          <v-card-actions class="justify-end">
            <v-btn
              text
              color="primary"
              @click="getUserListView(card)"
            >
              {{ card.details.headOfUnitNav ? 'Update' : 'Start Planning' }}
            </v-btn>
          </v-card-actions>

             <!-- Colored text strip at the bottom of the card -->
          <!-- <v-card-actions v-if="card.details.headOfUnitNav" class="color-strip-green">
            <v-spacer></v-spacer>
            <v-btn  text @click="getUserListView(card)">Update</v-btn>
          </v-card-actions>

          <v-card-actions v-else class="color-strip-red">
            <v-spacer></v-spacer>
            <v-btn color="white" text @click="getUserListView(card)">Start Planning</v-btn>
          </v-card-actions> -->
          </v-card>
          <v-card  v-else>
            <v-card-title>{{ card.details.name }}</v-card-title>
            <v-card-text v-if="card.details.headOfUnitNav">
              {{ card.details.headOfUnitNav.defaultFullName }}({{ card.details.externalCode }})
            </v-card-text>
            <v-card-text v-else>
              No Head of Department ({{ card.details.externalCode }})
            </v-card-text>

             <!-- Colored text strip at the bottom of the card -->
          <!-- <v-card-actions v-if="card.details.headOfUnitNav" class="color-active-green">
            <v-spacer></v-spacer>
            <v-btn  text @click="getUserListView(card)">Update</v-btn>
          </v-card-actions>

          <v-card-actions v-else class="color-active-red">
            <v-spacer></v-spacer>
            <v-btn color="white" text @click="getUserListView(card)">Start Planning</v-btn>
          </v-card-actions> -->
             <v-spacer></v-spacer>

          <!-- Action -->
          <v-divider></v-divider>
          <v-card-actions class="justify-end">
            <v-btn
              text
              color="primary"
              @click="getUserListView(card)"
            >
              {{ card.details.headOfUnitNav ? 'Update' : 'Start Planning' }}
            </v-btn>
          </v-card-actions>
          </v-card>
         </v-col>
      </v-row>
      <mergedialog></mergedialog>
    </v-container>
  </template>
  
  <script>
import mergedialog from './updates/mergedialog.vue';
  export default {
    components:
  {
    mergedialog
  },
    data() {
      return {
        // Sample data for cards
        cardsData: [],
      };
    },
    computed: {
    showdeptUser: {
      get() {
        return this.$store.getters.getdeptUserData;
        // return true;
      },
      set(data) {
        this.$store.commit("setdeptUserData", data);
      }
    },
    showdeptView: {
      get() {
        return this.$store.getters.getDepartmentList;
        // return true;
      },
      set(data) {
        this.$store.commit("setDepartmentList", data);
      }
    },
    showselecteddept: {
      get() {
        return this.$store.getters.getSelectedDept;
        // return true;
      },
      set(data) {
        this.$store.commit("setSelectedDept", data);
      }
    },
    showmergedialog:
    {
        get() {
        return this.$store.getters.getshowmergedialog;
        // return true;
      },
      set(data) {
        this.$store.commit("setshowmergedialog", data);
      }

    },
    showoverlay: {
      get() {
        return this.$store.getters.getshowoverlay;
        // return true;
      },
      set(data) {
        this.$store.commit("setshowoverlay", data);
      }
    },
    
},
    methods:{
        openDialog()
        {
          this.showmergedialog=true
        },
        getdepartmentView()
        {
          this.showoverlay=true
            this.$store
        .dispatch("getAllDepartmentView")
        .then((response) => {
          var  dept=[]
          for (var i = 0; i < response.length; i++)
          {
            var newObj = {
                  id: response[i].externalCode,
                  details: response[i],
                  users: []
              }; 
            dept.push(newObj)
          }    
          this.showoverlay=false         
          this.showdeptView = dept;
         
        })
        },
        getUserListView(data)
        {
          
            console.log(data)
            let index=this.showdeptView.findIndex(item => item.id === data.id);
            this.showselecteddept=this.showdeptView[index]
        //     if(this.showdeptView[index].users.length<=0)
        //     {
        //       this.$store
        //       .dispatch("getDepUser",data)
        //       .then((response) => {
              
        //         this.showdeptView[index].users = response;
        //         this.showselecteddept=this.showdeptView[index]
        //         console.log(this.showdeptView[index])
               
        // })
        //     }
        //     else{
        //       this.showselecteddept=this.showdeptView[index]
        //     }
           
            this.$router.push({ path: "/detailplan" })
          
        },
       
        getDetails()
        {

            this.$router.push({ path: "/detailplan" })
        }
    },
    mounted()
    {  
        if(this.showdeptView.length<=0)
        {
          this.getdepartmentView()
        }
       
    }
  };
  </script>
  
  <style scoped>
  .color-strip-green {
  background-color: #172017; /* Change the color as per your preference */
  color: white;
}
.color-strip-red {
  background-color: rgb(63, 59, 59); /* Change the color as per your preference */
  color: white;
}

.color-active-green {
  background-color: rgb(3, 96, 3); /* Change the color as per your preference */
  color: white;
}
.color-active-red {
  background-color: rgb(71, 3, 3); /* Change the color as per your preference */
  color: white;
}
  /* Add your component-specific styles here if needed */
  </style>
  