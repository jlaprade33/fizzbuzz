import FizzBuzz from './components/FizzBuzz';
import Footer from './components/Footer';
import Header from './components/Header';
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <meta property="og:title" content={'FizzBuzz'} />
        <meta property="og:description" content={'FizzBuzz coding challenge'} />
      </Helmet>
      <Header />
      <FizzBuzz />
      <Footer />
    </HelmetProvider>
  );
}

export default App;
