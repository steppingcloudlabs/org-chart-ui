<template>
    <div>
        <v-navigation-drawer class="ma-5" permanent height="600px" style="border-right:5px;width: 21%;margin-top: 98px !important;"> 
        <v-list three-line >
      <template v-for="(item, index) in showselecteddept.users">
        <v-subheader
          v-if="item.header"
          :key="item.header"
          v-text="item.header"
        ></v-subheader>

        <v-divider
          v-else-if="item.divider"
          :key="index"
          :inset="item.inset"
        ></v-divider>

        <v-list-item
          v-else
          :key="item.title"
        >
          <v-list-item-avatar>
            <v-img :src="item.image"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
            <v-list-item-subtitle v-html="item.position"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
   </v-navigation-drawer>
   <!-- <overlayloader></overlayloader> -->
</div>
   
  </template>
  
  <script>
  // import overlayloader from '../overlayloader.vue';
  export default {
    components:
    {
      // overlayloader
    },
    data() {
      return {
        overlay:false,
        // Sample data for cards
        cardsData: [
            {header:"Emploee List"},
          { title: 'Card 1', subtitle: 'Subtitle 1', image: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
          { title: 'Card 2', subtitle: 'Subtitle 2', image: 'path/to/image2.jpg' },
          { title: 'Card 3', subtitle: 'Subtitle 3', image: 'path/to/image3.jpg' },
          // ... Add more data as needed
        ],
      };
    },
    computed: {
    showdeptUser: {
      get() {
        return this.$store.getters.getdeptUserData;
        // return true;
      },
      set(data) {
        this.$store.commit("setdeptUserData", data);
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
    showdeptView: {
      get() {
        return this.$store.getters.getDepartmentList;
        // return true;
      },
      set(data) {
        this.$store.commit("setDepartmentList", data);
      }
    },
    showoverlay: {
      get() {
        return this.$store.getters.getshowoverlay;
        // return true;
      },
      set(data) {
        this.$store.commit("setshowoverlay", data);
      }
    },
},
    methods:
    {
      getUserListView()
        {
          
          this.showoverlay=true
            let index=this.showdeptView.findIndex(item => item.id === this.showselecteddept.id);
            if(this.showdeptView[index].users.length<=0)
            {
              console.log("deptttt",this.showselecteddept)
              this.$store
              .dispatch("getDepUser",this.showselecteddept)
              .then((response) => {
              
                this.showdeptView[index].users = response;
                this.showselecteddept=this.showdeptView[index]
                console.log(this.showdeptView[index])
               
        })
            }
            else{
              this.showselecteddept=this.showdeptView[index]
            }
           this.showoverlay=false
            // this.$router.push({ path: "/detailplan" })
          
        },
    },
    mounted()
    {
      this.getUserListView()
    }
  };
  </script>
  
  <style scoped>
  /* Add your component-specific styles here if needed */
  </style>
  