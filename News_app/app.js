const main = document.querySelector(".main");
const loading = document.querySelector(".loading");
const searchBtn = document.getElementById("searchBtn");
const searchInp = document.getElementById("searchInp");
const categoryBtns = document.querySelectorAll(".category-btn");
const themeToggle = document.querySelector(".theme-toggle");

// --- GNews API (browser-friendly) ---
const API_KEY = ""; // Replace with your free GNews API key
const PAGE_SIZE = 10;

let page = 1;
let currentCategory = "";
let currentQuery = "";

// Display news cards
function displayNews(news, append=false){
  if(!append) main.innerHTML = "";
  if(!news || news.length===0){ main.innerHTML="<p>No news found.</p>"; return; }
  news.forEach(article=>{
    const card = document.createElement("a");
    card.className = "card";
    card.href = article.url;
    card.target="_blank";
    card.innerHTML = `
      <img src="${article.image || 'https://via.placeholder.com/300x180'}" alt="News Image">
      <div class="card-body">
        <h5 class="card-title">${article.title}</h5>
        <p class="card-text">${article.description ? article.description.substring(0,100)+'...' : ''}</p>
        <div class="card-info">
          <p><strong>Published:</strong> ${new Date(article.publishedAt).toLocaleString()}</p>
        </div>
      </div>
      <div class="card-overlay">Click to read full article</div>
    `;
    main.appendChild(card);
  });
}

// Fetch news from GNews
async function fetchNews(category="", query="", append=false){
  loading.style.display="block";
  let url = `https://gnews.io/api/v4/top-headlines?token=${API_KEY}&lang=en&max=${PAGE_SIZE}&page=${page}`;
  if(category) url += `&topic=${category}`;
  if(query) url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(query)}&token=${API_KEY}&lang=en&max=${PAGE_SIZE}&page=${page}`;
  try{
    const res = await fetch(url);
    const data = await res.json();
    displayNews(data.articles, append);
  }catch(err){
    console.error(err);
    main.innerHTML="<p>Failed to load news.</p>";
  }finally{
    loading.style.display="none";
  }
}

// Initial load
fetchNews();

// Search
searchBtn.addEventListener("click", ()=>{
  const query = searchInp.value.trim();
  if(!query) return;
  currentQuery = query;
  currentCategory = "";
  page=1;
  fetchNews("", currentQuery);
  searchInp.value="";
});
searchInp.addEventListener("keydown",(e)=>{ if(e.key==="Enter") searchBtn.click(); });

// Categories
categoryBtns.forEach(btn=>{
  btn.addEventListener("click", ()=>{
    categoryBtns.forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    const category = btn.dataset.category;
    currentCategory = category;
    currentQuery = "";
    page=1;
    fetchNews(category);
  });
});

// Infinite scroll
window.addEventListener("scroll", ()=>{
  if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 100){
    page++;
    if(currentQuery) fetchNews("", currentQuery, true);
    else fetchNews(currentCategory, "", true);
  }
});

// Theme toggle
themeToggle.addEventListener("click",()=>document.body.classList.toggle("dark"));
