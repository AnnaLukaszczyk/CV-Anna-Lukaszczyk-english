import {
	Link,
	ContactLink,
	IconContainer,
	Icon,
	LinkToLinkedIn,
} from "./styled";
import {
	faEnvelope,
	faPhone,
	faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const EmailLink = () => (
	<ContactLink
		href="mailto:anna.lukaszczyk222@gmail.com"
		title="Kliknij, aby wysłać email">
		<IconContainer>
			<Icon icon={faEnvelope} />
		</IconContainer>
		anna.lukaszczyk222@gmail.com
	</ContactLink>
);

export const PhoneNumberLink = () => (
	<ContactLink href="tel:+48607174433" title="Kliknij, aby zadzwonić">
		<IconContainer>
			<Icon icon={faPhone} />
		</IconContainer>
		+48 607 17 44 33
	</ContactLink>
);

export const AddressLink = () => (
	<ContactLink
		href="https://www.google.com/maps/place/S%C5%82oneczna+14,+22-530+Mircze/@50.6443703,23.8768533,14.67z/data=!4m15!1m8!3m7!1s0x47249375915d99e7:0x5e227b1e4816b28a!2s22-530+Mircze!3b1!8m2!3d50.6507001!4d23.8954385!16s%2Fm%2F04d_tgd!3m5!1s0x4724938491d68de3:0x5db32d695f3cb7f7!8m2!3d50.6486096!4d23.8942919!16s%2Fg%2F11pzt0zj0g?entry=ttu&g_ep=EgoyMDI0MTAyMC4xIKXMDSoASAFQAw%3D%3D"
		target="_blank"
		rel="noopener noreferrer"
		title="Kliknij, aby zobaczyć na mapie">
		<IconContainer>
			<Icon icon={faLocationDot} />
		</IconContainer>
		ul. Słoneczna 14, 22-530 Mircze
	</ContactLink>
);

export const LinkedInLink = () => (
	<LinkToLinkedIn
		href="https://www.linkedin.com/in/anna-%C5%82ukaszczyk2/"
		target="_blank"
		rel="noopener noreferrer"
		title="Kliknij, aby zobaczyć mój profil na LinkedIn">
		<IconContainer>
			<Icon icon={faLinkedin} />
		</IconContainer>
		www.linkedin.com/in/
		<br />
		anna-łukaszczyk2
	</LinkToLinkedIn>
);

export const ProjectLink = ({ projectLink }) => (
	<Link
		href={projectLink}
		target="_blank"
		rel="noopener noreferrer"
		title="Kliknij, aby przejść do projektu">
		{projectLink}
	</Link>
);

export const CertificateLink = ({ certificateLink }) => (
	<Link
		href={certificateLink}
		target="_blank"
		rel="noopener noreferrer"
		title="Kliknij, aby zobaczyć certyfikat">
		{certificateLink}
	</Link>
);

export const PersonalHomepage = () => (
	<Link
		href="https://annalukaszczyk.github.io/Personal-homepage/"
		target="_blank"
		rel="noopener noreferrer"
		title="Kliknij, aby przejść do strony o mnie, gdzie znajdziesz moje portfolio">
		moim portfolio
	</Link>
);
