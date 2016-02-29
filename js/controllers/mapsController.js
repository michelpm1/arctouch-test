myApp.controller('mapsController', function($scope, $http, $base64, $rootScope, arcTouchAPI, $fancyModal, gmapsAPI, viewShare){
  $scope.map=gmapsAPI.initialize();
  $rootScope.showCalendar = 0;
   $scope.close = function () {
        $fancyModal.close();
    };
    
    
  //It's necessary to add this part here (Event and Marker) and not at the service ,or it will be in diferent scopes
   $scope.map.generic["events"] = {
            click: function (map, eventName, originalEventArgs) {
                var e = originalEventArgs[0];
                var lat = e.latLng.lat(),lon = e.latLng.lng();
                var marker = {
                    id: Date.now(),
                    coords: {
                        latitude: lat,
                        longitude: lon
                    }
                };
                //console.log(marker);
                $scope.map.generic.markers=marker;
               // console.log($scope.map.generic.markers);
                $scope.$apply();
               
            }
        
 } ;
 
 
 $scope.getReverseGeo = function(){
     
     gmapsAPI.reverseGeo($scope.map.generic.markers.coords.latitude, $scope.map.generic.markers.coords.longitude, function (results, status) {
        $scope.$apply(function(){
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[1]) {
                
                    
                    $rootScope.$broadcast('atualizar-input', results[0].address_components[1].long_name);
                    
                    
                } else {
                  //  element.text('Location not found'); //posssible if necessary
                }
            } else {
              //  element.text('Geocoder failed due to: ' + status); //posssible if necessary
            }
        });    
    });
 
 

 
 
};
    });
  
  

  

