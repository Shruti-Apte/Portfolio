import memoryGame from "../images/Projects/memoryGame.png";
import tripPlanner from "../images/Projects/tripPlanner.png";
import spotterSky from "../images/Projects/spotterSky.jpeg";

export const projects = [
    {
        name: "Spotter-Sky",
        img: spotterSky,
        link: "https://spotter-sky.netlify.app/",
        description: "React + Tailwind CSS: A flight search UI that lets users enter routes and dates to view results with filtering, sorting, and price trends, built to showcase complex client-side data handling and state management."
    },
    {
        name: "Trip Planner",
        img: tripPlanner,
        link: "https://spotter-trip-planner-fullstack.netlify.app/",
        description: "React (Vite) + Python (Django) trip planner: Mapbox geocoding/directions, HOS timeline, and ELD-style log sheets.",
    },
    {
        name: "Memory-Game",
        img: memoryGame,
        link: "https://shruti-apte.github.io/memory-game/",
        description: "React + Tailwind CSS + Framer Motion + Howler.js: An interactive memory game where players repeat increasingly complex color and sound sequences, featuring smooth animations and immersive audio for an engaging experience."
    }
];