import { create } from 'zustand';

export interface MenuState {
  open: boolean;
  toggle: (toggle: boolean) => void;
}

export const useMenu = create<MenuState>()((set) => ({
  open: false,
  toggle: (toggle) => set((s) => ({ open: toggle })),
}));
export default useMenu;
