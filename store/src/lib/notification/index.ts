import { AlertColor } from '@mui/material';
import { create } from 'zustand';
type Variant = 'standard' | 'filled' | 'outlined' | undefined;
export interface NotificationState {
  severity: AlertColor | undefined;
  variant: Variant | undefined;
  open: boolean;
  message: string;
  toggle: (
    open: boolean,
    variant?: Variant | undefined,
    severity?: AlertColor | undefined,
    message?: string | undefined
  ) => void;
}

export const useNotification = create<NotificationState>()((set) => ({
  open: false,
  variant: undefined,
  message: '',
  severity: undefined,
  toggle: (
    open: boolean,
    variant?: Variant | undefined,
    severity?: AlertColor | undefined,
    message?: string | undefined
  ) => set({ open, variant, severity, message }),
}));
export default useNotification;
