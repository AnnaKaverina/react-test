import React from 'react';
import {Title} from './Home';
import NewsItem from './../components/NewsItem';
import styled from 'styled-components';


const ItemsWrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
`;

export default class News extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			news: [
				{
					title: 'Собака так неудачно покопалась в мусорном ведре, что посинела',
					descr: 'Рози, собачка породы бишон-фризе, воспользовалась тем, что хозяйка отвлеклась, и занялась крайне интересным делом — принялась копаться в мусорном ведре. Процесс получился более чем результативным. Правда, ничего вкусного животное не обнаружило, но зато слишком близко познакомилось с выброшенным картриджем.',
					img: 'https://120.su/wp-content/uploads/2020/11/17112020-blue-dog-2.jpg'
				},
				{
					title: 'Далеко не все считают шелуху от семечек мусором',
					descr: 'Для кого-то шелуха от семечек является самым обычным мусором, но некоторые способны разглядеть в ней большой творческий потенциал.',
					img: 'https://120.su/wp-content/uploads/2020/11/17112020-trash-art-1.jpg'
				}
			]
		};
	}
	render() {
		return (
			<div>
				<Title>Новости</Title>
				<ItemsWrapper>
					{this.state.news.map((item) => 
						<NewsItem title={item.title} descr={item.descr} img={item.img} />
					)}
				</ItemsWrapper>
			</div>
		)
	}
}