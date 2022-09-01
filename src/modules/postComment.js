const api = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/AFFSRiO8tq3BNoRoizLk/comments';

const PostComment = async (data) => {
  await fetch(api, {
    method: 'POST',
    headers: {
      'content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  console.log(data);

//   console.log(data);
};

export default PostComment;