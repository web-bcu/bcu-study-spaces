export default function Card({children, noPadding}) {
    let classes = "bg-gradient-to-r from-[#432371] to-[#faae7b] shadow-md shadow-gray-300 rounded-md mb-5 text-white text-xl";
    if (!noPadding) {
        classes += ' p-4';
    }``
    return (
        <div className={classes}>
            {children}
        </div>
    )
}