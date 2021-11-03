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
                      this.$store.commit("closeProgressBar", {});
                    this.$store.commit("showSnackbar", {
                    color: "error",
                    duration: 1000,
                    message: error,
                    heading: "Error",
                  });
                    });
              }
          })
    },
  },
  

  
  beforeMount()
  {
     this.showLoading=true
     this.$store.dispatch("getUserInfo").then((response) => {
           this.getuserDept(response.data.id)
             this.getPaygrade()  
          })
       
  }
};
</script>
<style >
.body #tree > svg {
  background-color: white !important;
}

</style>

