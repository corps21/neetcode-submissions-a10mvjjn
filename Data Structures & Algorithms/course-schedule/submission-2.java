class Solution {
    public boolean canFinish(int numCourses, int[][] prerequisites) {
        HashMap<Integer, List<Integer>> adjList = new HashMap<>();

        for(int[] prerequisite: prerequisites) {
            List<Integer> list = adjList.computeIfAbsent(prerequisite[0], (k) -> new ArrayList<>());
            list.add(prerequisite[1]);
        }

        boolean[] visited = new boolean[numCourses];
        boolean[] pathVisited = new boolean[numCourses];

        for(int i = 0; i<numCourses;i++) {
            if(!visited[i]) {
                pathVisited[i] = true;
                if(dfs(i,adjList,visited,pathVisited)) {
                    return false;
                }
                pathVisited[i] = false;
            }
        }

        return true;
    }

    public boolean dfs(int node, HashMap<Integer, List<Integer>> adjList, boolean[] visited, boolean[] pathVisited) {
        visited[node] = true;
        List<Integer> list = adjList.get(node);
        
        if(list == null) {
            return false;
        }

        for(int child: list) {
            if(pathVisited[child]) {
                return true;
            } else if(!visited[child]) {
                pathVisited[child] = true;
                if(dfs(child,adjList,visited,pathVisited)) {
                    return true;
                }
                pathVisited[child] = false;
            }
        }
        return false;
    }
}
