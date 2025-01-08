import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
const navigate = useNavigate;

export const ProjectImg = [
  {
    img: [
      '/image/2.png',
      '/image/1.png',

      '/image/3.png',
      '/image/4.png',
      '/image/5.png',
      '/image/6.png',
    ],

    id: 1,
    name: 'Food App',
    aboutApp: (
      <div>
        <h3>About the App</h3>

        <p>
          This food app is one of the key projects in my portfolio, where I
          gained valuable experience in various aspects of web development.{' '}
          <br />
          I built the app to streamline food ordering, featuring a user-friendly
          interface and seamless payment integrations. <br />
          It was developed using React for the front end, Node.js for the back
          end, and MongoDB for the database.
        </p>
        <p>
          Throughout the development process, I learned how to implement key
          features such as payment integration, <br />
          email-based authentication and verification, and much more. <br />
          The app allows users to browse menus, place orders, and track delivery
          status with ease. <br />
          Fully responsive and optimized for performance, it ensures a smooth
          experience across all devices.
        </p>
        <p>
          The technologies used in this project include React, Bootstrap,
          Node.js, Express, and MongoDB. <br />
          The app aims to enhance user convenience while also improving
          restaurant management systems. <br />
          Below are images showcasing the app's features and user interface.
        </p>
        <a
          href="https://mbitee.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to view
        </a>
      </div>
    ),
  },
  {
    img: ['/image/ecommerce.png', '/image/project.jpg', '/image/bg.webp'],
    video: '/image/clothing.mp4',
    id: 2,
    name: 'Clothing App',
    aboutApp: (
      <div>
        <h3>About the App</h3>
        <p>
          The Clothing App is a modern platform designed to make online shopping
          seamless and enjoyable for users. I built this project <br /> to gain
          experience in building e-commerce applications with features like user
          authentication, payment <br /> integration, and inventory management.
        </p>
        <p>
          The app was developed using React for the front end, Node.js for the
          back end, and MongoDB for the database.
        </p>
        <p>
          Users can browse through a wide range of clothing items, add them to
          the shopping cart, <br /> and complete purchases with secure payment
          gateways.
        </p>
        <p>
          Some key features include: user authentication, order management, and
          real-time stock tracking. <br />
          The app is responsive and optimized to work seamlessly on both desktop
          and mobile devices.
        </p>
        <p>
          Technologies used in this project include React, Redux, Node.js,
          Express, MongoDB, <br /> and Stripe for payment integration.
        </p>
        <p>
          The goal of this project was to enhance the user experience for online{' '}
          <br /> shoppers while also providing store owners with a simplified
          system for <br /> managing products and orders.
        </p>
      </div>
    ),
  },
];
