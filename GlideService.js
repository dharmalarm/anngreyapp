//Returns glide records (mock promise)
(function() {
  'use strict';

  angular.module('app')
    .service('GlideService', [
      '$q',
      GlideService
    ]);

  function GlideService($q) {
    //get mock promise & json record data
    function getRecords() {
      var deferred = $q.defer();
      var jsonData = [];

      jsonData = [{number: 'INC0023423', description: 'Test incident 1', state: '1', template: '<p>Pizza</p>'},
           {number: 'INC0023434', description: 'Test incident 2', state: '2', template: '<p>Tacos</p>'},
           {number: 'INC0023464', description: 'Test incident 3', state: '2', template: '<p>Falafel</p>'}];

      setTimeout(function() {
        if(jsonData.length) {
          deferred.resolve(jsonData);
        } else {
          deferred.reject('REST API valid error response');
        }
      });

      return deferred.promise;
    }

    var servicesObj = {
      getRecords: getRecords
    };

    return servicesObj;
  }
})();
