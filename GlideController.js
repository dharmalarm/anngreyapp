// Glide Controller controls glide feature
// Limited commenting since this is just a quick example
(function() {
  'use strict';

  angular.module('app')
    .controller('GlideController', [
      '$log',
      '$sce',
      'GlideService',
      GlideController
    ]);

  function GlideController($log, $sce, GlideService) {
    var glide = this;
    glide.records = [];
    glide.chosenRecord = 'Choose from List';

    //initiate on load functions
    function init() {
      getGlideRecords();
    }

    glide.trustAsHTML = function(html) {
      return $sce.trustAsHtml(html);
    }

    //get records from the GlideService
    function getGlideRecords() {
      GlideService.getRecords()
      .then(function(data) {
        glide.records = data;

      }).catch(function(error) {
        $log.error('error occured', error);
      });
    }

    init();
  }
})();
