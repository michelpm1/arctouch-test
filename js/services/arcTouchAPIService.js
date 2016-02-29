myApp.factory('arcTouchAPI', function($base64, $http, viewShare) {
    
 var _getrouteDetails = function (id) {
     var encoded = $base64.encode("WKD4N7YMA1uiM8V:DtdTtzMLQlA0hk2C1Yi5pLyVIlAQ68");
   return $http({
      url: "https://api.appglu.com/v1/queries/findStopsByRouteId/run",
      headers : {
        "X-AppGlu-Environment":"staging",
        "Authorization": "Basic "+encoded,
        "Content-Type" : "application/json; charset=utf-8"
      },
      method: 'POST',
      data: { 
        "params":{
          "routeId": id
        }
      }
    }).then(function(response){ 
           viewShare.addRouteDetails(response.data.rows);
        
    });
      
 
 }
 
 var _getDepartures = function (id) {
     var encoded = $base64.encode("WKD4N7YMA1uiM8V:DtdTtzMLQlA0hk2C1Yi5pLyVIlAQ68");
   return $http({
      url: "https://api.appglu.com/v1/queries/findDeparturesByRouteId/run",
      headers : {
        "X-AppGlu-Environment":"staging",
        "Authorization": "Basic "+encoded,
        "Content-Type" : "application/json; charset=utf-8"
      },
      method: 'POST',
      data: { 
        "params":{
          "routeId": id
        }
      }
    }).then(function(response){ 
      viewShare.addDepartures(response.data.rows);
        // $Scope.routeDepartures = response.data.rows; 
        // console.log(routeDepartures);
        
    });
      
 
 }

  var _getLine = function(search){


    var encoded = $base64.encode("WKD4N7YMA1uiM8V:DtdTtzMLQlA0hk2C1Yi5pLyVIlAQ68");
    return $http({
      url: "https://api.appglu.com/v1/queries/findRoutesByStopName/run",
      headers : {
        "X-AppGlu-Environment":"staging",
        "Authorization": "Basic "+encoded,
        "Content-Type" : "application/json; charset=utf-8"
      },
      method: 'POST',
      data: { 
        "params":{
          "stopName": "%"+search+"%"
        }
      }
    }).then(function(response){ 
        viewShare.add(response.data.rows);
       // console.log($rootScope.details + "details");
       //console.log(response.data.rows);
        
        
    });
      

    
    }
 return {
  getrouteDetails : _getrouteDetails,
  getDepartures : _getDepartures,
  getLine : _getLine
 }

});


