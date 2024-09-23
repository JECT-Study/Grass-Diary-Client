import { useMutation } from '@tanstack/react-query';
import API from '@services/index';
import { END_POINT } from '@constants/api';

export const usePostImage = () => {
  return useMutation({
    mutationFn: async (imageURL: string) => {
      // base64 형식을 객체로 변환.
      const formData = await fetch(imageURL)
        .then(res => res.blob())
        .then(blob => {
          const file = new File([blob], 'image.jpg', { type: 'image/jpeg' });
          const formData = new FormData();
          formData.append('image', file);
          return formData;
        });

      return API.post(END_POINT.image, formData);
    },
    onError: error => {
      console.error(error.message);
    },
  });
};
