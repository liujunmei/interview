/**
 * 实现一个函数clone，可以对JavaScript中的5种主要的数据类型
 * （包括Number、String、Object、Array、Boolean）进行值复制
 */
Object.prototype.clone = function(){
    var cloneObj = this.constructor === Array ? [] : {};
    for( var i in this){
        cloneObj[i] = typeof this[i] === 'Object' ? this[i].clone() : this[i];
    };
    return cloneObj;
};
var obj = {
    a: [1,2,3],
    b: {
        b1: [
            {
                b11: 'b11',
                b12: 'b12'
            }, 12, '123'
        ],
        b2: {
            b21: 1243
        }
    },
    c: 134
};
console.log(obj.clone());

/**
 * 消除一个数组里面重复的元素
 * [1,2,3,3,4,4,5,5,6,1,9,3,25,4] ===>  [1,2,3,4,5,6,9,25]
 */
var deRepeat = function(arr){
    var len = arr.length,
        i = 0,
        flagObj = {},
        targetArr = [];
    for( i; i<len; i++ ){
        var cur = arr[i];
        if( flagObj[cur] === undefined ){
            targetArr.push(cur);
            flagObj[cur] = 1;
        };
    };
    return targetArr;
};
var repeatArr = [1, 2, 3, 3, 4, 4, 5, 5, 6, 1, 9, 3, 25, 4];
console.log(deRepeat(repeatArr));

/**
 * 小贤是一条可爱的小狗(Dog)，它的叫声很好听(wow)，每次看到主人的时候就会乖乖叫一声(yelp)。从这段描述可以得到以下对象：
 * function Dog() {
 *      this.wow = function() {
 *          alert('Wow');
 *      }
 *      this.yelp = function() {
 *          this.wow();
 *      }
 * }
 * 小芒和小贤一样，原来也是一条可爱的小狗，可是突然有一天疯了(MadDog)，一看到人就会每隔半秒叫一声(wow)地不停叫唤(yelp)。
 * 请根据描述，按示例的形式用代码来实。（继承，原型，setInterval）
 */
function Dog(){
    this.wow = function(){
        alert('wow');
    };
    this.yelp = function(){
        this.wow();
    };
};
function MadDog(){
    this.yelp = function(){
        var _this = this;
        setInterval(function(){
            _this.wow();
        }, 500);
    }
};
MadDog.prototype = new Dog();//原型链实现继承
MadDog.prototype.constructor = MadDog;

var dog = new Dog();
dog.yelp();
var madDog = new MadDog();
madDog.yelp();

/**
 * 下面这个ul，如何点击每一列的时候alert其index?
 * <ul id=”test”>
 * <li>这是第一条</li>
 * <li>这是第二条</li>
 * <li>这是第三条</li>
 * </ul>
 */
var alertIndex = function(){
    var liList = document.getElementById('test').getElementsByTagName('li'),
        len = liList.length,
        i = 0;
    for( i; i<len; i++ ){
        liList[i].onclick = function(i){
            return function(){
                alert(i);
            };
        }(i);
    }
};