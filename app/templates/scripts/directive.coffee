'use strict'

angular.module('<%= name %>')
  .directive '<%= name %>', ->
    template: '<div></div>'
    restrict: 'E'
    link: (scope, element, attrs) ->
      element.text 'this is the <%= name %> directive'