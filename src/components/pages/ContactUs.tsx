"use client";

import React, {useState} from 'react';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./AboutUs.css"
import AppTitle from "@/components/AppTitle";
import {Button, Input, Link, Textarea} from "@nextui-org/react";
import MotionUpDiv from "@/components/MotionUpDiv";
import SourceIconText from "@/components/SourceIconText";
import SourceIconLink from "@/components/SourceIconLink";
import {AppLineSep} from "@/components/AppLineSep";
import {pathPrefix, socialsContact} from "@/utils/Constent";
import {FieldErrMsg} from "@/components/FieldErrMsg";
import axios from "axios";


const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        family: '',
        email: '',
        phone: '',
        notes: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        family: '',
        email: '',
        phone: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        setErrors(prevState => ({
            ...prevState,
            [name]: ''
        }));
    };

    const validateForm = () => {
        const {name, family, email, phone} = formData;
        const newErrors = {name: '', family: '', email: '', phone: '', notes: ''};
        let isValid = true;

        if (!name) {
            newErrors.name = 'الاسم مطلوب';
            isValid = false;
        }
        if (!family) {
            newErrors.family = 'العائلة مطلوبة';
            isValid = false;
        }
        if (!email) {
            newErrors.email = 'البريد الإلكتروني مطلوب';
            isValid = false;
        } else {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(email)) {
                newErrors.email = 'تنسيق البريد الإلكتروني غير صالح';
                isValid = false;
            }
        }
        if (!phone) {
            newErrors.phone = 'الهاتف المحمول مطلوب';
            isValid = false;
        } else {
            const phoneRegex = /^\+?0{0,2}\d{9,14}$/;
            if (!phoneRegex.test(phone)) {
                newErrors.phone = 'تنسيق الهاتف المحمول غير صالح';
                isValid = false;
            }
        }

        setErrors(newErrors);
        return isValid;
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        const {name, email, ...rest} = formData;
        const subject = `${name} wants to contact`;
        const message = Object.entries(formData).map(([key, value]) => `${key}: ${value}`).join('\n');

        try {
            const response = await axios.post('/api/send-email', {
                subject,
                email,
                message
            });

            if (response.status === 200) {
                toast.success('تم إرسال البريد الإلكتروني بنجاح');
            } else {
                toast.error('فشل في إرسال البريد الإلكتروني');
            }
            // const sent = await sendEmail(subject, email, message);
            // if (sent) {
            //     toast.success('تم إرسال البريد الإلكتروني بنجاح');
            // } else {
            //     toast.error('فشل في إرسال البريد الإلكتروني');
            // }
        } catch (error) {
            toast.error('فشل في إرسال البريد الإلكتروني');
        }
    };

    return (
        <section className="w-5/6">
            <ToastContainer position="top-left"/>
            <div className="h-24"/>
            <MotionUpDiv><AppTitle text="اصل معنا" prefix="تو"/></MotionUpDiv>
            <br/>
            <div className="flex flex-col justify-center items-center">
                <MotionUpDiv className="lg:w-8/12 w-fit pt-4 pb-2 px-3 text-2xl flex flex-col lg:flex-row justify-evenly items-center bg-foreground-100 shadow-lg rounded-lg">
                    <Link href="tel:0593330060" className="text-2xl text-foreground">
                        <SourceIconText src={pathPrefix + "/icons/phone.svg"} alt="phone">0593330060</SourceIconText>
                    </Link>
                    <Link href="tel:0593330066" className="text-2xl text-foreground">
                        <SourceIconText src={pathPrefix + "/icons/phone.svg"} alt="phone">0593330060</SourceIconText>
                    </Link>
                    <Link href="tel:022422766" className="text-2xl text-foreground">
                        <SourceIconText src={pathPrefix + "/icons/phone.svg"} alt="phone">022422766</SourceIconText>
                    </Link>
                </MotionUpDiv>

                <MotionUpDiv className="flex flex-col justify-center items-center text-center">
                    <div className="h-8"/>
                    <p>نسعى لتقديم تجربة مميزة وجديدة في قطاع العقار الفلسطيني</p>
                    <div className="h-4"/>
                    <p>ادخل بياناتك هنا ليتم التواصل معك بأقرب وقت</p>
                </MotionUpDiv>
                <div className="w-full lg:w-1/2 max-w-xl flex flex-col items-center">
                    <form className="w-full" onSubmit={handleSubmit}>
                        <MotionUpDiv>
                            <Input type="text" name="name" className="mt-5" label="الاسم" value={formData.name} onChange={handleChange}/>
                            <FieldErrMsg msg={errors.name}/>
                        </MotionUpDiv>
                        <MotionUpDiv>
                            <Input type="text" name="family" className="mt-5" label="العائلة" value={formData.family} onChange={handleChange}/>
                            <FieldErrMsg msg={errors.family}/>
                        </MotionUpDiv>
                        <MotionUpDiv>
                            <Input type="email" name="email" className="mt-5" label="البريد الالكتروني" value={formData.email} onChange={handleChange}/>
                            <FieldErrMsg msg={errors.email}/>
                        </MotionUpDiv>
                        <MotionUpDiv>
                            <Input type="tel" name="phone" className="mt-5" label="الهاتف المحمول" value={formData.phone} onChange={handleChange}/>
                            <FieldErrMsg msg={errors.phone}/>
                        </MotionUpDiv>
                        <MotionUpDiv>
                            <Textarea name="notes" label="الملاحظات" className="mt-5" value={formData.notes} onChange={handleChange}/>
                        </MotionUpDiv>
                        <MotionUpDiv>
                            <div className="h-4"/>
                        </MotionUpDiv>
                        <MotionUpDiv>
                            <Button type="submit" name="send" className="mt-5 p-6 w-full text-xl" color="primary">إرسال</Button>
                        </MotionUpDiv>
                    </form>
                </div>

                <MotionUpDiv className="lg:w-1/2 max-w-xl flex flex-col items-center">
                    <div className="h-8"/>
                    <p>أو يمكنك التواصل معنا عبر منصاتنا الاجتماعية</p>
                    <div className="flex flex-wrap justify-around gap-8 mt-8 px-4">
                        {socialsContact.map(social => (
                            <SourceIconLink key={social.name} src={social.src} link={social.link} alt={social.name} color={social.color} inSize={30} outSize={60}/>
                        ))}
                    </div>
                    <div className="h-8"/>
                </MotionUpDiv>
            </div>

            <AppLineSep/>
            <div className="h-10"/>
        </section>
    );
};

export default ContactUs;