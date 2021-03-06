import Vue from 'vue';
import Vuex from 'vuex';
import { decks } from './decks';
import { currentDeck } from './currentDeck';
import { userProfile } from './userProfile';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    decks,
    currentDeck,
    userProfile,
  },
  strict: debug,
});
