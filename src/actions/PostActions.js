import { FETCH_POSTS , NEW_POST } from './Types.js';

export const fetchPosts = () => dispatch => {
  fetch('http://jsonplaceholder.typicode.com/posts?_limit=5')
      .then(res =>res.json())
      .then(posts => {
          dispatch({
            type: FETCH_POSTS,
            payload: posts,
             
          })
      })
}
