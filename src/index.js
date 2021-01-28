import React from 'react'
import ReactDOM from 'react-dom'

import './global.css'
import Badge from './components/badge.js'

const container = document.getElementById('app')

ReactDOM.render(<Badge
					firstName="Lilly" 
					lastName="Kaufaman"
					url_avatar = "https://www.gravatar.com/avatar?d=identicon"
					jobTitle="Front End Developer" 
					user_twitter="WitcherPhantom"
				/>, container)