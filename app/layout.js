import './globals.css';
import './dollop.css';

export const metadata = {
  title: 'Power Park Cafe | Dandenong South',
  description: 'Fresh coffee, homemade meals and sandwiches at Power Park Cafe — 186–190 Discovery Rd, Dandenong South.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
