var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function(){
    var {todos} = this.props;
    var renderTodos = () => {
      return todos.map((item)=> {
        return (
          <Todo key={item.id} {...item}/>
        );
      });
    };

    return(
      <div>
        {renderTodos()}
      </div>
    );
  }
});

module.exports = TodoList;
