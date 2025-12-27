<template>
  <div>
    <!-- Dialog -->
    <v-dialog v-model="approvalDialog" max-width="400px" persistent>
      <v-card>
        <!-- Title -->
        <v-card-title v-if="this.selectedPlan.planStatus.toLowerCase() != 'approved'" class="headline"> Send For Approval  </v-card-title>
        <v-card-title v-if="this.selectedPlan.planStatus.toLowerCase() == 'approved'" class="headline"> Publish Plan  </v-card-title>
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

          <v-btn v-if="this.selectedPlan.planStatus.toLowerCase() != 'approved'" color="primary" @click="saveFormData()"> Save </v-btn>
          <v-btn v-if="this.selectedPlan.planStatus.toLowerCase() == 'approved'" color="green" @click="publishFormData()"> Publish </v-btn>
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
     
      finalPlanAttach() {
      return this.$store.getters.getFinalPlanAttach;
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
    finalPlanData() {
      return this.$store.getters.getFinalPlanData;
    }
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
        planStatus : plan.planStatus || "",
        effectiveDate: plan.planEffectiveDate || null,
        
      };
    },
  },
},
methods: {
  toODataDate(date) {
  return `/Date(${date.getTime()})/`;
},
  diffNodes(original, current,date) {
  // Build fast lookup maps by id
  const effectiveDate = this.toODataDate(new Date(date))
  const originalMap = new Map(original.map(o => [o.id, o]));
  const currentMap  = new Map(current.map(c => [c.id, c]));

  const add = [];
  const del = [];
  const update = [];

  // 1) Check current -> find new & updated
  for (const [id, curNode] of currentMap.entries()) {
    const origNode = originalMap.get(id);

    if (!origNode) {
      // id exists only in current => ADD
      var addNode={}
      console.log("Node to be added",curNode)
      //addNode["code"]=curNode["id"],
      //addNode["businessUnit"] = curNode["businessUnit"],
      addNode["department"] = curNode["department"],
      addNode["costCenter"] = curNode["costCenter"],
      addNode["vacant"] = true,
      addNode["targetFTE"] = "1",
      addNode["payGrade"] = curNode["userPayGrade"],
      addNode["positionCriticality"] = "0",
      addNode["effectiveStatus"] = "A",
      addNode["positionTitle"] = curNode["positionTitle"]
      addNode["jobTitle"] =curNode["positionTitle"]
      addNode["parentPosition"] = {"code": curNode.pid,effectiveStartDate:effectiveDate}


      add.push({...addNode,effectiveStartDate:effectiveDate} );
    } else {
      // id exists in both => check pid change
      if (origNode.pid !== curNode.pid) {
        // you can push just curNode or include oldPid for reference
       // ...curNode,
       //   oldPid: origNode.pid, // optional, for tracking
        update.push({
          code: curNode.id,
          effectiveStartDate:effectiveDate,
          effectiveStatus: 'A',
          parentPosition: {"code":curNode.pid,effectiveStartDate:effectiveDate}
        });
      }
    }
  }

  // 2) Check original -> find deleted
  for (const [id, origNode] of originalMap.entries()) {
    if (!currentMap.has(id)) {
      // id exists only in original => DELETE

      del.push({"code":origNode.id,effectiveStartDate:effectiveDate});
    }
  }

  return { add, del, update };
},
    closeDialog() {
      this.approvalDialog = false;
    },
    statusColor(status) {
    switch (status) {
      case "Draft":
        return "blue";
      case "Pending Approval":
        return "orange";
      case "Approved":
        return "green";
      default:
        return "grey"; // fallback if something unexpected comes in
    }
  },
    saveFormData() {
      this.showLoading = true;
      this.form.departmentId = this?.selectedDept?.details?.externalCode;
    //   this.form.departmentName = this?.selectedDept?.details?.name;
       // attach chart data 
     this.form.chartData = this.finalPlanData["currentData"];
     this.form.originalData = this.finalPlanData["originalData"]
     const { add, del, update } = this.diffNodes(this.form.originalData , this.form.chartData,this.form.effectiveDate);
     this.form.summary = {"add": add,"delete":del,"update":update}
     
      console.log("Form Data:", this.form);
      this.form["file"]=this.finalPlanAttach
      this.$store
        .dispatch("SubmitPlanForApproval", this.form)
        .then(() => {
              this.showLoading = false;

          this.approvalDialog = false;
          this.selectedPlan.planStatus = "Pending Approval"
        })
        .catch((err) => {
          this.showLoading = false;

          console.error("Failed to load saved plan", err);
        });
    },
    publishFormData()
    {
      this.approvalDialog =true
      this.showLoading = true;
      this.form.chartData = this.finalPlanData["currentData"];
     this.form.originalData = this.finalPlanData["originalData"]
     const { add, del, update } = this.diffNodes(this.form.originalData , this.form.chartData,this.form.effectiveDate);
     this.form.summary = {"add": add,"delete":del,"update":update}
      console.log("Publish Data",this.form)
      this.$store
        .dispatch("publishPlan", this.form.summary)
        .then(() => {
          
          this.$store
        .dispatch("updateStatus", {"planId":this.form.planId,"effectiveDate":this.form.effectiveDate,"planStatus":"Published"}).then(()=>{
          this.approvalDialog = false;
        this.showLoading =false
        this.selectedPlan.planStatus = "published"
        })

        this.showLoading =false
         
        })
        .catch((err) => {
          this.showLoading =false
          console.error("Failed to load saved plan", err);
        });

    }
  },
 mounted()
 {
  console.log("SelectedPlan",this.selectedPlan)
 } 
}
</script>