import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
//Custom function, can also be used for styles as such
getStyle = () =>
{
    return{
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ?
      'line-through' : 'none'
    }
}

//We do the = () => thing to avoid databinding by hand
//markComplete = (e) =>{
//  console.log(this.props)
//}

  render() {
    const {id, title} = this.props.todo;
    return (
      <div style = {this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/> {' '}
          {title}
          <button onClick= {this.props.delTodo.bind(this,id)}style={btnStyle}>x</button>
        </p>
      </div>
    )
  }
}

//PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

//can be called for inline styles with the name
const itemStyle = {
  backgroundColor: '#f4f4f4'
}
const btnStyle = {
  backgroundColor: '#ff0000',
  color: '#fff',
  border:'none',
  padding:'5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float:'right'
}

export default TodoItem
