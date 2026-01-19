<template>
  <v-dialog v-model="copyPositionDialog" max-width="500px" persistent>
    <v-card>
      <v-card-title class="headline"> Copy Position </v-card-title>

      <v-card-text>
        <p class="mb-4">
          The position will be copied with its attributes. The copies will have
          the same parent position. The external code is generated
          automatically.
        </p>

        <v-row align="center" class="form-row">
          <!-- Label -->
          <v-col cols="6" class="label-col">
            Number of positions to copy
          </v-col>

          <!-- Input -->
          <v-col cols="6">
            <v-text-field
              v-model.number="form.count"
              type="number"
              min="1"
              outlined
              dense
              hide-details
            />
          </v-col>
        </v-row>

        <v-row align="center" class="form-row">
          <!-- Label -->
          <v-col cols="6" class="label-col"> Set To Be Recruited </v-col>

          <!-- Input -->
          <v-col cols="6">
            <v-checkbox v-model="form.toBeRecruited" dense hide-details />
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions class="justify-end">
        <v-btn text @click="closeDialog">Cancel</v-btn>
        <v-btn color="primary" @click="confirmCopy">OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "CopyPositionDialog",

  data() {
    return {
      form: {
        count: 1,
        toBeRecruited: false,
      },
    };
  },

  computed: {
    copyPositionDialog: {
      get() {
        return this.$store.getters.getcopyPositionDialog;
      },
      set(data) {
        this.$store.commit("setcopyPositionDialog", data);
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
  },

  methods: {
    closeDialog() {
this.copyPositionDialog = false;    },

    confirmCopy() {
         if (!this.currentNodeData) {
    console.error("No node selected for copy");
    return;
  }
      const payload = {
        sourceNodeId: this.currentNodeData.id,
        pid: this.currentNodeData.pid, // SAME parent
        copyCount: this.form.count,
        toBeRecruited: this.form.toBeRecruited,
      };

      // Trigger copy in tree component / Vuex
      this.$store.commit("setCopyPositionPayload", payload);
      this.$store.commit("setTriggerCopyPosition", true);

      this.copyPositionDialog = false;
    },
  },
};
</script>

<style scoped>
p {
  font-size: 14px;
  color: #555;
}
</style>
