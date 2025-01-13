# Fake Store React App

This is a ReactJS application that fetches product data from the [Fake Store API](https://fakestoreapi.com/) and allows users to add products to a cart. The application is styled using Tailwind CSS and provides a responsive, user-friendly interface.

## Features

- Fetches and displays products from the Fake Store API.
- Displays product details including image, title, and price.
- Users can add products to the cart.
- Displays a cart count in the navigation bar.
- Clicking the "Cart" button opens a modal showing the cart's contents.
- Users can remove items from the cart directly in the modal.
- Alerts the user if they try to add an item that is already in the cart.
- Fully responsive design for desktop and mobile devices.

## Tech Stack

- **ReactJS**: Frontend framework
- **Tailwind CSS**: Styling
- **JavaScript**: Application logic
- **Fake Store API**: Source of product data

## Setup Instructions

1. Clone this repository:
   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:
   ```bash
   cd my-react-cart-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open the application in your browser:
   ```

http://localhost:5173

## File Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Navigation bar with cart count
│   ├── ProductCard.jsx   # Individual product card
│   ├── CartModal.jsx     # Modal for cart items
├── App.jsx               # Main application component
├── index.css             # Tailwind CSS configuration
└── main.jsx              # Application entry point
```

## Components

### Navbar
- Displays the application title and cart count.
- Clicking the cart button opens the cart modal.

### ProductCard
- Displays product details such as image, title, and price.
- "Add to Cart" button adds the product to the cart.

### CartModal
- A modal displaying the list of cart items.
- Users can remove items from the cart within the modal.

## API Reference

- Fake Store API: [https://fakestoreapi.com/](https://fakestoreapi.com/)

## Deployment

To deploy the application:
1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist/` folder to your preferred hosting platform.

## Future Improvements

- Add user authentication.
- Enable product filtering and sorting.
- Implement a checkout page.

## License

This project is open-source and available under the [MIT License](LICENSE).

