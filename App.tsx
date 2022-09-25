import React from 'react';
import { Provider as MobxProvider } from 'mobx-react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import store from 'store';
import RootApp from 'rootApp';
import { BASE_URL } from 'config/network';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  credentials: 'include',
  uri: BASE_URL,
});

const App = () => {
  return (
    <MobxProvider store={store}>
      <SafeAreaProvider>
        <ApolloProvider client={client}>
          <NavigationContainer>
            <RootApp />
          </NavigationContainer>
        </ApolloProvider>
      </SafeAreaProvider>
    </MobxProvider>
  );
};

export default App;
