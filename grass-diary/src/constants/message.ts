export const CONSOLE_ERROR = {
  login: {
    false: '로그인되지 않은 사용자입니다.',
    fail: '인증 확인 중 오류가 발생했습니다.',
  },
  like: {
    post: '사용자의 좋아요 정보를 불러올 수 없습니다.',
    delete: '사용자의 좋아요 정보를 삭제할 수 없습니다.',
  },
  diary: {
    get: '사용자의 일기를 불러올 수 없습니다.',
    delete: '사용자의 일기를 삭제할 수 없습니다.',
  },
  grass: {
    get: '사용자의 잔디를 불러올 수 없습니다.',
  },
  date: {
    get: '오늘의 날짜를 불러올 수 없습니다.',
  },
  question: {
    get: '오늘의 질문을 불러올 수 없습니다.',
  },
  search_date: {
    get: '선택된 날짜의 일기를 불러올 수 없습니다.',
  },
  member: {
    get: '사용자 정보를 불러올 수 없습니다.',
    patch: '사용자 정보를 수정할 수 없습니다.',
  },
  profile: {
    get: '사용자 프로필을 조회할 수 없습니다.',
  },
  reward: {
    get: '리워드 정보를 불러올 수 없습니다.',
  },
} as const;

export const ERROR = {
  // 인증, 엑세스 토큰, 세션 만료 에러메시지
  unauthorized: '인증이 필요합니다. 로그인 해주세요.',
  authentication_failed: '인증을 실패했습니다.',
  auth_invalid_access_token: '잘못된 액세스 토큰입니다.',
  auth_expired_access_token: '액세스 토큰이 만료되었습니다.',
  auth_invalid_signature: '잘못된 시그니처입니다.',
  auth_jwt_error: 'JWT 관련 오류가 발생했습니다.',
  auth_missing_id_in_access_token: 'JWT 액세스 토큰에 ID가 누락되었습니다.',
  auth_token_extraction_failed: '액세스 토큰 추출에 실패했습니다.',
  auth_session_expired: '세션이 만료되었습니다. 다시 로그인 해주세요.',
  // 잘못된 요청 에러 메시지
  member_not_found_err: '요청하신 사용자를 찾을 수 없습니다.',
  diary_already_exists: '이미 해당 날짜에 작성된 일기가 있습니다.',
  diary_not_found_err: '요청하신 다이어리를 찾을 수 없습니다.',
  diary_not_write: '일기가 작성되지 않았습니다.',
  diary_cant_edit: '⚠ 수정 가능한 시간이 아닙니다',
  invalid_image_format: '허용되지 않는 파일 형식입니다.',
  validation_err: '잘못된 입력입니다. 올바른 값을 입력해주세요.',
  permission_err: '접근 권한이 없습니다. 관리자에게 문의하세요.',
  timeout_err: '요청 시간이 초과되었습니다. 다시 시도해주세요.',
  illegal_access: '잘못된 요청입니다. 올바른 경로로 접근해주세요.',
  bad_request_err: '요청 형식이 잘못되었습니다. 올바른 형식으로 요청해주세요.',
  unsupported_media_err:
    '지원되지 않는 미디어 타입입니다. 올바른 형식으로 요청해주세요.',
  missing_param_err:
    '필수 파라미터가 누락되었습니다. 모든 필드를 입력해주세요.',
  conflict_err: '데이터 충돌이 발생했습니다. 요청을 다시 확인해주세요.',
  rate_limit_exceeded:
    'API 요청 한도를 초과했습니다. 잠시 후 다시 시도해주세요.',
  account_locked: '사용자 계정이 잠겼습니다. 관리자에게 문의하세요.',
  // 서버 에러메시지
  server_err: '서버 내부 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
  reward_history_save_failed: '일기 히스토리 저장에 실패했습니다.',
  image_upload_failed: '이미지 업로드에 실패했습니다.',
} as const;

export const NULL = {
  share_popular_feed: '이번 주는 공개된 일기가 아직 없어요.',
  share_feed: '공개된 일기가 아직 없어요',
} as const;

export const COMMENT = {
  deleted: '삭제된 댓글입니다',
  placeholder: '댓글을 입력해주세요',
} as const;

export const FOOTER = {
  copyright: 'Copyright © 2024 Jandi Diary. All rights reserved.',
} as const;

