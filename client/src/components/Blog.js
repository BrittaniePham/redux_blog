import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { deleteBlog } from '../reducers/blogs'

const Blog = ({ id, name, author, body, dispatch }) => (
  <Fragment>
    <li>
      Blog name: {name}
      <br />
      written by: {author}
      <br />
      body: {body}
      <br />
    <button onClick={() => dispatch(deleteBlog(id))}>x</button> 
    <hr />
    </li>
  </Fragment>
)

export default connect()(Blog)