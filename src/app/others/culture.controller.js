/**
 * Created 3/15/2016.
 * Copyright 2016 Focus Technologies
 * culture.controller
 */
/**
 * Created by mike on 7/20/2015.
 * culture.controller -
 */
angular.module('agile.culture', [])
  .controller('CultureController', CultureController)

  .config(function($stateProvider, States) {
      'use strict';
      $stateProvider.state(States.culture.default, {
        url: '/culture',
        views: {
          'content@': {
            templateUrl: 'others/culture.tpl.html',
            controller: 'CultureController as culture'
          }
        }
      });
    }
  );

function CultureController() {

  this.message = '';
  var vm = this;

  activate();

  function activate() {

  }
}
