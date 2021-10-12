const schedule = (numCourses, prerequisites) => {
    const edgeMap = {};
    const starters = new Set();
    const inMap = {};

    prerequisites.forEach(pr => {
        const [dest, src] = pr;

        if (src in edgeMap) edgeMap[src].add(dest);
        else edgeMap[src] = new Set([dest]);

        if (dest in inMap) inMap[dest] += 1;
        else inMap[dest] = 1;

        if (!(src in inMap)) starters.add(src);
        starters.delete(dest);
    });

    for (let i = 0; i < numCourses; i++) if (!(i in inMap)) starters.add(i);
    const doableCourses = Array.from(starters);

    const doneCourses = [];

    while (doableCourses.length !== 0 && doneCourses.length < numCourses) {
        const course = doableCourses.splice(0, 1)[0];
        doneCourses.push(course);

        if (!edgeMap[course]) continue;

        const children = Array.from(edgeMap[course]);
        children.forEach(child => {
            if (child in inMap) {
                inMap[child] -= 1;
                if (inMap[child] === 0) doableCourses.push(child);
            }
        });
    }

    if (doneCourses.length < numCourses) return [];
    else if (doneCourses.length === numCourses) return doneCourses;
    else return doneCourses.splice(0, numCourses);
};

console.log(
    // schedule(2, [[1,0]]),
    // schedule(4, [[1,0],[2,0],[3,1],[3,2]]),
    schedule(1, []),
    schedule(
        3,
        [[1,0]],
    ),
);
