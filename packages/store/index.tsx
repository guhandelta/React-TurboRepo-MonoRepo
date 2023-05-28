import { create } from "zustand"

export type Game = {
    title: string;
    image: string;
};

export const useStore = create<{
    games: Game[];
    // Since this fn() just adds a movie to the list of movies, it does not return anything
    addGame: (game: Game) => void;
}>(set => ({ 
    games: [],
    addGame: game => set(state => ({ games: [...state.games, game] })),
}));