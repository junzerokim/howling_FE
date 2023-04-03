import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function InputFeedContent({ onTextChange }) {
  // input창에 변화가 생길 때마다 text에 저장
  // text 상태 변수 => title과 detail 값을 하나의 객체에 저장하여 제목과 내용을 분리함
  const [text, setText] = useState({ title: '', detail: '' });

  const onChangetext = (e) => {
    setText({
      ...text,
      [e.target.name]: e.target.value,
    });
  };

  // text 값이 변경될 때만 onTextChange 함수를 호출 => 무한 렌더링 현상을 방지
  useEffect(() => {
    onTextChange(text);
  }, [text]);

  return (
    <InputContainer>
      <textarea id="detail" name="detail" placeholder="내용을 입력하세요..." onChange={onChangetext} />
    </InputContainer>
  );
}

export default InputFeedContent;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 10px;
`;
