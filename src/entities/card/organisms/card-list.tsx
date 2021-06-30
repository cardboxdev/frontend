import React from 'react';
import styled from 'styled-components';
import type { Card } from '@box/api';
import { SkeletonGroup } from '@box/ui';

import { CardPreview } from './card-preview';

interface Props {
  cards: Card[];
  getHref?: (data: Card) => string | undefined;
  loading?: boolean;
}

export const CardList: React.FC<Props> = ({ cards, getHref, loading }) => {
  const containerRef = React.useRef<null | HTMLDivElement>(null);

  if (loading) {
    return <SkeletonGroup amount={4} />;
  }

  const focusNext = () => {
    if (!containerRef.current) return;
    const children = [...containerRef.current.children];
    const curFocusIndex = children.findIndex(
      (el) => el === document.activeElement,
    );
    const indexToFocus = curFocusIndex + 1;
    const isIndexIncorrect = indexToFocus >= children.length;
    if (isIndexIncorrect) return;
    const el = containerRef.current.children[indexToFocus] as HTMLElement;
    el.focus();
  };

  const focusPrev = () => {
    if (!containerRef.current) return;
    const children = [...containerRef.current.children];
    const curFocusIndex = children.findIndex(
      (el) => el === document.activeElement,
    );
    const indexToFocus = curFocusIndex - 1;
    const isIndexIncorrect = indexToFocus < 0;
    if (isIndexIncorrect) return;
    const el = containerRef.current.children[indexToFocus] as HTMLElement;
    el.focus();
  };

  const focusItemChanged = (direction: 'next' | 'prev') => {
    if (direction === 'next') focusNext();
    else focusPrev();
  };

  return (
    <Container ref={containerRef}>
      {cards.map((card, i) => (
        <CardPreview
          key={card.id}
          card={card}
          isCardInFavorite={i % 2 === 0}
          href={getHref?.(card)}
          focusItemChanged={focusItemChanged}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5rem;
  flex-direction: column;
`;
