import { Module } from 'vuex';
import { getters} from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { DeckState } from './types';
import { RootState } from '../types';

export const state: DeckState = {
    decks: [],
    currentDeckId: undefined,
};

const namespaced: boolean = true;

export const decks: Module<DeckState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations,
};
