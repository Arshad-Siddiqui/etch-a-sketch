import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";

export default function NavBar() {
  return (
    <nav>
      <div className="nav-left">
      </div>
      <div className="logo-container">
        <h1>Etch A Sketch</h1>
      </div>
      <div className='nav-icons-wrapper'>
        <a href="https://github.com/Arshad-Siddiqui/etch-a-sketch">
          <FontAwesomeIcon icon={faSquareGithub} />
        </a>
      </div>
    </nav>
  );
}
