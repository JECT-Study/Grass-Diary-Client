import { useMutation } from '@tanstack/react-query';
import API from '@services/index';
import { END_POINT } from '@constants/api';
import { AxiosError } from 'axios';

export const usePostImage = () => {
  return useMutation({
    mutationFn: async (image: ImageInfo) => {
      // base64 형식을 객체로 변환.
      const formData = await fetch(image.imageURL)
        .then(res => res.blob())
        .then(blob => {
          const file = new File([blob], image.imageName, {
            type: image.imageType,
          });
          const formData = new FormData();
          formData.append('image', file);
          return formData;
        });

      return API.post(END_POINT.image, formData);
    },
  });
};
