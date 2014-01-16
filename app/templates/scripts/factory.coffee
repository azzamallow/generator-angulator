'use strict'

angular.module '<%= name %>', []

angular.module('<%= name %>')
  .factory '<%= name %>', ->
    meaningOfLife = 42

    {
      someMethod: ->
        meaningOfLife
    }