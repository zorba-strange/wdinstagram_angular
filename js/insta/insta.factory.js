"use strict";

(function(){
  angular
    .module("instas")
    .factory("InstaFactory", [
        InstaFactoryFunction
    ]);
  function InstaFactoryFunction(){
    return {
      helloWorld: function(){
        console.log("hello world")
      }
    }
  }
})();



