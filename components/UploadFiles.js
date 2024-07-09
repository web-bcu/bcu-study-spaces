'use client'
import { useState } from "react";
import Button from "./Button";
import { fileUpload } from "./utils/fileUpload";
import { addFolder } from "./utils/firestore";
import CommonPregress from "./CommonProgress";

export default function UploadFile({ parentId }) {
    const [isFileVisible, setFileVisible] = useState(false);
    const [isFolderVisible, setFolderVisible] = useState(false);
    const [folderName, setFolderName] = useState("");
    const [progress, setProgress] = useState(0);

    const uploadFiles = async(ev) => {
        let file = ev.target.files[0];
        fileUpload(file, setProgress, parentId);
    }

    const uploadFolder = () => {
        let payload = {
            folderName: folderName,
            isFolder: true,
            fileList: [],
            parentId: parentId
        };
        addFolder(payload);
        setFolderName("");
    }

    return (
        <div className="flex flex-col gap-3">
            <div className="flex gap-5">
                <Button
                    title="Add a file"
                    btnClass="btn-primary text-white"
                    onClick={() => {
                        setFolderVisible(false);
                        setFileVisible(!isFileVisible);
                    }}
                />
                {isFileVisible && <input type="file" className="file-input w-full max-w-xs text-black" onChange={(event) => uploadFiles(event)} />}
                <Button
                    title="Create a folder"
                    btnClass="btn-primary text-white"
                    onClick={() => {
                        setFileVisible(false);
                        setFolderVisible(!isFolderVisible);
                    }}
                />
                {isFolderVisible ? (
                    <>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs text-black" onChange={(event) => setFolderName(event.target.value)} value={folderName} />
                        <Button title='Create a folder' btnClass='btn-primary text-white' onClick={uploadFolder} />
                    </>
                ) : (
                    <></>
                )}
            </div>
            {progress === 0 || progress === 100 ? <></> : <CommonPregress progress={progress}/>}
        </div>
    )
}