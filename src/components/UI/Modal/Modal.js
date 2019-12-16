import React from 'react';

import Backdrop from '../Backdrop/Backdrop'

import classes from './Modal.module.css'

const modal = (props) => (
    <div>
        <Backdrop
            show={ props.show }
            clicked={ props.modalClose }
        />
        <div
            className={ classes.Modal }
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>{ props.children }</div>
    </div>
);

export default modal;