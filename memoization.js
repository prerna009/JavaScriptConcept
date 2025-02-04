function memo(fn) {
    let cache = {};
    return function(n) {
      if (cache[n] !== undefined) return cache[n];
      cache[n] = fn(n);
      return cache[n];
    };
  }
  
  const factorial = memo(n => (n <= 1 ? 1 : n * factorial(n - 1)));
  console.log(factorial(0)); // Computed
  console.log(factorial(6)); 
  console.log(factorial(5)); //cached

  //other example
  function memoize(fn) {
    let cache = {};
    
    return function(...args) {
      let key = (args); 
      if (cache[key] !== undefined) {
        console.log("Fetching from cache:", key);
        return cache[key]; 
      } else {
        console.log("Computing result for:", key);
        let result = fn(...args); // Compute result
        cache[key] = result; // Store in cache
        return result;
      }
    };
  }
  function add(a, b) {
    return a + b;
  }
  const memoizedAdd = memoize(add);
  
  console.log(memoizedAdd(3, 4)); 
  console.log(memoizedAdd(3, 4)); 
  console.log(memoizedAdd(5, 6)); 