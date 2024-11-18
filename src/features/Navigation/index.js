import { Link } from "react-router-dom";
import { FirstPageButton, SecondPageButton } from "./styled";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { ArrowIcon } from "./styled";

export const Navigation = ({ isFirstPage }) => (
  <nav>
    {isFirstPage ? (
      <Link to="/page2">
        <FirstPageButton>
          <ArrowIcon icon={faArrowRight} />
        </FirstPageButton>
      </Link>
    ) : (
      <Link to="/">
        <SecondPageButton>
          <ArrowIcon icon={faArrowLeft} />
        </SecondPageButton>
      </Link>
    )}
  </nav>
);
