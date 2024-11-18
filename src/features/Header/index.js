import {
	StyledHeader,
	Layers,
	LayerBox,
	Layer1,
	Layer2,
	Layer3,
	Data,
	PhotoBackground,
	Photo,
	HeaderInfo,
	Name,
	JobTitle,
} from "./styled";
import CVPhoto from "./CV-photo.jpg";

export const Header = () => (
	<StyledHeader>
		<div>
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
		</div>
		<Data>
			<PhotoBackground>
				<Photo src={CVPhoto} alt="Zdjęcie Anny Łukaszczyk" />
			</PhotoBackground>
			<HeaderInfo>
				<Name>Anna Łukaszczyk</Name>
				<JobTitle>React Frontend Developer</JobTitle>
			</HeaderInfo>
		</Data>
	</StyledHeader>
);
