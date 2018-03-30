//Initial new directive
(function() {
  'use strict';

  angular.module('app')
    .directive('spDemoRecord', [
      '$sce',
      '$rootScope',
      spDemoRecordDirective
    ]);

  function spDemoRecordDirective($sce, $rootScope) {
  	return {
  		restrict: 'E',
      scope: {
        records: '=',
        chosenRecord: '='
      },
      replace: true,
      templateUrl: 'glide/spDemoRecordTemplate.html',
  		link: link
  	};

    function link(scope, elements, attrs) {

      scope.trustAsHTML = function(html) {
        return $sce.trustAsHtml(html);
      }

      scope.updateChosenRecord = function(record) {
        scope.records.push(record);
        $rootScope.$emit('updated-record', scope.records);
        scope.chosenRecord = record.number;
      }
    }
  }

}());
