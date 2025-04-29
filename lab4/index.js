function task1() {
  let fruits = ["яблуко", "полуниця", "апельсин", "груша"];
  console.log("Завдання 1:", fruits);
  fruits.pop();
  console.log("Завдання 1.1:", fruits);
  fruits.unshift("ананас");
  console.log("Завдання 1.2:", fruits);
  console.log("Завдання 1.3:", fruits.sort().reverse());
  let appleIndex = fruits.indexOf("яблуко");
  console.log("Завдання 1.4:", appleIndex);
}

function task2() {
  let colors = ["червоний", "білий", "зелений", "чорний", "блакитний", "синій"];
  console.log("Початкові кольори:", colors.join(", "));
  let longest = colors.reduce((a, b) => (a.length > b.length ? a : b));
  let shortest = colors.reduce((a, b) => (a.length < b.length ? a : b));
  console.log("Завдання 2.1: Найдовший колір:", longest, "Найкоротший колір:", shortest);

  let filteredColors = colors.filter((color) => color.includes("синій"));
  console.log("Завдання 2.2:", filteredColors.join(", "));
  let colorString = colors.join(", ");
  console.log("Завдання 2.3:", colorString);
}

function task3() {
  let employees = [
    { name: "Іван", age: 30, position: "розробник" },
    { name: "Петро", age: 25, position: "дизайнер" },
    { name: "Анна", age: 35, position: "розробник" },
  ];

  employees.sort((a, b) => a.name.localeCompare(b.name));
  console.log("Завдання 3.1:", employees);

  let developers = employees.filter((employee) => employee.position === "розробник");
  console.log("Завдання 3.2:", developers);

  employees = employees.filter((employee) => employee.age !== 30);
  console.log("Завдання 3.3:", employees);

  employees.push({ name: "Ольга", age: 28, position: "тестувальник" });
  console.log("Завдання 3.4:", employees);
}

function task4() {
  let students = [
    { name: "Олексій", age: 20, course: 2 },
    { name: "Марія", age: 22, course: 4 },
    { name: "Ігор", age: 20, course: 3 },
  ];

  student = students.filter((student) => student.name !== "Олексій");
  console.log("Завдання 4.1:", student);

  students.push({ name: "Софія", age: 18, course: 2 });
  console.log("Завдання 4.2:", students);

  students.sort((a, b) => b.age - a.age);
  console.log("Завдання 4.3:", students);

  let thirdYearStudent = students.find((student) => student.course === 3);
  console.log("Завдання 4.4:", thirdYearStudent);
}

function task5() {
  let numbers = [1, 2, 3, 4, 5];

  let squaredNumbers = numbers.map((number) => number * number);
  console.log("Завдання 5.1:", squaredNumbers);

  let evenNumbers = numbers.filter((number) => number % 2 === 0);
  console.log("Завдання 5.2:", evenNumbers);

  let sum = numbers.reduce((acc, number) => acc + number, 0);
  console.log("Завдання 5.3:", sum);

  numbers = numbers.concat([6, 7, 8, 9, 10]);
  console.log("Завдання 5.4:", numbers);

  numbers.splice(0, 3);
  console.log("Завдання 5.5:", numbers);
}
function task7() {
  let student = {
    name: "Іван",
    age: 20,
    course: 2,
  };

  student.subjects = ["математика", "фізика", "програмування"];

  delete student.age;

  console.log("Завдання 7:", student);
}
function libraryManagement(operations) {
  let books = [
    { title: "Майстер і Маргарита", author: "Михайло Булгаков", genre: "роман", pages: 400, isAvailable: true },
    { title: "1984", author: "Джордж Орвелл", genre: "антиутопія", pages: 328, isAvailable: true },
    { title: "Гаррі Поттер і філософський камінь", author: "Джоан Роулінг", genre: "фентезі", pages: 223, isAvailable: true },
    { title: "Шантарам", author: "Девід Грегорі Робертс", genre: "пригодницький роман", pages: 944, isAvailable: true },
    { title: "Тіні забутих предків", author: "Михайло Коцюбинський", genre: "повість", pages: 128, isAvailable: true },
    { title: "Алхімік", author: "Пауло Коельйо", genre: "роман-притча", pages: 208, isAvailable: false }
  ];

  function printBooks(message) {
    console.log(`\n${message}:`);
    console.log(books);
  }

  for (const operation of operations) {
    switch (operation.type) {
      case "add":
        books.push({
          title: operation.title,
          author: operation.author,
          genre: operation.genre,
          pages: operation.pages,
          isAvailable: true,
        });
        printBooks(`Додано книгу "${operation.title}"`);
        break;
      case "remove":
        books = books.filter((book) => book.title !== operation.title);
        printBooks(`Видалено книгу "${operation.title}"`);
        break;
      case "find":
        const foundBooks = books.filter((book) => book.author === operation.author);
        console.log(`\nЗнайдені книги автора "${operation.author}":`);
        console.log(foundBooks);
        break;
      case "toggle":
        const book = books.find((book) => book.title === operation.title);
        if (book) {
          book.isAvailable = !operation.isBorrowed;
          printBooks(`Статус книги "${operation.title}" змінено на ${book.isAvailable ? "доступна" : "взята"}`);
        }
        break;
      case "sort":
        books.sort((a, b) => a.pages - b.pages);
        printBooks("Книги відсортовані за кількістю сторінок");
        break;
      case "stats":
        const totalBooks = books.length;
        const availableBooks = books.filter((book) => book.isAvailable).length;
        const borrowedBooks = totalBooks - availableBooks;
        const averagePages = totalBooks > 0 ? books.reduce((sum, book) => sum + book.pages, 0) / totalBooks : 0;
        console.log("\nСтатистика бібліотеки:");
        console.log({
          totalBooks,
          availableBooks,
          borrowedBooks,
          averagePages,
        });
        break;
      default:
        console.log(`\nНевідома операція: ${operation.type}`);
    }
  }
  return books;
}



task1();
task2();
task3();
task4();
task5();

const operations = [
  { type: "add", title: "Володар перснів", author: "Джон Р.Р. Толкін", genre: "фентезі", pages: 1178 },
  { type: "find", author: "Михайло Булгаков" },
  //{ type: "toggle", title: "1984", isBorrowed: true },
  //{ type: "sort" },
  //{ type: "stats" },
];
libraryManagement(operations);

task7();

