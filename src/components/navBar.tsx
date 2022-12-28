import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";

export default function NavBar() {
  return (
    <nav>
      <h1>Etch A Sketch</h1>
      <div className='nav-icons-wrapper'>
        <FontAwesomeIcon icon={faSquareGithub} />
      </div>
    </nav>
  );
}
