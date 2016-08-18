"use strict";

(function(){
  angular
    .module("wdinstagram", [
      "ui.router",
      "instas"
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
    .state("instaShow", {
      url: "/instas/:id",
      templateUrl: "js/insta/show.html",
      controller: "InstaShowController",
      controllerAs: "ISvm"
    });
    
  }
})();
