import { useQuery, gql } from "@apollo/client";

const Episode = ({ id }) => {
	const GET_EPISODE = gql`
		query getEpisode($id: ID!) {
			episode(id: $id) {
				id
				name
				episode
				characters {
					id
					name
				}
				created
			}
		}
	`;

	const { loading, error, data } = useQuery(GET_EPISODE, {
		variables: {
			id,
		},
	});

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error!</p>;

	return (
		<div>
			<h2>Episode</h2>
			<p>{data.episode.id}</p>
			<p>{data.episode.name}</p>
			<p>{data.episode.episode}</p>
			<ul>
				{data.episode.characters.map((item) => (
					<li key={item.id}>{item.name}</li>
				))}
			</ul>
			<p>{data.episode.created}</p>
		</div>
	);
};

export default Episode;
