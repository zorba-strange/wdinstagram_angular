"use strict";

(function(){
  angular
    .module("wdinstagram", [
      "ui.router",
      "insta"
  ])
    .config([
        "$stateProvider",
        RouterFunction
    ]);

  // router
  function RouterFunction($stateProvider){
    $stateProvider
      .state("instaIndex", {
        url: "/instas",
        templateUrl: "js/insta/index.html",
        controller: "InstaIndexController",
        controllerAs: "IIvm"
      })
  }
})();
