// var Schema = require("../db/connection.js");
//
// var DonationModel = Schema.DonationModel
// var EventModel = Schema.EventModel

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
    "DonationFactory",
    "$state",
    "$stateParams",
    ShowControllerFunction
  ])
  .factory("EventFactory",[
    "$resource",
    EventFactoryFunction
  ])
  .factory("DonationFactory",[
    "$resource",
    DonationFactoryFunction
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
  this.createEvent = function () {
  this.newEvent.$save().then(function(event){
    $state.go("show", { title: event.title })
  })
}
}

function ShowControllerFunction(EventFactory, DonationFactory, $state, $stateParams){
  var self = this
  this.event = EventFactory.get({title: $stateParams.title})
  this.update = function () {
    this.event.$update({title: $stateParams.title})
  }
  this.destroy = function () {
    this.event.$delete({title: $stateParams.title}).then(function(){
      $state.go("index")
    })
  }
  // this.totalDonations = 0
  // console.log(this.event.donations.length)
  // // this.event.donations.forEach(function(donation, i){
  // //   self.totalDonations += donation.amount
  // // })
  //
  // this.event.currentAmount = this.totalDonations
  // this.event.$update({title: $stateParams.title})

  this.addDonation = function(){

    self.donationObj = new DonationFactory({name: self.name, amount: self.amount, body: self.body})
    console.log("dontationObj: " + self.donationObj)
    self.event.donations.push(self.donationObj)

    // self.newDonation = {name: self.name, amount: self.amount, body: self.body}
    // self.event.donations.push(self.newDonation)
    self.newCurrentAmount = self.event.currentAmount + parseInt(self.amount)
    self.event.currentAmount = self.newCurrentAmount
    console.log(self.newCurrentAmount)
    self.event.$update({title: $stateParams.title})
    console.log(self.event.currentAmount)
  }

}


function EventFactoryFunction($resource){
  console.log("Event factory working")
      return $resource("/api/events/:title", {}, {
        update: { method: "PUT" }
      })
}

function DonationFactoryFunction($resource){
  console.log("donation factory working")
      return $resource("/api/events/:title/donations/:id", {}, {
        update: { method: "PUT" }
      })
}
