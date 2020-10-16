import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sex:'',
    year: '1990年 (平成2)',
    month:'1',
    day: '1',
    question1: '',
    question2: '',
    question3: '',
    content: '',
  },
  getters: {
    getSex(state) {
      return state.sex;
    },
    getYear(state) {
      return state.year;
    },
    getMonth(state) {
      return state.month;
    },
    getDay(state) {
      return state.day;
    },
    getQuestion1(state) {
      return state.question1;
    },
    getQuestion2(state) {
      return state.question2;
    },
    getQuestion3(state) {
      return state.question3;
    },
    getContent(state) {
      return state.content;
    },
  },
  mutations: {
    changeSex(state, sex) {
      state.sex = sex;
    },
    changeYear(state, year) {
      state.year = year;
    },
    changeMonth(state, month) {
      state.month = month;
    },
    changeDay(state, day) {
      state.day = day;
    },
    changeQuestion1(state, question1) {
      state.question1 = question1;
    },
    changeQuestion2(state, question2) {
      state.question2 = question2;
    },
    changeQuestion3(state, question3) {
      state.question3 = question3;
    },
    changeContent(state, content) {
      state.content = content;
    },
  }
});