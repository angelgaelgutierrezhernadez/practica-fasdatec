import { Navigation, Pagination} from 'swiper/modules';
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import carrucel1 from "../../assets/img/Property 1=Carrusel1.png";
import carrusel2 from "../../assets/img/Property 1=Carrusel2.png";
import carrusel3 from "../../assets/img/Property 1=Carrusel3.png";


import './Carrusel.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

<link rel="stylesheet" href="carrusel.html" />

const Carrusel = () => {
    return (
        <>
           <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className='myswiper'
            >


                    <SwiperSlide>
                        <div className="correccion">
                        <img src={carrucel1} alt="" />
                        </div>
                    </SwiperSlide>



            <SwiperSlide>
                <div className="correccion">
                <img src={carrusel2} alt="" />
                </div>
                </SwiperSlide>



                <SwiperSlide>
                    <div className="correccion">
                    <img src={carrusel3} alt="" />
                    </div>

                </SwiperSlide>




            </Swiper>
        </>
    )
}

export default Carrusel