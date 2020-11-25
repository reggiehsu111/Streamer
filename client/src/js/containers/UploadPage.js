import React, {useState, useEffect, useRef} from 'react';
import {mediaStreamConstraints} from '../PublicEnvs';
import UploadPageView from '../views/UploadPageView';


const UploadPage = () => {
	const [localStream, setLocalStream] = useState();
	const videoRef=useRef();
    const gotLocalMediaStream = (mediaStream) => {
		setLocalStream(mediaStream);
		console.log("got local media stream", localStream);
	}

	const handleLocalMediaStreamError = (error) => {
		console.log('navigator.getUserMedia error:', error);
	}
	const enableStream = async () => {
		try {
			const stream = await navigator.mediaDevices.getUserMedia(mediaStreamConstraints);
			setLocalStream(stream);	
		} catch (e) {
			console.log(e);
		}
	}
	useEffect(() => {
		if (!localStream) {
			enableStream();
		} else {
			return function cleanup() {
				localStream.getTracks().forEach(track => {
					track.stop();
				});
			}
		}
	}, [localStream]);

    
	if (localStream && videoRef.current && !videoRef.current.srcObject) {
		videoRef.current.srcObject = localStream;
	}
	function handleCanPlay() {
		videoRef.current.play();
	}


	console.log(localStream);
	return <UploadPageView localStream={localStream} ref={videoRef} handleCanPlay={handleCanPlay}/>;
}

export default UploadPage;
