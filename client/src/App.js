// External imports
import React, { useEffect } from 'react';
import { ChakraProvider, theme as defaultTheme, CSSReset } from '@chakra-ui/react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

// Local imports
import store from './store/store';
import { loadUser } from './store/actions/auth';

import NavBar from './Components/NavBar';
import LandingPage from './Pages/LandingPage';
import AuthorsPage from './Pages/AuthorsPage';
import UseCases from './Pages/UseCases';
import AuthorEditOrAddPage from './Pages/AuthorEditOrAdd';
import BooksPage from './Pages/BooksPage';
import BookPage from './Pages/BookPage';
import BookEditOrAddPage from './Pages/BookEditOrAdd';
import LoginPage from './Pages/Auth/LoginPage';
import RegisterPage from './Pages/Auth/RegisterPage';
import FourOhFour from './Pages/404Page';
import DataInvestigation from './Pages/DataInvestigation';
import DataInvestigationgrph from './Pages/DataInvestigationgrph';
import DataProcessing from './Pages/DataProcessing';
import DataProcessingCleanService from './Pages/DataProcessingCleanService';
import ModelBuilding from './Pages/ModelBuilding';
import ModelPrediction from './Pages/ModelPrediction';
import ModelInterpretation from './Pages/ModelInterpretation';
import ModelDeployment from './Pages/ModelDeployment';

const theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    transparent: {
      100: 'rgba(0, 0, 0, 0.20)',
      300: 'rgba(0, 0, 0, 0.40)',
      500: 'rgba(0, 0, 0, 0.60)',
      700: 'rgba(0, 0, 0, 0.70)',
      900: 'rgba(0, 0, 0, 0.80)',
    },
  },
};

function App() {
  useEffect(() => {
    localStorage.setItem('token', '12345678');
    if (localStorage.token) {
      store.dispatch(loadUser());
    }
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <CSSReset />
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/authors' component={AuthorsPage} />
            <Route exact path='/usecases' component={UseCases} />
            <Route exact path='/dataexplore' component={DataInvestigation} />
            <Route exact path='/dataexploregph' component={DataInvestigationgrph} />
            <Route exact path='/dataprocessing' component={DataProcessing} />
            <Route exact path='/modelbuilding' component={ModelBuilding} />
            <Route exact path='/modelprediction' component={ModelPrediction} />
            <Route exact path='/modeldeployment' component={ModelDeployment} />
            <Route exact path='/modelinterpretation' component={ModelInterpretation} />
            <Route exact path='/datacleanservice' component={DataProcessingCleanService} />
            <Route exact path='/authors/add' component={AuthorEditOrAddPage} />
            <Route
              exact
              path='/authors/edit/:authorId'
              component={AuthorEditOrAddPage}
            />
            <Route exact path='/books' component={BooksPage} />
            <Route exact path='/books/add' component={BookEditOrAddPage} />
            <Route exact path='/books/:bookId' component={BookPage} />
            <Route exact path='/books/edit/:bookId' component={BookEditOrAddPage} />
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/register' component={RegisterPage} />
            <Route path='*' component={FourOhFour} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
