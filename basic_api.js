/**
 *
 * 已知有字符串foo=”get-element-by-id”,写一个function将其转化成驼峰表示
 */
var foo = 'get-element-by-id',
    toHump = function(str){
        var arr = str.split('-'),
            len = arr.length,
            i = 1,
            humpStr = arr[0];
        for( i; i<len; i++ ){
            var curStr = arr[i];
            humpStr += curStr.charAt(0).toUpperCase() + curStr.substr(1);
        }
        return humpStr;
    };
console.log(toHump(foo));

/**
 * var numberArray = [3,6,2,4,1,5];
 * 1) 实现对该数组的倒排，输出[5,1,4,2,6,3]
 * 2) 实现对该数组的降序排列，输出[6,5,4,3,2,1]
 */
var numberArray = [3,6,2,4,1,5];
//排序规则：降序
var sortRule = function(a, b){
    return b - a;
};
console.log(numberArray.reverse());
console.log(numberArray.sort(sortRule));

/**
 * 输出今天的日期，以YYYY-MM-DD的方式，比如今天是2014年9月26日，则输出2014-09-26
 */
var getDate = function(){
    var date = new Date(),
        year = date.getFullYear(),
        month = date.getMonth(),
        day = date.getDate();
    month = month > 10 ? month : '0' + month;
    day = day > 10 ? day : '0' + day;
    console.log(year + '-' + month + '-' + day);
};
getDate();

/**
 * 将字符串”<tr><td>{$id}</td><td>{$name}</td></tr>”中的{$id}替换成10，
 * {$name}替换成Tony （使用正则表达式）
 */
var regFunc = function(str){
    var targetStr = str.replace(/{\$name}/g, '10').replace(/{\$id}/g, 'Tony');
    console.log(targetStr);
};
regFunc('<tr><td>{$id}</td><td>{$name}</td></tr>');


/**
 * 为了保证页面输出安全，我们经常需要对一些特殊的字符进行转义，
 * 请写一个函数escapeHtml，将<, >, &, “进行转义
 */
var escappeHtml = function(str){
    var escapeStr = str.replace(/[<>&"]/g, function(match){
        switch (match) {
            case '<':
                return '&lt;';
            case '>':
                return '&gt;';
            case '&':
                return '&amp;';
            case '"':
                return '&quot;';
        }
    });
    return escapeStr;
};
console.log(escappeHtml('4>3<5&e"dd"'));


/**
 * 用js实现随机选取10–100之间的10个数字，存入一个数组，并排序。
 */
var sortRule1 = function(a, b){
    return a - b;
};
var getRandom = function(startNum, endNumber, numbers){
    var i = 0,
        j = startNum,
        originArr = [],
        randomArr = [];
    for( j; j<=endNumber; j++ ){
        originArr.push(j);
    };
    for( i; i<numbers; i++ ){
        var random = Math.ceil(Math.random()*(endNumber - startNum) + startNum);
        randomArr.push(random);
        originArr.splice(random - startNum, 1);
    };
    randomArr.sort(sortRule1);
    return randomArr;
};
console.log(getRandom(10, 100, 10));