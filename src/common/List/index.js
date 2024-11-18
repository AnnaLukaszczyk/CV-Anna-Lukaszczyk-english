import { ListItem, StyledList, Icon } from "./styled";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export const List = ({ items = [], isMain, showIcons = true, customIcon }) => (
	<StyledList>
		{items.map((item, index) => (
			<ListItem key={index} $isMain={isMain}>
				{showIcons && <Icon icon={customIcon || faCircle} $isMain={isMain} />}
				{item}
			</ListItem>
		))}
	</StyledList>
);
