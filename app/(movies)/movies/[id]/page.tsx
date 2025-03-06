import { Suspense } from "react"
import MovieInfo, { getMovie } from "../../../../components/moive-info"
import MovieTrailers from "../../../../components/movie_trailers"
import styles from "../../../../styles/movie-page.module.css"

type IParams = Promise<{ id: string; }>;

export async function generateMetadata(props: { params: IParams }) {
	const params = await props.params;
	const id = params.id;
	const movie = await getMovie(id)

	return {
		title: movie.title
	}
}
export default async function MovieDetailPage(props: { params: IParams }) {
	const params = await props.params;
	const id = params.id;

	return (<div className={styles.container}>
				<Suspense fallback={<h1>Loading movie info</h1>}><MovieInfo id={id} /></Suspense>
				<Suspense fallback={<h1>Loading movie trailer</h1>}><MovieTrailers id={id} /></Suspense>
			</div>)
}