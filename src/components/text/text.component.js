import React from 'react';
import Styled from './text.styled';

const Text = ({ color = '#fff', children }) => {
  return (
    <div>
      <Styled.Question color={color} >{children}</Styled.Question>
    </div>
  )
};

export default Text;