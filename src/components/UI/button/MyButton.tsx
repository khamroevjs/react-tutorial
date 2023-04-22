import React from 'react';
import classes from './MyButton.module.css';

type Props = React.ComponentProps<'button'>;

const MyButton = ({children, ...props}: Props) => {
    return (
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    );
};

export default MyButton;
