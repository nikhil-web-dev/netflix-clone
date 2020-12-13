import logo from './logo.svg';
import './App.css';
import request from './requests';
import Row from './Row'

function App() {
  return (
    <div className="App">
        <Row title="Netflix Originals" fetchUrl={request.fetchNetflixOriginals} isLargeRow/>
        <Row title="Trending Now" fetchUrl={request.fetchTrending}/>
        <Row title="Top Rated" fetchUrl={request.fetchTopRated}/>
        <Row title="Action" fetchUrl={request.fetchActionMovies}/>
        <Row title="Comedy" fetchUrl={request.fetchComedyMovies}/>
        <Row title="Horror" fetchUrl={request.fetchHorrorMovies}/>
    </div>
  );
}

export default App;
