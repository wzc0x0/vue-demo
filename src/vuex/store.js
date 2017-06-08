/**
 * Created by dell、 on 2017/6/7.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';


Vue.use(Vuex);

const state = {
  isPartner:false,
  isDrawMoney:true,
  isTransfer:true,


};

const mutations = {
  UPDATE_TITLE(state,title){
    console.log(title);
    state.infoDetail = title;
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
