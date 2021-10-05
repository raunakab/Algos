const intersection = (s1, s2) => {
    Array.from(s2).forEach(el => s1.add(el));
};

const findOrder = (numCourses, prerequisites) => {
    const starterCourses = new Set([0]);

    const mappings = {
        0: new Set([1,2]),
        1: new Set([3]),
        2: new Set([3]),
        3: new Set(),
    };
    const reverseMappings = {
        0: new Set(),
        1: new Set([0]),
        2: new Set([0]),
        3: new Set([1,2]),
    };

    let returnArr = [];

    starterCourses.forEach(starterCourse => {
        const doableCourses = new Set();
        doableCourses.add(starterCourse);
        
        let coursesTaken = 0;
        let courseOrder = new Set();

        while (coursesTaken < numCourses && doableCourses.size !== 0) {
            const courseToTake = Array.from(doableCourses).pop();
            doableCourses.delete(courseToTake);

            if (!courseOrder.has(courseToTake)) {
                coursesTaken += 1;
                courseOrder.add(courseToTake);

                intersection(doableCourses, mappings[courseToTake]);
            }
        }
        
        if (coursesTaken === numCourses) returnArr = Array.from(courseOrder);
    });

    return returnArr;
};

const result = findOrder(4, []);
console.log(result);
