import Image from "next/image";
import Link from 'next/link';
import { Container, Grid } from "@mui/material";
import HeroBanner from "@/components/hero-banner/HomeBanner";
import TitleBlue from "@/components/title/TitleBlue";
import InfoCard from "@/components/info-card/InfoCard";
import Accordian from "@/components/accordian/Accordian";
import WhiteButton from "@/components/button/WhiteBtn";
import OurPartner from "@/components/partner/OurPartner";
import HoverBox from "@/components/hover-box/HoverBox";
import homeAccordian from "@/utils/home-accordian-data";
import cardList from "@/utils/cred-list-data";
import hoverCard from "@/utils/hover-card-data";

export default function Home() {
  return (
    <>
      <HeroBanner backgroundImage="/images/home-banner.png" btnName="Read More" title="" />
      <Container>
        <div className="text-center mt-[60px] md:mb-[80px] mb-[60]">
          <h2 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl text-center font-semibold mb-5 text-primary">Your Partner In Technology</h2>
          <p className="text-black text-sm sm:text-lg">
            In today&apos;s dynamic business landscape, the importance of robust IT security, cutting-edge software development,
            and skilled staffing solutions cannot be overstated. At Global Peak Engineering, we recognize the critical role these
            pillars play in the success of modern enterprises.
          </p>
        </div>
        <Grid container spacing={4} className="sm:mt-10 mt-14">
          {cardList?.map((item) => (
            <Grid item xs={12} sm={12} md={4} lg={4} key={item.id}>
              <InfoCard
                image={item.image}
                title={item.title}
                paragraph={item.paragraph}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      <div id="home-acc"></div>
      <section className="lg:mt-28 md:mt-20 mt-16">
        <Container>
          <h2 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl text-center font-semibold mb-5 text-primary">Our Services</h2>
          {homeAccordian.map((item) => (
            <Accordian
              key={item.id}
              accNo={item.accNo}
              expandText={item.text}
              title={item.title}
              pageLink={item.pageLink}
              linkName={item.linkName}
            />
          ))}

        </Container>
      </section>

      <section className="gpe-information mt-20">
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={6}>
              <div className="bg-black flex w-full h-full">
                <Grid container>
                  <Grid item xs={7} md={7} lg={7} className="sm:px-8 sm:py-12 px-4 py-4">
                    <Link href="https://www.linkedin.com/company/globalpeakengineering" target="_blank">
                      <Image
                        src="/images/social-med.png"
                        alt="social media linkedin"
                        width={150}
                        height={50}
                        className="object-cover"
                      />
                    </Link>
                    <div className="text-white text-base py-5">Follow Us on LinkedIn</div>
                    <p className="text-white text-sm">
                      Connect with us for empower businesses through a comprehensive suite of services that enhance security
                    </p>
                  </Grid>
                  <Grid item xs={5} md={5} lg={5} className="relative overflow-hidden">
                    <Image
                      src="/images/linkedin-banner.png"
                      alt="linkedin banner"
                      fill={true}
                      className="object-cover transition duration-300 ease-in-out hover:scale-110"
                    />
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <div className="bg-light-blue flex w-full h-full">
                <Grid container>
                  <Grid item xs={7} md={7} lg={7} className="sm:px-8 sm:py-12 px-4 py-4">
                    <Link href="/">
                      <Image
                        src="/images/logo.png"
                        alt="linkedin"
                        width={200}
                        height={60}
                        className="object-cover"
                      />
                    </Link>
                    <Link href="/white-paper">
                      <div className="text-black text-base py-5 underline underline-offset-4">Download Whitepaper</div>
                    </Link>
                    <p className="text-black text-sm">
                      Learn more about third party risk management & empower businesses through a comprehensive suite of
                      services that enhance security.
                    </p>
                  </Grid>
                  <Grid item xs={5} md={5} lg={5} className="relative overflow-hidden">
                    <Image
                      src="/images/download.png"
                      alt="linkedin banner"
                      fill={true}
                      className="object-cover transition duration-300 ease-in-out hover:scale-110"
                    />
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className="my-20">
        <Container>
          <h2 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl text-center font-semibold mb-5 text-primary">
            Industry Knowledge
          </h2>
          <Grid container>
            <Grid item xs={12} md={12} lg={12}>
              <p className="text-black lg:text-lg md:text-base text-sm sm:text-left text-center">
                We cordially invite you to delve into our comprehensive industry knowledge focused on digital
                transformation within the realms of Financial, Health, and Government sectors.
                Our curated resources offer deep insights into the dynamic landscape of these crucial sectors,
                highlighting the latest trends, emerging technologies, regulatory frameworks, and best practices
                driving digital transformation.
              </p>
            </Grid>
          </Grid>
          <Grid container spacing={4} className="mt-4">
            {hoverCard.map((item) => (
              <Grid item xs={12} sm={12} md={4} lg={4} key={item.title}>
                <HoverBox
                  // title={item.title}
                  id={item.title}
                  info={item.info}
                  subtitle={item.subtitle}
                  img={item.img}
                  pageLink={item.pageLink}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </section >
      {/* <section className="bg-primary">
        <Grid container>
          <Grid item xs={12} md={6} lg={6} className="relative overflow-hidden">
            <Image
              src="/images/learn-more-img.png"
              alt="Learn more about GPE"
              layout="fill"
              className="object-cover transition duration-300 ease-in-out hover:scale-110"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6} className="align-middle">
            <div className="p-12 max-w-[500px] sm:text-left text-center">
              <h3 className="text-white xl:text-5xl lg:text-4xl md:text-3xl text-2xl mb-12">Learn more about Vision to Delivery</h3>
              <div className="text-white text-base font-semibold pb-4">Build Strategies</div>
              <p className="text-black text-sm mb-5">
                By integrating IT security, software development, and staffing services under one roof, Global Peak Engineering streamlines the process of enhancing organizational capabilities.
              </p>
              <Link href="/about"><WhiteButton btnName="Read More" /></Link>
            </div>
          </Grid>
        </Grid>
      </section> */}
      <OurPartner />
    </>

  );
}
