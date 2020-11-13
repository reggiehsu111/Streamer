import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UploadPage from './containers/UploadPage';

export default function App(){
	return(
		<UploadPage />
	);
}
