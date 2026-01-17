<template>
  <v-dialog v-model="addPositionDialog" max-width="600px" persistent>
    <v-card>
      <v-card-title class="headline"> Add Position </v-card-title>
      <!-- {{currentNodeData}} -->
      <v-card-text>
        <v-form ref="form">
          <v-container fluid>
            <!-- Position Code -->
            <v-row align="center" class="form-row">
              <v-col
                cols="5"
                class="label-col"
                style="text-align: right; padding-right: 16px"
              >
                Position Code <span class="required">*</span>
              </v-col>
              <v-col cols="7"> </v-col>
            </v-row>

            <!-- Start Date -->
            <v-row align="center" class="form-row">
              <v-col
                cols="5"
                class="label-col"
                style="text-align: right; padding-right: 16px"
              >
                Start Date <span class="required">*</span>
              </v-col>
              <v-col cols="7">
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
                      hide-details
                    />
                  </template>
                  <v-date-picker
                    v-model="form.startDate"
                    @input="dateMenu = false"
                  />
                </v-menu>
              </v-col>
            </v-row>

            <!-- Change Reason -->
            <v-row align="center" class="form-row">
              <v-col
                cols="5"
                class="label-col"
                style="text-align: right; padding-right: 16px"
              >
                Change Reason
              </v-col>
              <v-col cols="7">
                <v-select
                  v-model="form.changeReason"
                  :items="changeReasonOptions"
                  item-text="text"
                  item-value="value"
                  outlined
                  dense
                  hide-details
                />
              </v-col>
            </v-row>

            <!-- Select Job Code -->
            <v-row align="center" class="form-row">
              <v-col
                cols="5"
                class="label-col"
                style="text-align: right; padding-right: 16px"
              >
                Select Job Code
              </v-col>
              <v-col cols="7">
                <v-select
                  v-model="form.jobCode"
                  :items="jobCode"
                  :item-text="(item) => `${item.name} (${item.jobCode})`"
                  item-value="jobcode"
                  outlined
                  dense
                  hide-details
                />
              </v-col>
            </v-row>

            <!-- Position Title -->
            <v-row align="center" class="form-row">
              <v-col
                cols="5"
                class="label-col"
                style="text-align: right; padding-right: 16px"
              >
                Position Title <span class="required">*</span>
              </v-col>
              <v-col cols="7">
                <v-text-field
                  v-model="form.positionTitle"
                  outlined
                  dense
                  hide-details
                  placeholder="Click or focus to edit"
                />
              </v-col>
            </v-row>

            <!-- Job Title -->
            <v-row align="center" class="form-row">
              <v-col
                cols="5"
                class="label-col"
                style="text-align: right; padding-right: 16px"
              >
                Job Title
              </v-col>
              <v-col cols="7">
                <v-text-field
                  v-model="form.jobTitle"
                  outlined
                  dense
                  hide-details
                  placeholder="Click or focus to edit"
                />
              </v-col>
            </v-row>

            <!-- Company -->
            <v-row align="center" class="form-row">
              <v-col
                cols="5"
                class="label-col"
                style="text-align: right; padding-right: 16px"
              >
                Company
              </v-col>
              <v-col cols="7">
                <v-select
                  v-model="form.company"
                  :items="LegalUnit"
                  :item-text="(item) => `${item.name} (${item.externalCode})`"
                  item-value="externalCode"
                  outlined
                  dense
                  @change="getBUByLU"
                  hide-details
                />
              </v-col>
            </v-row>

            <!-- Business Unit -->
            <v-row align="center" class="form-row">
              <v-col
                cols="5"
                class="label-col"
                style="text-align: right; padding-right: 16px"
              >
                Business Unit
              </v-col>
              <v-col cols="7">
                <v-select
                  v-model="form.businessUnit"
                  :items="BUbyLU"
                  :item-text="(item) => `${item.name} (${item.externalCode})`"
                  item-value="externalCode"
                  outlined
                  dense
                  @change="getDivisionByBU"
                  hide-details
                />
              </v-col>
            </v-row>

            <!-- Division -->
            <v-row align="center" class="form-row">
              <v-col
                cols="5"
                class="label-col"
                style="text-align: right; padding-right: 16px"
              >
                Division
              </v-col>
              <v-col cols="7">
                <v-select
                  v-model="form.division"
                  :items="DivisionByBU"
                  :item-text="(item) => `${item.name} (${item.externalCode})`"
                  item-value="externalCode"
                  outlined
                  dense
                  @change="getdeptLoc"
                  hide-details
                />
              </v-col>
            </v-row>

            <!-- Department -->
            <v-row align="center" class="form-row">
              <v-col
                cols="5"
                class="label-col"
                style="text-align: right; padding-right: 16px"
              >
                Department
              </v-col>
              <v-col cols="7">
                <v-select
                  v-model="form.department"
                  :items="departmentByDiv"
                  :item-text="(item) => `${item.name} (${item.externalCode})`"
                  item-value="externalCode"
                  outlined
                  dense
                  hide-details
                />
              </v-col>
            </v-row>

            <!-- Location -->
            <v-row align="center" class="form-row">
              <v-col
                cols="5"
                class="label-col"
                style="text-align: right; padding-right: 16px"
              >
                Location
              </v-col>
              <v-col cols="7">
                <v-select
                  v-model="form.location"
                  :items="LocByDiv"
                  :item-text="(item) => `${item.name} (${item.externalCode})`"
                  item-value="externalCode"
                  outlined
                  dense
                  hide-details
                />
              </v-col>
            </v-row>

            <!-- Cost Centre -->
            <v-row align="center" class="form-row">
              <v-col
                cols="5"
                class="label-col"
                style="text-align: right; padding-right: 16px"
              >
                Cost Centre
              </v-col>
              <v-col cols="7">
                <v-select
                  v-model="form.costCenter"
                  :items="costCenter"
                  :item-text="(item) => `${item.name} (${item.externalCode})`"
                  item-value="externalCode"
                  outlined
                  dense
                  hide-details
                />
              </v-col>
            </v-row>

            <!-- Pay Grade -->
            <v-row align="center" class="form-row">
              <v-col
                cols="5"
                class="label-col"
                style="text-align: right; padding-right: 16px"
              >
                Pay Grade
              </v-col>
              <v-col cols="7">
                <v-select
                  v-model="form.payGrade"
                  :items="allPaygrade"
                  item-text="name"
                  item-value="externalCode"
                  outlined
                  dense
                  hide-details
                />
              </v-col>
            </v-row>

            <!-- Job Level -->
            <v-row align="center" class="form-row">
              <v-col
                cols="5"
                class="label-col"
                style="text-align: right; padding-right: 16px"
              >
                Job Level
              </v-col>
              <v-col cols="7">
                <v-select
                  v-model="form.jobLevel"
                  :items="jobLevel"
                  :item-text="(item) => `${item.label} (${item.externalCode})`"
                  item-value="externalCode"
                  outlined
                  dense
                  rows="1"
                  auto-grow
                  hide-details
                />
              </v-col>
            </v-row>

            <!-- Employee Class -->
            <v-row align="center" class="form-row">
              <v-col
                cols="5"
                class="label-col"
                style="text-align: right; padding-right: 16px"
              >
                Employee Class
              </v-col>
              <v-col cols="7">
                <v-select
                  v-model="form.empClass"
                  :items="empClass"
                  :item-text="(item) => `${item.label} (${item.externalCode})`"
                  item-value="externalCode"
                  outlined
                  dense
                  rows="1"
                  auto-grow
                  hide-details
                />
              </v-col>
            </v-row>

            <!-- FTE -->
            <v-row align="center" class="form-row">
              <v-col
                cols="5"
                class="label-col"
                style="text-align: right; padding-right: 16px"
              >
                FTE
              </v-col>
              <v-col cols="7">
                <v-textarea
                  v-model="form.fte"
                  outlined
                  dense
                  rows="1"
                  auto-grow
                  hide-details
                />
              </v-col>
            </v-row>

            <!-- Regular/ Temporary -->
            <v-row align="center" class="form-row">
              <v-col
                cols="5"
                class="label-col"
                style="text-align: right; padding-right: 16px"
              >
                Regular/ Temporary
              </v-col>
              <v-col cols="7">
                <v-select
                  v-model="form.regTemp"
                  :items="regularTempOptions"
                  item-text="text"
                  item-value="value"
                  outlined
                  dense
                  hide-details
                />
              </v-col>
            </v-row>

            <!-- Title -->
            <v-row align="center" class="form-row">
              <v-col
                cols="5"
                class="label-col"
                style="text-align: right; padding-right: 16px"
              >
                Title
              </v-col>
              <v-col cols="7">
                <v-textarea
                  v-model="form.title"
                  outlined
                  dense
                  rows="1"
                  auto-grow
                  hide-details
                  placeholder="Click or focus to edit"
                />
              </v-col>
            </v-row>

            <!-- Position Type -->
            <v-row align="center" class="form-row">
              <v-col
                cols="5"
                class="label-col"
                style="text-align: right; padding-right: 16px"
              >
                Position Type <span class="required">*</span>
              </v-col>
              <v-col cols="7">
                <v-select
                  v-model="form.posType"
                  :items="positionTypeOptions"
                  item-text="text"
                  item-value="value"
                  outlined
                  dense
                  hide-details
                />
              </v-col>
            </v-row>

            <!-- Type -->
            <v-row align="center" class="form-row">
              <v-col
                cols="5"
                class="label-col"
                style="text-align: right; padding-right: 16px"
              >
                Type
              </v-col>
              <v-col cols="7">
                <v-select v-model="form.type" outlined dense hide-details />
              </v-col>
            </v-row>

            <!-- Position Incumbent -->
            <v-row align="center" class="form-row">
              <v-col
                cols="5"
                class="label-col"
                style="text-align: right; padding-right: 16px"
              >
                Position Incumbent
              </v-col>
              <v-col cols="7">
                <v-textarea
                  v-model="form.posIncumbent"
                  outlined
                  dense
                  rows="1"
                  auto-grow
                  hide-details
                  placeholder="Click or focus to edit"
                />
              </v-col>
            </v-row>

            <!-- Description -->
            <v-row align="center" class="form-row">
              <v-col
                cols="5"
                class="label-col"
                style="text-align: right; padding-right: 16px"
              >
                Description
              </v-col>
              <v-col cols="7">
                <v-textarea
                  v-model="form.description"
                  outlined
                  dense
                  rows="1"
                  auto-grow
                  hide-details
                  placeholder="Click or focus to edit"
                />
              </v-col>
            </v-row>

            <!-- To Be Recruited -->
            <v-row align="center" class="form-row">
              <v-col
                cols="5"
                class="label-col"
                style="text-align: right; padding-right: 16px"
              >
                To Be Recruited
              </v-col>
              <v-col cols="7">
                <v-select
                  v-model="form.recruited"
                  :items="['Yes', 'No']"
                  outlined
                  dense
                  hide-details
                />
              </v-col>
            </v-row>

            <!-- Critical Position? -->
            <v-row align="center" class="form-row">
              <v-col
                cols="5"
                class="label-col"
                style="text-align: right; padding-right: 16px"
              >
                Critical Position?
              </v-col>
              <v-col cols="7">
                <v-select
                  v-model="form.criticalPos"
                  :items="['Yes', 'No']"
                  outlined
                  dense
                  hide-details
                />
              </v-col>
            </v-row>

            <!-- Subject to Position Control -->
            <v-row align="center" class="form-row">
              <v-col
                cols="5"
                class="label-col"
                style="text-align: right; padding-right: 16px"
              >
                Subject to Position Control
              </v-col>
              <v-col cols="7">
                <v-select
                  v-model="form.SubjControl"
                  :items="['Yes', 'No']"
                  outlined
                  dense
                  hide-details
                />
              </v-col>
            </v-row>

            <!-- Position Criticality -->
            <v-row align="center" class="form-row">
              <v-col
                cols="5"
                class="label-col"
                style="text-align: right; padding-right: 16px"
              >
                Position Criticality
              </v-col>
              <v-col cols="7">
                <v-select
                  v-model="form.positionCriticality"
                  :items="posCriticalityOptions"
                  :item-text="(item) => `${item.text} (${item.value})`"
                  :item-value="value"
                  outlined
                  dense
                  hide-details
                />
              </v-col>
            </v-row>

            <!-- Recruiter -->
            <v-row align="center" class="form-row">
              <v-col
                cols="5"
                class="label-col"
                style="text-align: right; padding-right: 16px"
              >
                Recruiter
              </v-col>
              <v-col cols="7">
                <v-textarea
                  v-model="form.Recruiter"
                  outlined
                  dense
                  rows="1"
                  auto-grow
                  hide-details
                />
              </v-col>
            </v-row>
            <v-row align="center" class="form-row">
              <v-col
                cols="5"
                class="label-col"
                style="text-align: right; padding-right: 16px"
              >
                Higher Level Position
              </v-col>
              <v-col cols="7">
                <span>{{ currentNodeData.positionTitle }}</span>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>

      <v-card-actions class="justify-end">
        <v-btn text @click="closeDialog"> Close </v-btn>
        <v-btn color="primary" @click="saveFormData"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.required {
  color: red;
  margin-left: 2px;
}

