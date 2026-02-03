# 🛍️ NOID - Boho Luxury E-commerce Store

A modern, responsive e-commerce store built with React, TypeScript, and Tailwind CSS, featuring a boho-luxury aesthetic and seamless shopping experience.

![React](https://img.shields.io/badge/React-19.1.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.17-blue)

## ✨ Features

### 🏠 Homepage

- **Hero Section** with call-to-action for the new Cindy collection
- **Brand Ethos** section showcasing company values and craftsmanship
- **Featured Brands** carousel with major brand logos
- **Responsive Design** optimized for all devices

### 🛒 Shop Collection

- **Product Catalog** with 8+ curated boho-luxury items
- **Advanced Filtering** by category and price range
- **Real-time Search** and filter functionality
- **Product Cards** with hover effects and wishlist functionality
- **Mobile-First Design** with collapsible filters

### 🎨 Design System

- **Boho-Luxury Aesthetic** with warm, earthy color palette
- **Custom Color Scheme**: Beige tones (#F8F5F0, #E8E1D5) with accent color (#A68A64)
- **Typography**: Playfair Display serif font for elegant appearance
- **Smooth Animations** and hover effects throughout

### 🔧 Technical Features

- **React Router** for seamless navigation
- **TypeScript** for type safety and better development experience
- **Responsive Grid Layouts** using CSS Grid and Flexbox
- **Component-Based Architecture** for maintainability
- **Custom Icons** with SVG components

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/hend-essam/ecommerce-task.git
   cd ecommerce-task
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── icons/           # Custom SVG icon components
│   │   ├── CartIcon.tsx
│   │   ├── HeartIcon.tsx
│   │   ├── SearchIcon.tsx
│   │   └── UserIcon.tsx
│   ├── layout/          # Layout components
│   │   ├── Header.tsx   # Navigation header
│   │   └── Footer.tsx   # Site footer
│   ├── Categories.tsx   # Category navigation
│   ├── ProductCard.tsx  # Product display component
│   └── SearchBar.tsx    # Search functionality
├── pages/               # Page components
│   ├── HomePage.tsx     # Landing page
│   └── Shop-Collection.tsx # Product catalog
├── constants/           # Static data and configurations
│   ├── categories.ts    # Product categories
│   └── dummyData.ts     # Sample product data
└── App.tsx             # Main application component
```

## 🛠️ Available Scripts

| Command         | Description                                    |
| --------------- | ---------------------------------------------- |
| `npm start`     | Runs the app in development mode               |
| `npm test`      | Launches the test runner                       |
| `npm run build` | Builds the app for production                  |
| `npm run eject` | Ejects from Create React App (⚠️ irreversible) |

## 🎨 Design Tokens

### Colors

```css
/* Primary Palette */
--beige-light: #f8f5f0 /* Background */ --beige-medium: #e8e1d5
  /* Cards, sections */ --beige-dark: #d4c9b8 /* Borders */ --accent: #a68a64
  /* Buttons, highlights */ --text-dark: #3a3a3a /* Primary text */;
```

### Typography

- **Primary Font**: Playfair Display (serif)
- **Fallback**: System serif fonts

## 📱 Product Categories

- **Electronics** - Headphones, lamps, tech accessories
- **Clothing** - Dresses, apparel, fashion items
- **Furniture** - Chairs, tables, home furniture
- **Home Decor** - Pillows, mugs, baskets, blankets

## 🔧 Technical Stack

### Frontend

- **React 19.1.0** - UI library
- **TypeScript 4.9.5** - Type safety
- **React Router DOM 7.5.0** - Client-side routing

### Styling

- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **PostCSS 8.5.3** - CSS processing
- **Autoprefixer 10.4.21** - CSS vendor prefixes

### Development Tools

- **Create React App 5.0.1** - Build toolchain
- **React Testing Library** - Component testing
- **Web Vitals** - Performance monitoring

## 🌟 Key Components

### ProductCard

Displays individual products with:

- Product image with hover zoom effect
- Title and price information
- Wishlist heart icon on hover
- Responsive design

### Categories

Navigation component featuring:

- Horizontal category list
- Active state styling
- Mobile-responsive layout

### Shop Collection Filters

Advanced filtering system with:

- Category selection
- Price range slider
- Mobile-collapsible interface
- URL parameter synchronization

## 📊 Performance Features

- **Lazy Loading** for images
- **Optimized Bundle Size** with tree shaking
- **Responsive Images** for different screen sizes
- **CSS-in-JS** with Tailwind for minimal CSS bundle

## 🔮 Future Enhancements

- [ ] Shopping cart functionality
- [ ] User authentication
- [ ] Product detail pages
- [ ] Payment integration
- [ ] Inventory management
- [ ] Customer reviews
- [ ] Search functionality
- [ ] Wishlist persistence

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern boho-luxury brands
- Product images from various sources
- Icons and UI elements custom-designed for the project

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
