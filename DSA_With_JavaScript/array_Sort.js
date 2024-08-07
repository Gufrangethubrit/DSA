let arr = [42,36,5,65,11,9,45,26,77,36,2,4,15];
for(i=0;i<arr.length;i++){
    for(j=0;j<arr.length;j++){
        if(arr[j] > arr[j+1]){
            let temp = arr[j+1];   //temp =36
            arr[j+1] = arr [j];    // arr[1] = 42 
            arr[j] = temp;         // arr [0] = 36
        }
    }
    
}
console.log(arr)