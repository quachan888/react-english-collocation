import Header from './components/Header';
import { MDBContainer } from 'mdb-react-ui-kit';
import SearchBar from './components/SearchBar';

import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';
import Footer from './components/Footer';

function App() {
    return (
        <BrowserRouter>
            <MDBContainer>
                <Header />
                <SearchBar />

                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route path="/search" component={SearchPage} />
                    <Redirect to="/" />
                </Switch>
                <Footer />
            </MDBContainer>
        </BrowserRouter>
    );
}

export default App;
