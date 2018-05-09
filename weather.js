// 通过新浪接口获取当前位置信息http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js
$.getScript('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js',function (_result) {
    if(remote_ip_info.ret !== 0){
        var country = remote_ip_info.country,
            province = remote_ip_info.province,
            city = remote_ip_info.city;
            if(city =='上海' || city =='北京' ||city =='重庆' ||city =='天津'){
                $('.location').html('<i class="iconfont icon-dingwei">&#xe603;</i>'+country+' '+city);
            }else{
                $('.location').html('<i class="iconfont icon-dingwei">&#xe603;</i>'+country+' '+province+' '+city);
            }

        var url = 'http://v.juhe.cn/weather/index?format=2&cityname='+city+'&key=035a877479dfaf4bf44f16831a8599c9';
        $.ajax(url,{
            type:"GET",
            dataType:"jsonp",
            crossDomain: true,
            success:function (data) {
                $('em').text(data.result.sk.temp+'°');
            }
        });
    }else {
        console.log('无法获取当前城市');
    }
});
