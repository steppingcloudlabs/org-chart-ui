<template>
  <div>
    <!-- Dialog -->
    <v-dialog v-model="approvalDialog" max-width="400px" persistent>
      <v-card>
        <!-- Title -->
        <v-card-title class="headline"> Send For Approval  </v-card-title>
<!-- {{selectedPlan}} -->
<!-- {{finalPlanData}} -->
        <!-- Content -->
        <v-card-text>
          <v-form ref="form">
            <span>Plan Id</span>
            <v-text-field v-model="form.planId" outlined dense required />
            <span>Plan Name</span>
            <v-text-field v-model="form.planName" outlined dense required />
           

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
     
      form: {
        planId: "",
       planName:"",
      
        effectiveDate: null,
        deptId: null,
      
      

      },
    };
  },
    computed: {
     showLoading: {
      get() {
        return this.$store.getters.getshowLoading;
        // return true;
      },
      set(data) {
        this.$store.commit("setshowLoading", data);
      },
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
    approvalDialog: {
      get() {
        return this.$store.getters.getapprovalDialog;
        // return true;
      },
      set(data) {
        this.$store.commit("setapprovalDialog", data);
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
        planVersion: plan.planVersion || "",
       
        effectiveDate: plan.planEffectiveDate || null,
        
      };
    },
  },
},
methods: {
    closeDialog() {
      this.approvalDialog = false;
    },
    saveFormData() {
      this.showLoading = true;
      this.form.departmentId = this?.selectedDept?.details?.externalCode;
    //   this.form.departmentName = this?.selectedDept?.details?.name;
       // attach chart data 
//   this.form.chartData = this.finalPlanData;
      console.log("Form Data:", this.form);
      this.$store
        .dispatch("SubmitPlanForApproval", this.form)
        .then(() => {
                this.showLoading = false;

          this.approvalDialog = false;
        })
        .catch((err) => {
          console.error("Failed to load saved plan", err);
        });
    },
  },
}
</script>