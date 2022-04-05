import { useRef } from 'react';
import styles from './Input.module.scss';

export default function Input({ title, placeholder, onChange, value, type, label, defaultValue, className }) {
    const inputRef = useRef();
    return (
        <div className={styles.inputWrapper}>
            <div className={styles.inputTitleBar}>
                <div className={styles.inputTitle}>{title}</div>
                {label && label}
            </div>
            <input
                defaultValue={defaultValue}
                ref={inputRef}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                type={type}
                className={className}
            />
        </div>
    );
}
