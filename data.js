// ═══════════════════════════════════════════
//  SUPABASE CONFIG
// ═══════════════════════════════════════════
const SUPABASE_URL = "https://laghhnxxfgwgjpvsfzhw.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhZ2hobnh4Zmd3Z2pwdnNmemh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU0NDUxNDIsImV4cCI6MjA5MTAyMTE0Mn0.tsufxhlF1OyI4hfvbHYDlHhIS6dp-C_wbr3ev5oZyoE";

// ═══════════════════════════════════════════
//  ADMIN AUTH
// ═══════════════════════════════════════════
const ADMIN_USERNAME = "ahsan";
const ADMIN_PASSWORD = "changeme123"; // ← change this!
const SESSION_KEY    = "admin_session";
const SESSION_EXPIRY = 2 * 60 * 60 * 1000;

function login(username, password) {
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify({ ts: Date.now() }));
    return true;
  }
  return false;
}

function isLoggedIn() {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) return false;
    const { ts } = JSON.parse(raw);
    return Date.now() - ts < SESSION_EXPIRY;
  } catch { return false; }
}

function logout() {
  sessionStorage.removeItem(SESSION_KEY);
}

// ═══════════════════════════════════════════
//  SUPABASE API HELPERS
// ═══════════════════════════════════════════
async function sbFetch(path, method = "GET", body = null) {
  const opts = {
    method,
    headers: {
      "Content-Type": "application/json",
      "apikey": SUPABASE_KEY,
      "Authorization": "Bearer " + SUPABASE_KEY,
      "Prefer": method === "POST" ? "resolution=merge-duplicates" : ""
    }
  };
  if (body) opts.body = JSON.stringify(body);
  const res = await fetch(SUPABASE_URL + "/rest/v1/" + path, opts);
  if (!res.ok) {
    const err = await res.text();
    throw new Error(err);
  }
  const text = await res.text();
  return text ? JSON.parse(text) : null;
}

// ── Content (blogs, ventures, etc.) ─────────────────
async function loadContent(key) {
  try {
    const rows = await sbFetch(`content?key=eq.${key}&select=data`);
    if (rows && rows.length > 0) return rows[0].data;
    return null;
  } catch { return null; }
}

async function saveContent(key, data) {
  await sbFetch("content", "POST", { key, data });
}

// ── Profile ──────────────────────────────────────────
async function loadProfile() {
  try {
    const rows = await sbFetch("profile?id=eq.1&select=data");
    if (rows && rows.length > 0) return rows[0].data;
    return null;
  } catch { return null; }
}

async function saveProfile(data) {
  await sbFetch("profile", "POST", { id: 1, data });
}

// ── Media (photos/logos) ─────────────────────────────
async function loadMedia(key) {
  try {
    const rows = await sbFetch(`media?key=eq.${key}&select=data`);
    if (rows && rows.length > 0) return rows[0].data;
    return null;
  } catch { return null; }
}

async function saveMedia(key, data) {
  await sbFetch("media", "POST", { key, data, updated_at: new Date().toISOString() });
}

// ── Responses ────────────────────────────────────────
async function saveResponse(formTitle, data) {
  await sbFetch("responses", "POST", { form_title: formTitle, data });
}

async function loadResponses() {
  try {
    const rows = await sbFetch("responses?select=*&order=created_at.desc");
    return rows || [];
  } catch { return []; }
}

// ── Subscribers ──────────────────────────────────────
async function saveSubscriber(email) {
  await sbFetch("subscribers", "POST", { email });
}

async function loadSubscribers() {
  try {
    const rows = await sbFetch("subscribers?select=*&order=created_at.desc");
    return rows || [];
  } catch { return []; }
}

