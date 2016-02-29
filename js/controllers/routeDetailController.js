myApp.controller('routeDetailController', function($scope, $http, $base64, $rootScope, $fancyModal, viewShare, departuresID, arcTouchAPI, checkRoute){
 

 if (checkRoute == 0 ){
  arcTouchAPI.getDepartures(departuresID).then(function(){
      //console.log(viewShare.getDetails);
      $scope.routeDepartures = viewShare.getDetails.departures; 
      //console.log($scope.departures);
      $scope.routeID = departuresID;
 });
  
};
 if (checkRoute == 1 ){
  arcTouchAPI.getrouteDetails(departuresID).then(function(){
      //console.log(viewShare.getDetails);
      $scope.routedetails = viewShare.getDetails.routeDetails; 
      //console.log($scope.routedetails);
      
 });
 
};
  $rootScope.showCalendar = 1;
   
    
//$scope.routeDetails = $rootScope.routeDetails; // json data

//show more functionality

var pagesShown = 1;

var pageSize = 4;

$scope.paginationLimit = function(data) {
 return pageSize * pagesShown;
};

$scope.hasMoreItemsToShow = function() {
 return pagesShown < ($rootScope.routeDetails.length / pageSize);
};

$scope.showMoreItems = function() {
 pagesShown = pagesShown + 1;       
}; 
    
});