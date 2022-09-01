const api = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/AFFSRiO8tq3BNoRoizLk/comments';

const Post = async (data) => {
  await fetch(api, {
    method: 'POST',
    headers: {
      'content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

export default Post;