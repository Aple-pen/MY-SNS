import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import AuthService from "./service/auth_service";
import ImageUploader from "./service/ImageUploader";
import Input_Picture from "./components/inputPicture/Input_Picture";
import Database from "./service/Database";


const database = new Database();
const imageUploader = new ImageUploader();
const authService = new AuthService();
const FileInput = (props) => (
  <Input_Picture {...props} imageUploader={imageUploader} />
);

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} 
    database={database}/>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
