const initialData = {
    profile: {
        avatar: require("../assets/avatar1.jpeg")
    },
    stories: [
        {
            id:1,
            avatar: require("../assets/avatar1.jpeg"),
            name: 'John Doe',
            isSeen: true,
        },
        {
            id:2,
            avatar: require("../assets/avatar2.jpeg"),
            name: 'Pooja Vaka',
            isSeen: true,
        },
        {
            id:3,
            avatar: require("../assets/avatar3.jpeg"),
            name: 'Siva Kura',
            isSeen: true,
        },
        {
            id:4,
            avatar: require("../assets/avatar4.jpeg"),
            name: 'Ram Sam',
            isSeen: true,
        },
    ],
    articles: [
        {
            id: 1,
            avatar: require("../assets/avatar1.jpeg"),
            name: 'John Doe',
            image: require("../assets/img1.jpeg"),
            likes: 282,
            commentCount: 786,
            comments: 'View all 0 comments'
        },
        {
            id: 2,
            avatar: require("../assets/avatar2.jpeg"),
            name: 'Pooja Vaka',
            image: require("../assets/img2.jpeg"),
            likes: 135,
            commentCount: 665,
            comments: 'View all 0 comments'
        },
        {
            id: 3,
            avatar: require("../assets/avatar3.jpeg"),
            name: 'Siva Kura',
            image: require("../assets/img3.jpeg"),
            likes: 2,
            commentCount: 5,
            comments: 'View all 0 comments'
        },
        {
            id: 4,
            avatar: require("../assets/avatar4.jpeg"),
            name: 'Ram Sam',
            image: require("../assets/img4.jpeg"),
            likes: 1,
            commentCount: 3,
            comments: 'View all 0 comments'
        },
    ],
}

const data = {
    ...initialData,
    articles: initialData.articles.map(article => {
      return {
        ...article,
        comments: `View all ${article.commentCount} comments`
      };
    })
  };
  

export default data;