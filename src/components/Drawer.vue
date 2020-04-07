<template>
  <v-navigation-drawer
    id="app-drawer"
    v-model="inputValue"
    app
    color="rgb(35,43,43)"
    dark
    floating
    mobile-break-point="991"
    persistent
    width="260"
  >
    <template v-slot:img="attrs">
      <v-img v-bind="attrs" gradient="to top, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)" />
    </template>

    <v-list-item two-line>
      <v-list-item-avatar color="white">
        <!-- <img src="@/assets/avatar/download.jpg" /> -->
        >
      </v-list-item-avatar>

      <v-list-item-title class="title">Welcome Admin!!</v-list-item-title>
    </v-list-item>

    <v-divider class="mx-3 mb-3" />

    <v-list nav>
      <!-- Bug in Vuetify for first child of v-list not receiving proper border-radius -->
      <div />

      <v-list-item
        v-for="(link, i) in links"
        :key="i"
        :to="link.to"
        active-class="primary white--text"
      >
        <v-list-item-action>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-action>

        <v-list-item-title v-text="link.text" />
      </v-list-item>
      <v-list-item @click="logout">
        <v-list-item-action>
          <v-icon>mdi-logout</v-icon>
        </v-list-item-action>
        <v-list-item-title>Logout</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// Utilities

export default {
  props: {
    opened: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    image: "",
    inputValue: true,
    user: {
      firstname: "hello"
    },

    links: [
      {
        to: "/admin/dashboard",
        icon: "mdi-view-dashboard",
        text: "Dashboard"
      },
      {
        to: "/admin/newsupload",
        icon: "mdi-newspaper",
        text: "Update News & events"
      },

      {
        to: "/admin/document",
        icon: "mdi-clipboard",
        text: "Upload Documents"
      },

      {
        to: "/admin/update",
        icon: "mdi-chart-bubble",
        text: "FAQ Update"
      },

      {
        to: "/admin/settings",
        icon: "mdi-settings",
        text: "Company Settings"
      }

      // {
      //   to: "/home",
      //   icon: "mdi-logout",
      //   text: "Logout"
      // }
    ]
  }),

  methods: {
    logout() {
     
      // this.$store.commit("userModule/setData", {});
      
      console.log("session deleted");
    }
  }
};
</script>

