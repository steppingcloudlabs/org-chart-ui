<template>
  <v-navigation-drawer
    temporary
    right
    clipped
    class="mt-7"
    v-model="planFilterDrawer"
    width="300"
     height="100vh"
  >
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <v-icon>mdi-filter</v-icon>
      </v-list-item-avatar>

      <v-list-item-title>Filter</v-list-item-title>
       <v-spacer />

      <!-- ❌ Close button -->
      <v-btn icon @click="planFilterDrawer = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-list-item>

    <v-divider />

    <!-- YOUR FILTER CONTENT -->
    <v-container>
 <!-- {{selectedStatus}} -->
      <v-autocomplete
      v-model="selectedStatus"
       item-text="text"
       item-value="value"
        :items="statusList"
        label="Status"
        dense
        outlined
        clearable
        class="mb-4"
      />

      <v-row justify="end">
        <v-btn color="primary" small class="mr-2" @click="applyFilter">
          Apply
        </v-btn>
        <v-btn color="secondary" small @click="resetFilter"> Reset </v-btn>
      </v-row>
    </v-container>
  </v-navigation-drawer>
</template>

<script>
export default {
//   name: "PlanFilter",
  props: {
    value: Boolean,
  },
  data: () => ({
    statusList: [
  { text: 'Draft', value: 'draft' },
  { text: 'Approved', value: 'approved' },
  { text: 'Pending Approval', value: 'pending approval' }

],
  

    //   selectedStatus: null, 
  }),
  computed: {
   selectedStatus: {
      get() {
        return this.$store.getters.getselectedStatus;
        // return true;
      },
      set(data) {
        this.$store.commit("setselectedStatus", data);
      },
    },
    planFilterDrawer: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
    
  },
  methods: {
     applyFilter() {
        this.planFilterDrawer= false;
        // this.resetFilter();
  
  },

  resetFilter() {
    this.selectedStatus = null
  
   
  },

  },
  mounted() {

  },
};
</script>
