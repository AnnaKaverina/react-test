import React from 'react';
import styled from 'styled-components';
import {Title} from './Home';
import {useHistory} from 'react-router-dom';

const Form = styled.form`
	height: 200px;
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

function checkLogin(logged) {
  return {type: 'INCORRECT_LOGIN', logged};
}

class Message extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		if(this.props.incorrectLogin) {
			return (<p>Имя пользователя или пароль введены неверно.</p>)
		} else {
			return null
		}
	}
}

export default function Login(props) {
	
	const history = useHistory();

	function redirect() {
		history.push('/profile');
	}

	function submit(e) {
		e.preventDefault();
		let logged;
		if(e.target[0].value === 'Admin' && e.target[1].value === '12345') {
			logged = true;
			localStorage.setItem('isLoggedIn', logged);
			props.store.dispatch(checkLogin(false));
			redirect();
		} else {
			props.store.dispatch(checkLogin(true));
		}
	}

	return (
		<div>
			<Title>Вход</Title>
			<Form onSubmit={submit}>
				<Input type="text" name="username" placeholder="Введите ваш логин"/>
				<Input type="text" name="password" placeholder="Введите ваш пароль"/>
				<Button type="submit">Войти</Button>
				<Message incorrectLogin={props.store.getState().incorrectLogin}/>
			</Form>
		</div>
	)
}