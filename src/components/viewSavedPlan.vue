<template>
  <v-card>
    <!-- Tabs Header -->
    <v-tabs
      v-model="tab"
      background-color=""
      
    >
      <v-tab>View Plan</v-tab>
      <v-tab>Edit Plan</v-tab>
     
    </v-tabs>

    <!-- Tabs Content -->
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-card flat>
          <v-card-title>View Plan</v-card-title>
          <v-card-text>
            <!-- View Plan content here -->
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-title>Edit Plan</v-card-title>
          <v-card-text>
            <!-- Edit Plan content here -->
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-title>Show Plan</v-card-title>
          <v-card-text>
            <!-- Show Plan content here -->
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      tab: 0
    }
  }
}
</script>
