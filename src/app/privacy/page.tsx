import React from 'react';
import MiniBanner from '@/components/hero-banner/MiniBanner';
import { Container, Grid } from '@mui/material';
import { CONTACT_EMAIL, GPE_WEBSITE, EFFECTIVE_DATE } from '../../utils/constants';
import Link from "next/link";

const Privacy = () => {
    return (
        <React.Fragment>
            {/* <header
                className="hero-banner min-h-[350px]"
                style={{
                    backgroundImage: `url('/images/privancy-policy.png')`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <Container className="py-5 z-0 m-auto w-100 flex">
                    <Grid container className="sm:text-center md:text-left lg:text-left xl:text-left text-center">
                        <Grid item xs={12} sm={12} md={12} lg={12} className="flex items-center">

                        </Grid>
                    </Grid>
                </Container>
            </header> */}
            <div className="title-header min-h-[150px] flex justify-center items-center text-center text-primary bg-gray-100">
                <h1 className="xl:text-5xl lg:text-4xl text-3xl text-center font-semibold text-primary">Privacy Policy</h1>
            </div>
            <section>
                <Container className="my-10">
                    <div className="text-center text-lg text-black ">
                        {/* <div className="font-bold">Privacy Policy</div> */}
                        <div className="font-bold">{GPE_WEBSITE}</div>
                        <p>Type of website: IT Professional Services</p>
                        <p>Effective date: {EFFECTIVE_DATE}</p>
                    </div>

                    <div className="bg-grey p-8 mt-8 text-black text-base leading-6">
                        <p>
                            <span className="font-bold">
                                {GPE_WEBSITE}
                            </span> (the &quot;Site&quot;) is owned and operated by Global Peak Engineering Inc.
                        </p>
                        <p>Global Peak Engineering Inc can be contacted at:</p>
                        {/* <p>{CONTACT_EMAIL}</p> */}
                        <p className="font-bold">13575 58TH ST N, Suite 200, Clearwater, FL 33760</p>
                    </div>

                    <div className="text-black mt-3">
                        <h5 className="font-bold text-primary text-lg pb-2">Purpose</h5>
                        <div className="text-base leading-6">
                            <p className="pb-5">The purpose of this privacy policy (this &quot;Privacy Policy&quot;) is to inform users of our Site of the
                                following:</p>
                            <ol className="list-decimal ml-3">
                                <li> The personal data we will collect;</li>
                                <li> Use of collected data;</li>
                                <li> Who has access to the data collected; and</li>
                                <li> The rights of Site users.</li>
                            </ol>
                            <p>This Privacy Policy applies in addition to the terms and conditions of our Site.</p>
                        </div>
                    </div>

                    <div className="text-black mt-3">
                        <h5 className="font-bold text-primary text-lg pb-2">Consent</h5>
                        <div className="text-base leading-6">
                            <p className="pb-5">By using our Site users agree that they consent to:</p>
                            <ol className="list-decimal ml-3">
                                <li>The conditions set out in this Privacy Policy; and</li>
                                <li>The collection, use, and retention of the data listed in this Privacy Policy.</li>
                            </ol>
                        </div>
                    </div>

                    <div className="text-black mt-3">
                        <h5 className="font-bold text-primary text-lg pb-2">Personal Data We Collect</h5>
                        <div className="text-base leading-6">
                            <p className="pb-3">We only collect data that helps us achieve the purpose set out in this Privacy Policy. We will not collect
                                any additional data beyond the data listed below without notifying you first
                            </p>
                        </div>
                    </div>

                    <div className="text-black mt-3">
                        <h5 className="font-bold text-primary text-lg pb-2">Data Collected in a Non-Automatic Way</h5>
                        <div className="text-base leading-6">
                            <p className="pb-5">We may also collect the following data when you perform certain functions on our Site:</p>
                            <ol className="list-decimal ml-3">
                                <li>First and last name;</li>
                                <li>Email address;</li>
                                <li>Phone number;</li>
                                <li>Job Title; and</li>
                                <li>Business Address.</li>
                            </ol>
                            <p className="mt-3">This data may be collected using the following methods:</p>
                            {/* <ol className="list-decimal ml-5">
                                <li>Email.</li>
                            </ol> */}
                        </div>
                    </div>

                    <div className="text-black mt-5">
                        <h5 className="font-bold text-primary text-lg pb-2"> How We Use Personal Data</h5>
                        <div className="text-base leading-6">
                            <p className="mt-2">Data collected on our Site will only be used for the purposes specified in this Privacy Policy or
                                indicated on the relevant pages of our Site. We will not use your data beyond what we disclose in this
                                Privacy Policy.</p>

                            <p className="mt-3">The data we collect when the user performs certain functions may be used for the following purposes:</p>

                            <ol className="list-decimal ml-3 mt-3">
                                <li>Lead Generation and Sales.</li>
                            </ol>
                        </div>
                    </div>

                    <div className="text-black mt-5">
                        <h5 className="font-bold text-primary text-lg pb-2">Who We Share Personal Data With</h5>
                        <div className="text-base leading-6">
                            <div className="pb-5">
                                <div className="font-bold">Employees</div>
                                We may disclose user data to any member of our organization who reasonably needs access to user data
                                to achieve the purposes set out in this Privacy Policy
                            </div>
                        </div>
                    </div>

                    <div className="text-black mt-5">
                        <div className="text-base leading-6">
                            <div className="pb-3">
                                <div className="font-bold">Other Disclosures</div>
                                We will not sell or share your data with other third parties, except in the following cases:
                            </div>
                            <ol className="list-decimal ml-3">
                                <li>If the law requires it;</li>
                                <li>If it is required for any legal proceeding;</li>
                                <li>To prove or protect our legal rights; and</li>
                                <li>To buyers or potential buyers of this company in the event that we seek to sell the company</li>
                            </ol>
                            <p className="mt-3">If you follow hyperlinks from our Site to another Site, please note that we are not responsible for and
                                have no control over their privacy policies and practices.</p>
                        </div>
                    </div>

                    <div className="text-black mt-5">
                        <div className="text-base leading-6">
                            <div className="pb-3">
                                <div className="font-bold">How Long We Store Personal Data</div>
                                User data will be stored until the purpose the data was collected for has been achieved.
                                You will be notified if your data is kept for longer than this period.
                            </div>
                        </div>
                    </div>

                    <div className="text-black mt-3">
                        <div className="text-base leading-6">
                            <div>
                                <div className="font-bold">How We Protect Your Personal Data</div>
                                At Global Peak Engineering Inc., safeguarding your data is paramount. We employ state-of-the-art
                                encryption protocols to ensure the utmost security of your information. Our systems are constantly
                                monitored for any suspicious activity, and we regularly update our security measures to stay ahead of
                                emerging threats. Rest assured, your privacy and security are our top priorities.
                                Your data is strictly confidential and will never be shared, sold, distributed, or accessed by third parties
                                without your explicit consent. We adhere to stringent privacy policies and industry standards to
                                safeguard your information. You can trust that your data is safe with us.
                                While we take all reasonable precautions to ensure that user data is secure and that users are protected,
                                there always remains the risk of harm. The Internet as a whole can be insecure at times and therefore
                                we are unable to guarantee the security of user data beyond what is reasonably practical
                            </div>
                        </div>
                    </div>

                    <div className="text-black mt-3">
                        <div className="text-base leading-6">
                            <div className="pb-3">
                                <div className="font-bold"> How to Access, Modify, Delete, or Challenge the Data Collected</div>
                                If you would like to know if we have collected your personal data, how we have used your personal
                                data, if we have disclosed your personal data and to who we disclosed your personal data, or if you
                                would like your data to be deleted or modified in any way, please contact our privacy officer here:

                                <div className="font-bold">13575 58th ST N. Suite 200, Clearwater, FL 3376</div>
                            </div>
                        </div>
                    </div>

                    <div className="text-black mt-3">
                        <div className="text-base leading-6">
                            <div className="pb-5">
                                <div className="font-bold">Modifications</div>
                                This Privacy Policy may be amended from time to time in order to maintain compliance with the law
                                and to reflect any changes to our data collection process. When we amend this Privacy Policy we will
                                update the &quot;Effective Date&quot; at the top of this Privacy Policy. We recommend that our users periodically
                                review our Privacy Policy to ensure that they are notified of any updates. If necessary, we may notify
                                users by email of changes to this Privacy Policy.
                            </div>
                        </div>
                    </div>

                    <div className="text-black mt-3 mb-12">
                        <div className="text-base leading-6">
                            <div className="pb-3">
                                <div className="font-bold">Contact Information</div>
                                Please <Link href="/contact" className="text-primary">contact us</Link> here with any questions.
                                {/* <div className="font-bold mt-5">{CONTACT_EMAIL}</div> */}
                                {/*<div className="font-bold">13575 58th ST N. Suite 200, Clearwater, FL 33760</div>*/}
                            </div>
                        </div>
                    </div>

                </Container>
            </section>
        </React.Fragment>
    )
}

export default Privacy
