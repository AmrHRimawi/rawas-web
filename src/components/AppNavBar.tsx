"use client"

import React from "react";
import {Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle} from "@nextui-org/react";
import {AppLogo} from "@/components/AppLogo";
import {usePathname} from "next/navigation";
import {navLinks, pathPrefix, primary, socials} from "@/utils/Constent";
import SourceIconLink from "@/components/SourceIconLink";

const mainPath = `${pathPrefix}/`;
export default function AppNavBar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const path = pathPrefix + usePathname() ?? "";
    const isMain = (path === mainPath);


    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        if (isMain) {
            const handleScroll = () => {
                setIsScrolled(window.scrollY > 200); // Adjust the threshold as needed
            };
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, [isMain]);


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
                    <Link href={navLinks[0].link}><AppLogo/></Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden lg:flex gap-4" justify="center">
                <NavbarBrand>
                    <AppLogo/>
                </NavbarBrand>


                {navLinks.map((item, index) => {
                    const isActive = (isMain && item.link === mainPath) || (item.link !== mainPath && path.startsWith(item.link));
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
                    socials(!isMain || isScrolled).map(social => (
                        <NavbarItem key={social.name} className="hidden lg:flex">
                            <SourceIconLink key={social.name} src={social.src} link={social.link} alt={social.name} color={!isMain || isScrolled ? social.color : primary[600]}/>
                        </NavbarItem>
                    ))
                }
            </NavbarContent>

            <NavbarMenu>
                {navLinks.map((item, index) => {
                    const isActive = (isMain && item.link === mainPath) || (item.link !== mainPath && path.startsWith(item.link));
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
                <NavbarMenuItem className="flex flex-wrap justify-center border-t-2 border-foreground-200 mt-3">
                    {
                        socials().map(social => (
                            <SourceIconLink className="m-2" key={social.name} src={social.src} link={social.link} alt={social.name} color={primary[600]}/>
                        ))
                    }
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );

}
