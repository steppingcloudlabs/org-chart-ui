<template>
  <v-navigation-drawer
    temporary
    right
    clipped
    class="mt-7"
    v-model="internalDrawer"
    width="300"
  >
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <v-icon>mdi-filter</v-icon>
      </v-list-item-avatar>

      <v-list-item-title>Filter</v-list-item-title>
       <v-spacer />

      <!-- ❌ Close button -->
      <v-btn icon @click="internalDrawer = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-list-item>

    <v-divider />

    <!-- YOUR FILTER CONTENT -->
    <v-container>
      <v-autocomplete
        item-text="name"
        item-value="externalCode"
        :items="businessUnitList"
        label="Business Unit"
        dense
        outlined
        clearable
        class="mb-3"
      />

      <v-autocomplete
        items=""
        label="Location"
        dense
        outlined
        clearable
        class="mb-3"
      />
<!-- {{divisionList}} -->
      <v-autocomplete
        item-text="name"
        item-value="externalCode"
        :items="divisionList"
        label="Division"
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
  name: "FilterDrawer",
  props: {
    value: Boolean,
  },
  data: () => ({
    businessUnitList: [],
    divisionList: [],
  }),
  computed: {
    internalDrawer: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
  },
  methods: {
    getBusinessUnit() {
      this.$store.dispatch("getAllBusinessUnitList").then((response) => {
        console.log("response.d.results", response.d.results);
        this.businessUnitList = response.d.results;
        // for (let i = 0; i < response.d.results.length; i++) {
        //  // console.log(g.selectedSearchField[i])
        //   g.dropdown_data.push(response.d.results[i].externalCode) ;
        // }
      });
    },
    getDivision() {
      this.$store.dispatch("getAllDivisionList").then((response) => {
        console.log("response.d.results divisionList", response.d.results);
        this.divisionList = response.d.results;
        // for (let i = 0; i < response.d.results.length; i++) {
        //  // console.log(g.selectedSearchField[i])
        //   g.dropdown_data.push(response.d.results[i].externalCode) ;
        // }
      });
    },
  },
  mounted() {
    this.getBusinessUnit();
    this.getDivision();
  },
};
</script>
