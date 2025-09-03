import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
  } from "react-router";

  import {HeroUIProvider} from '@heroui/react';
  import {ThemeProvider as NextThemesProvider} from "next-themes";
  import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
  { title: "GuppyLabs" },
  { name: "description", content: "Building a new social platform" },

  // Favicons
  { tagName: "link", rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
  { tagName: "link", rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
  { tagName: "link", rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },

  // Apple
  { tagName: "link", rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },

  // Web app manifest
  { tagName: "link", rel: "manifest", href: "/site.webmanifest" },

  // Optional theme color (browser UI color)
  { name: "theme-color", content: "#000000" },
];


  
  export function Layout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <head>
          
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>GuppyLabs</title>
          <Meta />
          <Links />
        </head>
        <body>
          {children}
          <ScrollRestoration />
          <Scripts />
        </body>
      </html>
    );
  }
  
  export default function Root() {
    return (

      <HeroUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="dark">

        
    <Outlet />
    </NextThemesProvider>
    </HeroUIProvider>
  
  );
  }
  