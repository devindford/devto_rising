import React from "react";

const Articles = ({ data }) => {
  return (
    <div className="flex flex-wrap mx-auto justify-center">
      {data?.map((devto) => {
        return (
          <div
            key={devto.id}
            className="flex flex-col bg-gray-800 shadow-sm p-2 rounded-lg max-w-md mx-3 my-4 flex-wrap justify-between"
          >
            <img
              className="rounded-lg w-10/12 max-h-44 py-4 mx-auto"
              alt={devto.user.name}
              src={devto.social_image}
            />
            <a
              href={devto.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium text-purple-400 text-center w-10/12 mx-auto hover:text-purple-600 hover:underline"
              title={devto.url}
            >
              {devto.title}
            </a>
            <div className="flex items-center w-10/12 justify-between my-3 mx-auto">
              <div className="flex flex-col">
                <div className="text-md text-purple-400">
                  Written by: {devto.user.name}
                </div>

                <div className="flex items-center py-2">
                  {devto.user.twitter_username && (
                    <a
                      href={`https://twitter.com/${devto.user.twitter_username}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`https://twitter.com/${devto.user.twitter_username}`}
                    >
                      <img
                        className="w-6  mr-4 flex"
                        src="/twitter_icon.png"
                        alt="twitter bird"
                      />
                    </a>
                  )}
                  {devto.user.github_username && (
                    <a
                      href={`https://github.com/${devto.user.github_username}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`https://twitter.com/${devto.user.twitter_username}`}
                    >
                      <img
                        className=" w-6 flex"
                        src="/github_icon.png"
                        alt="github cat"
                      />
                    </a>
                  )}
                </div>
              </div>
              <img
                className="rounded-full w-12 flex items-center justify-center"
                src={devto.user.profile_image_90}
              />
            </div>
            <div className="flex justify-evenly w-10/12 mx-auto flex-wrap">
              {devto.tag_list.map((tag) => (
                <div className="inline-flex justify-between items-center px-3 font-medium text-white shadow-md rounded-full bg-purple-600 text-s mt-1">
                  {tag}
                </div>
              ))}
            </div>
            <div className="flex justify-evenly w-10/12 mx-auto py-2">
              <div className="text-sm font-bold text-purple-300">
                Comments: {devto.comments_count}{" "}
                {devto.comments_count >= 10 ? "🤯" : ""}
              </div>
              <div className="text-sm font-bold text-purple-300">
                Reactions: {devto.public_reactions_count}{" "}
                {devto.public_reactions_count >= 20 ? "🔥" : ""}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// canonical_url: "https://dev.to/somanathgoudar/build-a-password-generator-with-react-js-react-toastify-beginners-tutorial-4a9n"
// collection_id: null
// comments_count: 3
// cover_image: null
// created_at: "2021-03-23T08:06:51Z"
// crossposted_at: null
// description: "I have also added react toastify notifications in this project.  Build Password Generator using R..."
// edited_at: null
// id: 642842
// last_comment_at: "2021-03-24T05:34:16Z"
// path: "/somanathgoudar/build-a-password-generator-with-react-js-react-toastify-beginners-tutorial-4a9n"
// positive_reactions_count: 26
// public_reactions_count: 26
// published_at: "2021-03-23T08:06:51Z"
// published_timestamp: "2021-03-23T08:06:51Z"
// readable_publish_date: "Mar 23"
// slug: "build-a-password-generator-with-react-js-react-toastify-beginners-tutorial-4a9n"
// social_image: "https://dev.to/social_previews/article/642842.png"
// tag_list: (4) ["javascript", "react", "beginners", "tutorial"]
// tags: "javascript, react, beginners, tutorial"
// title: "Build A Password Generator with React JS - react-toastify - Beginners Tutorial"
// type_of: "article"
// url: "https://dev.to/somanathgoudar/build-a-password-generator-with-react-js-react-toastify-beginners-tutorial-4a9n"
// user:
// {github_username: "somanath-goudar"
// name: "Somanath Goudar"
// profile_image: "https://res.cloudinary.com/practicaldev/image/fetch/s--N-9hK7o1--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/600953/fdee0195-6d25-410d-9d97-c10ffaa4eb7d.jpeg"
// profile_image_90: "https://res.cloudinary.com/practicaldev/image/fetch/s--avOm0Oam--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/600953/fdee0195-6d25-410d-9d97-c10ffaa4eb7d.jpeg"
// twitter_username: null
// username: "somanathgoudar"
// website_url: null}

export default Articles;
