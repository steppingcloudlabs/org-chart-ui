<template>
    <v-row justify="center">
      <v-dialog
        v-model="showmergedialog"
        persistent
        max-width="600px"
      >
        <v-card>
          <v-card-title>
            <span class="text-h5">Merge Departments</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row >
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                >
                <v-select
          :items="['Yes','No']"
          label="Do you want to merge the department"
          v-model="mergeDepartment"
        ></v-select>
                </v-col>
              
             
               
              
                <v-col
                  cols="6"
                  sm="6"
                
                >
                  <v-autocomplete
                    :items="this.showdeptView"
                    label=" Select first department to merge"
                    item-text="details.name"
                    item-id ="id"
                    return-object
                    v-model="Department1">
                 <!-- Dropdown items -->
                 <template v-slot:item="data">
                      <v-list-item-content>
                        <v-list-item-title>
                          {{ data.item.details.name }}
                        </v-list-item-title>
                        <v-list-item-subtitle class="text--secondary">
                          {{ data.item.id }}
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </template>

                    <!-- Selected values (chips / text) -->
                    <template v-slot:selection="data">
                      <span>{{ data.item.details.name }}</span>
                    </template>
                </v-autocomplete>
                </v-col>
                <v-col
                  cols="6"
                  sm="6"
                
                >
                  <v-autocomplete
                    :items="this.showdeptView"
                    label=" Select second department  to merge"
                    item-text="details.name"
                    item-id ="id"
                    return-object
                    v-model="Department2"
                  
                  >
                   <!-- Dropdown items -->
                 <template v-slot:item="data">
                      <v-list-item-content>
                        <v-list-item-title>
                          {{ data.item.details.name }}
                        </v-list-item-title>
                        <v-list-item-subtitle class="text--secondary">
                          {{ data.item.id }}
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </template>

                    <!-- Selected values (chips / text) -->
                    <template v-slot:selection="data">
                      <span>{{ data.item.details.name }}</span>
                      </template>
                </v-autocomplete>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="6"
                 
                >
                  <v-text-field
                    label="New Department Code"
                    v-model="newDepartment.externalcode"
                    required
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="6"
                 
                >
                  <v-text-field
                    label="Head of Department"
                    v-model="newDepartment.headOfUnit"
                    hint="example of persistent helper text"
                  
                    required
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
             
                >
                  <v-text-field
                    label="New Department Description"
                    v-model="newDepartment.description"
                    hint="example of helper text only on focus"
                  ></v-text-field>
                </v-col>
               
                <v-col cols="6"  >
                  <v-text-field
                    label="Start Date"
                    v-model="newDepartment.startDate"
                  
                  ></v-text-field>
                </v-col>
                <v-col cols="6" >
                  <v-text-field
                    label="End Date"
                    v-model="newDepartment.endDate"
                    :readonly="false"
                    
                  ></v-text-field>
               </v-col>
              

              </v-row>
            </v-container>
            

            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-1"
              text
              @click="showmergedialog = false"
            >
              Close
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              @click="saveDialog()"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </template>

<script>
export default {
  data: () => ({
    userList:[],
    mergeDepartment:"",
    transferEmployees:"",
    Department1:{},
    Department2:{},
    newDepartment:{"externalcode":"","description":"","startDate":"","endDate":"","headOfUnit":"","directreports":"","name":""}
    
  }),
  computed: {
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
    
    showselecteddept: {
      get() {
        return this.$store.getters.getSelectedDept;
        // return true;
      },
      set(data) {
        this.$store.commit("setSelectedDept", data);
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
    }
  },
  methods:
  {
    saveDialog()
    {    
        let index1=this.showdeptView.findIndex(item => item.id === this.Department1.id);
        let index2=this.showdeptView.findIndex(item => item.id === this.Department2.id);
        this.newDepartment.name=this.newDepartment.description
        this.userList.push(...this.showdeptView[index1].users)
        this.userList.push(...this.showdeptView[index2].users)
       var newObj={"id":this.newDepartment.externalcode,"details":this.newDepartment,"users":this.userList}
       this.showdeptView.unshift(newObj);
       this.showdeptView[index1].users=[]
       this.showdeptView[index2].users=[]
       this.showdeptView[index2].details.status='I'
       this.showdeptView[index1].details.status='I'
       this.showmergedialog = false
      
      

    },
  }
}
</script>
<style>
.v-text-field input {
    opacity:200 !important;
}
</style>