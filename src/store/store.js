import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// const companyId = "SFPART041835"
const companyId = "kalpatarugrp"
// const companyId = "SFPART041835"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        selectedFilter:"simple",
        loggedUser:"",
        isLevel:false,
        colors:{
                node: "red",
                vacant: "grey",
                text: "black",
                vacantbg:"grey",
                nodebg:"white"
            },
        defaultColors:{
                    node: "red",
                    vacant: "grey",
                    text: "black",
                    vacantbg:"grey",
                    nodebg:"white"
                    } ,  
        levelPay:[],
        selectedSearchField: [],
        allPaygrade:[],
        userMasterData: {},
        userData: [],
        inputDate: new Date().toISOString().substr(0, 10),
        flag: "",
        userPayGrade: [],
        userBand:[],
        department: [],
        division: [],
        BU: [],
        location:[],
        showNavDrawer: false,
        showFilter: false,
        showProfileDialog: false,
        profileData: null,
        showLoading: false,
        nodeData: null,
        parentData: null,
        showNodeProfile: false,
        empProfileData: {},
        imgRequire:true,
        isEmployeeDataFetched: "Not Fetched",
        showSnackbar: false,
        themeDialog:false,
        snackbarDuration: 3000,
        snackbarMessage: "Hello",
        snackbarHeading: "Error",
        snackbarColor: "Red",
        allBand:[{"band":"M1","level":"0"},{"band":"M2","level":"1"},{"band":"M3","level":"2"},{"band":"M4","level":"3"},{"band":"M5","level":"4"},{"band":"M6","level":"5"}]
    },
    mutations: {
        
        setloggedUser:(state,data)=>
        {
          state.loggedUser=data
        },


        setShowTheme:(state,data)=>
        {
          state.themeDialog=data
        },

        setSelectedFilter:(state,data)=>
        {
          state.selectedFilter=data
        },

        setColor:(state,data)=>
        {
          state.colors=data
        },

        setDefaultColor:(state,data)=>
        {
          state.defaultColors=data
        },

        setuserData: (state, data) => {
            state.userData = data
        },
        setallBand: (state, data) => {
            state.allBand = data
        },
        setisLevel: (state, data) => {
            state.isLevel = data
        },
        setlevelPay: (state, data) => {
            state.levelPay= data
        },
        setsearchField: (state, data) => {
            state.selectedSearchField = data


        },
        setimgRequire: (state, data) => {
            state.imgRequire = data


        },
        setallPaygradeData: (state, data) => {
            state.allPaygrade = data
            
        },
        setuserPayGrade: (state, data) => {
            state.userPayGrade = data
        },
        setuserBand: (state, data) => {
            state.userBand = data
        },
        setdepartment: (state, data) => {
            state.department = data
        },
        setdivision: (state, data) => {
            state.division = data
        },
        setlocation: (state, data) => {
            state.location = data
        },
        setuserMasterData: (state, data) => {
            state.userMasterData = data
        },
        setInputDate: (state, data) => {
            state.inputDate = data
        },
        setflag: (state, data) => {
            state.flag = data
        },
        setshownavDrawer: (state, data) => {
            state.showNavDrawer = data
        },
        shownavDrawer: (state) => {
            state.showNavDrawer = true
        },
        setshowFilter: (state, data) => {
            state.showFilter = data
        },
        showFilter: (state) => {
            state.showFilter = true
        },
        setShowProfileDialog: (state, data) => {
            state.showProfileDialog = data
        },
        ShowProfileDialog: (state, data) => {
            state.showProfileDialog = true
            state.profileData = data
        },
        setshowLoading: (state, data) => {
            state.showLoading = data
        },
        showLoading: (state) => {
            state.showLoading = true
        },
        setProfileData: (state, data) => {
            state.profileData = data
        },
        setshowNodeProfile: (state, data) => {
            state.showNodeProfile = data
        },
        ShowNodeProfile: (state, data) => {
            state.showNodeProfile = true,
                state.nodeData = data
        },
        parentNodeData: (state, data) => {
            state.parentData = data
        },
        setNodeData: (state, data) => {
            state.nodeData = data
        },
        setbusinessunit: (state, data) => {
            state.BU = data
        },
        setEmpProfileData: (state, data) => {
            state.empProfileData = data
        },
        setIsEmployeeDataFetched: (state, data) => {
            state.isEmployeeDataFetched = data
        },
        setShowSnackbar: (state, data) => {
            state.showSnackbar = data;
          },
          setSnackbarDuration: (state, data) => {
            state.snackbarDuration = data;
          },
          setSnackbarMessage: (state, data) => {
            state.snackbarMessage = data;
          },
          setSnackbarHeading: (state, data) => {
            state.snackbarHeading = data;
          },
          setSnackbarColor: (state, data) => {
            state.snackbarColor = data;
          },
          showSnackbar: (state, data) => {
            state.showSnackbar = true;
            state.snackbarColor = data.color;
            state.snackbarDuration = data.duration;
            state.snackbarHeading = data.heading;
            state.snackbarMessage = data.message;
          },
          closeSnackbar: (state) => {
            state.showSnackbar = false;
      
          },

    },
    getters: {
         
        getloggedUser:(state)=>
        {
           return state.loggedUser
        },
        
        getColor:(state)=>
        {
           return state.colors
        },
        getDefaultColor:(state)=>
        {
           return state.defaultColors
        },
        getSelectedFilter:(state)=>
        {
           return state.selectedFilter
        },

        getshowThemeDialog:(state)=>
        {
           return state.themeDialog
        },
        getuserData: (state) => {
            return state.userData
        },
        getallBand: (state) => {
            return state.allBand
        },
        getisLevel: (state) => {
            return state.isLevel
        },
        getlevelPay: (state) => {
            return state.levelPay
        },
        getimgRequire: (state) => {
            return state.imgRequire
        },
        getsearchField: (state) => {
            return state.selectedSearchField
        },
        getallPaygradeData: (state) => {
            return state.allPaygrade
        },
        getparentData: (state) => {
            return state.parentData
        },
        getbusinessunit: (state) => {
            return state.BU
        },
        getlocation: (state) => {
            return state.location
        },
        getuserPayGrade: (state) => {
            return state.userPayGrade
        },
        getuserBand: (state) => {
            return state.userBand
        },
        getdepartment: (state) => {
            return state.department
        },
        getdivision: (state) => {
            return state.division
        },
        getuserMasterData: (state) => {
            return state.userMasterData
        },
        getinputDate: (state) => {
            return state.inputDate
        },
        getshownavDrawer: (state) => {
            return state.showNavDrawer
        },
        getshowFilter: (state) => {
            return state.showFilter
        },
        getShowProfileDialog: (state) => {
            return state.showProfileDialog
        },
        getshowLoading: (state) => {
            return state.showLoading
        },
        getProfileData: (state) => {
           
            return state.profileData
        },
        getshowNodeProfile: (state) => {
            return state.showNodeProfile
        },
        getNodeData: (state) => {
            return state.nodeData
        },
        getEmpProfileData: (state) => {
            return state.empProfileData
        },
        setIsEmployeeDataFetched: (state) => {
            return state.isEmployeeDataFetched
        },
        getShowSnackbar: (state) => {
            return state.showSnackbar
          },
          getSnackbarDuration: (state) => {
            return state.snackbarDuration
          },
          getSnackbarMessage: (state) => {
            return state.snackbarMessage
          },
          getSnackbarHeading: (state) => {
            return state.snackbarHeading
          },
          getSnackbarColor: (state) => {
            return state.snackbarColor
          },
      
    },
    actions: {
        orgCategory:({
            commit
        }, data) => {

            return new Promise((resolve) => {
                axios({
                    url:  '/srv/getOrgChartData/all',
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    params: {
                        "companyId": companyId,
                        "type": data.type,
                        "typeValue": data.typeValue,
                        "effectiveDateTime": data.date
                    }
                    
                }).then((response) => {
                    resolve(response.data)
                    commit('setuserData', response.data)
                    
                })
            })

        },
        testcall: ({
            commit
        }, data) => {

            return new Promise((resolve) => {
                axios({
                    url:  '/srv/getOrgChartData', //https://ltwueeualhzv2jsd-orgchart-backend.cfapps.eu10.hana.ondemand.com
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    params: {
                        "companyId": companyId,
                        "userId": data.userid,
                        "position": data.position,
                        "effectiveDateTime": data.date
                    }
                }).then((response) => {
                    resolve(response.data)
                    commit('setuserData', response.data)
                    
                })
            })

        },

        testcall1: ({
            commit
        }, data) => {

            return new Promise((resolve) => {
                axios({
                    url:  '/srv/getOrgChartData',
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    params: {
                        "companyId": companyId,
                        "userId": data.userid,
                        "position": data.position,
                        "effectiveDateTime": data.date
                    }
                }).then((response) => {
                    resolve(response.data)
                    commit("setflag", "hello")
        
                })
            })

        },
        getAllUser: ({
            commit
        }, data) => {

            return new Promise((resolve) => {
                axios({
                    url:  '/srv/getAllUsers',
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    params: {
                        "companyId": companyId,
                        "searchKey": data
                    }
                }).then((response) => {
                    resolve(response.data)
                    commit("setflag", "hello")
                    
                })
            })
        },

        getAllPaygradeList: ({
            commit
        }) => {

            return new Promise((resolve) => {
                axios({
                    url:  '/srv/getPayGrade?companyId=' + companyId,
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }

                }).then((response) => {
                    resolve(response.data)
                    commit("setallPaygradeData", response.data.d.results)

                })
            })
        },

        getAllBusinessUnitList: () => {

            return new Promise((resolve) => {
                axios({
                    url:  '/srv/getBusinessUnitList?companyId=' + companyId,
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }

                }).then((response) => {
                    resolve(response.data)
                    //commit("setsearchField", response.data.d.results)

                })
            })
        },


        getAllClusterListFilter: ({commit},data) => {

            return new Promise((resolve) => {
                axios({
                    url:  '/srv/getClusterListFilter?companyId=' + companyId+'&bu=' +data.filter,
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }

                }).then((response) => {
                    resolve(response.data)
                    console.log(commit)
                    //commit("setsearchField", response.data.d.results)

                })
            })
        },

        getUserInfo: ({commit}) => {

            return new Promise((resolve) => {
                axios({
                    url:  '/srv/user',
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }

                }).then((response) => {
                    
                    console.log(commit)
                    //commit("setloggedUser", response.data.id)
                    resolve(response)

                })
            })
        },

        getUserDept: ({commit},data) => {

            return new Promise((resolve) => {
                axios({
                    url:  '/srv/getLoggedUserDept?companyId='+companyId+'&userId='+data.userid,
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }

                }).then((response) => {
                    
                    console.log(commit)
                    //commit("setloggedUser", response.data.id)
                    resolve(response)

                })
            })
        },

        getLocationList: () => {

            return new Promise((resolve) => {
                axios({
                    url:  '/srv/getLocationList?companyId=' + companyId,
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }

                }).then((response) => {
                    resolve(response.data)
                    //commit("setsearchField", response.data.d.results)

                })
            })
        },

        getLocationListFilter: ({commit},data) => {

            return new Promise((resolve) => {
                axios({
                    url:  '/srv/getLocationListFilter?companyId=' + companyId +'&cluster=' + data.filter,
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }

                }).then((response) => {
                    resolve(response.data)
                   console.log(commit)
                })
            })
        },



        getAllDivisionList: () => {

            return new Promise((resolve) => {
                axios({
                    url:  '/srv/getDivisionList?companyId=' + companyId,
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }

                }).then((response) => {
                    resolve(response.data)
                    //commit("setsearchField", response.data.d.results)

            
                })
            })
        },

        getAllDepartmentList: () => {

            return new Promise((resolve) => {
                axios({
                    url:  '/srv/getDepartmentList?companyId=' + companyId,
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }

                }).then((response) => {
                    resolve(response.data)
                    //commit("setsearchField", response.data)
                    
                })
            })
        },



        getRecruitmentData: ({
            commit
        }, data) => {
            return new Promise((resolve) => {
                axios({
                    url:  '/srv/getPosReqData',
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    params: {
                        "companyId": companyId,
                        "positionNumber": data
                    }
                }).then((response) => {
                    resolve(response.data)
                    commit("setflag", "hello")
                
                })
            })

        },
        getUserProfileData: ({
            commit
        }, data) => {
            
            return new Promise((resolve) => {
                axios({
                    url:  '/srv/employeeProfile',
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    params: {
                        "companyId": companyId,
                        "userId": data
                    }
                }).then((response) => {
                    resolve(response.data)
                    commit("setEmpProfileData", response.data)
                    
                })
            })
        }
    },
})