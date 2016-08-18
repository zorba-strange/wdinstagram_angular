"use strict";

(function(){
  angular
    .module("instas")
    .controller("InstaShowController", [
        "InstaFactory",
        "$stateParams",
        InstaShowControllerFunction
    ]);

  function InstaShowControllerFunction(InstaFactory, $stateParams){
    this.insta = InstaFactory.get({id: $stateParams.id});
  };
})();
