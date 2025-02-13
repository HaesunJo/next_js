import { Metadata } from "next"

export const metadata :Metadata = {
	title: "NOT FOUND 🥹"
}
export default function NotFound() {
    return (
		<div>
			<h1>Invaild url - page not found</h1>
		</div>
	)
}