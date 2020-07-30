import styled from 'styled-components'

const Title = styled.h1`
	font-size: 50px;
	color: ${(props) => props.theme.colorChoco};
`

export default function Home() {
	return <Title>My page</Title>
}
