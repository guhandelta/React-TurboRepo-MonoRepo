import { create } from "zustand"

export type Game = {
    title: string;
    image: string;
};

export const useStore = create<{
    games: Game[];
    // Since this fn() just adds a game to the list of games, it does not return anything
    addGame: (game: Game) => void;
}>(set => ({ 
    games: [],
    addGame: game => set(state => ({ games: [...state.games, game] })),
}));