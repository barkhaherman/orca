/**
 * Created by mike on 7/20/2015.
 * behave.controller -
 */
angular.module('agile.behave', [])
  .controller('BehaveController', BehaveController)

  .config(function($stateProvider, States) {
      'use strict';
      $stateProvider.state(States.behave.default, {
        url: '/behave',
        views: {
          'content@': {
            templateUrl: 'others/behave.tpl.html',
            controller: 'BehaveController as behave'
          }
        }
      });
    }
  );

function BehaveController() {

  this.message = '';
  var vm = this;

  activate();

  function activate() {

  }
}
