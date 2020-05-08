<template>
  <v-row justify="center">
    <v-dialog
      v-model="showProfileDialog"
      fullscreen
      hide-overlay
      transition="dialog-right-transition"
    >
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="showProfileDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>User Profile</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="showProfileDialog = false">Print</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <TemplateOne :profileBasicData="profileBasicData" />
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import TemplateOne from "@/components/ProfileTemplate/TemplateOne";

export default {
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false
    };
  },
  components: {
    TemplateOne
  },

  computed: {
    showProfileDialog: {
      get() {
        return this.$store.getters.getShowProfileDialog;
      },
      set(data) {
        this.$store.commit("setShowProfileDialog", data);
      }
    },
    profileBasicData() {
      return this.$store.getters.getProfileData;
    }
  }
};
</script>

<style  scoped>
</style>