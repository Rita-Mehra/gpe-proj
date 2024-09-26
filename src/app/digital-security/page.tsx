import React from 'react';
import { Container } from "@mui/material";
import HeroBanner from "@/components/hero-banner/HomeBanner";
import TitleBlue from "@/components/title/TitleBlue";
import Accordian from "@/components/accordian/Accordian";
import GetStarted from "@/components/get-started/GetStarted";
import digitalAccordian from "@/utils/digital-accordian-data";

const DigitalSecurity = () => {

    return (
        <>
            <HeroBanner backgroundImage="/images/digital-hero-banner.jpg" />
            <Container>
                <TitleBlue
                    textBlue="Digital Security"
                    subInfo="Our digital security services encompass comprehensive solutions to safeguard your organization's assets against cyber threats. From risk assessments and penetration testing to security policy development and incident response planning, we offer tailored strategies to mitigate risks and ensure compliance. Partner with us to fortify your defenses and stay ahead of evolving cyber threats in today's interconnected world."
                />

                {digitalAccordian.map((item) => (
                    <Accordian
                        key={item.id}
                        accNo={item.accNo}
                        expandText={item.text}
                        title={item.title}
                        subInfo={item.subInfo}
                    />
                ))}

            </Container>
            <GetStarted />
        </>
    )
}

export default DigitalSecurity
