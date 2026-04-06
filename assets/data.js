// ═══════════════════════════════════════════
//  SHARED DATA — used by both index.html & admin/index.html
//  In production, replace localStorage with a real backend (Supabase, Firebase, etc.)
// ═══════════════════════════════════════════

const DEFAULT_DATA = {
    profile: {
      name: "Ahsan Foez Nahian",
      label: "Founder · PM · EdTtech · Growth",
      tagline: "Building products that reach the next billion. Founder turned PM candidate.",
      tags: ["EdTech · Growth", "Product Strategy", "Emerging Markets", "Bangladesh → USA"],
      statNum: "1,000,000+",
      statLabel: "students reached through products I built.",
      bio: `To founders, PMs, and the curious. I'm <strong>Ahsan Foez Nahian</strong> — a tech-enabled entrepreneur who has built and scaled real products serving <strong>1M+ users</strong>. I founded <strong>Privatune</strong> (100K+ students/yr), led product at <strong>Apar's Classroom</strong> (800K+), and grew a 1M+ community — before most PM candidates have shipped their first feature.<br><br>Now at <em>Gettysburg College</em> on a full-ride Abraham Lincoln Scholarship, studying Business, Economics & Data Science — targeting <strong>PM, GTM, and growth roles.</strong>`,
      about: "This site is for hiring managers, founders, and investors. I built products in Bangladesh that most PMs only reach at Series B.",
      linkedin: "https://linkedin.com/in/ahsannahian",
      email: "ahsan@gettysburg.edu",
      resume: "#",
      photo: null,
    },
  
    blogs: [
      { id: 1, title: "Why Western GTM Playbooks Fail in Emerging Markets", date: "2026-03-15", read: "6 min read", excerpt: "CAC models built for credit-card economies collapse in mobile-money markets. Here's what actually works at scale.", content: "Full content here...", img: null },
      { id: 2, title: "The Week-2 Cliff: The Retention Metric Most EdTech PMs Ignore", date: "2026-02-20", read: "4 min read", excerpt: "Students who return after their first-week cliff have 4x lifetime engagement.", content: "Full content here...", img: null },
      { id: 3, title: "Referral Loops Only Work When the Reward Is the Product", date: "2026-01-10", read: "5 min read", excerpt: "At Privatune, discount-based referrals had 12% conversion. When we made the reward the product itself, it hit 34%.", content: "Full content here...", img: null },
    ],
  
    cases: [
      { id: 1, company: "Apar's Classroom · 800K+", title: "Growing organic reach 35% with ML-driven SEO", problem: "Platform growth had plateaued. Paid acquisition was expensive.", decision: "Built ML-assisted SEO architecture targeting exam prep keywords.", measured: "Organic traffic, new user acquisition rate, CAC vs paid.", result: "↑ 35% organic reach · Reduced CAC significantly" },
      { id: 2, company: "Privatune · EdTech", title: "Scaling 0 → 100K students/yr without a paid marketing budget", problem: "New platform against established players, near-zero budget.", decision: "Referral-first growth loop: complete session → invite peers.", measured: "Weekly active students, referral conversion, tutor retention.", result: "→ 100,000+ students/year · Organic growth engine" },
      { id: 3, company: "Connecting Goal", title: "Bangladesh's first digital group study platform", problem: "Students lacked peer collaboration tools. Accountability was low.", decision: "Group study rooms with goals, tracking, and accountability.", measured: "Completion rate, return usage, academic performance surveys.", result: "↑ 40% academic performance · 50,000+ students" },
      { id: 4, company: "VisaCracked", title: "Solving the last mile — the visa interview", problem: "Qualified students failed US visa interviews due to lack of prep.", decision: "Mock interview simulations and community-sourced tips.", measured: "Interview success rate vs control, platform engagement.", result: "→ Democratizing global access to education" },
    ],
  
    thinks: [
      { id: 1, tag: "GTM · Emerging Markets", title: "Why Western GTM playbooks fail in Bangladesh", body: "CAC models built for credit-card markets collapse in mobile-money economies. The unlock is community-led distribution." },
      { id: 2, tag: "Product · Retention", title: "The retention metric most EdTech PMs ignore: the week-2 cliff", body: "Most EdTech platforms celebrate sign-ups. The real signal is day-8 return rate — 4x lifetime engagement." },
      { id: 3, tag: "Growth · Distribution", title: "Referral loops only work when the reward is the product", body: "At Privatune, discount referrals: 12% conversion. Product-as-reward: 34%. People share things they're proud of." },
    ],
  
    ventures: [
      { id: 1, name: "Privatune", logo: null, role: "Founder & CEO", url: "https://privatune.com", desc: "Bangladesh's fastest-growing edtech platform. Built scalable learning systems and a referral-first growth engine.", stats: ["100,000+ students/yr", "Organic growth"] },
      { id: 2, name: "VisaCracked", logo: null, role: "Founder", url: "#", desc: "Platform helping students prepare for US visa interviews. Solving the last-mile access barrier in education.", stats: ["Global access", "EdTech"] },
      { id: 3, name: "Ezionic", logo: null, role: "Founder & CEO", url: "#", desc: "Social media management & web dev agency. 50+ school websites with international clients.", stats: ["50+ websites", "International revenue"] },
      { id: 4, name: "Connecting Goal", logo: null, role: "Co-Founder", url: "#", desc: "Bangladesh's first digital group study platform. Peer accountability drove measurable academic gains.", stats: ["50,000+ students", "40% performance lift"] },
    ],
  
    experience: [
      { id: 1, title: "Product Manager — Apar's Classroom", logo: null, logoText: "AC", url: "#", meta: "800,000+ students · Bangladesh's largest EdTech", desc: "Built and optimized product systems. Drove 35% organic reach growth using ML-powered SEO.", badge: "Key Role" },
      { id: 2, title: "Marketing Team Lead — Apar's Classroom", logo: null, logoText: "AC", url: "#", meta: "1M+ student community", desc: "Led growth campaigns across Bangladesh's largest student network.", badge: "" },
      { id: 3, title: "Intern — HNVI Management, The City Bank Ltd", logo: null, logoText: "CB", url: "#", meta: "Financial Analysis · Market Research", desc: "Financial analysis and market research. Improved portfolio returns by 25%.", badge: "" },
    ],
  
    numbers: [
      { id: 1, val: "1M+", label: "Students reached across all platforms" },
      { id: 2, val: "100K+", label: "Privatune annual student base" },
      { id: 3, val: "35%", label: "Organic reach growth via ML-SEO" },
      { id: 4, val: "50K+", label: "Students on Connecting Goal" },
      { id: 5, val: "$75K/yr", label: "Abraham Lincoln Scholarship value" },
      { id: 6, val: "50+", label: "School websites via Ezionic" },
    ],
  
    education: [
      { id: 1, school: "Gettysburg College", logo: null, logoText: "GC", deg: "Business, Organizations & Management · Economics · Minor in Data Science", badge: "🏆 Abraham Lincoln Scholar — Full Ride (~$75K/yr)", certs: ["Harvard — CS50", "UC San Diego — DSA", "Stanford — Machine Learning"] },
    ],
  
    forms: [
      { id: 1, title: "Work With Me", desc: "PM, GTM, or growth opportunities", btnText: "Send →", thanks: "Thanks! I'll get back to you soon.", fields: [{ type: "text", label: "Your Name" }, { type: "email", label: "Email" }, { type: "text", label: "Company / Role" }, { type: "textarea", label: "What are you working on?" }] },
      { id: 2, title: "Mentorship Request", desc: "Students and early founders", btnText: "Request →", thanks: "Got it! I'll be in touch.", fields: [{ type: "text", label: "Your Name" }, { type: "email", label: "Email" }, { type: "textarea", label: "What would you like to discuss?" }] },
    ],
  
    responses: [],
    subscribers: [],
  
    newsletter: {
      title: "The Builder's Brief",
      desc: "Occasional essays on product, growth, and building in emerging markets. I write when I have something worth saying.",
    },
  
    contact: {
      heading: "Let's build something together.",
      desc: "I'm actively looking for PM, GTM, and growth roles. If you're building something ambitious, I want to be on your team.",
      footerDesc: "Founder turned PM candidate. Education, growth, and emerging markets. Gettysburg College, Abraham Lincoln Scholar.",
    },
  };
  
  // ── Storage helpers ──────────────────────────────
  function loadData() {
    try {
      const saved = localStorage.getItem("portfolio_data");
      return saved ? JSON.parse(saved) : JSON.parse(JSON.stringify(DEFAULT_DATA));
    } catch {
      return JSON.parse(JSON.stringify(DEFAULT_DATA));
    }
  }
  
  function saveData(data) {
    try {
      localStorage.setItem("portfolio_data", JSON.stringify(data));
      return true;
    } catch {
      return false;
    }
  }
  
  function resetData() {
    localStorage.removeItem("portfolio_data");
    localStorage.removeItem("admin_session");
  }
  
  // ── Auth helpers ─────────────────────────────────
  // ⚠️  CHANGE THESE before deploying!
  const ADMIN_USERNAME = "ahsan";         // ← change this!
  const ADMIN_PASSWORD = "changeme123";   // ← change this!
  const SESSION_KEY    = "admin_session";
  const SESSION_EXPIRY = 2 * 60 * 60 * 1000; // 2 hours in ms
  
  function login(username, password) {
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      const session = { ts: Date.now() };
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
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
    } catch {
      return false;
    }
  }
  
  function logout() {
    sessionStorage.removeItem(SESSION_KEY);
  }
  
  // ── Utility ──────────────────────────────────────
  function nextId(arr) {
    return arr.length ? Math.max(...arr.map(x => x.id)) + 1 : 1;
  }
  
  function formatDate(d) {
    if (!d) return "";
    try { return new Date(d + "T12:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }); }
    catch { return d; }
  }