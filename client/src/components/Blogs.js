import React from 'react';
import { connect } from 'react-redux'; //how to subscribe component to redux
import Blog from './Blog';

const Blogs = ({ blogs }) => (
  <div>
    <ul>
      <h1>Blogs</h1>
        {blogs.map( (b) => {
          return (
            <Blog key={b.id} {...b} />
          )
        })
      }
    </ul>
  </div>
)

const mapStateToProps = (state) => {
  return { blogs: state.blogs }
}

export default connect(mapStateToProps)(Blogs);