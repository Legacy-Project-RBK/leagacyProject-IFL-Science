const Comment = require("./index.js").Comment;
const save = require("./index.js").saveComment;


// describe("Test the addLike method", () => {
//   beforeAll(() => {
//     mongoDB.connect();
//   });
//   afterAll(done => {
//     mongoDB.disconnect(done);
//   });
// });



it("should insert a doc into collection", async () => {

  //await Comment.deleteMany({ username: "mays" });
  const mockUser = {
    idContent: "1", //this is a foreign key for the article
    username: "mays",
    text: "hi",
    likes: 20,
    date: new Date(Date.now())
  };
    await save(mockUser);
  const insertedUser =  await Comment.find().sort({_id:-1}).limit(1);
//   console.log("inserted", insertedUser)
//   console.log("mock", mockUser)
  expect(insertedUser[0].username).toEqual(mockUser.username);
});



