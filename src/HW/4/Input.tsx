import {ChangeEvent} from "react";

type InputPropsType = {
	currentText: string // НУЖНО ПРОТИПИЗИРОВАТЬ
	setCurrentText: (texts: string)=>void // НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Input = ({currentText, setCurrentText}: InputPropsType) => {
	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
setCurrentText(event.currentTarget.value)
	};
return <input value={currentText} onChange={onChangeHandler}/>
};
