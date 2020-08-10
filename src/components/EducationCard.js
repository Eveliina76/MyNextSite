import { myTheme } from '../styles/GlobalStyle'
import styled, { ThemeProvider } from 'styled-components'
import { breakpoint } from 'styled-components-breakpoint'

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
		color: ${(props) => props.theme.colorVermilion};
		margin: 10px 0;
	}
	h4 {
		align-self: center;
		font-family: ${(props) => props.theme.fontSemiBold};
		font-size: ${(props) => props.theme.h4FontSize};
		color: ${(props) => props.theme.colorBlack};
		margin: 15px 0;
	}
	h5 {
		align-self: center;
		font-family: ${(props) => props.theme.font};
		font-size: ${(props) => props.theme.h5FontSize};
		color: ${(props) => props.theme.colorBlack};
		margin: 10px 0;
	}
	p {
		align-self: start;
		font-family: ${(props) => props.theme.font};
		font-size: ${(props) => props.theme.textFontSize};
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
					<h3>2017-2018</h3>
					<h4>Datanomi</h4>
					<h5>Business College Helsinki</h5>
					<p>
						Vocational upper secondary qualification in Information and
						Communications Technology, competence area in Software development
					</p>
				</StyledEducationCard>
			</EducationCardWrapper>
			<EducationCardWrapper>
				<StyledEducationCard>
					<h3>2006-2009</h3>
					<h4>Tradenomi</h4>
					<h5>Haaga-Helia University of Applied Sciences</h5>
					<p>
						Bachelor of Business Administration, Degree Programme in Business
						Management
					</p>
				</StyledEducationCard>
			</EducationCardWrapper>
			<EducationCardWrapper>
				<StyledEducationCard>
					<h3>1996-1998</h3>
					<h4>Tietokoneasentaja</h4>
					<h5>Nurmijärven ammattikoulu</h5>
					<p>
						Vocational Qualification in Information and Telecommunications
						Technology, ICT Technician
					</p>
				</StyledEducationCard>
			</EducationCardWrapper>
			<EducationCardWrapper>
				<StyledEducationCard>
					<h3>1995-1996</h3>
					<h4>Deutsche Sprachprüfung I</h4>
					<h5>
						Sprachen- und Dolmetscher-Institut <br />
						München
					</h5>
					<p>Deutsch als Fremdsprache</p>
				</StyledEducationCard>
			</EducationCardWrapper>
		</ThemeProvider>
	)
}

export default EducationCard
