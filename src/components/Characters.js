// // * With hooks
// import React from "react";
// import { useQuery, gql } from "@apollo/client";

// class Characters extends React.Component {
//   render() {
//     const GET_CHARACTERS = gql`
//       query getCharacters {
//         characters {
//           info {
//             count
//             pages
//             next
//             prev
//           }
//           results {
//             id
//             name
//             status
//           }
//         }
//       }
//     `;

//     const { loading, error, data } = useQuery(GET_CHARACTERS);

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error!</p>;

//     return (
//       <>
//         <h2>Characters</h2>
//         <ul>
//           {data.characters.results.map((item) => (
//             <li key={item.id}>
//               {item.name} - {item.status}
//             </li>
//           ))}
//         </ul>
//       </>
//     );
//   }
// }

// export default Characters;

// *  Without hooks
import React from "react";
import gql from "graphql-tag";
// import { graphql } from "react-apollo";
import { graphql } from "@apollo/client/react/hoc";

const getCharacters = gql`
  query characters {
    characters {
      results {
        id
        name
        status
      }
    }
  }
`;

// @graphql(queryPreinviteList)
class Characters extends React.Component {
  // getCharacters = async () => await graphql(characters);

  // async componentDidMount() {
  //   const data = await this.getCharacters();
  //   console.log(data);
  // }

  render() {
    console.log(this.props);
    const { data } = this.props;

    return (
      <div>
        <p>hi</p>
        <ul>
          {data?.characters?.results?.map((item) => (
            <li key={item.id}>
              {item.name} - {item.status}
            </li>
          ))}
        </ul>
      </div>

      // <Query query={characters}>
      //   {({ loading, error, data }) => {
      //     if (loading) return <p>Loading...</p>;
      //     if (error) return <p>Error!</p>;

      //     return (
      //       <ul>
      //         {data.characters.results.map((item) => (
      //           <li key={item.id}>
      //             {item.name} - {item.status}
      //           </li>
      //         ))}
      //       </ul>
      //     );
      //   }}
      // </Query>
    );
  }
}

export default graphql(getCharacters)(Characters);
