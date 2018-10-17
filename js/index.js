/*
 * creater : Sumi
 * time: 2018/10/17
 */

Date.prototype.toLocalTime = toLocalTime;
Date.prototype.getTimeZone = getTimeZone;
Date.prototype.translateTime = translateTime;

function toLocalTime(date,status){
    // Format yyyy-mm-dd hh:mm:ss
    var timeZone = Number(getTimeZone()) * 10 * 60 * 60;
    if(status){
        timeZone = - timeZone;
    }
    date = new Date(Number(date) + timeZone);
    return date.getFullYear().nString(4) + '-' + (date.getMonth() + 1).nString(2) + '-' + date.getDate().nString(2) + ' ' + date.getHours().nString(2) + ':' + date.getMinutes().nString(2) + ':' + date.getSeconds().nString(2);
}

function getTimeZone(){
    var reg = /(?:GMT)([\+\-0-9]+)/i;
    var time = new Date().toString();
    return time.match(reg)[1];
}

function translateTime(date){
    // Format yyyy-mm-dd hh:mm:ss
    return data.replace(/\-+/g, '/');
}


/*
 * 通过类似注解的形式，处理时间输出的模式
 * 如：format => yyyy-mm-dd hh-mm-ss , output => 2018-10-17 17:02:03
 * 默认注解字段: 年 => y, 月 => m, 天 => d, 时 => h, 分 => m, 秒 => s
 */
function format(date, format){

}