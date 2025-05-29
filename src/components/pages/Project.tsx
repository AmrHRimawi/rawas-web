'use client';

import { useParams } from 'next/navigation';
import { projects } from '@/data/projects';
import MotionUpDiv from '../MotionUpDiv';
import AppTitle from '../AppTitle';
import ImageSlider from '../ImageSlider';
import MotionEndDiv from '../MotionEndDiv';
import SourceIconText from '../SourceIconText';
import { Button, Link } from '@nextui-org/react';
import { pathPrefix } from '@/utils/Constent';
import { AppLineSep } from '../AppLineSep';
import AppTitle3 from '../AppTitle3';
import ImageGallery from '../ImageGallery';
// import other components if needed

export default function ProjectPage() {
  const params = useParams();
  const id = params?.id;

  const project = projects.find((p) => p.id === id);

  if (!project) return <p className="text-center p-10">المشروع غير موجود</p>;

 return (
  <section className="w-full p-1 md:p-6 lg:p-14">
    {/* Project Title */}
    <MotionUpDiv>
      <AppTitle text="واس جيت" prefix="ر" />
    </MotionUpDiv>

    <div className="h-24" />

    <div className="flex flex-col justify-center items-center w-full">
      {/* Image Slider */}
      <MotionUpDiv className="w-full lg:w-5/6" viewportAmount={0.2}>
        <ImageSlider images={project.images} />
      </MotionUpDiv>

      <div className="h-12" />

      {/* Project Properties */}
      <div className="w-5/6 flex flex-col justify-center items-start gap-1">
        {project.properties.map((property, index) => (
          <MotionEndDiv key={"i:" + index} className="flex justify-start items-start">
            <SourceIconText src={property.src} alt={property.alt}>
              <span className="font-medium">{property.title}</span>: {property.text}
            </SourceIconText>
          </MotionEndDiv>
        ))}
      </div>

      <div className="h-12" />

      {/* About the Project */}
      <MotionUpDiv className="w-11/12 md:w-5/6" viewportAmount={0.2}>
        <h2 className="text-2xl font-medium bg-primary w-fit p-4 rounded-lg translate-y-8 -translate-x-12 text-primary-foreground">
          نبذه عن المشروع :
        </h2>
        <p className="bg-foreground-100 rounded-2xl md:ps-14 pt-14 pb-8 md:pe-4">
          {project.about}
        </p>
      </MotionUpDiv>

      <div className="h-12" />

      {/* Contact Us Button */}
      <MotionUpDiv className="w-full flex justify-center">
        <Button
          href={`${pathPrefix}/contact-us`}
          as={Link}
          className="mt-5 p-6 lg:w-1/2 text-xl"
          color="primary"
        >
          للاستفسار تواصل معنا
        </Button>
      </MotionUpDiv>

      <div className="h-12" />
      <AppLineSep />
      <div className="h-12" />

      {/* Project Views Title */}
      <AppTitle3 text="اطلالات المشروع" />

      <div className="h-24" />

      {/* 360° Image Gallery */}
      <MotionUpDiv
        className="w-full flex flex-col justify-center items-center"
        viewportAmount={0.2}
      >
        <p className="text-xl lg:text-2xl">اضغط على الصورة لتظهر بخاصية 360</p>
        <div className="h-8" />
        <ImageGallery images={project.lookImages} />
      </MotionUpDiv>

      <div className="h-24" />

      {/* Project Map */}
      <AppTitle3 text=" موقع المشروع على الخريطة" />
      <div className="h-8" />

      <MotionUpDiv className="w-full" viewportAmount={0.2}>
        <iframe
          title="project location"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1902.868659040583!2d35.20212806400692!3d31.912098375793555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDU0JzQzLjYiTiAzNcKwMTInMTAuNSJF!5e1!3m2!1sen!2suk!4v1724510930866!5m2!1sen!2suk"
          width="100%"
          height="600"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </MotionUpDiv>

      <div className="h-12" />
      <AppLineSep />
    </div>
  </section>
);

}
