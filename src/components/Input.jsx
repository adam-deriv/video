import styles from './Input.module.scss';

export default function Input({ title, placeholder, onChange, value, type, label, ...props }) {
  return (
    <div className={styles.inputWrapper}>
      <div className={styles.inputTitleBar}>
        <div className={styles.inputTitle}>{title}</div>
        {label && label}
      </div>
      <input
        className={styles.inputApp}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        type={type}
        {...props}
      />
    </div>
  );
}