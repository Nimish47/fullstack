// problem 3

// find a better way to write applyfilter logic

// define job type
type Job = {
    id: number,
    title: string,
    company: string,
    location: string,
    salary: number,
    remote: boolean
}

// define filter type
type Filter = {
    keyword?: string,
    location?: string,
    minSalary?: number,
    remote?: boolean
}

// applyFilter()
function applyFilter(arr: Job[], { keyword, location, minSalary, remote }: Filter) {
    let jobs = [...arr]

    if (keyword && keyword.trim()) jobs = jobs.filter(job => job.title.includes(keyword))
    if (location && location.trim()) jobs = jobs.filter(job => job.location === location)
    if (minSalary !== undefined) jobs = jobs.filter(job => job.salary >= minSalary)
    if (remote !== undefined) jobs = jobs.filter(job => job.remote === remote)

    return jobs
}

// array of jobs
const jobs = [
    { id: 1, title: "Frontend Engineer", company: "Razorpay", location: "Bangalore", salary: 1400000, remote: true },
    { id: 2, title: "Backend Engineer", company: "Swiggy", location: "Delhi", salary: 1200000, remote: false },
    { id: 3, title: "Product Designer", company: "Myntra", location: "Delhi", salary: 900000, remote: true },
    { id: 4, title: "Frontend Developer", company: "Flipkart", location: "Mumbai", salary: 1100000, remote: true },
    { id: 5, title: "Data Engineer", company: "Meesho", location: "Bangalore", salary: 1500000, remote: false }
]

// filters
const filter1 = { location: "Delhi", remote: false, minSalary: 1000000 }
const filter2 = {}


// consume
const resultX = applyFilter(jobs, filter1)
const resultY = applyFilter(jobs, filter2)

// print
console.log(resultX)
console.log(resultY)