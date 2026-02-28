import path from "path";
import fs from "fs/promises";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import { LayoutFive } from "@/layouts";
import HornbillController from "@/components/Hornbill/HornbillController";

import HeroSectionStyleFive from "@/components/hero/styleFive";
import AboutUsStyleOne from "@/components/aboutUs/aboutUsStyleOne";
import Feature from "@/components/features";
import ZigZagSection from "@/components/zigzag/ZigZagSection";
import VideoBanner from "@/components/banner/videoBanner";
import TitleSection from "@/components/titleSection";
import AminitiesItem from "@/components/aminities/item";
import TestimonialCarouselItem from "@/components/testimonialCarousel";
import BlogItem from "@/components/blog";

import aminitiesData from "@/data/aminities/index.json";
import testimonialData from "@/data/testimonial";
import blogData from "@/data/blog";
import featuresData from "@/data/service"; 
import SingleImageCard from "@/components/storycard/SingleImageCard";

import { getProducts, productSlug } from "@/lib/product";
import HornbillNavigator from "@/components/Hornbill/HornbillNavigator";
import SocialImpactSection from "@/components/SocialImpact/SocialImpactSection";

function HomePage({ Herodata }) {

  const { products } = useSelector((state) => state.product);
  const featureData = getProducts(featuresData, "buying", "featured", 3);

  /* --------------------------
     Slick Arrows
  --------------------------- */

  const SlickArrowLeft = (props) => (
    <button {...props} className="slick-prev slick-arrow">
      <FaArrowLeft />
    </button>
  );

  const SlickArrowRight = (props) => (
    <button {...props} className="slick-next slick-arrow">
      <FaArrowRight />
    </button>
  );

  const blogSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      { breakpoint: 1199, settings: { slidesToShow: 2 } },
      { breakpoint: 575, settings: { slidesToShow: 1 } },
    ],
  };

  const testimonialSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 575, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <LayoutFive topbar={true}>

      {/* 🔥 Hornbill Bird (Fixed Global Animation) */}
      {/* <HornbillController /> */} 

      {/* <HornbillNavigator/> */}


      {/* Hero Section */}
      <HeroSectionStyleFive data={Herodata} />

      {/* About */}
      <AboutUsStyleOne sectionSpace="pt-120 pb-90" />

      <SingleImageCard/>

      {/* Services */}
      <Feature
        classes="section-bg-1"
        servicebtn={true}
        iconTag={false}
        data={featureData}
        headingClasses="section-subtitle-2"
        titleSectionData={{
          sectionClasses: "text-center",
          subTitle: "Our Services",
          title: "Our Main Focus",
        }}
      />

      {/* ZigZag Sections */}
      <ZigZagSection
        image="/img/bg/bunglow1.png"
        title="Luxury Hill View Bungalow"
        description="Experience premium architecture blended with peaceful hills and lush greenery."
      />

      <ZigZagSection
        image="/img/bg/bunglow2.png"
        title="Infinity Pool Retreat"
        description="Relax in a private infinity pool with breathtaking sunset views and luxury amenities."
        reverse
      />

      <ZigZagSection
        image="/img/bg/bunglow3.png"
        title="Executive Conference Pavilion"
        description="Modern conference facilities designed for corporate retreats and executive gatherings."
      />

      {/* Video */}
      <div className="ltn__video-popup-area">
        <VideoBanner />
      </div>

       <SocialImpactSection/> 

      {/* Amenities */}
      <div className="ltn__category-area ltn__product-gutter pt-115 pb-90">
        <Container>
          <Row>
            <Col xs={12}>
              <TitleSection
                sectionClasses="text-center"
                headingClasses="section-subtitle-2"
                titleSectionData={{
                  subTitle: "Our Amenities",
                  title: "Building Amenities",
                }}
              />
            </Col>
          </Row>

          <Row className="justify-content-center">
            {aminitiesData.map((data, key) => (
              <Col key={key} xs={12} sm={6} md={4} lg={3}>
                <AminitiesItem data={data} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* Testimonials */}
      <div
        className="ltn__testimonial-area bg-image-top pt-115 pb-70"
        style={{ backgroundImage: `url("../img/bg/20.jpg")` }}
      >
        <Container>
          <Row>
            <Col lg={12}>
              <TitleSection
                sectionClasses="text-center"
                headingClasses="section-subtitle-2"
                titleSectionData={{
                  subTitle: "Our Testimonial",
                  title: "Clients Feedback",
                }}
              />
            </Col>
          </Row>

          <Slider {...testimonialSettings}>
            {testimonialData.map((data, key) => (
              <TestimonialCarouselItem key={key} data={data} />
            ))}
          </Slider>
        </Container>
      </div>

      {/* Blog */}
      <div className="ltn__blog-area pb-70">
        <Container>
          <Row>
            <Col lg={12}>
              <TitleSection
                sectionClasses="text-center"
                headingClasses="section-subtitle-2"
                titleSectionData={{
                  subTitle: "News & Blogs",
                  title: "Latest News Feeds",
                }}
              />
            </Col>
          </Row>

          <Slider {...blogSettings}>
            {blogData.map((data, key) => (
              <BlogItem
                key={key}
                baseUrl="blog"
                data={data}
                slug={productSlug(data.title)}
              />
            ))}
          </Slider>
        </Container>
      </div>

    </LayoutFive>
  );
}

/* --------------------------
   Static Props
--------------------------- */

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "src/data/hero/", "index.json");
  const Herodata = JSON.parse(await fs.readFile(filePath));

  return {
    props: { Herodata },
  };
}

export default HomePage;