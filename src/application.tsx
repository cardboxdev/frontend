import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { Provider } from 'effector-react/ssr';
import { Scope } from 'effector/fork';

import { Pages } from './pages';
import { Searchbar } from './features/searchbar';

interface Props {
  root: Scope;
}

const Globals = createGlobalStyle`
  html {
    font-size: 16px;
  }

  body {
    margin: 0;
    overflow: hidden;
    padding: 0;
    font-family: sans-serif;
  }
`;

export const Application: React.FC<Props> = ({ root }) => (
  <Provider value={root}>
    <Container>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        titleTemplate="%s @ Cardbox"
        defaultTitle="Welcome to Cardbox"
      >
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <Globals />
      <Searchbar />
      <PagesContainer>
        <PagesContent>
          <Pages />
        </PagesContent>
      </PagesContainer>
    </Container>
  </Provider>
);

// Разметка для того, чтобы скроллился только PagesContainer
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const PagesContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding-top: 72px;
`;

//Чтобы скролл страницы не сдвигал ее по горизонтали влево, иначе страница будет отцентрована левее чем хедер.
const PagesContent = styled.div`
  width: 100vw;
`;
