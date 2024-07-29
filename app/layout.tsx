import "@/styles/globals.css";
export const metadata = {
  title: "MtGoxFUD ($MGF)-A Meme Coin Based on Mt.Gox Hacking",
  description: "MtGoxFUD ($MGF) A Meme Coin Based on Mt.Gox Hacking.",
};

const RootLayout = ({ children }: { children: React.ReactNode; }) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
