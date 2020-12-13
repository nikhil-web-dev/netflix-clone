
import './css/App.css';
import request from './requests';
import Nav from './Nav'
import Banner from './Banner'
import Row from './Row'


function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
        <Row title="Netflix Originals" fetchUrl={request.fetchNetflixOriginals} isLargeRow/>
        <Row title="Trending Now" fetchUrl={request.fetchTrending}/>
        <Row title="Top Rated" fetchUrl={request.fetchTopRated}/>
        <Row title="Action" fetchUrl={request.fetchActionMovies}/>
        <Row title="Comedy" fetchUrl={request.fetchComedyMovies}/>
        <Row title="Horror" fetchUrl={request.fetchHorrorMovies}/>
        <Row title="Romance" fetchUrl={request.fetchRomanceMovies}/>
        <Row title="Documenteries" fetchUrl={request.fecthDocumenteries}/>
    </div>
  );
}

export default App;
