import * as S from '@styles/DiaryDetail/ImageModal.style';
import { useEffect, useRef } from 'react';

const ImageModal = ({ img, setImageModal }: ImageModalProps) => {
  const imageRef = useRef(null);

  const close = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e.target === imageRef.current) return;
    setImageModal(false);
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <S.ImageModalBox onClick={close}>
      <S.ImageContainer>
        <S.CloseBox onClick={close}>
          <S.CloseText>닫기</S.CloseText>
          <S.CloseIcon />
        </S.CloseBox>
        <S.Image src={img} ref={imageRef} />
      </S.ImageContainer>
    </S.ImageModalBox>
  );
};

export default ImageModal;
