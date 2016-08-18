"use strict";

(function(){
  angular
    .module("instas")
    .controller("InstaEditController", [
        "InstaFactory",
        "$stateParams",
        InstaEditControllerFunction
    ]);

  function InstaEditControllerFunction(InstaFactory, $stateParams){
    this.insta = InstaFactory.get({id: $stateParams.id});
    this.update = function(){
      this.insta.$update({id: $stateParams.id});
    }
    this.kill = function(){
      this.insta.$delete({id: $stateParams.id});
    }
  };
}());




        

