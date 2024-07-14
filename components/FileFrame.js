'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { deletingFile } from './utils/deleteFile';
import { useSelector } from 'react-redux';

export default function FileFrame({fileLink, fileName, fileId}) {
    const admin = useSelector((state) => state.admin);
    const openFile = (fileLink) => {
        window.open(fileLink);
    }

    return (
        <div className='w-full flex items-center hover:bg-gradient-to-r from-[#432371] to-[#faae7b] hover:bg-opacity-40 text-white px-8 py-2 rounded-md border-b border-white'>
            <div onClick={() => openFile(fileLink)} className='flex gap-5 items-center w-5/6'>
                <span className='w-8 h-8 text-lg text-white'><FontAwesomeIcon icon={faFile}/></span>
                {fileName}
            </div>
            <div className='flex gap-4 w-1/6 justify-end'>
                {admin && <button onClick={() => deletingFile(fileName, fileId)} className='active:scale-75 transform transition duration-300 ease-in-out'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-6 h-6 text-white">
                        <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                    </svg>
                </button>}
            </div>
        </div>
    )
}