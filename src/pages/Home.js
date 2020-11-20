import React from 'react';
import styled from 'styled-components';
import img from './fireplace.jpg';

const Wrapper = styled.div`

`;

export const Title = styled.h1`
	text-align: center;
	margin: 45px 0;
	font-weight: 900;
	font-size: 24px;
`;

const Image = styled.img`
	display: block;
	height: 450px;
	width: auto;
	margin: 0 auto;
	border-radius: 3px;
`;

export default class Home extends React.Component {
	render() {
		return (
			<Wrapper>
				<Title>Главная страница</Title>
				<Image src={img}></Image>
			</Wrapper>
		)
	}
}
