'use strict'

describe 'Factory: <%= name %>', ->

  beforeEach module '<%= name %>'

  <%= name %> = {}
  beforeEach inject (_<%= name %>_) ->
    <%= name %> = _<%= name %>_

  it 'should do something', ->
    expect(!!<%= name %>).toBe true
