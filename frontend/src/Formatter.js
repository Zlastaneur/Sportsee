class Formatter {
    userMainData(userData) {
        const score = userData.todayScore || userData.score
        return [{ name: "Score", uv: score * 100 }]
    }

    userKeyData(data) {
        return data.keyData
    }

    userPerformance(performanceData) {
        return performanceData.data.map((item) => ({
            ...item,
            kind: performanceData.kind[item.kind].charAt(0).toUpperCase() + performanceData.kind[item.kind].slice(1),
        }))
    }

    userAverageSession(data) {
        return data
    }

    userActivity(data) {
        return data
    }

}

export default Formatter