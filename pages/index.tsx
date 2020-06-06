import { PopularSelections } from '../components/PopularSelections';
import Layout from '../components/Layout';
import { Theme } from '../components/styles/Theme';
import { Component } from 'react';
import GlobalStyle from '../components/styles/GlobalStyle';

// injectGlobal`
// *{

// }
// `;


export default class Home extends Component {
  render() {
    return (
      <GlobalStyle>
        <Layout>
          {/* <div style={{ borderTop: '1px solid lightgray', margin: '10px 0', padding: '10px 0 20px 0', borderBottom: '1px solid lightgray' }}> */}
          <div style={{ fontSize: '20px', color: Theme.textColor, padding: '20px 20px' }}>
            <span>Popular Choices</span>
          </div>
          <PopularSelections></PopularSelections>
          {/* </div> */}
        </Layout>
      </GlobalStyle>
    );
  }
}