.form-row {
  margin-bottom: 16px;
}

.label-col {
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  white-space: nowrap;
}
</style>

<script>
export default {
  data() {
    return {
      changeReasonOptions: [
        { text: "Values to be provided", value: "New" },
        { text: "Update Position", value: "Update" },
      ],
      regularTempOptions: [
        { text: "Regular", value: "R" },
        { text: "Temporary", value: "T" },
      ],
      positionTypeOptions: [
        { text: "Active", value: "Active" },
        { text: "Inactive", value: "Inactive" },
      ],
      posCriticalityOptions: [
        { text: "Non Critical", value: "0" },
        { text: "Critical", value: "1" },
      ],
      requiredRule: [(v) => !!v || "This field is required"],
      form: {
        posCode: "",
        startDate: "",
        changeReason: "New",
        jobCode: "",
        positionTitle: "",
        jobTitle: "",
        company: "",
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
      },
    };
  },
  computed: {
    empClass: {
      get() {
        return this.$store.getters.getempClass;
      },
      set(data) {
        this.$store.commit("setempClass", data);
      },
    },
    jobLevel: {
      get() {
        return this.$store.getters.getjobLevel;
      },
      set(data) {
        this.$store.commit("setjobLevel", data);
      },
    },
    currentNodeData: {
      get() {
        return this.$store.getters.getcurrentNodeData;
      },
      set(data) {
        this.$store.commit("setcurrentNodeData", data);
      },
    },
    LegalUnit: {
      get() {
        return this.$store.getters.getLegalUnit;
      },
      set(data) {
        this.$store.commit("setLegalUnit", data);
      },
    },
    LocByDiv: {
      get() {
        return this.$store.getters.getLocByDiv;
      },
      set(data) {
        this.$store.commit("setLocByDiv", data);
      },
    },
    DivisionByBU: {
      get() {
        return this.$store.getters.getDivisionByBU;
      },
      set(data) {
        this.$store.commit("setDivisionByBU", data);
      },
    },
    departmentByDiv: {
      get() {
        return this.$store.getters.getdepartmentByDiv;
      },
      set(data) {
        this.$store.commit("setdepartmentByDiv", data);
      },
    },
    BUbyLU: {
      get() {
        return this.$store.getters.getBUbyLU;
      },
      set(data) {
        this.$store.commit("setBUbyLU", data);
      },
    },
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
    costCenter: {
      get() {
        return this.$store.getters.getcostCenter;
      },
      set(data) {
        this.$store.commit("setcostCenter", data);
      },
    },
    jobCode: {
      get() {
        return this.$store.getters.getjobCode;
      },
      set(data) {
        this.$store.commit("setjobCode", data);
      },
    },
  },
  methods: {
    getdeptLoc(division) {
      this.getDeptByDivision(division);
      this.getLocByDivision(division);
    },
    saveFormData() {
      if (!this.$refs.form.validate()) {
        return;
      }
      // proceed with save logic
    },
    closeDialog() {
      this.addPositionDialog = false;
    },
    getLU() {
      this.$store.dispatch("getLegalUnit").then((response) => {
        console.log("response=", response);
        // this.DivisionByBU = response;
        // this.form.company = "";
      });
    },
    getBUByLU(lu) {
      let dataToSend = {
        lu: lu,
      };
      this.$store
        .dispatch("getBusinessUnitByLU", dataToSend)
        .then((response) => {
          console.log("response=", response);
          // this.DivisionByBU = response;
          // this.form.businessUnit = "";
        });
    },
    getDivisionByBU(businessUnit) {
      let dataToSend = {
        businessUnit: businessUnit,
      };
      this.$store.dispatch("getDivisionByBU", dataToSend).then((response) => {
        console.log("response=", response);
        // this.DivisionByBU = response;
        // this.form.division = "";
      });
    },
    getDeptByDivision(division) {
      let dataToSend = {
        division: division,
      };
      this.$store
        .dispatch("getDepartmentByDivision", dataToSend)
        .then((response) => {
          console.log("response=", response);
          // this.DivisionByBU = response;
          // this.form.department = "";
        });
    },
    getLocByDivision(division) {
      let dataToSend = {
        division: division,
      };
      this.$store
        .dispatch("getLocationByDivision", dataToSend)
        .then((response) => {
          console.log("response=", response);
          // this.DivisionByBU = response;
          // this.form.location = "";
        });
    },
    getCostCenter() {
      this.$store.dispatch("getCostCenter").then((response) => {
        console.log("response from getCostCenter=", response);
      });
    },
    getJobCode() {
      this.$store.dispatch("getJobCode").then((response) => {
        console.log("response from getJobCode=", response);
      });
    },
    getJobLevel() {
      this.$store.dispatch("getJobLevel").then((response) => {
        console.log("response from getJobLevel=", response);
      });
    },
    getEmpClass() {
      this.$store.dispatch("getEmpClass").then((response) => {
        console.log("response from getEmplClass=", response);
      });
    },
  },
  mounted() {
    this.getLU();
    this.getCostCenter();
    this.getJobCode();
    this.getBUByLU();
    this.getDivisionByBU();
    this.getDeptByDivision();
    this.getLocByDivision();
    this.getJobLevel();
    this.getEmpClass();
    // Set Start Date to today's date (YYYY-MM-DD)
    const today = new Date().toISOString().substr(0, 10);
    this.form.startDate = today;

    this.form.empClass = "Active (1)";
    this.form.fte = "1";
    this.form.regTemp = "Regular (R)";

    this.form.posType = "Active";
    this.form.type = "Regular Position (Regular)";
    this.form.positionCriticality = "Non Critical (0)";

    this.form.recruited = "Yes";
    this.form.criticalPos = "No";
    this.form.SubjControl = "No";
    if (this.currentNodeData) {
      // set location
      this.form.costCenter = this.currentNodeData.costCenter;
      this.form.payGrade = this.currentNodeData.userPayGrade;
      this.form.fte = this.currentNodeData.fte;
      this.form.positionCriticality = this.currentNodeData.positionCritical;
      // this.form.positionTitle = this.currentNodeData.positionTitle;
      this.form.posType = this.currentNodeData.positionType;
      this.form.businessUnit = this.currentNodeData.businessUnit;
      this.form.department = this.currentNodeData.department;
      this.form.location = this.currentNodeData.location;
      this.form.division = this.currentNodeData.userDivision;
    }
  },
};
</script>
