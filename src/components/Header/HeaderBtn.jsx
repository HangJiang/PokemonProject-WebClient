import React  from 'react';
import styles from './Header.css'

const HeaderBtn = ({name}) => {
    return (<button className={styles.headerButton}>{name}</button>);
}

export default HeaderBtn;