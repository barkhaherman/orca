/**
 * Created 3/15/2016.
 * Copyright 2016 Focus Technologies
 * names.controller
 */
/**
 * Created by mike on 7/20/2015.
 * names.controller -
 */
angular.module('agile.names', [])
  .controller('NamesController', NamesController)

  .config(function($stateProvider, States) {
      'use strict';
      $stateProvider.state(States.names.default, {
        url: '/names',
        views: {
          'content@': {
            templateUrl: 'others/names.tpl.html',
            controller: 'NamesController as names'
          }
        }
      });
    }
  );

function NamesController() {

  this.message = '';
  var vm = this;

  activate();

  function activate() {

  }
}
