/**
 * Created 3/15/2016.
 * Copyright 2016 Focus Technologies
 * mating.controller
 */
/**
 * Created by mike on 7/20/2015.
 * mating.controller -
 */
angular.module('agile.mating', [])
  .controller('MatingController', MatingController)

  .config(function($stateProvider, States) {
      'use strict';
      $stateProvider.state(States.mating.default, {
        url: '/mating',
        views: {
          'content@': {
            templateUrl: 'others/mating.tpl.html',
            controller: 'MatingController as mating'
          }
        }
      });
    }
  );

function MatingController() {

  this.message = '';
  var vm = this;

  activate();

  function activate() {

  }
}
