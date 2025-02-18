import "./app.scss"

import logo from "./assets/logo.png"
import sidebarBike from "./assets/sidebarBike.png"
import sidebarGym from "./assets/sidebarGym.png"
import sidebarZen from "./assets/sidebarZen.png"
import sidebarSwim from "./assets/siderbarSwim.png"

import BarChart from "./components/BarChart"
import LineChart from "./components/LineChart"

function App() {
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
				<div className="content">
					<div className="content_title">
						<h1>Bonjour Prénom</h1>
						<p>Félicitation ! Vous avez explosé vos objectifs hier</p>
					</div>
					<div className="mainCharts">
						<BarChart />
						<LineChart />
					</div>
					<div className="sideCharts">
						<div>
							<ul>
								<li>Calories</li>
								<li>Proteines</li>
								<li>Glucides</li>
								<li>Lipides</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default App
