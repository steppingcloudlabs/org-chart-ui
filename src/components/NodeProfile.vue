<template>
    <v-navigation-drawer
      v-model="showNodeProfile"
      absolute
      temporary
      right
      hide-overlay
      width="350px"
      height="650px"
    >
        <div>
        <v-img v-if="nodeData.img" width="100px" height="100px" class="mt-4" style="margin-left: auto;
        margin-right: auto;border-radius:50%" :src="nodeData.img"></v-img>
        </div>
      <div>
        <p style="text-align:center;font-size:30px;color:#387DC3">{{nodeData.userName}}</p>
         <p style="text-align:center;line-height:0px;color:grey">{{nodeData.positionTitle}}</p>
      </div>
      <v-divider color="#387DC3"></v-divider>  
  <v-row justify="center" class="mt-2 ml-1">
    <v-expansion-panels flat accordion  v-model="panel">
    
       <v-expansion-panel>
        <v-expansion-panel-header style="color:#387DC3">Job Information</v-expansion-panel-header>
        <v-expansion-panel-content>
         <div >
           <table>
        <tbody style="font-size:15px">
          <tr>
            <td style="font-weight:600">Department:</td>
            <td style="font-weight:400">{{nodeData.department}}</td>
          </tr>
            <tr>
            <td style="font-weight:600">Business Unit:</td>
            <td style="font-weight:400">{{nodeData.businessUnit}}</td>
          </tr>
           
            <tr>
            <td style="font-weight:600">Position:</td>
            <td style="font-weight:400">{{nodeData.positionTitle}}</td>
          </tr>
           <tr>
            <td style="font-weight:600">Division:</td>
            <td style="font-weight:400">{{nodeData.userDivision}}</td>
          </tr>
           <tr>
            <td style="font-weight:600">Manager:</td>
            <td style="font-weight:400">{{nodeData.userManagerId}}</td>
          </tr>
        </tbody>
    </table>
         </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header style="color:#387DC3">Recruitment Related Information</v-expansion-panel-header>
        <v-expansion-panel-content>
          <p v-if="showLoading"  style="text-align:center">
          <v-progress-circular
      indeterminate
      color="primary"
      v-if="showLoading"
     
    ></v-progress-circular>
    </p>
         <div v-else>
           <div v-if="recruitData.length">

                     <table>
        <tbody>
          <tr>
            <td style="font-weight:600"> Requisition Id:</td>
            <td style="font-weight:400">{{recruitData[0].jobReqId}}</td>
          </tr>
            <tr>
            <td style="font-weight:600">Status:</td>
            <td style="font-weight:400">{{recruitData[0].internalStatus}}</td>
          </tr>
           
            <tr>
            <td style="font-weight:600">Template:</td>
            <td style="font-weight:400">{{recruitData[0].templateName}}</td>
          </tr>
           <tr>
            <td style="font-weight:600">Openings:</td>
            <td style="font-weight:400">{{recruitData[0].numberOpenings}}</td>
          </tr>
           <tr>
            <td style="font-weight:600">Recruiter</td>
            <td style="font-weight:400"><li  v-for="(item, i) in recruitData[0].recruiter.results"
        :key="i"
        >{{recruitData[0].recruiter.results[i].firstName +" "+recruitData[0].recruiter.results[i].lastName}}</li>
            </td>
          </tr>
        </tbody>
    </table>

           </div>
           <p v-else style="text-align:center;font-size:15px;font-weight:400">
             No Recruitment Raised 
           </p>
         </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
      
    </v-expansion-panels>
  </v-row>

    </v-navigation-drawer>
</template>
<script>

  export default {
    // beforeDestroy(){
    //  this.showLoading=true
    //  console.log(this.showLoading)
    // },
   
    computed: {
    showNodeProfile: {
      get() {
        return this.$store.getters.getshowNodeProfile;
        // return true;
      },
      set(data) {
        this.$store.commit("setshowNodeProfile", data);
      }
    },
     nodeData: {
      get() {
        return this.$store.getters.getNodeData;
        // return true;
      },
      set(data) {
        this.$store.commit("setNodeData", data);
      }
    },
    },
    data () {
      return {
        showLoading:true,
        panel:null,
        recruitData:[],
        drawer: null,
        
      }
    },
    watch:
  {
    showNodeProfile:function()
    {
      if(!this.showNodeProfile)
      {
        this.showLoading=true
         this.panel=0
      }
    },
    panel: function()
    {
     if(this.panel==1)
     {
      this.$store
          .dispatch("getRecruitmentData",this.nodeData.id)
          .then(response => {
            this.showLoading=false
            console.log("called"+response.d.results)
            this.recruitData=response.d.results

          })
     }
    }
  }
  }
</script>