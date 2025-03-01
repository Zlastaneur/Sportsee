class Formatter {
    userMainData(userData) {
        return [{ name: "Score", uv: userData.todayScore * 100 || userData.score * 100 }]
    }
}

export default Formatter