import styled from "styled-components";

export const StyledSection = styled.section`
	margin: 18px 0;
`;

export const SectionTitleShadow = styled.div`
	filter: drop-shadow(-5px 2px 8px rgba(0, 0, 0, 0.8));
`;

export const SectionTitle = styled.h2`
	padding: 3px 15px;
	font-size: 19px;
	font-weight: 400;
	text-transform: uppercase;
	letter-spacing: 0.5px;
	color: azure;
	text-shadow: 1px 1px 2px rgb(26, 26, 26);
	background: ${({ $isMain }) =>
		$isMain
			? `linear-gradient(
		10deg,
		rgba(128, 128, 128, 1) 0%,
		rgba(93, 93, 93, 1) 35%,
		rgba(74, 74, 74, 1) 100%
	);
	`
			: `linear-gradient(
		10deg,
		rgba(74, 146, 168, 1) 0%,
		rgba(43, 108, 128, 1) 35%,
		rgba(35, 94, 112, 1) 100%
	)`};
	clip-path: ${({ $isMain }) =>
		$isMain
			? `polygon(
		0 0,
		50% 0,
		53% 48%,
		100% 48%,
		100% 51%,
		53% 52%,
		50% 100%,
		0% 100%
	)`
			: `polygon(
		0 0,
		75% 0,
		80% 48%,
		100% 48%,
		100% 51%,
		80% 52%,
		75% 100%,
		0% 100%
	)`};`
