import { CertificateLink, ProjectLink } from "../../common/Links";
import { List } from "../../common/List";
import { Section } from "../../common/Section";
import { StyledMain, Project, Course, Description } from "./styled";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export const Main = ({ isFirstPage }) => (
	<StyledMain>
		{isFirstPage ? (
			<>
				<Section
					isMain
					name="Projects"
					content={[
						<Project>
							about me - HTML, CSS, JavaScript, Grid, Flexbox, React, API
							<br />
							<ProjectLink projectLink="https://annalukaszczyk.github.io/Personal-homepage/" />
						</Project>,
						<Project>
							movies browser - HTML, CSS, JavaScript, Flexbox, React,
							Axios, Saga, API (teamwork)
							<br />
							<ProjectLink projectLink="https://annalukaszczyk.github.io/movies-browser/#/movies?page=1" />
						</Project>,
						<Project>
						my CV - HTML, CSS, JavaScript, Flexbox, React
						<br />
						<ProjectLink projectLink="https://annalukaszczyk.github.io/CV-Anna-Lukaszczyk/" />
					</Project>,
						<Project>
							bill calculator - HTML, CSS, JavaScript, Flexbox, media
							queries
							<br />
							<ProjectLink projectLink="https://annalukaszczyk.github.io/kalkulator-rachunkow/" />
						</Project>,
						<Project>
							to-do list - HTML, CSS, JavaScript, Grid, React, Redux
							<br />
							<ProjectLink projectLink="https://annalukaszczyk.github.io/todoList--React/#/zadania" />
						</Project>,
						<Project>
							example website - HTML, CSS, Sass (SCSS),
							Bootstrap, JavaScript
							<br />
							<ProjectLink projectLink="https://annalukaszczyk.github.io/webside-on-bootstrap/" />
						</Project>,
						<Project>
							currency converter - HTML, CSS, JavaScript, Grid, React, API
							<br />
							<ProjectLink projectLink="https://annalukaszczyk.github.io/kalkulator-walut-react/" />
						</Project>,
					]}
				/>
				<Section
					isMain
					name="Courses"
					content={[
						<Course>
							07.11.2024 r. - JavaScript Course at MMC School <br />
							<CertificateLink certificateLink="https://github.com/AnnaLukaszczyk/CV-Anna-Lukaszczyk/blob/main/public/certificateJS.png?raw=true" />
						</Course>,
						<Course>
							01.10.2024 r. - Frontend Developer Course from Scratch at YouCode{" "}
							<br />
							<CertificateLink certificateLink="https://github.com/AnnaLukaszczyk/CV-Anna-Lukaszczyk/blob/main/public/certificateYouCode.png?raw=true" />
						</Course>,
						<Course>
							02.03.2023 r. - Web Development Course Part 3 at MMC School <br />
							<CertificateLink certificateLink="https://github.com/AnnaLukaszczyk/CV-Anna-Lukaszczyk/blob/main/public/certificateWWW3.png?raw=true" />
						</Course>,
						<Course>
							09.02.2023 r. - Web Development Course Part 2 - SASS, JS,
							Bootstrap on&nbsp;Udemy, taught by an instructor from MMC School{" "}
							<br />
							<CertificateLink certificateLink="https://github.com/AnnaLukaszczyk/CV-Anna-Lukaszczyk/blob/main/public/certificateWWW2.png?raw=true" />
						</Course>,
						<Course>
							17.01.2023 r. - Web Development Course Part 1 - HTML, CSS, RWD
							on&nbsp;Udemy, taught by an instructor from MMC School <br />
							<CertificateLink certificateLink="https://github.com/AnnaLukaszczyk/CV-Anna-Lukaszczyk/blob/main/public/certificateWWW1.png?raw=true" />
						</Course>,
					]}
				/>
			</>
		) : (
			<>
				<Section
					isMain
					name="About me"
					content={[
						<Description>
							For the past 1.5 years, I have been passionate about programming and&nbsp;<strong>frontend</strong> development offers me the greatest opportunities to bring my ideas to life and harness my creativity. During the career transition process, I&nbsp;discovered that working with <strong>JavaScript</strong> and <strong>React</strong> brings me great satisfaction. The lack of growth opportunities in my previous job motivated me to change industries: I don’t like staying in one place and I see every challenge as an opportunity for growth. Each new project is a chance for me to learn and improve my skills. I believe there is no problem that cannot be&nbsp;solved – this mindset is what I want to apply while designing <strong>responsive websites</strong> and <strong>modern web applications</strong>. My goal is to gain experience as&nbsp;a&nbsp;<strong>React Frontend Developer</strong> in a dynamic team where I can combine my&nbsp;<strong>analytical skills</strong> with <strong>creativity</strong>, creating solutions that are both functional and aesthetic. I prefer <strong>remote work</strong>, which provides me with&nbsp;flexibility and allows for effective time management, contributing to my professional growth and the achievement of ambitious career goals.
						</Description>,
					]}
					showIcons={false}
				/>
				<Section
					isMain
					name="Experience"
					content={[
						<div>
							<Description>
								28.05.2007 r. - 09.06.2023 r. - Border Guard Officer, most recent position: Specialist in the Border Traffic Control Team of the Border Group at&nbsp;the&nbsp;Border Guard Post in Dołhobyczów:
							</Description>
							<List
								items={[
									"management and analysis of documentation and reports, identifying errors during the inspection of individuals and vehicles, which required high accuracy and attention to detail",
									"problem-solving in a fast-paced environment, requiring logical thinking and effective decision-making",
									"team collaboration, task organization and time and priority management to achieve set goals",
									"collaboration with other services and institutions",
								]}
								isMain
								customIcon={faPlay}
							/>
						</div>,
					]}
				/>
				<Section
					isMain
					name="Education"
					content={[
						"06.11.2010 r. - Higher School of Economics and Innovation in Lublin - Faculty of Administration - Master's degree",
					]}
				/>
			</>
		)}
	</StyledMain>
);
