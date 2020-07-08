/* from https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript */
/**
* Get the URL parameter value
*
* @param  name {string} パラメータのキー文字列
* @return  url {url} 対象のURL文字列（任意）
*/
function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function Stamp(){
    if (is_stamped_on_this_page){
        return;
    }
    document.cookie = stmp_param + "=1; expires=Thu, 1-Jan-2030 00:00:00 GMT";
    target = document.getElementById("isStamped");
    target.innerHTML = "スタンプは押されました";
}

// パラメータの確認
var stmp_param = getParam("stmp");
if (stmp_param==null){
    alert("不明なスタンプ");
    window.location.href = "index.html";
}
var s_name = document.getElementById("stampname");
s_name.innerHTML = stmp_param;

// スタンプが押されたかの確認
var is_stamped_on_this_page=0;
site_sCookie = document.cookie.split(";");
for(var c of site_sCookie){
    var cArray = c.split("=");
    if(cArray[0] == stmp_param){
        is_stamped_on_this_page=1;
    }
}
if(is_stamped_on_this_page){
    document.getElementById("isStamped").innerHTML = "スタンプはすでに押されています"
}
