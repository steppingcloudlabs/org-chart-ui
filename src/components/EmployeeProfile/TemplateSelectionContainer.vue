<template>
  <v-row>
    <v-row>
      <v-col class="pa-5" cols="3">
        <p>
          <span>Select Template</span>
          <span class="text-right" style="float: right">
            <v-btn class="primary" @click="nextClicked">Next</v-btn>
          </span>
        </p>
        <v-radio-group v-model="selectedTemplate" :mandatory="false">
          <v-radio label="Template 1" value="template-1"></v-radio>
          <v-radio label="Template 2" value="template-2"></v-radio>
          <v-radio label="Template 3" value="template-3"></v-radio>
          <v-radio label="Template 4" value="template-4"></v-radio>
        </v-radio-group>
      </v-col>
      <v-col col="9" class="pa-5 text-center">
        <img
          class="proile-template-preview"
          v-if="selectedTemplate == 'template-1'"
          src="/assets/template/template1.jpg"
          alt="Template 1"
        />
        <img
          class="proile-template-preview"
          v-else-if="selectedTemplate == 'template-2'"
          src="/assets/template/template2.jpg"
          alt="Template 2"
        />
        <img
          class="proile-template-preview"
          v-else-if="selectedTemplate == 'template-3'"
          src="/assets/template/template3.jpg"
          alt="Template 3"
        />
        <img
          class="proile-template-preview"
          v-else-if="selectedTemplate == 'template-4'"
          src="/assets/template/template4.jpg"
          alt="Template 4"
        />
      </v-col>
    </v-row>
    
  </v-row>
</template>

<script>
export default {
  name: "TemplateSelectionContainer",
  data: () => {
    return {
      selectedTemplate: "template-1",
      showprogress:false
    };
  },
  props: {
    isEmployeeDataNeeded: {
      type: Boolean,
      default: false,
    },
    empBasicData: {
      type: Object,
      default: undefined,
    },
  },
  computed: {
    isEmployeeDataFetched: {
      get() {
        return this.$store.getters.getIsEmployeeDataFetched;
      },
      set(data) {
        this.$store.commit("setIsEmployeeDataFetched", data);
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
  },
  watch: {
    // isEmployeeDataNeeded() {
    //   if (this.isEmployeeDataNeeded) {
    //     this.getUserProfileData(
    //       this.$route.params.id
    //         ? this.$route.params.id
    //         : this.empBasicData.userId
    //     );
    //   }
    // },
    isEmployeeDataNeeded:{
      immediate:true,
      handler()
      {
         if (this.isEmployeeDataNeeded) {
        this.getUserProfileData(
          this.$route.params.id
            ? this.$route.params.id
            : this.empBasicData.userId
        );
      }
      }
    }
  },
  methods: {
    openProfile() {},
    getUserProfileData(userId) {
       this.showLoading=true
      this.$store.dispatch("getUserProfileData", userId).then((response) => {
        this.showLoading=false
        console.log(response);
      });
    },
    nextClicked() {
      this.$emit("next", this.selectedTemplate);
    },
  },
  mounted() {
    // this.getUserProfileData(
    //   this.$route.params.id ? this.$route.params.id : this.empBasicData.userId
    // );
  },
};
</script>

<style>
.proile-template-preview {
  height: 60vh;
}
</style>