import { create } from 'zustand';

type Actions = {
  setEditId: (id: Id) => void;
  resetEditId: () => void;
  setReplyId: (id: Id) => void;
  resetReplyId: () => void;
};

interface CommentStore {
  editId: Id;
  replyId: Id;
  actions: Actions;
}

const useCommentStore = create<CommentStore>(set => ({
  editId: 0,
  replyId: 0,
  actions: {
    setEditId: id => set({ editId: id }),
    resetEditId: () => set({ editId: 0 }),
    setReplyId: id => set({ replyId: id }),
    resetReplyId: () => set({ replyId: 0 }),
  },
}));

export const useCommentEditId = () => useCommentStore(state => state.editId);
export const useCommentReplyId = () => useCommentStore(state => state.replyId);
export const useCommentActions = () => useCommentStore(state => state.actions);
