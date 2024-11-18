import {
	Layers,
	LayerBox,
	Layer1,
	Layer2,
	Layer3,
	StyledFooter,
} from "./styled";
import { Navigation } from "../Navigation";

export const Footer = ({ isFirstPage }) => (
	<StyledFooter>
		<Layers>
			<LayerBox>
				<Layer1 />
			</LayerBox>
			<LayerBox>
				<Layer2 />
			</LayerBox>
			<LayerBox>
				<Layer3 />
			</LayerBox>
		</Layers>
		<Navigation isFirstPage={isFirstPage} />
	</StyledFooter>
);
