<template>
    
<v-dialog v-model="showSkillDialog" max-width="700">
  <v-card>
    <v-card-title>Required Skills Comparison</v-card-title>

    <v-card-text>
      <p><strong>Common Skills</strong></p>
      <v-chip-group column>
        <v-chip v-for="s in skillComparison.commonSkills" :key="s" color="green" outlined>
          {{ s }}
        </v-chip>
      </v-chip-group>
      <p>
  <strong>Skill Match: {{ matchPercentage }}%</strong>
</p>

      <p class="mt-4"><strong>Required Skills in {{skillComparison.sourcePositionTitle}}</strong></p>
      <v-chip-group column>
        <v-chip v-for="s in skillComparison.onlyInSource" :key="s" color="orange" outlined>
          {{ s }}
        </v-chip>
      </v-chip-group>

      <p class="mt-4"><strong>Required Skills in {{skillComparison.targetPositionTitle}}</strong></p>
      <v-chip-group column>
        <v-chip v-for="s in skillComparison.onlyInTarget" :key="s" color="red" outlined>
          {{ s }}
        </v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-spacer />
      <v-btn text @click="close">Close</v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>
</template>

<script>
export default {
  computed: {
    showSkillDialog: {
      get() {
        return this.$store.getters.getshowSkillDialog;
        // return true;
      },
      set(data) {
        this.$store.commit("setshowSkillDialog", data);
      },
    },
    skillComparison: {
      get() {
        return this.$store.getters.getskillComparison;
        // return true;
      },
      set(data) {
        this.$store.commit("setskillComparison", data);
      },
    },
  matchPercentage() {
    const common = this.skillComparison.commonSkills.length;
    const totalTarget =
      this.skillComparison.onlyInTarget.length;

    if (!totalTarget) return 0;

    return Math.round((common / totalTarget) * 100);
  }

  },
  methods: {
    close() {
      this.showSkillDialog = false;
    }
  }
};
</script>
