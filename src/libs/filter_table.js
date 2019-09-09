export default function compareObject(obj1, obj2) {
    //Object.getOwnPropertyNames():方法返回一个指定对象所有自身属性的属性名（包括不可枚举属性但不包括Symbol值作为名称的属性）组成的数组。
    //对象内置属性方法:Object.keys()；该方法返回一个数组，数组内包括对象内可枚举属性以及方法名称。数组中属性名的排列顺序和使用 for...in 遍历该对象时返回的顺序一致。
    var attrs1 = Object.keys(obj1);
    var attrs2 = Object.keys(obj2);
    if (attrs1.length != attrs2.length) {
        return false;
    }
    for (var j = 0; j < attrs1.length; j++) {
        var attrNames = attrs1[j];
        if (obj1[attrNames] != obj2[attrNames]) {
            return false;
        }
    }
    return true;
}