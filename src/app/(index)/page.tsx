"use client";

import Button from "@/components/Button/Button";
import { Typography } from "@mui/material";
import BodyIndex from "./_components/BodyIndex";
import Carousel from "./_components/Carousel";

export default function Home() {
  return (
    <main>
      <Carousel />
      {false && (
        <div className="">
          <Button variant="contained" color="primary">
            Success
          </Button>
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
          <Button
            variant="outlined"
            color="whiteBtn"
            borderRadius="0"
            sx={{ margin: "3px" }}
          >
            Outlined
          </Button>
          <Typography variant="h1" color={"primary"}>
            Heading 1
          </Typography>
        </div>
      )}
      <BodyIndex />
    </main>
  );
}
