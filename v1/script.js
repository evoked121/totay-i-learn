const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

/**create DOM elements */
factsList.innerHTML = "";
loadFacts();
async function loadFacts() {
  const res = await fetch(
    "https://srnvqbvbsxsamucbltjr.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNybnZxYnZic3hzYW11Y2JsdGpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODAyMTA0MjYsImV4cCI6MTk5NTc4NjQyNn0.cbvybYWy9FhEH3AxyS7VB_iuN9BnUnsiOfndgqf5M3U",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNybnZxYnZic3hzYW11Y2JsdGpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODAyMTA0MjYsImV4cCI6MTk5NTc4NjQyNn0.cbvybYWy9FhEH3AxyS7VB_iuN9BnUnsiOfndgqf5M3U",
      },
    }
  );
  const data = await res.json();
  console.log(data);
}

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});
