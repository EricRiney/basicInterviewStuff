// Determine if array contains two elements which equal a certain sum?

function twoSum(nums, target_num) {
    var map = [];
    var indexnum = [];
    var index;
    for (var i = 0; i < nums.length; i++) {
        if (map[nums[i]] != null) {
            index = map[nums[i]];
            indexnum[0] = index+1;
            indexnum[1] = i+1;
            break;
        } else {
            map[target_num - nums[i]] = i;
        }
    }
    return indexnum;
}
var nums = [10,20,10,40,50,60,70]
var target = 50;
console.log(thing(nums,target));

function twoSumTwo(nums, target) {
    var len = nums.length;
    var sum;
    for (var i = 0; i < len; i++) {
        for (var j = i+1; j < len; j++) {
            if (target === nums[j]) return true;
        }
    }
    return false;
}

