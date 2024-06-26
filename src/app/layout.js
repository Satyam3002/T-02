
import '../app/globals.css';

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="container mx-auto">
        
          <main className="flex flex-wrap">{children}</main>
        </div>
      </body>
    </html>
  );
};

export default Layout;
