import { List } from "../List";
import { SectionTitle, SectionTitleShadow, StyledSection } from "./styled";

export const Section = ({
	name,
	isMain,
	content,
	showIcons = true,
	showTitle = true,
}) => (
	<StyledSection>
		<SectionTitleShadow>
			{showTitle && <SectionTitle $isMain={isMain}>{name}</SectionTitle>}
		</SectionTitleShadow>
		<List items={content} isMain={isMain} showIcons={showIcons} />
	</StyledSection>
);
