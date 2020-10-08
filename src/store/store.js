import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// const companyId = "SFPART041835"
const companyId = "kalpatarugrp"
// const companyId = "SFPART041835"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLevel:false,
        levelPay:[],
        selectedSearchField: [],
        allPaygrade:[],
        userMasterData: {},
        userData: [],
        inputDate: new Date().toISOString().substr(0, 10),
        flag: "",
        userPayGrade: [],
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
        isEmployeeDataFetched: "Not Fetched"
    },
    mutations: {
        setuserData: (state, data) => {
            state.userData = data
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
            console.log(state.allPaygrade)
        },
        setuserPayGrade: (state, data) => {
            state.userPayGrade = data
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

    },
    getters: {
        getuserData: (state) => {
            return state.userData
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
            console.log(state.profileData)
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
        }
    },
    actions: {
        orgCategory:({
            commit
        }, data) => {

            return new Promise((resolve) => {
                axios({
                    url: 'http://localhost:3000/srv/getOrgChartData/all',
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
                    console.log(response)
                })
            })

        },
        testcall: ({
            commit
        }, data) => {

            return new Promise((resolve) => {
                axios({
                    url: 'http://localhost:3000/srv/getOrgChartData', //https://ltwueeualhzv2jsd-orgchart-backend.cfapps.eu10.hana.ondemand.com
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
                    console.log(response)
                })
            })

        },

        testcall1: ({
            commit
        }, data) => {

            return new Promise((resolve) => {
                axios({
                    url: 'http://localhost:3000/srv/getOrgChartData',
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
                    console.log(response)
                })
            })

        },
        getAllUser: ({
            commit
        }, data) => {

            return new Promise((resolve) => {
                axios({
                    url: 'http://localhost:3000/srv/getAllUsers',
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
                    console.log(response)
                })
            })
        },

        getAllPaygradeList: ({
            commit
        }) => {

            return new Promise((resolve) => {
                axios({
                    url: 'http://localhost:3000/srv/getPayGrade?companyId=' + companyId,
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
                    url: 'http://localhost:3000/srv/getBusinessUnitList?companyId=' + companyId,
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


        getAllDivisionList: () => {

            return new Promise((resolve) => {
                axios({
                    url: 'http://localhost:3000/srv/getDivisionList?companyId=' + companyId,
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }

                }).then((response) => {
                    resolve(response.data)
                    //commit("setsearchField", response.data.d.results)

                    console.log(response)
                })
            })
        },

        getAllDepartmentList: () => {

            return new Promise((resolve) => {
                axios({
                    url: 'http://localhost:3000/srv/getDepartmentList?companyId=' + companyId,
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }

                }).then((response) => {
                    resolve(response.data)
                    //commit("setsearchField", response.data)
                    console.log(response)
                })
            })
        },



        getRecruitmentData: ({
            commit
        }, data) => {
            return new Promise((resolve) => {
                axios({
                    url: 'http://localhost:3000/srv/getPosReqData',
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
                    console.log(response)
                })
            })

        },
        getUserProfileData: ({
            commit
        }, data) => {
            console.log(data)
            return new Promise((resolve) => {
                axios({
                    url: 'http://localhost:3000/srv/employeeProfile',
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
                    console.log(response)
                })
            })
        }
    },
})