/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
    if (nums.length === 0) {
        return 0;
    }
    x = 1;
    counter = 0;
    for (let i = 0; i <= 100; i++) {
        for (let y = 0; y < nums.length; y++) {
            if (nums[y] >= x) {
                counter++;
            }
        }
        if (x === counter) {
            return x;
        } else {
            counter = 0;
            x++;
        }

    }
    return -1;
};