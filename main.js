// TypeScript language 
function MinMax(array) {
    var miniValue = array[0];
    var maxiValue = array[0];
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var num = array_1[_i];
        if (num < miniValue) {
            miniValue = num;
        }
        else if (num > maxiValue) {
            maxiValue = num;
        }
    }
    return [miniValue, maxiValue];
}
var array = [30, 11, 8, 5, 1];
var _a = MinMax(array), minimumValue = _a[0], maximumValue = _a[1];
console.log(" The required Minimum value is :", minimumValue);
console.log("The required Maximum value is :", maximumValue);
