"use client";
import React from "react";
import {
  EffectCreative,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@/app/globals.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/Button/Button";

const Carousel = () => {
  return (
    <div className="relative">
      <Swiper
        grabCursor={true}
        navigation={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[EffectCreative, Pagination, Navigation, Autoplay]}
      >
        {[1, 2, 3].map((val) => (
          <SwiperSlide key={val}>
            <Image
              className="h-[100%] object-cover"
              src={`/images/mainSliders/main-slider-${val}.webp`}
              alt={"slider"}
              width={"3000"}
              height={500}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute max-md:left-[25%] left-14 top-[30%] h-max w-[50%] z-10 flex flex-col items-center">
        <motion.div
          initial={{ x: "50%", opacity: 0 }}
          animate={{ x: "0%", opacity: 100 }}
          transition={{
            duration: 0.4,
            delay: 0.4,
          }}
        >
          <Image
            className="h-[100%]"
            src={`/images/mainLogo.svg`}
            alt={"logo"}
            width={440}
            height={202}
          />
        </motion.div>
        <motion.div
          initial={{ y: "70%", opacity: 0 }}
          animate={{ y: "0%", opacity: 100 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: "easeOut",
          }}
          className="flex gap-2 mt-14"
        >
          <Button variant="contained">Nuestras cervezas</Button>
          <Button variant="outlined">Nuestros servicios</Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Carousel;
