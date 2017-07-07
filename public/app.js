angular
  .module("goFundYourself",["ui.router","ngResource"])
  .config([
    "$stateProvider",
    function($stateProvider){
      console.log("router working")
      $stateProvider
      .state("welcome", {
        url: '/',
        templateUrl: '/assets/js/ng-views/welcome.html'
      })
      .state("index", {
        url: '/events',
        templateUrl: '/assets/js/ng-views/index.html',
        controller: 'IndexController',
        controllerAs: 'vm'
      })
      .state("show",{
        url: '/events/:title',
        templateUrl: '/assets/js/ng-views/show.html',
        controller: 'ShowController',
        controllerAs: 'vm'
      })
    }
  ])
  .controller("IndexController",[
    "EventFactory",
    IndexControllerFunction
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

function IndexControllerFunction(EventFactory){
  console.log("controller working")
  this.events = EventFactory.query()
  console.log(this.events)
}
