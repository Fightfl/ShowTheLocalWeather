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
//跨域ajax请求使用jsonp格式
        var url = 'http://v.juhe.cn/weather/index?format=2&cityname='+city+'&key=035a877479dfaf4bf44f16831a8599c9';
        $.ajax(url,{
            type:"GET",
            dataType:"jsonp",
            crossDomain: true,
            success:function (data) {
                var icon;
                switch (data.result.today.weather){
                    case '晴':
                        icon = '&#xe6ec;';
                        break;
                    case '多云':
                        icon = '&#xe638;';
                        break;
                    case '阴':
                        icon = '&#xe607;';
                        break;
                    case '阵雨':
                        icon = '&#xe6eb;';
                        break;
                    case '雷阵雨':
                        icon = '&#xe6eb;';
                        break;
                    case '雷阵雨伴有冰雹':
                        icon = '&#xe6eb;';
                        break;
                    case '雨夹雪':
                        icon = '&#xe6ef;';
                        break;
                    case '小雨':
                        icon = '&#xe622;';
                        break;
                    case '中雨':
                        icon = '&#xe6e9;';
                        break;
                    case '大雨':
                        icon = '&#xe6e9;';
                        break;
                    case '暴雨':
                        icon = '&#xe6e9;';
                        break;
                    case '大暴雨':
                        icon = '&#xe6e9;';
                        break;
                    case '特大暴雨':
                        icon = '&#xe6e9;';
                        break;
                    case '阵雪':
                        icon = '&#xe6ef;';
                        break;
                    case '雾':
                        icon = '&#xe6f2;';
                        break;
                    case '霾':
                        icon = '&#xe6f2;';
                        break;
                    default:
                        icon = '&#xe638;';
                }
                $('#bigWeather').html('<em>'+data.result.sk.temp+'°'+'</em>'+
                    '<i class="iconfont-today icon-yintian1">'+icon+'</i><b>'+
                    data.result.today.weather+'</b>');
                $('.refresh_time>p').text("更新于 "+data.result.sk.time);
                $('.humidity').html('<h4><i class="iconfont-humidity-wind icon-shidu">&#xe60a;</i>湿度 '+data.result.sk.humidity+
                        '</h4><h4><i class="iconfont-humidity-wind icon-fengsu">&#xe605;</i>'+data.result.sk.wind_direction+' '+data.result.sk.wind_strength+
                    '</h4><h4>紫外线强度: '+data.result.today.uv_index+'</h4>');
            }
        });
    }else {
        console.log('无法获取当前城市');
    }
});
