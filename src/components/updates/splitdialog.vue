<template>
    <v-row justify="center">
      <v-dialog
        v-model="showsplitdialog"
        persistent
        max-width="600px"
      >
        <v-card>
          <v-card-title>
            <span class="text-h5">Split Department</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row >
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
               
                <v-col cols="6">
                  <v-text-field
                    label="Start Date"
                    v-model="newDepartment.startDate"
                  
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    label="End Date"
                    v-model="newDepartment.endDate"
                    :readonly="false"
                    
                  ></v-text-field>
               </v-col>
                <v-col
                  cols="12"
                  sm="12"
                >
                  <v-autocomplete
                    :items="this.showselecteddept.users"
                    label=" Move Positions"
                    item-text="positionTitle"
                    item-value="positionId"
                   return-object
                    v-model="userList"
                    multiple>
                    <!-- Dropdown items -->
                    <template v-slot:item="data">
                      <v-list-item-content>
                        <v-list-item-title>
                          {{ data.item.positionTitle }}
                        </v-list-item-title>
                        <v-list-item-subtitle class="text--secondary">
                          {{ data.item.positionId }}
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </template>

                    <!-- Selected values (chips / text) -->
                    <template v-slot:selection="data">
                      <span>{{ data.item.positionTitle }}</span>
                    </template>
                  ></v-autocomplete>
                </v-col>
                <v-col
                  cols="12"
                  sm="12"
                >
                <v-checkbox
                v-model="newDepartment.directreports"
                    label="Include direct reports"
                    
                    ></v-checkbox>
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
              @click="showsplitdialog = false"
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
    dialog: false,
    checkbox:false,
    newDepartment:{"externalcode":"","description":"","startDate":"","endDate":"","headOfUnit":"","directreports":"","name":""}
  }),
  computed: {
    showsplitdialog: {
      get() {
        return this.$store.getters.getshowsplitdialog;
        // return true;
      },
      set(data) {
        this.$store.commit("setshowsplitdialog", data);
      }
    },
    showselecteddept: {
      get() {
        return this.$store.getters.getselectedDept;
        // return true;
      },
      set(data) {
        this.$store.commit("setselectedDept", data);
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
        this.showoverlay=true
        this.newDepartment.name=this.newDepartment.description
       var newObj={"id":this.newDepartment.externalcode,"details":this.newDepartment,"users":this.userList}
       this.showdeptView.unshift(newObj);
       console.log(this.showdeptView[0])
       let index=this.showdeptView.findIndex(item => item.id === this.showselecteddept.id);
       this.showdeptView[index].users = this.showdeptView[index].users.filter(obj => {
  return !this.userList.some(removeObj => removeObj.subtitle === obj.subtitle);
});
       this.showsplitdialog = false
       this.showoverlay=false

    }
  }
}
</script>
<style>
.v-text-field input {
    opacity:200 !important;
}
</style>