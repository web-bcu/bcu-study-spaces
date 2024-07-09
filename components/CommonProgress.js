export default function CommonPregress({progress}) {
    return (
        <div className="w-[90%]">
            <progress className="progress progress-secondary w-full" value={progress} max="100"></progress>
        </div>
    )
}