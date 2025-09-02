import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react";
import { Link } from "@heroui/react";
import React from "react";
import { Link as RouterLink, useLocation } from "react-router";
import GuppyIcon from "../assets/guppy.svg?react";
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import { Moon, Sun } from "lucide-react";
import { FaGithub } from "react-icons/fa";


export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme} = useTheme();

  const location = useLocation();

  useEffect(() => {
    setMounted(true)
  }, []);


    useEffect(() => {
    setIsMenuOpen(false)
  }, [location]);

  if (!mounted) return null;

  const isDark = theme === "dark";

  const pages = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Staff", to: "/staff" },
  ];

  return (
    <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen}   className="bg-primary/70 dark:bg-primary/60">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <GuppyIcon width={28} height={28} fill="foreground"/>
          <Link className="font-bold text-inherit pl-2 tracking-widest" as={RouterLink} to={"/"} >GuppyLabs</Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {pages.map((p) => (
          <NavbarItem>
            <Link color="foreground" as={RouterLink} to={p.to}>
              {p.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
          isIconOnly
          variant="light"
          radius="full"
          aria-label="Toggle theme"
          onPress={() => setTheme(isDark ? "light" : "dark")}
          >
            {isDark ? (
              <Sun className="h-5 w-5 text-foreground"/>
            ): (
              <Moon className="h-5 w-5 text-foreground" />
            )}
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
          isIconOnly
          variant="light"
          radius="full"
          aria-label="Github">
            <a href="https://github.com/tonemazz/CS-4800-Web-Project">
            <FaGithub className="h-5 w-5 text-foreground"/>
            </a>
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {pages.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color="foreground"
              className="w-full text-foreground"
              as={RouterLink}
              to={item.to}
              size="lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
