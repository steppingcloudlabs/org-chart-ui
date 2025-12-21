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
      </v-list-item>

    <v-divider />

    <!-- YOUR FILTER CONTENT -->
   <v-container>
  <v-autocomplete
   
    items=""
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

  <v-autocomplete
  items=""
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
    <v-btn color="secondary" small @click="resetFilter">
      Reset
    </v-btn>
  </v-row>
</v-container>

  </v-navigation-drawer>
</template>

<script>
export default {
  name: "FilterDrawer",
  props: {
    value: Boolean
  },
  computed: {
    internalDrawer: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit("input", val)
      }
    }
  }
}
</script>
