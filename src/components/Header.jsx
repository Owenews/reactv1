const Header = () => {

  const isAuthenticated = true;

  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/proj">Proj</a></li>
        </ul>
      </nav>

      {isAuthenticated ? (
        <p>You are logged in</p>
      ) : (
        <p>Please login</p>
      )}
    </header>
  );
};

export default Header;