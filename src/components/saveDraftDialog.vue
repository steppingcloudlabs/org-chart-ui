<template>
  <div>
 

    <!-- Dialog -->
    <v-dialog v-model="saveDraftDialog" max-width="400px" persistent>
      <v-card>
        <!-- Title -->
        <v-card-title class="headline">
          save draft
        </v-card-title>

        <!-- Content -->
        <v-card-text>
          <v-form ref="form">
            <span>Plan Id</span>
            <v-text-field
              v-model="form.planId"
              outlined
              dense
              required
            />
            <span>Plan Name</span>

            <v-text-field
              v-model="form.planName"
              
              outlined
              dense
              required
            />
            <span>Plan Status</span>

              <v-text-field
              v-model="form.status"
              
              outlined
              dense
            />

            <span>Effective Date</span>

            <v-text-field
              v-model="form.effectiveDate"
             
              outlined
              dense
            />

          
          </v-form>
        </v-card-text>

        <!-- Actions -->
        <v-card-actions class="justify-end">
          <v-btn text @click="closeDialog">
            Close
          </v-btn>

          <v-btn color="primary" @click="saveData()">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
     
      form: {
        field1: "",
        field2: "",
        field3: "",
        field4: "",
      },
    };
  },
  computed:{
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
  methods: {
    closeDialog() {
      this.saveDraftDialog = false;
    },
    saveData() {
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
