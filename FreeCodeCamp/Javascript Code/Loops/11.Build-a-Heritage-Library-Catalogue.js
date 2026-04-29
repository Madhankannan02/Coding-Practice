const rawCatalogCards = [
  "The Diamond Sutra | Unknown | 850 | Shelf Hist-1",
  "From a Buick 8 | King, Stephen | 2002 | Shelf K7",
  "The Gunslinger | King, Stephen | 1982 | Shelf K2",
  "The Stand | King, Stephen | 1978 | Shelf K3",
  "It | King, Stephen | 1986 | Shelf K4",
  "Misery | King, Stephen | 1987 | Shelf K5",
  "Carrie | King, Stephen | 1974 | Shelf K6",
  "The Eyes of the Dragon | King, Stephen | 1987 | Shelf K7",
  "Cujo | King, Stephen | 1981 | Shelf K8",
  "Foundation | Asimov, Isaac | 1951 | Shelf A1",
  "I, Robot | Asimov, Isaac | 1950 | Shelf A2",
  "1984 | Orwell, George | 1949 | Shelf O1",
  "Dune | Herbert, Frank | 1965 | Shelf H1",
  "The Green Mile | King, Stephen | | Shelf K13",
  "The Hobbit | Tolkien, J.R.R. | 1937 | Shelf T1",
  "The Catch-22 | Heller, Joseph | 1961 | Shelf H2",
  "The Road | McCarthy, Cormac | 2006 | Shelf M1",
  "Unknown Title | | 2011 | Shelf X", 
  "Missing Location | Some Author | 1999 | ",
  "Unknown Location Book | Author Name | 2010 | "
];

function parseCard(rawString) {
  const parts = rawString.split("|");
  const trimmedParts = [];
  for (let i = 0; i < parts.length; i++) {
    trimmedParts.push(parts[i].trim());
  }

  const title = trimmedParts[0];
  const author = trimmedParts[1];
  const year = trimmedParts[2];
  const location = trimmedParts[3];

  return {
    title: title || "Unknown",
    author: author || "Unknown",
    year: year ? parseInt(year) : "Unknown",
    location: location || "Unknown"
  };
}

function parseCatalog(rawCards) {
  const catalog = [];
  for (let i = 0; i < rawCards.length; i++) {
    catalog.push(parseCard(rawCards[i]));
  }
  return catalog;
}

function findByAuthor(catalog, author) {
  const searchTerm = author.toLowerCase();
  const results = [];
  for (let i = 0; i < catalog.length; i++) {
    if (catalog[i].author.toLowerCase().includes(searchTerm)) {
      results.push(catalog[i]);
    }
  }
  return results;
}

const catalog = parseCatalog(rawCatalogCards);

function groupByDecade(catalog) {
  const grouped = {};
  for (let i = 0; i < catalog.length; i++) {
    const book = catalog[i];
    if (book.year === "Unknown") {
      if (!grouped["Unknown"]) {
        grouped["Unknown"] = [];
      }
      grouped["Unknown"].push(book);
      continue;
    }
    const decade = Math.floor(book.year / 10) * 10;
    const decadeKey = decade + "s";
    
    if (!grouped[decadeKey]) {
      grouped[decadeKey] = [];
    }
    grouped[decadeKey].push(book);
  }
  return grouped;
}

const byDecade = groupByDecade(catalog);

function renderEntry(entry) {
  const title = entry.title || "Unknown";
  const author = entry.author || "Unknown";
  const year = entry.year || "Unknown";
  const location = entry.location || "Unknown";
  const border = "-".repeat(25);

  return `${border}
Title: ${title}
Author: ${author}
Year: ${year}
Location: ${location}
${border}`;
}

function validateEntry(entry) {
  let isValid = true;
  if (!entry.title || entry.title === "Unknown") {
    isValid = false;
  }
  if (!entry.author || entry.author === "Unknown") {
    isValid = false;
  }
  if (!entry.year || entry.year === "Unknown") {
    isValid = false;
  }
  if (!entry.location || entry.location === "Unknown") {
    isValid = false;
  }
  return isValid;
}

function exportToJSON(catalog) {
  return JSON.stringify(catalog, null, 2);
}

function exportToCSV(catalog) {
  const header = "Title,Author,Year,Location";
  const rows = [];
  for (let i = 0; i < catalog.length; i++) {
    const entry = catalog[i];
    const row = `"${entry.title}","${entry.author}",${entry.year},"${entry.location}"`;
    rows.push(row);
  }

  let csv = header;
  for (let i = 0; i < rows.length; i++) {
    csv = csv + "\n" + rows[i];
  }
  return csv;
}

// Summary Logic
console.log(catalog.length);
console.log(Object.keys(byDecade).length);

let oldestYear = Infinity;
let newestYear = 0;

for (let i = 0; i < catalog.length; i++) {
  const year = catalog[i].year;
  if (year !== "Unknown") {
    if (year < oldestYear) {
      oldestYear = year;
    }
    if (year > newestYear) {
      newestYear = year;
    }
  }
}

console.log(oldestYear);
console.log(newestYear);