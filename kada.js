/*********************************
解锁部分功能
**************************************


[rewrite_local]
https:\/\/service.hhdd.com\/user\/getUserDetail.json url script-response-body https://raw.githubusercontent.com/u188/web/main/kada.js

[mitm]
hostname = service.hhdd.com:443

*************************************/


var obj = JSON.parse($response.body);
obj.data.gameLevel = 1;
obj.data.vipInfoV2.vipStatus=1;
obj.data.vipInfo.vipType=1;
obj.data.vipInfo.vipStatus= 1;
obj.data.vipInfo.vipType= 1;


$done({ body: JSON.stringify(obj) });