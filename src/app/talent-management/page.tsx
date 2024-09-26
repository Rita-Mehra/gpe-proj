
'use client';
import React, { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { Container, Grid, Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { Add, ArrowUpward, East, Circle, Call } from '@mui/icons-material';
import TitleBlue from "@/components/title/TitleBlue";
import HeroBanner from "@/components/hero-banner/HomeBanner";
import GetStarted from "@/components/get-started/GetStarted";
import { CONTACT_EMAIL } from '@/utils/constants';

const TalentManagement = () => {

    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <>
            <div className="talent-banner"><HeroBanner backgroundImage="/images/talent-management.png" /></div >
            <section className="mt-12">
                <Container>
                    <TitleBlue
                        textBlue="Talent Management"
                        subInfo="We excel in providing top talent to meet your organizational needs through a range of flexible staffing solutions. Whether you require staff augmentation, contract-to-hire, or permanent placements, we meticulously vet candidates to ensure they align with your specific requirements and company culture. Our screening process evaluates not only technical skills but also soft skills, ensuring seamless integration into your team."
                    />

                    <Accordion className="accordian-body bg-white" expanded={expanded === 'tal1'} onChange={handleChange("tal1")}>
                        <AccordionSummary

                            expandIcon={expanded === 'tal1' ?
                                <>
                                    <div className="absolute">
                                        <Link href="/contact" className="accord-button">
                                            <span className="sm:block hidden">
                                                <span className="flex"> Contact Us <East /></span>
                                            </span>
                                            <span className="sm:hidden block">
                                                <Call />
                                            </span>
                                        </Link>
                                    </div>
                                    <ArrowUpward className="accordian-icon" />
                                </> : <Add />}
                        >
                            <Typography className="items-center flex relative" sx={{ width: '100%', flexShrink: 0 }}>
                                <span className="mr-10 text-primary text-lg font-600"><Circle /></span>  <span className="xl:text-3xl lg:text-2xl md:text-xl sm:text-base text-black">What do we do</span>

                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className="lg:text-lg sm:text-base text-sm text-black ml-14">

                                <ul className="list-disc">
                                    <li> Project-based consultants / statement of work</li>
                                    <li>Contractors - parental leave , staff augmentation, full and part-time temps.</li>
                                    <li>Permanent placement - contingency, retained, executive search</li>
                                    <li>RPO & BPO - sourcing, screening, assessments, technical 	evaluation - bespoke talent acquisition solutions including source 	cloud</li>
                                </ul>

                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className="accordian-body bg-white" expanded={expanded === 'tal2'} onChange={handleChange("tal2")}>
                        <AccordionSummary

                            expandIcon={expanded === 'tal2' ?
                                <>
                                    <div className="absolute">
                                        <Link href="/contact" className="accord-button">
                                            <span className="sm:block hidden">
                                                <span className="flex"> Contact Us <East /></span>
                                            </span>
                                            <span className="sm:hidden block">
                                                <Call />
                                            </span>
                                        </Link>
                                    </div>
                                    <ArrowUpward className="accordian-icon" />
                                </> : <Add />}
                        >
                            <Typography className="items-center flex relative" sx={{ width: '100%', flexShrink: 0 }}>
                                <span className="mr-10 text-primary text-lg font-600"><Circle /></span>  <span className="xl:text-3xl lg:text-2xl md:text-xl sm:text-base text-black">Where we focus</span>

                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className="lg:text-lg sm:text-base text-sm text-black ml-14">

                                <ul className="list-disc">
                                    <li className="mb-4"><b>Cyber Security</b> - risk assessment, third party risk management, IT 	audit, vulnerability management,  cyber threat intelligence, data
                                        security, identity and access management, network security, 	DevSecOps, security as a service</li>

                                    <li><b>Software Engineering</b> - DevOps, Cloud - Azure, AWS, GCP, data 	engineering, BigData, machine learning, artificial intelligence,
                                        architecture, application security</li>
                                </ul>

                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className="accordian-body bg-white" expanded={expanded === 'tal3'} onChange={handleChange("tal3")}>
                        <AccordionSummary

                            expandIcon={expanded === 'tal3' ?
                                <>
                                    <div className="absolute">
                                        <Link href="/contact" className="accord-button">
                                            <span className="sm:block hidden">
                                                <span className="flex"> Contact Us <East /></span>
                                            </span>
                                            <span className="sm:hidden block">
                                                <Call />
                                            </span>
                                        </Link>
                                    </div>
                                    <ArrowUpward className="accordian-icon" />
                                </> : <Add />}
                        >
                            <Typography className="items-center flex relative" sx={{ width: '100%', flexShrink: 0 }}>
                                <span className="mr-10 text-primary  text-lg font-600"><Circle /></span>  <span className="xl:text-3xl lg:text-2xl md:text-xl sm:text-base text-black">How do we do it</span>

                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className="lg:text-lg sm:text-base text-sm text-black ml-14">

                                <ul className="list-disc">
                                    <li> Our partners (directors) have 60+ years of industry experience and leverage our extensive networks to identify top performers with 	successful track record of delivery.</li>
                                    <li>We source A³ candidates -  contact us to learn more and start seeing A³ candidates today.</li>
                                </ul>

                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className="accordian-body bg-white" expanded={expanded === 'tal4'} onChange={handleChange("tal4")}>
                        <AccordionSummary

                            expandIcon={expanded === 'tal4' ?
                                <>
                                    <div className="absolute">
                                        <Link href="/contact" className="accord-button">
                                            <span className="sm:block hidden">
                                                <span className="flex"> Contact Us <East /></span>
                                            </span>
                                            <span className="sm:hidden block">
                                                <Call />
                                            </span>
                                        </Link>
                                    </div>
                                    <ArrowUpward className="accordian-icon" />
                                </> : <Add />}
                        >
                            <Typography className="items-center flex relative" sx={{ width: '100%', flexShrink: 0 }}>
                                <span className="mr-10 text-primary text-lg font-600"><Circle /></span>  <span className="xl:text-3xl lg:text-2xl md:text-xl sm:text-base text-black">Why choose GPE</span>

                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className="lg:text-lg sm:text-base text-sm text-black ml-14">
                                <ul className="list-disc">
                                    <li> Guaranteed top-tier talent- our candidates go through an in-depth technical assessment, are evaluated by A^3 criteria and backed by excellent references </li>
                                    <li> Pricing model flexibility - we offer a suite of creative solutions to fit within your budget to address your most pressing business challenges</li>
                                    <li> Efficient service - dedicated point of contact with quick turnaround even on the most demanding requirements</li>
                                </ul>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Container>
            </section>
            <section className="gpe-information mt-20">
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} lg={6}>
                            <div className="bg-primary flex w-full h-full">
                                <Grid container>
                                    <Grid item xs={12} md={7} lg={7} className="sm:px-8 sm:py-12 px-4 py-4">
                                        <Image
                                            src="/images/white-logo.png"
                                            alt="GPE logo white"
                                            width={70}
                                            height={70}
                                            className="object-cover"
                                        />
                                        <div className="text-black sm:text-base text-sm py-2">Interested to learn more about our staffing solutions?</div>
                                        <div className="text-white sm:text-base text-sm sm:py-5 py-2">{CONTACT_EMAIL}</div>
                                        <p className="text-black sm:text-base text-sm">
                                            Ask about free trial of source cloud-
                                            see A³ resumes within a few days for most skill sets.
                                        </p>
                                    </Grid>
                                    <Grid item xs={12} md={5} lg={5} className="relative overflow-hidden sm:h-auto h-[170px]">
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
                            <div className="bg-black flex w-full h-full">
                                <Grid container>
                                    <Grid item xs={12} md={7} lg={7} className="sm:px-8 sm:py-12 px-4 py-4">
                                        <Image
                                            src="/images/logo-color.png"
                                            alt="GPE logo"
                                            width={70}
                                            height={70}
                                            className="object-cover"
                                        />
                                        <div className="text-white sm:text-base text-sm py-2">Considering a career change?</div>
                                        <div className="text-white sm:text-base text-sm sm:py-5 py-2">{CONTACT_EMAIL}</div>
                                        <p className="text-white sm:text-base text-sm">
                                            Send us your CV, LinkedIn profile, portfolio for a free personal evaluation.
                                        </p>
                                    </Grid>
                                    <Grid item xs={12} md={5} lg={5} className="relative overflow-hidden sm:h-auto h-[170px]">
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
            <GetStarted />
        </>
    )
}

export default TalentManagement