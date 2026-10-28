class Solution {
    public int[][] insert(int[][] intervals, int[] newInterval) {
        int idx = 0;
        List<int[]> ans = new ArrayList<>();

        while(idx < intervals.length && intervals[idx][1] < newInterval[0]) {            
            ans.add(intervals[idx++]);
        }

        while(idx < intervals.length && findOverlap(intervals[idx], newInterval)) {
            newInterval = new int[] {
                Math.min(intervals[idx][0], newInterval[0]),
                Math.max(intervals[idx][1], newInterval[1])
            };
            idx++;
        }
        ans.add(newInterval);

        while(idx < intervals.length) {
            ans.add(intervals[idx++]);
        }

        return ans.toArray(new int[ans.size()][]);
    }

    public boolean findOverlap(int[] interval1, int[] interval2) {
        return (interval1[1] >= interval2[0]) && (interval2[1] >= interval1[0]);
    }
}
