/*********************************
解锁部分功能
**************************************


[rewrite_local]
https://api-jiaoyu-brain.vas.lutongnet.com:8887/lutong-user-api/user/get-user-info url script-response-body https://raw.githubusercontent.com/u188/web/main/ml.js

[mitm]
hostname = api-jiaoyu-brain.vas.lutongnet.com

*************************************/


var obj = JSON.parse($response.body);
obj.userInfo.product = "VIP0008";

$done({ body: JSON.stringify(obj) });