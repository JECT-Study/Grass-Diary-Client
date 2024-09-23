import { create } from 'zustand';

interface UserState {
  memberId: Id;
  setMemberId: (memberId: Id) => void;
}

const useUserStore = create<UserState>(set => ({
  memberId: 0,
  setMemberId: memberId => set({ memberId }),
}));

export const useMemberId = () => useUserStore(state => state.memberId);
export const useSetMemberId = () => useUserStore(state => state.setMemberId);
