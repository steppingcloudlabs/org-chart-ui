<template>
  <v-snackbar
    v-model="toast.show"
    :color="toast.color"
    :timeout="toast.timeout"
    top
    right
  >
    {{ toast.message }}

    <template v-slot:action="{ attrs }">
      <v-btn text v-bind="attrs" @click="close"> Close </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  computed: {
    toast() {
      return this.$store.getters.getToast;
    },
  },
  methods: {
    close(){
          this.$store.commit("HIDE_TOAST");},

  },
};
</script>
