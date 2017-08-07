

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
console.log(twoSum(nums,target));

