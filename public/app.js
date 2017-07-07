angular
  .module("goFundYourself",["ui.router","ngResource"])
  .config([
    "$stateProvider",
    Router
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
    EventFactoryFunction
  ])

function Router($stateProvider){
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

function IndexControllerFunction(EventFactory){
  console.log("controller working")
  this.events = EventFactory.query()
  console.log(this.events)
}


function EventFactoryFunction($resource){
  console.log("factory working")
      return $resource("/api/events/:title", {}, {
        update: { method: "PUT" }
      })
    }
