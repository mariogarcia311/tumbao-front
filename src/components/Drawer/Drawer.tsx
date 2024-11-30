import { Theme } from "@/theme";
import { Drawer as DrawerUi, styled } from "@mui/material";
import React from "react";

export const Drawer = styled(DrawerUi)(({ theme }: { theme?: Theme }) => ({
  "& .MuiDrawer-paper": {
    backgroundColor: theme?.palette.black.light,
  },
}));

export default Drawer;
