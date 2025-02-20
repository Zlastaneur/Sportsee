import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts"
import { USER_PERFORMANCE } from "../data"

function RadarChartComponent() {
	const userPerformance = USER_PERFORMANCE.find((performance) => performance.userId === 12)

	const data = userPerformance.data.map((item) => ({
		...item,
		kind: userPerformance.kind[item.kind].charAt(0).toUpperCase() + userPerformance.kind[item.kind].slice(1),
	}))

	return (
		<ResponsiveContainer width="30%" height={320} className="radarChart">
			<RadarChart cx="50%" cy="50%" outerRadius="55%" data={data}>
				<PolarGrid radialLines={false} />
				<PolarAngleAxis dataKey="kind" tick={{ fill: "white" }} />
				<Radar name="Performance" dataKey="value" fill="#e60000" fillOpacity={0.7} />
			</RadarChart>
		</ResponsiveContainer>
	)
}

export default RadarChartComponent
