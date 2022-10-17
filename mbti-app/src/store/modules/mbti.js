//빈 값 전달
const initStateEmpty = {
  mbtiResult: '',
  page: 0,
  survey: [],
  explanation: {},
};
// 액션 타입(문자열)
const CHECK = 'mbti/CHECK';
const NEXT = 'mbti/NEXT';
const RESET = 'mbti/RESET';
const INIT = 'mbti/INIT';

// 액션 생성 함수
// payload -> 선택에 다른 결과 값 result 전달 필요
export function check(result) {
  return {
    type: CHECK,
    payload: { result },
  };
}
export function next() {
  return {
    type: NEXT,
  };
}
export function reset() {
  return {
    type: RESET,
  };
}
export function init(data) {
  return {
    type: INIT,
    payload: data,
  };
}

//리듀서

export default function mbti(state = initStateEmpty, action) {
  switch (action.type) {
    case INIT:
      return {
        ...state,
        survey: action.payload.survey,
        explanation: action.payload.explanation,
      };
    case CHECK:
      return {
        ...state,
        mbtiResult: state.mbtiResult + action.payload.result,
      };
    case NEXT:
      return {
        ...state,
        page: state.page + 1,
      };
    case RESET:
      return {
        ...state,
        mbtiResult: '',
        page: 0,
      };

    default:
      return state;
  }
}
