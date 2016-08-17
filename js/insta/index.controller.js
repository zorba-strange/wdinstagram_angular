"use strict";

(function(){
  angular
    .module("instas")
    .controller("InstaIndexController", [
        "InstaFactory",
        InstaIndexControllerFunction
    ]);
  
   function InstaIndexControllerFunction(InstaFactory){
     InstaFactory.helloWorld();
   }
})();
 
