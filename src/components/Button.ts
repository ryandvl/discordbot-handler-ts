import {
  ButtonBuilder,
  ButtonStyle,
  ComponentEmojiResolvable,
} from "discord.js";

export interface ButtonStyleProps {
  [key: string]: number;
}

export interface ButtonProps {
  emoji: ComponentEmojiResolvable;
  label: string;
  style: string;
  id: string;
  disabled: boolean;
}

const buttonStyles: ButtonStyleProps = {
  primary: 1,
  secondary: 2,
  success: 3,
  danger: 4,
  link: 5,
};

const Button = (options: ButtonProps) => {
  const button = new ButtonBuilder();

  if ("emoji" in options) button.setEmoji(options.emoji);

  if ("label" in options) button.setLabel(options.label);

  if (options.style && options.style.toUpperCase() !== "LINK")
    button.setCustomId(options.id);
  else button.setURL(options.id);

  if ("style" in options)
    options.style.toUpperCase() == "LINK"
      ? button.setStyle(ButtonStyle.Link)
      : button.setStyle(buttonStyles[options.style] ?? ButtonStyle.Danger);
  else button.setStyle(ButtonStyle.Primary);

  if ("disabled" in options) button.setDisabled(options.disabled);

  return button;
};

export default Button;
