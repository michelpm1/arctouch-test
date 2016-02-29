myApp.factory('gmapsAPI', function($base64, $http, $rootScope, viewShare) {

//constructor
function _initialize(){
    
var mapstartlocaltion = {

        generic: {
            center: {
                latitude:-27.59251174,
                longitude:-48.5394001,
                

            },
            zoom: 14,
            markers: ""
            
        } 
  
}
  return mapstartlocaltion ;
} 

function _reverseGeo(lat, lng, callback){
  // console.log("geo");
    
        
                var geocoder = new google.maps.Geocoder();
                var latlng = new google.maps.LatLng(lat, lng);
                return geocoder.geocode({ 'latLng': latlng }, callback);
            
           
        

}

return {
  initialize : _initialize,
  reverseGeo : _reverseGeo
  
 }
 
});