"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import ButtonCompoent from "../Button/page";
import { FaPhone } from "react-icons/fa";

const imgesPaths1 = [
    "/layerTwo/google.svg",
    "/layerTwo/microsoft.svg",
    "/layerTwo/amazon.svg",
    "/layerTwo/tcs.svg",
    "/layerTwo/accenter.svg",
    "/layerTwo/wipro.svg",
];

const imgesPaths2 = [
    "/layerTwo/infosys.svg",
    "/layerTwo/ibm.svg",
    "/layerTwo/flipkart.svg",
    "/layerTwo/paytm.svg",
    "/layerTwo/zomato.svg",
    "/layerTwo/byjus.svg",
];

const imgesPaths3 = [
    "/layerTwo/swiggy.svg",
    "/layerTwo/ola.svg",
    "/layerTwo/razorpay.svg",
    "/layerTwo/airtel.svg",
    "/layerTwo/deloitte.svg",
    "/layerTwo/congnizant.svg",
];

const imgesPaths4 = [
    "/layerTwo/capgemini.svg",
    "/layerTwo/oracle.svg",
    "/layerTwo/sap.svg",
    "/layerTwo/nvidia.svg",
    "/layerTwo/abode.svg",
    "/layerTwo/salesforce.svg",
];

const imgesPaths5 = [
    "/layerTwo/goldmansachs.svg",
    "/layerTwo/fresgworks.svg",
    "/layerTwo/zoho.svg",
    "/layerTwo/mindtree.svg",
    "/layerTwo/tech mahindra.svg",
    "/layerTwo/hcl.svg",
];

