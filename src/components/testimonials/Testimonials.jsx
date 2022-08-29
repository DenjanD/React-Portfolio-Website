import React from "react";
import "./testimonials.css";
import "./TestimonialsContent";
import Avatar1 from "../../assets/avatar1.jpg";
import Avatar2 from "../../assets/avatar2.jpg";
import Avatar3 from "../../assets/avatar3.jpg";
import Avatar4 from "../../assets/avatar4.jpg";

// testimonial's content component
import { TestimonialsContent } from "./TestimonialsContent";

// import Swiper core and required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>What have I achieved</h5>
      <h2>My Achievments</h2>

      <Swiper
        className="container testimonials-container"
        // install Swiper modules
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <TestimonialsContent
            avatar={Avatar1}
            name="Database Programming with SQL"
            href="https://drive.google.com/file/d/1-lYA4cr2gpI2ITx90HzLAmHh318a0oa6/view"
            review="Oracle Academy"
          />
        </SwiperSlide>

        <SwiperSlide>
          <TestimonialsContent
            avatar={Avatar2}
            name="Scrum Foundation Professional Sertificate"
            href="https://drive.google.com/file/d/136c89b51TjVc2KKz5AwyoAET3M66KvEk/view"
            review="Scrum Foundation"
          />
        </SwiperSlide>

        <SwiperSlide>
          <TestimonialsContent
            avatar={Avatar3}
            name="Database Design"
            review="Oracle Academy"
            href="https://drive.google.com/file/d/1r3oCgrdyjyHd2thrJgCFbgreQ6CnGCO5/view"
          />
        </SwiperSlide>

        <SwiperSlide>
          <TestimonialsContent
            avatar={Avatar4}
            name="KOMINFO"
            href="https://drive.google.com/file/d/1HBP-439n8IEEqo8IJZTBa_L7ScneBQYn/view"
            review="Seminar Nasional dan Lokakarya Pandu Digital"
          />
        </SwiperSlide>

        <SwiperSlide>
          <TestimonialsContent
            avatar={Avatar4}
            name="Politeknik Pos Indonesia"
            href="https://drive.google.com/file/d/1SJnjqu2cIvPRfWfr-9eB5FH9Xs0kcUjF/view"
            review="Peran Teknologi Digital Dalam Pandemi dan Perubahan Budaya Kerja"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
