import React from 'react'
import { createFragmentContainer } from 'react-relay'
import { Link } from 'react-router-dom'

const HomeItem = ({ person: { id, fullName } }) => (
  <li>
    <Link to={`/about/${id}/`}>{fullName}</Link>
  </li>
)

export default createFragmentContainer(
  HomeItem,
  {
    person: graphql`
      fragment HomeItem_person on Person {
        id
        fullName
      }
    `
  }
)
