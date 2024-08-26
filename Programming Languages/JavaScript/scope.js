// lexical scoping

function outer() {
    let a = 10;

    function inner() {
        let b = a * 2;

        function innermost() {
            let c = b * 3;

            // console.log("inner most function: d, ", d); /// error, since d is not yet declared in the lexial scope
            console.log("inner most function: c, ", c);
        }

        innermost();
        // console.log(c); /// error, since c is out of lexical scope
    }

    function inner2() {
        console.log(a); /// a is accessible since it is available in the lexical scope
        inner();
    }

    inner2();
    let d = 100;
}

outer();
