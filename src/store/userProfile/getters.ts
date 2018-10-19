import { GetterTree } from 'vuex';
import { UserProfileState, UserProfile } from './types';
import { RootState } from '../types';
import _ from 'lodash';

export const getters: GetterTree<UserProfileState, RootState> = {
    isLoggedIn: (state) => {
        return (state.userProfile != null && state.userProfile.uid != null);
    },
};
