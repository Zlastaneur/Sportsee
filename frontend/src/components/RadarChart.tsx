import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts"
import { getUserPerformance } from "../ApiService.js"
import { useEffect, useState } from "react"

function RadarChartComponent() {
	const [data, setData] = useState([])

	useEffect(() => {
		getUserPerformance().then((formattedData) => {
			setData(formattedData)
		})
	}, [])

	return data ? (
		<ResponsiveContainer width="30%" height={320} className="radarChart">
			<RadarChart cx="50%" cy="50%" outerRadius="55%" data={data}>
				<PolarGrid radialLines={false} />
				<PolarAngleAxis dataKey="kind" tick={{ fill: "white" }} />
				<Radar name="Performance" dataKey="value" fill="#e60000" fillOpacity={0.7} />
			</RadarChart>
		</ResponsiveContainer>
	) : (
		""
	)
}

export default RadarChartComponent
