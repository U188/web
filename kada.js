/*********************************
解锁部分功能
**************************************


[rewrite_local]
https:\/\/service.hhdd.com\/user\/getUserDetail.json url script-response-body https://raw.githubusercontent.com/u188/web/main/kada.js

[mitm]
hostname = service.hhdd.com,service.hhdd.com:443
*************************************/


var obj = JSON.parse($response.body);
obj={
  "msg" : "成功",
  "data" : {
    "readInfo" : {
      "readNumber" : 0,
      "totalCount" : 2,
      "honorNumber" : 0,
      "allRanking" : 0,
      "readTimes" : 88,
      "totalWords" : 0,
      "ranking" : 0,
      "storyTime" : 0,
      "storyCount" : 0
    },
    "gameLevel" : 2,
    "vipInfoV2" : {
      "withholdingTime" : 0,
      "remainingDays" : 0,
      "payFlag" : 0,
      "channel" : 0,
      "vipStatus" : 2,
      "signStatus" : 0,
      "priority" : 0,
      "remindExpire" : 0,
      "level" : 2,
      "remindExpireDays" : 0,
      "endTime" : 0,
      "withholdingOrderPrice" : 0,
      "withholdingPayPrice" : 0,
      "beginTime" : 0,
      "remindRenewal" : 0,
      "status" : 2,
      "vipType" : 2
    },
    "medalList" : null,
    "medalNum" : 3,
    "coinInfo" : {
      "consumeCoin" : 0,
      "coin" : 100,
      "voucherCoin" : 0
    },
    "createDays" : 1,
    "newUserDate" : 7,
    "vipList" : [

    ],
    "elfInfo" : {
      "level" : 2
    },
    "userInfo" : {
      "birthday" : "2021-08-31",
      "status" : 2,
      "schoolId" : -100,
      "appHeadVersion" : 0,
      "inactiveDays" : 0,
      "schoolAwardStatus" : 0,
      "wechatOfficialSubscribe" : 0,
      "baseTag" : 4098,
      "subscribePlan" : false,
      "toast" : true,
      "collectId" : 700001,
      "headUrl" : "https://image.hhdd.com/user/systemHead/0/1/0/boy2.png",
      "gender" : "m",
      "level" : 10,
      "nick" : "嘻嘻",
      "ageType" : 4,
      "loginName" : "17628608281",
      "age" : 3,
      "createDate" : 1706656529000,
      "schoolPeriod" : 0,
      "ageTypeFromBirthday" : 4,
      "isUserSet" : 100,
      "userId" : 63068164
    },
    "vipInfo" : {
      "withholdingTime" : 0,
      "remainingDays" : 2,
      "payFlag" : 0,
      "channel" : 0,
      "vipStatus" : 2,
      "signStatus" : 2,
      "priority" : 0,
      "remindExpire" : 100,
      "level" : 4,
      "remindExpireDays" : 100,
      "endTime" : 0,
      "withholdingOrderPrice" : 0,
      "withholdingPayPrice" : 0,
      "beginTime" : 0,
      "remindRenewal" : 0,
      "status" : 2,
      "vipType" : 2
    }
  },
  "code" : 200
}


$done({ body: JSON.stringify(obj) });