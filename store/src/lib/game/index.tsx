import { create } from 'zustand';

export interface GameState {
  ai: string;
  client: string;
  currentPlayer: string;
  spot: string[][];
  winner: null | string;
  isDraw: boolean;
  setSpot: (x: number, y: number, value: string) => void;
  toggleCurrentPlayer: () => void;
  drawGame: () => void;
  setWinner: (winner: string) => void;
}

export const useGame = create<GameState>()((set) => ({
  ai: 'X',
  client: 'O',
  currentPlayer: 'O',
  winner: null,
  isDraw: false,
  spot: [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
  toggleCurrentPlayer: () =>
    set((s) => ({ currentPlayer: s.currentPlayer === 'X' ? 'O' : 'X' })),
  setSpot: (x: number, y: number, value: string) =>
    set((s) => {
      if(s.isDraw || s.winner !== null) return {};
      const oldList = [...s.spot];
      oldList[x][y] = value;
      return { spot: oldList };
    }),
  drawGame: () => set((s) => ({ isDraw: true })),
  setWinner: (winner) => set((s) => ({ winner: winner })),
}));
export default useGame;
