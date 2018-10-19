import { ActionTree } from 'vuex';
import { UserProfileState, UserProfile } from './types';
import { RootState } from '../types';



export const actions: ActionTree<UserProfileState, RootState> = {
      setCurrentUser({ commit }, currentUser: UserProfile) {
        commit('SET_CURRENT_USER', currentUser);
      },
      clear({ commit }) {
        commit('CLEAR_STATE', '');
      },
};
