import styled from 'styled-components';
const MyProgress = styled.div`
  margin-top: 3em;
`;
const Fill = styled.div`
  text-align: left;
  width: 100%;
  height: 0.75em;
  background-color: #777;
  margin-top: 1em;
`;
const Gauge = styled.div`
  display: inline-block;
  height: inherit;
  position: relative;
  background-color: skyblue;
  //문자열 이전에 #숫자로 설정이 가능하기에 %를 사용가능
  width: ${(props) => props.percent}%;
  top: -1.5px;
`;

export default function Progress({ page, maxPage }) {
  return (
    <MyProgress>
      <div>
        {page}/{maxPage}
      </div>
      <Fill>
        <Gauge percent={(page / maxPage) * 100} />
      </Fill>
    </MyProgress>
  );
}
