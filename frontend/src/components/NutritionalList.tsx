import { getUserKeyData } from "../ApiService.js"
import { useEffect, useState } from "react"

import { TbFlameFilled } from "react-icons/tb"
import { PiHamburgerFill } from "react-icons/pi"
import { FaDrumstickBite } from "react-icons/fa"
import { FaAppleAlt } from "react-icons/fa"

function NutritionalListComponent() {
	const [data, setData] = useState<{ [key: string]: number } | null>(null)

	useEffect(() => {
		getUserKeyData().then((formattedData) => {
			setData(formattedData)
		})
	}, [])

	const nutritionalInfo = {
		calorieCount: {
			icon: <TbFlameFilled />,
			name: "Calories",
		},
		proteinCount: {
			icon: <FaDrumstickBite />,
			name: "Protéines",
		},
		carbohydrateCount: {
			icon: <FaAppleAlt />,
			name: "Glucides",
		},
		lipidCount: {
			icon: <PiHamburgerFill />,
			name: "Lipides",
		},
	}

	return data ? (
		<div className="nutritionalList">
			{Object.entries(data).map(([key, value]) => (
				<div className={`${key} wrapper`} key={key}>
					{nutritionalInfo[key] && <span>{nutritionalInfo[key].icon}</span>}
					<div className="detail">
						<p className="value">
							{value}
							{key === "calorieCount" ? "kCal" : "g"}
						</p>
						{nutritionalInfo[key] && <p className="type">{nutritionalInfo[key].name}</p>}
					</div>
				</div>
			))}
		</div>
	) : (
		""
	)
}

export default NutritionalListComponent
