//Initial new directive
(function() {
  'use strict';

  angular.module('app')
    .directive('spUpdatedRecord', [
      '$rootScope',
      spUpdatedRecordDirective
    ]);

  function spUpdatedRecordDirective($rootScope) {
  	return {
  		restrict: 'E',
      scope: {
        chosenRecord: '='
      },
      replace: true,
      template: '<div><h4>Chosen Record ID: {{chosenRecord}}</h4><p>Records: {{records.length}}</p></div>',
  		link: link
  	};

    function link(scope, elements, attrs) {
      scope.records = [];

      var handler = $rootScope.$on('updated-record', function(event, data) {
        scope.records = data;
      });
      $rootScope.$on('$destroy', handler);
    }
  }

}());
