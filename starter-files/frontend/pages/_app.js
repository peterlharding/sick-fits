import React from 'react';
import App from 'next/app';

import Page from '../components/Page';

class MyApp extends App {

  static async getInitialProps({Component, router, ctx}) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return pageProps;
  }

  render () {
    const {Component, pageProps} = this.props;

    return (
      <React.Fragment>
        <Page>
        <Component {...pageProps} />
        </Page>
      </React.Fragment>
    )
  }

}

export default MyApp;