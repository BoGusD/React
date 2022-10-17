import Start from './components/Start';
import styled from 'styled-components';
import GlobalStyle from './components/GlobalStyle';
import { useSelector } from 'react-redux/es/exports';
import Mbti from './components/Mbti';
import Show from './components/Show';

const Main = styled.main`
  box-sizing: border-box;
  width: 100%;
  max-width: 500px;
  padding: 0 35px;
  margin: auto;
  text-align: center;
`;

function App() {
  // combineReducer가 state까지 접근 가능
  const page = useSelector((state) => state.mbti.page);
  const survey = useSelector((state) => {
    console.log(state.mbti);
    return state.mbti.survey;
  });
  console.log(survey);

  return (
    <>
      <GlobalStyle />
      <Main>
        {console.log(page)}
        {page === 0 ? (
          <Start />
        ) : page !== survey.length + 1 ? (
          <Mbti />
        ) : (
          <Show />
        )}
      </Main>
    </>
  );
}

export default App;
