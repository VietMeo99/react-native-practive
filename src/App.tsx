import React from 'react';
import {StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {I18nextProvider} from 'react-i18next';

import i18n from 'translations/i18n';
import RootRoutes from './routes/Root.routes';
import AuthProvider from 'contexts/AuthContext';
import {bootstrapApp} from 'utils/bootstrapApp.util';

import 'react-native-get-random-values';
import CachedParamsProvider from 'contexts/CachedParamsContext';
import SearchProvider from 'contexts/SearchContext';

bootstrapApp();

function App(): React.JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.white,
  // };

  return (
    <>
      {/* <SafeAreaView style={backgroundStyle}> */}
      {/* </SafeAreaView> */}
      <StatusBar
        backgroundColor={'white'}
        translucent={true}
        barStyle={'dark-content'}
      />
      <GestureHandlerRootView style={{flex: 1}}>
        <I18nextProvider i18n={i18n}>
          <CachedParamsProvider>
            <AuthProvider>
              <SearchProvider>
                <RootRoutes />
              </SearchProvider>
            </AuthProvider>
          </CachedParamsProvider>
        </I18nextProvider>
      </GestureHandlerRootView>
    </>
  );
}

export default App;
