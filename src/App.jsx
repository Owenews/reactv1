import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import ShowPokemon from './components/ShowPokemon';
import ListPokemon from './components/ListPokemon';

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

      <ListPokemon />


      <button onClick={handleButtonClick}>Click me</button>

      <Footer />
    </>
  );
};

export default App;
