angular
  .module("goFundYourself",[
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    function($stateProvider){
      $stateProvider
      .state("welcome", {
        url: '/',
        templateUrl: '/public/js/ng-views/welcome.html'
      })
      .state("index", {
        url: '/events',
        templateUrl: './js/ng-views/index.html',
        controller: 'IndexController',
        controllerAs: 'vm'
        }
      })
      .state("show",{
        url: '/events/:title',
        templateUrl: '/public/js/ng-views/show.html',
        controller: 'ShowController',
        controllerAs: 'vm'
      })
    }
  ])
  .controller("IndexController",[
    "EventFactory",
    "$state",
    function(EventFactory, $state){

    }
  ])
  .controller("ShowController", [
    "EventFactory",
    "$state",
    "$stateParams",
    function(EventFactory, $state, $stateParams){

    }
  ])
  .factory("EventFactory",[
    "$resource",
    function($resource){
      return $resource("/api/events/:title", {}, {
        update: { method: "PUT" }
      })
    }
  ])
