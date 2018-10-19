import { Deck } from './../decks/types';
import { ActionTree } from 'vuex';
import { RootState } from '../types';
import { decksCollection } from '../../config/db';
import { CurrentDeckState } from './types';
import firebase from 'firebase';
import _ from 'lodash';


export const actions: ActionTree<CurrentDeckState, RootState> = {
    setCurrentDeck({ commit }, deckId: string) {
        decksCollection.doc(deckId).onSnapshot({ includeMetadataChanges: true }, (doc: any) => {
            const source = doc.metadata.hasPendingWrites ? 'Local' : 'Server';
            if (source === 'Server') {
                commit('SET_CURRENT_DECK', { id: deckId, ...doc.data() });
            }
        });
    },
    addCardToCurrentDeck({ commit }, newCard: any) {
        if (_.isEmpty(newCard.data.front) || _.isEmpty(newCard.data.back) || _.isEmpty(newCard.deckId)) {
            throw new Error('Card fields cannot be empty');
            return;
        }
        decksCollection.doc(newCard.deckId).get().then((deck: any) => {
            const cardsRef = deck.data().cards;
            const newCards = JSON.parse(JSON.stringify(cardsRef));
            newCards.push(newCard.data);
            decksCollection.doc(newCard.deckId).update({
                cards: firebase.firestore.FieldValue.arrayUnion(newCard.data),
            }).catch((err: any) => {
                return undefined;
            });
        });
    },
};
