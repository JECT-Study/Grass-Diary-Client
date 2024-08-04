interface IProfile {
  profileImageURL: string;
  nickName: string;
  profileIntro: string;
}

type pickProfileImageURL = Pick<IProfile, 'profileImageURL'>;

// Setting Page updateProfile Type
type omitProfileImageURL = Omit<IProfile, 'profileImageURL'>;

// Mood Profile Type
interface IMoodProfile {
  diary: IDiary[];
  index: number;
}
