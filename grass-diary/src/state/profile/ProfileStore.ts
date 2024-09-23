import { create } from 'zustand';

interface Actions {
  setProfileImageURL: (profileImageURL: string) => void;
  setNickName: (nickName: string) => void;
  setProfileIntro: (profileIntro: string) => void;
}

interface ProfileState extends IProfile {
  actions: Actions;
}

const useProfileStore = create<ProfileState>(set => ({
  profileImageURL: '',
  nickname: '',
  profileIntro: '',
  actions: {
    setProfileImageURL: profileImageURL => set({ profileImageURL }),
    setNickName: nickname => set({ nickname }),
    setProfileIntro: profileIntro => set({ profileIntro }),
  },
}));

export const useProfileImageURL = () =>
  useProfileStore(state => state.profileImageURL);
export const useNickname = () => useProfileStore(state => state.nickname);
export const useProfileIntro = () =>
  useProfileStore(state => state.profileIntro);
export const useProfileActions = () => useProfileStore(state => state.actions);
