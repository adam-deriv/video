import { useRef } from 'react';
import styles from './Input.module.scss';

export default function Input({ title, placeholder, onChange, value, type, label }) {
    const inputRef = useRef();
    return (
        <div className={styles.inputWrapper}>
            <div className={styles.inputTitleBar}>
                <div className={styles.inputTitle}>{title}</div>
                {label && label}
            </div>
            <input
                ref={inputRef}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                type={type}
            />
        </div>
    );
}
