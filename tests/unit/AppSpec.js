/** @jsx React.DOM */

describe('App test', function() {
  var TestUtils = require('react/lib/ReactTestUtils');

  it('should have right title', function() {
    var App = require('../../app/js/components/App.js');
    var AppDom = TestUtils.renderIntoDocument(<App title="Hello world"/>);

    expect(TestUtils.findRenderedDOMComponentWithTag(AppDom, 'h1').getDOMNode().textContent).toEqual("Hello world");
  });
});