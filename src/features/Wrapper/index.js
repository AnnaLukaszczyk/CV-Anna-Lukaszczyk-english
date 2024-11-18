import { StyledWrapper } from "./styled";
import { Header } from "../Header";
import { Main } from "../Main";
import { Aside } from "../Aside";
import { Footer } from "../Footer";

export const Wrapper = ({ isFirstPage }) => (
	<StyledWrapper>
		<Header />
		<Main isFirstPage={isFirstPage} />
		<Aside isFirstPage={isFirstPage} />
		<Footer isFirstPage={isFirstPage} />
	</StyledWrapper>
);
