import React from 'react'
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Accordion } from './components/Accordion';


export const GET_REVIEWS = gql`
  query ReviewQuery {
    getReviews {
        # renamed as title for greater re-usability of accordion component
        title: name
        body 
        id
    }
  }
`;

export class ReviewQuery extends Query {
  static defaultProps = {
    query: GET_REVIEWS,
    fetchPolicy: "cache-and-network"
  };
}

export const ProductReview = ({  header }) => {
  return (
    <ReviewQuery>
      {({loading, error, data: { getReviews } }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;
        const Header = header || <h2>Reviews</h2>
        return (
          <Accordion 
            header={ Header }
            items={getReviews}
          />
        );
      }}

    </ReviewQuery>
  )
}