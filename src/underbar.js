(function() {
  'use strict';

  window._ = {};

  // Returns whatever value is passed as the argument. This function doesn't
  // seem very useful, but remember it--if a function needs to provide an
  // iterator when the user does not pass one in, this will be handy.
  
  //function should take in a value as the argument
  _.identity = function(val) { 
    //return the value passed
    return val;
  };

  
  /**
   * COLLECTIONS
   * ===========
   *
   * In this section, we'll have a look at functions that operate on collections
   * of values; in JavaScript, a 'collection' is something that can contain a
   * number of values--either an array or an object.
   *
   *
   * IMPORTANT NOTE!
   * ===========
   *
   * The .first function is implemented for you, to help guide you toward success
   * in your work on the following functions. Whenever you see a portion of the
   * assignment pre-completed, be sure to read and understand it fully before
   * you proceed. Skipping this step will lead to considerably more difficulty
   * implementing the sections you are responsible for.
   */

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.

  /* First should:
  - be able to pull out the first element of an array
      array[0] - first element of the array
  - accept an index argument
      function(array, n) - n equals index argument
  - return empty array if zero is passed in as the index
      array.slice(0,n)
  - return all the array's elements if the index argument is larger than the length of the array
      array.slice(0,n)
      
  */

//function should take in an array and an index as arguments
  _.first = function(array, n) { 
    //if no index argument is passed
    if(n === undefined){
      //return the first element in the array
      return array[0];
    //when an index argument is passed
    }else{
      //return the same number of elements from the beginning
      //(when n = 0 - return empty array, when index passed is larger than the length of the array - return all array elements)
      return array.slice(0, n);
    }
  };

  
/* _.first shorthand:

_.first = function(array, n){
  return n === undefined ? array[0] : array.slice(0,n);
};



/* Last should:
- pull the last element from an array
    array[array.length-1]
- accept an index argument
    function(array, n) - n equals index argument
- return empty array if zero is passed in as the index
    array.slice(0,n)
- return all the array's elements if the index is larger than the length of the array
    array.slice(Math.max(0, array.length -n))
    

*/

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.

  //function should take in an array and an index as arguments
  _.last = function(array, n) {
  // if no index argument is passed
    if(n === undefined){
      //return the last element in the array
      return array[array.length-1];
  // when an index argument is passed
    }else{
      // return the same number of elements starting from the end of the array
      // (when n = 0 - return empty array, when index passed is larger than the length of the array - return all array elements)
      return array.slice(Math.max(0, array.length - n)); 
          //Math.max utilized in order to negate the negative value that would be created when an index that is passed is larger than the array length
              //array.slice(0) - return entire array
    }
  };


  // Call iterator(value, key, collection) for each element of collection.
  // Accepts both arrays and objects.
  //
  // Note: _.each does not have a return value, but rather simply runs the
  // iterator function over each item in the input collection.
  

/* Each should:
- iterate over arrays, providing access to element, index, and array itself
    for(var i = 0; i < array.length; i++){
      iterator(array[i], i, array);
    }
- only iterate over the array elements, not properties of the array
    array[i] - array elements
- iterate over objects, providing access to the element, index, and object itself
    for(var key in object){
      iterator(object[key], key, object);  
    }
*/

//function should take in a collection(array or object) and an iterator function as arguments
  _.each = function(collection, iterator){
    //if the collection is an array
    if(Array.isArray(collection)){ 
      //loop through the array using a for-i loop
      for(var i = 0; i < collection.length; i++){
        //at each element in the array, call the iterator on the element, index, and array itself
        iterator(collection[i], i, collection);
      }
    //otherwise, if the collection is an object
    }else{ 
      //loop through the object using a for-in loop
      for(var key in collection){
        //at each element in the object, call the iterator on the value, property, and object itself
        iterator(collection[key], key, collection);
      }
    }
  };
 


/* indexOf should:
- find 40 in the list
- be able to compute indexOf even when the native function is defined
- returns -1 when the target cannot be found in the list
- returns the first index that the target can be found at when there are multiple matches
*/

  // Returns the index at which value can be found in the array, or -1 if value
  // is not present in the array.

//function should take in an array and a target(item you are looking for) as arguments
  _.indexOf = function(array, target){
    // TIP: Here's an example of a function that needs to iterate, which we've
    // implemented for you. Instead of using a standard `for` loop, though,
    // it uses the iteration helper `each`, which you will need to write.
    
    //initialize the result to be a falsey state (negative number)
    var result = -1;

    //iterate over the array
    _.each(array, function(item, index) {
      //if the item(element) in the array matches the target
          // result === -1, allows for the first index that the target can be found at when there are multiple matches
      if (item === target && result === -1) { 
        //change result from a falsey state to the index of that element
        result = index;
      } 
      //result will remain false if the item does not match the target
    });

    //return the result
    return result;
        //returns -1 when the target is not found in the list
        //returns the first index that the target can be found at
  };




/* Filter should:
- return all the even numbers in an array
- return all the odd numbers in an array
- should produce a brand new array instead of modifying the input array
*/

  // Return all elements of an array that pass a truth test.

//function should take in a collection(array or an object) and a test function as arguments
    _.filter = function(collection, test) {
    //create an array to store the values that pass the truth test
    var filterList = [];
      //iterate over the collection
      _.each(collection, function(val){ 
        //if the element passes the truth test
        if( test(val) ){
          //put that element in the array that stores values that pass the truth test
          filterList.push(val);
        } 
      });
    //return the array storing all the values that pass the truth test
    return filterList;
    };
    

  
/* Reject should:
- reject all even numbers
- rejeect all odd numbers
- produce a brand new array instead of modifying the input array
*/

  // Return all elements of an array that don't pass a truth test.

//function should take in a collection(array or an object) and a test function as arguments
  _.reject = function(collection, test){
    // TIP: see if you can re-use _.filter() here, without simply
    // copying code in and modifying it

    //filter the collection, return the new array 
    return _.filter(collection, function(val){ 
      //that only has the values that do NOT pass the test
      return ! test(val);
    });
  };



/* Uniq should: 
- return all unique values contained in an unsorted array
- handle iterators that work with a sorted array
- produce a brand new array instead of modifying the input array
*/

  // Produce a duplicate-free version of the array.

//function should take in an array as an argument
  _.uniq = function(array) {
    //create an array to store all the unique values
    var unique = [];
    //iterate through the array
    _.each(array, function(val){
      //if the value is not found in the unique array (negative value will arise from _.indexOf if the target is not found --> -1)
      if( _.indexOf(unique, val) < 0 ){ 
        //put that element in the unique array
        unique.push(val);
      }
    });
    //return the unique array
    return unique;
  };



  // Return the results of applying an iterator to each element.

  // map() is a useful primitive iteration function that works a lot
  // like each(), but in addition to running the operation on all
  // the members, it also maintains an array of results.
  

/* Map should:
- apply a function to every value in an array
- produce a brand new array instead of modifying the input array
*/

//function should take in a collection(array or an object) and an iterator function as arguments
  _.map = function(collection, iterator){
    //create a new array that stores the results each time the iterator is called
    var newArr = [];
    //iterate through the collection and
    _.each(collection, function(val){
      //store the results of the iterator being called upon with each element in the collection
      newArr.push(iterator(val));
    });
    //return the new array storing the results of the iterator when called
    return newArr;
  };


  /*
   * TIP: map is really handy when you want to transform an array of
   * values into a new array of values. _.pluck() is solved for you
   * as an example of this.
   */



/* Pluck should:
- return values contained at a user-defined property
- not modify the original array
*/

  // Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people and return
  // an array of just their ages

//function should take in an array of objects and a key as arguments
  _.pluck = function(collection, key) {
    // TIP: map is really handy when you want to transform an array of
    // values into a new array of values. _.pluck() is solved for you
    // as an example of this.

    //iterate through the collection and return an array (_.map returns a new modified array)
    return _.map(collection, function(item){
      //of the values of a certain property
      return item[key];
    });
  };




  // Reduces an array or object to a single value by repetitively calling
  // iterator(accumulator, item) for each item. accumulator should be
  // the return value of the previous iterator call.
  //  
  // You can pass in a starting value for the accumulator as the third argument
  // to reduce. If no starting value is passed, the first element is used as
  // the accumulator, and is never passed to the iterator. In other words, in
  // the case where a starting value is not passed, the iterator is not invoked
  // until the second element, with the first element as its second argument.
  //  
  // Example:
  //   var numbers = [1,2,3];
  //   var sum = _.reduce(numbers, function(total, number){
  //     return total + number;
  //   }, 0); // should be 6
  //  
  //   var identity = _.reduce([5], function(total, number){
  //     return total + number * number;
  //   }); // should be 5, regardless of the iterator function passed in
  //          No accumulator is given so the first element is used.
  


/* Reduce should:
- be able to sum up an array
- use the first element as an accumulator when none is given
- invoke the iterator on the first element when given an accumulator
- not invoke the iterator on the first element when using it as an accumulator
*/

//function should take in a collection(array or an object), iterator, and an accumulator as arguments
_.reduce = function(collection, iterator, accumulator){
  //if no accumulator argument is passed
  if(accumulator === undefined){
    //then the accummulator equals the first element in the collection
    accumulator = collection.shift();
  }

  //iterate through the collection
  _.each(collection, function(val){
    //accumulator will repetitively equal the iterator called with the accumulator and value for each value in the collection 
        //accumulator should equal the return value of the previous iterator call
    accumulator = iterator(accumulator, val);
  });

  //return accumulator
  return accumulator;
};

  

/* Contains should:
- return false if a collection does not contain a user-specified value
- return true if a collection contains a user-specified value
- work on objects
*/


  // Determine if the array or object contains a given value (using `===`).

//function should take in a collection(array or an object) and a target(item you are looking for)
  _.contains = function(collection, target) {
    // TIP: Many iteration problems can be most easily expressed in
    // terms of reduce(). Here's a freebie to demonstrate!

    //Iterate through the collection, will ultimately return true or false
    return _.reduce(collection, function(wasFound, item) {
      //If the base case alters to true
      if (wasFound) { //will remain true throughout iteration of entire collection
        //return true
        return true;
      }
      //Check each item in the collection against the target, return true or false
      return item === target;
       //Set base case to false(accumulator)
    }, false);

  };


/* Every should:
- passes by default for an empty collection
- passes for a collection of all-truthy results
- fails for a collection of all-falsy results
- fails for a collection containing mixed falsy and truthy results
- work when provided a collection containing undefined values
- cast the result to a boolean
- handle callbacks that manipulate the input
- work when no callback is provided
*/


  // Determine whether all of the elements match a truth test.

//function should take in a collection(array or an object) and an iterator function that tests for true or false
  _.every = function(collection, iterator) {
    // TIP: Try re-using reduce() here.

    //set the base case to true
    var result = true;
    
    //if the user does not provide an iterator
    if(iterator === undefined){
      //set the iterator to _.identity(return whatever value is passed to it)
      iterator = _.identity;
    }
    //loop through the collection
    _.each(collection, function(val){
      //the iterator function will test each item in the collection
      //and if a value in the collection does not pass the truth test
      if(!iterator(val)){
        //change the result to false
        result = false;
      }
    });
    //return the result
    return result;
  };



/* Some should:
- fail by default for an empty collection
- pass for a collection of all-truthy results
- fail for a collection of all-falsy results
- pass for a collection containing mixed falsy and truthy results
- pass for a set containing one truthy value that is a string
- should fail for a set containing no matching values
- pass for a collection containing one matching value
- cast the result to a boolean
- work when no callback is provided
*/

  // Determine whether any of the elements pass a truth test. If no iterator is
  // provided, provide a default one
  

//function should take in a collection(array or an object) and an iterator function
  _.some = function(collection, iterator) {
    // TIP: There's a very clever way to re-use every() here.

    //set the base case to false
    var result = false;
    
    //if the user does not provide an iterator
    if(iterator === undefined){
      //set the iterator to _.identity(return whatever value is passed to it)
      iterator = _.identity;
    }
    //loop through the collection
    _.each(collection, function(val){
      //the iterator function will test each item in the collection
      //and if a value in the collection passes the truth test
      if(iterator(val)){
        //change the result to true
        result = true;
      }
    });
    //return the result
    return result;

  };


  /**
   * OBJECTS
   * =======
   *
   * In this section, we'll look at a couple of helpers for merging objects.
   */

  // Extend a given object with all the properties of the passed in
  // object(s).
  //
  // Example:
  //   var obj1 = {key1: "something"};
  //   _.extend(obj1, {
  //     key2: "something new",
  //     key3: "something else new"
  //   }, {
  //     bla: "even more stuff"
  //   }); // obj1 now contains key1, key2, key3 and bla

//function should be able to take in multiple objects
  _.extend = function(obj) {
    //iterate through the arguments
    for(var i = 0; i < arguments.length; i++){
      //iterate through each of the objects (in arguments)
      for(var key in arguments[i]){
        //access each of the properties in the objects inputed and add them to the first object argument
        obj[key] = arguments[i][key];
      }
    }
    //return newly extended object
    return obj;
  };



/* Defaults should:
- return the first argument
- copy a property if that key is not already set on the target
- not copy a property if that key is already set on the target, even if the value for that key is falsy
- prefers the first value found when two objects are provided with properties at the same key
*/

  // Like extend, but doesn't ever overwrite a key that already
  // exists in obj
  
//function should be able to take in multiple objects
  _.defaults = function(obj) {
    //iterate through the arguments
    for(var i = 0; i < arguments.length; i++){
      //iterate through each of the objects (in arguments)
      for(var key in arguments[i]){
        //if the property does not exist in the object
        if(obj[key] === undefined){
          //then add that property to the object with its attached value
          obj[key] = arguments[i][key];
        }
      }
    }

    //return the newly updated object
    return obj;
  };


  /**
   * FUNCTIONS
   * =========
   *
   * Now we're getting into function decorators, which take in any function
   * and return out a new version of the function that works somewhat differently
   */



/* Once should:
- only run a user-defined function if it hasn't been run before
*/

  // Return a function that can be called at most one time. Subsequent calls
  // should return the previously returned value.
  _.once = function(func) {
    // TIP: These variables are stored in a "closure scope" (worth researching),
    // so that they'll remain available to the newly-generated function every
    // time it's called.
    var alreadyCalled = false;
    var result;

    // TIP: We'll return a new function that delegates to the old one, but only
    // if it hasn't been called before.
    return function() {
      if (!alreadyCalled) {
        // TIP: .apply(this, arguments) is the standard way to pass on all of the
        // infromation from one function call to another.
        result = func.apply(this, arguments);
        alreadyCalled = true;
      }
      // The new function always returns the originally computed result.
      return result;
    };
  };



/* Memoize should:
- produce the same result as the non-memoized version
- give different results for dfferent arguments
- not run the memoized function twice for any given set of arguments
*/

  // Memorize an expensive function's results by storing them. You may assume
  // that the function only takes primitives as arguments.
  // memoize could be renamed to oncePerUniqueArgumentList; memoize does the
  // same thing as once, but based on many sets of unique arguments.
  //
  // _.memoize should return a function that, when called, will check if it has
  // already computed the result for the given argument and return that value
  // instead if possible.



//function should take in a function
  _.memoize = function(func) {
    //create an object to store the results of func when invoked with different arguments
    var results = {};
    //return a function
    return function() {
      //create an array to store the arguments
      var argKey = [];
      //iterate through the arguments passed in the function
      for(var i = 0; i < arguments.length; i ++) {
        //add the arguments to the array that will contain the arguments passed
        argKey.push(arguments[i]);
      }
      //if the function did not get called with a certain argument
      if (results[argKey] === undefined) {
        //then assign the return value from the function called with that argument to a key
        results[argKey]=func.apply(this, arguments);
      }
      //return the result for the given key
      return results[argKey];
    }
  };



/* Delay should:
- only execute the function after the specified wait time
- have successfully passed function arguments in 
*/

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  //
  // The arguments for the original function are passed after the wait
  // parameter. For example _.delay(someFunction, 500, 'a', 'b') will
  // call someFunction('a', 'b') after 500ms
  

//function should take in a function, and a given amount of time to wait in order to call that function
  _.delay = function(func, wait) {
  //create an array to hold the arguments that will be passed into the input function
  var argumentsList = [];
  //iterate through the arguments (except func and wait)
  for(var i = 2; i < arguments.length; i++){
    //place those arguments in the arguments array container
    argumentsList.push(arguments[i]);
  }
  //call the input function after the amount of time needed to wait with the arguments supplied
  setTimeout(function(){ func.apply(this, argumentsList);}
      , wait);
  };


  /**
   * ADVANCED COLLECTION OPERATIONS
   * ==============================
   */

  // Randomizes the order of an array's contents.
  //
  // TIP: This function's test suite will ask that you not modify the original
  // input array. For a tip on how to make a copy of an array, see:
  // http://mdn.io/Array.prototype.slice
 
/* Shuffle should:
- not modify the original object
- have the same elements as the original object
- not be in the same order as the original object
*/

  _.shuffle = function(array) {
  };


  /**
   * EXTRA CREDIT
   * =================
   *
   * Note: This is the end of the pre-course curriculum. Feel free to continue,
   * but nothing beyond here is required.
   */

  // Calls the method named by functionOrKey on each value in the list.
  // Note: You will need to learn a bit about .apply to complete this.
  _.invoke = function(collection, functionOrKey, args) {
  };

  // Sort the object's values by a criterion produced by an iterator.
  // If iterator is a string, sort objects by that property with the name
  // of that string. For example, _.sortBy(people, 'name') should sort
  // an array of people by their name.
  _.sortBy = function(collection, iterator) {
  };

  // Zip together two or more arrays with elements of the same index
  // going together.
  //
  // Example:
  // _.zip(['a','b','c','d'], [1,2,3]) returns [['a',1], ['b',2], ['c',3], ['d',undefined]]
  _.zip = function() {
  };

  // Takes a multidimensional array and converts it to a one-dimensional array.
  // The new array should contain all elements of the multidimensional array.
  //
  // Hint: Use Array.isArray to check if something is an array
  _.flatten = function(nestedArray, result) {
  };

  // Takes an arbitrary number of arrays and produces an array that contains
  // every item shared between all the passed-in arrays.
  _.intersection = function() {
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time.  See the Underbar readme for extra details
  // on this function.
  //
  // Note: This is difficult! It may take a while to implement.
  _.throttle = function(func, wait) {
  };
}());
