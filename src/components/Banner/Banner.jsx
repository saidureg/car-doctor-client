import slider1 from "../../assets/images/banner/1.jpg";
import slider2 from "../../assets/images/banner/2.jpg";
import slider3 from "../../assets/images/banner/3.jpg";
import slider4 from "../../assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full max-h-[80vh] my-8">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={slider1} className="w-full rounded-xl" />
        <div className="absolute h-full flex items-center rounded-xl left-0 right-8 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 pl-12">
            <h3 className="text-6xl w-5/12">
              Affordable Price For Car Servicing
            </h3>
            <p className="w-1/2 text-xl">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-active btn-warning mr-5">
                Discover More
              </button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-8 bottom-2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={slider2} className="w-full rounded-xl" />
        <div className="absolute h-full flex items-center rounded-xl left-0 right-8 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 pl-12">
            <h3 className="text-6xl w-5/12">
              Affordable Price For Car Servicing
            </h3>
            <p className="w-1/2 text-xl">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-active btn-warning mr-5">
                Discover More
              </button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-8 bottom-2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={slider3} className="w-full rounded-xl" />
        <div className="absolute h-full flex items-center rounded-xl left-0 right-8 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 pl-12">
            <h3 className="text-6xl w-5/12">
              Affordable Price For Car Servicing
            </h3>
            <p className="w-1/2 text-xl">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-active btn-warning mr-5">
                Discover More
              </button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-8 bottom-2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={slider4} className="w-full rounded-xl" />
        <div className="absolute h-full flex items-center rounded-xl left-0 right-8 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 pl-12">
            <h3 className="text-6xl w-5/12">
              Affordable Price For Car Servicing
            </h3>
            <p className="w-1/2 text-xl">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-active btn-warning mr-5">
                Discover More
              </button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-8 bottom-2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
