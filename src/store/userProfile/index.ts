import { Module } from 'vuex';
import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';
import { UserProfileState } from './types';
import { RootState } from '../types';

export const state: UserProfileState = {
    userProfile: undefined,
};

const namespaced: boolean = true;

export const userProfile: Module<UserProfileState, RootState> = {
    namespaced,
    state,
    actions,
    getters,
    mutations,
};
