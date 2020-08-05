import React, { useState } from 'react'
import { myTheme } from '../styles/GlobalStyle'
import styled, { css, ThemeProvider } from 'styled-components'
import RightNav from '../components/RightNav'
import { breakpoint } from 'styled-components-breakpoint'

const StyledBurger = styled.div`
	display: flex;
	justify-content: space-around;
	flex-flow: column nowrap;
	width: 2rem;
	height: 2rem;
	position: fixed;
	top: 12px;
	right: 18px;
	z-index: 20;

	${breakpoint('sm')`
    display: none;
  `}

	div {
		width: 2rem;
		height: 0.25rem;
		background-color: ${({ open }) => (open ? '#000' : '#BF4E30')};
		border-radius: 10px;
		transform-origin: 1px;
		transition: all 0.3s linear;
		&:nth-child(1) {
			transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
		}
		&:nth-child(2) {
			transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
			opacity: ${({ open }) => (open ? 0 : 1)};
		}
		&:nth-child(3) {
			transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
		}
	}
`

const Burger = () => {
	const [open, setOpen] = useState(false)
	return (
		<ThemeProvider theme={myTheme}>
			<StyledBurger open={open} onClick={() => setOpen(!open)}>
				<div />
				<div />
				<div />
			</StyledBurger>
			<RightNav open={open} />
		</ThemeProvider>
	)
}

export default Burger
