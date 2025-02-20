import { USER_MAIN_DATA } from "../data"

import { TbFlameFilled } from "react-icons/tb"
import { PiHamburgerFill } from "react-icons/pi"
import { FaDrumstickBite } from "react-icons/fa"
import { FaAppleAlt } from "react-icons/fa"

function NutritionalListComponent() {
	const user = USER_MAIN_DATA.find((data) => data.id === 12)
	const data: { [key: string]: number } = user.keyData

	const icons = {
		calorieCount: <TbFlameFilled />,
		proteinCount: <FaDrumstickBite />,
		carbohydrateCount: <FaAppleAlt />,
		lipidCount: <PiHamburgerFill />,
	}

	const names = {
		calorieCount: "Calories",
		proteinCount: "Protéines",
		carbohydrateCount: "Glucides",
		lipidCount: "Lipides",
	}

	return (
		<div className="nutritionalList">
			{Object.entries(data).map(([key, value]) => (
				<div className={`${key} wrapper`} key={key}>
					<span>{icons[key]}</span>
					<div className="detail">
						<p className="value">
							{value}
							{key === "calorieCount" ? "kCal" : "g"}
						</p>
						<p className="type">{names[key]}</p>
					</div>
				</div>
			))}
		</div>
	)
}

export default NutritionalListComponent
