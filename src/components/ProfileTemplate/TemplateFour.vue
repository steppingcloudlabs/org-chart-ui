<template>
  <v-card min-height="800px" max-width="50%" style="margin-left:auto;margin-right:auto;">
    <v-container style="padding: unset;">
      <v-row justify="center" no-gutters style="height:800px">
        <v-col cols="5" style="background:#b0e7e2">
          <div style="text-align:center;" class="mb-5">
            <v-avatar
              class="profile"
              color="grey"
              size="150"
              tile
              style="border-radius:20%;border:2px solid"
            >
              <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
            </v-avatar>
            <p class="pt-2 name" style="font-size:20px;font-weight:600;color:#35383f">DARAKSHA ABID</p>
            <p
              class="name"
              style="font-size:15px;font-weight:600;color:black; line-height: 0px; margin-top: -6px;"
            >DEVELOPER</p>
          </div>
          <v-divider style="margin-left:25px;margin-right:25px;color:#35383f"></v-divider>

          <div style="margin-left:25px">
            <p
              class="pa-1 header"
              style="font-size:15px;font-weight:600;color:#35383f;margin-bottom:-2px;text-align:center"
            >Personal Information</p>
            <div
              class="pt-3"
              style="font-size:12px;font-weight:500;color:black;margin-bottom:-2px;margin-left:2px"
            >
              <v-row style="line-height:2px">
                <v-col class="column-header">Position:</v-col>
                <v-col>Test</v-col>
              </v-row>
              <v-row style="line-height:2px">
                <v-col class="column-header">Incumbent:</v-col>
                <v-col>Test</v-col>
              </v-row>
              <v-row style="line-height:2px">
                <v-col class="column-header">Date Of birth:</v-col>
                <v-col>24th Aug,1998</v-col>
              </v-row>
              <v-row style="line-height:2px">
                <v-col class="column-header">DOR</v-col>
                <v-col>Test</v-col>
              </v-row>
            </div>
          </div>
          <v-divider style="margin-left:25px;margin-right:25px;color:#35383f"></v-divider>
          <div>
            <p
              class="pa-1 header"
              style="font-size:15px;font-weight:600;color:#35383f;margin-bottom:-2px;text-align:center"
            >Skills</p>
            <div
              class="pt-3 ml-5"
              style="font-size:12px;font-weight:500;color:black;margin-bottom:-2px;margin-left:2px"
            >
              <v-row  v-for="(item, i) in 4"
          :key="i" style="line-height:2px;text-align:left;height: 33px;">
                <v-col style= "margin-top: 15px;">
                  <span class="pt-5">Marketing</span>
                </v-col>
                <v-col>
                  <v-rating
                    v-model="key"
                    color="yellow darken-3"
                    background-color="grey darken-1"
                    empty-icon="$ratingFull"
                    half-increments
                    size="14"
                  ></v-rating>
                </v-col>
              </v-row>
            </div>

          </div>
          <v-divider class="mt-5" style="margin-left:25px;margin-right:25px;color:#35383f"></v-divider>
           <div>
            <p
              class="pa-1 header"
              style="font-size:15px;font-weight:600;color:#35383f;text-align:center;margin-bottom:2px"
            >Academics</p>
            <div
              class="pt-3 ml-5"
              style="font-size:12px;font-weight:500;color:black;margin-left:2px"
            >
              <v-row  v-for="(item, i) in 4"
          :key="i" style="line-height:2px;text-align:left;height: 33px;">
                <v-col style= "margin-top: 2px;">
                  <span >{{i+1}}.Marketing in xyz college in 2020</span>
                </v-col>
              </v-row>
            </div>

          </div>
        </v-col>
        <v-col cols="7" style="background:#35383f">hello hi
            
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>  