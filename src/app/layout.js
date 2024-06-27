
import '../app/globals.css';

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="container bg-gradient-to-r from-gray-100 to-gray-300 mx-auto">
        
          <main className="flex flex-wrap">{children}</main>
        </div>
      </body>
    </html>
  );
};

export default Layout;
