'use strict';
function multN(n) {
    return function multBy(m) {
        return m * n;
    };
}

let multBy3 = multN(3);

console.log("Multiplying 2: " + multBy3(2)); // 6
console.log("Multiplying 3: " + multBy3(3)); // 9
