import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend, ResponsiveContainer } from "recharts"
import { USER_PERFORMANCE } from "../data"

function RadarChartComponent() {
	const userPerformance = USER_PERFORMANCE.find((performance) => performance.userId === 12)

	const data = userPerformance.data.map((item) => ({
		...item,
		kind: userPerformance.kind[item.kind],
	}))

	return (
		<ResponsiveContainer width="30%" height={320} className="radarChart">
			<RadarChart cx="50%" cy="50%" outerRadius="60%" data={data}>
				<PolarGrid />
				<PolarAngleAxis dataKey="kind" />
				<Radar name="Performance" dataKey="value" stroke="#8884d8" fill="#e60000" fillOpacity={0.6} />
			</RadarChart>
		</ResponsiveContainer>
	)
}

export default RadarChartComponent
