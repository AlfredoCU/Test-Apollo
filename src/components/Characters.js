// * With hooks
import { useQuery, gql } from "@apollo/client";

const Characters = () => {
	const GET_CHARACTERS = gql`
		query getCharacters {
			characters {
				info {
					count
					pages
					next
					prev
				}
				results {
					id
					name
					status
				}
			}
		}
	`;

	const { loading, error, data } = useQuery(GET_CHARACTERS);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error!</p>;

	return (
		<>
			<h2>Characters</h2>
			<ul>
				{data.characters.results.map((item) => (
					<li key={item.id}>
						{item.name} - {item.status}
					</li>
				))}
			</ul>
		</>
	);
};

export default Characters;

// *  Without hooks
// import { gql } from "apollo-boost";
// import { Query } from "react-apollo";

// const Characters = () => (
// 	<Query
// 		query={gql`
// 			{
// 				characters {
// 					results {
// 						id
// 						name
// 						status
// 					}
// 				}
// 			}
// 		`}
// 	>
// 		{({ loading, error, data }) => {
// 			if (loading) return <p>Loading...</p>;
// 			if (error) return <p>Error!</p>;

// 			return (
// 				<ul>
// 					{data.characters.results.map((item) => (
// 						<li key={item.id}>
// 							{item.name} - {item.status}
// 						</li>
// 					))}
// 				</ul>
// 			);
// 		}}
// 	</Query>
// );

// export default Characters;
