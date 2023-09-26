import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import style from "./extended-fab-button.css?inline";
export default component$((props: ExtendedFabButtonProps) => {
  useStylesScoped$(style);
  return (
    <button onClick$={props?.onClick}
      disabled={props.disabled ?? false}
      type={props.type ?? "submit"}
      class={[
        "extended-fab-button label-large",
        `${props.color}-container on-${props.color}-container-text`,
      ]}
    >
      <div style={props.disabled ? 'display: none': 'display: block'} class={["state-layer", `${props.color}`]}></div>
      {props.icon && (
        <span
          class="material-symbols-outlined"
          style={{
            fontSize: "24px",
          }}
        >
          {props.icon}
        </span>
      )}
      <span>
        <Slot />
      </span>
    </button>
  );
});
export interface ExtendedFabButtonProps {
  disabled?: boolean;
  color: "primary" | "secondary" | "tertiary" | "error";
  type?: "submit" | "reset" | "button";
  icon?: string;
  onClick?: () => any;
}
