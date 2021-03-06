import { Module } from 'vuex';
import { getters} from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { DecksState } from './types';
import { RootState } from '../types';

export const state: DecksState = {
    decks: [],
    currentDeckId: undefined,
};

const namespaced: boolean = true;

export const decks: Module<DecksState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations,
};
