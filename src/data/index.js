
module.exports = {
    creators: {
        getMany: () => creators,
        get: ({ id }) => creators.find(creator => creator.id == id)
    },
    artists: {
        getMany: () => artists,
        get: ({ id }) => artists.find((artist) => artist.id == id)
    },
    pages: {
        getMany: () => pages,
        get: ({ id }) => pages.find((page) => page.id == id),
        of: ({ artistId }) => pages.filter(page => page.artist.id == artistId)
    }
};

const creators = [
    {
        id: "c1",
        full_name: "Creator One",
        username: "creator_one",
        password_hash: "pwh",
        member_since: "12345678987"
    },
    {
        id: "c2",
        full_name: "Creator Two",
        username: "creator_two",
        password_hash: "pwh",
        member_since: "12345678987"
    },
    {
        id: "c3",
        full_name: "Creator Three",
        username: "creator_three",
        password_hash: "pwh",
        member_since: "12345678987"
    }
];

const artists = [
    {
        id: "a1",
        full_name: "Artist One",
        stage_name: "artist_one",
        titles: ["R&B singer", "Song writer"],
        bio: "Short bio",
        avatar: {
            path: "/images/avatars/ar1"
        }
    },
    {
        id: "a2",
        full_name: "Artist Two",
        stage_name: "artist_two",
        titles: ["Song writer"]
    },
    {
        id: "a3",
        full_name: "Artist Three",
        stage_name: "artist_three",
        titles: ["R&B singer", "Song writer"],
        avatar: {
            path: "/images/avatars/ar1"
        }
    }
];

const pages = [
    {
        id: "p1",
        name: "News",
        description: "A news page for...",
        avatar: {
            path: "/images/avatars/p1"
        },
        artist: {
            id: "a1"
        },
        creators: [
            {
                id: "c2"
            },
            {
                id: "c3"
            }
        ],
        created_at: "12345678987"
    },
    {
        id: "p2",
        name: "Photos",
        artist: {
            id: "a3"
        },
        creators: [],
        created_at: "12345678987"
    },
    {
        id: "p3",
        name: "Blog",
        description: "A blog page for...",
        avatar: {
            path: "/images/avatars/p1"
        },
        artist: {
            id: "a1"
        },
        creators: [
            {
                id: "c1"
            }
        ],
        created_at: "12345678987"
    }
];