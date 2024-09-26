import React from 'react';
import { Container, Grid } from "@mui/material";
import HeroBanner from "@/components/hero-banner/HomeBanner";
import TitleBlue from "@/components/title/TitleBlue";
import Accordian from "@/components/accordian/Accordian";
import GetStarted from "@/components/get-started/GetStarted";
import InfoCard from "@/components/info-card/InfoCard";
import cardList from "@/utils/card-list-data";
import softwareDev from "@/utils/software-development-data";

const SoftwareDevelopment = () => {

    return (
        <>
            <div className="se-banner"><HeroBanner backgroundImage="/images/software-engineer-banner.png" /></div>
            <Container>
                <TitleBlue
                    textBlue="Software Development"
                    subInfo="At Global Peak Engineering, our software development consulting services offer tailored expertise to drive your projects from concept to completion. "
                    levelTwo="We provide strategic guidance, technical expertise, and project management support to ensure the success of your software initiatives. With a focus on efficiency, scalability, and user experience, we empower organizations to accelerate their digital transformation and achieve sustainable growth in today's dynamic market landscape."
                />

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
                <div className="mt-16">
                    {softwareDev.map((item) => (
                        <Accordian
                            key={item.id}
                            accNo={item.accNo}
                            expandText={item.text}
                            title={item.title}
                            subInfo={item.subInfo}
                            listHandle={item.listHandle}
                        />
                    ))}
                </div>

            </Container>
            <GetStarted />
        </>
    )
}

export default SoftwareDevelopment