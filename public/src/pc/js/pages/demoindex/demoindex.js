// $('.fnode').hide()

var libs = require('libs/libs')
var __ = require('lodash')


$('.dnode').click(function(){
    $(this).siblings(".fnode").toggle()
})

function mkQrCode(elem,content){
    if(!elem) return;
    if(!content) return;
    console.log(content);
    var qrcode = new QRCode(elem, {
       width : 80,//设置宽高
       height : 80
    });
    qrcode.makeCode(content);
}


//二维码生成
$('.qrcode').each(function(){
     $(this).html("");
    var cnt = $(this).attr('value');
    mkQrCode(this, cnt);
})
// $('.qrcode').on('click', function(){
//     if($(this).find('canvas').length){
//         $(this).html('二维码');
//     }else{
//         var cnt = $(this).attr('value');
//         mkQrCode(this, cnt);
//     }
// })

//英文目录映射中文
var cl_json = require('./catalog.json')  //目录英文名，中文名映射json文件
var tmp = Object.keys(cl_json)
$('.catalog').each(function(i, item){
    var title = $(item).html()
    if (__.indexOf(tmp, title)>-1){
        $(item).html(cl_json[title])
    }
})
