import { create } from 'zustand';
type Item = {
  title: string;
  isDone: boolean;
  createDate: Date;
};
type Selected = {
  id: number;
} & Item;
export interface TodoState {
  list: Item[];
  selected: Selected | null;
  setSelected: (id: number) => void;
  setTitle: (value: string, id: number) => void;
  cleareSelected: () => void;
  toggleStatus: (id: number) => void;
  createNew: (title: string) => void;
  remove: (id: number) => void;
  initialTodo: (list: Item[]) => void;
}

export const useTodo = create<TodoState>()((set, get) => ({
  list: [],
  selected: null,
  cleareSelected: () => {
    return set(() => ({
      selected: null,
    }));
  },
  initialTodo: (list: Item[]) => {
    return set(() => ({ list }));
  },
  setSelected: (id: number) => {
    return set((s) => ({
      selected: {
        ...(s.list.find((_, idx) => idx === id) as Selected),
        id: id,
      },
    }));
  },
  setTitle: (value: string, id: number) => {
    if (get().selected !== null) {
      return set((s) => ({
        list: [
          ...s.list.filter((_, idx) => idx !== id),
          { ...(get().selected as Item), title: value },
        ],
      }));
    }
  },
  toggleStatus: (id: number) => {
    const cloneList = [...get().list];
    cloneList[id].isDone = !cloneList[id].isDone;
    return set((s) => ({ list: cloneList }));
  },
  remove: (id: number) => {
    return set((s) => ({ list: s.list.filter((_, idx) => id !== idx) }));
  },
  createNew: (title: string) => {
    return set((s) => ({
      list: [
        ...s.list,
        {
          createDate: new Date(),
          isDone: false,
          title: title,
        },
      ],
    }));
  },
}));
export default useTodo;
