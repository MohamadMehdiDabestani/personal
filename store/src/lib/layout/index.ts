import { PaletteMode } from '@mui/material';
import { create } from 'zustand';
type Direction = 'rtl' | 'ltr';
export interface LayoutState {
  theme: PaletteMode;
  direction: Direction;
  toggleDirection: (value: Direction) => void;
  toggleTheme: (value: PaletteMode) => void;
}

export const useLayout = create<LayoutState>()((set) => ({
  direction: 'rtl',
  theme: 'light',
  toggleDirection: (value) =>
    set((s) => ({ direction: value })),
  toggleTheme: (value) =>
    set((s) => ({ theme: value })),
}));
export default useLayout;
