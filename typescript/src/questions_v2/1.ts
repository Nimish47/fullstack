// problem 1

// create a notification type
// id, message, createdAt, read, ?actionUrl

type Notifications = {
    id: number,
    message: string,
    createdAt: string,
    read: boolean,
    actionUrl?: string
}

// filter notification function
// input an array of notification objects
// filter read flase
// return array
function filterNotification(arr: Notifications[]) {
    return arr.filter(obj => !obj.read)
}

// notification object examples
const notificationArr = [
    { id: 1, message: "New comment", createdAt: "...", read: false },
    { id: 2, message: "Payment received", createdAt: "...", read: true },
    { id: 3, message: "New follower", createdAt: "...", read: false }
]



// consume print
const result = filterNotification(notificationArr)

// print
if (result.length > 0) {
    result.forEach(obj => console.log(obj))
}