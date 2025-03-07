import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import { getUserAverageSession } from "../ApiService.js"
import { useEffect, useState } from "react"

function AreaChartComponent() {
	interface Idata {
		sessions: any
	}

	const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: any[] }) => {
		if (active && payload && payload.length) {
			return (
				<div className="customTooltip">
					<p>{payload[0].value} min</p>
				</div>
			)
		}
	}

	const [data, setData] = useState<Idata>()

	useEffect(() => {
		getUserAverageSession().then((formattedData) => {
			setData(formattedData)
		})
	}, [])

	return data ? (
		<ResponsiveContainer width="30%" height={320} className="areaChart">
			<AreaChart data={data.sessions} margin={{ top: 100, left: -1, right: -1, bottom: 0 }}>
				<text x="30" y="50" className="title" fill="#F1F1F1">
					Durée moyenne des
					<tspan x="30" dy="20">
						sessions
					</tspan>
				</text>
				<XAxis hide={true} />
				<YAxis hide={true} padding={{ top: 0, bottom: 60 }} />
				<Area type="monotone" dataKey="sessionLength" stroke="white" strokeWidth={2} fillOpacity={1} fill="#e60000" />
				<Tooltip content={<CustomTooltip />} />
				<text x="52%" y="300" textAnchor="middle" fill="#F1F1F1" letterSpacing="15" opacity="0.8">
					L M M J V S D
				</text>
			</AreaChart>
		</ResponsiveContainer>
	) : (
		""
	)
}

export default AreaChartComponent
