function youziku46296() {
        var resultStr = $(".HanWangYenThin-Gb5").text();
        var md5 = "";
        resultStr = Trim(resultStr);
        resultStr = SelectWord(resultStr);
        md5 = $.md5("788633302c604600952c0846c5fca1c4"+"HanWangYenThin-Gb5" + resultStr);
        $.getJSON("http://www.youziku.com/webfont/CSSPOST?jsoncallback=?", { "id": md5, "guid": "788633302c604600952c0846c5fca1c4", "type": "5" }, function (json) {
            if (json.result == 0) {/*alert("需要生成");*/
                $.post("http://www.youziku.com/webfont/PostCorsCreateFont", { "name": "HanWangYenThin-Gb5", "gid": "788633302c604600952c0846c5fca1c4", "type": "5", "text": resultStr }, function (json) {
                if (json == "0") { /*alert("参数不对");*/
                } else if (json == "2") {/*alert("超过每日生成字体数的上限");*/
                } else if (json == "3") { /*alert("当前正在生成请稍后");*/
                } else {/*alert("正在生成");*/
                }
            });
            }
            else {/*alert("下载css文件");*/
                loadExtentFile("http://www.youziku.com/webfont/css?id=" + md5 + "&guid=" + "788633302c604600952c0846c5fca1c4" + "&type=5");
            }
        });
    }
    (function youziku() {
    {
        youziku46296();
        }
    })()