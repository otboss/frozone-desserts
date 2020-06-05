import Head from 'next/head';
import { Header } from '../components/Header';
import { PopularSelections } from '../components/PopularSelections';
import Layout from '../components/Layout';
import injectGlobal from 'styled-components';
import { Theme } from '../components/styles/Theme';
import styled from 'styled-components';

// injectGlobal`
//   body{
//     margin: 0;
//     padding: 0;
//   }
// `;

const largeScreen = styled.div`
`;

export default function Home() {
  return (
    <Layout>
      <div style={{ fontSize: '20px', color: Theme.textColor, padding: '20px 20px' }}>
        <span>Popular Choices</span>
      </div>
      <PopularSelections></PopularSelections>
    </Layout>
  )
}
