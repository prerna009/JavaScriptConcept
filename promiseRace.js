var timeLimit = function (fn, t) {
    return async function (...args) {
         return Promise.race([
            fn(...args),
            new Promise((_, reject) =>
                setTimeout(() => reject("Time Limit Exceeded"), t)
            )
        ]);
    }
};

const fn = async (a, b) => { 
  await new Promise(res => setTimeout(res, 100)); 
  return a + b; 
}
const inputs = [5, 4];
const t = 150;
const limited = timeLimit(fn, t);

(async () => {
    const start = performance.now();

    try {
        const result = await limited(...inputs);

        console.log({
            resolved: result,
            time: Math.floor(performance.now() - start)
        });
    } catch (err) {
        console.log({
            rejected: err,
            time: Math.floor(performance.now() - start)
        });
    }
})();