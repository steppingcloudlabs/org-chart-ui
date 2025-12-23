<template>
  <div>
    <!-- Dialog -->
    <v-dialog v-model="saveDraftDialog" max-width="400px" persistent>
      <v-card>
        <!-- Title -->
        <v-card-title class="headline"> save draft </v-card-title>
<!-- {{selectedPlan}} -->
<!-- {{finalPlanData}} -->
        <!-- Content -->
        <v-card-text>
          <v-form ref="form">
            <span>Plan Id</span>
            <v-text-field v-model="form.planId" outlined dense required />
            <span>Plan Name</span>

            <v-text-field v-model="form.planName" outlined dense required />
            <span>Plan Status</span>

            <v-autocomplete
              v-model="form.status"
              :items="statusOptions"
              outlined
              dense
            />

            <span>Effective Date</span>

            <v-menu
              v-model="dateMenu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="form.effectiveDate"
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
              />
            </v-menu>
            <!-- From Date -->
            <span>From</span>
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
            </v-menu>

            <!-- To Date -->
            <span>To</span>
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
            </v-menu>
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
      dateMenu: false,
      fromMenu: false,
      toMenu: false,
      statusOptions: ["draft","Pending for Approval", "approved"],
      form: {
        planId: "",
        planName: "",
        status: "",
        effectiveDate: null,
        deptId: null,
        deptName: "",
        fromDate: null,
        toDate: null,

      },
    };
  },
  computed: {
     finalPlanData() {
    return this.$store.getters.getFinalPlanData
  },
      selectedPlan: {
      get() {
        return this.$store.getters.getselectedPlan;
        // return true;
      },
      set(data) {
        this.$store.commit("setselectedPlan", data);
      },
    },
    selectedDept: {
      get() {
        return this.$store.getters.getselectedDept;
        // return true;
      },
      set(data) {
        this.$store.commit("setselectedDept", data);
      },
    },
    saveDraftDialog: {
      get() {
        return this.$store.getters.getsaveDraftDialog;
        // return true;
      },
      set(data) {
        this.$store.commit("setsaveDraftDialog", data);
      },
    },
  },
  watch: {
  selectedPlan: {
    immediate: true, // runs when dialog opens or page reloads
    handler(plan) {
      if (!plan) return;

      this.form = {
        ...this.form, // keep defaults if some fields are missing
        planId: plan.planId || "",
        planName: plan.planName || "",
        status: plan.planStatus || "",
        effectiveDate: plan.planEffectiveDate || null,
        fromDate: plan.planPeriod.from || null,
        toDate: plan.planPeriod.to || null,
      };
    },
  },
},

  methods: {
    closeDialog() {
      this.saveDraftDialog = false;
    },
    saveFormData() {
      this.form.departmentId = this?.selectedDept?.details?.externalCode;
      this.form.departmentName = this?.selectedDept?.details?.name;
       // attach chart data 
  this.form.chartData = this.finalPlanData;
      console.log("Form Data:", this.form);
      this.$store
        .dispatch("CreatePlan", this.form)
        .then(() => {
          this.saveDraftDialog = false;
        })
        .catch((err) => {
          console.error("Failed to load saved plan", err);
        });
    },
  },
};
</script>
