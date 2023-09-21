import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div class="App">
      <meta name="description" content="A webpage on resturant Little Lemon"/>
      <meta name="og:title" content="Little Lemon"/>
      <meta name="og:description" content="Little Lemon is a mediterrean restuarant based in Chicago"/>
      <meta name="og:image" content=""/>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
