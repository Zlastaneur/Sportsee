import { LineChart, Line, XAxis, YAxis, Legend, Tooltip, CartesianGrid, Label, Text, ResponsiveContainer } from "recharts"
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../data"

function LineChartComponent() {
	const userActivity = USER_ACTIVITY.find((activity) => activity.userId === 12)

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

	return (
		<ResponsiveContainer width="30%" height={350} className="lineChart">
			<LineChart width={255} height={260} data={userActivity.sessions} barGap="10%">
				<text x="0" y="20" className="title">
					Durée moyenne des sessions
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
				<Tooltip content={<CustomTooltip />} />
				<Line dataKey="kilogram" fill="#282D30" name="Poids (kg)" />
				<Line dataKey="calories" fill="#E60000" name="Calories brûlées (kCal)" />
			</LineChart>
		</ResponsiveContainer>
	)
}

export default LineChartComponent
