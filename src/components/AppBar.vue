<template>
  <div style="margin-left: 25%;">
    <v-toolbar-title class="white--text font-weight-light align-self-center"></v-toolbar-title>

    <v-spacer />

    <v-toolbar-items>
      <!-- <img src="@/assets/alumx-logo-1.png" style="height: 50px" class="my-2" /> -->
      <v-layout row wrap align-center>
        <v-flex xs12>
          <SearchAlumni />
        </v-flex>
      </v-layout>
      <v-row align="center" class="mx-0">
        <!-- <v-text-field
          class="mb-2"
          v-model="search"
          append-icon="search"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
          label="Search"
          dark
          single-line
          filled
          rounded
          dense
          hide-details
        ></v-text-field>-->
        <v-spacer></v-spacer>

        <v-menu bottom left offset-y transition="slide-y-transition">
          <template v-slot:activator="{ attrs, on }">
            <v-btn class="toolbar-items" icon v-bind="attrs" v-on="on">
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-icon color="white" v-on="on">mdi-view-dashboard</v-icon>
                </template>
                <span>Legends</span>
              </v-tooltip>
            </v-btn>
          </template>

          <v-card class="mx-auto" dark max-width="300">
            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>
          </v-card>
        </v-menu>

        <v-menu offset-y>
          <template v-slot:activator="{ on,attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon color="white">mdi-account</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index" :to="item.to">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <!-- <v-btn to="/profile/user-profile" icon>
          <v-icon color="white">mdi-account</v-icon>
        </v-btn>-->
      </v-row>
    </v-toolbar-items>
  </div>
</template>

<script>
// Utilities
import { mapMutations } from "vuex";
import SearchAlumni from "@/components/SearchAlumni";

export default {
  data: () => ({}),
  components: {
    SearchAlumni
  },
  watch: {
    $route(val) {
      this.title = val.name;
    }
  },

  mounted() {
    this.onResponsiveInverted();
    window.addEventListener("resize", this.onResponsiveInverted);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResponsiveInverted);
  },

  methods: {
    ...mapMutations("app", ["setDrawer", "toggleDrawer"]),
    onClick() {
      this.setDrawer(!this.$store.state.app.drawer);
    },
    onResponsiveInverted() {
      if (window.innerWidth < 991) {
        this.responsive = true;
      } else {
        this.responsive = false;
      }
    }
  }
};
</script>

<style>
/* Fix coming in v2.0.8 */
#core-app-bar {
  width: auto;
}

#core-app-bar a {
  text-decoration: none;
}
</style>
