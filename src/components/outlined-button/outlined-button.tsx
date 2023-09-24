import {component$, Slot, useSignal} from "@builder.io/qwik";
import styles from './outlined-button.module.css';

interface OutlinedButtonProps {
    icon?: string;
    disabled?: boolean;
}

export const OutlinedButton = component$((props: OutlinedButtonProps) => {
    const hasIcon = props.icon !== undefined && (props.icon !== '');
    const showRipple = useSignal(false);

    return (
        <button onMouseUp$={() => {
            showRipple.value = true;
            setTimeout(() => {
                showRipple.value = false;
            }, 300);
        }}
                class={[
                    styles.mdOutlinedButton,
                    hasIcon ? styles.mdOutlinedButtonWithIcon : null
                ]} disabled={props.disabled}>
            <div class={styles.rippleContainer}>
                {showRipple.value ?
                    <span class={styles.ripple}></span> :
                    null
                }
            </div>
            {hasIcon ?
                <div class={[styles.mdOutlinedButtonIcon, 'material-symbols-outlined']}>{props.icon}</div> :
                null
            }
            <div class={styles.mdOutlinedButtonLabel}><Slot/></div>
        </button>
    );
})