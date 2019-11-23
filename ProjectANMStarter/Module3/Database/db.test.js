// describe("Test the addLike method", () => {
//   beforeAll(() => {
//     mongoDB.connect();
//   });

//   afterAll(done => {
//     mongoDB.disconnect(done);
//   });
// });
// it("should insert a doc into collection", async () => {
//   const Comment = require("./index.js").Comment;
//   const save = require("./index.js").saveComment;
//   const mockUser = {
//     idContent: "1", //this is a foreign key for the article
//     username: "mays",
//     text: "hi",
//     likes: 50,
//     date: new Date(Date.now())
//   };

//   await save(mockUser);

//   const insertedUser = await Comment.find({ idContent: "1" });
//   expect(insertedUser).toEqual(mockUser);
// });
