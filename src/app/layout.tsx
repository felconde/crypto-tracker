import { FavoritesProvider } from "@/store/FavoritesContext";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <FavoritesProvider>
          {children}
        </FavoritesProvider>        
      </body>
    </html>
  );
}
