import { useEffect, useState } from 'react'
import './App.module.css'
import Description from '../Description/Description'
import Options from '../Options/Options'
import Feedback from '../Feedback/Feedback'
import Notification from '../Notification/Notification'
import css from './App.module.css'

function App() {
	const [feedbackType, setFeedbackType] = useState(() => {
		const storedFeedback = localStorage.getItem('Feedback')
		return storedFeedback
			? JSON.parse(storedFeedback)
			: { good: 0, neutral: 0, bad: 0 }
	})

	useEffect(() => {
		window.localStorage.setItem('Feedback', JSON.stringify(feedbackType))
	})

	const updateFeedback = fbType => {
		setFeedbackType({
			...feedbackType,
			[fbType]: feedbackType[fbType] + 1,
		})
	}

	const totalFeedback =
		feedbackType.good + feedbackType.neutral + feedbackType.bad

	const resetFeedback = () => {
		setFeedbackType({
			good: 0,
			neutral: 0,
			bad: 0,
		})
	}

	return (
		<div className={css.container}>
			<Description />
			<Options
				updateFeedback={updateFeedback}
				totalFeedback={totalFeedback}
				resetFeedback={resetFeedback}
			/>
			{totalFeedback > 0 ? (
				<Feedback
					good={feedbackType.good}
					neutral={feedbackType.neutral}
					bad={feedbackType.bad}
					total={totalFeedback}
				/>
			) : (
				<Notification />
			)}
		</div>
	)
}

export default App
