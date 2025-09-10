// let arr=[]
// %debugprint(arr)


// SMI(small integers).
// packed element
// double(float, string, function, ...)

let arr=[1,2,3]
// packed_smi_element
arr.push(6.0);
// packed Doubled element 
arr.push('one');
// packed element

arr.push[10]=8
// holey  element
console.log(arr);
console.log(arr.length);
console.log(arr[10]);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);


//bond check 
// hasownproperty(arr,10)
// hasownproperty(arr.prototype,10)
// hasownproperty(object.prototype,10)

// holes are expensive in js.

// smi>double> packed
// Holes_smi>Holes_double> Holes_packed

const arrone=new Array()
// initial holey_smi_holey element.
arrone.push[0]='H' //holey packed/element 
arrone.push[1]='H' //holey packed/element 
arrone.push[2]='H' //holey packed/element 

const arrtwo=[]
arrtwo.push('1') // smi_packed
arrtwo.push('2') // smi_packed
arrtwo.push('3') // smi_packed