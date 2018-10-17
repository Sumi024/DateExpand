Date.prototype.toLocalTime = toLocalTime;
Date.prototype.getTimeZone = getTimeZone;
Date.prototype.translateTime = translateTime;

function toLocalTime(date){
    // Format yyyy-mm-dd hh:mm:ss
    var timeZone = Number(getTimeZone()) * 10 * 60 * 60;
    date = new Date(Number(date) + timeZone);
    return date.getFullYear().nString(4) + '-' + (date.getMonth() + 1).nString(2) + '-' + date.getDate().nString(2) + ' ' + date.getHours().nString(2) + ':' + date.getMinutes().nString(2) + ':' + date.getSeconds().nString(2);
}

function getTimeZone(){
    var reg = /(?:GMT)([\+\-0-9]+)/i;
    var time = new Date().toString();
    return time.match(reg)[1];
}

function translateTime(data){
    // Format yyyy-mm-dd hh:mm:ss
    return data.replace(/\-+/g, '/');
}