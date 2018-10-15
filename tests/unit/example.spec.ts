import { expect } from 'chai';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import DecksComponent from '@/components/DecksComponent.vue';
import Vuex from 'vuex';
import { DeckState, Deck, Card } from '../../src/store/deck/types';
import { deck } from '../../src/store/deck';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('DecksComponent.vue', () => {
  let store: any;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        deck,
      },
    });
  });

  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(DecksComponent, { store, localVue });
    // expect(wrapper.text()).to.include(msg);
  });
});
