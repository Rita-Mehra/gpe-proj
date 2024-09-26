'use client';
import React, { useState } from "react";
import {
    Button,
    TextField,
    FormControl,
    Grid,
    Container
} from "@mui/material";
import Link from 'next/link';
import Image from 'next/image';
import MiniBanner from '@/components/hero-banner/MiniBanner';
import TitleBlue from "@/components/title/TitleBlue";
import GetStarted from "@/components/get-started/GetStarted";
import { sendEmail } from "@/utils/send-email";


const WhitePaper = () => {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [pnumber, setPnumber] = useState("");
    const [cname, setCname] = useState("");
    const [csize, setCsize] = useState("");
    const [project, setProject] = useState("");
    const [message, setMessage] = useState("");
    const [successMsg, setSuccessMsg] = useState('');

    const handlePaper = (event: any) => {
        event.preventDefault();
        const HTML = `
            <html>
                <head></head>
                <body>
                    <p>Request sent by</p>
                    <p>
                        <strong>Name:</strong> ${fname} ${lname}<br />
                        <strong>Email:</strong> ${email} <br />
                        <strong>Phone:</strong> ${pnumber} <br />
                        <strong>Company Name:</strong> ${cname} <br />
                        <strong>Company Size:</strong> ${csize} <br />
                        <strong>Current Project:</strong> ${project} <br />
                        <strong>Other Details:</strong> ${message} <br />
                    </p>
                </body>
            </html>
        `;
        sendEmail('info@globalpeakengineering.com', 'White paper request', HTML);
        setFname('');
        setLname('');
        setEmail('');
        setPnumber('');
        setProject('');
        setCname('');
        setCsize('');
        setMessage('');
        setSuccessMsg('Thank you for submitting your information. We will get back to you within the next business day.')
        setTimeout(() => {
            setSuccessMsg('');
        }, 4500);
    };

    return (
        <React.Fragment>
            <MiniBanner backgroundImage="/images/white-paper.png" />
            <div className="partner-wp my-14">
                <Container>
                    <h2 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl text-center font-semibold mb-5 text-primary">
                        Enhancing Vendor Security: A Comprehensive Approach to Third-Party Risk Management
                    </h2>

                    <Grid container spacing={4} className="sm:mt-10 mt-14">
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <div className="rounded-lg card-hover p-6 h-full shadow-2xl bg-white text-surface shadow-secondary-5 transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30">
                                <div className="mt-5">
                                    <h5 className="mb-2 text-lg text-black font-bold">Abstract</h5>
                                    <p className="mb-4 text-black xl:text-base text-sm">
                                        This whitepaper, a collaboration between Global Peak Engineering and Purple
                                        Raven Security Consulting, delves into the critical realm of vendor and supply
                                        chain risk management. In an interconnected business landscape, where
                                        organizations heavily rely on external vendors and suppliers for various
                                        services and products, ensuring robust vendor security measures is imperative.
                                    </p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <div className="rounded-lg card-hover p-6 h-full shadow-2xl bg-white text-surface shadow-secondary-5 transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30">

                                <div className="mt-5">
                                    <h5 className="mb-2 text-lg text-black font-bold">Introduction</h5>
                                    <p className="mb-4 text-black xl:text-base text-sm">
                                        The introduction outlines the growing significance of vendor security
                                        and the associated risks posed by third-party relationships. It
                                        highlights recent incidents and trends that underscore the necessity
                                        for proactive risk management strategies.
                                    </p>
                                </div>
                            </div>
                        </Grid>
                    </Grid>


                    <Grid container spacing={4} className="mt-5">
                        <Grid item xs={12} md={12} lg={12}>
                            {/* <h3 className="text-center">We are the partners</h3> */}

                            <p className="mb-4 text-gray-700 xl:text-base text-sm max-w-[800px] text-center m-auto mt-5">
                                This whitepaper serves as a practical guide for organizations seeking to fortify their vendor security
                                posture, offering actionable insights and best practices distilled from the expertise of<br />
                                <span className="text-primary font-bold"> <Link href="/" target="_blank">Global Peak Engineering</Link></span> and <span className="text-[#4d0d75] font-bold"><Link href="https://purpleraven.io/" target="_blank">Purple Raven</Link></span> Security Consulting.
                            </p>
                        </Grid>
                    </Grid>
                </Container>
            </div>

            <div className="bg-gradient">
                <Container>
                    <Grid container spacing={2} className="flex justify-around items-center">
                        <Grid item xs={12} md={4} lg={4}>
                            <Link href="/" target="_blank">
                                <Image
                                    src="/images/logo.png"
                                    alt="logo GPE"
                                    width={300}
                                    height={100}
                                    className="object-cover m-auto"
                                />
                            </Link>
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                            <Image
                                src="/images/hand-shake.png"
                                alt="logo GPE"
                                width={100}
                                height={100}
                                className="object-cover m-auto"
                            />
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                            <Link href="https://purpleraven.io/" target="_blank">
                                <Image
                                    src="/images/purple.png"
                                    alt="Logo Purple"
                                    width={300}
                                    height={100}
                                    className="object-cover m-auto"
                                />
                            </Link>
                        </Grid>
                    </Grid>
                </Container>
            </div>

            <Container>
                <TitleBlue
                    textBlue="Request Whitepaper"
                />
                <div className="rounded-2xl p-2 bg-white drop-shadow-lg mb-16 m-auto">
                    <div className="xl:p-10 lg:p-16 md:p-10 sm:p-5 flex flex-col justify-between h-full">
                        <Grid container>
                            <Grid item xs={12} sm={12} md={2} lg={2} />
                            <Grid item xs={12} sm={12} md={8} lg={8} className="text-center">
                                <FormControl>
                                    <form onSubmit={handlePaper}>
                                        <Grid container spacing={2} className="custom-form">
                                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                                <TextField
                                                    label="First Name"
                                                    value={fname}
                                                    onChange={(e) => setFname(e.target.value)}
                                                    required
                                                    fullWidth
                                                    variant="standard"
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                                <TextField
                                                    label="Last Name"
                                                    value={lname}
                                                    onChange={(e) => setLname(e.target.value)}
                                                    required
                                                    fullWidth
                                                    variant="standard"
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                                <TextField
                                                    label="Email"
                                                    value={email}
                                                    type="email"
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                    fullWidth
                                                    variant="standard"
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                                <TextField
                                                    label="Phone Number"
                                                    value={pnumber}
                                                    type="tel"
                                                    onChange={(e) => setPnumber(e.target.value)}
                                                    required
                                                    fullWidth
                                                    variant="standard"
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                                <TextField
                                                    label="Company Name"
                                                    value={cname}
                                                    onChange={(e) => setCname(e.target.value)}
                                                    required
                                                    fullWidth
                                                    variant="standard"
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                                <TextField
                                                    label="Company Size"
                                                    value={csize}
                                                    type="number"
                                                    onChange={(e) => setCsize(e.target.value)}
                                                    required
                                                    fullWidth
                                                    variant="standard"
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                                <TextField
                                                    label="Current Project"
                                                    value={project}
                                                    onChange={(e) => setProject(e.target.value)}
                                                    required
                                                    fullWidth
                                                    variant="standard"
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                                <TextField
                                                    label="Other Details"
                                                    value={message}
                                                    onChange={(e) => setMessage(e.target.value)}
                                                    fullWidth
                                                    multiline
                                                    rows={4}
                                                    variant="standard"
                                                    placeholder="Include any additional details"
                                                />
                                            </Grid>

                                        </Grid>
                                        <div className="flex mt-8 sm:justify-end justify-center">
                                            <Button
                                                type="submit"
                                                className="blue-button"
                                                variant="contained"
                                                color="primary"
                                            >
                                                Submit
                                            </Button>
                                        </div>
                                    </form>
                                </FormControl>
                                {successMsg?.length > 1 ? (<div className="mt-1 text-green-600">{successMsg}</div>) : (<></>)}
                            </Grid>
                            <Grid item xs={12} sm={12} md={2} lg={2} />
                        </Grid>
                    </div>
                </div>
            </Container>
            <GetStarted />
        </React.Fragment>
    )
}

export default WhitePaper;
