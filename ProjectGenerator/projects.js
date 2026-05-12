const projectsData = [
    {
      "id": 1,
      "title": "Bin2Dec",
      "difficulty": "Beginner",
      "category": "Number Tier",
      "description": "Binary-to-decimal number converter.",
      "estimated_hours": 2
    },
    {
      "id": 2,
      "title": "Calculator",
      "difficulty": "Beginner",
      "category": "Number Tier",
      "description": "Standard calculator with basic arithmetic operations.",
      "estimated_hours": 3
    },
    {
      "id": 3,
      "title": "Countdown Timer",
      "difficulty": "Beginner",
      "category": "Productivity",
      "description": "Event countdown timer with days, hours, minutes, and seconds.",
      "estimated_hours": 2
    },
    {
      "id": 4,
      "title": "Color Predictor",
      "difficulty": "Beginner",
      "category": "Web",
      "description": "App to guess the hexadecimal code of a random background color.",
      "estimated_hours": 2
    },
    {
      "id": 5,
      "title": "To-Do List",
      "difficulty": "Beginner",
      "category": "Productivity",
      "description": "Classic CRUD application with local storage persistence.",
      "estimated_hours": 4
    },
    {
      "id": 6,
      "title": "Word Counter",
      "difficulty": "Beginner",
      "category": "Text",
      "description": "Parses text to count strings, words, and characters in real-time.",
      "estimated_hours": 1
    },
    {
      "id": 7,
      "title": "Weather App",
      "difficulty": "Intermediate",
      "category": "API Integration",
      "description": "Fetches current weather and 5-day forecast using a public API.",
      "estimated_hours": 5
    },
    {
      "id": 8,
      "title": "Markdown Previewer",
      "difficulty": "Intermediate",
      "category": "Text Parsing",
      "description": "Textarea that parses Markdown input into live HTML preview.",
      "estimated_hours": 4
    },
    {
      "id": 9,
      "title": "GitHub Profiles",
      "difficulty": "Intermediate",
      "category": "API Integration",
      "description": "Search engine using GitHub API to fetch user stats and repositories.",
      "estimated_hours": 4
    },
    {
      "id": 10,
      "title": "Expense Tracker",
      "difficulty": "Intermediate",
      "category": "Finance",
      "description": "Tracks income and expenses with simple charts or data summaries.",
      "estimated_hours": 6
    },
    {
      "id": 11,
      "title": "Recipe App",
      "difficulty": "Intermediate",
      "category": "Web",
      "description": "Browse, filter, and save favorite meal recipes.",
      "estimated_hours": 5
    },
    {
      "id": 12,
      "title": "Image Slider",
      "difficulty": "Intermediate",
      "category": "UI Component",
      "description": "Carousels with automatic transitions and manual controls.",
      "estimated_hours": 3
    },
    {
      "id": 13,
      "title": "URL Shortener",
      "difficulty": "Intermediate",
      "category": "Backend",
      "description": "Accepts long URLs and generates unique shortened redirect keys.",
      "estimated_hours": 6
    },
    {
      "id": 14,
      "title": "Chat Application",
      "difficulty": "Advanced",
      "category": "Real-time",
      "description": "Multi-room chat infrastructure powered by WebSockets.",
      "estimated_hours": 12
    },
    {
      "id": 15,
      "title": "E-Commerce Cart",
      "difficulty": "Advanced",
      "category": "State Management",
      "description": "Full shopping cart flow including stock management and checkouts.",
      "estimated_hours": 10
    },
    {
      "id": 16,
      "title": "Movie Booking System",
      "difficulty": "Advanced",
      "category": "Database/Auth",
      "description": "Interactive seating maps, showtimes, and reservation states.",
      "estimated_hours": 14
    },
    {
      "id": 17,
      "title": "File Sharing Portal",
      "difficulty": "Advanced",
      "category": "Cloud/Storage",
      "description": "Drag-and-drop secure file hosting with auto-expiring links.",
      "estimated_hours": 12
    },
    {
      "id": 18,
      "title": "Issue Tracker",
      "difficulty": "Advanced",
      "category": "Productivity",
      "description": "Kanban board style bug tracker with user role assignments.",
      "estimated_hours": 16
    },
    {
      "id": 19,
      "title": "Unit Testing Suite",
      "difficulty": "Advanced",
      "category": "DevOps",
      "description": "Custom mini assertion framework testing specific logic blocks.",
      "estimated_hours": 8
    },
    {
      "id": 20,
      "title": "Notes App",
      "difficulty": "Beginner",
      "category": "Productivity",
      "description": "Create, edit, and delete text notes with categorized tags.",
      "estimated_hours": 3
    },
    {
      "id": 21,
      "title": "Pomodoro Clock",
      "difficulty": "Beginner",
      "category": "Productivity",
      "description": "Work and break interval timer with audio alerts.",
      "estimated_hours": 3
    },
    {
      "id": 22,
      "title": "Password Generator",
      "difficulty": "Beginner",
      "category": "Security",
      "description": "Generates randomized strong passwords based on criteria toggles.",
      "estimated_hours": 2
    },
    {
      "id": 23,
      "title": "Quiz App",
      "difficulty": "Beginner",
      "category": "Education",
      "description": "Multiple choice trivia quiz with score tracking and timers.",
      "estimated_hours": 4
    },
    {
      "id": 24,
      "title": "Random Quote Generator",
      "difficulty": "Beginner",
      "category": "API Integration",
      "description": "Pulls quotes from public API with instant social sharing intent.",
      "estimated_hours": 2
    },
    {
      "id": 25,
      "title": "Currency Converter",
      "difficulty": "Intermediate",
      "category": "Finance",
      "description": "Converts global currencies using live foreign exchange rates.",
      "estimated_hours": 4
    },
    {
      "id": 26,
      "title": "Drawing Board",
      "difficulty": "Intermediate",
      "category": "Graphics",
      "description": "Canvas-based canvas painter with stroke controls and color swatches.",
      "estimated_hours": 6
    },
    {
      "id": 27,
      "title": "Music Player",
      "difficulty": "Intermediate",
      "category": "Media",
      "description": "Audio player interface with song lists, progress bars, and volume.",
      "estimated_hours": 6
    },
    {
      "id": 28,
      "title": "Typing Speed Test",
      "difficulty": "Intermediate",
      "category": "Utilities",
      "description": "Measures words per minute (WPM) and accuracy errors dynamically.",
      "estimated_hours": 5
    },
    {
      "id": 29,
      "title": "Blog Platform",
      "difficulty": "Advanced",
      "category": "CMS",
      "description": "Markdown blogging platform with server-side generation features.",
      "estimated_hours": 15
    },
    {
      "id": 30,
      "title": "Trello Clone",
      "difficulty": "Advanced",
      "category": "Productivity",
      "description": "Drag-and-drop lists, task columns, and collaborative boards.",
      "estimated_hours": 20
    }
  ]
