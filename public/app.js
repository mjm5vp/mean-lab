angular
  .module("goFundYourself",["ui.router","ngResource"])
  .config([
    "$stateProvider",
    Router
  ])
  .controller("IndexController",[
    "$state",
    "EventFactory",
    IndexControllerFunction
  ])
  .controller("ShowController", [
    "EventFactory",
    "$state",
    "$stateParams",
    ShowControllerFunction
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

function IndexControllerFunction($state, EventFactory){
  console.log("controller working")
  this.events = EventFactory.query()
  console.log(this.events)

  this.newEvent = new EventFactory()
  this.create = function () {
  this.newEvent.$save().then(function(event){
    $state.go("show", { title: event.title })
  })
}
}

function ShowControllerFunction(EventFactory, $state, $stateParams){
  this.event = EventFactory.get({title: $stateParams.title})
  this.update = function () {
    this.event.$update({name: $stateParams.title})
  }
  this.destroy = function () {
    this.event.$delete({name: $stateParams.title}).then(function(){
      $state.go("index")
    })
  }
}


function EventFactoryFunction($resource){
  console.log("factory working")
      return $resource("/api/events/:title", {}, {
        update: { method: "PUT" }
      })
    }
