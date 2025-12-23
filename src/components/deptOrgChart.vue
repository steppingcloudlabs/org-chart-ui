<template>
  <v-card>
    <v-tabs
      v-model="activeTab"
      background-color="primary"
      dark
      grow
    >
      <v-tab>Create Plan</v-tab>
      <v-tab>Update Plan</v-tab>
      
    </v-tabs>

    <v-tabs-items v-model="activeTab">
      <v-tab-item>
        <v-card flat class="pa-4">
          <!-- Create Plan Content -->
          <h3>Create Plan</h3>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat class="pa-4">
          <!-- Update Plan Content -->
          <h3>Update Plan</h3>
        </v-card>
      </v-tab-item>

      
    </v-tabs-items>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0
    };
  }
};
</script>
