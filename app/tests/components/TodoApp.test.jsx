var React = require('react'),
    expect = require('expect'),
    $ = require('jquery'),
    TestUtils = require('react-addons-test-utils'),
    ReactDOM = require('react-dom');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  // body...
  it('should exist', () => {
    expect(TodoApp).toExist();
  });
});
