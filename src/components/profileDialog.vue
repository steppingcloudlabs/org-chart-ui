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
            <v-btn dark text @click="printProfile">Print</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <TemplateOne :profileBasicData="profileBasicData" />
        <vue-html2pdf
          :show-layout="false"
          :enable-download="true"
          :preview-modal="false"
          :paginate-elements-by-height="1200"
          filename="hee hee"
          :pdf-quality="2"
          pdf-format="a3"
          pdf-orientation="landscape"
          pdf-content-width="1600px"
          @progress="onProgress($event)"
          @hasStartedGeneration="hasStartedGeneration()"
          @hasGenerated="hasGenerated($event)"
          ref="html2Pdf"
        >
          <section slot="pdf-content">
            <!-- PDF Content Here -->
            <TemplateOne :profileBasicData="profileBasicData"></TemplateOne>
          </section>
        </vue-html2pdf>
        <v-overlay :absolute="true" opacity=".5" :value="overlay">
          <p></p>
          <v-btn color="primary lighten-2">Generating PDF . . .</v-btn>
        </v-overlay>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import TemplateOne from "@/components/ProfileTemplate/TemplateOne";
import VueHtml2pdf from "vue-html2pdf";

export default {
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      overlay: false
    };
  },
  components: {
    TemplateOne,
    VueHtml2pdf
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
  },
  methods: {
    printProfile() {
      this.$refs.html2Pdf.generatePdf();
      this.overlay = true;
    },
    onProgress(event) {
      console.log(event);
    },
    hasStartedGeneration() {},
    hasGenerated(event) {
      console.log(event);
      this.overlay = false;
    }
  }
};
</script>

<style  scoped>
</style>