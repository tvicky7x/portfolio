import "./globals.css";

export const metadata = {
  title: "T Vicky",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
