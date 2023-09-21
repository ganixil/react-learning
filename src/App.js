import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <>
      <meta name="description" content="A webpage on resturant Little Lemon"/>
      <meta name="og:title" content="Little Lemon"/>
      <meta name="og:description" content="Little Lemon is a mediterrean restuarant based in Chicago"/>
      <meta name="og:image" content=""/>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
