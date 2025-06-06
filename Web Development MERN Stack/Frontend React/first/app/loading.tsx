import React from 'react'
import { ClipLoader, BeatLoader, PulseLoader } from 'react-spinners'

const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
                <h1 className="text-2xl font-bold mb-4">Loading...</h1>
                <ClipLoader color="#3B82F6" size={50} />
                {/* Alternatively, you can use other spinners:
                <BeatLoader color="#3B82F6" size={15} />
                <PulseLoader color="#3B82F6" size={15} /> 
                */}
            </div>
        </div>
    )
}

export default Loading;
