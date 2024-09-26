import React from 'react';
import Image from 'next/image';
import { Container, Grid } from '@mui/material';
import { CheckCircleOutline } from '@mui/icons-material';
import MiniBanner from '@/components/hero-banner/MiniBanner';
import TitleBlue from "@/components/title/TitleBlue";
import GetStarted from "@/components/get-started/GetStarted";
import valueList from '@/utils/mission-values-data';

const Mission = () => {
    return (
        <React.Fragment>
            <MiniBanner backgroundImage="/images/trust-compass.png" />
            <Container>
                <TitleBlue
                    textBlue="Our Mission"
                    subInfo="Our mission is to partner with organizations on their digital transformation efforts, ensuring IT security 
                    and resilience while providing top-notch consulting and staffing solutions that drive innovation, growth, 
                    and lasting success in the digital era."
                />
                <div className="mb-24 mt-10">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={8} md={6} lg={6} className="m-auto">
                            <div className="relative">
                                <div className="absolute on-mobile border-solid border-white border-4 lg:right-6 right-0 lg:top-2 top-0 overflow-hidden">
                                    <Image
                                        src="/images/mission-new-banner.png"
                                        alt="vision two"
                                        height={160}
                                        width={160}
                                        className="transition duration-300 ease-in-out hover:scale-110"
                                    />
                                </div>
                                <Image
                                    src="/images/values.png"
                                    alt="vision image large"
                                    height={550}
                                    width={450}
                                />
                                <div className="absolute on-mobile left-0 border-solid border-white border-4 bottom-[-4rem] overflow-hidden">
                                    <Image
                                        src="/images/core-value.png"
                                        alt="vision two"
                                        height={160}
                                        width={160}
                                        className="transition duration-300 ease-in-out hover:scale-110"
                                    />
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <div className="text-black lg:mt-0 mt-14">
                                <h4 className="lg:text-4xl md:text-3xl text-2xl sm:mb-10 mb-6 text-primary">Our Values</h4>
                                <Grid container spacing={2} className="mt-3 sm:text-lg text-base">
                                    {valueList.map((list) => (
                                        <div className="flex ml-4 leading-8 align-middle w-full text-black custom-list-hover" key={list.id}>
                                            <span className="mr-2 text-sm"><CheckCircleOutline /></span>
                                            {list.tag}
                                        </div>
                                    ))}
                                </Grid>
                            </div>

                        </Grid>
                    </Grid>
                </div>
            </Container>
            <GetStarted />
        </React.Fragment>
    )
}

export default Mission;