import NoData from "@/components/NoData";
import AppTitle from "@/components/AppTitle";
import React from "react";
import {Button, Input, Textarea} from "@nextui-org/react";

export default function Suppliers() {
    return (
        <section className="w-5/6">
            <div className="h-32"/>
            <AppTitle text="ـوردينا" prefix="مـ"/>
            <br/>
            <div className="flex flex-col justify-center items-center">
                <NoData/>

                <div className="h-24 lg:h-56"/>

                <div className="lg:w-2/3 max-w-xl flex flex-col items-center">
                    <p className="font-bold text-2xl text-foreground">طلب الحصول على عضوية مورد معتمد</p>
                    <Input type="text" className="mt-5" label="الاسم بالكامل"/>
                    <Input type="text" className="mt-5" label="طبيعة التوريد"/>
                    <Input type="tel" className="mt-5" label="الهاتف المحمول"/>
                    <Input type="email" className="mt-5" label="البريد الالكتروني"/>
                    <Input type="text" className="mt-5" label="العنوان"/>
                    <Textarea label="أخرى" className="mt-5"/>
                    <div className="h-4"/>
                    <Button className="mt-5 p-6 w-full text-xl" color="primary">إرسال</Button>
                    <div className="h-8"/>

                </div>
            </div>
            <div className="h-24"/>
        </section>
    );
}