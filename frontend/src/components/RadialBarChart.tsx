import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from "recharts"
import { getUserMainData } from "../ApiService.js"
import { useEffect, useState } from "react"

function RadialBarChartComponent() {
	const [data, setData] = useState([])

	useEffect(() => {
		getUserMainData().then((formattedData) => {
			setData(formattedData)
		})
	}, [])

	return data[0] ? (
		<ResponsiveContainer width="30%" height={320} className="radialBarChart">
			<RadialBarChart width={730} height={250} innerRadius="60%" outerRadius="70%" data={data} startAngle={90} endAngle={450} barSize={14}>
				<text x="40" y="50" className="title">
					Score
				</text>
				<PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
				<RadialBar background={{ fill: "#fff" }} dataKey="uv" fill="#e60000" cornerRadius={10} />
				<text x="50%" y="45%" textAnchor="middle" dominantBaseline="middle" className="goal" fill="#282d30">
					{data[0].uv}%
					<tspan x="50%" dy="1.5em" fill="#74798C">
						de votre
					</tspan>
					<tspan x="50%" dy="1.3em" fill="#74798C">
						objectif
					</tspan>
				</text>
			</RadialBarChart>
		</ResponsiveContainer>
	) : (
		""
	)
}

export default RadialBarChartComponent
