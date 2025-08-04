# Teco-Kit Design Bits - Complete Documentation

## 📋 Table of Contents
1. [Project Overview](#project-overview)
2. [File Structure](#file-structure)
3. [Core Components](#core-components)
4. [Chart System](#chart-system)
5. [Code Generation System](#code-generation-system)
6. [CLI Integration](#cli-integration)
7. [Theme System](#theme-system)
8. [Development Workflow](#development-workflow)
9. [Component Variants](#component-variants)
10. [API Reference](#api-reference)

---

## 🎯 Project Overview

**Teco-Kit Design Bits** is a comprehensive React component library featuring animated UI components, backgrounds, text animations, and data visualization charts. The project provides multiple variants (Default, Tailwind CSS, TypeScript) for each component with seamless CLI installation capabilities.

### Key Features:
- **100+ Components** across 5 categories
- **4 Variants** per component (Default, Tailwind, TS/Default, TS/Tailwind)
- **CLI Integration** via `jsrepo` for easy installation
- **Dark Theme** with glass morphism design
- **Interactive Demos** with real-time customization
- **Chart.js Integration** for data visualization

---

## 📁 File Structure

```
tecokit-design-bits/
├── 📄 index.html                    # Main HTML entry point with SEO meta tags
├── 📄 package.json                  # Dependencies and scripts
├── 📄 README.md                     # Project documentation
├── 📄 jsrepo-build-config.json     # CLI build configuration
├── 📄 tsconfig.json                # TypeScript configuration
├── 📄 vite.config.js               # Vite build configuration
│
├── 📁 public/                       # Static assets
│   ├── 📁 assets/
│   │   ├── 📁 3d/                  # 3D model files (.glb)
│   │   ├── 📁 fonts/               # Custom fonts
│   │   └── 📁 images/              # Static images
│   └── 📄 favicon.ico              # Site favicon
│
├── 📁 src/                          # Main source code
│   ├── 📄 main.jsx                 # React app entry point
│   ├── 📄 App.jsx                  # Main app component
│   ├── 📄 global.d.ts              # Global TypeScript definitions
│   │
│   ├── 📁 components/              # Reusable UI components
│   │   ├── 📁 common/              # Shared components
│   │   │   ├── 📁 Preview/         # Demo preview components
│   │   │   ├── 📁 Misc/            # Miscellaneous components
│   │   │   └── 📁 TabbedLayout/    # Tab navigation system
│   │   ├── 📁 code/                # Code display components
│   │   ├── 📁 landing/             # Landing page components
│   │   ├── 📁 navs/                # Navigation components
│   │   └── 📁 setup/               # App setup components
│   │
│   ├── 📁 content/                 # Actual component implementations
│   │   ├── 📁 Animations/          # Animation components
│   │   ├── 📁 Backgrounds/         # Background components
│   │   ├── 📁 Components/          # UI components
│   │   ├── 📁 Charts/              # Chart components
│   │   └── 📁 TextAnimations/      # Text animation components
│   │
│   ├── 📁 demo/                    # Interactive demo pages
│   │   ├── 📁 Animations/          # Animation demos
│   │   ├── 📁 Backgrounds/         # Background demos
│   │   ├── 📁 Components/          # Component demos
│   │   ├── 📁 Charts/              # Chart demos
│   │   └── 📁 TextAnimations/      # Text animation demos
│   │
│   ├── 📁 constants/               # Configuration and data
│   │   ├── 📄 Categories.js        # Sidebar navigation structure
│   │   ├── 📄 Components.js        # Component mapping
│   │   └── 📁 code/                # Code documentation
│   │       ├── 📁 Animations/      # Animation code examples
│   │       ├── 📁 Backgrounds/     # Background code examples
│   │       ├── 📁 Components/      # Component code examples
│   │       ├── 📁 Charts/          # Chart code examples
│   │       └── 📁 TextAnimations/  # Text animation code examples
│   │
│   ├── 📁 tailwind/                # Tailwind CSS variants
│   │   ├── 📁 Animations/
│   │   ├── 📁 Backgrounds/
│   │   ├── 📁 Components/
│   │   ├── 📁 Charts/
│   │   └── 📁 TextAnimations/
│   │
│   ├── 📁 ts-default/              # TypeScript default variants
│   │   ├── 📁 Animations/
│   │   ├── 📁 Backgrounds/
│   │   ├── 📁 Components/
│   │   ├── 📁 Charts/
│   │   └── 📁 TextAnimations/
│   │
│   ├── 📁 ts-tailwind/             # TypeScript Tailwind variants
│   │   ├── 📁 Animations/
│   │   ├── 📁 Backgrounds/
│   │   ├── 📁 Components/
│   │   ├── 📁 Charts/
│   │   └── 📁 TextAnimations/
│   │
│   ├── 📁 pages/                   # Main page components
│   ├── 📁 docs/                    # Documentation pages
│   ├── 📁 hooks/                   # Custom React hooks
│   ├── 📁 utils/                   # Utility functions
│   └── 📁 css/                     # Global stylesheets
│
├── 📁 scripts/                     # Build and generation scripts
│   ├── 📄 createRegistryReadmes.js # CLI registry documentation
│   └── 📄 generateComponent.js     # Component generation script
│
└── 📄 LICENSE.md                   # Project license
```

---

## 🔧 Core Components

### 1. **Navigation System**
- **`Header.jsx`**: Main navigation header with logo and menu
- **`Sidebar.jsx`**: Sidebar navigation with category filtering
- **`TabbedLayout.jsx`**: Tab system for Preview/Code/CLI views

### 2. **Demo System**
- **`PreviewTab.jsx`**: Interactive component preview
- **`CodeTab.jsx`**: Code examples and documentation
- **`CliTab.jsx`**: CLI installation instructions
- **`Customize.jsx`**: Real-time component customization controls

### 3. **Code Display**
- **`CodeExample.jsx`**: Syntax-highlighted code display
- **`CodeHighlighter.jsx`**: Code syntax highlighting
- **`CliInstallation.jsx`**: CLI command display
- **`Dependencies.jsx`**: Package dependency information

---

## 📊 Chart System

### Chart Components Structure:
```
src/content/Charts/
├── 📄 BarChart.jsx              # Vertical bar chart
├── 📄 HorizontalBarChart.jsx    # Horizontal bar chart
└── 📄 AreaChart.jsx             # Area chart with gradient fill
```

### Chart Features:
- **Chart.js Integration**: Uses `chart.js` and `react-chartjs-2`
- **Dark Theme**: Consistent with overall design system
- **Interactive Tooltips**: Fast, responsive tooltip system
- **Customizable**: Real-time customization via demo controls
- **Multiple Datasets**: Support for comparing multiple data series

### Chart Configuration:
```javascript
// Example: Area Chart Configuration
const defaultOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: { beginAtZero: true, grid: { color: 'rgba(255, 255, 255, 0.1)' } },
    x: { grid: { color: 'rgba(255, 255, 255, 0.1)' } }
  },
  plugins: {
    legend: { display: true, labels: { color: '#ffffff' } },
    tooltip: { 
      mode: 'index', 
      intersect: false, 
      animation: { duration: 0 } 
    }
  },
  interaction: { mode: 'index', intersect: false, axis: 'x' }
};
```

---

## 🔄 Code Generation System

### 1. **Raw Import System**
Components use Vite's `?raw` suffix to import code as strings:
```javascript
import code from '@content/Charts/AreaChart.jsx?raw';
import tailwind from '@tailwind/Charts/AreaChart.jsx?raw';
import tsCode from '@ts-default/Charts/AreaChart.tsx?raw';
import tsTailwind from '@ts-tailwind/Charts/AreaChart.tsx?raw';
```

### 2. **CLI Command Generation**
```javascript
// src/utils/utils.js
export const generateCliCommands = (path, variants = ['default', 'tailwind', 'ts/default', 'ts/tailwind']) => {
  const [category, component] = path.split('/');
  
  return Object.fromEntries(
    variants.map(variant => {
      const formattedKey = `cli${variant.split('/').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join('')}`;
      
      return [formattedKey, `npx jsrepo add https://tecokit.com/${variant}/${category}/${component}`];
    })
  );
};
```

### 3. **Code Constants Structure**
```javascript
// src/constants/code/Charts/areaChartCode.js
export const areaChart = {
  ...(generateCliCommands('Charts/AreaChart')),
  installation: `npm i chart.js react-chartjs-2`,
  usage: `import { AreaChart } from 'tecokit-design-bits';...`,
  code,           // Default JSX variant
  tailwind,       // Tailwind CSS variant
  tsCode,         // TypeScript default variant
  tsTailwind      // TypeScript Tailwind variant
};
```

---

## 🚀 CLI Integration

### CLI Commands Generated:
```bash
# Default variant
npx jsrepo add https://tecokit.com/default/Charts/AreaChart

# Tailwind CSS variant
npx jsrepo add https://tecokit.com/tailwind/Charts/AreaChart

# TypeScript default variant
npx jsrepo add https://tecokit.com/ts/default/Charts/AreaChart

# TypeScript Tailwind variant
npx jsrepo add https://tecokit.com/ts/tailwind/Charts/AreaChart
```

### CLI Configuration:
```json
// jsrepo-build-config.json
{
  "registry": "https://tecokit.com",
  "variants": ["default", "tailwind", "ts/default", "ts/tailwind"],
  "categories": ["Animations", "Backgrounds", "Components", "Charts", "TextAnimations"]
}
```

---

## 🎨 Theme System

### Dark Theme Features:
- **Glass Morphism**: `backdrop-filter: blur(10px)`
- **Gradient Backgrounds**: `linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)`
- **Consistent Colors**: White text on dark backgrounds
- **Subtle Borders**: `rgba(255, 255, 255, 0.1)` borders

### Chart Theme:
```javascript
// Consistent chart styling
const chartTheme = {
  backgroundColor: 'rgba(0, 0, 0, 0.9)',
  borderColor: 'rgba(255, 255, 255, 0.2)',
  textColor: '#ffffff',
  gridColor: 'rgba(255, 255, 255, 0.1)',
  pointColors: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)']
};
```

---

## 🔄 Development Workflow

### 1. **Adding New Components**
```bash
# 1. Create component in content/
src/content/Category/ComponentName.jsx

# 2. Create demo in demo/
src/demo/Category/ComponentNameDemo.jsx

# 3. Create code constants
src/constants/code/Category/componentNameCode.js

# 4. Create variants
src/tailwind/Category/ComponentName.jsx
src/ts-default/Category/ComponentName.tsx
src/ts-tailwind/Category/ComponentName.tsx

# 5. Update navigation
src/constants/Categories.js
src/constants/Components.js
```

### 2. **Component Structure**
```javascript
// Standard component structure
const ComponentName = ({ prop1, prop2, className = '' }) => {
  // Component logic
  return (
    <div className={className}>
      {/* Component JSX */}
    </div>
  );
};

export default ComponentName;
```

### 3. **Demo Structure**
```javascript
// Standard demo structure
const ComponentNameDemo = () => {
  const [state, setState] = useState(initialValue);
  const [key, forceRerender] = useForceRerender();

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container">
          <RefreshButton onClick={forceRerender} />
          <ComponentName key={key} {...props} />
        </Box>
        <Customize>
          {/* Interactive controls */}
        </Customize>
        <PropTable data={propData} />
        <Dependencies dependencyList={deps} />
      </PreviewTab>
      <CodeTab>
        <CodeExample codeObject={componentCode} />
      </CodeTab>
      <CliTab>
        <CliInstallation {...componentCode} />
      </CliTab>
    </TabbedLayout>
  );
};
```

---

## 📦 Component Variants

### 1. **Default Variant** (`src/content/`)
- Standard React components
- Inline styles or CSS modules
- JavaScript/JSX syntax

### 2. **Tailwind Variant** (`src/tailwind/`)
- Uses Tailwind CSS classes
- Same functionality as default
- Utility-first styling approach

### 3. **TypeScript Default** (`src/ts-default/`)
- TypeScript with inline styles
- Full type safety
- Same styling as default variant

### 4. **TypeScript Tailwind** (`src/ts-tailwind/`)
- TypeScript with Tailwind CSS
- Best of both worlds
- Type safety + utility classes

---

## 📚 API Reference

### Component Props Interface
```typescript
interface ComponentProps {
  // Common props
  className?: string;
  width?: string | number;
  height?: string | number;
  
  // Chart-specific props
  data?: ChartData;
  options?: ChartOptions;
  
  // Animation props
  duration?: number;
  delay?: number;
  
  // Custom props
  [key: string]: any;
}
```

### Chart Data Structure
```typescript
interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string | string[];
    borderColor?: string | string[];
    borderWidth?: number;
    fill?: boolean;
    tension?: number;
  }[];
}
```

### Navigation Structure
```javascript
// src/constants/Categories.js
export const CATEGORIES = [
  {
    name: 'Get Started',
    subcategories: ['Introduction', 'Installation']
  },
  {
    name: 'Charts',
    subcategories: ['Bar Chart', 'Horizontal Bar Chart', 'Area Chart']
  },
  // ... other categories
];
```

### Component Mapping
```javascript
// src/constants/Components.js
const charts = {
  'bar-chart': () => import("../demo/Charts/BarChartDemo"),
  'horizontal-bar-chart': () => import("../demo/Charts/HorizontalBarChartDemo"),
  'area-chart': () => import("../demo/Charts/AreaChartDemo"),
};

export const componentMap = {
  ...getStarted,
  ...animations,
  ...textAnimations,
  ...components,
  ...charts,
  ...backgrounds,
};
```

---

## 🛠️ Build & Deployment

### Development
```bash
npm install
npm run dev
```

### Build
```bash
npm run build
```

### CLI Registry
```bash
# Build CLI registry
npm run build:registry

# Deploy to registry
npm run deploy:registry
```

---

## 📝 Code Access Patterns

### 1. **Raw Code Import**
```javascript
// Import code as string for display
import code from '@content/Charts/AreaChart.jsx?raw';
```

### 2. **Component Import**
```javascript
// Import actual component for use
import AreaChart from '@content/Charts/AreaChart';
```

### 3. **Demo Import**
```javascript
// Import demo for routing
import AreaChartDemo from '@demo/Charts/AreaChartDemo';
```

### 4. **Constants Import**
```javascript
// Import code documentation
import { areaChart } from '@constants/code/Charts/areaChartCode';
```

---

## 🔍 Key Files Explained

### **`src/constants/Categories.js`**
- Defines sidebar navigation structure
- Controls component organization
- Used for routing and filtering

### **`src/constants/Components.js`**
- Maps component slugs to demo imports
- Enables dynamic component loading
- Handles lazy loading for performance

### **`src/utils/utils.js`**
- Contains `generateCliCommands` utility
- Generates CLI installation commands
- Handles URL formatting for registry

### **`src/components/common/TabbedLayout.jsx`**
- Provides Preview/Code/CLI tab system
- Manages tab state and navigation
- Ensures consistent demo experience

### **`src/components/code/CodeExample.jsx`**
- Displays syntax-highlighted code
- Handles multiple code variants
- Provides copy-to-clipboard functionality

---

## 🎯 Usage Examples

### Using a Chart Component
```javascript
import { AreaChart } from 'tecokit-design-bits';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [{
    label: 'Sales',
    data: [186, 305, 237, 73, 209, 214],
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    fill: true
  }]
};

function App() {
  return <AreaChart data={data} height="400px" />;
}
```

### CLI Installation
```bash
# Install default variant
npx jsrepo add https://tecokit.com/default/Charts/AreaChart

# Install with dependencies
npm install chart.js react-chartjs-2
```

---

This documentation provides a complete overview of the Teco-Kit Design Bits project structure, functionality, and development patterns. Each component follows consistent patterns for maintainability and scalability. 