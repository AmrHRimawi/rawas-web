"use client"

import React from "react";
import {Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle} from "@nextui-org/react";
import {AppLogo} from "@/components/AppLogo";
import {usePathname} from "next/navigation";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faSquareInstagram} from "@fortawesome/free-brands-svg-icons";

export default function AppNavBar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const path = usePathname() ?? "";
    const isMain = (path === "/");

    const menuItems = [
        {name: "الرئيسية", link: "/"},
        {name: "عن رواس", link: "about-us"},
        {name: "مشاريعنا", link: "projects"},
        {name: "مستشاري رواس", link: "consultants"},
        {name: "موردي رواس", link: "suppliers"},
        {name: "مقالات", link: "blogs"},
        {name: "تواصل معنا", link: "contact-us"},
    ];

    const socials = [
        {
            name: "Facebook",
            icon: <FontAwesomeIcon icon={faFacebook} size="xl"/>,
            link: "https://www.facebook.com"
        },
        {
            name: "Instagram",
            icon: <FontAwesomeIcon icon={faSquareInstagram} size="xl"/>,
            link: "https://www.facebook.com"
        },
    ];

    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 200); // Adjust the threshold as needed
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Navbar
            isBlurred={false}
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            maxWidth="full"
            className={isMain && !isScrolled ? "bg-opacity-0" : "bg-opacity-100"}
            isBordered={!isMain || isScrolled}

        >
            <NavbarContent className="lg:hidden" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"}/>
            </NavbarContent>

            <NavbarContent className="lg:hidden pr-3" justify="center">
                <NavbarBrand>
                    <AppLogo/>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden lg:flex gap-4" justify="center">
                <NavbarBrand>
                    <AppLogo/>
                </NavbarBrand>


                {menuItems.map((item, index) => {
                    const isActive = (path === "/" && item.link === "/") || path.startsWith("/" + item.link);
                    return (
                        <NavbarItem key={`${item.name}-${index}`} className="flex">
                            <div className="w-4"/>
                            <Link
                                className={"w-full "
                                    + (isMain && !isScrolled ? " text-primary-foreground" : " text-primary")
                                    + (isActive ? " border-b-2 border-secondary font-bold" : "")}
                                href={item.link}
                                size="lg"

                            >
                                {item.name}
                            </Link>
                        </NavbarItem>
                    )
                })}

            </NavbarContent>

            <NavbarContent justify="end">
                {
                    socials.map(social => (
                        <NavbarItem key={social.name} className="hidden lg:flex">
                            <Link href={social.link}>{social.icon}</Link>
                        </NavbarItem>
                    ))
                }
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => {
                    const isActive = (path === "/" && item.link === "/") || path.startsWith("/" + item.link);
                    return (
                        <NavbarMenuItem key={`${item.name}-${index}`}>
                            <Link
                                className={"w-full p-1 border-s-2" + (isActive ? " border-primary font-bold" : "")}
                                color={isActive ? "primary" : "foreground"}
                                href={item.link}
                                size="lg"
                            >
                                {item.name}
                            </Link>
                        </NavbarMenuItem>
                    );
                })}
                <NavbarMenuItem className="flex flex-wrap border-t-2 border-secondary mt-3">
                    {
                        socials.map(social => (
                            <Link className="p-5" key={social.name} href={social.link}>{social.icon}</Link>
                        ))
                    }
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );

}
