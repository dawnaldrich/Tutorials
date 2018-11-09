import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BookDetailPage from './pages/book-detail';
import BooksSectionPage from './pages/books-section';
import PageNotFound from './pages/page-not-found';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={BooksSectionPage} />
          <Route path='/books/category/:categoryName' exact render={(props) => {
            const { categoryName } = props.match.params;
            return <BooksSectionPage categoryName={ categoryName } />;
          }}/>
          <Route path='/book/:bookID' render={(props) => {
            const { bookID } = props.match.params;
            return <BookDetailPage bookID={bookID} />;
          }} />
          }
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
