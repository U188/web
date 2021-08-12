var bodyBgs = [];
bodyBgs[0] = "B8F09A49-CF16-4013-A3EC-7D6EE676BFAB.jpeg";
bodyBgs[1] = "E86AA4F5-9053-4AAB-87EF-9D3DC27FFE2E.jpeg";
bodyBgs[2] = "F867F178-F113-42E7-965C-AFE8463A2545.jpeg";
bodyBgs[3] = "5E5FF81D-3BCB-4EB6-A515-6C7603CD965E.jpeg";
bodyBgs[4] = "6535514E-1842-404C-90A8-396AEBD90B56.jpeg";
var backbd = Math.floor(Math.random() * bodyBgs.length);
document.getElementById("bd").style = "background-image:url('https://ghproxy.com/https://raw.githubusercontent.com/U188/web/main/image/" + bodyBgs[backbd] + "');"
var timer;
var qrcode = document.getElementById("qrcode")
var loginUrl = ""
var success = "https://ghproxy.com/https://raw.githubusercontent.com/U188/JDC/master/ok.svg";
var jumpapp = document.getElementById('jumpapp')
var hd = document.getElementById("hd")

function showQrcode() {
    var xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            data = JSON.parse(xmlhttp.responseText)
            if (data.url && data.url.indexOf("http") != -1) {
                qrcode.src = "data:image/png;base64," + data.img
                loginUrl = data.url
            } else {
                showQrcode()
            }
        }
    }
    xmlhttp.open("GET", "/api/login/qrcode", true);
    xmlhttp.send();
}
showQrcode()

function login() {
    var xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var results = xmlhttp.responseText
            console.log(results)
            switch (results) {
                case "授权登录未确认":
                    break;
                case "登录":
                    setTimeout(() => {
                        window.location.href = "/admin"
                    }, 1000);
                case "成功":
                    //hd.style.visibility = "hidden"; 
                    qrcode.src = success
                    clearInterval(timer)
                    break;
                default:
                    showQrcode()
                    break;
            }
        }
    }
    xmlhttp.open("GET", "/api/login/query", true);
    xmlhttp.send();
}

function polling() {
    timer = setInterval(() => {
        login()
    }, 1500);
}
polling()
jumpapp.addEventListener('click', function() {
    if (loginUrl) {
        window.location.href = `openapp.jdmobile://virtual/ad?params=${encodeURI( 
                JSON.stringify({ 
                    category: 'jump', 
                    des: 'ThirdPartyLogin', 
                    action: 'to', 
                    onekeylogin: 'return', 
                    url: loginUrl, 
                    authlogin_returnurl: 'weixin://', 
                    browserlogin_fromurl: window.location.host, 
                }) 
            )}`;
    } else {
        alert('还没加载好，请稍后重试');
    }
})