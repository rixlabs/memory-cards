import Vue from 'vue';
import Vuex from 'vuex';
import { deck } from './deck';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    deck,
  },
  strict: debug,
});
