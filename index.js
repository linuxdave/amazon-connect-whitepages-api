const https = require('https');
var api_key = "YOUR_KEY";

var carrier = "notFound";
var name = "notFound";
var address = "notFound";
var mayknow = "notFound";



exports.handler = function(event, context, callback) {
    
    https.get('https://proapi.whitepages.com/3.0/phone.json?api_key=' + api_key + '&phone=' + formatPhoneNumber(event.Details.ContactData.CustomerEndpoint.Address), (res) => {
        console.log('statusCode:', res.statusCode);
        console.log('headers:', res.headers);
        var returnData = "";
        res.on('data', (d) => {
            returnData += d;
        });
        
        
        res.on('end', function () {
                            console.log(JSON.stringify(returnData));
                            try { 
                                carrier = JSON.parse(returnData).carrier;
                            } catch (err) {
                                console.log(err);
                            }
                            try { 
                                name = JSON.parse(returnData).belongs_to[0].name;
                            } catch (err) { 
                                console.log(err);
                            }
                            
                            try { 
                                address = JSON.parse(returnData).current_addresses[0].street_line_1;
                                if (address == null) { 
                                    address = "notFound";
                                }
                            } catch (err) { 
                                console.log(err);
                            }
                            
                            
                            try {  
                                mayknow = JSON.parse(returnData).associated_people[0].name;
                            } catch (err) { 
                                console.log(err);
                            }
                            console.log("Carrier:", carrier);
                            console.log("Name:", name);
                            console.log('Address:', address);
                            console.log('MayKnow:', mayknow);
    var resultMap = {
        Carrier: carrier,
        Name: name,
        Address: address,
        MayKnow: mayknow
    }

    callback(null, resultMap);
                            

        });
});
    
    
}

function formatPhoneNumber(s) {
    // we actually don't need to format any further 
  return s;
}
