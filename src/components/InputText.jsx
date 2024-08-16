import React from "react";
import Styles from "../styles/InputText.module.css";

const InputText = ({value, change}) => {
	return <input type="text" value={value} onChange={change} />;
};

export default InputText;
