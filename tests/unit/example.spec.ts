import { CurrentDeckState } from './../../src/store/currentDeck/types';
import { expect } from 'chai';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import DecksComponent from '@/components/DecksComponent.vue';
import Vuex from 'vuex';
import { DecksState, Deck, Card } from '../../src/store/decks/types';
import { ActionTree, GetterTree } from 'vuex';
import { RootState } from '../../src/store/types';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('DecksComponent.vue', () => {
  let store: any;

  beforeEach(() => {
    const state: DecksState = {
      decks: [],
      currentDeckId: undefined,
    };

    const actions: ActionTree<DecksState, RootState> = {
      init: () => undefined,
      setCurrentDeck: (obj: any, deckId: string) => undefined,
      addCardToCurrentDeck: (obj: any, newCard: any) => undefined,
      clear: (obj: any) => undefined,
    };

    const getters: GetterTree<DecksState, RootState> = {
      getDeckById: (obj: any) => (deckId: string) => undefined,
    };

    const deckState: CurrentDeckState = {
      deck: undefined,
    };

    const deckActions: ActionTree<DecksState, RootState> = {
      setCurrentDeck: (obj: any, deckId: string) => undefined,
    };

    const namespaced: boolean = true;
    store = new Vuex.Store({
      modules: {
        decks: {
          namespaced,
          state,
          actions,
          getters,
        },
        currentDeck: {
          namespaced,
          state: deckState,
          actions: deckActions,
        },
      },
    });
  });

  it('Render Component', () => {
    const msg = 'new message';
    const wrapper = shallowMount(DecksComponent, { store, localVue });
    // expect(wrapper.text()).to.include(msg);
  });
});
