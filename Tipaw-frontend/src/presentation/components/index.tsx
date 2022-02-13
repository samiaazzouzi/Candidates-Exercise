import { FC } from 'react';

import { gql, useQuery } from '@apollo/client'

const AllProfessionalsQuery = gql`
query {
  professionals {
    id
    firstname
    lastname
  }
}`

export const LandingPage: FC = () => {

  try {
    const { data, loading, error } = useQuery(AllProfessionalsQuery)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Oh no... {error.message}</p>
    //if (data) return <div>hello : {data.pprofessionals[0].id}</div>;

    console.log('data', data)
    //return <p>{data.professionals[0].id}</p>

    if (data) {
      console.log('yes in')
      return (
        <div>
          <div>
            <ul>
              {data.professionals.map(professional => (
                <li key={professional.id}>
                  <div className="p-5 flex flex-col space-y-2">
                    <p className="text-sm text-blue-500">{professional.id}</p>
                    <p className="text-sm text-blue-500">{professional.firstname}</p>
                    <p className="text-sm text-blue-500">{professional.lastname}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    }
  } catch (error){
    console.log('errrrr', error)
  }

  return <div>Landing Page</div>;
};
