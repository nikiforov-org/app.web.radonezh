import React, { useState, useEffect } from 'react';

import {
  f7,
  f7ready,
  App,
  Panel,
  Views,
  View,
  Popup,
  Page,
  Navbar,
  Toolbar,
  NavRight,
  Link,
  Block,
  BlockTitle,
  LoginScreen,
  LoginScreenTitle,
  List,
  ListItem,
  ListInput,
  ListButton,
  BlockFooter
} from 'framework7-react';


import routes from '../js/routes';
import store from '../js/store';

const RadonezhApp = () => {
  // Login screen demo data
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  // Framework7 Parameters
  const f7params = {
    name: 'Radonezh PWA', // App name
    theme: 'auto', // Automatic theme detection

    darkMode: true,


    // App store
    store: store,
    // App routes
    routes: routes,

    // Register service worker (only on production build)
    serviceWorker: process.env.NODE_ENV === 'production' ? {
      path: '/service-worker.js',
    } : {},
  };
  // const alertLoginData = () => {
  //   f7.dialog.alert('Username: ' + username + '<br>Password: ' + password, () => {
  //     f7.loginScreen.close();
  //   });
  // }
  f7ready(() => {


    // Call F7 APIs here
  });

  return (
    <App {...f7params}>




      {/* Views/Tabs container */}
      <Views tabs className="safe-areas">
        {/* Tabbar for switching views-tabs */}
        <Toolbar tabbar icons bottom>
          <Link tabLink="#view-radio" tabLinkActive iconF7="music_note_2" text="Радио" />
          <Link tabLink="#view-help" iconF7="money_rubl" text="Помощь" />
          <Link tabLink="#view-more" iconF7="ellipsis" text="Ещё" />
        </Toolbar>

        {/* Your main view/tab, should have "view-main" class. It also has "tabActive" prop */}
        <View id="view-radio" main tab tabActive url="/" />

        {/* Catalog View */}
        <View id="view-help" name="help" tab url="/help/" />

        {/* Settings View */}
        <View id="view-more" name="more" tab url="/more/" />

      </Views>

      {/* Popup */}
      {/* <Popup id="my-popup">
        <View>
          <Page>
            <Navbar title="Popup">
              <NavRight>
                <Link popupClose>Close</Link>
              </NavRight>
            </Navbar>
            <Block>
              <p>Popup content goes here.</p>
            </Block>
          </Page>
        </View>
      </Popup> */}

      {/* <LoginScreen id="my-login-screen">
        <View>
          <Page loginScreen>
            <LoginScreenTitle>Login</LoginScreenTitle>
            <List form>
              <ListInput
                type="text"
                name="username"
                placeholder="Your username"
                value={username}
                onInput={(e) => setUsername(e.target.value)}
              ></ListInput>
              <ListInput
                type="password"
                name="password"
                placeholder="Your password"
                value={password}
                onInput={(e) => setPassword(e.target.value)}
              ></ListInput>
            </List>
            <List>
              <ListButton title="Sign In" onClick={() => alertLoginData()} />
              <BlockFooter>
                Some text about login information.<br />Click "Sign In" to close Login Screen
              </BlockFooter>
            </List>
          </Page>
        </View>
      </LoginScreen> */}
    </App>
  )
}
export default RadonezhApp;