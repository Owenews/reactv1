


import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import ShowPokemon from './components/ShowPokemon';
import ListPokemon from './components/ListPokemon';
import Faq from './components/Faq';
import Location from './components/Location';
import PokemonsTeam from './components/PokemonsTeam';
import PokemonsType from './components/PokemonsType';

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
      
      {/*
      <main>
        <h1>Hello SDV!</h1>
      </main>
      */}
    <PokemonsType />
    <Footer />
    </>
  );
};

export default App;
