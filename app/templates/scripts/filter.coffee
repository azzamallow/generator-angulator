'use strict'

angular.module('<%= name %>')
  .filter '<%= name %>', ->
    (input) ->
      '<%= name %> filter: ' + input
