import { useQuery, gql } from "@apollo/client";

const Episodes = () => {
	const GET_EPISODES = gql`
		query getEpisodes {
			episodes {
				results {
					id
					name
					created
				}
			}
		}
	`;

	const { loading, error, data } = useQuery(GET_EPISODES);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error!</p>;

	return (
		<div>
			<h2>Episodes</h2>
			<ul>
				{data.episodes.results.map((item) => (
					<li key={item.id}>
						{item.name} - {item.created}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Episodes;
