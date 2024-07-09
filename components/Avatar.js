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
                <Image src="https://firebasestorage.googleapis.com/v0/b/bcu-study-space-cded8.appspot.com/o/avatar%2Fdog.png?alt=media&token=753fcec7-b8c0-4b64-b2be-0e07f43270a8" alt="avatar" width={80} height={80} />
            </div>
        </div>
    )
}