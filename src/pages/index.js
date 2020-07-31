import styled from 'styled-components'
import Layout from '../components/Layout'
import ContentMain from '../components/ContentMain'

const Title = styled.h1`
	font-size: 50px;
	color: ${(props) => props.theme.colorChoco};
`

export default function Home() {
	return (
		<Layout>
			<ContentMain />
		</Layout>
	)
}
