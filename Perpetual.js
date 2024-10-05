const fs = require('fs'); // 引入Node.js的文件系统模块，但在这个脚本中并未使用到。
const path = require('path'); // 引入Node.js的path模块，用于处理文件和目录路径，这里同样未使用。

const { Solar, Lunar } = require('lunar-javascript');
    const solar = Solar.fromDate(new Date());
    const lunar = Lunar.fromDate(new Date());
    const shuJiu = lunar.getShuJiu();
    const shuJiuString = shuJiu ? shuJiu.toFullString() : 'N/A';
    const Fu = lunar.getFu();
    const FuString = Fu ? Fu.toFullString() : 'N/A';

    const PerpetualOutput = {
        SolarYear: solar.getYear().toString() + '年',
        SolarMonth: solar.getMonth().toString() + '月',
        SolarDay: solar.getDay().toString() + '日',
        WeekDay: '星期' + solar.getWeekInChinese(),
        lunarMonth: lunar.getMonthInChinese() + '月',
        lunarDay: lunar.getDayInChinese(),
        ganzhiYear: lunar.getYearInGanZhiByLiChun() + '年',
        ganzhiMonth: lunar.getMonthInGanZhiExact() + '月',
        ganzhiDay: lunar.getDayInGanZhiExact() + '日',
        yuexiang: lunar.getYueXiang() + '月',
        wuhou: lunar.getWuHou(),
        hou: lunar.getHou(),
        shujiu: shuJiuString,
        fu: FuString,
    };
    
    module.exports = PerpetualOutput;
