import Nav from './Nav';

const Header = () => (
    <div>
      <div className="bar">
        <a href="">SickFits</a>
      </div>
      <div className="sub-bar">
        <Nav />
        <p>Search</p>
      </div>
      <div>
        Cart
      </div>
    </div>
)

export default Header;