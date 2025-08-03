// src/data/projects.js
const projects = [
    {
        id: "weather-app",
        title: "Weather App",
        type: "web",
        image: "thumbnails/python_logo.png",
        description: "A React-based app to show real-time weather forecasts.",
        url: "https://yourprojectlink.com",
        details: {
            timeline: "June 2025 - July 2025",
            stack: ["React", "OpenWeatherMap API"],
            bottlenecks: "Handling CORS issues with the weather API.",
            notes: "Used Chart.js to visualize temperature trends."
        }
    },
    {
        id: "pathfinding-visualizer",
        title: "Pathfinding Visualizer",
        type: "python",
        image: "thumbnails/javascript_logo.png",
        description: "A Python desktop app that demonstrates pathfinding algorithms.",
        url: null,
        details: {
            timeline: "May 2025",
            stack: ["Python", "Pygame"],
            bottlenecks: "Optimizing frame rate for large grids.",
            notes: "Inspired by Dijkstra’s algorithm and A* implementations."
        }
    },
    {
        id: "weather-app",
        title: "Weather App",
        type: "web",
        image: "thumbnails/c_sharp_logo.png",
        description: "A React-based app to show real-time weather forecasts.",
        url: "https://yourprojectlink.com",
        details: {
            timeline: "June 2025 - July 2025",
            stack: ["React", "OpenWeatherMap API"],
            bottlenecks: "Handling CORS issues with the weather API.",
            notes: "Used Chart.js to visualize temperature trends."
        }
    }
];

export default projects;
