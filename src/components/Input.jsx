import { useRef } from 'react';
import styles from './Input.module.scss';

export default function Input({ title, placeholder, onChange, value, type, LabelComponent }) {
    const inputRef = useRef();
    console.dir(inputRef.current);
    return (
        <div className={styles.inputWrapper}>
            <div className={styles.inputTitleBar}>
                <div className={styles.inputTitle}>{title}</div>
                {LabelComponent && <LabelComponent value={inputRef.current.value} />}
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
