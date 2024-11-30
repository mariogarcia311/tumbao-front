import { Button as MuiButton, styled, ButtonProps } from "@mui/material";
import React from "react";

interface CustomButtonProps extends ButtonProps {
  children: React.ReactNode;
  borderRadius?: string;
}

const CustomButton = styled(MuiButton)(({ theme, variant, color }) => {
  return {
    textTransform: "none",
    transition: "all 0.6s",
    "&:hover": {
      color: "black",
      backgroundColor: "white",
      borderColor:
        variant === "outlined" && (!color || color === "primary") && "white",
    },
  };
});

const Button: React.FC<CustomButtonProps> = ({
  children,
  borderRadius = "4px",
  sx,
  ...restProps
}) => {
  return (
    <CustomButton disableElevation sx={{ borderRadius, ...sx }} {...restProps}>
      {children}
    </CustomButton>
  );
};

export default Button;
