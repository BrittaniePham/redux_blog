const ADD_BLOG = 'ADD_BLOG'
const DELETE_BLOG = 'DELETE_BLOG'
const TOGGLE_BLOG = 'TOGGLE_BLOG'
const BLOGS = 'BLOGS'

export const addBlog = (id) => {
  return { type: ADD_BLOG, id }
}

export const deleteBlog = (id) => {
  return { type: DELETE_BLOG, id }
}

export const toggleBlog = (blog) => {
  return { type: TOGGLE_BLOG, blog }
}

export default ( state = [], action ) => {
  switch(action.type) {
    case BLOGS:
      return action.blogs
    case ADD_BLOG:
      return [action.blog, ...state]
    case DELETE_BLOG:
      return state.filter( b => b.id !== action.id)
    case TOGGLE_BLOG:
      return state.map( blog => {
        if (blog.id === action.id)
          return {...blog} //show details of that blog
        return blog
      })
    default:
      return state
  }
}