class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        const heap = new minHeap();
        heap.buildHeap(nums);
        const result = [];
        for(let i=0;i<nums.length;i++) {
            result.push(heap.extractRoot());
        }
        return result;
    }
}

class minHeap {
	constructor() {
		this.heap = [];
	}
	
	insertValue(value) {
		this.heap.push(value)
		this.bubbleUp(this.heap.length)
	}
	
	bubbleUp(idx) {
		let parent = Math.floor((idx - 1) / 2)
		if(this.heap[parent] > this.heap[idx]) this.swap(parent,idx)
		this.bubbleUp(parent);	 
	}
	
	swap(idx1,idx2) {
		[this.heap[idx1],this.heap[idx2]] = [this.heap[idx2],this.heap[idx1]]
	} 
	
	extractRoot() {
		if(this.isEmpty()) return null;
		const root = this.heap[0]
		this.heap[0] = this.heap.pop()
		this.bubbleDown(0)
		return root;
	}
	
	isEmpty() {
		return this.heap.length === 0
	}
	
	bubbleDown(idx) {		
		let left = 2 * idx + 1
		let right = 2 * idx + 2
		let smallest = idx;
		if(left < this.heap.length && this.heap[left] < this.heap[smallest]) smallest = left
		if(right < this.heap.length && this.heap[right] < this.heap[smallest]) smallest = right

		 if(smallest !== idx) {
			this.swap(smallest,idx)
			this.bubbleDown(smallest)
		 }
	}
	
	heapify() {
		for(let i=Math.floor(this.heap.length / 2);i>=0;i--) {
			this.bubbleDown(i);
		}
 	}
 	buildHeap(arr) {
	 	this.heap = [...arr]
	 	this.heapify();
 	}
}
