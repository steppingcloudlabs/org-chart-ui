<template>
  <v-container class="fill-height choice test" fluid id="cs">
    <v-row align="end" justify="end" style="padding-right:20%">
      <v-col cols="12" sm="8" md="4">
        <v-card
          class="elevation-24"
          style="background: rgb(255, 255, 255, 0.5)"
          width="150%"
        >
          <v-toolbar flat outlined style="background: transparent !important">
            <v-toolbar-title class="text-center" style="color: black"
              ><h3><b>Select Search type</b></h3></v-toolbar-title
            >
            <div class="flex-grow-1"></div>
          </v-toolbar>
          <v-card-text>
          
              <v-radio-group v-model="searchfilter" color="black">
                <v-radio value="simple" 
                  ><template v-slot:label>
                    <!-- <div >  style="color:blue" -->
                        <div style="color: black">
                      <strong><b>Simple Search</b></strong>
                    </div>
                  </template></v-radio
                >
                <v-radio value="cascaded">
                  <template v-slot:label>
                    <div style="color: black">
                      <strong><b>Cascaded Search</b></strong>
                    </div>
                  </template>
                </v-radio>
              </v-radio-group>
          
          </v-card-text>
          <v-card-actions>
            <center>
              <v-btn rounded centre v-on: @click="choice"  color="secondary"
              style="background: #33FF33"
                ><span>Proceed</span></v-btn
              >
            </center>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      radioGroup:"simple",
     
    };
  },
  methods: {
    choice() {
      console.log(this.searchfilter);
      this.$router.push('/search')
    },
  },
  computed:
  {
      searchfilter: {
      get() {
        return this.$store.getters.getSelectedFilter;
        // return true;
      },
      set(data) {
        this.$store.commit("setSelectedFilter", data);
      }
    }
  }
};
</script>
<style>

.test{
  background-image: url("../assets/pic5.png") !important;
  

  height:100vh;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}


/* #cs {
  background: transparent !important;
  opacity: 0.2;
  border-radius: 15px;
} */
</style>