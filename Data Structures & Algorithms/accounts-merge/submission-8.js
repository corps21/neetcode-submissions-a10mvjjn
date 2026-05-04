class MapDSU {

    constructor() {
        this.leaders = new Map();
        this.ranks = new Map();
    }

    feed(key) {
        if (this.leaders.has(key)) return
        this.leaders.set(key, key);
        this.ranks.set(key, 0);
    }

    union(key1, key2) {
        if (!this.leaders.has(key1) || !this.leaders.has(key2)) return;

        const leader1 = this.find(key1);
        const leader2 = this.find(key2);

        if (leader1 === leader2) return;

        const rank1 = this.ranks.get(leader1);
        const rank2 = this.ranks.get(leader2);

        if (rank1 > rank2) {
            this.leaders.set(leader2, leader1);
        } else if (rank2 > rank1) {
            this.leaders.set(leader1, leader2);
        } else {
            this.leaders.set(leader2, leader1);
            this.ranks.set(leader1, rank1 + 1);
        }
    }

    find(key) {
        if (!this.leaders.has(key)) return null;

        if (this.leaders.get(key) === key) return key;
        const leader = this.find(this.leaders.get(key));
        this.leaders.set(key, leader);
        return leader;
    }

    map() {
        return new Map(this.leaders)
    }
}


class Solution {
    /**
     * @param {string[][]} accounts
     * @return {string[][]}
     */
    accountsMerge(accounts) {

        const emailToName = new Map();
        const dsu = new MapDSU();

        for (let i = 0; i < accounts.length; i++) {
            const name = accounts[i][0]
            const firstEmail = accounts[i][1]

            dsu.feed(firstEmail)
            emailToName.set(firstEmail, name)

            for (let j = 2; j < accounts[i].length; j++) {
                const email = accounts[i][j]
                const leader = dsu.find(email)

                if (leader === null) {
                    dsu.feed(email)
                }

                dsu.union(firstEmail, email)
                emailToName.set(email, name)
            }
        }

        const clonedMap = dsu.map();
        const emailGroups = new Map();

        for (const email of clonedMap.keys()) {

            // make sure all paths are compressed
            const leader = dsu.find(email)

            if (!emailGroups.has(leader)) {
                emailGroups.set(leader, [email])
            } else {
                emailGroups.get(leader).push(email)
            }
        }

        const result = []

        for (const [leader, emailGroup] of emailGroups.entries()) {
            result.push([emailToName.get(leader), ...emailGroup.sort()])
        }

        return result;
    }
}
