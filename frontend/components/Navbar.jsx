import { FaShoppingCart } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav>
      <div className="nav-bar">
        <h2>Green Thumb Club</h2>
        <>
          <ul className="links">
            <li>Home</li>
            <li>About</li>
            <FaShoppingCart size={20} />
          </ul>
        </>
      </div>
    </nav>
  );
}
