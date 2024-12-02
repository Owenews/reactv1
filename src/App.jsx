
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import ShowPokemon from './components/ShowPokemon';
import ListPokemon from './components/ListPokemon';
import Faq from './components/Faq';

const App = () => {

  const person = {
    name: 'Owen Iluobe',
    age: 20,
    job: 'Web Developer',
    };
  const handleButtonClick = () => {
    console.log('Button clicked!!!');
  };

  return (
    <>
      <Header />
      
      <main>
        <h1>Hello SDV!</h1>
      </main>

      <Faq />

      <Footer />
    </>
  );
};

export default App;
