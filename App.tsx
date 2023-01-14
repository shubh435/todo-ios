import React from 'react';
import {SafeAreaView} from 'react-native';
import Todos from './src/components/Todos';

interface AppProps {}

interface AppState {}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView>
        <Todos />
      </SafeAreaView>
    );
  }
}

export default App;
