'use strict'

describe 'Service: <%= name %>', ->

  beforeEach module '<%= name %>'

  <%= name %> = {}
  beforeEach inject (_<%= name %>_) ->
    <%= name %> = _<%= name %>_

  it 'should do something', ->
    expect(!!<%= name %>).toBe true
