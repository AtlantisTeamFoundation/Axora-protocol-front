import CoinPriceComponent from "../coinPrice";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const CoinPriceCarousel = () => {
  return (
    <div>
      <Carousel
        orientation="vertical"
        plugins={[Autoplay({ delay: 3000 })]}
        opts={{ align: "start", loop: true }}
      >
        <CarouselContent className="my-auto h-36">
          <CarouselItem>
            <CoinPriceComponent coinID="ethereum" />
          </CarouselItem>
          <CarouselItem>
            <CoinPriceComponent coinID="binancecoin" />
          </CarouselItem>
          <CarouselItem>
            <CoinPriceComponent coinID="polygon-ecosystem-token" />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CoinPriceCarousel;
