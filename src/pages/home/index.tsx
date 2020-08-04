import * as React from 'react';
import styled from 'styled-components';
import { CardPreview } from 'features/cards';
import { ContentCenteredTemplate } from 'ui';
import { assignStart } from 'lib/effector';
import { useEvent, useStore } from 'effector-react/ssr';

import * as model from './model';

export const HomePage = () => {
  const pageLoaded = useEvent(model.pageLoaded);
  const increment = useEvent(model.incrementClicked);
  const reset = useEvent(model.resetClicked);

  const counterValue = useStore(model.$counterValue);
  const pagePending = useStore(model.$pagePending);

  React.useEffect(() => {
    pageLoaded({});
  }, [pageLoaded]);

  return (
    <ContentCenteredTemplate>
      <Container>
        <CardsContainer>
          {cards.map((card) => (
            <CardPreview key={card.id} card={card} />
          ))}
        </CardsContainer>
      </Container>
    </ContentCenteredTemplate>
  );
};

assignStart(HomePage, model.pageLoaded);

const cards = [
  {
    id: 1,
    title:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
    updatedAt: '05:03 03.01.2',
    author: 'Sova',
    content:
      'Sometimes we need to save Set in effector store. Simple createStore(new Set) will not trigger updates on.add(item). Sometimes we need to save Set in effector store. Simple createStore(new Set) will not trigger updates on.add(item). Sometimes we need to save Set in effector store. Simple createStore(new Set) will not trigger updates on.add(item)',
  },
  {
    id: 2,
    title: 'Manage map or Set in effector store',
    updatedAt: '05:03 03.01.2',
    author: 'Sova',
    content:
      'Sometimes we need to save Set in effector store. Simple createStore(new Set) will not trigger updates on.add(item)',
  },
  {
    id: 3,
    title: 'Suspendisse congue quam',
    updatedAt: '05:03 03.01.2',
    author: 'Sova',
    content:
      'Sometimes we need to save Set in effector store. Simple createStore(new Set) will not trigger updates on.add(item)',
  },
  {
    id: 4,
    title:
      'Aliquam sodales quis erat eget sagittis. Integer volutpat, massa non bibendum varius',
    updatedAt: '05:03 03.01.2',
    author: 'Sova',
    content:
      'Sometimes we need to save Set in effector store. Simple createStore(new Set) will not trigger updates on.add(item). Sometimes we need to save Set in effector store. Simple createStore(new Set) will not trigger updates on.add(item). Sometimes we need to save Set in effector store. Simple createStore(new Set) will not trigger updates on.add(item)',
  },
  {
    id: 5,
    title: 'Integer hendrerit ex neque, in faucibus massa condimentum',
    updatedAt: '05:03 03.01.2',
    author: 'Sova',
    content:
      'Sometimes we need to save Set in effector store. Simple createStore(new Set) will not trigger updates on.add(item). Sometimes we need to save Set in effector store. Simple createStore(new Set) will not trigger updates on.add(item). Sometimes we need to save Set in effector store. Simple createStore(new Set) will not trigger updates on.add(item)',
  },
];

const Container = styled.div`
  display: flex;
  padding: 3rem 0;
`;

const CardsContainer = styled.div`
  width: 74.5%; /* 1044 / 1404 * 100 */

  & > *:not(:last-child) {
    margin-bottom: 1.125rem;
  }
`;
