import React from 'react';
import MiniBanner from '@/components/hero-banner/MiniBanner';
import { Container, Grid } from '@mui/material';
import { CONTACT_EMAIL, GPE_WEBSITE, EFFECTIVE_DATE } from '../../utils/constants';
import Link from "next/link";

const TermAndCondition = () => {
    return (
        <React.Fragment>
            {/* <header
                className="hero-banner xl:min-h-[450px] min-h-[350px]"
                style={{
                    backgroundImage: `url('/images/term-and-condition.png')`,
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
                <h1 className="xl:text-5xl lg:text-4xl text-3xl text-center font-semibold text-primary">Terms and Conditions</h1>
            </div>
            <section>
                <Container className="my-10">
                    <div className="bg-grey font-bold p-8 mt-8 text-black text-base leading-6">
                        <p>These terms and conditions (the &quot;Terms and Conditions&quot;) govern the use of {GPE_WEBSITE} (the &quot;Site&quot;). This Site is owned and operated by Global Peak Engineering Inc. This Site is an IT professional services site.</p>
                    </div>

                    <div className="text-black mt-3">
                        <div className="text-base leading-6">
                            <p className="pb-3">By using this Site, you indicate that you have read and understand these Terms and Conditions and agree to abide by them at all times.</p>
                            <p className="font-bold">THESE TERMS AND CONDITIONS CONTAIN A DISPUTE RESOLUTION CLAUSE THAT IMPACTS YOUR RIGHTS ABOUT HOW TO RESOLVE DISPUTES.
                                PLEASE READ IT CAREFULLY.</p>
                        </div>
                    </div>

                    <div className="text-black mt-3">
                        <h5 className="font-bold text-primary text-lg pb-2">Intellectual Property</h5>
                        <div className="text-base leading-6">
                            <p className="pb-3">All content published and made available on our Site is the property of Global Peak
                                Engineering Inc and the Site&apos;s creators. This includes, but is not limited to images, text, logos, documents, downloadable files and anything that contributes to the composition of our Site.</p>
                        </div>
                    </div>

                    <div className="text-black mt-3">
                        <h5 className="font-bold text-primary text-lg pb-2">Acceptable Use</h5>
                        <div className="text-base leading-6">
                            <p className="pb-3">
                                All content published and made available on our Site is the property of Global Peak Engineering Inc and the Site&apos;s creators.
                                This includes, but is not limited to images, text, logos, documents, downloadable files and anything that contributes to the composition of our Site.
                            </p>
                            <p className="pb-3">
                                As a user of our Site, you agree to use our Site legally, not to use our Site for illegal purposes, and not to: -
                            </p>
                            <p className="pb-3">
                                Violate the intellectual property rights of the Site owners or any third party to the Site. If we believe you are using our Site
                                illegally or in a manner that violates these Terms and Conditions, we reserve the right to limit, suspend or terminate your access to our Site. We also reserve the right to take any legal steps necessary to prevent you from accessing our Site.
                            </p>
                        </div>
                    </div>

                    <div className="text-black mt-3">
                        <h5 className="font-bold text-primary text-lg pb-2">Links to Other Websites</h5>
                        <div className="text-base leading-6">
                            <p className="pb-3">
                                Our Site contains links to third party websites or services that we do not own or control.
                                We are not responsible for the content, policies, or practices of any third party website
                                or service linked to on our Site. It is your responsibility to read the terms and conditions
                                and privacy policies of these third party websites before using these sites.
                            </p>
                        </div>
                    </div>

                    <div className="text-black mt-3">
                        <h5 className="font-bold text-primary text-lg pb-2"> Limitation of Liability</h5>
                        <div className="text-base leading-6">
                            <p className="pb-3">
                                Global Peak Engineering Inc and our directors, officers, agents, employees, subsidiaries,
                                and affiliates Page 1 of 3 will not be liable for any actions, claims, losses, damages, liabilities and expenses including legal fees from your use of the Site
                            </p>
                        </div>
                    </div>

                    <div className="text-black mt-3">
                        <h5 className="font-bold text-primary text-lg pb-2">Indemnity</h5>
                        <div className="text-base leading-6">
                            <p className="pb-3">
                                Except where prohibited by law, by using this Site you indemnify and hold harmless
                                Global Peak Engineering Inc and our directors,officers, agents, employees, subsidiaries,
                                and affiliates from any actions, claims, losses, damages, liabilities and expenses including
                                legal fees arising out of your use of our Site or your violation of these Terms and Conditions.
                            </p>
                        </div>
                    </div>

                    <div className="text-black mt-3">
                        <h5 className="font-bold text-primary text-lg pb-2">Applicable Law</h5>
                        <div className="text-base leading-6">
                            <p className="pb-3">
                                These Terms and Conditions are governed by the laws of the State of Florida.
                            </p>
                        </div>
                    </div>

                    <div className="text-black mt-3">
                        <h5 className="font-bold text-primary text-lg pb-2">Dispute Resolution</h5>
                        <div className="text-base leading-6">
                            <p className="pb-3">
                                Subject to any exceptions specified in these Terms and Conditions, if you and Global Peak Engineering Inc are unable to resolve any dispute through informal discussion, then you and Global Peak Engineering Inc agree to submit the issue before a mediator. The decision of the mediator will not be binding. Any mediator must be a neutral party acceptable to both you and Global Peak Engineering Inc. The costs of any mediation will be paid by the unsuccessful party.
                                <br /> <br />
                                Notwithstanding any other provision in these Terms and Conditions, you and Global Peak Engineering Inc agree that you both retain the right to bring an action in small claims court and to bring an action for injunctive relief or intellectual property infringement.
                            </p>
                        </div>
                    </div>

                    <div className="text-black mt-3">
                        <h5 className="font-bold text-primary text-lg pb-2">Severability</h5>
                        <div className="text-base leading-6">
                            <p className="pb-3">
                                If at any time any of the provisions set forth in these Terms and Conditions are
                                found to be inconsistent or invalid under applicable laws, those provisions will be deemed
                                void and will be removed from these Terms and Conditions. All other provisions will not be
                                affected by the removal and the rest of these Terms and Conditions will still be considered
                                valid.
                            </p>
                        </div>
                    </div>

                    <div className="text-black mt-3">
                        <h5 className="font-bold text-primary text-lg pb-2">Changes</h5>
                        <div className="text-base leading-6">
                            <p className="pb-3">
                                These Terms and Conditions may be amended from time to time in order to maintain
                                compliance with the law and to reflect any changes to the way we operate our Site and
                                the way we expect users to behave on our Site. We will notify users by email of changes to
                                these Terms and Conditions or post a notice on our Site.
                            </p>
                        </div>
                    </div>

                    <div className="text-black mt-3">
                        <h5 className="font-bold text-primary text-lg pb-2">Contact Details</h5>
                        <div className="text-base leading-6">
                            <div className="pb-3">
                                Please <Link href="/contact" className="text-primary">contact us</Link> here with any questions.
                            </div>
                        </div>
                        <div className="text-base leading-6 font-bold mb-12">
                            {/* <span className="border-t-2 border-black">{CONTACT_EMAIL}</span> */}
                            {/* <p>13575 58th ST N, Suite 200, Clearwater, FL 33760</p>
                            <p>You can also contact us through the feedback form available on our Site.</p>
                            <p className="mt-6">Effective Date: {EFFECTIVE_DATE}</p> */}
                        </div>
                    </div>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default TermAndCondition
