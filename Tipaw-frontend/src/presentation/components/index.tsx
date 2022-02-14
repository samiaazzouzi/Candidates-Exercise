import { FC } from 'react';
import { gql, useQuery } from '@apollo/client';
import {PLACEHOLDER_IMAGE} from '../constants/index';

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
                <li key={professional.id} className="service-list">
                  <div>
                    <img src={`${PLACEHOLDER_IMAGE}`} alt="icon" width="200" height="auto" ></img>
                    <p>id: {professional.id}</p>
                    <p>firstName: {professional.firstname}</p>
                    <p>lastname: {professional.lastname}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <button type="button" className="btn btn-danger">Danger</button>
          {/* <ul>
            <li className="service-list">
              <a href=""><img src="https://www.google.co.in/images/srpr/logo4w.png" alt="icon" width="200" height="auto" /></a>

              <h3>Header</h3>
              <p>
                text goes here
              </p>
            </li>
          </ul> */}
        </div >
      )
    }
};

