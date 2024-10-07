import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { semantic } from '@styles/semantic';
import { useTodayDate } from '@hooks/api/useTodayDate';

import more from '@svg/more_horiz.svg';
import editIcon from '@svg/mode_edit.svg';
import deleteIcon from '@svg/delete_forever.svg';
import { Menus, Menu } from '@components/index';
import { useModal } from '@state/modal/useModal';
import { MODAL } from '@constants/message';
import { INTERACTION } from '@styles/interaction';
import { useDeleteDiaryDetail } from '@hooks/api/useDeleteDiaryDetail';

type SettingProps = {
  diaryId: Id;
  createdDate: string;
};

const Setting = ({ diaryId, createdDate }: SettingProps) => {
  const navigate = useNavigate();
  const { modal } = useModal();
  const { date } = useTodayDate();
  const [canEdit, setCanEdit] = useState(false);
  const { mutate } = useDeleteDiaryDetail(diaryId);

  const editModal = () => {
    const setting = {
      title: MODAL.edit_diary.title,
      content: MODAL.edit_diary.content,
    };

    const button1 = {
      active: true,
      text: MODAL.confirm,
      color: semantic.light.accent.solid.hero,
      interactions: INTERACTION.accent.subtle(),
    };

    if (!canEdit) return modal(setting, button1);
    navigate(`/editdiary/${diaryId}`);
  };

  const deleteModal = () => {
    const setting = {
      title: MODAL.delete_diary.title,
      content: MODAL.delete_diary.content,
    };

    const button1 = {
      active: true,
      text: MODAL.cancel,
    };

    const button2 = {
      active: true,
      text: MODAL.delete_diary.button,
      clickHandler: mutate,
      color: semantic.light.feedback.solid.negative,
    };

    modal(setting, button1, button2);
  };

  useEffect(() => {
    if (createdDate && date) {
      if (
        // 당일 : 일기 수정 가능
        +createdDate.slice(0, 2) === date.year % 100 &&
        +createdDate.slice(4, 6) === date.month &&
        +createdDate.slice(8, 10) === date.date
      ) {
        setCanEdit(true);
      } else {
        // 그 외 시간 : 수정 불가능
        setCanEdit(false);
      }
    }
  }, [createdDate, date]);

  return (
    <Menus icon={more}>
      <Menu onClick={editModal} text={'일기 수정'} svg={editIcon} />
      <Menu
        onClick={deleteModal}
        text={'일기 삭제'}
        svg={deleteIcon}
        color={semantic.light.feedback.solid.negative}
      />
    </Menus>
  );
};

export default Setting;
