import React, {useState} from 'react';
import { MyInput, Span } from './style';


const Input = ({ error, ...rest}) => {
    const [touched, setTouched] = useState(false);

    return (
        <>
            <br></br>
            <MyInput {...rest} onBlur={() => setTouched(true)} />
            <br></br>
            <Span>{touched && error}</Span>
        </>
    )
}

export default Input;