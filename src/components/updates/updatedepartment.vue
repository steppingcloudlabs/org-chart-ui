<template>
    <v-row justify="center">
      <v-dialog
        v-model="showupdatedialog"
        persistent
        max-width="600px"
      >
        <v-card>
          <v-card-title>
            <span class="text-h5">Update Department</span>
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
                    label="Department Code"
                    v-model="this.showselecteddept.details.externalCode"
                    required
                    readonly
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="6"
                >
                  <v-text-field
                    label="Head of Department"
                    v-model="this.showselecteddept.details.headOfUnit"
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
                    v-model="this.showselecteddept.details.description"
                    hint="example of helper text only on focus"
                  ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                >
                  <v-text-field
                    label="Department Status"
                    v-model="this.showselecteddept.details.status"
                    hint="example of helper text only on focus"
                  ></v-text-field>
                </v-col>
               
                <v-col cols="6">
                  <v-text-field
                    label="Start Date"
                    v-model="this.showselecteddept.details.startDate"
                  
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    label="End Date"
                    v-model="this.showselecteddept.details.endDate"
                    :readonly="false"
                    
                  ></v-text-field>
               </v-col>
                <!-- <v-col
                  cols="12"
                  sm="12"
                >
                  <v-autocomplete
                    :items="this.showselecteddept.users"
                    label=" Move Employees"
                    item-text="title"
                   return-object
                    v-model="userList"
                    multiple
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
                </v-col> -->

              </v-row>
            </v-container>
            

            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-1"
              text
              @click="showupdatedialog = false"
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
    showupdatedialog: {
      get() {
        return this.$store.getters.getshowupdatedialog;
        // return true;
      },
      set(data) {
        this.$store.commit("setshowupdatedialog", data);
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
        this.showoverlay=true
        let index=this.showdeptView.findIndex(item => item.id === this.showselecteddept.id);
   
       this.showdeptView[index] = this.showselecteddept
       this.showoverlay=false
       this.showupdatedialog = false
       

    }
  }
}
</script>
<style>
.v-text-field input {
    opacity:200 !important;
}
</style>