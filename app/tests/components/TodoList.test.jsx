var React = require('react'),
    expect = require('expect'),
    $ = require('jquery'),
    TestUtils = require('react-addons-test-utils'),
    ReactDOM = require('react-dom');

var TodoList = require('TodoList');

describe('TodoList', () => {
  // body...
  it('should exist', () => {
    expect(TodoList).toExist();
  });
});
