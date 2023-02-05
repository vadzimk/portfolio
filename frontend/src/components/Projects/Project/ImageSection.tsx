import Image from 'next/image';

// import Swiper core and required modules
import {Navigation, Pagination, Keyboard, Autoplay} from 'swiper';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function ImageSection({project, rootClasses = ""}) {
    const priority = project.attributes.Priority
    const imageObjectPosition = Boolean(rootClasses) && priority % 2 === 0 ? "left bottom" : "right bottom"
    console.log(priority, imageObjectPosition, rootClasses)
    return (
        <Swiper
            modules={[Navigation, Pagination, Keyboard, Autoplay]}
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: true,
            }}
            navigation
            pagination={{
                type: "progressbar",
            }}
            keyboard={true}
            className={`bg-gray200 flex flex-col justify-center w-full sm:aspect-[1.34] max-w-[648px] ${rootClasses}`}>
            <div className="swiper-pagination w-full h-10 bg-red-200"></div>
            {project.attributes.Image.data?.map(imageDatum => (
                    <SwiperSlide
                        key={imageDatum.id}
                        className="flex flex-col justify-between">
                        <div className={`sm:pt-7 md:pt-14 sm:flex h-full
                                ${Boolean(rootClasses) && priority % 2 === 0
                            ? 'sm:justify-start'
                            : 'sm:justify-end'}`}>
                            <div className="h-full aspect-[1.34] saturate-[30%] hover:saturate-100">
                                <div className="relative h-full w-full">
                                    <Image fill
                                           style={{objectFit: "contain", objectPosition: imageObjectPosition}}
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