import PopularSelections from '../components/PopularSelections';
import Layout from '../components/Layout';
import { Theme } from '../components/styles/Theme';
import GlobalContext from '../components/GlobalContext';
import React from 'react';

// injectGlobal`
// *{

// }
// `;

export const SearchQueryContext: React.Context<string> = React.createContext("");

const Index = (props): JSX.Element => {
  return (
    <GlobalContext>
      {/* Layout contains the header */}
      <Layout>
        <div style={{ fontSize: '20px', color: Theme.textColor, padding: '20px 20px' }}>
          <span>Popular Choices</span>
        </div>
        <PopularSelections></PopularSelections>
      </Layout>
    </GlobalContext>
  );
}

export default Index;