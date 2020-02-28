// for ( var i = 0; i < 5; i++) {
//     console.log(i)
// } // 횟수를 바꾸려면 조건식이 가변적이다.

// function count(num) {
//     for (var i = 0; i < num; i++) {
//         console.log(i)
//     }
// }
// function count2(num) {
//     for (var i = 0; i < num; i++) {
//         if (i % 2) console.log(i)
//     }
// }
// function count3(num) {
//     for (var i = 0; i < num; i++) {
//         if (i % 2 === 0) console.log(i)
//     }
// }


console.log('-----------')

function repeat(num) {
    for (var i = 0; i < num; i++) {
        function count5(num) {
            if (i % 2) console.log(i)
        }

        function count6(num) {
            if (i % 2 === 0) console.log(i)
        }
        count5()
        count6()
    }
}
// repeat(5)

// function count3(num) {
//     for (var i = 0; i < num; i++) {
//         if (i % 2) continue; 컨티뉴 빼야함
//         console.log(i)
//     }
// }

console.log('-----------')
var all = 1;
var odd = 2;
var even = 3;

// function repeat2(n, type) {
//     for (var i = 0; i < n; i++) {
//         if (type === all) logAll(i);
//         else if (type === odd) logOdd(i);
//         else if (type === even) logEven(i);
//         else throw new Error('Error!');
//     }

//     function logAll(num) {
//         console.log(num);
//     }
//     function logOdd(num) {
//         if (num % 2) console.log(num);
//     }
//     function logEven(num) {
//         if (num % 2 === 0)console.log(num);
//     }

// }

// repeat2(6, all);
// repeat2(6, odd);
// repeat2(6, even);
// repeat2(6, 100);


function logAll(num) {
    console.log(num);
}

function logOdd(num) {
    if (num % 2) console.log(num);
}

function logEven(num) {
    if (num % 2 === 0) console.log(num);
}(1)

function repeat2(n, fn) {
    for (var i = 0; i < n; i++) {
        fn(i);
    }
}

repeat2(6, logEven);
repeat2(6, function (n) {
    console.log(n);
});
// logEven = fn

// 0부터 100중에 10의 배수인것 출력

repeat2(100, function (n) {
    if (n % 10 === 0) console.log(n);
})


