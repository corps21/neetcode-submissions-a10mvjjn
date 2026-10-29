class Solution {
    public int[][] merge(int[][] intervals) {

        Arrays.sort(intervals, (a,b) -> a[0] - b[0]);

        List<int[]> ans = new ArrayList<>();
        // boolean foundOverlap = false;
        int[] mergedInterval = null;
        
        int i = 0;

        while(i < intervals.length) {
            
            if(mergedInterval == null) {
                mergedInterval = intervals[i];
                // foundOverlap = false;
                i++;
            }

            while(i < intervals.length && findOverlap(intervals[i], mergedInterval)) {
                mergedInterval = new int[] {Math.min(intervals[i][0], mergedInterval[0]), Math.max(intervals[i][1], mergedInterval[1])};
                i++;
            }
            
            ans.add(mergedInterval);
            mergedInterval = null;
        }

        // if(foundOverlap) {
        //     ans.add(mergedInterval);
        // }

        return ans.toArray(new int[ans.size()][]);
    }

    public boolean findOverlap(int[] itl1, int[] itl2) {
        return (itl1[1] >= itl2[0]) && (itl2[1] >= itl1[0]);
    }
}
