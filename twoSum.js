function twoSum(nums, target_num) {
    var map = [];
    var indexnum = [];
    for (var x = 0; x < nums.length; x++) {
        if (map[nums[x]] != null){
            index = map[nums[x]];
            indexnum[0] = index+1;
            indexnum[1] = x+1;
            break;
        } else {
            map[target_num - nums[x]] = x;
        }
    }
    return indexnum;
}
var nums = [10,20,10,40,50,60,70]
var target = 50;
console.log(twoSum(nums,target));

