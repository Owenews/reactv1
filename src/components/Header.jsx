const Header = () => {
  
  const isAuthenticated = true;
  
  const handleButtonClick = () => {
    console.log('Hey !');
  };

  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/poke">Pokemon</a></li>
        </ul>
      </nav>

      {/*}
      {isAuthenticated ? (
        <p>You are logged in</p>
      ) : (
        <p>Please login</p>
      )}

      <button onClick={handleButtonClick}>Click me</button>
      */}
    </header>
  );
};

export default Header;