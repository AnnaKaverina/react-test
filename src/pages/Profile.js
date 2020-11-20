import React from 'react';
import image from './man.jpg';
import {Title} from './Home';
import styled from 'styled-components';

const ImageProfile = styled.img`
	height: 100px;
	width: 100px;
	display: block;
	border: 1px solid #000000;
`;

const TextWrapper = styled.div`
	width: 600px;
`;

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

const Name = styled.h2`
	margin: 0;
	font-size: 18px;
`;

const Region = styled.p`
	font-size: 12px;
`;

const Text = styled.p`
font-size: 16px;
margin: 40px 0 0 0;
`;

export default class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			profile: {
				name: 'Анна',
				surname: 'Каверина',
				region: 'Московская область',
				text: 'Здесь могла бы быть ваша реклама.',
				image
			}
		};
	}
	render() {
		return (
			<div>
				<Title>Ваш личный профиль</Title>
				<Wrapper>
					<ImageProfile src={this.state.profile.image}/>
					<TextWrapper>
						<Name>{`${this.state.profile.surname} ${this.state.profile.name}`}</Name>
						<Region>{this.state.profile.region}</Region>
						<Text>{this.state.profile.text}</Text>
					</TextWrapper>
				</Wrapper>
			</div>
		)
	}
}