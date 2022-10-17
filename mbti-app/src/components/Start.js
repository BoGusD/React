import styled from 'styled-components';
import OrangeButton from './OrangeButton';
import { useDispatch } from 'react-redux';
import { next, init } from '../store/modules/mbti';
import { useEffect, useState } from 'react';

const Header = styled.p`
  font-size: 3em;
`;
const MainImg = styled.img`
  width: inherit;
`;
const SubHeader = styled.p`
  font-size: 1.5em;
  color: #777;
`;

export default function Start() {
  const [counts, setCounts] = useState(0);
  const dispatch = useDispatch();

  //호이스팅을 지원안하기에 다음과 같은 설정 추가
  function makeData(survey, explanation) {
    const initData = { survey: [], explanation: {} };
    if (initData.survey.length === 0) {
      //makedata의 survey.length
      for (let i = 0; i < survey.length; i = i + 2) {
        initData.survey.push({
          question: survey[i].QUESTION_TEXT,
          //똑같은 값이 두개 출력되는 부분은 메우기 위해 설정
          answer: [
            {
              text: survey[i].ANSWER_TEXT,
              result: survey[i].RESULT,
            },
            {
              text: survey[i + 1].ANSWER_TEXT,
              result: survey[i + 1].RESULT,
            },
          ],
        });
      }
    }
    for (let i = 0; i < explanation.length; i++) {
      //바로 윗줄 makedata explanation.length와 다른 explanation
      initData.explanation[explanation[i].MBTI_TYPE] = {
        explanation: explanation[i].EXPLANATION,
        img: explanation[i].IMG_SRC,
      };
    }
    return initData;
  }
  async function sqlfetchData() {
    const resCount = await fetch('http://localhost:3001/data/counts');
    if (resCount.status === 200) {
      const num = await resCount.json();
      if (num[0].counts !== 0) setCounts(num[0].counts);
    } else {
      throw new Error('통신 이상');
    }

    // survey 값 받아오기
    const resSurvey = await fetch('http://localhost:3001/data/survey');
    if (resSurvey.status === 200) {
      const surveyData = await resSurvey.json();

      //explanation 값 받아오기
      const resExplanation = await fetch(
        'http://localhost:3001/data/explanation'
      );
      if (resExplanation.status === 200) {
        const explanationData = await resExplanation.json();

        const madeData = makeData(surveyData, explanationData);

        dispatch(init(madeData));
      } else {
        throw new Error('통신이상');
      }
    } else {
      throw new Error('통신이상');
    }
  }
  async function mongoFetchData() {
    const resCount = await fetch('http://localhost:3001/mongo/counts');
    if (resCount.status === 200) {
      const num = await resCount.json();
      console.log(num);
      if (num[0].counts !== 0) setCounts(num[0].counts);
    } else {
      throw new Error('통신 이상');
    }

    // 설문 전체 데이터 값 받아오기
    const resData = await fetch('http://localhost:3001/mongo/getdata');
    if (resData.status === 200) {
      const data = await resData.json();
      if (data[0].survey.length !== 0) {
        dispatch(init(data[0]));
      }
    } else {
      throw new Error('통신이상');
    }
  }
  useEffect(() => {
    mongoFetchData();
    // sqlfetchData(); << sql사용 하려면
  }, []);

  return (
    <>
      <Header>개발자 MBTI 조사</Header>
      <MainImg src="/images/main.jpg" alt="메인 이미지" />
      <SubHeader>
        개발자가 흔히 접하는 상황에서 따라 MBTI를 알아 봅시다!{'\n\n'}
        지금까지 {counts} 명이 참여해주셨습니다.
      </SubHeader>
      <OrangeButton text="텍스트 시작" clickEvent={() => dispatch(next())} />
    </>
  );
}
