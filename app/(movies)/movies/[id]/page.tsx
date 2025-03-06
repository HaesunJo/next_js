import { Suspense } from "react"
import { API_URL } from "../../../(home)/page"
import MovieInfo from "../../../../components/moive-info"
import MovieTrailers from "../../../../components/movie_trailers"
import styles from "../../../../styles/movie-page.module.css"

export const metadata = {
	title: 'Movies',
	description: 'You are at the movies page',
}
export default async function MovieDetails({ params }: { params: { id: string } }) {
	const { id } = await params

	return (<div className={styles.container}>
				<Suspense fallback={<h1>Loading movie info</h1>}><MovieInfo id={id} /></Suspense>
				<Suspense fallback={<h1>Loading movie trailer</h1>}><MovieTrailers id={id} /></Suspense>
			</div>)
}