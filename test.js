function a(){
  var arr = [];
  for(var i=0;i<3;i++){
    arr.push(
      (function(j){
        return function () {
          console.log(j);
        }
      }(i))

    )
  }
  return arr;
}

var arrr = a();
arrr[0]();
arrr[1]();
arrr[2]();

var person1 = {
  firstname : "Tej",
  lastname : "Vepa",
  getFullName : function () {
    return this.firstname + " "+ this.lastname;
  },
  getFullNameInIndianStyle : function() {
    return this.lastname + " "+ this.firstname;
  }
}

var person2 = {
  firstname : "Kiran",
  lastname : "Vepa",
  getFullName : function () {
    return this.firstname + " "+ this.lastname;
  }
}

// // function borrowing using bind
 person1.getFullNameInIndianStyle.bind(person2).call();

var logName = function () {
  if(arguments.length<=2){
    console.log(this.getFullName() + " Called with "+ (arguments[0] || "Rajahmundry") + " and " + (arguments[1] || "St Anns"));
  }
  else{
    var resultString = this.getFullName() + " lived in ";
    for(var i=0;i<arguments.length;i++){
      resultString += arguments[i] + " , ";
    }
    console.log(resultString);
  }
}


logName.bind(person1)();
logName.bind(person2)();
logName.call(person1,"Sunnyvale","Salesforce");
logName.call(person2,"Fremont","Amdocs");
logName.apply(person1,["RJY","BVRM","VZG","HYD","DALLAS","SFO"]);
logName.apply(person2, ["RJY","BVRM","DALLAS","SFO"]);

// function currying using bind
var multiplyNums = function(a,b){
  console.log(a * b);
}

var multiplyByTwo = multiplyNums.bind(this, 2);
var multiplyByThree = multiplyNums.bind(this, 3);
multiplyByTwo(3);
multiplyByThree(3);

function mapForEach(arr,fn){
  var newArray = [];
  for(var i=0;i<arr.length;i++){
    newArray.push(fn(arr[i]));
  }
  return newArray;
}


console.log(mapForEach([1,2,3], function(item) {
  return item * 2;
}));

var checkPastLimiter = function(limiter, item){
  return item > limiter;
}

var checkPastLimiterBase = function(limiter) {
  console.log(this);
  return checkPastLimiter.bind(this,limiter);
}
var gtArry = mapForEach([1,2,3], checkPastLimiterBase(1));
console.log(gtArry);
console.log(mapForEach([1,2,3], checkPastLimiterBase(2)))
