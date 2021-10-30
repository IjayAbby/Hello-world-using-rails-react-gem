import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HelloWorld from './HelloWorld';
import configureStore from '../redux/configureStore';

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <HelloWorld />} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
