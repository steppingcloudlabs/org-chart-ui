<template>
  <v-app width="100%" class="app" >
    <core-view></core-view>
    <SnackbarComponent></SnackbarComponent>
  </v-app>
</template>

<script>
import SnackbarComponent from "@/components/snackbar";
export default {
  components: {
    CoreView: () => import("@/components/view"),
    SnackbarComponent
  },
  computed:{
    showloggedUser: {
      get() {
        return this.$store.getters.getloggedUser;
        // return true;
      },
      set(data) {
        this.$store.commit("setloggedUser", data);
      },
    },
    showLoading: {
      get() {
        return this.$store.getters.getshowLoading;
        // return true;
      },
      set(data) {
        this.$store.commit("setshowLoading", data);
      },
    },
    showDept: {
      get() {
        return this.$store.getters.getshowDeptView;
        // return true;
      },
      set(data) {
        this.$store.commit("setShowDeptView", data);
      },
    },
  
  },
   methods:{
    getPaygrade()
    {
        this.$store.dispatch("getAllPaygradeList").then((response) => {
          console.log(response);
         
          })
      
    },

      getuserDept(data)
    {
       console.log(data)
       this.$store.dispatch("getUserDept",{"userid":data}).then((response) => {
          if(response.status==200)
          {
           this.showloggedUser=response.data[0].departmentNav.externalCode
            var date1 = new Date().getTime();
            this.$store
                .dispatch("orgCategory",{
                  type: "department",
                  typeValue: this.showloggedUser,
                  date: date1,
                })
                .then((response) => {
                  if (response ) {
                    console.log("testing");
                    this.showLoading = false;
                    console.log(response.response)
                    if(response.response=="No Data Available")
                    {
                        this.showLoading=false
                      this.$store.commit("showSnackbar", {
                    message: "No Position mapped",
                    color: "Red",
                    heading: "Error",
                    duration: 3000,
                  });
                    }
                    else{
                        this.showLoading=false
                      this.$router.push({path:"/temporgchart"});
                    }
         
            
                    }
                    
                  }).catch((error) => {
                     this.showLoading = false;
                      this.$store.commit("closeProgressBar", {});
                    this.$store.commit("showSnackbar", {
                    color: "error",
                    duration: 1000,
                    message: error,
                    heading: "Error",
                  });
                    });
              }
          }).catch((error) => {
                     this.showLoading = false;
                      this.$store.commit("closeProgressBar", {});
                    this.$store.commit("showSnackbar", {
                    color: "error",
                    duration: 1000,
                    message: error,
                    heading: "Error",
                  });
          })
    },
  },
  

  
  beforeMount()
  { 
    if(this.showDept==true)
    {
       this.showLoading=true
    //  this.getuserDept("hi")
    //   this.getPaygrade()
        this.$store.dispatch("getUserInfo").then((response) => {
           this.getuserDept(response.data.id)
             this.getPaygrade()  
          }).catch((error) => {
                     this.showLoading = false;
                      this.$store.commit("closeProgressBar", {});
                    this.$store.commit("showSnackbar", {
                    color: "error",
                    duration: 1000,
                    message: error,
                    heading: "Error",
                  });
          })
    this.showDept=false
    }
    
     
   
       
  }
};
</script>
<style >
.body #tree > svg {
  background-color: white !important;
}

.v-progress-circular--indeterminate:not(.v-progress-circular--visible) .v-progress-circular__overlay, .v-progress-circular--indeterminate:not(.v-progress-circular--visible)>svg {
    -webkit-animation-play-state: running !important;
    animation-play-state: running !important;
}


</style>

