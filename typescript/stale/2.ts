// question1 
// file upload system

type Status =
    | { type: 'pending' }
    | { type: 'uploading', completion: number }
    | { type: 'success', url: string }
    | { type: 'failed', error: string }


function uploadStatus(status: Status) {
    if (status.type === "pending") console.log('Pending upload')
    if (status.type === "uploading") console.log('Upload in progress', status.completion)
    if (status.type === "success") console.log('Upload successful, download link', status.url)
    if (status.type === "failed") console.log('Error while uploading', status.error)
}

const status1: Status = { type: 'pending' }
const status2: Status = { type: 'success', url: 'www.google.com' }


uploadStatus(status1)
uploadStatus(status2)