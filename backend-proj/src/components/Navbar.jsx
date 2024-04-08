import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <Link to="/">All Pets</Link>
      <Link to="/owners">Owners</Link>
    </nav>
  )
}

export default Navbar
