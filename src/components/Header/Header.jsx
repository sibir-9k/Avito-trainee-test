// import React from 'react'
import { Link } from 'react-router-dom';
import { PageHeader } from '@ant-design/pro-layout';
import { Divider } from 'antd';

export const Header = () => {
	return (
		<nav>
			<Link to={'/'}>
				<PageHeader title="Avito Game Store"></PageHeader>
			</Link>
			<Divider />
		</nav>
	);
};
