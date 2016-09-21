var React = require('react'),
    expect = require('expect'),
    $ = require('jquery'),
    TestUtils = require('react-addons-test-utils'),
    ReactDOM = require('react-dom');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
  // body...
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render a Todo component for each todo passed to it', () => {
    var todos = [
      {
        id: 1,
        text: 'developer test text'
      },
      {
        id: 2,
        text: "Smell what the rock is cooking"
      }
    ];
    var todolist = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var todoComponents = TestUtils.scryRenderedComponentsWithType(todolist, Todo);
    expect(todoComponents.length).toBe(todos.length);
  })
});
