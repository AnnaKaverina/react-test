import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: 90%;
	height: 180px;
	background-color: #fff8eb;
	display: flex;
	justify-content: space-between;
	align-items: start;
	padding: 15px;
	margin: 0 0 20px 0;
	border-radius: 3px;
`;

const Title = styled.h2`
	color: #000000;
	font-size: 18px;
	font-weight: 700;
	margin: 10px 0;
`;

const Description = styled.p`
	color: #000000;
	font-size: 16px;
	font-weight: 400;
`;

const TextWrapper = styled.div`
	width: 70%;
`;

const Image = styled.img`
	height: 150px;
	width: 150px;
`;

export default class NewsItem extends React.Component {

	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<Wrapper>
				<TextWrapper>
					<Title>{this.props.title}</Title>
					<Description>{this.props.descr}</Description>
				</TextWrapper>
				<Image src={this.props.img}/>
			</Wrapper>
		)
	}
}