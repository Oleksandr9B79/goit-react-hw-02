import css from './Feedback.module.css'

export default function Feedback({ good, neutral, bad, total }) {
	const percentage = Math.round(((good + neutral) / total) * 100)
	return (
		<div className={css.container}>
			<p className={css.text}>Good: {good}</p>
			<p className={css.text}>Nautral: {neutral}</p>
			<p className={css.text}>Bad: {bad}</p>
			<p className={css.text}>Total: {total}</p>
			{percentage > 0 ? (
				<p className={css.text}>Positive: {percentage}%</p>
			) : (
				<p className={css.text}>Positive: 0%</p>
			)}
		</div>
	)
}
