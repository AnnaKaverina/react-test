import React from 'react';
import styled from 'styled-components';
import {Title} from './Home';

const Form = styled.form`
	height: 150px;
	width: 400px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	margin: 0 auto;
	padding: 10px 0;
	background-color: #fff8eb;
	border-radius: 3px;
`;

const Input = styled.input`
	width: 70%;
	height: 20px;
	text-align: center;
`;

const Button = styled.button`
	height: 30px;
	width: 100px;
	background-color: #8ac8ff;
	border-radius: 3px;
	border: none;
	&:active
		transform: scale(1.2);
`;



export default class Login extends React.Component {

	constructor(props) {
		super(props);

		this.submit = this.submit.bind(this);
	}

	submit(event) {
		event.preventDefault();
		let logged;
		if(event.target[0].value === 'Admin' && event.target[1].value === '12345') {
			logged = true;
		} else {
			logged = false;
		}
		this.props.logged(logged);
	}

	render() {
		return (
			<div>
				<Title>Вход</Title>
				<Form onSubmit={this.submit}>
					<Input type="text" name="username" placeholder="Введите ваш логин"/>
					<Input type="text" name="password" placeholder="Введите ваш пароль"/>
					<Button type="submit">Войти</Button>
				</Form>
			</div>
		)
	}
}