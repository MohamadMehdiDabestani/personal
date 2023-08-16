import { create } from 'zustand';

type GameState = {
  ai: string;
  client: string;
  currentPlayer: string;
  spot: string[][];
  winner: null | string;
  isDraw: boolean;
}
type Actions = {
  setSpot: (x: number, y: number, value: string) => void;
  toggleCurrentPlayer: () => void;
  drawGame: () => void;
  setWinner: (winner: string) => void;
  rest: () => void;
};
const init: GameState = {
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
};
export const useGame = create<GameState & Actions>()((set, get) => ({
  ...init,
  toggleCurrentPlayer: () =>
    set(() => ({ currentPlayer: get().currentPlayer === 'X' ? 'O' : 'X' })),
  setSpot: (x: number, y: number, value: string) =>
    set(() => {
      if (get().isDraw || get().winner !== null) return {};
      const oldList = [...get().spot];
      oldList[x][y] = value;
      return { spot: oldList };
    }),
  drawGame: () => set(() => ({ isDraw: true })),
  setWinner: (winner) => set(() => ({ winner: winner })),
  rest: () => {
    set({
      spot: [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ],
      currentPlayer: 'O',
      winner: null,
      isDraw: false,
    });
  },
}));
export default useGame;
