import { GetterTree } from 'vuex';
import { CurrentDeckState } from './types';
import { RootState } from '../types';
import _ from 'lodash';


export const getters: GetterTree<CurrentDeckState, RootState> = {
    getShuffledCards: (state) => {
        if (state.deck) {
            return _.shuffle(state.deck.cards);
        } else {
            return [];
        }
    },
};
