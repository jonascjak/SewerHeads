export const collections = {
    collection1: {
        type: "image",
        title: "Solitude 2022",
        description: "description 1",
        cover: "/content/collection1/cover.jpg",
        images: [
            { src: "/content/collection1/cover.jpg",  alt: "cover"},
            { src: "/content/collection1/photo1.jpg", alt: "Cyclist in Copenhagen" },
            { src: "/content/collection1/photo2.jpg", alt: "Shadowy alleyway" },
            { src: "/content/collection1/photo3.jpg", alt: "Shadowy alleyway" }
        ]
    },
    collection2: {
        type: "image",
        title: "Martinquad voici 2023",
        description: "description 2",
        cover: "/content/collection2/cover.jpg",
        images: [
            { src: "/content/collection2/photo1.jpg", alt: "Empty bench" },
            { src: "/content/collection2/photo2.jpg", alt: "Person behind foggy glass" },
            { src: "/content/collection2/photo3.jpg", alt: "picture of a woman"},
            { src: "/content/collection2/photo4.jpg", alt: "last picture of the collection "}
        ]
    },
    collection3: {
        type: "image",
        title: "Solitude hibernating hopes 2024",
        description: "description 3",
        cover: "/content/collection3/cover.jpg",
        images: [
            { src: "/content/collection3/photo1.jpg", alt: "Empty bench" },
            { src: "/content/collection3/photo2.jpg", alt: "Person behind foggy glass" },
            { src: "/content/collection3/photo3.jpg", alt: "picture of a woman"},
            { src: "/content/collection3/photo4.jpg", alt: "last picture of the collection "},
            { src: "/content/collection3/photo5.jpg", alt: "last picture of the collection "}
        ]
    },
    collection4: {
        type: "image",
        title: "Gumi Leschmidt 2025",
        description: "description 4",
        cover: "/content/collection4/cover.jpg",
        images: [
            { src: "/content/collection4/photo1.jpg", alt: "Empty bench" },
            { src: "/content/collection4/photo2.jpg", alt: "Person behind foggy glass" },
            { src: "/content/collection4/photo3.jpg", alt: "picture of a woman"},
            { src: "/content/collection4/photo4.jpg", alt: "last picture of the collection "},
            { src: "/content/collection4/photo5.jpg", alt: "Empty bench" },
            { src: "/content/collection4/photo6.jpg", alt: "Person behind foggy glass" },
            { src: "/content/collection4/photo7.jpg", alt: "picture of a woman"},
            { src: "/content/collection4/photo8.jpg", alt: "last picture of the collection "},
            { src: "/content/collection4/photo9.jpg", alt: "Empty bench" },
            { src: "/content/collection4/photo10.jpg", alt: "Person behind foggy glass" },
            { src: "/content/collection4/photo11.jpg", alt: "picture of a woman"},
            { src: "/content/collection4/photo12.jpg", alt: "last picture of the collection "}
        ]
    },
    video1: {
        type: "video",
        title: "Behind the Scenes",
        description: "A sneak peek into the making of our art.",
        cover: "/content/collection3/cover.jpg",
        vimeoEmbed: `
            <div style="padding:177.78% 0 0 0;position:relative;">
                <iframe src="https://player.vimeo.com/video/1084156096?autoplay=1&muted=1"
                        frameborder="0"
                        allow="autoplay; fullscreen;"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;border:none;" title="Behind the Scenes"></iframe>
            </div>
        `
    },

    video2: {
        type: "video",
        title: "Søpavilion",
        description: "lavet i 2025",
        cover: "/content/collection3/cover.jpg",
        videoembed: `
        
        `
    }
};
