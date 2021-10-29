const findOrder = (numCourses, prerequisites) => {
    const matrix = Array(numCourses).fill(null).map(() => Array(numCourses).fill(false));
    const inDegree = {};
    const starters = new Set(Array(numCourses).fill(0).map((el, index) => index));

    prerequisites.forEach(([c, pr]) => {
        matrix[pr][c] = true;

        if (c in inDegree) inDegree[c] += 1;
        else inDegree[c] = 1;

        starters.delete(c);

        if (!(pr in inDegree)) starters.add(pr);
        else starters.delete(pr);
    });

    const todo = Array.from(starters);
    const order = [];

    while (todo.length !== 0) {

        const course = todo.splice(0,1)[0];
        order.push(course);

        matrix[course].forEach((edge, index) => {
            if (!edge) return;

            inDegree[index] -= 1;

            if (inDegree[index] === 0) {
                todo.push(index);
            }
        });
    };

    return (order.length === numCourses ? order : []);
};

console.log(
    findOrder(2, [[0,1]]),
    findOrder(2, [[1,0]]),
    findOrder(1, []),
    findOrder(3, [[1,0],[1,2],[0,1]]),
);
