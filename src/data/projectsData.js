// Data for all projects you have worked on
// You can add/edit data here easily

export const projectsData = [
  {
    id: 1,
    title: "SIBI Sign Language Translation",
    subtitle: "Android App + Machine Learning",
    category: "AI / ML & Mobile App",
    detailedDescription:
      "SIBI is an Android app that translates Indonesian Sign Language (SIBI) gestures into text. The app uses Machine Learning to analyze images captured by the camera in real-time and generate matching letters from sign language gestures.",
    year: "2024–2025",
    image: "/images/projects/SIBI2.webp",
    images: [
      "/images/projects/SIBI3.webp",
      "/images/projects/SIBI4.webp",
      "/images/projects/SIBI5.webp",
    ],
    technologies: [
      "TensorFlow",
      "TensorFlow Lite",
      "Python",
      "Android",
      "Kotlin",
      "Computer Vision",
    ],

    // Case Study
    caseStudy: {
      challenge:
        "The deaf community in Indonesia struggles to communicate with the general public due to limited understanding of SIBI sign language. A technology solution is needed to bridge this communication in real-time and be easily accessible.",
      approach: [
        "Collecting gesture hand dataset for each SIBI alphabet letter",
        "Preprocessing and data augmentation to increase training data variation",
        "Building and training a CNN model using TensorFlow",
        "Optimizing model with TensorFlow Lite for performance on Android devices with limited resources",
        "Integrating the model into a user-friendly Android app",
      ],
      solution:
        "Developed an Android app that uses the device camera to capture hand gestures in real-time and translate them into alphabet letters. The ML model is optimized using TensorFlow Lite for optimal performance on mobile devices.",
      impact: [
        { metric: "95%", label: "Detection Accuracy" },
        { metric: "26", label: "SIBI Letters" },
        { metric: "Real-time", label: "Translation Process" },
      ],
    },

    // Process per project
    process: [
      {
        step: 1,
        title: "Research",
        description: "Studying SIBI gestures and needs of the deaf community",
      },
      {
        step: 2,
        title: "Data Collection",
        description: "Collecting hand gesture dataset images",
      },
      {
        step: 3,
        title: "Preprocessing",
        description: "Augmentation and data normalization",
      },
      {
        step: 4,
        title: "Model Training",
        description: "Training CNN model using TensorFlow",
      },
      {
        step: 5,
        title: "Optimization",
        description: "Optimizing model with TensorFlow Lite for mobile",
      },
      {
        step: 6,
        title: "Development & Testing",
        description: "Building Android app with Kotlin and accuracy testing",
      },
    ],

    github:
      "https://github.com/FadliArdi/SIBI-aplikasi-pengenalan-bahasa-isyarat-",
  },
  {
    id: 2,
    title: "HansKongkow Warmindo",
    subtitle: "Company Profile",
    category: "Web App",
    detailedDescription:
      "HansKongkow Warmindo is a company profile platform equipped with menus and complete features such as ordering and payment via bank transfer or QRIS.",
    year: "2024",
    image: "/images/projects/handkonkow (2).webp",
    images: [
      "/images/projects/handkonkow (2).webp",
      "/images/projects/handkonkow (1).webp",
      "/images/projects/handkonkow (3).webp",
    ],
    technologies: ["React", "Node.js", "Prisma", "PostMan"],

    // Case Study
    caseStudy: {
      challenge:
        "HansKongkow Warmindo needed a digital platform to increase online presence and make it easier for customers to view menus and place orders. The previous manual system caused inefficiency in order and payment processes.",
      approach: [
        "Analyzing business needs and user flow for food ordering",
        "Designing modern and easy-to-use UI/UX",
        "Implementing ordering system and payment gateway",
        "Backend development with Node.js and Prisma ORM",
      ],
      solution:
        "Web platform integrated with online ordering system and multiple payment gateways (bank transfer and QRIS). Equipped with admin dashboard for order and menu management.",
      impact: [
        { metric: "2x", label: "Order Increase" },
        { metric: "QRIS", label: "Payment Integration" },
        { metric: "100%", label: "Digital Menu" },
      ],
    },

    // Process per project
    process: [
      {
        step: 1,
        title: "Discovery",
        description: "Understanding warmindo business needs",
      },
      {
        step: 2,
        title: "Design",
        description: "Designing user-friendly UI/UX",
      },
      {
        step: 3,
        title: "Development",
        description: "Building frontend and backend",
      },
      {
        step: 4,
        title: "Integration",
        description: "Payment gateway integration",
      },
      {
        step: 5,
        title: "QA Testing",
        description: "System functionality testing",
      },
      { step: 6, title: "Deployment", description: "Launch and maintenance" },
    ],
  },
  {
    id: 3,
    title: "UK Online Retail Data Analysis",
    subtitle: "Data Analyst Project",
    category: "Data Analysis",
    detailedDescription:
      "Data analyst project analyzing ~541K UK online retail transactions (Dec 2010–Dec 2011). Covers data cleaning (541,909 → 391,150 rows), exploratory analysis, RFM segmentation (k=3), market basket analysis (Apriori), and Power BI / Tableau dashboards. Key outputs: revenue trend, customer segments, and cross-selling rules.",
    year: "2025",
    image: "/images/projects/E-commerce_analytic.webp",
    images: ["/images/projects/E-commerce_analytic.webp"],
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-Learn (K-Means)",
      "Matplotlib",
      "Seaborn",
      "Mlxtend (Apriori)",
      "Power BI",
      "Tableau",
    ],

    // Case Study
    caseStudy: {
      challenge:
        "UK online retail has large transaction data that isn't used optimally for business decisions. A deep analysis is needed to understand customer behavior and improve business strategy.",
      approach: [
        "Set up environment and import UK retail dataset (ISO-8859-1 encoding)",
        "Clean data: drop duplicates, remove rows without CustomerID, remove cancelled invoices, invalid quantity/price, and non-product stock codes",
        "Standardize text and compute revenue (quantity × unit price)",
        "Exploratory analysis: monthly revenue, average order value, revenue by country",
        "RFM segmentation with k=3 K-Means clustering (log transform, outlier clipping)",
        "Market basket analysis with Apriori (top 150 UK products)",
        "Visualize results with Power BI and Tableau",
      ],
      solution: [
        "Revenue & country mix dashboard — UK accounts for 83% of revenue",
        "Customer segmentation dashboard — three clusters: Champions (17% of customers, 67% of revenue), Loyal (38%, 25%), At Risk (44%, 8%)",
        "Market basket dashboard — top cross-selling rules such as teacup sets, Christmas ornaments, card games, bags, and picture frames",
      ],
      impact: [
        { metric: "£8.74M", label: "Total revenue analyzed" },
        { metric: "83%", label: "Revenue share from UK" },
        { metric: "67%", label: "Revenue from Champions segment" },
      ],
      results: [
        "Q4 (Sep–Nov 2011) delivers ≈ £3.08M — about 35% of annual revenue; November peaks at £1.14M",
        "A Champions customer is worth ≈ 22× an At Risk customer (£7,709 vs £354)",
        "Loyal = 38% of customers / 25% of revenue — best pool to upgrade into Champions",
        "At Risk = 44% of customers but only 8% of revenue — run low-cost win-back campaigns",
        "Top cross-selling rule: Wooden Heart ↔ Wooden Star Christmas Scandinavian (lift 24.3)",
      ],
    },

    // Process per project
    process: [
      { step: 1, title: "Setup", description: "Environment & library setup" },
      {
        step: 2,
        title: "Data Loading",
        description: "Import and initial data exploration",
      },
      {
        step: 3,
        title: "Data Cleaning",
        description: "Cleaning and preprocessing",
      },
      { step: 4, title: "EDA", description: "Exploratory Data Analysis" },
      {
        step: 5,
        title: "Analysis",
        description: "RFM segmentation & K-Means clustering",
      },
      {
        step: 6,
        title: "Visualization",
        description: "Power BI & Tableau dashboards",
      },
    ],

    github:
      "https://github.com/FadliArdi/E-Commerce-Customer-Analytics-Segmentation.git",
  },
];

// Helper function to get project by ID
export const getProjectById = (id) => {
  return projectsData.find((project) => project.id === parseInt(id));
};

// Helper function to get related projects
export const getRelatedProjects = (currentId, category, limit = 3) => {
  return projectsData
    .filter(
      (project) =>
        project.id !== parseInt(currentId) && project.category === category,
    )
    .slice(0, limit);
};
