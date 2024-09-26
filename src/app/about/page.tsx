import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MiniBanner from '@/components/hero-banner/MiniBanner';
import { Container, Grid, Button } from '@mui/material';
import { CheckCircleOutline, AdsClick } from '@mui/icons-material';
import TitleBlue from "@/components/title/TitleBlue";
import visionList from "@/utils/about-vision-data";
// import AboutSlider from "@/components/slider/AboutSlider";
import choose from "@/utils/choose-gpe-data";

const AboutUs = () => {
    return (
        <React.Fragment>
            <MiniBanner backgroundImage="/images/mission-banner.png" />
            <Container>
                <TitleBlue
                    textBlue="About Us"
                    subInfo="In today's dynamic business landscape, the importance of robust IT security, cutting-edge software development, and skilled staffing solutions cannot be overstated. At Global Peak Engineering, we recognize the critical role these pillars play in the success of modern enterprises."
                />

                <Grid container spacing={2} className="mt-10 mb-12">
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <div className="relative m-auto max-w-[560px]">
                            <div className="absolute right-6 top-2 overflow-hidden minimg-mob">
                                <Image
                                    src="/images/our-vision-two.png"
                                    alt="vision two"
                                    height={200}
                                    width={200}
                                    className="transition duration-300 ease-in-out hover:scale-110"
                                />
                            </div>
                            <Image
                                src="/images/our-vision-one.png"
                                alt="vision image large"
                                height={550}
                                width={450}
                            />
                            <div>
                                <Link href="/contact">
                                    <Button
                                        className="custom-contact-btn"
                                        variant="contained"
                                        color="primary"
                                    >
                                        Contact Us
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <div className="text-black">
                            <h4 className="lg:text-4xl md:text-3xl text-2xl sm:mb-10 mb-6 text-primary">Our Vision</h4>
                            <p className="sm:text-base text-sm sm:mb-8 mb-5 md:text-lg">
                                At Global Peak Engineering, our vision is to pioneer innovative solutions and uphold
                                the highest standards of integrity in navigating the complexities of the modern digital
                                landscape. We strive to be recognized as the premier partner for organizations
                                seeking to harness the power of technology for sustainable growth and societal impact.
                            </p>
                            <p className="sm:text-base text-sm md:text-lg">
                                Through relentless innovation and unwavering integrity, we envision a future where our transformative
                                solutions drive positive change, empower individuals and communities, and shape a world defined by
                                progress, trust, and prosperity.
                            </p>
                        </div>
                        {/*<Grid container spacing={2} className="mt-3 text-lg">
                            {visionList.map((list) => (
                                <Grid item xs={12} sm={12} md={6} lg={6} key={list.tag}>
                                    <div className="flex align-middle text-black">
                                        <span className="mr-2 text-sm"><CheckCircleOutline /></span>
                                        {list.tag}
                                    </div>
                                </Grid>
                            ))}
                        </Grid>*/}
                    </Grid>
                </Grid>
            </Container>
            {/* <section className="choose-gpe clear-both">
                <Container>
                    <Grid container spacing={6}>
                        <Grid item xs={12} sm={12} md={6} lg={6} className="overflow-hidden">
                            <Image
                                src="/images/choose-gpe.png"
                                alt="why choose GPE"
                                height={400}
                                width={560}
                                className="transition duration-300 ease-in-out hover:scale-110"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <div className="text-primary mb-4 text-base">CORE FEATURES</div>
                            <h2 className="text-white xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold">Why Choose Us</h2>

                            <Grid container spacing={2} className="sm:mt-7 mt-3">
                                {choose.map((item) => (
                                    <Grid item xs={6} sm={6} md={4} lg={4} key={item.id}>
                                        <div className="bg-black hover:bg-black-200 text-center gpe-info py-5 relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                                            <Image
                                                src={item.img}
                                                alt="GPE"
                                                height={50}
                                                width={50}
                                                className="m-auto pb-5"
                                            />
                                            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-sky-300 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-20"></div>
                                            <h5 className="text-white text-sm">{item.title}</h5>
                                        </div>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </section> */}
            {/* <section className="custom-slider clear-both">
                <Container>
                    <AboutSlider />
                </Container>
            </section> */}
            <details>
                <summary><Container> <h3 className="md:text-4xl hover:text-sky-700 sm:text-3xl text-2xl mb-8 sm:text-left text-cente cursor-pointer items-center flex">Meet Our Team <span className="text-primary pl-2 animate-ping"><AdsClick /></span></h3></Container></summary>
                <section className="mt-10 py-16 get-started">
                    <Container>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12} md={4} lg={4}>
                                <figure className="w-full text-center">
                                    <Image
                                        src="/images/michel-img.png"
                                        alt="Meet team"
                                        height={580}
                                        width={370}
                                        className="m-auto border-r-4"
                                        loading="lazy"
                                    />
                                    <figcaption className="text-primary underline">Michael Ferrand</figcaption>
                                </figure>

                            </Grid>
                            <Grid item xs={12} sm={12} md={8} lg={8}>
                                <div className="text-black">
                                    <div className="text-sm leading-[22px] sm:text-justify text-center our-team-info sm:text-lg">
                                        <p style={{ marginBottom: '1rem' }}>
                                            Introducing GPE Executive Partner, <strong>Michael Ferrand</strong>, a dynamic industry veteran whose journey
                                            seamlessly blends a rich background in automotive mechanics with a distinguished career
                                            in Information Technology. From his formative years, working on engines and mastering
                                            complex automotive and motorcycle repairs, to serving as an F-14 Aviation Mechanic in the
                                            Navy, Michael has consistently demonstrated a knack for problem-solving and a relentless
                                            pursuit of excellence.
                                        </p>
                                        <p style={{ marginBottom: '1rem' }}>
                                            Driven by an evolving fascination with technology, Michael transitioned in the mid-eighties
                                            to the realm of IT, where he delved into the intricacies of client-server architectures
                                            and distributed system solutions. With an unwavering commitment to staying at the forefront
                                            of digital industry advancements, he dedicated years to data center management and security.
                                        </p>
                                        <p style={{ marginBottom: '1rem' }}>
                                            Michael moved towards application development, technical project management, and IT
                                            security as his career progressed. Armed with over twenty years of experience as an IT
                                            consultant, Michael thrives on tackling new challenges and delivering innovative solutions.
                                            His passion for continuous learning, coupled with a natural inclination for troubleshooting,
                                            has fueled his success in navigating the ever-evolving landscape of technology.
                                            Outside of the professional realm, Michael finds joy in pursuits like cycling, photography,
                                            flying as a Licensed Private Pilot, engaging in DIY projects, and indulging his love for motorcycles and automobiles.
                                        </p>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>

                        <Grid container spacing={3} className="border-t-2 border-gray-300 mt-4">
                            <Grid item xs={12} sm={12} md={8} lg={8}>
                                <div className="text-black">
                                    <div className="text-sm leading-[22px] sm:text-justify text-center our-team-info sm:text-lg">
                                        <p style={{ marginBottom: '1rem' }}>
                                            With over two decades of experience, <strong>Jon</strong> has a proven track record in leading global talent acquisition
                                            programs and building strategic partnerships with senior cross-functional stakeholders. He has
                                            successfully filled over 2,000 roles across various levels, from individual contributors to
                                            middle management and senior leadership, including confidential searches. Jon is known for
                                            consistently earning high Net Promoter Scores (NPS) and excels as a player-coach, leading teams
                                            in AMER, EMEA, and APAC regions.
                                        </p>
                                        <h4 className="text-primary mb-3">Global Expertise</h4>
                                        <p style={{ marginBottom: '1rem' }}>
                                            IT & Engineering: Specializes in cybersecurity, software engineering, cloud, containerization, serverless compute,
                                            DevOps, systems engineering, enterprise architecture, civil, structural and mechanical engineering, environmental
                                            science, biotech, data science, data engineering/big data, and analytical roles.
                                        </p>
                                        <p style={{ marginBottom: '1rem' }}>
                                            Corporate Functions: Strong proficiency in sales, renewals, marketing, go-to-market strategies, product development,
                                            finance & accounting (including actuaries), legal, operations, quantitative roles, governance, risk & compliance (GRC), and executive search.
                                        </p>
                                        <p style={{ marginBottom: '1rem' }}>
                                            Marketing & Branding: Skilled in creating and executing sourcing strategies and employee value propositions, with significant experience in
                                            deploying roles to cost-saving hubs and building global centers of excellence.
                                        </p>
                                        <p style={{ marginBottom: '1rem' }}>
                                            DEI&B Initiatives: Committed to diversity, equity, inclusion, and belonging initiatives, with a thorough understanding of EEOC and OFCCP compliance.
                                        </p>
                                        <p>
                                            Jon’s comprehensive experience and strategic approach make [him/her/them] an invaluable
                                            asset in driving talent acquisition excellence and supporting organizational growth globally.
                                        </p>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} lg={4}>
                                <div className="w-full text-center">
                                    <figure>
                                        <Image
                                            src="/images/jhesselink.png"
                                            alt="Meet team"
                                            height={580}
                                            width={370}
                                            className="m-auto border-r-4"
                                            loading="lazy"
                                        />
                                        <figcaption className="text-primary underline">Jonathan Hesselink</figcaption>
                                    </figure>
                                    <div>
                                        <p className="text-left text-sm w-[250px] m-auto mt-5">
                                            Industry Knowledge:
                                            <ol>
                                                <li>- Healthcare Technology</li>

                                                <li>- Investment Banking</li>

                                                <li> - Insurance</li>

                                                <li>- Hardware & Software Engineering</li>

                                                <li>- Heavy Equipment Manufacturing</li>

                                                <li>- Environmental Services</li>
                                            </ol>
                                        </p>
                                    </div>
                                </div>

                            </Grid>

                        </Grid>
                    </Container>
                </section>
            </details>
        </React.Fragment>
    )
}

export default AboutUs
