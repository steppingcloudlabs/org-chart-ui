<template>
  <div>
    <!-- Dialog -->
    <v-dialog v-model="addPositionDialog" max-width="800px" persistent>
      <v-card>
        <!-- Title -->
        <v-card-title class="headline"> Add Position </v-card-title>
        <!-- {{selectedDept}} -->
        <!-- {{selectedPlan}} -->
        <!-- {{finalPlanData}} -->
        <!-- Content -->
        <v-card-text>
          <v-form ref="form">
            <v-row dense>
              <v-col cols="6">
                <span>Position Code</span>
                <v-text-field
                  v-model="form.posCode"
                  outlined
                  dense
                  disabled
                  hide-details
                />
              </v-col>
               <v-col cols="6">
                <span>Start Date</span>

                <v-menu
                  v-model="dateMenu"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="form.startDate"
                      outlined
                      dense
                      readonly
                      append-icon="mdi-calendar"
                      v-bind="attrs"
                      v-on="on"
                    />
                  </template>

                  <v-date-picker
                    v-model="form.effectiveDate"
                    @input="dateMenu = false"
                  /> </v-menu
              ></v-col>
              <v-col cols="6">
                <span>Change Reason</span>
                <v-text-field
                  v-model="form.changeReason"
                  outlined
                  dense
                  disabled
                  hide-details
                />
              </v-col>

              <v-col cols="6">
                <span>Select Job Code</span>
                <v-text-field
                  v-model="form.jobCode"
                  outlined
                  dense
                  required
                  hide-details
                />
              </v-col>

              <v-col cols="6">
                <span>Position Title</span>

                <v-text-field
                  v-model="form.positionTitle"
                  outlined
                  dense
                  required
                  hide-details
              /></v-col>
              <!-- {{isEdit}} -->

              <v-col cols="6">
                <span>Job Title</span>

                <v-autocomplete
                  v-model="form.jobTitle"
                  :items="statusOptions"
                  outlined
                  dense
                  :disabled="!isEdit"
                  hide-details
              /></v-col>

              <v-col cols="6">
                <span>Company</span>
                <v-text-field
                  v-model="form.comapany"
                  outlined
                  dense
                  disabled
                  hide-details
                />
              </v-col>

              <v-col cols="6">
                <span>Business Unit</span>
                <v-textarea
                  v-model="form.businessUnit"
                  outlined
                  dense
                  rows="1"
                  auto-grow
                  hide-details
                ></v-textarea>
              </v-col>

              <v-col cols="6">
                <span>Division</span>
                <v-textarea
                  v-model="form.division"
                  outlined
                  dense
                  rows="1"
                  auto-grow
                  hide-details
                ></v-textarea
              ></v-col>
              <v-col cols="6">
                <span>Department</span>
                <v-textarea
                  v-model="form.department"
                  outlined
                  dense
                  rows="1"
                  auto-grow
                  hide-details
                ></v-textarea
              ></v-col>
              <v-col cols="6">
                <span>Location</span>
                <v-textarea
                  v-model="form.location"
                  outlined
                  dense
                  rows="1"
                  auto-grow
                  hide-details
                ></v-textarea
              ></v-col>
              <v-col cols="6">
                <span>Cost Centre</span>
                <v-textarea
                  v-model="form.costCenter"
                  outlined
                  dense
                  rows="1"
                  auto-grow
                  hide-details
                ></v-textarea
              ></v-col>
             <v-col cols="6">
  <span>Pay Grade</span>
  <v-select
    v-model="form.payGrade"
    :items="allPaygrade"
    item-text="name"
    item-value="externalCode"
    outlined
    dense
    hide-details
    placeholder="Select Pay Grade"
  ></v-select>
