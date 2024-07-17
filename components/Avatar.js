import Image from "next/image";

// {size, url, editable, onChange}
export default function Avatar({size, url}) {
    let width = 'w-12';
    if (size === 'lg') {
        width = 'w-24 md:w-36';
    }
    return (
        <div className={`${width} relative`}>
            <div className="rounded-full overflow-hidden">
                <Image src={url} alt="avatar" width={80} height={80} />
            </div>
        </div>
    )
}