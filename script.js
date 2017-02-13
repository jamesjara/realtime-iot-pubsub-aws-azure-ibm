// Create Messaging client
var client = RealtimeMessaging.createClient();
 
// Set client properties
//client.setClusterUrl('//ortc-developers.realtime.co/server/2.1/');
client.setClusterUrl('https://ortc-developers.realtime.co/server/ssl/2.1/');
 
client.onConnected = function (theClient) {
  
    // client is connected, subscribe a channel, from a lamba function from AWS
    theClient.subscribe('awsChannel', true, function (theClient, channel, msg) {
        var result = JSON.parse(msg);
        var payload = result.payload;  
        if(payload.temp){
          document.getElementById('aws_temperature').innerHTML = payload.temp; 
        }
        if(payload.battery){
          document.getElementById('aws_battery').innerHTML = payload.battery; 
        }
        if(payload.time){
          document.getElementById('aws_time').innerHTML = payload.time; 
        } 
        console.log("Received message:",   result.payload); 
    }); 

}; 
 
// Establish the connection
client.connect('y4tXxe', 'asd');
