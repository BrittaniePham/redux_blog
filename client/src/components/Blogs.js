import React from 'react';

class Blogs extends React.Component {

  componentDidMount() {
    // function calls when component mounts (when blog component renders, do this)
    axios.get()
    .then( res => {
      //when this request finishes
    })
    .catch ( err => {
      //if the request fails
    })
  }

  render() {
    return(
      <div>
        <h1>Blogs</h1>
      </div>
    )
  }
}



export default Blogs;