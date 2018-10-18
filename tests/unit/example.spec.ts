import { expect } from 'chai';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import DecksComponent from '@/components/DecksComponent.vue';
import Vuex from 'vuex';
import { DeckState, Deck, Card } from '../../src/store/decks/types';
import { decks as oriDecks } from '../../src/store/decks';
import { ActionTree } from 'vuex';
import { RootState } from '../../src/store/types';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('DecksComponent.vue', () => {
  let store: any;

  beforeEach(() => {
    const state: DeckState = {
      decks: [],
      currentDeckId: undefined,
    };

    const actions: ActionTree<DeckState, RootState> = {
      init: () => undefined,
      setCurrentDeck: (obj: any, deckId: string) => undefined,
      addCardToCurrentDeck: (obj: any, newCard: any) => undefined,
      clear: (obj: any) => undefined,
    };

    const namespaced: boolean = true;
    store = new Vuex.Store({
      modules: {
        decks: {
          namespaced,
          state,
          actions,
          getters: oriDecks.getters,
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
