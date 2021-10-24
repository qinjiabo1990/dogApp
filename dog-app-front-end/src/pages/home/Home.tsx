import React from 'react'
import { DogSelector, MyFavouriteDogs } from '../../components'
import styles from './Home.module.css'

export const Home: React.FC = () => {

	return (
		<>
			<h1>My Favourite Dog</h1>
			<div className={styles.home}>
				<DogSelector />
				<MyFavouriteDogs />
			</div>
		</>
	)
}
