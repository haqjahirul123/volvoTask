import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomButtonGroup from './CustomArrow'
import styles from './Style.module.css'

import CarCard from "./CarCard";
import NotFound from '../NotFound';
import { useEffect, useState } from "react";

const CarCarousel=({CarsInfos})=> {
    //const CarsInfos =props.CarsInfos
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1000 },
          items: 4,
          slidesToSlide: 4, // optional, default to 1.
          showDots: false,
        },
        tablet: {
          breakpoint: { max: 1000, min: 600},
          items: 2,
          slidesToSlide: 2, // optional, default to 1.
          showDots: true,
        },
        mobile: {
          breakpoint: { max: 600, min: 0 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
          showDots: true,
        } 
      };

      const carInfoCard= CarsInfos.map((CarInfo: { id: any; })=>{
          return (
             <CarCard  key={CarInfo.id} CarInfo={CarInfo}/>  
         )
    
      })

      const dot:any=()=> {
    
        {
          if ( typeof window !== undefined) 
           {
             responsive.mobile.breakpoint.max>= window.innerWidth?false:true
          }
      
        }
      }

    return (
        <div>
            <Carousel 
            swipeable={false}
            draggable={false}
            arrows={false}
            responsive={responsive}
            //showDots={((typeof window !== "undefined")&&(window.innerWidth <= 600))  ? true:false}
            //showDots={dotshow}
            showDots={false}
            //showDots ={dot}
            ssr={true} // means to render carousel on server-side
            infinite={true}
            keyBoardControl={true}
            customTransition="all .5"    
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            containerClass={styles.containerPaddingBottom}
            customButtonGroup={<CustomButtonGroup />}
           // customButtonGroup={responsive.desktop.breakpoint.min< 1000 ?<CustomButtonGroup />: <NotFound/>}
           //removeArrowOnDeviceType={["tablet", "mobile"]}
          
            >
              {carInfoCard.length >0 ? carInfoCard : <NotFound/>}  
            </Carousel>
            
        </div>
    )

  
}

export default  CarCarousel


