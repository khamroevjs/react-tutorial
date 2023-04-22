import React from 'react';
import classes from './MyInput.module.css';

type Props = React.ComponentProps<'input'>;

const MyInput = (props: Props) => {
    return (
        <input className={classes.myInput} {...props}/>
    );
};

export default MyInput;