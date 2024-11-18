import styled from "styled-components";

export const StyledFooter = styled.footer`
	position: absolute;
	width: 100%;
	bottom: 0;
	z-index: 2;
`;
export const Layers = styled.div`
	position: relative;
	height: 90px;
	width: 100%;
	overflow: hidden;
`;

export const LayerBox = styled.div`
	position: absolute;
	height: 100%;
	width: 100%;
	filter: drop-shadow(1px -4px 4px rgba(0, 0, 0, 0.3));
`;

export const Layer = styled.div`
	position: absolute;
	height: 100%;
	width: 100%;
`;

export const Layer1 = styled(Layer)`
	background-color: #2e7084;
	clip-path: polygon(0 100%, 50% 25%, 100% 70%, 100% 100%);
`;

export const Layer2 = styled(Layer)`
	width: 101%;
	background-color: #2e7186;
	clip-path: polygon(0 10%, 90% 100%, 0 100%);
`;

export const Layer3 = styled(Layer)`
	background-color: #397c90bb;
	background: linear-gradient(
		165deg,
		rgba(57, 124, 144, 0.01) 54% rgba(57, 124, 144, 1) 100%
	);
	clip-path: polygon(12% 100%, 100% 100%, 100% 10%);
`;
