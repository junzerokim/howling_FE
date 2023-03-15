import React from 'react';
import styled from 'styled-components';

function MyFeedContent() {
  return (
    <MyFeed>
      <h1>MY FEED PAGE</h1>
      <p>blahblahblahblahblahblahblahblah</p>
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
`;
