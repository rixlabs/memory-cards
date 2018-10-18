export interface Card {
    front: string;
    back: string;
}

export interface Deck {
    id: string;
    name: string;
    cards: Card[];
    uid: string;
}

export interface DeckState {
    decks: Deck[];
    currentDeckId?: string;
}
