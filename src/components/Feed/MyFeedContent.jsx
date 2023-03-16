import React from 'react';
import styled from 'styled-components';

function MyFeedContent() {
  return (
    <MyFeed>
      <Title>내가 작성한 글</Title>
      <FeedContainer>
        <Feed>
          <p>TEXT</p>
        </Feed>
        <Feed>
          <p>TEXT</p>
        </Feed>
        <Feed>
          <p>TEXT</p>
        </Feed>
      </FeedContainer>
    </MyFeed>
  );
}

export default MyFeedContent;

const MyFeed = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-content: center;
  align-items: center;
  gap: 30px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  /* position: absolute; */
  gap: 10px;
`;

const Feed = styled.div`
  width: 400px;
  height: 200px;
  border-radius: 10px;
  background-color: #ccd3e6;
  display: block;
`;