// ═══════════════════════════════════════════
//  DEFAULT DATA
// ═══════════════════════════════════════════
const DEFAULT_DATA = {
  profile: {
    name: "Ahsan Foez Nahian",
    label: "Founder · PM · EdTech · Growth",
    tagline: "Building products that reach the next billion. Founder turned PM candidate.",
    tags: ["EdTech · Growth", "Product Strategy", "Emerging Markets", "Bangladesh → USA"],
    statNum: "1,000,000+",
    statLabel: "students reached through products I built.",
    bio: `To founders, PMs, and the curious. I'm <strong>Ahsan Foez Nahian</strong> — a tech-enabled entrepreneur who has built and scaled real products serving <strong>1M+ users</strong>. I founded <strong>Privatune</strong> (100K+ students/yr), led product at <strong>Apar's Classroom</strong> (800K+), and grew a 1M+ community.<br><br>Now at <em>Gettysburg College</em> on a full-ride Abraham Lincoln Scholarship, studying Business, Economics & Data Science — targeting <strong>PM, GTM, and growth roles.</strong>`,
    about: "This site is for hiring managers, founders, and investors. I built products in Bangladesh that most PMs only reach at Series B.",
    linkedin: "https://linkedin.com/in/ahsannahian",
    email: "ahsan@gettysburg.edu",
    resume: "#",
    photo: null,
    availability: "open"
  },
  blogs: [
    { id: 1, title: "Why Western GTM Playbooks Fail in Emerging Markets", date: "2026-03-15", read: "6 min read", excerpt: "CAC models built for credit-card economies collapse in mobile-money markets.", content: "Full content here...", img: null },
    { id: 2, title: "The Week-2 Cliff: The Retention Metric Most EdTech PMs Ignore", date: "2026-02-20", read: "4 min read", excerpt: "Students who return after their first-week cliff have 4x lifetime engagement.", content: "Full content here...", img: null },
    { id: 3, title: "Referral Loops Only Work When the Reward Is the Product", date: "2026-01-10", read: "5 min read", excerpt: "At Privatune, discount-based referrals had 12% conversion. Product-as-reward hit 34%.", content: "Full content here...", img: null }
  ],
  cases: [
    { id: 1, company: "Apar's Classroom · 800K+", title: "Growing organic reach 35% with ML-driven SEO", problem: "Platform growth had plateaued.", decision: "Built ML-assisted SEO architecture targeting exam prep keywords.", measured: "Organic traffic, new user acquisition rate.", result: "↑ 35% organic reach · Reduced CAC" },
    { id: 2, company: "Privatune · EdTech", title: "Scaling 0 → 100K students/yr without paid marketing", problem: "New platform, near-zero budget.", decision: "Referral-first growth loop.", measured: "Weekly active students, referral conversion.", result: "→ 100,000+ students/year" },
    { id: 3, company: "Connecting Goal", title: "Bangladesh's first digital group study platform", problem: "Students lacked peer collaboration tools.", decision: "Group study rooms with goals and tracking.", measured: "Completion rate, academic performance surveys.", result: "↑ 40% academic performance · 50,000+ students" },
    { id: 4, company: "VisaCracked", title: "Solving the last mile — the visa interview", problem: "Qualified students failed US visa interviews.", decision: "Mock interview simulations platform.", measured: "Interview success rate vs control.", result: "→ Democratizing global access to education" }
  ],
  thinks: [
    { id: 1, tag: "GTM · Emerging Markets", title: "Why Western GTM playbooks fail in Bangladesh", body: "CAC models built for credit-card markets collapse in mobile-money economies." },
    { id: 2, tag: "Product · Retention", title: "The retention metric most EdTech PMs ignore", body: "The real signal is day-8 return rate — 4x lifetime engagement." },
    { id: 3, tag: "Growth · Distribution", title: "Referral loops only work when the reward is the product", body: "At Privatune, discount referrals: 12%. Product-as-reward: 34%." }
  ],
  ventures: [
    { id: 1, name: "Privatune", logo: null, role: "Founder & CEO", url: "https://privatune.com", desc: "Bangladesh's fastest-growing edtech platform.", stats: ["100,000+ students/yr", "Organic growth"] },
    { id: 2, name: "VisaCracked", logo: null, role: "Founder", url: "#", desc: "Platform helping students prepare for US visa interviews.", stats: ["Global access", "EdTech"] },
    { id: 3, name: "Ezionic", logo: null, role: "Founder & CEO", url: "#", desc: "Social media management & web dev agency.", stats: ["50+ websites", "International revenue"] },
    { id: 4, name: "Connecting Goal", logo: null, role: "Co-Founder", url: "#", desc: "Bangladesh's first digital group study platform.", stats: ["50,000+ students", "40% performance lift"] }
  ],
  experience: [
    { id: 1, title: "Product Manager — Apar's Classroom", logo: null, logoText: "AC", url: "#", meta: "800,000+ students · Bangladesh's largest EdTech", desc: "Drove 35% organic reach growth using ML-powered SEO.", badge: "Key Role" },
    { id: 2, title: "Marketing Team Lead — Apar's Classroom", logo: null, logoText: "AC", url: "#", meta: "1M+ student community", desc: "Led growth campaigns across Bangladesh's largest student network.", badge: "" },
    { id: 3, title: "Intern — HNVI Management, The City Bank Ltd", logo: null, logoText: "CB", url: "#", meta: "Financial Analysis · Market Research", desc: "Improved portfolio returns by 25%.", badge: "" }
  ],
  numbers: [
    { id: 1, val: "1M+", label: "Students reached across all platforms" },
    { id: 2, val: "100K+", label: "Privatune annual student base" },
    { id: 3, val: "35%", label: "Organic reach growth via ML-SEO" },
    { id: 4, val: "50K+", label: "Students on Connecting Goal" },
    { id: 5, val: "$75K/yr", label: "Abraham Lincoln Scholarship value" },
    { id: 6, val: "50+", label: "School websites via Ezionic" }
  ],
  education: [
    { id: 1, school: "Gettysburg College", logo: null, logoText: "GC", deg: "Business, Organizations & Management · Economics · Minor in Data Science", badge: "🏆 Abraham Lincoln Scholar — Full Ride (~$75K/yr)", certs: ["Harvard — CS50", "UC San Diego — DSA", "Stanford — Machine Learning"] }
  ],
  forms: [
    { id: 1, title: "Work With Me", desc: "PM, GTM, or growth opportunities", btnText: "Send →", thanks: "Thanks! I'll get back to you soon.", fields: [{ type: "text", label: "Your Name" }, { type: "email", label: "Email" }, { type: "text", label: "Company / Role" }, { type: "textarea", label: "What are you working on?" }] },
    { id: 2, title: "Mentorship Request", desc: "Students and early founders", btnText: "Request →", thanks: "Got it! I'll be in touch.", fields: [{ type: "text", label: "Your Name" }, { type: "email", label: "Email" }, { type: "textarea", label: "What would you like to discuss?" }] }
  ],
  newsletter: { title: "The Builder's Brief", desc: "Occasional essays on product, growth, and building in emerging markets." },
  contact: { heading: "Let's build something together.", desc: "I'm actively looking for PM, GTM, and growth roles.", footerDesc: "Founder turned PM candidate. Gettysburg College, Abraham Lincoln Scholar." }
};

// ═══════════════════════════════════════════
//  UTILITIES
// ═══════════════════════════════════════════
function nextId(arr) {
  return arr.length ? Math.max(...arr.map(x => x.id)) + 1 : 1;
}

function formatDate(d) {
  if (!d) return "";
  try { return new Date(d + "T12:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }); }
  catch { return d; }
}