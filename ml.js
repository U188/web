/*********************************
解锁部分功能
**************************************


[rewrite_local]
https://api-jiaoyu-brain.vas.lutongnet.com:8887/nldmx-mobile-api/nldmx/user/get-user url script-response-body https://raw.githubusercontent.com/u188/web/main/ml.js

[mitm]
hostname = api-jiaoyu-brain.vas.lutongnet.com

*************************************/



var obj = JSON.parse($response.body);
obj.data.orderStatus = "VIP";
obj.data.coinsNum = "10000";
$done({ body: JSON.stringify(obj) });