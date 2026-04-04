class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(this.keyStore.has(key)) {
            let prev = this.keyStore.get(key)
            prev.push(timestamp)
            this.keyStore.set(key, prev)
        } else {
            this.keyStore.set(key, [timestamp])
        }
        this.keyStore.set(`${key}+${timestamp}`, value)
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const timestamps = this.keyStore.get(key)
        if(!timestamps) return "" 

        let start = 0, end = timestamps.length - 1

        if(timestamp < timestamps[start]) return ""
        else if(timestamp > timestamps[end]) return String(this.keyStore.get(`${key}+${timestamps[end]}`))

        while(start <= end) {
            const mid = Math.floor(start + (end - start) / 2)

            if(timestamps[mid] > timestamp) {
                end = mid - 1
            } else if(timestamps[mid] < timestamp) {
                start = mid + 1
            } else {
                return String(this.keyStore.get(`${key}+${timestamp}`))
            }
        }
        return String(this.keyStore.get(`${key}+${timestamps[end]}`))

    }
}
