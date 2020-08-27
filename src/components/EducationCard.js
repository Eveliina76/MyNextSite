import { myTheme } from '../styles/GlobalStyle'
import styled, { ThemeProvider } from 'styled-components'
import { breakpoint } from 'styled-components-breakpoint'
import { Heading } from '@tenon-io/tenon-ui'

const EducationCardWrapper = styled.div`
	margin-bottom: 15px;
`

const StyledEducationCard = styled.div`
	display: grid;
	height: auto;
	width: auto;
	background-color: ${(props) => props.theme.colorWhite};
	border-radius: 0;
	margin: 0 auto;
	padding: 10px 15px 15px 15px;
	box-shadow: -11.31px 11.31px 25px 0px rgba(138, 131, 124, 0.23);
	h3 {
		align-self: center;
		font-family: ${(props) => props.theme.font};
		font-size: ${(props) => props.theme.h3FontSize};
		font-weight: bold;
		color: ${(props) => props.theme.colorCerise};
		margin: 10px 0;
	}
	h4 {
		align-self: center;
		font-family: ${(props) => props.theme.fontSemiBold};
		font-size: ${(props) => props.theme.h4FontSize};
		color: ${(props) => props.theme.colorSpaceCadet};
		margin: 15px 0;
	}
	h5 {
		align-self: center;
		font-family: ${(props) => props.theme.font};
		font-size: ${(props) => props.theme.h5FontSize};
		color: ${(props) => props.theme.colorSpaceCadet};
		margin: 10px 0;
	}
	p {
		align-self: start;
		font-family: ${(props) => props.theme.font};
		font-size: ${(props) => props.theme.textFontSize};
		color: ${(props) => props.theme.colorSpaceCadet};
		margin: 0;
	}
	${breakpoint('md')`
  grid-template-columns: 100%;
  grid-template-rows: 15% 20% 15% 50%;
  width: 650px;
  border-radius: 10px 10px;
  padding: 40px;
  h3 {
    grid-row-start: 1;
	}
  h4 {
    grid-row-start: 2;
    margin: 10px 0;
	}
  h5 {
    grid-row-start: 3;
    margin: 10px 0;
  }
  p {
    grid-row-start: 4;
    grid-column-start: 1;
    margin: 10px 0;
	}
  `}
	${breakpoint('lg')`
  grid-template-columns: 40% 60%;
  grid-template-rows: 15% 20% 25% 40%;
  width: 800px;
  h3 {
    grid-column-start: 1;
    grid-row-start: 1;
    margin: 0;
  }
  h4 {
    grid-column-start: 1;
    grid-row-start: 2;
  }
  h5 {
    grid-column-start: 1;
    grid-row-start: 3;
    margin: 5px 0;
  }
  p {
    grid-column-start: 2;
    grid-row-start: 1;
  }
  `}
  ${breakpoint('xl')`
  h3 {
    grid-column-start: 1;
    grid-row-start: 1;
    margin: 10px 0;
  }
  h4 {
    grid-column-start: 1;
    grid-row-start: 2;
    margin: 10px 0;
  }
  h5 {
    grid-column-start: 1;
    grid-row-start: 3;
    margin: 10px 0;
  }
  p {
    grid-column-start: 2;
    grid-row-start: 2;
    margin: 0;
  }
  `}
`

const EducationCard = () => {
	return (
		<ThemeProvider theme={myTheme}>
			<EducationCardWrapper>
				<StyledEducationCard>
					<Heading.LevelBoundary levelOverride={3}>
						<Heading.H>2017-2018</Heading.H>
						<Heading.LevelBoundary>
							<Heading.H>Datanomi</Heading.H>
							<Heading.LevelBoundary>
								<Heading.H>Business College Helsinki</Heading.H>
								<p>
									Vocational upper secondary qualification in Information and
									Communications Technology, competence area in Software
									development
								</p>
							</Heading.LevelBoundary>
						</Heading.LevelBoundary>
					</Heading.LevelBoundary>
				</StyledEducationCard>
			</EducationCardWrapper>
			<EducationCardWrapper>
				<StyledEducationCard>
					<Heading.LevelBoundary levelOverride={3}>
						<Heading.H>2006-2009</Heading.H>
						<Heading.LevelBoundary>
							<Heading.H>Tradenomi</Heading.H>
							<Heading.LevelBoundary>
								<Heading.H>
									Haaga-Helia University of Applied Sciences
								</Heading.H>
								<p>
									Bachelor of Business Administration, Degree Programme in
									Business Management
								</p>
							</Heading.LevelBoundary>
						</Heading.LevelBoundary>
					</Heading.LevelBoundary>
				</StyledEducationCard>
			</EducationCardWrapper>
			<EducationCardWrapper>
				<StyledEducationCard>
					<Heading.LevelBoundary levelOverride={3}>
						<Heading.H>1996-1998</Heading.H>
						<Heading.LevelBoundary>
							<Heading.H>Tietokoneasentaja</Heading.H>
							<Heading.LevelBoundary>
								<Heading.H>Nurmijärven ammattikoulu</Heading.H>
								<p>
									Vocational Qualification in Information and Telecommunications
									Technology, ICT Technician
								</p>
							</Heading.LevelBoundary>
						</Heading.LevelBoundary>
					</Heading.LevelBoundary>
				</StyledEducationCard>
			</EducationCardWrapper>
			<EducationCardWrapper>
				<StyledEducationCard>
					<Heading.LevelBoundary levelOverride={3}>
						<Heading.H>1995-1996</Heading.H>
						<Heading.LevelBoundary>
							<Heading.H>Deutsche Sprachprüfung I</Heading.H>
							<Heading.LevelBoundary>
								<Heading.H>
									Sprachen- und Dolmetscher-Institut <br />
									München
								</Heading.H>
								<p>Deutsch als Fremdsprache</p>
							</Heading.LevelBoundary>
						</Heading.LevelBoundary>
					</Heading.LevelBoundary>
				</StyledEducationCard>
			</EducationCardWrapper>
		</ThemeProvider>
	)
}

export default EducationCard
