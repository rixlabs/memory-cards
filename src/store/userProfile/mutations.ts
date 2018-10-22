import { MutationTree } from 'vuex';
import { UserProfileState, UserProfile } from './types';

export const mutations: MutationTree<UserProfileState> = {
    SET_CURRENT_USER(state: any, currentUser: UserProfile) {
        state.userProfile = currentUser;
    },
    CLEAR_STATE(state: any) {
        state.userProfile = undefined;
    },
};
