import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);


const store = new Vuex.Store({
    state: {
        list: [],
        allList: [],
        activeList: [],
        completeList: []
    },
    getters: {
        getListLen: function(state){
            return state.list.length
        },
        getList: function(state){
            return function(index){
                return state.list[index]
            }
        },
        getAllList: function(state){
            return function(){
                state.list = state.allList
                for(let i = 0;i < state.list.length; i++){
                    return state.list[i]
                }
            }
        },
        getActiveList: function(state){
            return function(){
                state.list = state.activeList
                for(let i = 0;i < state.list.length; i++){
                    return state.list[i]
                }
            }
        },
        getCompleteList: function(state){
       
        },
		getUsername: state => () => state.username,
		getHeadImageSrc: state => () => state.headImageSrc,
		getTel: state => () => state.tel
    },
    mutations: {
        addList(state, item){
 
    }
});

export default store;