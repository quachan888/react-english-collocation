import Header from './components/Header';
import { MDBContainer } from 'mdb-react-ui-kit';
import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';

const ExampleComponents = (data) => {
    console.log(data);
    return <span dangerouslySetInnerHTML={{ __html: data.data }} />;
};

function App() {
    return (
        <MDBContainer>
            <Header />
            <SearchBar />
            <SearchResult />
        </MDBContainer>
    );
}

export default App;
