/* eslint-disable @next/next/no-img-element */
// Import Swiper React components
import SwipeCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Container, ContainerToo, Content } from './styles';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwipeCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay])

export function Carrousel(){

    
    return (
        <Content>
        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      slidesPerView={1}
      autoplay={{delay: 5000,}}
      pagination={{ clickable: true }}
      navigation
      //scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}

    >
      
      <SwiperSlide>
        <Container>
            <img src='/image/LogoWithe.svg' alt='' />
        </Container>
      </SwiperSlide>
      <SwiperSlide>
        <ContainerToo>
        <img src='/image/LogoWithe.svg' alt='' />
        </ContainerToo>
      </SwiperSlide>
    </Swiper>
        </Content>
  

    )
} 