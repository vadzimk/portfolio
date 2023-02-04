import Image from 'next/image';

// import Swiper core and required modules
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function ImageSection({project}) {
    const priority = project.attributes.Priority

    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            // spaceBetween={50}
            slidesPerView={2}
            navigation
            pagination={{
                clickable: true,
                el: 'swiper-pagination'
            }}
            scrollbar={{draggable: true}}

            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className={`bg-gray200 flex flex-col justify-center w-full sm:aspect-[1.34] max-w-[648px]
                    ${priority % 2 === 0
                ? 'sm:col-start-2 sm:row-start-1 sm:col-span-1'
                : ''}
            `}>
            {project.attributes.Image.data?.map(imageDatum => (
                    <SwiperSlide
                        key={imageDatum.id}
                        className="
                    flex flex-col justify-between">
                        <div className="swiper-pagination w-full h-10 bg-red-600"></div>
                        <div className={`
                    sm:flex 
                    h-full md:h-[90%] 
                        ${priority % 2 === 0
                            ? 'sm:justify-start'
                            : 'sm:justify-end'}`}>
                            <div className="h-full aspect-[1.34] saturate-[30%] hover:saturate-100">
                                <div className="relative h-full w-full">


                                    <Image fill
                                           style={{objectFit: "contain", objectPosition: "right bottom"}}
                                           alt={`Project ${project.attributes.Title} image`}
                                           src={`${imageDatum.attributes.formats?.small?.url || imageDatum.attributes.url}`}
                                    />

                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                )
            )}
        </Swiper>
    )
}