/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { SplashScreen, LoadingDot } from './SplashScreen.style';

function LoadingMessage() {
  return (
    <SplashScreen>
      Wait a moment while the app is loading.
      <LoadingDot />
    </SplashScreen>
  );
}

function withSplashScreen(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
      };
    }

    async componentDidMount() {
      setTimeout(() => {
        this.setState({
          loading: false,
        });
      }, 1500);
    }

    render() {
      const { loading } = this.state;
      // while checking user session, show "loading" message
      if (loading) {
        return LoadingMessage();
      }

      // otherwise, show the desired route
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default withSplashScreen;
