// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import './GamePage.scss';
import { useSelector } from 'react-redux';
import { Carousel } from 'antd';
import DateConverter from '../../helper/DateConverter';

export const GamePage = () => {
	const currentGame = useSelector((state) => state.showCard.game);
	const arrayScreenshots = currentGame.screenshots;

	return (
		<>
			<Link to={'/'} className="link-back">
				Back in Catalog
			</Link>
			<main>
				<div className="product-card">
					<div>
						<div className="product-image">
							<img src={currentGame.thumbnail} alt={currentGame.title} />
						</div>
						<div className="product-description">{currentGame.description}</div>
					</div>
					<div className="product-info">
						<h3 className="product-name">{currentGame.title}</h3>
						<p>
							Дата релиза:
							<strong>
								<DateConverter date={currentGame.release_date} />
							</strong>
						</p>
						<p>
							Издатель: <strong>{currentGame.publisher}</strong>{' '}
						</p>
						<p>
							Разработчик: <strong>{currentGame.developer}</strong>{' '}
						</p>
						<p>
							Жанр: <strong>{currentGame.genre}</strong>{' '}
						</p>
						<div className="screenshots-carousel">
							<Carousel autoplay>
								{arrayScreenshots.map((imageGame) => {
									return (
										<div key={imageGame.id}>
											<img src={imageGame.image} alt="" />
										</div>
									);
								})}
							</Carousel>
						</div>
						<div className="system-requirements">
							<h4>Минимальные требования cистемные требования</h4>
							<table>
								<tbody>
									<tr>
										<td>Процессор</td>
										<td>{currentGame.minimum_system_requirements?.processor}</td>
									</tr>
									<tr>
										<td>Оперативная память</td>
										<td>{currentGame.minimum_system_requirements.memory}</td>
									</tr>
									<tr>
										<td>Видеокарта</td>
										<td>{currentGame.minimum_system_requirements.graphics}</td>
									</tr>
									<tr>
										<td>Операционная Система</td>
										<td>{currentGame.minimum_system_requirements.os}</td>
									</tr>
									<tr>
										<td>Память</td>
										<td>{currentGame.minimum_system_requirements.storage}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};
