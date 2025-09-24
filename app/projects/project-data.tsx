export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
    {
        title: "📹 Movie Recommender",
        year: 2025,
        description: "Microservices based recommendendation system",
        url: "https://github.com/Udayan853/movie-recommendation-system",
    },
    {
        title: "🔗 Url Shortener",
        year: 2025,
        description: "Url shortener with Auth features",
        url: "https://github.com/Udayan853/url-shortener",
    },
    {
        title: "📩 Email Summarizer",
        year: 2025,
        description: "Summarize the most recent email",
        url: "https://github.com/Udayan853/email-summarizer"
    },
    {
        title: "🌲 Greenify your GH",
        year: 2025,
        description: "Make your github contribution graph greener",
        url: "https://github.com/Udayan853/Greenify-Your-GH",
    },
    {
        title: "🤝 Roomies",
        year: 2023,
        description: "Roommate finder",
        url: "https://github.com/Udayan853/Roomies"
    },
    {
        title: "📒 Forge Pad",
        year: 2022,
        description: "Text editor with ml model based autocomplete",
        url: "https://github.com/Udayan853/ForgePad",
    },
];
