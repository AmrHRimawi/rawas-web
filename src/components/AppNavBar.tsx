"use client"

import React from "react";
import {Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle} from "@nextui-org/react";
import {AppLogo} from "@/components/AppLogo";
import {usePathname} from "next/navigation";
import {navLinks, pathPrefix, primary, socials} from "@/utils/Constent";
import SourceIconLink from "@/components/SourceIconLink";
import { cn } from "@/utils/TailwindUtil";

const mainPath = `${pathPrefix}/`;
export default function AppNavBar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const path = pathPrefix + (usePathname() ?? "");
    const isMain = (path === mainPath);


    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        if (isMain) {
            const handleScroll = () => {
                setIsScrolled(window.scrollY > 200); // Adjust the threshold as needed
            };
            window.addEventListener('scroll', handleScroll, { passive: true });
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
            className={cn(
                'sticky top-0 z-50 transition-all duration-300',
                isMain && !isScrolled
                    ? 'bg-transparent shadow-none'
                    : 'bg-background/80 backdrop-blur-md backdrop-saturate-150 shadow-lg'
            )}
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
                    <Link href={navLinks[0].link}><AppLogo/></Link>
                </NavbarBrand>


                {navLinks.map((item) => {
                    const isActive = (isMain && item.link === mainPath) || (item.link !== mainPath && path.startsWith(item.link));
                    return (
                        <NavbarItem key={item.link} className="flex">
                            <Link
                                className={cn(
                                    'relative w-full inline-flex items-center px-1 py-2 transition-colors',
                                    isMain && !isScrolled ? 'text-primary-foreground hover:text-secondary' : 'text-primary hover:text-secondary',
                                    isActive && 'font-bold',
                                    'after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-[2px] after:origin-left after:scale-x-0 after:bg-secondary after:transition-transform after:duration-300 hover:after:scale-x-100',
                                    isActive && 'after:scale-x-100'
                                )}
                                href={item.link}
                                size="lg"
                                aria-current={isActive ? 'page' : undefined}
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
                {navLinks.map((item) => {
                    const isActive = (isMain && item.link === mainPath) || (item.link !== mainPath && path.startsWith(item.link));
                    return (
                        <NavbarMenuItem key={item.link}>
                            <Link
                                className={cn('w-full p-1 border-s-2 transition-colors hover:text-secondary', isActive ? 'border-primary font-bold' : 'border-transparent')}
                                color={isActive ? 'primary' : 'foreground'}
                                href={item.link}
                                size="lg"
                                aria-current={isActive ? 'page' : undefined}
                                onClick={() => setIsMenuOpen(false)}
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
