# DeciSmart - Intelligent Decisions, Accelerated

A Base Mini App empowering product managers with AI-driven insights, scenario simulations, and collaborative decision-making tools.

## Features

- **AI-Powered Recommendations**: Clear, explainable AI-driven suggestions for product strategies
- **Scenario & Risk Simulation**: Model different strategies and understand potential outcomes
- **Interactive Dashboards**: Visualize key metrics and simulation results
- **Collaborative Decision Workflows**: Team collaboration on analysis and decision-making
- **Seamless Data Connectivity**: Integration with key data sources

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Charts**: Recharts for data visualization
- **Base Integration**: MiniKit for Base Mini App functionality
- **TypeScript**: Full type safety throughout the application

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   Copy `.env.local` and update with your API keys:
   ```bash
   cp .env.local .env.local
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Main dashboard page
│   ├── providers.tsx      # MiniKit provider setup
│   └── globals.css        # Global styles and design tokens
├── components/            # React components
│   ├── features/          # Feature-specific components
│   ├── layout/            # Layout components
│   └── ui/                # Reusable UI components
├── lib/                   # Utilities and types
│   ├── types.ts           # TypeScript type definitions
│   ├── utils.ts           # Utility functions
│   └── constants.ts       # App constants and mock data
└── public/                # Static assets
```

## Design System

The app uses a custom design system with:

- **Colors**: Dark theme with blue primary and teal accent colors
- **Typography**: Responsive text scales with semantic naming
- **Components**: Modular, reusable components with variants
- **Animations**: Smooth transitions with cubic-bezier easing
- **Layout**: 12-column fluid grid with consistent spacing

## Base Mini App Integration

This app is built as a Base Mini App using:

- **MiniKit Provider**: Handles Base chain connection and wallet integration
- **Mobile-First Design**: Optimized for mobile experience within Base App
- **Safe Area Support**: Proper handling of device safe areas
- **Social Integration**: Built for social-native experience

## Development

### Adding New Features

1. Define types in `lib/types.ts`
2. Create components in appropriate directories
3. Add mock data to `lib/constants.ts` for development
4. Implement proper error handling and loading states

### Styling Guidelines

- Use Tailwind CSS classes with the custom design system
- Follow mobile-first responsive design principles
- Use semantic color and spacing tokens
- Implement proper hover and focus states

### Performance

- Components use proper React patterns (hooks, memo where needed)
- Images are optimized with Next.js Image component
- Code splitting is handled automatically by Next.js
- Bundle size is optimized with proper imports

## Deployment

The app is ready for deployment on Vercel or any Next.js-compatible platform:

```bash
npm run build
npm start
```

## Contributing

1. Follow the existing code style and patterns
2. Add proper TypeScript types for new features
3. Include error handling and loading states
4. Test on mobile devices for Mini App compatibility
5. Update documentation for new features

## License

This project is licensed under the MIT License.
