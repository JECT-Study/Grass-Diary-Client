import styled from 'styled-components';
import { useProfile } from '@state/profile/useProfile';

const AvatarImg = styled.img<{ $width?: string; $height?: string }>`
  width: ${props => (props.$width ? props.$width : '9.8125rem')};
  height: ${props => (props.$height ? props.$height : '9.75rem')};

  border-radius: 100%;
  object-fit: cover;
`;

interface IProfileProps {
  width?: string;
  height?: string;
}

const Profile = ({ width, height }: IProfileProps) => {
  const { profileImageURL }: pickProfileImageURL = useProfile();

  return profileImageURL ? (
    <AvatarImg
      $width={width}
      $height={height}
      src={profileImageURL || '/assets/img/defaultAvatar.svg'}
      alt="사용자 프로필 사진"
    />
  ) : null;
};

export default Profile;
