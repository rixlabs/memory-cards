import { Module } from 'vuex';
import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';
import { CurrentDeckState } from './types';
import { RootState } from '../types';

export const state: CurrentDeckState = {
    deck: undefined,
};

const namespaced: boolean = true;

export const currentDeck: Module<CurrentDeckState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations,
};
