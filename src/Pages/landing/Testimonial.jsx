import { testimony } from "../../../utilities/accesory";
import {
  Navigation,
  Pagination,
  EffectFade,
  Autoplay,
  Mousewheel,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/mousewheel";

import { motion } from "framer-motion";

const Testimonial = () => {
  const name = testimony.name;
  const statement = testimony.statement;
  const profile = testimony.profile;
  const work = testimony.work;

  const container = {
    initial: { opacity: 0, x: "-40%" },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="bg-places py-10 px-4 ">
      <motion.div
        className="mx-auto text-center "
        variants={container}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="uppercase font-bold text-lightgray tracking-wide text-sm">
          Testimonial
        </h2>
        <div className="text-2xl md:text-3xl font-bold text-gray-800 my-3 mb-8">
          <p>What people say about us</p>
        </div>
      </motion.div>

      <div className="mt-8 md:mt-0">
        <Swiper
          modules={[Pagination, Autoplay, Navigation, EffectFade, Mousewheel]}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          mousewheel={{ forceToAxis: true }}
          speed={1000}
          spaceBetween={30}
          breakpoints={{
            1000: {
              slidesPerView: 2,
            },
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          className="w-full rounded-lg p-4 lg:h-[224px] overflow-hidden"
        >
          {name.map((per, index) => (
            <SwiperSlide
              key={index}
              className="text-lightgray border-2 border-t-lightgray border-b-lightgray p-2 rounded-lg"
            >
              <div className="flex flex-col md:flex-row items-center justify-center relative gap-4">
                <img src={profile[index]} alt="" className="w-20 " />
                <div className="capitalize font-bold py-2 text-center md:text-left">
                  <p className="font-normal">{statement[index]}</p>
                  <p className="text-black mt-4">{per}</p>
                  <p>{work[index]}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
