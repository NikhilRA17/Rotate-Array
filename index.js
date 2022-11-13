function rotateArray(arr,k){

  let resArray = []
  let temp = arr.splice(-k)

  resArray = temp.concat(arr)
  console.log(resArray)
}

rotateArray([1,2,3,4,5,6,7],1);
rotateArray([1,2,3,4,5,6,7],2);
rotateArray([1,2,3,4,5,6,7],3);

rotateArray([-1,-100,3,99],1);
rotateArray([-1,-100,3,99],2);

