<template>
  <v-snackbar
    v-model="showSnackbar"
    bottom
    right
    :color="snackbarColor"
    :timeout="snackbarDuration"
  >
    <v-layout row wrap pl-0 ml-0>
      <v-flex xs12>
        <span class="title" style="float: left">{{snackbarHeading}}</span>
        <span style="float: right">
          <v-btn color="Red" text @click="snackbar = false">
            <v-icon @click="close">mdi-close</v-icon>
          </v-btn>
        </span>
      </v-flex>
      <v-flex xs12>
        <p>{{snackbarMessage}}</p>
      </v-flex>
    </v-layout>
  </v-snackbar>
</template>

<script>
export default {
  props: {},
  computed: {
    showSnackbar: {
      get() {
        return this.$store.getters.getShowSnackbar;
        // return true;
      },
      set(data) {
        this.$store.commit("setShowSnackbar", data);
      }
    },
    snackbarDuration: {
      get() {
        return this.$store.getters.getSnackbarDuration;
      },
      set(data) {
        this.$store.commit("setSnackbarDuration", data);
      }
    },
    snackbarMessage: {
      get() {
        return this.$store.getters.getSnackbarMessage;
      },
      set(data) {
        this.$store.commit("setSnackbarMessage", data);
      }
    },
    snackbarHeading: {
      get() {
        return this.$store.getters.getSnackbarHeading;
      },
      set(data) {
        this.$store.commit("setSnackbarHeading", data);
      }
    },
    snackbarColor: {
      get() {
        return this.$store.getters.getSnackbarColor;
      },
      set(data) {
        this.$store.commit("setSnackbarColor", data);
      }
    }
  },
  data() {
    return {};
  },
  methods:{
    close(){
      this.$store.commit("closeSnackbar");
    }
  }
};
</script>