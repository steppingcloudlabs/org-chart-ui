<template>
    <v-row justify="center">
      <v-dialog
        v-model="showinactivatedialog"
        persistent
        max-width="600px"
      >
        <v-card>
          <v-card-title>
            <span class="text-h5">Inactivate Department</span>
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
          label="Do you want to inactivate the department"
          v-model="inactivateDepatment"
        ></v-select>
                </v-col>
              
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                >
                <v-select
          :items="['Yes','No']"
          v-model="transferEmployees"
          label="Do you want to move the employee to another department"></v-select>
                </v-col>
              
                <v-col
                  cols="12"
                  sm="12"
                  v-if="transferEmployees=='Yes'"
                >
                  <v-autocomplete
                    :items="this.showdeptView"
                    label=" Select department to transfer"
                    item-text="id"
                    return-object
                    v-model="newDepartment"
                  
                  ></v-autocomplete>
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
              @click="showinactivatedialog = false"
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
    inactivateDepatment:"",
    transferEmployees:"",
    newDepartment:{}
    
  }),
  computed: {
    showinactivatedialog:
    {
        get() {
        return this.$store.getters.getshowinactivatedialog;
        // return true;
      },
      set(data) {
        this.$store.commit("setshowinactivatedialog", data);
      }

    },
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
    {     this.showoverlay=true
        let index2=this.showdeptView.findIndex(item => item.id === this.showselecteddept.id);
        if(this.transferEmployees=="Yes")
        {
            let index1=this.showdeptView.findIndex(item => item.id === this.newDepartment.id);
       
       this.showdeptView[index1].users.push(...this.showdeptView[index2].users)
       this.showdeptView[index2].users=[]
        }
       
       this.showdeptView[index2].details.status='I'
       this.showoverlay=false
       this.showinactivatedialog = false
     
      

    },
  }
}
</script>
<style>
.v-text-field input {
    opacity:200 !important;
}
</style>