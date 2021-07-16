const twoSum = function(nums, target) {
  let firstPointer = 0;
  let secondPointer = 1;
  

      for(secondPointer; secondPointer < nums.length; secondPointer++) {

          if((nums[firstPointer] + nums[secondPointer]) === target) {
            console.log(firstPointer, secondPointer)
            return [firstPointer, secondPointer]
        };

        if(secondPointer + 1 === nums.length && firstPointer < nums.length - 1) {
          firstPointer++;

          // secondPointer will get shifted by the loop
          secondPointer = firstPointer;
        }
      };
  
};