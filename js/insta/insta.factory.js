"use strict";

(function(){
  angular
    .module("instas")
    .factory("InstaFactory", [
        "$resource",
        InstaFactoryFunction
    ]);
  function InstaFactoryFunction($resource){
    return $resource( "http://localhost:3000/entries/:id", {}, {
      update: {method: "PUT"}
    })
  }
})();



