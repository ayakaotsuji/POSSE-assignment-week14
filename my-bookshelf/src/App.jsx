import BookCard from "./components/BookCard";

const books = [
  {
    id: 1,
    title: "7つの習慣",
    author: "スティーブン・R・コヴィー",
    rating: "★★★★★",
    comment: "長期的に成功し続けるために土台となる「人格」を磨くための普遍的な原則を教えてくれた。",
  },
  {
    id: 2,
    title: "傲慢と善良",
    author: "辻村深月",
    rating: "★★★★★",
    comment: " 婚活や人間関係における無意識の点数付けなど、誰もが持つ「傲慢さ」と「善良さ」のリアリティが刺さる。",
  },
  {
    id: 3,
    title: "DIE WITH ZERO 人生が豊かになりすぎる究極のルール",
    author: "ビル・パーキンス",
    rating: "★★★★☆",
    comment: "究極のカネ・人生戦略について。若ければ若いほど、人生の景色をガラリと変えられる一冊。",
  },
];

function App() {
  return (
    <main className="max-w-2xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">わたしの本棚</h1>
      {books.map((book) => (
        <BookCard
          key={book.id}
          title={book.title}
          author={book.author}
          rating={book.rating}
          comment={book.comment}
        />
      ))}
    </main>
  );
}


export default App;

