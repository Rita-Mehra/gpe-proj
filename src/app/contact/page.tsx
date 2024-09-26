'use client';
import React, { useState } from 'react';
import { Container, Grid } from "@mui/material";
import TitleBlue from "@/components/title/TitleBlue";
import OurPartner from "@/components/partner/OurPartner";
import ContactForm from "@/components/form/ContatctForm";
import { AccessAlarm, VideocamOutlined, Call, Mail } from '@mui/icons-material';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { CONTACT_EMAIL, CONTACT_MOBILE_NUMBER } from '../../utils/constants';
import moment from "moment";

const Contact = () => {

    const [date, setDate] = useState(moment());

    return (
        <>
            <Container>
                <TitleBlue
                    textBlue="Contact Us"
                    subInfo="Complete the form below and we will contact you to discuss your project.Your information will be kept confidential."
                />
            </Container>
            <div className="form-container">
                <Container className="rounded-2xl p-2 bg-white drop-shadow-lg mt-10 mb-16">
                    <Grid container spacing={2}>
                        {/* <Grid item xs={12} sm={12} md={5} lg={4}>
                        <div className="bg-primary rounded-2xl p-6">
                            <h5 className="text-white font-semibold sm:text-[28px] text-lg">Let’s Schedule a Meeting</h5>
                            <p className="text-black sm:text-lg text-base mt-2">Say something to start a live talk!</p>
                            <div className="schedule-box p-4 mt-5">
                                <div className="flex sm:text-base text-sm text-white justify-between ">
                                    <div className="flex justify-between align-middle"><AccessAlarm /> <span className="ml-3"> 30 min </span> </div>
                                    <div className="flex justify-between align-middle"><VideocamOutlined /> <span className="ml-3"> Web conferencing details </span> </div>
                                </div>
                            </div>
                            <div className="calender-wrapper text-black bg-white mt-12 rounded-md text-end">
                                <LocalizationProvider dateAdapter={AdapterMoment}>
                                    <Grid
                                        container
                                        columns={{ xs: 1, lg: 2 }}
                                        spacing={4}
                                        alignItems="center"
                                        justifyContent="center"
                                    >
                                        <Grid item>
                                            <DateCalendar
                                                value={date}
                                                onChange={(newDate) => {
                                                    setDate(newDate);
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                </LocalizationProvider>
                            </div>
                            <div className="schedule-box p-4 mt-5">
                                <div className="flex text-base text-white justify-between ">
                                    <div className="flex justify-between align-middle">
                                        <div className="text-3xl text-white mr-2">06</div>
                                        <div>
                                            <div className="text-white text-sm">March 2024</div>
                                            <div className="text-white text-sm">Tuesday</div>
                                        </div>
                                    </div>
                                    <button className="bg-white text-black text-sm rounded-3xl px-5">
                                        Select time
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Grid> */}
                        <Grid item xs={12} sm={12} md={2} lg={2} />
                        <Grid item xs={12} sm={12} md={8} lg={8} >
                            <div className="xl:p-10 lg:p-16 md:p-10 sm:p-5 flex flex-col justify-between h-full">
                                <ContactForm />

                                <div className="flex justify-center mt-10">
                                    {/* <div className="flex text-black text-lg">
                                    <Call /> <div className="ml-3 sm:mb-0 mb-3">{CONTACT_MOBILE_NUMBER}</div>
                                </div> */}
                                    {/* <div className="flex sm:justify-start justify-center text-black text-lg">
                                    <Mail /> <div className="ml-3">{CONTACT_EMAIL}</div>
                                </div> */}
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={2} lg={2} />
                    </Grid>
                </Container>
            </div>
            {/* <OurPartner /> */}

        </>
    )
}

export default Contact;