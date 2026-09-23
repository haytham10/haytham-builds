/* Page copy. Every number and promise here must trace to an owning document:
   - Public numbers: brand/haytham-builds-content-engine/docs/linkedin-strategy.md ("Public claims").
     Retired numbers (120+ meetings, 50+ signed, 75%, 98%, AED 416K) must never return.
   - Offer, price, guarantee, conditions, bonuses: Acquisition and Clients offer docs
     (archive/legacy-outreach/docs/03-offer.md and docs/03-offer.md, 10 Sep 2026).
   - Stories and opinions: content/material-bank/bank.md (MB entries noted inline).
   Emails are drafted by the pipeline engine and checked and approved by Haytham.
   Never say they are "written by hand". Replies are read by hand (MB13).
   Voice: first person, plain, no em dashes, no "leverage / unlock / empower / journey". */

export const bookingUrl = "https://calendar.app.google/XCpJyd1jZ4tvqL3C9";
export const email = "haytham@gethaytham.com";
export const phoneHref = "tel:+19145065175";
export const phoneLabel = "+1 914 506 5175";
export const linkedInPersonal = "https://www.linkedin.com/in/haytham-mokhtari/";
export const linkedInCompany = "https://www.linkedin.com/company/haytham-builds";

export const nav = [
  ["How it works", "#process"],
  ["The offer", "#offer"],
  ["Guarantee", "#guarantee"],
  ["About", "#about"],
  ["FAQ", "#faq"],
] as const;

/* Hero animation phases. Illustration of the pilot, not a live campaign. */
export const routePhases = [
  { key: "research", label: "Research", copy: "200 to 300 leaders who fit your audience." },
  { key: "check", label: "Check", copy: "Anyone already in your CRM comes off the list." },
  { key: "send", label: "Send", copy: "Researched emails go out in your name." },
  { key: "reply", label: "Reply", copy: "Every reply read and worked by me." },
  { key: "book", label: "Book", copy: "Five qualified calls land on your calendar." },
] as const;

/* MB01, MB03, MB04, MB06, MB10 */
export const problems = [
  { art: "waves", title: "Referrals come in waves", copy: "Good work, no schedule." },
  { art: "crowd", title: "Directories make you a line item", copy: "One of thousands, compared on price." },
  { art: "inbox", title: "LinkedIn outreach stopped working", copy: "Automated messages filled every inbox." },
  { art: "gate", title: "HR and procurement block the way", copy: "Often new to buying coaching, with budget rules." },
  { art: "split", title: "Interest and budget live apart", copy: "People ask questions. Companies hold the money." },
] as const;

export const timeline = [
  {
    when: "Before day 1",
    title: "Set the audience, build the list",
    copy: "We agree the role, company type and country. I research 200 to 300 leaders and remove anyone in your CRM.",
  },
  {
    when: "Before day 1",
    title: "Set up the inboxes",
    copy: "Two new domains and three inboxes in your name, warmed and managed by me. Your main domain is never touched.",
  },
  {
    when: "Days 1 to 30",
    title: "Send, follow up, reply",
    copy: "Plain-text emails I have checked, with follow-ups. In one campaign follow-ups brought 6 of the 10 human replies.",
  },
  {
    when: "Every call",
    title: "A brief before you speak",
    copy: "Good replies become slots on your calendar, each with a prospect brief so you walk in prepared.",
  },
];

export const clientPart = [
  { title: "Reply within 24 hours", copy: "While the conversation is warm." },
  { title: "Keep real slots open", copy: "So a ready buyer can pick a time." },
  { title: "Keep the audience fixed", copy: "Changing it pauses the clock." },
];

export const included = [
  { title: "200 to 300 vetted prospects", copy: "Verified, and checked against your CRM." },
  { title: "A researched opening line each", copy: "From their own work, checked by me." },
  { title: "Two domains, three inboxes", copy: "Set up, warmed and managed for you." },
  { title: "30 days of sending", copy: "Plain text, tracking off, follow-ups included." },
  { title: "Reply work to the calendar", copy: "Every reply read and moved toward a call." },
  { title: "A brief before every call", copy: "Fit, context, questions and a score." },
];

export const bonuses = [
  "The domains and inboxes are yours to keep",
  "A reply playbook for the first five minutes",
  "Your existing contacts removed before sending",
];

/* MB12, MB13, MB17, MB19 */
export const comparison = [
  {
    row: "Who gets it",
    usual: "Thousands of names from a database export",
    mine: "200 to 300 leaders checked against your audience and your CRM",
  },
  {
    row: "What it looks like",
    usual: "Designed templates with tracking pixels",
    mine: "Plain text, tracking off, a researched first line",
  },
  {
    row: "Who checks it",
    usual: "Automated and sent in bulk",
    mine: "I read and approve every email before it goes out",
  },
  {
    row: "How replies are counted",
    usual: "Whatever the dashboard says",
    mine: "Read by me. On one campaign the tool said 12, the real count was 15",
  },
  {
    row: "What gets reported",
    usual: "Meetings booked",
    mine: "Researched, booked, attended and bought, kept separate",
  },
];

export const fitYes = [
  "You coach executives, leaders or teams and sell to organisations.",
  "You want corporate clients in the UAE or the wider Gulf, wherever you are based.",
  "One corporate client is worth a lot to your business.",
  "You can answer a warm reply within a day.",
];

export const fitNo = [
  "You want clients or revenue guaranteed. I guarantee calls. The selling is yours.",
  "Your audience changes every week.",
  "You want a big list and a blast to everyone on it.",
];

export const faqs = [
  {
    q: "Is this a lead-generation agency?",
    a: "No. It is one person doing the work for six clients at most. I do not sell leads. I research, send and work the replies until qualified calls happen on your calendar.",
  },
  {
    q: "Do I need to be based in the UAE?",
    a: "No. The pilot is for coaches who want UAE and Gulf corporate clients, wherever they live. What matters is who you want to sell to.",
  },
  {
    q: "Whose name goes on the emails?",
    a: "Yours. They go out from two domains and three inboxes I set up for you, separate from your main domain, so your own email reputation is never at risk. At the end, they are yours.",
  },
  {
    q: "Do you use AI?",
    a: "Yes, for research and first drafts. Nothing sends until I have read and approved it, and every reply is read by me.",
  },
  {
    q: "What counts as a qualified call?",
    a: "A conversation that actually happens with someone who fits the audience we agreed. Cancellations and no-shows are tracked but do not count toward the five.",
  },
  {
    q: "What if I get fewer than five calls?",
    a: "One to four after 30 days: I keep sending at no extra cost until the fifth happens. Zero: your $1,500 comes back, and you keep the research, the opening lines and the inboxes.",
  },
  {
    q: "How and when do I pay?",
    a: "$1,500, paid in full before setup starts. Pilots begin on the 1st or the 15th, and we pick the date together on the call.",
  },
  {
    q: "Why only six clients at a time?",
    a: "Because I do the work myself. Six is how many pilots I can run properly, with every email checked and every reply read by me.",
  },
  {
    q: "What happens after the 30 days?",
    a: "We look at the four counts together: researched, booked, attended, bought. If it is working, we talk about keeping it going. If you stop, you keep everything I built.",
  },
];
