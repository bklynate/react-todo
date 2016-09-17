var React = require('react');
var TodoList = require('TodoList')

var TodoApp = React.createClass({
  getInitialState: function(){
    return {
      todos: [
        {
          id: 1,
          text: "Learn to code"
        },
        {
          id: 2,
          text: "Take over the world"
        },
        {
          id: 3,
          text: "Create money"
        },
        {
          id: 4,
          text: "Live freely"
        }

      ]
    }
  },
  render: function(){
    var {todos} = this.state;

    return(
      <div>
        <TodoList todos={todos}/>
      </div>
    );
  }
})

module.exports = TodoApp;
