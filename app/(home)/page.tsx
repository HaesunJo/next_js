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
	// set timer to show loading
	await new Promise((resolve) => setTimeout(resolve, 1000))

	const response = await fetch(API_URL)
	const movieList = await response.json()

	return movieList
}

export default async function Page() {
	const movies = await getMovies()

	return (
		<div>
			{/* <h1>Hello this is landing page</h1> */}
			<div className={styles.container}>
				{movies.map(movie =>
						// <li key={movie.id}>
						// 	{/* {movie.id} */}
						// 	<Link href={`/movies/${movie.id}`}>{movie.title}</Link>
						// </li>
						<Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title} />
					)
				}
			</div>
		</div>
	)
}

// "use client"

// import { useEffect, useState } from "react"

// export default function Page() {
// 	const url = "https://nomad-movies.nomadcoders.workers.dev/movies"
// 	const [isLoading, setIsLoading] = useState(true)
// 	const [movies, setMovies] = useState([]);
	
// 	const getMovies = async () => {
// 		const response = await fetch(url)
// 		const movieList = await response.json()
		
// 		setMovies(movieList)
// 		setIsLoading(false)
// 	}
// 	useEffect(() => {
// 		getMovies()
// 	}, [])

// 	return (
// 		<div>
// 			<h1>Hello this is landing page</h1>
// 			<div>{isLoading ? "Loading..." : JSON.stringify(movies)}</div>
// 		</div>
// 	)
// }