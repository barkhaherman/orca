/**
 * Created 3/15/2016.
 * Copyright 2016 Focus Technologies
 * habitat.controller
 */
/**
 * Created by mike on 7/20/2015.
 * habitat.controller -
 */
angular.module('agile.habitat', [])
  .controller('HabitatController', HabitatController)

  .config(function($stateProvider, States) {
      'use strict';
      $stateProvider.state(States.habitat.default, {
        url: '/habitat',
        views: {
          'content@': {
            templateUrl: 'others/habitat.tpl.html',
            controller: 'HabitatController as habitat'
          }
        }
      });
    }
  );

function HabitatController() {

  this.message = '';
  var vm = this;

  activate();

  function activate() {

  }
}
