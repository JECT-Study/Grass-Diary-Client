interface IProfile {
  profileImageURL: string;
  nickname: string;
  profileIntro: string;
  email: string;
}

type pickProfileImageURL = Pick<IProfile, 'profileImageURL'>;

type omitProfileImageURL = Omit<IProfile, 'profileImageURL'>;

interface IMoodProfile {
  diary: IDiary[];
  index: number;
}
