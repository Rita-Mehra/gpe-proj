import React from 'react';
import { Container, Grid } from "@mui/material";
import HeroBanner from "@/components/hero-banner/HomeBanner";
import GetStarted from "@/components/get-started/GetStarted";
import govt from "@/utils/government-data";
import TitleBlue from "@/components/title/TitleBlue";

const Government = () => {

    return (
        <>
            <HeroBanner backgroundImage="/images/government.png"
            // title="Harnessing consulting expertise to help navigate the digital solution complexities "
            />
            <Container className="mb-10">
                <TitleBlue
                    textBlue="Government Digital Innovation"
                />
                <div>
                    <Grid container spacing={8}>
                        {govt.map((item) => (
                            <Grid item xs={12} sm={12} md={4} key={item.id}>
                                <div className="border-t-2 border-[#d2d2d2]">
                                    <h4 className="text-black font-bold mt-8 text-lg">{item.title}</h4>
                                    <p className="xl:text-base text-sm text-black mt-5">
                                        {item.info}
                                    </p>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </Container>
            <GetStarted />
        </>
    )
}

export default Government
