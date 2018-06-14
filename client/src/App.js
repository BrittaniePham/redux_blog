import React, { Component } from 'react';
import Blogs from './components/Blogs';
import BlogForm from './components/BlogForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <BlogForm />
        <Blogs />
      </div>
    )
  }
}

export default App;
