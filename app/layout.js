import MainNavigation from "@/components/layout/main-navigation";
import "./globals.css";

export const metadata = {
  title: {
    template: "%s | Max's Next Blog",
    default: "Max's Next Blog",
  },
  description: "A blog about web development by Max",
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
