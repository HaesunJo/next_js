import Link from "next/link"
import { resolve } from "path"
import Movie from "../../components/movie"
import styles from "../../styles/home.module.css"

// metadata could be not only in layout but also in page script
export const metadata = {
	title: 'Home',
	description: 'You are at the main page',
}

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies"

async function getMovies() {
	const response = await fetch(API_URL)
	const movieList = await response.json()

	return movieList
}

export default async function Page() {
	const movies = await getMovies()

	return (
		<div>
			<div className={styles.container}>
				{movies.map(movie =>
						<Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title} />
					)
				}
			</div>
		</div>
	)
}