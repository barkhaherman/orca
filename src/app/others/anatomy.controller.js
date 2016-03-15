/**
 * Created 3/15/2016.
 * Copyright 2016 Focus Technologies
 * anatomy.controller
 */
/**
 * Created by mike on 7/20/2015.
 * anatomy.controller -
 */
angular.module('agile.anatomy', [])
  .controller('AnatomyController', AnatomyController)

  .config(function($stateProvider, States) {
      'use strict';
      $stateProvider.state(States.anatomy.default, {
        url: '/anatomy',
        views: {
          'content@': {
            templateUrl: 'others/anatomy.tpl.html',
            controller: 'AnatomyController as anatomy'
          }
        }
      });
    }
  );

function AnatomyController() {

  this.message = '';
  var vm = this;

  activate();

  function activate() {

  }
}
