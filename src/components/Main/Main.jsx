"use client"

import React from 'react'
import styles from "./styles.module.scss"
import Button from "@/components/Button/Button";
import Title from '../Title/Title';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const Main = () => {

    return (
        <>
            <div className={styles.main}>
                <Swiper className="mySwiper" style={{width: "100%", height: "100%"}}
                    slidesPerView={1}
                    modules={[Pagination, Navigation, Autoplay]}
                    navigation={true}
                    pagination={true}
                    autoplay={{
                        delay: 5000,
                    }}
                >
                    <SwiperSlide className={styles.main}>
                    <div className={styles.pastel}>
                            <Title textTitle="PASTELERIA PRI A TU SERVICIO" textParrafo="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea beatae voluptatem ipsa ab vero veniam deserunt neque voluptatibus obcaecati quis nobis voluptates, blanditiis ducimus enim quas, perferendis fugiat ut minus?"/>                    <div className={styles.navegadores}>
                            <Button tipo="primario" text="Hola soy un botón"></Button>

                            <Button tipo="secundario" text="Hola soy un botón"></Button>
                        </div>
                    </div>
                    <div>
                        <img src='./tortafrutilla.png'></img>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.main}>
                    <div className={styles.pastel}>
                            <Title textTitle="PASTELERIA PRI A TU SERVICIO" textParrafo="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea beatae voluptatem ipsa ab vero veniam deserunt neque voluptatibus obcaecati quis nobis voluptates, blanditiis ducimus enim quas, perferendis fugiat ut minus?"/>                    <div className={styles.navegadores}>
                            <Button tipo="primario" text="Hola soy un botón"></Button>

                            <Button tipo="secundario" text="Hola soy un botón"></Button>
                        </div>
                    </div>
                    <div>
                        <img src='./tortafrutilla.png'></img>
                    </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default Main