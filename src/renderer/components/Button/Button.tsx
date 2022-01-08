import React from 'react';
import { Button as GrommetButton } from 'grommet';

enum ButtonType {
  primary = 'primary',
  secondary = 'secondary',
}

interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLAnchorElement> &
    React.MouseEventHandler<HTMLButtonElement>;
  name: string;
  disabled?: boolean;
  theme?: ButtonType;
  icon?: React.ReactElement<any, any>;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  theme = ButtonType.primary,
  icon,
  disabled,
  children,
}) => {

  return (
    <GrommetButton
      icon={icon}
      onClick={onClick}
      primary={theme === ButtonType.primary}
      secondary={theme === ButtonType.secondary}
      label={children}
      disabled={disabled}
    />
  );
};

export default Button;
