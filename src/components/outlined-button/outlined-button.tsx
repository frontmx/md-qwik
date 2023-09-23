import {component$, Slot} from "@builder.io/qwik";
import styles from './outlined-button.module.css';

interface OutlinedButtonProps {
    icon?: string;
}

export const OutlinedButton = component$((props: OutlinedButtonProps) => {
    const hasIcon = props.icon && props.icon !== '';

    return (
        <div class={hasIcon ? styles.mdOutlinedButtonWithIcon : styles.mdOutlinedButton}>
            { hasIcon ?
                <div class={[styles.mdOutlinedButtonIcon, 'material-symbols-outlined']}>{props.icon}</div> :
                null
            }
            <div class={styles.mdOutlinedButtonLabel}><Slot /></div>
        </div>
    );
})