</v-col>

              <v-col cols="6">
                <span>Job Level</span>
                <v-textarea
                  v-model="form.jobLevel"
                  outlined
                  dense
                  rows="1"
                  auto-grow
                  hide-details
                ></v-textarea
              ></v-col>
              <v-col cols="6">
                <span>Employee Class</span>
                <v-textarea
                  v-model="form.empClass"
                  outlined
                  dense
                  rows="1"
                  auto-grow
                  hide-details
                ></v-textarea
              ></v-col>
              <v-col cols="6">
                <span>FTE</span>
                <v-textarea
                  v-model="form.fte"
                  outlined
                  dense
                  rows="1"
                  auto-grow
                  hide-details
                ></v-textarea
              ></v-col>
              <v-col cols="6">
                <span>Regular/ Temporary</span>
                <v-textarea
                  v-model="form.regTemp"
                  outlined
                  dense
                  rows="1"
                  auto-grow
                  hide-details
                ></v-textarea
              ></v-col>
              <v-col cols="6">
                <span>Title</span>
                <v-textarea
                  v-model="form.title"
                  outlined
                  dense
                  rows="1"
                  auto-grow
                  hide-details
                ></v-textarea
              ></v-col>
              <v-col cols="6">
                <span>Position Type</span>
                <v-textarea
                  v-model="form.posType"
                  outlined
                  dense
                  rows="1"
                  auto-grow
                  hide-details
                ></v-textarea
              ></v-col>
              <v-col cols="6">
                <span>Type</span>
                <v-textarea
                  v-model="form.type"
                  outlined
                  dense
                  rows="1"
                  auto-grow
                  hide-details
                ></v-textarea
              ></v-col>
              <v-col cols="6">
                <span>Position Incumbent</span>
                <v-textarea
                  v-model="form.posIncumbent"
                  outlined
                  dense
                  rows="1"
                  auto-grow
                  hide-details
                ></v-textarea
              ></v-col>
              <v-col cols="6">
                <span>Description</span>
                <v-textarea
                  v-model="form.description"
                  outlined
                  dense
                  rows="1"
                  auto-grow
                  hide-details
                ></v-textarea
              ></v-col>
              <v-col cols="6">
                <span>To Be Recruited</span>
                <v-textarea
                  v-model="form.recruited"
                  outlined
                  dense
                  rows="1"
                  auto-grow
                  hide-details
                ></v-textarea
              ></v-col>
              <v-col cols="6">
                <span>Critical Position?</span>
                <v-textarea
                  v-model="form.criticalPos"
                  outlined
                  dense
                  rows="1"
                  auto-grow
                  hide-details
                ></v-textarea
              ></v-col>
              <v-col cols="6">
                <span>Subject to Position Control</span>
                <v-textarea
                  v-model="form.SubjControl"
                  outlined
                  dense
                  rows="1"
                  auto-grow
                  hide-details
                ></v-textarea
              ></v-col>
              <v-col cols="6">
                <span>Position Criticality</span>
                <v-textarea
                  v-model="form.positionCriticality"
                  outlined
                  dense
                  rows="1"
                  auto-grow
                  hide-details
                ></v-textarea
              ></v-col>
              <v-col cols="6">
                <span>Recruiter</span>
                <v-textarea
                  v-model="form.Recruiter"
                  outlined
                  dense
                  rows="1"
                  auto-grow
                  hide-details
                ></v-textarea
              ></v-col>
              <v-col cols="6">
                <span>Job Function</span>
                <v-textarea
                  v-model="form.jobFun"
                  outlined
                  dense
                  rows="1"
                  auto-grow
                  hide-details
                ></v-textarea
              ></v-col>
            
            
            </v-row>

            <!-- From Date -->
            <!-- <span>From</span>
            <v-menu
              v-model="fromMenu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="form.fromDate"
                  outlined
                  dense
                  readonly
                  append-icon="mdi-calendar"
                  v-bind="attrs"
                  v-on="on"
                />
              </template>

              <v-date-picker
                v-model="form.fromDate"
                @input="fromMenu = false"
              />
            </v-menu> -->

            <!-- To Date -->
            <!-- <span>To</span>
            <v-menu
              v-model="toMenu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="form.toDate"
                  outlined
                  dense
                  readonly
                  append-icon="mdi-calendar"
                  v-bind="attrs"
                  v-on="on"
                />
              </template>

              <v-date-picker
                v-model="form.toDate"
                :min="form.fromDate"
                @input="toMenu = false"
              />
            </v-menu> -->
          </v-form>
        </v-card-text>

        <!-- Actions -->
        <v-card-actions class="justify-end">
          <v-btn text @click="closeDialog"> Close </v-btn>

          <v-btn color="primary" @click="saveFormData()"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form:{
        posCode: "",
        startDate: "",
        changeReason: "",
        jobCode: "",
        positionTitle: "",
        jobTitle: "",
        comapany: "",
        businessUnit: "",
        division: "",
        department: "",
        location: "",
        costCenter: "",
        payGrade: "",
        jobLevel: "",
        empClass: "",
        fte: "",
        regTemp: "",
        title: "",
        posType: "",
        type: "",
        posIncumbent: "",
        description: "",
        recruited: "",
        criticalPos: "",
        SubjControl: "",
        positionCriticality: "",
        Recruiter: "",
        jobFun: "",

      }
    }},
  computed: {
     addPositionDialog: {
      get() {
        return this.$store.getters.getaddPositionDialog;
       
      },
      set(data) {
        this.$store.commit("setaddPositionDialog", data);
      },
    },
     allPaygrade: {
      get() {
        return this.$store.getters.getallPaygradeData;
       
      },
      set(data) {
        this.$store.commit("setallPaygradeData", data);
      },
    },


  },
  methods:{
    closeDialog(){
      this.addPositionDialog= false;
    },
    // getPayGradeData(){
    //   this.$store.dispatch("getPayGrade").then((response) => {
    //   console.log("response from getPayGradeData=",response);
    //   this.payGradeData = response;
    //   });

    // }

  },
  mounted(){
    // this.getPayGradeData();
  }

}
</script>