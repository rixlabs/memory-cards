import { ActionTree } from 'vuex';
import { DeckState, Deck } from './types';
import { RootState } from '../types';
import { decksCollection } from '../../config/db';


export const actions: ActionTree<DeckState, RootState> = {
      init({ commit }) {
        decksCollection.onSnapshot((snapshot: any) => {
          snapshot.docChanges().forEach((change: any) => {
            if (change.type === 'added' || change.type === 'modified') {
              commit('ADD_DECK', {
                id: change.doc.id,
                ...change.doc.data(),
              });
            }
          });
        });
      },
      setCurrentDeck({ commit }, deckId: string) {
          commit('SET_CURRENT_DECK', deckId);
      },
      /* currentDeckInit({ commit }, deckId: string) {
        decksCollection.doc(deckId).onSnapshot((doc: any) => {
          commit('SET_CURRENT_DECK', { id: deckId, ...doc.data() });
        });
      }, */
      addCardToCurrentDeck({ commit }, newCard: any) {
        decksCollection.doc(newCard.deckId).get().then((deck: any) => {
          const cardsRef = deck.data().cards;
          const newCards = JSON.parse(JSON.stringify(cardsRef));
          newCards.push(newCard.data);
          decksCollection.doc(newCard.deckId).update({ cards: newCards });
        });
      },
      clear({ commit }) {
        commit('CLEAR_STATE', '');
      },
};
