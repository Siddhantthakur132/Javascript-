// Declare a variable in JS
let a=20;
console.log(a);

//data type in JS

// primitive data type 

//number , boolean,bigint,NULL, undefined ,symbol,string 

let account_balance=2000;
console.log(account_balance);
//typeof
console.log(typeof(account_balance)); //number 

let str="siddhant";
console.log(str);
console.log(typeof(str)); //string 

let st=true;
console.log(st);
console.log(typeof st);//boolean 

let un; //value assign nhi ki hai variable declare kiya but not initialize 
console.log(un);
console.log(typeof un);//undefined 

let n=null; //jaan pochkar kuch nhi dala hai 
console.log(n);
console.log(typeof n);//object  error in js 

let c=22234264988958389448342323323272n;
console.log(c);//bigint
console.log(typeof c);

//largest and smallest number in 64 bit and how to store a negative number  ???

// let take a example we are going to store a three bit number the first position the first bit is called as sign bit if sign bit is 0 the number is consider as positive number 0 1 1 =3 if first but is 1 than 1 1 than the number is negative 1 1 1 1=-3 . Remaing bit show the number   we can also calculate using this formula 

//for maxminum number pow(2,3)-1=7; 2 ki pow 3 -1
//for minimum number -pow(2,3)-1;=-7;
//--------------------------------------------------------------------------------

//  NON PRIMITIVE DATA TYPE 

//Array ,Object,Function ,date 
let arr=[2,3,4,6,"sidd"];
console.log(arr);
console.log(typeof arr); //object 

let obj={ //key value pair
  Name:"siddhant",
  Age:20,
  Enroll:"0112CS221132"
}
console.log(obj); //type of obj 
//object puri information nikaal kr de deta hai better understanding hoti hai konsi cheej kiya hai 

//we can asssign function object to variable like object in js 

//function 

let fun=function(){
  console.log("Hello Coders");
  return  10;
}
//caling
fun();
console.log(typeof fun)//function 
//----------------------------------------------------------------

//Type Conversion :- ik type ko dusre type me convert krna 

let balance="100";//string to nyumber
let num=Number(balance);
console.log(typeof num); //number type
console.log(typeof balance); //string 

let bal="100xx";//string to nyumber NAN 
console.log(Number(bal)) ; //NAN 


//convert bool to number a
let b=true;
console.log(Number(b));//1 
let d=false;
console.log(Number(d));//0

//NuLL
let ab=null;
console.log(Number(ab));//op 0 means baha kuch rakha nhi hai 

let abc=NaN;
console.log(typeof abs); //undefinded 

//undefined 
let v;
console.log(Number(v));//NAN 

//stirng me conversion 
let at=100;
console.log(typeof String(at));//string 

//bool to string 

let f=true;
console.log(String(f)); // now true is not ture its "true"

//covert to boolean its gives true if somthing is present if tghe string is empty its give false 

let bc="str";
console.log(Boolean(bc));//bollean type op true 

let bcd="";
console.log(Boolean(bcd));//false 

let bcde;
console.log(Boolean(bcde));//false 

let bcdef=null;
console.log(Boolean(bcdef)); //false

//---------------------------------------------------------------

//Arthematic operator +,-,*,/,%

// BODMAS

// Divide and Multiply same presidence solve left to right
// plus minus same presidence solve left to right

// incriment or decriment operator 
//preincrement or predecrement --13 ,++13;
//post increment 13++, postdecrement 13--;

let sum=14;
console.log(sum++);//14
console.log(++sum);//16


//---------------------------------------------------------------------------

//Assignment operator

// =,-=,+=
let summ=10;
summ-=10;
console.log(summ);//0
