'use strict'

describe 'Filter: <%= name %>', ->

  beforeEach module '<%= name %>'

  # initialize a new instance of the filter before each test
  <%= name %> = {}
  beforeEach inject ($filter) ->
    <%= name %> = $filter '<%= name %>'

  it 'should return the input prefixed with "<%= name %> filter:"', ->
    text = 'angularjs'
    expect(<%= name %> text).toBe '<%= name %> filter: ' + text
