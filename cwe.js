const x = 0;
x = 2;
x=4;

function example1(x) {
    x.p = 42;
    if (x != null) { // INSUFFICIENT_NULL_CHECK alarm
        doSomething(x);
    }
}
