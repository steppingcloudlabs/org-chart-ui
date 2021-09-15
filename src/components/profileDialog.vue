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
          <v-btn icon dark @click="backButtonClicked">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          <v-toolbar-title>User Profile</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items></v-toolbar-items>
          <v-btn class="mr-2" dark icon @click="printProfile">
            <v-icon>mdi-printer</v-icon>
          </v-btn>
          <v-btn icon dark @click="closeTemplate">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-container v-if="selectedTemplate == 'selectionScreen'">
          <TemplateSelectionContainer
            @next="templatedSelected"
            :isEmployeeDataNeeded="showProfileDialog"
            :empBasicData="profileBasicData"
          />
        </v-container>
        <TemplateOne
          v-else-if="selectedTemplate == 'template-1'"
          :profileBasicData="profileBasicData" 
        />
        <TemplateTwo
          v-else-if="selectedTemplate == 'template-2'"
          :profileBasicData="profileBasicData"
        />
        <TemplateThree
          v-else-if="selectedTemplate == 'template-3'"
          :profileBasicData="profileBasicData"
        />
        <TemplateFour
          v-else-if="selectedTemplate == 'template-4'"
          :profileBasicData="profileBasicData"
        />
        <vue-html2pdf
          :show-layout="false"
          :enable-download="true"
          :preview-modal="true"
          :paginate-elements-by-height="1000"
          filename="UserProfile"
          :pdf-quality="2"
          pdf-format="a3"
          pdf-orientation="landscape"
          pdf-content-width="100%"
          @progress="onProgress($event)"
          @hasStartedGeneration="hasStartedGeneration()"
          @hasGenerated="hasGenerated($event)"
          ref="html2Pdf"
        >
          <section slot="pdf-content">
            <!-- PDF Content Here -->
             <TemplateOne
          v-if="selectedTemplate == 'template-1'"
          :profileBasicData="profileBasicData" 
        />
        <TemplateTwo
          v-else-if="selectedTemplate == 'template-2'"
          :profileBasicData="profileBasicData"
        />
        <TemplateThree
          v-else-if="selectedTemplate == 'template-3'"
          :profileBasicData="profileBasicData"
        />
        <TemplateFour
          v-else-if="selectedTemplate == 'template-4'"
          :profileBasicData="profileBasicData"
        />
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
import TemplateTwo from "@/components/ProfileTemplate/TemplateTwo";
import TemplateThree from "@/components/ProfileTemplate/TemplateThree";
import TemplateFour from "@/components/ProfileTemplate/TemplateFour";
import TemplateSelectionContainer from "@/components/EmployeeProfile/TemplateSelectionContainer";

import VueHtml2pdf from "vue-html2pdf";

export default {
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      overlay: false,
      selectedTemplate: "selectionScreen",
      showprogress:false
    };
  },
  components: {
    TemplateOne,
    TemplateTwo,
    TemplateThree,
    TemplateFour,
    VueHtml2pdf,
    TemplateSelectionContainer,
  },

  computed: {
    showProfileDialog: {
      get() {
        return this.$store.getters.getShowProfileDialog;
      },
      set(data) {
        this.$store.commit("setShowProfileDialog", data);
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
    profileBasicData() {
      return this.$store.getters.getProfileData;
    },
  },
  watch: {
    // showProfileDialog() {
    //   if (this.showProfileDialog) {
    //     this.getUserProfileData(
    //       this.$route.params.id
    //         ? this.$route.params.id
    //         : this.profileBasicData.userId
    //     );
    //   }
    // },
  },

  methods: {
   
    closeTemplate()
    {
      this.showProfileDialog=false
      this.selectedTemplate="selectionScreen"
    },

    templatedSelected(selectedTemplate) {
     
      this.selectedTemplate = selectedTemplate;
      console.log("Next Clicked");
    },
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
    },
    backButtonClicked() {
      if (this.selectedTemplate == "selectionScreen") {
        this.showProfileDialog = false;
      } else {
        this.selectedTemplate = "selectionScreen";
      }
    },
  },
};
</script>

<style  scoped>
</style>