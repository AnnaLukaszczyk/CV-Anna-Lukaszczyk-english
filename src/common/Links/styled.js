import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ContactLink = styled.a`
	display: flex;
	align-items: center;
	text-decoration: none;
	font-weight: bold;
	line-height: 1;
	color: rgba(64, 64, 64, 1);
`;

export const IconContainer = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 12px;
	height: 30px;
	width: 30px;
	border-radius: 50%;
	background-color: #3b8097;
`;

export const Icon = styled(FontAwesomeIcon)`
	font-size: 16px;
	color: azure;
	filter: drop-shadow(1px 1px 2px rgb(26, 26, 26));
`;

export const LinkToLinkedIn = styled(ContactLink)`
	margin-bottom: 10px;
`;

export const Link = styled.a`
	color: black;
	text-decoration: none;
	font-weight: normal;
`;
