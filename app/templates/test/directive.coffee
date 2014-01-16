'use strict'

describe 'Directive: <%= name %>', ->

  beforeEach module '<%= name %>'

  scope = {}

  beforeEach inject ($rootScope) ->
    scope = $rootScope.$new()

  it 'should make hidden element visible', inject ($compile) ->
    element = angular.element '<<%= _.dasherize(name) %>></<%= _.dasherize(name) %>>'
    element = $compile(element) scope
    expect(element.text()).toBe 'this is the <%= name %> directive'
