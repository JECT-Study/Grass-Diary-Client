import { useQuery } from '@tanstack/react-query';
import { formatDate } from '@utils/dateUtils';
import API from '@services/index';
import { CONSOLE_ERROR } from '@constants/message';
import { AxiosError } from 'axios';
import { useError } from '@hooks/useError';

interface IGrassList {
  createdAt: string;
  transparency: number;
}

type TUpdatedGrassColor = { [key: string]: string };

const useGrass = (memberId: Id) => {
  const { renderErrorPage } = useError();

  const {
    data: grass,
    isError,
    error,
  } = useQuery<
    TUpdatedGrassColor,
    AxiosError<ApiErrorResponse>,
    TUpdatedGrassColor,
    (string | number | null)[]
  >({
    queryKey: ['grassList', memberId],
    queryFn: () =>
      API.get(`/grass/${memberId}`).then(({ data }) => {
        const updatedGrassColor: TUpdatedGrassColor = {};
        const {
          grassList,
          colorRGB: grassColor,
        }: { grassList: IGrassList[]; colorRGB: number } = data;

        grassList.forEach(grass => {
          const { createdAt, transparency }: IGrassList = grass;
          const createdDate: string = formatDate(new Date(createdAt));

          updatedGrassColor[createdDate] = `${grassColor},${transparency}`;
        });

        return updatedGrassColor;
      }),
    enabled: !!memberId,
  });

  if (isError) {
    console.error(CONSOLE_ERROR.grass.get + error);
    renderErrorPage(error);
  }

  return grass;
};

export default useGrass;
