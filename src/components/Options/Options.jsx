import css from './Options.module.css'
export default function Options({
	updateFeedback,
	totalFeedback,
	resetFeedback,
}) {
	const handleFeedback = type => {
		updateFeedback(type)
	}

	const handleReset = () => {
		resetFeedback()
	}
	return (
		<div className={css.container}>
			<button className={css.button} onClick={() => handleFeedback('good')}>
				Good
			</button>
			<button className={css.button} onClick={() => handleFeedback('neutral')}>
				Neutral
			</button>
			<button className={css.button} onClick={() => handleFeedback('bad')}>
				Bad
			</button>
			{totalFeedback > 0 && (
				<button className={css.button} onClick={handleReset}>
					Reset
				</button>
			)}
		</div>
	)
}
