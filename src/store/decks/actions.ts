import { ActionTree } from 'vuex';
import { DecksState, Deck } from './types';
import { RootState } from '../types';
import { decksCollection } from '../../config/db';
import _ from 'lodash';


export const actions: ActionTree<DecksState, RootState> = {
  init({ commit }) {
    decksCollection.onSnapshot((snapshot: any) => {
      snapshot.docChanges().forEach((change: any) => {
        if (change.type === 'added') {
          commit('ADD_DECK', {
            id: change.doc.id,
            ...change.doc.data(),
          });
        }
      });
    });
  },

  clear({ commit }) {
    commit('CLEAR_STATE', '');
  },
  addNewDeck({ commit }, newDeck: Deck) {
    if (_.isEmpty(newDeck.name)) {
      throw new Error('Nam field cannot be empty');
      return;
    }
    decksCollection.add(newDeck);
  },
};
