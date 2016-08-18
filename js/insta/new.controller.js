"use strict";

(function(){
  angular
    .module("instas")
    .controller("InstaNewController", [
        "InstaFactory",
        InstaNewControllerFunction
    ]);

  function InstaNewControllerFunction(InstaFactory){
    this.insta = new InstaFactory();
    this.create = function(){
      this.insta.$save();
    }
  };
}());
