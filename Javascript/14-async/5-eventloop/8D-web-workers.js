self.onmessage = (e) => {
    if (e.data === 'start') {
        self.postMessage({ status: 'loop start', value: 0 });
        let sum;
        for (let i = 0; i < 5000000000; i++) {
            sum = i;
            // post message when reached halfway
            if (i == 2500000000) self.postMessage({ status: 'loop in progress', value: i });
        }
        self.postMessage({ status: 'loop complete', value: sum });
    }
};