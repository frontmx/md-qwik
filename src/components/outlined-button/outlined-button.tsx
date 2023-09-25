import {component$, Slot, useSignal, useStylesScoped$} from "@builder.io/qwik";
import styles from './outlined-button.css?inline';

interface OutlinedButtonProps {
    icon?: string;
    disabled?: boolean;
}

export const OutlinedButton = component$((props: OutlinedButtonProps) => {
    const hasIcon = props.icon !== undefined && (props.icon !== '');
    const showRipple = useSignal(false);
    useStylesScoped$(styles);

    return (
        <button onMouseUp$={() => {
            showRipple.value = true;
            setTimeout(() => {
                showRipple.value = false;
            }, 300);
        }}
                class={[
                    'mdOutlinedButton',
                    hasIcon ? 'mdOutlinedButtonWithIcon' : null
                ]} disabled={props.disabled}>
            <div class={'rippleContainer'}>
                {showRipple.value ?
                    <span class={'ripple'}></span> :
                    null
                }
            </div>
            {hasIcon ?
                <div class={['mdOutlinedButtonIcon', 'material-symbols-outlined']}>{props.icon}</div> :
                null
            }
            <div class={'mdOutlinedButtonLabel'}><Slot/></div>
        </button>
    );
})