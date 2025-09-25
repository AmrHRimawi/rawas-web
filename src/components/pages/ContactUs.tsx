"use client";

import React, {useState} from 'react';
import {toast} from 'react-toastify';
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
            const phoneRegex = /^\+?[0٠]{0,2}[0-9٠-٩]{9,14}$/;
            if (!phoneRegex.test(phone)) {
                newErrors.phone = 'تنسيق الهاتف المحمول غير صالح';
                isValid = false;
            }
        }

        setErrors(newErrors);
        return isValid;
    };


    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        const {name, email} = formData;
        const subject = `${name} wants to contact`;
        const message = Object.entries(formData).map(([key, value]) => `${key}: ${value}`).join('\n');

        try {
            setIsSubmitting(true);
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
        } catch (error) {
            toast.error('فشل في إرسال البريد الإلكتروني');
            console.log(`Exception while send email: ${error}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="relative w-full p-6 lg:p-16">
            <div className="absolute inset-0 pointer-events-none"></div>
            <div className="relative z-10">
                <div className="h-24"/>
                <MotionUpDiv><AppTitle text="اصل معنا" prefix="تو"/></MotionUpDiv>
                <br/>
                <div className="flex flex-col justify-center items-center space-y-8">
                    <MotionUpDiv className="lg:w-8/12 w-fit pt-4 pb-2 px-4 text-2xl flex flex-col lg:flex-row justify-evenly items-center bg-background/50 backdrop-blur-md rounded-xl shadow ring-1 ring-white/10">
                    <Link href="tel:0593330060" className="text-xl md:text-2xl text-foreground">
                        <SourceIconText src={pathPrefix + "/icons/phone.svg"} alt="phone">0593330060</SourceIconText>
                    </Link>
                    <Link href="tel:0593330066" className="text-xl md:text-2xl text-foreground">
                        <SourceIconText src={pathPrefix + "/icons/phone.svg"} alt="phone">0593330066</SourceIconText>
                    </Link>
                    <Link href="tel:022422766" className="text-xl md:text-2xl text-foreground">
                        <SourceIconText src={pathPrefix + "/icons/phone.svg"} alt="phone">022422766</SourceIconText>
                    </Link>
                </MotionUpDiv>

                    <MotionUpDiv className="flex flex-col justify-center items-center text-center space-y-4">
                        <p>نسعى لتقديم تجربة مميزة وجديدة في قطاع العقار الفلسطيني</p>
                        <p>ادخل بياناتك هنا ليتم التواصل معك بأقرب وقت</p>
                    </MotionUpDiv>
                    
                    <div className="w-full lg:w-2/3 max-w-4xl">
                        <MotionUpDiv>
                            <div className="bg-background/60 backdrop-blur-md rounded-2xl shadow-2xl ring-1 ring-white/10 p-6 md:p-10">
                                <form onSubmit={handleSubmit} aria-label="contact-form" className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <Input 
                                            type="text" 
                                            name="name" 
                                            label="الاسم" 
                                            value={formData.name} 
                                            onChange={handleChange} 
                                            autoComplete="given-name"
                                            variant="bordered"
                                            radius="lg"
                                            isInvalid={!!errors.name}
                                            errorMessage={errors.name}
                                        />
                                        <Input 
                                            type="text" 
                                            name="family" 
                                            label="العائلة" 
                                            value={formData.family} 
                                            onChange={handleChange} 
                                            autoComplete="family-name"
                                            variant="bordered"
                                            radius="lg"
                                            isInvalid={!!errors.family}
                                            errorMessage={errors.family}
                                        />
                                        <Input 
                                            type="email" 
                                            name="email" 
                                            label="البريد الالكتروني" 
                                            value={formData.email} 
                                            onChange={handleChange} 
                                            autoComplete="email"
                                            variant="bordered"
                                            radius="lg"
                                            isInvalid={!!errors.email}
                                            errorMessage={errors.email}
                                        />
                                        <Input 
                                            type="tel" 
                                            name="phone" 
                                            label="الهاتف المحمول" 
                                            value={formData.phone} 
                                            onChange={handleChange} 
                                            autoComplete="tel"
                                            inputMode="tel"
                                            variant="bordered"
                                            radius="lg"
                                            isInvalid={!!errors.phone}
                                            errorMessage={errors.phone}
                                        />
                                        <Textarea 
                                            name="notes" 
                                            label="الملاحظات" 
                                            value={formData.notes} 
                                            onChange={handleChange} 
                                            autoComplete="off"
                                            variant="bordered"
                                            radius="lg"
                                            className="md:col-span-2"
                                        />
                                    </div>
                                    <Button 
                                        type="submit" 
                                        name="send" 
                                        className="w-full p-6 md:text-xl hover:scale-[1.02] transition-transform" 
                                        color="primary"
                                        isLoading={isSubmitting} 
                                        isDisabled={isSubmitting}
                                    >
                                        إرسال
                                    </Button>
                                </form>
                            </div>
                        </MotionUpDiv>
                    </div>

                    <MotionUpDiv className="lg:w-1/2 max-w-xl flex flex-col items-center space-y-12">
                        <p>أو يمكنك التواصل معنا عبر منصاتنا الاجتماعية</p>
                        <div className="flex flex-wrap justify-around gap-8 px-4">
                            {socialsContact.map(social => (
                                <SourceIconLink key={social.name} src={social.src} link={social.link} alt={social.name} color={social.color} inSize={30} outSize={60}/>
                            ))}
                        </div>
                    </MotionUpDiv>
                </div>
            </div>

            <div className="h-10"/>
            <AppLineSep/>
            <div className="h-10"/>
        </section>
    );
};

export default ContactUs;
