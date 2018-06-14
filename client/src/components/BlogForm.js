import React from 'react';
import { connect } from 'react-redux';

class BlogForm extends React.Component {
  defaultValues = { name: '', author: '', body: '' }
  state = {...this.defaultValues}

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch, id } = this.props
    const { name, author, body } = this.state
    const blog = { name, id, author, body }
    dispatch({ type: 'ADD_BLOG', blog })
    dispatch({ type: 'INC_ID' })
    this.setState({...this.defaultValues})
  }

  handleChange = (e) => {
    const { target: { name, value } } = e
    this.setState({ [name]: value })
  }

  render() {
    const { name, author, body } = this.state

    return (
      <div>
        <h3>Add a Blog</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            name="name"
            placeholder="name"
            value={name}
            onChange={this.handleChange}
            required
          />
          <input
            name="author"
            placeholder="author"
            value={author}
            onChange={this.handleChange}
            required
          />
          <input
            name="body"
            placeholder="body"
            value={body}
            onChange={this.handleChange}
            required
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => { //grabbing from redux store so i can use that information
  return { id: state.nextId }
}

export default connect(mapStateToProps)(BlogForm); //object of props