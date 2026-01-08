<template>
  <div class="home">
    <CoreAppBar @open-filter="openFilter" @savedPlanfilter="openSavedPlanFilter"></CoreAppBar>
 <FilterDrawer v-model="showFilter" />
 <SaveDraftDialog v-model="saveDraftDialog" />
 <ApprovalDialog v-model="approvalDialog" />
 <MergeDialog v-model="approvalDialog" />
 <SplitDialog v-model="showsplitdialog" />
 <SavedPlanFilter v-model="showSavedPlanFilter" />
 <SnackBar />
 <JobProfile />
     <CompareDialog v-model="showSkillDialog"/>

    <core-view></core-view>
  </div>
</template>

<script>
import FilterDrawer from '../components/FilterDrawer.vue'
import SaveDraftDialog from '../components/saveDraftDialog.vue'
import ApprovalDialog from '../components/SendForApprovalDialog.vue'
import MergeDialog from '../components/updates/mergedialog.vue'
import SplitDialog from '../components/updates/splitdialog.vue'
import SavedPlanFilter from '../components/PlanFilter.vue'
import SnackBar from '../components/SnackBar.vue'
import JobProfile from '../components/JobProfileData.vue'
import CompareDialog from "../components/CompareDialog.vue"

// @ is an alias to /src
export default {
  name: "Home",
  components: {
    JobProfile,
    SnackBar,
    SavedPlanFilter,
    SplitDialog,
    ApprovalDialog,
    FilterDrawer,
    SaveDraftDialog,
    MergeDialog,
      CompareDialog,
     CoreAppBar: () => import("@/components/AppBar"),
    // CoreDrawer: () => import("@/components/Drawer")
    
    CoreView: () => import("@/components/view")
  },
    data() {
    return {
      showFilter: false,
      showSavedPlanFilter: false,
    }
  },
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
     jobInfo: {
      get() {
        return this.$store.getters.getjobInfo;
      },
      set(data) {
        this.$store.commit("setjobInfo", data);
      },
    },
      showsplitdialog: {
      get() {
        return this.$store.getters.getshowsplitdialog;
        // return true;
      },
      set(data) {
        this.$store.commit("setshowsplitdialog", data);
      }
    },
     showmergedialog: {
      get() {
        return this.$store.getters.getshowmergedialog;
        // return true;
      },
      set(data) {
        this.$store.commit("setshowmergedialog", data);
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
     saveDraftDialog: {
      get() {
        return this.$store.getters.getsaveDraftDialog;
        // return true;
      },
      set(data) {
        this.$store.commit("setsaveDraftDialog", data);
      },
    },
    userMasterData: {
      get() {
        return this.$store.getters.getuserMasterData;
        // return true;
      },
      set(data) {
        this.$store.commit("setuserMasterData", data);
      }
    }
  },
  methods:{
     openFilter() {
      this.showFilter = true
    },
     openSavedPlanFilter() {
      console.log("Inside openSavedPlanFilter")
      this.showSavedPlanFilter = true
    }
  }
};
</script>
<style scoped>
[node-id] rect {
  fill: #231e39;
  filter: none;
}

[node-id] g rect {
  fill: #1f1a36;
  filter: none;
}

[node-id] g line {
  stroke: blue;
  stroke-width: 3;
}

.node.Vacant g line {
  stroke: rgb(255, 255, 0);
  stroke-width: 3;
}

.node.GR-18 g line {
  stroke: rgb(255, 0, 0);
  stroke-width: 3;
}

.GR-18 path {
  stroke: rgb(255, 0, 0) !important;
  stroke-width: 2;
}

.GR-18 path:hover {
  stroke: rgb(255, 0, 0) !important;
  stroke-width: 2;
}

.node.GR-14 g line {
  stroke: orange;
  stroke-width: 3;
}

.GR-14 path {
  stroke: orange !important;
  stroke-width: 2;
}

.GR-14 path:hover {
  stroke: orange !important;
  stroke-width: 6;
}

.node.GR-17 g line {
  stroke: green;
  stroke-width: 3;
}

.GR-17 path {
  stroke: green !important;
  stroke-width: 2;
}

.GR-17 path:hover {
  stroke: green !important;
  stroke-width: 6;
}

[node-id] g path {
  fill: "aqua";
  filter: none;
}

[link-id] path {
  stroke: blue;
  cursor: pointer;
}

.Vacant path {
  stroke: yellow !important;
  stroke-dasharray: 5 !important;
  stroke-width: 3;
}

.Vacant path:hover {
  stroke: yellow !important;
  stroke-dasharray: 5 !important;
  stroke-width: 7;
}

.node.Vacant rect {
  fill: #013565;
  cursor: pointer;
}

.node.Vacant rect:hover .Vacant path {
  stroke-width: 7 !important;
}

.node.assistant circle {
  fill: rgb(74, 101, 114, 0.7);
}

.assistant path {
  stroke: rgb(74, 101, 114) !important;
  stroke-dasharray: 20, 10, 5, 5, 5, 10 !important;
  stroke-width: 3;
}

.node.assistant g line {
  stroke: #4e0d3a;
  stroke-width: 3;
}

[control-expcoll-id] circle {
  fill: #231e39;
  stroke: #ffc809;
}

.body #tree > svg {
  background-color: rgb(0, 0, 0, 0) !important;
}
</style>
