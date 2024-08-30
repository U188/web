/*********************************
解锁部分功能
**************************************


[rewrite_local]
https:\/\/api.xiaokoudai.cn\/api\/xdjz\/client\/login url script-response-body https://raw.githubusercontent.com/u188/web/main/kada.js

[mitm]
hostname = api.xiaokoudai.cn
*************************************/


var obj = JSON.parse($response.body);
obj.data={
    
    data.user.freeAiBookingLimit=0;
    data.user.__v=1;
    data.user.freeAiBookingNum=20;
}



$done({ body: JSON.stringify(obj) });