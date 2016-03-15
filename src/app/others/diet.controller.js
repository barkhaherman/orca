/**
 * Created 3/15/2016.
 * Copyright 2016 Focus Technologies
 * diet.controller
 */
/**
 * Created by mike on 7/20/2015.
 * diet.controller -
 */
angular.module('agile.diet', [])
  .controller('DietController', DietController)

  .config(function($stateProvider, States) {
      'use strict';
      $stateProvider.state(States.diet.default, {
        url: '/diet',
        views: {
          'content@': {
            templateUrl: 'others/diet.tpl.html',
            controller: 'DietController as diet'
          }
        }
      });
    }
  );

function DietController() {

  this.message = '';
  var vm = this;

  activate();

  function activate() {

  }
}
