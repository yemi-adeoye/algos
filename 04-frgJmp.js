
const jump = (X, Y, D) => {
    return Math.ceil((Y - X)  /  D)
}

console.log(jump(10, 85, 30))