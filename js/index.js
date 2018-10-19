/*
 * creater : Sumi
 * time: 2018/10/17
 */

Date.prototype.toLocalTime = toLocalTime;
Date.prototype.getTimeZone = getTimeZone;
Date.prototype.format = format;

const map = {
    year : {
        reg : /y+/ig,
        value : function (date) {
            return date.getFullYear();
        }
    },
    month : {
        reg : /M+/g,
        value : function (date) {
            return date.getMonth() + 1;
        }
    },
    day : {
        reg : /d+/ig,
        value : function (date) {
            return date.getDate();
        }
    },
    hour : {
        reg : /h+/ig,
        value: function (date){
            return date.getHours();
        }
    },
    minute : {
        reg : /m+/g,
        value : function (date){
            return date.getMinutes();
        }
    },
    second : {
        reg : /s+/ig,
        value : function (date) {
            return date.getSeconds();
        }
    }
};

/*
 * 解决一个本地时与国际时(UTC)的转换
 * date: Date 类型,format 输出格式 'yyyy-MM-dd hh:mm:ss', status : boolean 类型(true:UTC转local,false:local转UTC)
 * TODO 支持Date类型输出 format='Date'
 */

function toLocalTime(date,format,status){
    // Format yyyy-mm-dd hh:mm:ss
    var timeZone = Number(getTimeZone()) * 10 * 60 * 60;
    if(status){
        timeZone = - timeZone;
    }
    date = new Date(Number(date) + timeZone);
    return date.format(format);
}

/*
 * 获取当地时区
 */

function getTimeZone(){
    var reg = /(?:GMT)([\+\-0-9]+)/i;
    var time = new Date().toString();
    return time.match(reg)[1];
}

/*
 * 通过类似注解的形式，处理时间字串化输出的值
 * 如：format => yyyy-MM-dd hh-mm-ss , output => 2018-10-17 17:02:03
 * 默认注解字段: 年 => y, 月 => M, 天 => d, 时 => h, 分 => m, 秒 => s
 */
function format(format){
    var _this = this;
    for(var key in map){
        if(map[key].reg.test(format)) {
            format.match(map[key].reg).forEach(function (value) {
                format = format.replace(map[key].reg, numToString(map[key].value(_this), value.length));
            });
        }
    }
    return format;
}

function numToString(int , length){
    var str = int.toString();
    if (str.length < length) {
        for(var i = 0; i < length - str.length; i ++){
            int = '0' + int;
        }
        return int;
    }
    else {
        return str;
    }
}