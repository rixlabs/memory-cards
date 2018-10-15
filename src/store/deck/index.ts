import { Module } from 'vuex';
import { actions } from './actions';
import { mutations } from './mutations';
import { DeckState } from './types';
import { RootState } from '../types';

export const state: DeckState = {
    decks: [],
    currentDeck: undefined,
};

const namespaced: boolean = true;

export const deck: Module<DeckState, RootState> = {
    namespaced,
    state,
    actions,
    mutations,
};
