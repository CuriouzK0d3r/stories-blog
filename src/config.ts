const { MODE } = import.meta.env;

export const isDev = MODE === "development";
export const isProd = MODE === "production";

export const pageSize = 10;

export const siteInfo = {
    siteName: "Short Stories",
    siteDesc: "A Collection of short stories written as a hobby!",
    lang: "en-us",
    icon: "https://fastly.picsum.photos/id/180/96/96.jpg?hmac=3yj6tXBmhS_Bp8tBPAEpR3SyVhJwOVLNWn-T2dSEeK4",
    avatar: "https://fastly.picsum.photos/id/180/96/96.jpg?hmac=3yj6tXBmhS_Bp8tBPAEpR3SyVhJwOVLNWn-T2dSEeK4",
    // github: "https://github.com/npmrun/art-theme",
    get hero() {
        return (
            "https://picsum.photos/1280/780?random=" +
            Math.random() * 1000
        );
    },
    heroPosition: "center",
    startTime: "28/12/2023 10:28:00",
};

export const nav = [
    {
        title: "Search",
        slug: "/search",
        children: [],
    },
    {
        title: "Category",
        slug: "/categories",
        children: [],
    },
    {
        title: "About",
        slug: "/about",
        children: [],
    },
    // {
    //     title: "Contact",
    //     slug: "/contact",
    //     children: [],
    // }
];

export const settings = {
    showTOC: false,
    articleTheme: "github",
    postPicture: "first",
    categories: [
        {
            name: "sci-fi",
            desc: "Science Fiction",
            image:
                "https://fastly.picsum.photos/id/120/4928/3264.jpg?hmac=i-8mkfKj_gRyQt9ZJVhbIBXbtIBNcsbI_gwNe_39vus",
            order: 1,
        },
        {
            name: "mystery",
            desc: "Mystery Stories",
            image:
                "https://fastly.picsum.photos/id/58/290/80.jpg?hmac=vrO7-SDGiV2A7RthGimJo3VWAcFHjjqmi_-xhA8Hu4M",
            order: 2,
        },
    ],
    categorySettings: {
        order: "count",
    },
};
