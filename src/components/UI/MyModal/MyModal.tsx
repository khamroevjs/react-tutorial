import React from 'react';

import classes from './MyModal.module.css';

interface Props {
    children: React.ReactNode;
    visible: boolean;
    setVisible: (visible: boolean) => void;
}

const MyModal = ({children, visible, setVisible}: Props) => {

    const rootClasses = [classes.myModal];
    if (visible) {
        rootClasses.push(classes.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.myModalContent} onClick={(event) => event.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;