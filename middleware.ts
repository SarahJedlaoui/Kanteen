// Import the middleware from next-auth
export { default } from 'next-auth/middleware';

// Define the configuration for the routes to protect
export const config = {
  matcher: [
    '/addRestaurant',
    '/lmida',
    '/tokyohotfriedchicken',
    '/dashboard', 
  ],
};
