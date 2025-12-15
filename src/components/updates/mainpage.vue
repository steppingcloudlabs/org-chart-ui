<template>
    <v-container style="max-width: 1377px !important;">
      <v-toolbar
      color='primary accent-4'
      dark >
      
      <v-toolbar-title>
       {{ this.showselecteddept.details.name }}
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn text outlined @click="openupdatedialog()">
        <span>Update Departments</span>
        <v-icon>mdi-update</v-icon>
      </v-btn>
      <v-btn class="ma-3" text outlined @click="navigateBack()">
        <span>Back</span>
        <v-icon>mdi-backburger</v-icon>
      </v-btn>
    </v-toolbar>
      <v-row class="mt-5"> 
        <v-col cols="3">
          <!-- Content for the first column -->
          <!-- You can add your components or content here -->
         <listview></listview>
        </v-col>
  
        <v-col cols="6">
          <!-- Content for the second column -->
         
        </v-col>
  
    
        <v-col cols="3">
          <!-- Content for the fourth column -->
          <v-card
          class="mx-auto"
    max-width="300"
    ma-5
    elevation="5" shaped
  >
    <v-list density="compact">
    
      <v-list-item-group
          v-model="selectedItem"
          color="primary"
         
        >
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="item"
        color="primary"
        @click="opendialog(selectedItem)"
      >
      <v-list-item-avatar>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-avatar>

      <v-list-item-content>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item-content>

      </v-list-item>
      </v-list-item-group>
    </v-list>
        </v-card>
       
       
        </v-col>
      </v-row>
      <splitdialog></splitdialog>
      <inactivatedialog></inactivatedialog>
      <updatedepartment></updatedepartment>
    
    </v-container>

  </template>
  <script>
  import listview from "./listView.vue";
  import splitdialog from "./splitdialog.vue";
  import inactivatedialog from "./inactivatedialog.vue";
  import updatedepartment from "./updatedepartment.vue";
  
  export default {
  components:
  {
    listview,
    splitdialog,
    inactivatedialog,
    updatedepartment
  },
  data: () => ({
      selectedItem:{},
      items: [
        { text: 'Split Department', icon: 'mdi-content-cut' },
        { text: 'Inactivate Department', icon: 'mdi-sign-caution' },
       
      ],
    }),
    computed: {
      showupdatedialog: {
      get() {
        return this.$store.getters.getshowupdatedialog;
        // return true;
      },
      set(data) {
        this.$store.commit("setshowupdatedialog", data);
      }
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
    showselecteddept: {
      get() {
        return this.$store.getters.getSelectedDept;
        // return true;
      },
      set(data) {
        this.$store.commit("setSelectedDept", data);
      }
    },
    showinactivatedialog:
    {
        get() {
        return this.$store.getters.getshowinactivatedialog;
        // return true;
      },
      set(data) {
        this.$store.commit("setshowinactivatedialog", data);
      }

    },
},  
  methods:
  {
    navigateBack() {
      // Navigate to the previous page
      this.$router.go(-1);
    },
    opendialog(data)
    {
      if(data.text=='Split Department')
      {
        this.showsplitdialog=true
      }
      else if(data.text=='Inactivate Department')
      {
        this.showinactivatedialog=true
      }
    },
    openupdatedialog()
    {
     this.showupdatedialog=true
    }
  }  
  };
  </script>
  
  <style scoped>
  /* Your component-specific styles go here */
  </style>