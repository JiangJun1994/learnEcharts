/**
 * Created by jiangjun on 2017/3/6.
 */
var echarts = require('echarts');
//初始化echarts项目
var mychart=echarts.init(document.getElementById("main"))
var option={
    title:{
        text:"echarts入门"
    },
    subtitle:{
        text:"detail"
    },
    legend:{
        data:["sales"]
    },
    xAxis:{
        data:["aa","bb","cc","dd","ee","ff"]
    },
    yAxis:{},
    series:[{
        name:'sales',
        type:'bar',
        data:[5,10,15,20,25,30]
    }]
};
mychart.setOption(option);