export const MAIN_MESSAGES = {
  top_section: {
    write_diary: '일기 쓰기',
    my_diary: '내 일기장',
  },
  middle_section: {
    status_label: '이번 달 잔디 현황',
    planted_grass_count: '개의 잔디를 심었어요.',
    grass_prompt: '일기를 쓰고, 잔디를 더 심어보세요!',
    monthly_grass_summary: '월에는 총 ',
  },
  bottom_section: {
    my_reward: '내 잔디 리워드',
    reward_message: '잔디를 꾸준히 심고, 리워드를 모아 봐요!',
    theme_store: '테마 상점',
    monthly_diary_review: '한 달 일기 회고',
    review_description:
      '지난 한 달 간의 내 시간과 경험들을 돌아보며 회고해봐요.',
    go_to_review: '회고하러 가기',
    see_more: '더 보러가기',
  },
  banner: {
    future_content_message:
      '잔디 일기에는 앞으로 더 매력적인 콘텐츠들이 추가될 예정이에요!',
  },
} as const;

export const CREATE_MESSAGES = {
  write_diary: '일기 쓰기',
  temp_save: '임시저장(Ctrl+S)',
  save: '저장하기',
  question_title: '오늘의 질문에 대해',
  question_prompt: '오늘의 질문을 주제로 한 일기를 작성해보세요',
  personal_diary: '나만의 일기',
  personal_prompt: '나의 오늘 하루에 대해 자유롭게 작성해보세요',
  hashtag_title: '해시태그',
  visibility_title: '일기 공개 여부',
  public: '공개',
  private: '비공개',
  mood_today: '오늘의 기분',

  toast: {
    temp_save: '작성 중인 일기 내용을 임시저장했어요.',
    already_written: '오늘 이미 작성한 일기가 있어요.',
  },

  hashtag: {
    instruction: '태그명을 입력하고, 스페이스바를 누르면 저장돼요.',
    too_long: '해시태그 길이가 너무 깁니다.',
    no_special_characters: '태그에 특수문자는 넣을 수 없어요.',
    invalid_korean: '올바른 한글을 입력해주세요.',
    duplicate: '이미 존재하는 해시태그입니다.',
    limit_exceeded: '해시태그는 15개까지 입력 가능합니다.',
    enter_tag: '태그명을 작성해주세요...',
    examples: '일상, 친구, 점심 등',
  },
} as const;

export const QUILL_MESSAGE = {
  placeholder: '일기를 작성 해보세요!',
  custom_entry_placeholder:
    '오늘은 무엇을 하고, 누구를 만나고, 어떤 음식을 드셨나요?',
} as const;

export const INTRO_MESSAGES = {
  firstSection: {
    serviceName: '잔디 일기',
    serviceIntroduction: '일상 속의 잔디, 나의 이야기를 키우다',
    scrollMessage: '아래로 스크롤을 내려 잔디 일기에 대해 더 알아보세요!',
  },
  secondSection: {
    secondTitle: '시키는\n나만의 잔디 일기장',
    secondIntroduction: '일기를 작성하면 파릇파릇한 잔디밭이 만들어져요!',
  },
  thirdSection: {
    thirdTitle: '다른 사람들의 일기를\n',
    thirdIntroduction: '다양한 생각, 기억들을 둘러보며 이야기를 나눠요.',
  },
  lastSection: {
    startMessage: '이제, 나만의 잔디밭을 가꿔 보세요!',
  },
  writeDiary: '일기 쓰러 가기',
} as const;

export const MODAL = {
  cancel: '취소',
  confirm: '확인',
  login_induce: {
    title: '로그인 필요',
    content: '일기가 궁금하다면,\n 로그인 후 읽어볼 수 있어요',
    button: '로그인하기',
  },
  edit_diary: {
    title: '일기 수정 가능 시간',
    content: '일기는 당일 00:00부터 24:00전까지 수정 가능합니다.',
  },
  delete_diary: {
    title: '일기 삭제 안내',
    content: '일기를 삭제하시겠어요?\n삭제된 일기는 다시 되돌릴 수 없어요.',
    button: '삭제하기',
  },
} as const;

export const TOAST = {
  delete_diary: '일기가 삭제되었습니다',
  image_capacity_limit: '5MB를 초과하는 이미지 파일은 업로드 할 수 없어요.',
} as const;