const LayerThreedPage = () => {
    const marqueeRef1 = useRef(null);
    const marqueeRef2 = useRef(null);
    const marqueeRef3 = useRef(null);
    const marqueeRef4 = useRef(null);
    const marqueeRef5 = useRef(null);

    useEffect(() => {
        const marquee = marqueeRef1.current;
        let scrollAmount = 0;
        // console.log(marquee,'marqueee');

        const scroll = () => {
            if (marquee) {
                scrollAmount -= 1;
                marquee.style.transform = `translateX(${scrollAmount}px)`;
                // console.log(marquee,'marqueemarquee')
                const resetPoint = marquee.scrollWidth / 3;
                // console.log(resetPoint,'resetPoint')
                if (Math.abs(scrollAmount) >= resetPoint) {
                    scrollAmount = 0;
                }
            }
            requestAnimationFrame(scroll);
        };

        const id = requestAnimationFrame(scroll);
        return () => cancelAnimationFrame(id);
    }, []);

    useEffect(() => {
        const marquee = marqueeRef2.current;
        let scrollAmount = 0;

        const scroll = () => {
            if (marquee) {
                scrollAmount -= 1;
                marquee.style.transform = `translateX(${scrollAmount}px)`;

                const resetPoint = marquee.scrollWidth / 3;
                if (Math.abs(scrollAmount) >= resetPoint) {
                    scrollAmount = 0;
                }
            }
            requestAnimationFrame(scroll);
        };

        const id = requestAnimationFrame(scroll);
        return () => cancelAnimationFrame(id);
    }, []);

    useEffect(() => {
        const marquee = marqueeRef3.current;
        let scrollAmount = 0;

        const scroll = () => {
            if (marquee) {
                scrollAmount -= 1;
                marquee.style.transform = `translateX(${scrollAmount}px)`;

                const resetPoint = marquee.scrollWidth / 3;
                if (Math.abs(scrollAmount) >= resetPoint) {
                    scrollAmount = 0;
                }
            }
            requestAnimationFrame(scroll);
        };

        const id = requestAnimationFrame(scroll);
        return () => cancelAnimationFrame(id);
    }, []);

    useEffect(() => {
        const marquee = marqueeRef4.current;
        let scrollAmount = 0;

        const scroll = () => {
            if (marquee) {
                scrollAmount -= 1;
                marquee.style.transform = `translateX(${scrollAmount}px)`;

                const resetPoint = marquee.scrollWidth / 3;
                if (Math.abs(scrollAmount) >= resetPoint) {
                    scrollAmount = 0;
                }
            }
            requestAnimationFrame(scroll);
        };

        const id = requestAnimationFrame(scroll);
        return () => cancelAnimationFrame(id);
    }, []);

    useEffect(() => {
        const marquee = marqueeRef5.current;
        let scrollAmount = 0;

        const scroll = () => {
            if (marquee) {
                scrollAmount -= 1;
                marquee.style.transform = `translateX(${scrollAmount}px)`;

                const resetPoint = marquee.scrollWidth / 3;
                if (Math.abs(scrollAmount) >= resetPoint) {
                    scrollAmount = 0;
                }
            }
            requestAnimationFrame(scroll);
        };

        const id = requestAnimationFrame(scroll);
        return () => cancelAnimationFrame(id);
    }, []);

    const repeatedImages1 = [...imgesPaths1, ...imgesPaths1, ...imgesPaths1];
    const repeatedImages2 = [...imgesPaths2, ...imgesPaths2, ...imgesPaths2];
    const repeatedImages3 = [...imgesPaths3, ...imgesPaths3, ...imgesPaths3];
    const repeatedImages4 = [...imgesPaths4, ...imgesPaths4, ...imgesPaths4];
    const repeatedImages5 = [...imgesPaths5, ...imgesPaths5, ...imgesPaths5];

    return (
        <div className="w-full bg-white py-10 px-4 md:px-10 lg:px-20 overflow-hidden">
            <div className="text-center">
                <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                    Our <mark className="text-amber-500 bg-amber-50">1600+</mark> Hiring Partners
                </h1>
                <p className="text-gray-600 max-w-xl mx-auto">
                    Our hiring partners are{" "}
                    <mark className="text-amber-500 bg-amber-50">dedicated to fostering</mark>{" "}
                    talent and helping our graduates achieve their professional goals.
                </p>
            </div>

            <div className="relative overflow-hidden mt-10 w-full h-20 flex items-center">
                <div
                    ref={marqueeRef1}
                    className="flex gap-10 whitespace-nowrap will-change-transform"
                    style={{ minWidth: "300%" }}
                >
                    {repeatedImages1.map((src, index) => (
                        <Image
                            key={`logo1-${index}`}
                            src={src}
                            alt={`Logo ${index}`}
                            width={150}
                            height={60}
                            className="object-contain"
                        />
                    ))}
                </div>
            </div>

            <div className="relative overflow-hidden mt-10 w-full h-20 flex items-center">
                <div
                    ref={marqueeRef2}
                    className="flex gap-10 whitespace-nowrap will-change-transform"
                    style={{ minWidth: "300%" }}
                >
                    {repeatedImages2.map((src, index) => (
                        <Image
                            key={`logo2-${index}`}
                            src={src}
                            alt={`Logo ${index}`}
                            width={150}
                            height={60}
                            className="object-contain"
                        />
                    ))}
                </div>
            </div>

            <div className="relative overflow-hidden mt-10 w-full h-20 flex items-center">
                <div
                    ref={marqueeRef3}
                    className="flex gap-10 whitespace-nowrap will-change-transform"
                    style={{ minWidth: "300%" }}
                >
                    {repeatedImages3.map((src, index) => (
                        <Image
                            key={`logo3-${index}`}
                            src={src}
                            alt={`Logo ${index}`}
                            width={150}
                            height={60}
                            className="object-contain"
                        />
                    ))}
                </div>
            </div>

            <div className="relative overflow-hidden mt-10 w-full h-20 flex items-center">
                <div
                    ref={marqueeRef4}
                    className="flex gap-10 whitespace-nowrap will-change-transform"
                    style={{ minWidth: "300%" }}
                >
                    {repeatedImages4.map((src, index) => (
                        <Image
                            key={`logo4-${index}`}
                            src={src}
                            alt={`Logo ${index}`}
                            width={150}
                            height={60}
                            className="object-contain"
                        />
                    ))}
                </div>
            </div>

            <div className="relative overflow-hidden mt-10 w-full h-20 flex items-center">
                <div
                    ref={marqueeRef5}
                    className="flex gap-10 whitespace-nowrap will-change-transform"
                    style={{ minWidth: "300%" }}
                >
                    {repeatedImages5.map((src, index) => (
                        <Image
                            key={`logo5-${index}`}
                            src={src}
                            alt={`Logo ${index}`}
                            width={150}
                            height={60}
                            className="object-contain"
                        />
                    ))}
                </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
                <ButtonCompoent style={"font-semibold py-2 px-4 rounded-full gradient-backeground-color"} text="Let’s Connect" icon={<FaPhone className="inline mr-2" />} />
                <ButtonCompoent style={"font-semibold py-2 px-4 gradient-border"} text="View All Companies" />
            </div>
        </div>
    );
};

export default LayerThreedPage;