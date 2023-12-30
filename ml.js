/*********************************
解锁部分功能
**************************************


[rewrite_local]
https:\/\/api.mlinkapp.cc\/v1\/user url script-response-body https://raw.githubusercontent.com/u188/web/main/ml.js

[mitm]
hostname = api.mlinkapp.cc

*************************************/


var obj = JSON.parse($response.body);
obj = {
  "msg" : "OK",
  "data" : {
    "id" : 1740611618695692288,
    "displayName" : "",
    "expireTime" : 1705758263257,
    "phone" : "",
    "status" : 1,
    "agentNum" : 2,
    "avatar" : "",
    "level" : 3,
    "freeTime" : 172800000,
    "username" : "lanzhu",
    "role" : "general",
    "vipType" : "free",
    "userNumber" : 4897941,
    "email" : "",
    "eid" : 8691189
  },
  "code" : 0
}; 

$done({ body: JSON.stringify(obj) });