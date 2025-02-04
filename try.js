async function printName() {
    for (let i = 1; i <= 5; i++) {
        function name() {
            let name = 'Prerna';
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log(name);
                    resolve();
                }, 10000); 
            });
        }
        await name();
    }
}
printName();
