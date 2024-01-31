/*********************************
解锁部分功能
**************************************


[rewrite_local]
https:\/\/service.hhdd.com\/user\/getUserDetail.json url script-response-body https://raw.githubusercontent.com/u188/web/main/kada.js

[mitm]
hostname = service.hhdd.com:443

*************************************/


var obj = JSON.parse($response.body);
obj.data.gameLevel = 2;
obj.data.vipInfoV2.vipStatus=2;
obj.data.vipInfo.vipType=2;
obj.data.vipInfo.vipStatus= 2;
obj.data.vipInfo.vipType= 2;


$done({ body: JSON.stringify(obj) });