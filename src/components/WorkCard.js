import { myTheme } from '../styles/GlobalStyle'
import styled, { ThemeProvider } from 'styled-components'
import { breakpoint } from 'styled-components-breakpoint'

const WorkCardWrapper = styled.div`
	margin-bottom: 0.9375rem;
`

const StyledWorkCard = styled.div`
	display: grid;
	height: auto;
  width: auto;
  padding: 0.625rem 0.9375rem;
	background-color: ${(props) => props.theme.colorWhite};
  border-radius: 0;
	margin: 0 auto;
	
	box-shadow: -11.31px 11.31px 25px 0px rgba(138, 131, 124, 0.23);
	h3 {
		align-self: center;
		font-family: ${(props) => props.theme.font};
		font-size: ${(props) => props.theme.h3FontSize};
		font-weight: bold;
		color: ${(props) => props.theme.colorCerise};
		margin: 0.625rem 0;
	}
	h4 {
		align-self: center;
		font-family: ${(props) => props.theme.fontSemiBold};
		font-size: ${(props) => props.theme.h4FontSize};
		color: ${(props) => props.theme.colorSpaceCadet};
		margin: 0 0 0.625rem 0;
	}
	h5 {
		align-self: center;
		font-family: ${(props) => props.theme.font};
		font-size: ${(props) => props.theme.h5FontSize};
		color: ${(props) => props.theme.colorSpaceCadet};
		margin: 0;
	}
	p {
		align-self: start;
		font-family: ${(props) => props.theme.font};
		font-size: ${(props) => props.theme.textFontSize};
		color: ${(props) => props.theme.colorSpaceCadet};
		margin: 0.625rem 0;
	}
	${breakpoint('md')`
  grid-template-columns: 100%;
  grid-template-rows: 15% 10% 10% 65%;
  width: 40.625rem;
  border-radius: 0.625rem 0.625rem;
  padding: 2.5rem;
  h3 {
    grid-row-start: 1;
    
	}
  h4 {
    grid-row-start: 2;
    margin: 1.25rem 0;
	}
  h5 {
    grid-row-start: 3;
    margin: 0.625rem 0;
  }
  p {
    grid-row-start: 4;
    grid-column-start: 1;
    margin: 1.25rem 0;
	}
  `}
	${breakpoint('lg')`
  grid-template-columns: 40% 60%;
  grid-template-rows: 20% 15% 15% 40%;
  width: 50rem;
  h3 {
    grid-column-start: 1;
    grid-row-start: 1;
    margin: 0;
  }
  h4 {
    grid-column-start: 1;
    grid-row-start: 2;
    margin: 0;
  }
  h5 {
    grid-column-start: 1;
    grid-row-start: 3;
    margin: 0;
  }
  p {
    grid-column-start: 2;
    grid-row-start: 2;
    margin: 0;
  }
  `}
  ${breakpoint('xl')`
  grid-template-columns: 40% 60%;
  grid-template-rows: 20% 15% 15% 40%;
  h3 {
    grid-column-start: 1;
    grid-row-start: 1;
    margin: 0;
  }
  h4 {
    grid-column-start: 1;
    grid-row-start: 2;
    margin: 0;
  }
  h5 {
    grid-column-start: 1;
    grid-row-start: 3;
    margin: 0;
  }
  p {
    grid-column-start: 2;
    grid-row-start: 2;
    margin: 0;
  }
  `}
`

const WorkCard = () => {
	return (
		<ThemeProvider theme={myTheme}>
			<WorkCardWrapper>
				<StyledWorkCard>
					<h3>2018-Present</h3>
					<h4>Web Developer</h4>
					<h5>Wunder Finland</h5>
					<p>
						In my current job I am working as Front End Developer. I'm making
						sure the designs get implemented as precisely for the web as
						possible. I enjoy using React and of course CSS. I have also some
						experience with Drupal and I'm familiar with Gatsby as well. In the
						latest project that I worked with, I was responsible for
						implementing the design for a complex e-commerce site.
					</p>
				</StyledWorkCard>
			</WorkCardWrapper>
			<WorkCardWrapper>
				<StyledWorkCard>
					<h3>2015-2018</h3>
					<h4>Sustainability Lead</h4>
					<h5>Fujitsu Finland</h5>
					<p>
						I worked on enhanching environmental responsibility in Fujitsu
						Finland and taking part of the Europe wide internal sustainability
						program. Fujitsu was applying for ISO 14001 certification to cover
						all the European businesses and I was involved in that work. As I
						had suggested for the management, Fujitsu Finland started using
						renevable energy in all it's facilities including data centers as
						well as offices and compensating part of flights emissions.
					</p>
				</StyledWorkCard>
			</WorkCardWrapper>
			<WorkCardWrapper>
				<StyledWorkCard>
					<h3>2013-2015</h3>
					<h4>CSR Manager</h4>
					<h5>Fujitsu Finland</h5>
					<p>
						In addition to my responsibilities in my previous role as
						Environmental Specialist, I was also responsible for collecting and
						reporting data for all the Nordic companies. I worked on getting
						Fujitsu Finland to join global internal Sustainability program and
						arranged workshop on corporate social responsibility covering all
						the aspects of CSR, not only environment. I was implementing a tool
						gather the data on sustainability. I also attended a global internal
						sustainability meeting in Japan representing the Fujitsu Nordic.
					</p>
				</StyledWorkCard>
			</WorkCardWrapper>
			<WorkCardWrapper>
				<StyledWorkCard>
					<h3>2010-2013</h3>
					<h4>Environmental Specialist</h4>
					<h5>Fujitsu Finland</h5>
					<p>
						I was responsible for implementing company wide ISO 14001 standard
						certification as well as getting Fujitsu Finland head office the WWF
						Green Office label. I created environmental measurements in various
						areas of our facilities and business, and collected data
						accordingly. I also created and maintained intra sites that included
						information about recycling waste, energy use, water consumption
						etc. I wrote a blog and held presentations as well as arranged
						events around environmental responsibility. I also kept management
						updated and presented them various ways how to make company more
						sustainable.
					</p>
				</StyledWorkCard>
			</WorkCardWrapper>
			<WorkCardWrapper>
				<StyledWorkCard>
					<h3>2009 May to September</h3>
					<h4>CSR Trainee</h4>
					<h5>Iittala Group</h5>
					<p>
						I did five months training programm related to my studies in
						Haaga-Helia for Ittala Group. I collected data and wrote texts for
						their future Corporate Social Responsibility report. I also created
						waste recycling instructions for their head office.
					</p>
				</StyledWorkCard>
			</WorkCardWrapper>
			<WorkCardWrapper>
				<StyledWorkCard>
					<h3>1997-2010</h3>
					<h4>Quality coordinator and other roles</h4>
					<h5>ICL, later Fujitsu Finland</h5>
					<p>
						I started my career in IT industry by installing software and
						hardware to computers. Later I worked with the customer orders
						making sure the information on them was correct and they could be
						processed and equipment installed correctly. I also worked with
						customer reclamations and placing new orders through our SAP system.
					</p>
				</StyledWorkCard>
			</WorkCardWrapper>
		</ThemeProvider>
	)
}

export default WorkCard
