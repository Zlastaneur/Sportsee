import "./app.scss"

import logo from "./assets/logo.png"
import sidebarBike from "./assets/sidebarBike.png"
import sidebarGym from "./assets/sidebarGym.png"
import sidebarZen from "./assets/sidebarZen.png"
import sidebarSwim from "./assets/siderbarSwim.png"

import BarChart from "./components/BarChart"
import AreaChart from "./components/AreaChart"
import RadarChart from "./components/RadarChart"
import RadialBarChart from "./components/RadialBarChart"
import NutritionalList from "./components/NutritionalList"

import { useEffect, useState } from "react"
import { getUser } from "./ApiService"

function App() {
	const [user, setUser] = useState(null)
	const [userName, setUserName] = useState("")

	useEffect(() => {
		async function fetchUser() {
			const fetchedUser = await getUser()
			if (fetchedUser) {
				setUser(fetchedUser)
				setUserName(fetchedUser.userInfos.firstName)
			}
		}
		fetchUser()
	}, [])

	return (
		<>
			<header>
				<img src={logo} alt="Vite logo" />
				<nav>
					<ul>
						<li>Accueil</li>
						<li>Profil</li>
						<li>Réglage</li>
						<li>Communauté</li>
					</ul>
				</nav>
			</header>
			<div className="wrapper">
				<div className="sidebar">
					<div className="nav">
						<img src={sidebarZen} alt="Zen" />
						<img src={sidebarSwim} alt="Swim" />
						<img src={sidebarBike} alt="Bike" />
						<img src={sidebarGym} alt="Gym" />
					</div>
					<p>Copyright Sportsee 2020</p>
				</div>
				{user ? (
					<div className="content">
						<div className="content_title">
							<h1>
								Bonjour <span>{userName}</span>
							</h1>
							<p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
						</div>
						<div className="mainCharts">
							<BarChart />
							<AreaChart />
							<RadarChart />
							<RadialBarChart />
						</div>
						<div className="sideCharts">
							<NutritionalList />
						</div>
					</div>
				) : (
					<div className="apiErrorMessage">
						<p>Vos données sont inaccessibles pour le moment. Veuillez réessayer plus tard.</p>
					</div>
				)}
			</div>
		</>
	)
}

export default App
