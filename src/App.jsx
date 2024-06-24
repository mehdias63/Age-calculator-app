import React, { useState } from 'react'

function App() {
	const [day, setDay] = useState('')
	const [month, setMonth] = useState('')
	const [year, setYear] = useState('')
	const [age, setAge] = useState({
		years: '--',
		months: '--',
		days: '--',
	})
	const [error, setError] = useState('')

	const handleSubmit = e => {
		e.preventDefault()

		// Input validation
		if (day > 30) {
			setError('Day cannot be greater than 30')
			return
		}
		if (month > 12) {
			setError('Month cannot be greater than 12')
			return
		}
		if (year > 2024) {
			setError('Year cannot be greater than 2024')
			return
		}

		setError('')

		const birthDate = new Date(year, month - 1, day)
		const currentDate = new Date()

		const diffTime = Math.abs(currentDate - birthDate)
		const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

		const years = Math.floor(diffDays / 365.25)
		const months = Math.floor((diffDays % 365.25) / 30.44)
		const days = Math.floor((diffDays % 365.25) % 30.44)

		setAge({ years, months, days })
	}

	return (
		<main className="bg-light-gray min-h-screen flex flex-col items-center mx-auto max-w-[90rem] font-pop p-4">
			<form
				onSubmit={handleSubmit}
				className=" bg-white max-w-[52.5rem] p-4"
			>
				<div className="flex gap-4 items-center">
					<div>
						<p>Day</p>
						<input
							type="number"
							value={day}
							onChange={e => setDay(e.target.value)}
							className="item"
						/>
					</div>
					<div>
						<p>Month:</p>
						<input
							type="number"
							value={month}
							onChange={e => setMonth(e.target.value)}
							className="item"
						/>
					</div>
					<div>
						<p>Year:</p>
						<input
							type="number"
							value={year}
							onChange={e => setYear(e.target.value)}
							className="item"
						/>
					</div>
				</div>
				{error && <p style={{ color: 'red' }}>{error}</p>}
				<div className="mt-16 md:flex items-center">
					<div className="w-full h-1 bg-light-gray"></div>
					<button
						type="submit"
						className="bg-red-500 rounded-full mt-[-2rem] ml-[15rem] md:mt-0 md:ml-0"
					>
						<img src="/images/icon-arrow.svg" />
					</button>
				</div>
				<div>
					<div>
						<p>{age.years} years</p>
						<p>{age.months} months</p>
						<p>{age.days} days</p>
					</div>
				</div>
			</form>
		</main>
	)
}

export default App
