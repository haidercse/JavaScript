const taskOne = () => {
    return new Promise((resolve, reject) => {
        resolve("Task 1 is complete!");
    })
}

const taskTwo = () => {
    return new Promise((resolve, reject) => {
        resolve("Task 2 is complete!");
    })
}

const taskThree = () => {
    return new Promise((resolve, reject) => {
        resolve("Task 3 is complete!");
    })
}
const taskFour = () => {
    return new Promise((resolve, reject) => {
        resolve("Task 4 is complete!");
    })
}

taskOne()
    .then((res) => {
        console.log(res);
    })
    .then(taskTwo)
    .then((res) => console.log(res))
    .then(taskThree)
    .then((res) => console.log(res))