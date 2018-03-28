# amazon-connect-whitepages-api
Amazon Connect integration with the WhitePages Pro API via Node.JS lambda function 

1. Signup for whitepages Pro API: https://pro.lookup.whitepages.com/api/dashboard
2. After receiving your key, place it into the lambda function (index.js) where it says YOUR_KEY
3. Create the Node.JS lambda function and copy the code in from index.js. Note your ARN for step 5. 
4. Import the whitepages-demo.flow as a new flow in your Connect instance
5. In the imported flow, edit the "Invoke" module to replace the lambda function ARN with your own ARN from step 3. 

This demo just pulls 4 values out of the hundreds possibly returned by the reverse phone lookup. 
