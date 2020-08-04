import React from 'react';
import styled from 'styled-components';

interface Card {
  id: number;
  title: string;
  updatedAt: string;
  author: string;
  content: string;
}

interface Props {
  card: Card;
}

export const CardPreview: React.FC<Props> = ({ card }) => (
  <Container>
    <Header>
      <Title>{card.title}</Title>
      <Meta title="Last updated">
        {card.updatedAt}, {card.author}
      </Meta>
    </Header>
    <Body>{card.content}</Body>
  </Container>
);

const Container = styled.article`
  background-color: #fff;
  border: 1px solid #e7e5ee;
  border-radius: 6px;
  box-shadow: 0px 6px 9px #f6f5f8;
  color: #1a1e23;
  padding: 1.5rem;

  *:not(:first-child) {
    margin-top: 1rem;
  }
`;

const Header = styled.header`
  display: flex;
`;

const Title = styled.h3`
  font-size: 1.875rem;
  font-weight: 500;
  line-height: 2.25rem;
  margin: 0;
`;

const Meta = styled.div`
  color: #a39bb2;
  flex-shrink: 0;
  font-size: 0.75rem;
  margin-left: auto;
`;

const Body = styled.div`
  font-size: 0.9375rem;
  line-height: 1.3125rem;
`;
