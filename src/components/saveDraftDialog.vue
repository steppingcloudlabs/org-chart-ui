<template>
  <div>
    <!-- Dialog -->
    <v-dialog v-model="saveDraftDialog" max-width="400px" persistent>
      <v-card>
        <!-- Title -->
        <v-card-title class="headline"> Save Plan </v-card-title>
        <!-- {{selectedDept}} -->
        <!-- {{selectedPlan}} -->
        <!-- {{finalPlanData}} -->
        <!-- Content -->
        <v-card-text>
          <v-form ref="form">
            <!-- Department Details (Auto-filled & Read-only) -->
            <!-- {{selectedPlan}} -->
            <span>Department ID</span>
            <v-text-field v-model="form.deptId" outlined dense disabled />

            <!-- Department Name -->
            <span>Department Name</span>
            <v-text-field v-model="form.deptName" outlined dense disabled />
            <span>Plan Id</span>
            <v-text-field v-model="form.planId" outlined dense required />
            <span>Plan Name</span>

            <v-text-field v-model="form.planName" outlined dense required />
            <!-- {{isEdit}} -->
            <span>Plan Status</span>

            <v-autocomplete
              v-model="form.status"
              :items="statusOptions"
              outlined
              dense
              :disabled="!isEdit"
            />
            <span>Plan Version</span>
            <v-text-field v-model="form.planVersion" outlined dense disabled />
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
      dateMenu: false,
      // fromMenu: false,
      // toMenu: false,
      statusOptions: ["draft", "pending approval", "approved"],
      form: {
        deptId: "",
        deptName: "",
        planId: "",
        planName: "",
        status: "",
        effectiveDate: null,
        planVersion: "",

        // fromDate: null,
        // toDate: null,
      },
    };
  },
  computed: {
 
    isEdit: {
      get() {
        return this.$store.getters.getisEdit;
        // return true;
      },
      set(data) {
        this.$store.commit("setisEdit", data);
      },
    },
    showLoading: {
      get() {
        return this.$store.getters.getshowLoading;
        // return true;
      },
      set(data) {
        this.$store.commit("setshowLoading", data);
      },
    },
    finalPlanData() {
      return this.$store.getters.getFinalPlanData;
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
      isEdit(val) {
    console.log("val===============",val)
  },
    selectedDept: {
      immediate: true,
      handler(dept) {
        if (!dept?.details) return;

        this.form.deptId = dept.details.externalCode || "";
        this.form.deptName = dept.details.name || "";
      },
    },
    selectedPlan: {
      immediate: true, // runs when dialog opens or page reloads
      handler(plan) {
        console.log("selectedPlan watcher fired:", plan);

        if (!plan) return;


        this.form = {
          ...this.form, // keep defaults if some fields are missing

          planId: plan.planId || "",
          planName: plan.planName || "",
          status: plan.planStatus || "draft",
          effectiveDate: plan.planEffectiveDate || null,
          planVersion: plan.planVersion || null,
          // fromDate: plan.planPeriod.from || null,
          // toDate: plan.planPeriod.to || null,
        };
      },
    },
    // isEdit: {
    //   immediate: true,
    //   handler(val) {
    //     if (!val) {
    //       // Create mode
    //       this.form.status = "draft";
    //       this.form.planVersion = "V1.0";
    //     }
    //   },
    // },
  },

  methods: {
    closeDialog() {
      this.saveDraftDialog = false;
    },
    saveFormData() {
      this.showLoading = true;
      this.form.departmentId = this.selectedDept.details.externalCode;
      this.form.departmentName = this.selectedDept.details.name;
      // attach chart data
      this.form.chartData = this.finalPlanData["currentData"];
      this.form.OriginalData = this.finalPlanData["originalData"];
      // ✅ isUpdate logic
      const isUpdate = !!this.selectedPlan?.planId;

      console.log("isUpdate:", isUpdate);
      // ✅ ADD planVersion ONLY FOR UPDATE
      if (isUpdate && this.selectedPlan?.planVersion) {
        this.form.planVersion = this.selectedPlan?.planVersion;
      }
      console.log("Form Data:", this.form);
      this.$store
        .dispatch("CreatePlan", this.form)
        //     .dispatch("CreatePlan",  {
        //   form: this.form,
        //   isUpdate: isUpdate,
        // })
        .then(() => {
          this.showLoading = false;

          this.saveDraftDialog = false;
        })
        .catch((err) => {
          console.error("Failed to load saved plan", err);
        });
    },
  },
};
</script>
