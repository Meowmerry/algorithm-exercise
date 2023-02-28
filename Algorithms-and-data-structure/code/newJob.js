
function newJob(arr) {
    return {
        start: arr[0],
        end: arr[1],
        load: arr[2],
    };
}


const solution = (jobValues) => {
    const jobs = jobValues.map(newJob);
    console.log(jobs)
    if (jobs.length != jobValues.length) {
        return -1;
    }

    const timelineSize = jobs.count;
    console.log('timelineSize', timelineSize)
    var cpuTimeline = Array(timelineSize).fill(0);
  
    for (job of jobs) {
        for (var i = job.start; i < job.end; i++) {
            cpuTimeline[i] = job.load;
        }
    }
    console.log(cpuTimeline)
    return cpuTimeline.reduce((currentMax, next) => { return Math.max(currentMax, next) }, 0);
}
console.log(solution( [[1, 5, 3], [2, 5, 4], [7, 9, 6]])) // 7