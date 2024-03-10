//   {
//     "id": 1,
//     "body": "This is some awesome thinking!",
//     "postId": 100,
//     "user": {
//       "id": 63,
//       "username": "eburras1q"
//     }

export interface findAllCommentsInterface {
  id: number;
  body: string;
  postId: number;
  user: {
    id: number;
    username: string;
  };
}
