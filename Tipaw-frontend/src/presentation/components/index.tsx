import { FC } from 'react';
import { gql, useQuery } from '@apollo/client';

const AllProfessionalsQuery = gql`
query {
  professionals {
    id
    firstname
    lastname
  }
}`

// skip : (pagenumber -1)* take
//take: elementnumber by page ; example 15
// query {
//   professionals(skip: 0, take: 3) {
//     id
//   }
// }


// get by id
// query {
//   professional(where: { id: "7ae38c63-ace1-469f-9842-e996c7772c25" }) {
//     id
//     firstname
//   }
// }



export const LandingPage: FC = () => {
    const { data, loading, error } = useQuery(AllProfessionalsQuery)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Oh no... {error.message}</p>  
    if (data) {
      return (
        <div>
          <div>
            <ul>
              {data.professionals.map((professional: any) => (
                <li key={professional.id}>
                  <div className="p-5 flex flex-col space-y-2">
                  <p className="text-sm text-blue-500">id: {professional.id}</p>
                    <p className="text-sm text-blue-500">firstname: {professional.firstname}</p>
                    <p className="text-sm text-blue-500">lastname: {professional.lastname}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <button>Hello ...............</button>
        </div >
      )
    }
};
