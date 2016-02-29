myApp.controller('lineController', function($http, $base64, $rootScope, arcTouchAPI, $fancyModal, gmapsAPI, viewShare, $scope){
 // this is necessary because you don't know when the search comes from manually or from Root "map" it can be improved
//$scope.search = $rootScope.search;
$rootScope.showCalendar = 0;


  $scope.open = function () {
        $fancyModal.open({ templateUrl: 'partials/maps.html', controller : "mapsController" });
    };
    //setting it in rootScope because it can be open from all views
  $rootScope.help = function () {
        $fancyModal.open({ templateUrl: 'partials/help.html'});
    };

//function to fetch street routes
  $scope.getLine = function(search){
      arcTouchAPI.getLine(search).then(function(){
      //console.log(viewShare.getDetails);
      $scope.details = viewShare.getDetails.details; 
 });

};
//set Line name to root, to be possible to use in diferent views
  $scope.getDetails = function(detail){
      $rootScope.detail = detail.longName;
      //console.log ( $rootScope.detail);
      
  };
  // listening broadcast from mapsController
  $scope.$on('atualizar-input', function(event, search) {
    $scope.search = search;
    
   $scope.getLine(search);
    
});
  




 

    
    
    
  });
  
  

  

