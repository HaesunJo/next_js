import { Suspense } from "react"
import MovieInfo, { getMovie } from "../../../../components/moive-info"
import MovieTrailers from "../../../../components/movie_trailers"
import styles from "../../../../styles/movie-page.module.css"

export async function generateMetadata({ params }:{ id: string }) {
	const { id } = await params
	const movie = await getMovie(id)

	return {
		title: movie.title
	}
}
export default async function MovieDetails({ params }:{ id: string }) {
	const { id } = await params

	return (<div className={styles.container}>
				<Suspense fallback={<h1>Loading movie info</h1>}><MovieInfo id={id} /></Suspense>
				<Suspense fallback={<h1>Loading movie trailer</h1>}><MovieTrailers id={id} /></Suspense>
			</div>)
}