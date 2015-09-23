'use strict';

angular.module('tmtControllers')
  .controller('ResultListController', 
             ['$scope', 'Result', '$stateParams', '$log',
    function ($scope,   Result,   $stateParams,    $log) {
  
    $log.info('init ResultListController')
    
    
    var linkCellTemplate = '<div class="ngCellText" ng-class="col.colIndex()">' +
                       '<a href="#/results/{{ row.entity._id }}">{{ row.entity[col.field] }}</a>' +
                       '</div>';
    var defaultCellTemplate = '<div class="ui-grid-cell-contents"><span>{{COL_FIELD}}</span></div>';
    $scope.columns = [ 
      { field: 'tcid', cellTemplate: linkCellTemplate, displayName: 'TC'  }, 
      //{ field: 'other_info.component', width:100, displayName: 'Component' },
      { field: 'exec.duration', width:100, 
        cellTemplate: defaultCellTemplate, displayName: 'Duration' },
      { field: 'exec.verdict',  width:100, displayName: 'Verdict',
        cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
          if (grid.getCellValue(row,col) == "pass") {
            return 'green';
          }
          return 'red';
        } },
      { field: 'exec.dut.type',  width:100, 
        cellTemplate: defaultCellTemplate, displayName: 'DutType' },
      { field: 'exec.sut.cut', 
        cellTemplate: defaultCellTemplate, displayName: 'Components' },
    ]; 
    $scope.gridOptions = { 
      columnDefs: $scope.columns,
      enableColumnResizing: true,
      enableFiltering: true,
      //showFooter: true,
      exporterMenuCsv: true,
      enableGridMenu: true
    };
    
    function doUpdateList(q)
    {
      Result.query({q: JSON.stringify(q)}).$promise.then( 
        function(results){
          $scope.dataResults = results;
          var status = {
              dataLength: results.length,
              totalDuration: 0 };
          var TotalDuration = 0;
          results.forEach( function(result){
            if( result.hasOwnProperty('exec') && result.exec.hasOwnProperty('duration')  ){
              status.totalDuration += result.exec.duration;
            }
          });

          $scope.$root.$broadcast('resultListStatus', status);
      });
    }
    
    $scope.gridOptions.data = 'dataResults';
    
    
    $scope.$on('resultFilter', function(event, data) {
      var q = {}
      data.tags.forEach( function(tag){
        if( !q.$and ) q.$and = [];
        q.$and.push( {tcid: {"$regex": ("/"+tag+"/"), "$options":"i"}} );
      });
      doUpdateList(q);
      
    });
    doUpdateList({});
    /*
    $scope.gridOptions.onRegisterApi = function(gridApi){
      //set gridApi on scope
      $scope.gridApi = gridApi;
      gridApi.edit.on.afterCellEdit($scope,
        function(rowEntity, colDef, newValue, oldValue){
        
        //Somewhy this not working property!
        $scope.$root.$broadcast('resultListStatus', {lastCellEdited: 'edited result: ' + rowEntity.tcid + ' Column:' + colDef.name + ' newValue:' + newValue + ' oldValue:' + oldValue});
        
        rowEntity.$update( function( response ) {
          $scope.$root.$broadcast('resultListStatus', {error: null});
        }, function( error ) {
          $scope.$root.$broadcast('resultListStatus', {error: error});
        });
        
      });
    };*/
    
  }])
  /*
  .filter('mapStatus', function() {
    var statusHash = {
      'released': 'released',
      'develop': 'develop',
      'maintenance': 'maintenance',
      'unknown': 'unknown'
    };
    
    return function(input) {
      if (!input){
        return '';
      } else {
        return statusHash[input];
      }
    };
  })*/
  
  ;