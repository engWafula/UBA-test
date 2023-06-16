import "@styles/globals.css";
import Nav from "@components/Nav";
import BottomNav from "@components/BottomNav";
export const metadata = {
  title: "UBA test app",
  description: "UBA test app",
};

 
export default function RootLayout({ children }) {
 return (
  <html lang='en'>
  <body>
      <div className='main'>
        <div className='gradient' />
      </div>

      <main className='app'>
        <Nav />
        {children}
        <BottomNav/>
      </main>
  </body>
</html>
  )
}
