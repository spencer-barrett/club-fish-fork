import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
  } from "react-router";

  import {HeroUIProvider} from '@heroui/react';
  import {ThemeProvider as NextThemesProvider} from "next-themes";

  
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
          <title>My App</title>
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
  