import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function InputFeedContent({ onTextChange }) {
  const [text, setText] = useState({ title: '', detail: '' });

  const onChangetext = (e) => {
    setText({
      ...text,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    onTextChange(text);
  }, [text]);

  return (
    <InputContainer>
      <input id="title" name="title" placeholder="제목을 입력하세요..." onChange={onChangetext} />
      <input id="detail" name="detail" placeholder="내용을 입력하세요..." onChange={onChangetext} />
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
