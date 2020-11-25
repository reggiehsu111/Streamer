import React, {useRef} from 'react';

const UploadPageView = React.forwardRef((props, ref) => {
	console.log(props);
	console.log(ref);
	
	return <div className="container">
			<video ref={ref} onCanPlay={props.handleCanPlay} autoPlay playsInline/>,
			</div>
});
export default UploadPageView;
