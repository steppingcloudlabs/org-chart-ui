<template>
  <div>
    <!-- Dialog -->
    <v-dialog v-model="saveDraftDialog" max-width="800px" persistent>
      <v-card>
        <!-- Title -->
        <v-card-title class="headline"> Save Plan </v-card-title>
        <!-- {{selectedDept}} -->
        <!-- {{selectedPlan}} -->
        <!-- {{finalPlanData}} -->
        <!-- Content -->
        <v-card-text>
          <v-form ref="form">
            <v-row dense>
              <v-col cols="6">
                <span>Department ID</span>
                <v-text-field
                  v-model="form.deptId"
                  outlined
                  dense
                  disabled
                  hide-details
                />
              </v-col>
              <!-- Department Name -->
              <v-col cols="6">
                <span>Department Name</span>
                <v-text-field
                  v-model="form.deptName"
                  outlined
                  dense
                  disabled
                  hide-details
                />
              </v-col>

              <v-col cols="6">
                <span>Plan Id</span>
                <v-text-field
                  v-model="form.planId"
                  outlined
                  dense
                  required
                  hide-details
                />
              </v-col>

              <v-col cols="6">
                <span>Plan Name</span>

                <v-text-field
                  v-model="form.planName"
                  outlined
                  dense
                  required
                  hide-details
              /></v-col>
              <!-- {{isEdit}} -->

              <v-col cols="6">
                <span>Plan Status</span>

                <v-autocomplete
                  v-model="form.status"
                  :items="statusOptions"
                  outlined
                  dense
                  :disabled="!isEdit"
                  hide-details
              /></v-col>

              <v-col cols="6">
                <span>Plan Version</span>
                <v-text-field
                  v-model="form.planVersion"
                  outlined
                  dense
                  disabled
                  hide-details
                />
              </v-col>

              <v-col cols="6">
                <span>Comment</span>
                <v-textarea
                  v-model="form.comment"
                  outlined
                  dense
                  rows="1"
                  auto-grow
                  hide-details
                ></v-textarea>
              </v-col>

              <v-col cols="6">
                <span>Summary</span>
                <v-textarea
                  v-model="form.summary"
                  outlined
                  dense
                  rows="1"
                  auto-grow
                  hide-details
                ></v-textarea
              ></v-col>
              <v-col cols="6">
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
                  /> </v-menu
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
        summary: "",
        comment: "",

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
     saveDraftDialog(val) {
      if (!val) return; // dialog closed → do nothing

      // safety checks
      // if (
      //   !this.finalPlanData?.originalData ||
      //   !this.finalPlanData?.currentData ||
      //   !this.form.effectiveDate
      // ) {
      //   this.form.summary = "";
      //   return;
      // }
      this.$nextTick(() => {
      if (
        !this.finalPlanData?.originalData ||
        !this.finalPlanData?.currentData
      ) return;
      const diff = this.diffNodes(
        this.finalPlanData.originalData,
        this.finalPlanData.currentData,
        // this.form.effectiveDate
      );

      this.form.summary = this.buildSummaryText(diff);
      })
    },
    isEdit(val) {
      console.log("val===============", val);
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
    diffNodes(original, current) {
      // Build fast lookup maps by id
      const originalMap = new Map(original.map((o) => [o.id, o]));
      const currentMap = new Map(current.map((c) => [c.id, c]));

      const add = [];
      const del = [];
      const update = [];

      // 1) Check current -> find new & updated
      for (const [id, curNode] of currentMap.entries()) {
        const origNode = originalMap.get(id);

        if (!origNode) {
          // id exists only in current => ADD
          // add.push(curNode);
      var addNode = {};
          console.log("Node to be added", curNode);
          //addNode["code"]=curNode["id"],
          //addNode["businessUnit"] = curNode["businessUnit"],
          (addNode["department"] = curNode["department"]),
            (addNode["costCenter"] = curNode["costCenter"]),
            (addNode["vacant"] = true),
            (addNode["targetFTE"] = "1"),
            (addNode["payGrade"] = curNode["userPayGrade"]),
            (addNode["positionCriticality"] = "0"),
            (addNode["effectiveStatus"] = "A"),
            (addNode["positionTitle"] = curNode["positionTitle"]);
          addNode["jobTitle"] = curNode["positionTitle"];
          addNode["parentPosition"] = {
            code: curNode.pid,
            // effectiveStartDate: effectiveDate,
          };

          add.push({ ...addNode});
          // add.push({ ...addNode, effectiveStartDate: effectiveDate });
        } else {
          // id exists in both => check pid change
          if (origNode.pid !== curNode.pid) {
            // you can push just curNode or include oldPid for reference
            update.push({
              ...curNode,
              code: curNode.id,

              newPid: curNode.pid,
              oldPid: origNode.pid, // optional, for tracking
            });
          }
        }
      }

      // 2) Check original -> find deleted
      for (const [id, origNode] of originalMap.entries()) {
        if (!currentMap.has(id)) {
          // id exists only in original => DELETE
          // del.push(origNode);
          del.push({ code: origNode.id, positionTitle: origNode.positionTitle});
        }
      }
      console.log("add===", add);
      console.log("del===", del);
      console.log("update===", update);

      return { add, del, update };
    },
       buildSummaryText({ add, del, update }) {
      console.log("Inside buildSummaryText");
      const lines = [];

      update.forEach((u) => {
        lines.push(
          `🟠 Position ${u.positionTitle} (${u.code}) is now reporting to ${u.newPid}, previously reporting to ${u.oldPid}.`
      //    `<li class="summary-update">
      //   Position ${u.positionTitle || "Position"} (${u.code})
      //   is now reporting to ${u.newPid},
      //   previously reporting to ${u.oldPid}.
      // </li>`
        );
        console.log("text===")
      });

      add.forEach((a) => {
        lines.push(`🟢 Position ${a.positionTitle || ""} added under parent ${a.parentPosition.code}.`);
    //    lines.push(
    //   `<li class="summary-add">
    //     Position ${a.positionTitle || ""} added under parent ${a.parentPosition.code}.
    //   </li>`
    // );
      });

      del.forEach((d) => {
//  lines.push(
//       `<li class="summary-delete">
//         Position ${d.code} has been deleted.
//       </li>`
//     );
        lines.push(`🔴 Position ${d.positionTitle} (${d.code}) deleted`);
      });

      return lines.join("\n");
      // return `<ul>${lines.join("")}</ul>`;
    },
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
          this.$store.commit("SHOW_TOAST", {
            message: "Plan saved successfully",
            color: "success",
          });
        })
        .catch((err) => {
          console.error("Failed to load saved plan", err);
          this.$store.commit("SHOW_TOAST", {
            message: err?.message || "Something went wrong",
            color: "error",
          });
        });
    },
  },
};
</script>
