import { BarChart, Bar, XAxis, YAxis, Legend, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts"
import { getUserActivity } from "../ApiService.js"
import { useEffect, useState } from "react"

function BarChartComponent() {
	interface Idata {
		sessions: any
	}

	const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: any[] }) => {
		if (active && payload && payload.length) {
			return (
				<div className="customTooltip">
					<p>{payload[0].value}kg</p>
					<p>{payload[1].value}kCal</p>
				</div>
			)
		}
	}

	const [data, setData] = useState<Idata>()

	useEffect(() => {
		getUserActivity().then((formattedData) => {
			setData(formattedData)
		})
	}, [])

	return data ? (
		<ResponsiveContainer width="100%" height={350} className="barChart">
			<BarChart data={data.sessions} barGap="10%">
				<text x="0" y="20" className="title">
					Activité quotidienne
				</text>
				<CartesianGrid vertical={false} strokeDasharray="3 3" />
				<XAxis
					dataKey="day"
					tickFormatter={(tick) => new Date(tick).getDate().toString()}
					tickLine={false}
					tickMargin={25}
					height={45}
					stroke="#9B9EAC"
				></XAxis>
				<YAxis axisLine={false} tickCount={3} tickMargin={25} tickLine={false} orientation="right" stroke="#9B9EAC" />
				<Legend iconType="circle" verticalAlign="top" align="right" wrapperStyle={{ paddingBottom: "3rem" }} />
				<Tooltip content={<CustomTooltip />} />
				<Bar dataKey="kilogram" fill="#282D30" barSize={10} radius={[5, 5, 0, 0]} name="Poids (kg)" />
				<Bar dataKey="calories" fill="#E60000" barSize={10} radius={[5, 5, 0, 0]} name="Calories brûlées (kCal)" />
			</BarChart>
		</ResponsiveContainer>
	) : (
		""
	)
}

export default BarChartComponent
