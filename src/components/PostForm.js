import React, { Component } from 'react';


class PostForm extends Component {

  state = {
    title : '',
    body: ''
  }

  onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
  }

onSubmit = (e) => {
    e.preventDefault();  

    const post = {
      title: this.state.title,
      body: this.state.body
    }

    fetch('http://jsonplaceholder.typicode.com/posts',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    .then(res => res.json())
    .then(data => console.log(data))
}

  render(){

    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit = { this.onSubmit }>
            <div style={ formStyles }>
                <label style={labelStyles}>Title</label>
                <input type="text" name="title" value={this.state.title} onChange={this.onChange}/>
            </div>
            <div style={ formStyles }>
                <label style={labelStyles}>Body</label>
                <textarea name="body" col="5" row="5" value={this.state.body} onChange={this.onChange}/>
            </div>
            <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}

const formStyles = {
     margin: '5px'
}
const labelStyles = {
    margin: '0 5px'
}
export default PostForm;
