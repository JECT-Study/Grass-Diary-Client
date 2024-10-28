export const HTTP_STATUS_CODE = {
  ok: 200,
  bad_request: 400,
  unauthorized: 401,
  forbidden: 403,
  not_found: 404,
  request_timeout: 408,
  conflict: 409,
  unsupported_media_type: 415,
  locked: 423,
  too_many_requests: 429,
  auth_session_expired: 440,
  internal_server_error: 500,
  not_implemented: 501,
  bad_gateway: 502,
  service_unavailable: 503,
} as const;

export const END_POINT = {
  member_info: '/me',
  member_profile: (id: Id) => `/member/profile/${id}`,
  edit_member_info: '/members/me',
  today_date: '/main/today-date',
  today_question: '/diary/today-question',
  diary: (id: Id) => `/diary/${id}`,
  like: (diaryId: Id, memberId: Id) => `/diary/like/${diaryId}/${memberId}`,
  my_diaries: (memberId: Id, currentPage: number) =>
    `/diary/main/${memberId}?page=${currentPage}`,
  search_date: (memberId: Id, selectedDate: string | null) =>
    `/search/date/${memberId}?date=${selectedDate}`,
  share_popular: '/shared/diaries/popular',
  share_latest: (cursorId: number) =>
    `/shared/diaries/latest?cursorId=${cursorId}&size=12`,
  total_reward: (memberId: Id) => `/member/totalReward/${memberId}`,
  total_grass: (memberId: Id) => `/grass/${memberId}`,
  reward_history: (memberId: Id) => `reward/history/${memberId}`,
  grass: (memberId: Id) => `/grass/main-page/${memberId}`,
  image: '/image/diary',
  comment: (id: Id) => `/comment/${id}`,
  comment_delete: (id: Id) => `/comment/${id}/delete`,
  hashtagList: (memberId: Id, hashtagId: string | null) =>
    `search/tagId/${memberId}?tagId=${hashtagId}`,
  withdraw: () => `/member/withdraw`,
  theme_color: (colorCodeId: number) => `/store/color/${colorCodeId}`,
  theme_setting: (colorCodeId: number) => `member/colors/${colorCodeId}/equip`,
  theme_list: (memberId: Id) => `member/${memberId}/colors`,
  visibility: (diaryId: Id) => `diary/${diaryId}/visibility`,
} as const;
