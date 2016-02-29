myApp.factory('viewShare', function viewShare() { 
    var messages={};


  var _add = function(message){
   messages.details = "";
   messages.details=message;
   //console.log(messages.details);
    return messages.details;
  };
  
  
  var _addRouteDetails = function(message){
      messages.routeDetails = ""; 
      messages.routeDetails = message;
      //console.log(messages.routeDetails);
      return messages.routeDetails;
  };
  
  
  var _addDepartures = function(message){
      messages.departures = ""; 
      messages.departures = message;
      //console.log(messages.departures);
      return messages.departures;
  };
  
  // was used callback passing valus over broadcasting 
  
//   var _addReverseGeo = function(message){
//       messages.reverseGeo = ""; 
//       messages.reverseGeo = message;
//       console.log(messages.reverseGeo);
//       return messages.reverseGeo;
//   };

 
   
   
  var  _getDetails = function(){
     
      return messages;
   
    };
    
    return{
        getDetails: messages,
        addRouteDetails: _addRouteDetails,
        addDepartures: _addDepartures,
       // addReverseGeo:_addReverseGeo,
        add: _add
       
 }
     
});


 