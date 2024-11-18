import { Section } from "../../common/Section";
import { StyledAside, Info } from "./styled";
import {
	AddressLink,
	EmailLink,
	PhoneNumberLink,
	LinkedInLink,
} from "../../common/Links";

export const Aside = ({ isFirstPage }) => (
	<StyledAside>
		{isFirstPage ? (
			<>
				<Section
					name="Contact"
					content={[
						<EmailLink />,
						<PhoneNumberLink />,
						<AddressLink />,
						<LinkedInLink />,
					]}
					showIcons={false}
					showTitle={false}
				/>
				<Section
					name=" Technical skills"
					content={[
						"knowledge of Responsive Web Design (RWD) and UI design principles",
						"HTML, CSS (Flexbox, Grid)",
						"JavaScript",
						"React, Redux",
						"Bootstrap",
						"Git, GitHub",
						"Figma",
						"Trello",
					]}
				/>
				<Section
					name="Soft skills"
					content={[
						"effective time management skills",
						"seamless teamwork",
						"creativity",
						"attention to detail and precision",
						"communication skills",
						"analytical thinking skills",
						"self-discipline",
						"ability to learn quickly",
					]}
				/>
				<Section name="Languages" content={["english - B2"]} />
			</>
		) : (
			<>
				<Section
					name="How I work"
					content={["energetically", "task-oriented", "effectively", "efficiently"]}
				/>
				<Section
					name="Interests"
					content={[
						"In my free time, I enjoy watching crime, detective, and legal movies and series that engage me in solving cases and analyzing complex situations. Additionally, I find relaxation in solving puzzles, which also helps to improve memory and develop logical thinking skills.",
					]}
					showIcons={false}
				/>
				<Section name="Licenses" content={["driver's license (category B)"]} />
				<Section
					name="References"
					content={[
						"I kindly invite you to review the recommendations and testimonials on my LinkedIn profile.",
					]}
					showIcons={false}
				/>
				<Info>
				I consent to the processing of my personal data included in this CV for recruitment purposes, in accordance with Regulation (EU) 2016/679 (GDPR).
				</Info>
			</>
		)}
	</StyledAside>
);
