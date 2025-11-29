import headerImg from "../assets/img/Header.jpg";

function Header() {
  return (
    <header className="banner-container">
      <img src={headerImg} alt="Banner" className="banner-image" />
      <div className="banner-text">
        <h1>Pizzería Mamma Mia!</h1>
        <p>Las mejores pizzas para ti</p>
      </div>
    </header>
  );
}

export default Header;
