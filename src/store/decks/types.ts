export interface Card {
    front: string;
    back: string;
}

export interface Deck {
    id?: string;
    name: string;
    cards: Card[];
    uid: string;
}

export interface DecksState {
    decks: Deck[];
    currentDeckId?: string;
}
