import React, {useState} from 'react';
import {Button} from './Button';
import {Input} from './Input';
import S from './HW4.module.css';



export const HW4 = () => {
    const [currentText, setCurrentText] = useState<string>(''); // Укажите тип string для currentText
    const [texts, setTexts] = useState<string[]>([
        'То, что вы делаете по ночам, то и делает вас богатым. (Аль Капоне)',
    ]);`1`

    const handleSave = () => {
        setTexts([...texts, currentText]);
        setCurrentText('');
        setCurrentText('');
    };

    return (
        <div id={'hw04'}>
            {currentText ? (
                <h1 id={'hw04-text'}>{currentText}</h1>
            ) : (
                <h1 id={'hw04-default-text'}>Здесь появится новое дело</h1>
            )}

            {/* Используйте set вместо ()=>{} и добавьте тип для currentText */}
            <Input
                currentText={currentText}
                setCurrentText={setCurrentText}/>

            {/* Добавьте коллбек для Button */}
            <Button callBack={handleSave} name={'BUTTON'}/>

            <h1 style={{marginTop: '50px'}}>СПИСОК ДЕЛ НА ДЕНЬ:</h1>

            <ol id={'hw04-tasks'}>
                {texts.map((el, index) => {
                    return (
                        <li
                            key={index}
                            id={`hw04-task-${index}`}
                            className={index % 2 === 0 ? S.chetNechet : ''} // Добавьте условие для определения четности/нечетности
                        >
                            {el}
                        </li>
                    );
                })}
            </ol>
        </div>
    );
};