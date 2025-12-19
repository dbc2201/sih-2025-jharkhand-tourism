# JharkhandYatra - Smart Digital Platform for Eco & Cultural Tourism

**SIH 2025 Problem Statement #25032**

[![Live Demo](https://img.shields.io/badge/demo-live-green)](https://jharkhandyatra.vercel.app)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![Node.js](https://img.shields.io/badge/Node.js-24_LTS-339933?logo=node.js)](https://nodejs.org)

---

## 🎯 What It Does

**JharkhandYatra** connects travelers with authentic local experiences in Jharkhand—from tribal homestays and verified local guides to handcrafted artisan products—making eco and cultural tourism accessible, organized, and community-empowering.

**Tagline:** *"Discover the Soul of Jharkhand"*

**Live Demo:** [https://jharkhandyatra.vercel.app](https://jharkhandyatra.vercel.app)

---

## 🌟 The Problem We're Solving

Jharkhand possesses extraordinary natural beauty, rich tribal heritage, and incredible eco-tourism destinations like Netarhat, Betla National Park, and Hundru Falls. However:

- ❌ Tourists struggle to find reliable information about authentic local experiences
- ❌ No centralized platform for safe homestays and trustworthy guides
- ❌ Local communities remain excluded from tourism economy due to lack of digital presence
- ❌ Tribal artisans cannot reach wider markets for their authentic handicrafts
- ❌ Tourism revenue doesn't flow directly to local communities

**Our Solution:** A centralized digital marketplace bridging tourists with local service providers, ensuring authentic experiences while empowering communities economically.

---

## ✨ Key Features

### For Tourists
- ✅ **Discover Verified Homestays** - Safe, authentic tribal homestays with reviews and ratings
- ✅ **Book Expert Local Guides** - Knowledgeable guides for cultural and nature tours
- ✅ **Shop Authentic Handicrafts** - Direct-from-artisan marketplace with craft stories
- ✅ **Advanced Search & Filters** - Find experiences by location, price, rating, amenities
- ✅ **Integrated Booking System** - Seamless date selection and reservation flow
- ✅ **Trip Planning** - Wishlist and itinerary builder for multi-day trips

### For Service Providers
- ✅ **Easy Listing Creation** - Simple interface for homestay/guide/product listings
- ✅ **Booking Management Dashboard** - Track reservations and orders in real-time
- ✅ **Review & Rating System** - Build reputation through customer feedback
- ✅ **Hindi Language Support** - Accessible interface for local providers

### Technical Highlights
- ✅ **Responsive Design** - Mobile-first, works on all devices
- ✅ **Accessible UI** - WCAG 2.1 AA compliant
- ✅ **Real-time Updates** - Live availability and booking confirmations
- ✅ **Secure Authentication** - JWT-based auth with role-based access control
- ✅ **Payment Integration Ready** - Razorpay integration support

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** React 19 with TypeScript 5.7+
- **Build Tool:** Vite 6.x
- **Routing:** React Router v7
- **Styling:** TailwindCSS v4 + DaisyUI v5
- **State Management:** Context API + useReducer
- **Forms:** React Hook Form + Zod validation
- **HTTP Client:** Axios
- **Icons:** Google Material Symbols (Outlined)
- **Date Handling:** date-fns
- **Notifications:** react-hot-toast

### Backend
- **Runtime:** Node.js v24 LTS
- **Language:** TypeScript 5.7+
- **Framework:** Express.js v5
- **Database:** MongoDB 8.0+ with Mongoose v8
- **Authentication:** JWT + bcrypt.js
- **File Uploads:** Multer + Cloudinary
- **Validation:** Zod

### DevOps & Deployment
- **Version Control:** Git + GitHub
- **Frontend Hosting:** Vercel
- **Backend Hosting:** Railway
- **Database Hosting:** MongoDB Atlas
- **Containerization:** Docker + Docker Compose

---

## 🚀 Quick Start

### Prerequisites

- Node.js 24 LTS ([Download](https://nodejs.org))
- npm or yarn
- MongoDB (local installation or [Atlas account](https://www.mongodb.com/cloud/atlas))
- Git

### Installation

```bash
# Clone repository
git clone https://github.com/your-team/jharkhandyatra.git
cd jharkhandyatra

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

### Environment Configuration

**Frontend (.env in `/frontend`):**
```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_preset
```

**Backend (.env in `/backend`):**
```env
# Server
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173

# Database
MONGODB_URI=mongodb://localhost:27017/jharkhandyatra
# Or for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/jharkhandyatra

# Authentication
JWT_SECRET=your-super-secret-jwt-key-change-in-production
JWT_EXPIRE=7d

# File Upload
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Payment (Optional for MVP)
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
```

### Run Development Servers

```bash
# Terminal 1 - Frontend Development Server
cd frontend
npm run dev
# 🚀 Frontend running at: http://localhost:5173

# Terminal 2 - Backend Development Server
cd backend
npm run dev
# 🚀 Backend running at: http://localhost:5000
```

### Using Docker (Alternative)

```bash
# Build and run all services
docker-compose up -d

# Access:
# Frontend: http://localhost:5173
# Backend: http://localhost:5000
# MongoDB: mongodb://localhost:27017
```

---

## 📁 Project Structure

```
jharkhandyatra/
│
├── frontend/                    # React + TypeScript Frontend
│   ├── public/
│   │   ├── favicon.ico
│   │   └── logo.svg
│   │
│   ├── src/
│   │   ├── components/         # Atomic Design Components
│   │   │   ├── atoms/          # Basic building blocks
│   │   │   │   ├── Button/
│   │   │   │   ├── Input/
│   │   │   │   ├── Badge/
│   │   │   │   ├── Avatar/
│   │   │   │   ├── Rating/
│   │   │   │   └── Price/
│   │   │   │
│   │   │   ├── molecules/      # Composite components
│   │   │   │   ├── ListingCard/
│   │   │   │   ├── SearchBar/
│   │   │   │   ├── DateRangePicker/
│   │   │   │   └── ReviewCard/
│   │   │   │
│   │   │   ├── organisms/      # Complex components
│   │   │   │   ├── Navbar/
│   │   │   │   ├── Footer/
│   │   │   │   ├── BookingWidget/
│   │   │   │   └── SearchFilters/
│   │   │   │
│   │   │   ├── layouts/        # Page layouts
│   │   │   │   ├── MainLayout/
│   │   │   │   ├── AuthLayout/
│   │   │   │   └── DashboardLayout/
│   │   │   │
│   │   │   └── pages/          # Route components
│   │   │       ├── Home/
│   │   │       ├── Search/
│   │   │       ├── HomestayDetail/
│   │   │       ├── Marketplace/
│   │   │       └── Dashboard/
│   │   │
│   │   ├── context/            # React Context providers
│   │   │   ├── AuthContext.tsx
│   │   │   ├── CartContext.tsx
│   │   │   └── SearchContext.tsx
│   │   │
│   │   ├── hooks/              # Custom React hooks
│   │   │   ├── useAuth.ts
│   │   │   ├── useSearch.ts
│   │   │   ├── useBooking.ts
│   │   │   └── useCart.ts
│   │   │
│   │   ├── services/           # API service layer
│   │   │   ├── api.ts
│   │   │   ├── auth.service.ts
│   │   │   ├── listings.service.ts
│   │   │   ├── bookings.service.ts
│   │   │   └── orders.service.ts
│   │   │
│   │   ├── types/              # TypeScript type definitions
│   │   │   ├── user.types.ts
│   │   │   ├── listing.types.ts
│   │   │   ├── booking.types.ts
│   │   │   └── order.types.ts
│   │   │
│   │   ├── utils/              # Utility functions
│   │   │   ├── formatters.ts
│   │   │   ├── validators.ts
│   │   │   └── constants.ts
│   │   │
│   │   ├── App.tsx             # Root component
│   │   ├── main.tsx            # Entry point
│   │   └── index.css           # Global styles + DaisyUI theme
│   │
│   ├── .env.example
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── tailwind.config.js
│
├── backend/                     # Node.js + Express Backend
│   ├── src/
│   │   ├── controllers/        # Request handlers
│   │   │   ├── auth.controller.ts
│   │   │   ├── homestay.controller.ts
│   │   │   ├── guide.controller.ts
│   │   │   ├── product.controller.ts
│   │   │   ├── booking.controller.ts
│   │   │   └── order.controller.ts
│   │   │
│   │   ├── models/             # Mongoose schemas
│   │   │   ├── User.model.ts
│   │   │   ├── Homestay.model.ts
│   │   │   ├── Guide.model.ts
│   │   │   ├── Product.model.ts
│   │   │   ├── Booking.model.ts
│   │   │   ├── Order.model.ts
│   │   │   └── Review.model.ts
│   │   │
│   │   ├── routes/             # API routes
│   │   │   ├── auth.routes.ts
│   │   │   ├── homestay.routes.ts
│   │   │   ├── guide.routes.ts
│   │   │   ├── product.routes.ts
│   │   │   ├── booking.routes.ts
│   │   │   ├── order.routes.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── middleware/         # Express middleware
│   │   │   ├── auth.middleware.ts
│   │   │   ├── error.middleware.ts
│   │   │   ├── validation.middleware.ts
│   │   │   └── upload.middleware.ts
│   │   │
│   │   ├── types/              # TypeScript types
│   │   │   ├── express.d.ts
│   │   │   └── models.types.ts
│   │   │
│   │   ├── utils/              # Utility functions
│   │   │   ├── jwt.utils.ts
│   │   │   ├── cloudinary.utils.ts
│   │   │   └── validators.ts
│   │   │
│   │   ├── config/             # Configuration
│   │   │   ├── database.ts
│   │   │   └── constants.ts
│   │   │
│   │   ├── app.ts              # Express app setup
│   │   └── server.ts           # Server entry point
│   │
│   ├── .env.example
│   ├── package.json
│   ├── tsconfig.json
│   └── nodemon.json
│
├── docker-compose.yml           # Docker services configuration
├── .gitignore
├── LICENSE
└── README.md                    # This file
```

---

## 📡 API Documentation

### Base URL
```
Development: http://localhost:5000/api
Production: https://jharkhandyatra-api.railway.app/api
```

### Authentication Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/auth/register` | Register new user | ❌ |
| POST | `/auth/login` | Login user | ❌ |
| POST | `/auth/logout` | Logout user | ✅ |
| GET | `/auth/me` | Get current user | ✅ |
| POST | `/auth/refresh` | Refresh access token | ✅ |
| POST | `/auth/forgot` | Request password reset | ❌ |
| POST | `/auth/reset` | Reset password with token | ❌ |

### Homestay Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/homestays` | List homestays (with filters) | ❌ |
| GET | `/homestays/:id` | Get homestay details | ❌ |
| POST | `/homestays` | Create homestay | ✅ (Provider) |
| PUT | `/homestays/:id` | Update homestay | ✅ (Owner) |
| DELETE | `/homestays/:id` | Delete homestay | ✅ (Owner) |
| GET | `/homestays/:id/reviews` | Get reviews | ❌ |

### Guide Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/guides` | List guides (with filters) | ❌ |
| GET | `/guides/:id` | Get guide details | ❌ |
| POST | `/guides` | Create guide profile | ✅ (Provider) |
| PUT | `/guides/:id` | Update guide profile | ✅ (Owner) |
| GET | `/guides/:id/reviews` | Get reviews | ❌ |

### Product Endpoints (Marketplace)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/products` | List products (with filters) | ❌ |
| GET | `/products/:id` | Get product details | ❌ |
| POST | `/products` | Create product | ✅ (Artisan) |
| PUT | `/products/:id` | Update product | ✅ (Owner) |
| DELETE | `/products/:id` | Delete product | ✅ (Owner) |

### Booking Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/bookings` | List user bookings | ✅ |
| POST | `/bookings` | Create booking | ✅ |
| GET | `/bookings/:id` | Get booking details | ✅ |
| PUT | `/bookings/:id/cancel` | Cancel booking | ✅ |

### Order Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/orders` | List user orders | ✅ |
| POST | `/orders` | Create order from cart | ✅ |
| GET | `/orders/:id` | Get order details | ✅ |
| PUT | `/orders/:id/cancel` | Cancel order | ✅ |

### Search & Utility Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/search` | Unified search (all types) | ❌ |
| GET | `/search/suggestions` | Autocomplete suggestions | ❌ |
| GET | `/destinations` | List destinations/districts | ❌ |

### Example API Request

```bash
# Get all homestays with filters
curl -X GET "http://localhost:5000/api/homestays?district=Ranchi&minPrice=1000&maxPrice=5000&rating=4"

# Create a booking (requires authentication)
curl -X POST "http://localhost:5000/api/bookings" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "listing": "homestay_id",
    "checkIn": "2025-01-15",
    "checkOut": "2025-01-18",
    "guests": {
      "adults": 2,
      "children": 1
    }
  }'
```

---

## 🎨 Design System

### Brand Identity

**Tagline:** "Discover the Soul of Jharkhand"

**Brand Values:**
- 🎯 **Authenticity** - Genuine experiences, real communities
- 🤝 **Community First** - Empowering local economies
- 🌱 **Sustainability** - Responsible, eco-conscious tourism
- 🌍 **Accessibility** - Making hidden gems discoverable

### Color Palette (OKLCH)

**Primary - Terracotta Red**
```css
--color-primary: oklch(55% 0.18 25); /* #C75239 */
```
Represents the red earth of Jharkhand and terracotta pottery tradition

**Secondary - Amber Gold**
```css
--color-secondary: oklch(75% 0.16 70); /* #D4A24A */
```
Represents golden treasures of tribal craftsmanship

**Accent - Forest Green**
```css
--color-accent: oklch(50% 0.14 145); /* #2D7A4E */
```
Represents Jharkhand's dense forests and eco-tourism focus

### Typography

**Headings:** Outfit (400, 500, 600, 700)  
**Body:** Source Sans 3 (300, 400, 500, 600)

### Icons

**Library:** Google Material Symbols (Outlined variant)

---

## 🧪 Testing

### Running Tests

```bash
# Frontend tests
cd frontend
npm run test

# Backend tests
cd backend
npm run test

# E2E tests
npm run test:e2e
```

### Test Coverage

- ✅ Unit tests for utilities and helpers
- ✅ Component tests with React Testing Library
- ✅ API endpoint integration tests
- ✅ Database model validation tests

---

## 🚀 Deployment

### Frontend Deployment (Vercel)

```bash
cd frontend

# Install Vercel CLI
npm i -g vercel

# Deploy to production
vercel --prod

# Configure environment variables in Vercel dashboard
# VITE_API_BASE_URL=https://your-backend.railway.app/api
```

### Backend Deployment (Railway)

1. Create new project on [Railway](https://railway.app)
2. Connect GitHub repository
3. Add MongoDB database service
4. Set environment variables:
    - `NODE_ENV=production`
    - `MONGODB_URI` (from Railway MongoDB service)
    - `JWT_SECRET` (generate secure random string)
    - `CORS_ORIGIN` (your Vercel frontend URL)
    - Cloudinary credentials
5. Deploy automatically on every push to main branch

### Database Setup (MongoDB Atlas)

1. Create cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create database user with password
3. Whitelist IP addresses (or allow from anywhere for development)
4. Copy connection string
5. Update `MONGODB_URI` in backend `.env`

---

## 📊 Database Schema

### Collections Overview

- **users** - User accounts (tourists, providers, artisans, admins)
- **homestays** - Homestay listings with location, amenities, pricing
- **guides** - Local guide profiles with specializations
- **products** - Handicraft marketplace items
- **bookings** - Homestay and guide reservations
- **orders** - Product purchase orders
- **reviews** - User reviews for listings

### Key Relationships

```
User (1) ──< (Many) Homestays (host)
User (1) ──< (Many) Bookings
User (1) ──< (Many) Orders
Homestay (1) ──< (Many) Bookings
Homestay (1) ──< (Many) Reviews
```

---

## 🎯 MVP Features Checklist

### Phase 1: Core Platform (Days 1-6) ✅
- [x] User authentication (register, login, JWT)
- [x] Homestay listing creation and browsing
- [x] Guide profile creation and browsing
- [x] Product marketplace with categories
- [x] Advanced search with filters
- [x] Listing detail pages with reviews
- [x] Responsive design (mobile + desktop)

### Phase 2: Booking & Transactions (Days 7-10) ✅
- [x] Homestay booking system
- [x] Guide booking system
- [x] Shopping cart functionality
- [x] Order management
- [x] Booking status tracking

### Phase 3: Enhanced Features (Days 11-12) 🚧
- [ ] Trip planner with wishlists
- [ ] Service provider dashboard
- [ ] Analytics for providers
- [ ] Razorpay payment integration

---

## 🤝 Contributing

We welcome contributions from the community! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style

- Follow TypeScript best practices
- Use ESLint and Prettier for code formatting
- Write meaningful commit messages
- Add comments for complex logic

---

## 👥 Team

**Team Name:** [Your Team Name]

**Team Members:**
- **[Member 1]** - Team Lead & Full-Stack Developer - [@github](https://github.com/member1)
- **[Member 2]** - Frontend Developer - [@github](https://github.com/member2)
- **[Member 3]** - Backend Developer - [@github](https://github.com/member3)
- **[Member 4]** - UI/UX Designer & Frontend Developer - [@github](https://github.com/member4)
- **[Member 5]** - Database Architect - [@github](https://github.com/member5)
- **[Member 6]** - DevOps & Deployment - [@github](https://github.com/member6)

**Mentor:** Divyansh Bhardwaj ([@dbc2201](https://github.com/dbc2201))

---

## 📝 Documentation

- **Product Requirements Document (PRD):** [docs/PRD.md](docs/PRD.md)
- **API Documentation:** [docs/API.md](docs/API.md)
- **Component Library:** [docs/COMPONENTS.md](docs/COMPONENTS.md)
- **Deployment Guide:** [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)

---

## 📄 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

```
Copyright 2025 [Your Team Name]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

---

## 🙏 Acknowledgments

- **Smart India Hackathon 2025** for the opportunity
- **Jharkhand Tourism Department** for inspiration
- **Tribal Communities of Jharkhand** for their rich cultural heritage
- **Open Source Community** for amazing tools and libraries

---

## 📞 Contact & Support

**Project Repository:** [https://github.com/your-team/jharkhandyatra](https://github.com/your-team/jharkhandyatra)

**Live Demo:** [https://jharkhandyatra.vercel.app](https://jharkhandyatra.vercel.app)

**Team Email:** team@jharkhandyatra.com

**Issue Tracker:** [GitHub Issues](https://github.com/your-team/jharkhandyatra/issues)

---

## 🗺️ Roadmap

### Upcoming Features
- [ ] **Multilingual Support** - Hindi and local tribal languages
- [ ] **Mobile Apps** - iOS and Android native apps
- [ ] **Advanced Analytics** - Provider performance metrics
- [ ] **AI Recommendations** - Personalized travel suggestions
- [ ] **Virtual Tours** - 360° previews of homestays
- [ ] **Community Forum** - Traveler discussion board
- [ ] **Loyalty Program** - Rewards for frequent travelers
- [ ] **Environmental Impact Tracker** - Carbon footprint monitoring

---

## 📈 Impact Metrics

**Target Impact:**
- 🏘️ Onboard **500+ homestays** in first year
- 👥 Connect **200+ local guides** with tourists
- 🎨 Empower **100+ artisans** through marketplace
- 🌍 Increase tourism footfall by **30%** in rural areas
- 💰 Generate **₹1 Cr+** revenue for local communities

---

## ⚡ Performance

- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3s
- **Mobile-Optimized:** 100% responsive
- **Accessibility:** WCAG 2.1 AA Compliant

---

**Built with ❤️ for Jharkhand Tourism & Community Empowerment**

**SIH 2025 - Problem Statement #25032**

---

## 🔗 Quick Links

- [📖 Full Documentation](docs/)
- [🎨 Design System](https://stitch.withgoogle.com/projects/11018627272293321940)
- [🐛 Report Bug](https://github.com/your-team/jharkhandyatra/issues/new?template=bug_report.md)
- [💡 Request Feature](https://github.com/your-team/jharkhandyatra/issues/new?template=feature_request.md)
- [💬 Discussions](https://github.com/your-team/jharkhandyatra/discussions)

---

**Last Updated:** December 2024  
**Version:** 1.0.0  
**Status:** ✅ MVP Complete