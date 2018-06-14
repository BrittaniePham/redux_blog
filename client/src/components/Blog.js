import React from 'react';
import { connect } from 'react-redux';

const Blog = ({ id, name, author, body, dispatch }) => (
  <li
    onClick={() => dispatch({ type: 'TOGGLE_BLOG', id })}
  >
    Blog name: {name}
    <br />
    written by: {author}
    <br />
    body: {body}
  </li>
)

export default connect()(Blog)