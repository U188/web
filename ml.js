/*********************************
解锁部分功能
**************************************


[rewrite_local]
https:\/\/api.mlinkapp.cc\/v1\/user url script-response-body https://raw.githubusercontent.com/u188/web/main/ml.js

[mitm]
hostname = api.mlinkapp.cc

*************************************/


var obj = JSON.parse($response.body);
obj.data.level = 3;
obj.data.expireTime = 4102311455000;

$done({ body: JSON.stringify(obj) });