var myChart = echarts.init(document.getElementById('main'));

$.get('https://gist.githubusercontent.com/gspinoza/297ff866a515a422eab62bf4c5b322d3/raw/10ffd1fbd0a568202653e00b566c71779501734f/AustraliaJsonMapAndOptions.json', function(ausJson) {

    // prepare json data objects
    var json = JSON.parse(ausJson);
    var ausJsonData = json["jsonMap"];
    var optionsData = json["options"];

    echarts.registerMap('AUS', ausJsonData, {
        // Australia: {
        //   // Upper left longitude
        //   left: -11,
        //   // Upper left latitude
        //   top: 25,
        //   // Range of longitude
        //   width: 15
        // }
    });

    option = {
        baseOption: {
            timeline: {
                axisType: "category",
                autoPlay: false,
                data: ["1978", "1979", "1980", "1981", "1982", "1983", "1984", "1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015"],
                label: {
                    formatter: function(s) {
                        // convert year to int
                        var year = parseInt(s);
                        // increase year by 1
                        var news = year + 1;
                        // convert year back to string
                        var s = news.toString();
                        return (new Date(s)).getFullYear();
                    }
                }
            },
            title: {
                text: 'AUS TITLE',
                subtext: 'Data from www.agriculture.gov.au',
                sublink: 'https://www.agriculture.gov.au/abares/data',
                left: 'right'
            },
            tooltip: {
                // trigger: 'item',
                // showDelay: 0,
                // transitionDuration: 0.2,
                // formatter: function(params) {
                //     //console.log(data);
                //     console.log(params);
                //     return params.seriesName + '<br/>' + params.name + ': ' + params.value;
                // }
            },
            visualMap: {
                left: 'right',
                min: 0,
                max: 2.1,
                inRange: {
                    color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
                },
                text: ['High Climate Change Impact', 'Low Climate Change Impact'], // 文本，默认为数值文本
                calculable: true
            },
            toolbox: {
                show: true,
                //orient: 'vertical',
                left: 'left',
                top: 'top',
                feature: {
                    dataView: {
                        readOnly: false
                    },
                    restore: {},
                    saveAsImage: {}
                }
            },
            series: [{
                name: 'Climate effect (%)',
                type: 'map', // type of visualization
                roam: true,
                map: 'AUS',
                emphasis: {
                    label: {
                        show: true
                    }
                }
                // 文本位置修正
                // textFixed: {
                //     Alaska: [20, -20]
                // },
            }],
        },
        // `switchableOption`s:
        options: optionsData
    };

    myChart.setOption(option);
});