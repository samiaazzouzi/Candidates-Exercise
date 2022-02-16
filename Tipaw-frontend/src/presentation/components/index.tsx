import { FC, useEffect, useState } from 'react';

import { gql, useQuery } from '@apollo/client'
import ReactPaginate from 'react-paginate';
import { Link, useParams } from 'react-router-dom';
import { PLACEHOLDER_IMAGE } from '@presentation/constants';

const itemsPerPage = 15;
const pageCount = 3 // to be calculated later

const professionalsPaginationQuery = gql`
query Professionals($skip: Int, $take: Int, $where: ProfessionalWhereInput) {
  professionals(skip: $skip, take: $take, where: $where) {
    id
    firstname
    lastname
    email
    title
    picture
    description
    langue
    address
    paimentOption
  }
}`

export const LandingPage: FC = () => {

  const { data, loading, error, fetchMore } = useQuery(professionalsPaginationQuery, { variables: { skip: 0, take: itemsPerPage, where: {} } })

  const handlePageClick = (event: any) => {
    let skip = event.selected * itemsPerPage;
    console.log('page', event.selected);
    console.log('skip', itemsPerPage);

    fetchMore({
      variables: { skip: skip, take: itemsPerPage },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        return fetchMoreResult;
      },
    },
    );
  }

  const handleSearchChange = (event: any) => {
    console.log(event.target.value);
    const where = {
      OR: [
        {
          "title": {
            "contains": event.target.value
          }
        },
        {
          "address": {
            "contains": event.target.value
          }
        },
        {
          "paimentOption": {
            "contains": event.target.value
          }
        }
      ]


    }

    fetchMore({
      variables: { where: where },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        return fetchMoreResult;
      },
    },
    );


  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Oh no... {error.message}</p>
  if (data) {
    return (
      <div>

        <div className="input-group">
          <input type="text" className="form-control" placeholder="Search by title, address or payment method" onChange={handleSearchChange} />
          <div className="input-group-append">
          </div>
        </div>




        <div>
          <div className="container mt-5 mb-5">
            <div className="d-flex justify-content-center row">
              <div className="col-md-10">

                {data.professionals.map((professional: any) => (

                  <div key={professional.id} className="row p-2 bg-white border rounded">
                    <div className="col-md-3 mt-1">
                      <img className="img-fluid img-responsive rounded product-image" src={`data:image/jpeg;base64,${professional.picture}`} alt="no image provided" /></div>
                    <div className="col-md-6 mt-1">
                      <h5> {professional.title}</h5>
                      <p className="text-justify text-truncate para mb-0">{professional.description}.</p>
                    </div>
                    <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                      <div className="d-flex flex-row align-items-center">
                        <h4 className="mr-1">Info</h4>
                      </div>
                      <h6 className="mr-1">{professional.address}</h6>
                      <h6 className="mr-1">{professional.langue}</h6>
                      <h6 className="mr-1">{professional.paimentOption}</h6>
                      <Link to={`/details/${professional.id}`} key={professional.id} >More details</Link>
                    </div>
                  </div>

                ))}
              </div>
            </div>
          </div>

        </div>

        <ReactPaginate
          previousLabel={'prev'}
          nextLabel={'next'}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />

      </div>
    )
  }
};





const professionalDetailsQuery = gql`
query Professionals($where: ProfessionalWhereInput) {
  professionals(where: $where) {
    id
    firstname
    lastname
    email
    description
    title
    langue
    paimentOption
    address
    picture
  }
}`


export const DetailsPage: FC = () => {
  let params = useParams();
  const { data, loading, error } = useQuery(professionalDetailsQuery, { variables: { where: {id: {equals: params.id}} }  })
  if (loading) return <p>Loading...</p>
  if (error) return <p>Oh no... {error.message}</p>
  if (data) {
  console.log(data)
  const professional = data.professionals[0];
  
  return (
    <div>
      <div className="container">

        <h1 className="my-4">{professional.title}

        </h1>

        <div className="row">

          <div className="col-md-8">
            <img className="img-fluid" src={`data:image/jpeg;base64,${professional.picture}`} alt="Img" />
          </div>

          <div className="col-md-4">
            <h3 className="my-3">Informations</h3>
            <ul>
              <li><b>Name:</b> {professional.firstname} {professional.lastname}</li>
              <li><b>email:</b> {professional.email}</li>
              <li><b>adresse:</b> {professional.address}</li>
              <li><b>Payment methods:</b> {professional.paimentOption}</li>
              <li><b>Language:</b> {professional.langue}</li>
            </ul>
          </div>

        </div>

        <h3 className="my-4">Description</h3>
        {professional.description}

      </div>

    </div>
  )
  }
};

