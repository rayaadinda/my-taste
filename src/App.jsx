import { Spotify } from "react-spotify-embed"

function App() {
	return (
		<div className="flex flex-col justify-center min-h-screen items-center space-y-8 bg-green-300 p-4">
			<section className="text-center w-full max-w-3xl">
				<h1 className="text-2xl md:text-3xl font-bold mb-4">
					My Top 10 Recently Played Songs
				</h1>
				<div className="flex flex-wrap justify-center space-x-4 space-y-4">
					<Spotify link="https://open.spotify.com/track/1CfcKv1RLdJBWhRHAZgVdf?si=64fa983ffa8a4a34" />
					<Spotify link="https://open.spotify.com/track/2eAZfqOm4EnOF9VvN50Tyc?si=3cdb27a997774c17" />
					<Spotify link="https://open.spotify.com/track/7FeEiAWqWScpMFnlLSUvX2?si=6a4fa93587524527" />
				</div>
			</section>

			<section className="text-center w-full max-w-3xl">
				<h1 className="text-2xl md:text-3xl mb-4">My Playlist</h1>
				<div className="flex flex-wrap justify-center space-x-4 space-y-4">
					<Spotify link="https://open.spotify.com/playlist/2vCDD0DcZnKCS424x4ZEaz?si=c98bb7ebbe4a4292" />
				</div>
			</section>
		</div>
	)
}

export default App
