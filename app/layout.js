import MainNavigation from "@/components/layout/main-navigation";
import "./globals.css";

export const metadata = {
  title: {
    template: "%s | Next Blog",
    default: "Next Blog",
  },
  description: "A blog about next.js and web development.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainNavigation />
        {children}
        <div id="notifications"></div>
      </body>
    </html>
  );
}
