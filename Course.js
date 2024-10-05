const fs = require('fs');
const path = require('path');

// 读取JSON文件
const rawData = fs.readFileSync(path.join(__dirname, 'courses.json'));
const courses = JSON.parse(rawData);

 // 获取当前日期
 const currentDate = new Date(); // 获取当前日期
   
 // 设置学期的第一天
 const semesterStart = new Date('2024-09-03');
 
 // 计算当前是学期的第几周
 const weekNumber = Math.ceil((currentDate - semesterStart) / (1000 * 60 * 60 * 24 * 7)) + 1;
 
 // 计算当前是周几
 const weekDay = currentDate.getDay();
 let dayOfWeek = weekDay === 0 ? 7 : weekDay; // 调整为1表示周一，7表示周日
 
 // 用于输出当天课程的数组
 let todaySchedule = [
   {lesson: 1, course: {}},
   {lesson: 2, course: {}},
   {lesson: 3, course: {}},
   {lesson: 4, course: {}},
   {lesson: 5, course: {}}
 ];
 
 // 遍历课程并填充当天课程
 courses.courses.forEach(course => {
   course.classroom.forEach(classroom => {
     if (classroom.dayOfWeek === dayOfWeek && classroom.week.includes(weekNumber)) {
       todaySchedule[classroom.lesson - 1].course = {
         name: course.courseName,
         room: classroom.room,
         teacher: course.teacher
       };
     }
   });
 });
 
 // 获取今天的日期字符串
 const todayYear = currentDate.getFullYear();
 const todayMonth = currentDate.getMonth() + 1;
 const todayDay = currentDate.getDate();
 
 // 创建包含日期、周数和周几的JSON对象
 const dateInfo = {
   todayDate: todayYear + '年' + todayMonth + '月' + todayDay + '日',
   weekNumber:'第' + weekNumber + '周',
   dayOfWeek: dayOfWeek === 1 ? '星期一' : dayOfWeek === 2 ? '星期二' : dayOfWeek === 3 ? '星期三' : dayOfWeek === 4 ? '星期四' : dayOfWeek === 5 ? '星期五' : dayOfWeek === 6 ? '星期六' : '星期日'
 };
 
 // 转换todaySchedule为新的格式
 const formattedSchedule = {};
 ['1', '2', '3', '4', '5'].forEach(lesson => {
   formattedSchedule[`course${lesson}`] = todaySchedule[parseInt(lesson) - 1].course || {};
 });
 
 // 将dateInfo和formattedSchedule添加到output中
 const CourseOutput = {
   dateInfo: dateInfo,
   schedule: formattedSchedule
 };
 
 // 输出课程表为JSON
 //console.log(JSON.stringify(CourseOutput, null, 2));


 module.exports = CourseOutput;