/* =========================
   Data (edit here)
   ========================= */

const EVENT_START_ISO = "2026-03-12T11:30:00-04:00";
const EVENT_END_ISO = "2026-03-12T16:10:00-04:00";
const EVENT_TITLE = "AI4L Workshop — Robust ML Systems";
const EVENT_LOCATION = "Hybrid (Toronto / Vancouver / Online)";
const EVENT_DESCRIPTION =
  "An Empirical Framework for Robust Machine Learning Systems and its Application in AI4L.\n" +
  "Agenda includes keynotes, technical sessions, and networking.\n";

const MEETING_URL = "TBA"; // Replace with the actual online meeting URL when available.

const AGENDA = [
  {
    type: "NETWORK",
    startISO: "2026-03-12T11:30:00-04:00",
    title: "Sign-in, Mingling time & Coffee",
    speakers: [],
    mode: "In-person / Hybrid",
    details: "Arrive early, grab coffee, and mingle with other attendees."
  },
  {
    type: "BREAK",
    startISO: "2026-03-12T12:00:00-04:00",
    title: "Opening Remarks",
    speakers: ["Dr. Pulei Xiong (NRC)", "Prof. Ke Wang (SFU)", "Assistant Professor Liang Xue (York U)"],
    mode: "Hybrid",
    details: "Welcome and opening overview of the project and workshop goals."
  },
  {
    type: "KEYNOTE",
    startISO: "2026-03-12T12:15:00-04:00",
    title: "Keynote 1 — The Importance of Trustworthy AI in Heavily Regulated Domains",
    speakers: ["Dr. Lovedeep Gondara (Head of AI R&D, Vanguard)"],
    mode: "In-person",
    details:
      "This talk explores the essential requirements for trustworthy AI in heavily regulated domains such as healthcare " +
      "and finance, where high-stakes decisions demand transparency, robustness, fairness, and rigorous validation. " +
      "Drawing parallels across sectors, we demonstrate that trustworthiness is a practical necessity for overcoming " +
      "regulatory barriers and earning stakeholder trust in systems with material consequences for individuals."
  },
  {
    type: "KEYNOTE",
    startISO: "2026-03-12T12:45:00-04:00",
    title: "Keynote 2 — Modern Privacy-Preserving Machine Learning: Principled Design and Audit",
    speakers: ["Dr. Zihang Xiang (Postdoctoral Researcher, UCLA)"],
    mode: "Remote",
    details:
      "This talk presents a research program for designing differentially private algorithms for complex machine learning systems " +
      "and developing principled auditing tools to empirically validate privacy claims. Together, these efforts contribute to " +
      "robust privacy-enhancing technologies that balance data utility with rigorous privacy protection."
  },
  {
    type: "BREAK",
    startISO: "2026-03-12T13:15:00-04:00",
    title: "Lunch Break",
    speakers: [],
    mode: "Hybrid",
    details: "York University / Brunch at SFU during lunch break."
  },
  {
    type: "TECH",
    startISO: "2026-03-12T13:45:00-04:00",
    title: "Technical Session Part I",
    speakers: ["Amirhossein Ansari", "Zhuoxin Zhan", "Dr. Dilli Prasad Sharma"],
    mode: "Hybrid",
    details:
      "• Out-of-Distribution Detection for Trustworthy Machine Learning — Amirhossein Ansari(Doctoral Candidate, SFU)\n" +
      "• Adversarial Robustness for Trustworthy Machine Learning — Zhuoxin Zhan(Doctoral Candidate, SFU)\n" +
      "• Enhancing Adversarial Robust IoT Intrusion Detection via SHAP Attribution Fingerprinting — Dr. Dilli Prasad Sharma(Postdoctoral Researcher, York University)"
  },
  {
    type: "BREAK",
    startISO: "2026-03-12T14:45:00-04:00",
    title: "Break",
    speakers: [],
    mode: "Hybrid",
    details: "Short break."
  },
  {
    type: "TECH",
    startISO: "2026-03-12T15:00:00-04:00",
    title: "Technical Session Part II",
    speakers: ["Assistant Professor Liang Xue", "Sonal Allana"],
    mode: "Hybrid",
    details:
      "• A Generic Framework for Privacy Risk Assessment of Machine Learning Models — Dr. Liang Xue(Assistant Professor, York University)\n" +
      "• Privacy Enhancing Technologies in Explainable AI — Sonal Allana(Doctoral Candidate, UoG)\n"
  },
  {
    type: "BREAK",
    startISO: "2026-03-12T15:40:00-04:00",
    title: "Online Streaming Ends",
    speakers: [],
    mode: "Online",
    details: "Thank you for joining us online! The remainder of the workshop will be in-person only."
  },
  {
    type: "NETWORK",
    startISO: "2026-03-12T15:40:00-04:00",
    title: "Poster Session / Networking",
    speakers: [],
    mode: "In-person",
    details: "Showcasing project publications and research contributions."
  },
  {
    type: "BREAK",
    startISO: "2026-03-12T16:10:00-04:00",
    title: "Closure",
    speakers: [],
    mode: "Hybrid",
    details: "Wrap-up and next steps."
  }
];

const SPEAKERS = [
  {
    name: "Dr. Lovedeep Gondara",
    role: "Head of AI Research & Development at Vanguard (Toronto)",
    org: "Vanguard (Toronto)",
    photo: "assets/people/lovedeep-gondara.jpg",
    links: [{ label: "Bio", url: "https://www.linkedin.com/in/lovedeepg/" }],
    talk: "Keynote: The Importance of Trustworthy AI in Heavily Regulated Domains",
    abstract:
      "The deployment of AI systems in heavily regulated domains such as healthcare and finance presents unique challenges that extend beyond " +
      "technical performance metrics to encompass fundamental questions of trust, accountability, and societal impact. Both sectors share " +
      "critical characteristics: they involve high-stakes decisions with material consequences for individuals, operate under stringent " +
      "regulatory oversight, and are fundamentally client-facing, requiring that end-users, whether patients or investors, place significant " +
      "trust in system outputs that may influence their health outcomes or financial wellbeing.\n" +
      "This talk examines the core pillars of trustworthy AI in these contexts, including transparency and explainability of model decisions, " +
      "robustness to distribution shift and adversarial inputs, fairness across demographic groups, rigorous validation against domain-specific " +
      "standards, and mechanisms for human oversight and intervention.\n" +
      "We argue that trustworthiness is not merely an ethical desideratum but a practical necessity: systems that fail to earn stakeholder trust " +
      "face regulatory barriers, adoption resistance, and reputational risk. By drawing parallels between both heavily regulated domains, we " +
      "identify transferable lessons for building AI systems that meet the elevated standards these domains demand.",
    bio: "Dr. Lovedeep Gondara is the Head of AI Research & Development at Vanguard, Toronto, where he leads a team of AI engineers and scientists working on generative AI, natural language processing, and responsible AI. He holds an adjunct professor appointment at the University of British Columbia's School of Population and Public Health. Previously, he served as Research Scientist Team Lead at BC Cancer Registry, where he developed and deployed NLP solutions for various clinical applications. Lovedeep received his Ph.D. in Computer Science from Simon Fraser University and has authored over 90 publications spanning machine learning, statistics, and healthcare."
  },
  {
    name: "Dr. Zihang Xiang",
    role: "Postdoctoral Researcher （Department of ECE, UCLA）",
    org: "UCLA",
    photo: "assets/people/zihang-xiang.jpg",
    links: [{ label: "Bio", url: "https://www.linkedin.com/in/zihang-xiang/" }],
    talk: "Keynote: Modern Privacy-Preserving Machine Learning: Principled Design and Audit",
    abstract:
      "Modern machine learning relies on vast amounts of sensitive data, creating a fundamental tension between utility and privacy. " +
      "While differential privacy (DP) provides a rigorous mathematical framework for protecting individuals, significant challenges remain. " +
      "In this talk, I present a research program built on two complementary pillars: designing differentially private algorithms for " +
      "complex machine learning systems, and developing principled auditing tools to empirically validate privacy claims.\n" +
      "Keywords: Private machine learning, data privacy",
    bio: "Dr. Zihang Xiang is a Postdoctoral Researcher in the Department of Electrical and Computer Engineering at UCLA, working with Prof. Yuan Tian. He received his Ph.D. in Computer Science from KAUST, advised by Prof. Di Wang.\nHis research focuses on privacy-preserving machine learning, with an emphasis on developing rigorous and falsifiable privacy guarantees for modern ML systems. In particular, he studies differential privacy and design principled learning algorithms and builds tools to audit and verify privacy claims. His work spans graph neural networks, federated learning, large-scale model training, and privacy auditing.\n\nHis research has been published in leading venues including IEEE S&P, USENIX Security, NDSS, SIGMOD, NeurIPS, and Science Advances. His broader goal is to help reconcile the tension between powerful data-driven models and strong individual privacy guarantees."
  },
  {
    name: "Amirhossein Ansari",
    role: "PhD Candidate, Simon Fraser University",
    talk: "Out-of-Distribution Detection for Trustworthy Machine Learning",
    abstract:
      "Out-of-distribution (OOD) detection is a central challenge in trustworthy machine learning. Models deployed in real-world settings " +
      "inevitably encounter inputs that differ from the in-distribution data seen during training, including samples from unseen classes, " +
      "sensor failures, or adversarially crafted inputs. For such OOD samples, model predictions are often unreliable yet highly overconfident, " +
      "posing serious safety and reliability risks. In this talk, I provide an overview of the OOD detection problem, review recent advances " +
      "in computer vision and tabular data, and highlight their key limitations. I then briefly introduce our recent approaches aimed at " +
      "addressing these challenges.\n" +
      "Keywords: Out-of-Distribution Detection, Trustworthy Machine Learning, Classification"
  },
  {
    name: "Sonal Allana",
    role: "PhD Candidate, University of Guelph",
    talk: "Privacy Enhancing Technologies in Explainable AI",
    abstract: "Explainability is a pillar of Trustworthy AI and crucial for transparency of black-box decisionmaking systems. However, recent research has shown that explainability in the form of Explainable AI (XAI) methods can expose the privacy of the underlying data and the confidentiality of models. To address this concern, in this workshop we investigate the use of Privacy Enhancing Technologies (PETs) as a defense mechanism against a privacy attack that exploits explanations generated by feature-based XAI methods. We present the results of empirical evaluation of three types of PETs, namely, synthetic training data, differentially private training and noise addition, across two categories of feature-based XAI. Our findings reveal varying levels of effectiveness among the mitigation strategies, as well as trade-offs between privacy, utility, and system performance. Based on our evaluation, we propose strategies for effectively integrating PETs into XAI to maximize privacy protection and minimize the risk of sensitive information leakage."
  },
  {
    name: "Zhuoxin Zhan",
    role: "PhD Candidate, Simon Fraser University",
    talk: "Adversarial Robustness for Trustworthy Machine Learning",
    abstract:
      "Adversarial robustness is a core challenge in trustworthy machine learning. Modern machine learning (ML) models, despite achieving strong " +
      "performance on benchmark datasets, remain highly vulnerable to carefully crafted adversarial inputs that induce incorrect and harmful " +
      "predictions. In real-world deployments, such vulnerabilities pose serious safety and reliability risks, particularly in security-critical " +
      "and high-stakes applications.\n" +
      "In this talk, I provide an overview of adversarial attacks and defenses across different ML models. I first review adversarial examples " +
      "for convolutional neural networks in the vision domain, highlighting representative attack methods, robustness evaluation practices, " +
      "and the limitations of existing defenses. I then shift to large language models, discussing recent jailbreak attacks that exploit " +
      "weaknesses in safety alignment to elicit harmful model behaviors. Through these two domains, I emphasize common robustness challenges, " +
      "emerging attack patterns, and open problems that hinder the deployment of truly trustworthy systems. Finally, I briefly introduce our " +
      "recent research efforts aimed at improving adversarial robustness and mitigating these vulnerabilities.\n" +
      "Keywords: Adversarial Robustness, Trustworthy Machine Learning, Adversarial Examples, Jailbreak Attacks"
  },
  {
    name: "Dr. Liang Xue",
    role: "Assistant Professor, York University",
    talk: "A Generic Framework for Privacy Risk Assessment of Machine Learning Models",
    abstract:
      "Privacy attacks on machine learning (ML) models pose significant risks to individuals whose personal data is used for training or querying these models. " +
      "Although concerns about the potential exposure of sensitive information through ML models continue to grow, existing safeguard mechanisms " +
      "primarily focus on security threats, often neglecting privacy risks. In this paper, we examine existing tools to assess privacy risks of ML models " +
      "and provide an overview of various privacy attacks and defense strategies. Given the lack of a comprehensive framework for assessing privacy " +
      "vulnerabilities, we propose a generic framework for evaluating the privacy of ML systems and establish a set of tailored evaluation metrics " +
      "for different types of privacy attacks. In addition, we develop a dedicated testbed to implement our framework and present experimental " +
      "results that demonstrate the impact of various privacy attacks on different ML models.\n" +
      "Keywords: Privacy risk evaluation, attacks and defenses, and machine learning models"
  },
  {
    name: "Dr. Dilli Prasad Sharma",
    role: "Postdoctoral Researcher, York University",
    talk: "Enhancing Adversarial Robust IoT Intrusion Detection via SHAP Attribution Fingerprinting",
    abstract:
      "The rapid proliferation of Internet of Things (IoT) devices has transformed numerous industries by enabling seamless connectivity and " +
      "data-driven automation. However, this expansion has also exposed IoT networks to increasingly sophisticated security threats, including " +
      "adversarial attacks targeting AI/ML-based NIDS to deliberately evade detection, induce misclassification, and systematically undermine " +
      "the reliability and integrity of security defenses. To address these challenges, we propose a novel adversarial detection model that " +
      "enhances the robustness of IoT IDS against adversarial attacks through SHapley Additive exPlanations (SHAP)-based fingerprinting. " +
      "Using SHAP’s DeepExplainer, we extract attribution fingerprints from network traffic features, enabling the IDS to reliably distinguish " +
      "between clean and adversarially perturbed inputs. By capturing subtle attribution patterns, the model becomes more resilient to evasion " +
      "attempts and adversarial manipulations. We evaluated the model on a standard IoT benchmark dataset, where it significantly outperformed " +
      "a state-of-the-art method in detecting adversarial attacks. In addition to enhanced robustness, this approach improves model " +
      "transparency and interpretability, thereby increasing trust in the IDS through explainable AI.\n" +
      "Keywords: Intrusion Detection; Robustness; Trustworthiness; Adversarial Detection; Attribution Fingerprinting; Explainable AI; " +
      "Interpretability; Adversarial Machine Learning"
  }
];

const PEOPLE = [
  {
    group: "ORGANIZER",
    name: "Dr. Pulei Xiong",
    org: "National Research Council Canada (NRC); Adjunct Prof. at SFU, UWaterloo, UNB",
    role: "Organizer",
    photo: "assets/people/pulei-xiong.jpg",
    links: [{ label: "Bio", url: "https://www.linkedin.com/in/pulei-xiong-02b605b/" }],
    bio: "Dr. Pulei Xiong is a Research Officer at the National Research Council Canada (NRC) and an Adjunct Professor at Simon Fraser University, the University of Waterloo, and the University of New Brunswick. His research focuses on AI security and safety, with an emphasis on robust and trustworthy machine learning methods, systematic AI capability evaluation, and secure-by-design AI system for safety-critical applications such as autonomous vehicles and robotic systems."
  },

  {
    group: "ORGANIZER",
    name: "Prof. Xiaodong Lin (In Memoriam)",
    org: "University of Guelph(UoG)",
    role: "Organizer",
    photo: "assets/people/xiaodong-lin.jpg",
    links: [{ label: "Bio", url: "https://www.linkedin.com/in/xiaodong-lin-634849/" }],
    bio: "Dr. Xiaodong Lin received the PhD degree in Information Engineering from Beijing University of Posts and Telecommunications, China, and the PhD degree (with Outstanding Achievement in Graduate Studies Award) in Electrical and Computer Engineering from the University of Waterloo, Canada. He is currently a professor in the School of Computer Science at the University of Guelph, Canada. His research interests include computer and network security, privacy protection, applied cryptography, computer forensics, and software security. He is a Fellow of the IEEE."
  },

  {
    group: "ORGANIZER",
    name: "Prof. Ke Wang",
    org: "Simon Fraser University (SFU)",
    role: "Organizer",
    photo: "assets/people/ke-wang.jpg",
    links: [
      { label: "SFU Profile", url: "https://www.sfu.ca/fas/computing/people/faculty/faculty-members/wangk.html" },
      { label: "Homepage", url: "https://www.cs.sfu.ca/~wangk/" }
    ],
    bio: "Ke Wang received Ph.D from Georgia Institute of Technology. He is currently a professor at School of Computing Science, Simon Fraser University. Ke Wang's research interests include database technology, data mining and knowledge discovery. He was an associate editor of the ACM TKDD journal, an associate editor of the IEEE TKDE journal, an editorial board member for Journal of Data Mining and Knowledge Discovery. He has been the general co-chairs for the SIAM Conference on Data Mining 2015 and 2016, the PC co-chair for SIAM Conference on Data Mining 2008, and the PC co-chair for IEEE International Conference on Intelligence and Security Informatics (ISI) 2010."
  },

  {
    group: "ORGANIZER",
    name: "Assistant Professor Liang Xue",
    org: "York University",
    role: "Organizer / Presenter",
    photo: "assets/people/liang-xue.jpg",
    links: [{ label: "Bio", url: "https://profiles.laps.yorku.ca/profiles/lxue03/" }],
    bio: "Dr. Liang Xue is currently an assistant professor at the School of Information Technology, York University. She received her Ph.D. degree in Electrical and Computer Engineering from the University of Waterloo, Canada, in 2022. She was a Postdoctoral Research Fellow at the School of Computer Science, University of Guelph. Her research interests include applied cryptography，security and privacy preservation in the Internet of Things, cloud computing, machine learning, and blockchain-based applications."
  },

  {
    group: "ORGANIZER",
    name: "Dr. Dilli Prasad Sharma",
    org: "York University",
    role: "Organizer",
    photo: "assets/people/dilli-prasad-sharma.png",
    links: [{ label: "Bio", url: "https://www.linkedin.com/in/dilli-sharma-phd-a667243b/" }],
    bio: "Dr. Dilli Prasad Sharma received the Ph.D. degree in Computer Science from the University of Canterbury, New Zealand. He is currently a Postdoctoral Researcher at York University, Toronto, and has previously held similar positions at the University of Toronto and the University of New Brunswick, Canada. Dr. Sharma’s research focuses on cybersecurity and artificial intelligence. His research interests include privacy-preserving technologies, explainable  AI, model robustness, security metrics, IoT security, moving target defense, adversarial machine learning, and trustworthy and responsible AI."
  },
  {
    group: "ORGANIZER",
    name: "Zhuoxin Zhan",
    org: "Simon Fraser University (SFU)",
    role: "Organizer",
    photo: "assets/people/zhuoxin-zhan.jpg",
    links: [{ label: "Bio", url: "https://www.linkedin.com/in/zhuoxinzhan/" }],
    bio: "Zhuoxin Zhan is a PhD student researching trustworthy AI, focusing on the foundations of adversarial robustness, spanning vision adversarial examples and LLM prompt injection, toward reliable evaluation and mitigation."
  },
  {
    group: "ORGANIZER",
    name: "Amirhossein Ansari",
    org: "Simon Fraser University (SFU)",
    role: "Organizer",
    photo: "assets/people/amirhossein-ansari.jpg",
    links: [{ label: "Bio", url: "https://www.linkedin.com/in/ah-ansari/" }],
    bio: "Amirhossein Ansari is a PhD student in the School of Computing Science at Simon Fraser University (SFU), supervised by Prof. Ke Wang. His research focuses on Trustworthy Artificial Intelligence, with a particular emphasis on Out-of-Distribution (OOD) detection and robustness in machine learning models. His work aims to develop reliable models that can recognize and appropriately handle inputs that differ from their training data, improving safety and reliability in real-world deployments."
  },
  {
    group: "ORGANIZER",
    name: "Sonal Allana",
    org: "University of Guelph",
    role: "Organizer / Presenter",
    photo: "assets/people/sonal-allana.jpg",
    links: [
      { label: "Google Scholar", url: "https://scholar.google.com/citations?hl=en&user=XRSx8pcAAAAJ" }
    ],
    bio: "Sonal Allana is a PhD Candidate at the Data Management and Privacy Governance Lab at the University of Guelph. She is strongly interested in the ethical aspects of technology and its impact on society. Her current research area is at the intersection of privacy and explainability in artificial intelligence systems. She has previously worked in creating a safety framework for children's IoT in collaboration with industry. Sonal is dedicated to student-centred learning and has extensive teaching experience in undergraduate and graduate courses in computer science and engineering. She has also worked in the industry as a software engineer and project lead, managing cross-functional teams in the successful delivery of high-value solutions."
  },
  {
    group: "TEAM",
    name: "Haichuan Xue",
    org: "York University",
    role: "Team Member",
    photo: "assets/people/haichuan-xue.jpg",
    links: [],
    bio: "Hi I'm Haichuan Xue. I'm honored to participate in this research workshop as a student under Dr. Liang Xue, and to contribute as an assistant in any way I can. This workshop has greatly expanded my understanding towards privacy-preserving technologies and has been a truly valuable learning experience as I am currently pursuing a Master of Arts in Information Systems & Technology (MASIT) at York University. My research interests include privacy protection and AI security."
  },
  {
    group: "TEAM",
    name: "Nima Forouzi",
    org: "Simon Fraser University",
    role: "Team Member",
    photo: "assets/people/Nima.jpg",
    links: [],
    bio: "Nima Forouzi is a PhD student in Computing Science at Simon Fraser University. His research focuses on artificial intelligence and machine learning, with interests in developing practical algorithms and data-driven approaches to solve complex problems. His work aims to advance AI methodologies and real-world applications, while contributing to academic research, publications, and collaborative projects within the broader computing science community."
  },
  {
    group: "TEAM",
    name: "Xiaowei Sun",
    org: "York University",
    role: "Team Member",
    photo: "assets/people/xiaowei-sun.png",
    links: [],
    bio: "Xiaowei Sun is a Master of Arts student in Information Systems & Technology (MAIST) at York University, Canada. His research interests include differential privacy, explainable artificial intelligence, and trustworthy machine learning. His current work focuses on privacy and robustness evaluation of machine learning systems, with particular emphasis on the design and analysis of privacy attacks and defenses, as well as testbed-driven frameworks for systematically assessing privacy–utility–explainability trade-offs in practical deployment settings."
  },
  {
    group: "TEAM",
    name: "Ehsan Hoseinzade",
    org: "Simon Fraser University",
    role: "Team Member",
    photo: "assets/people/Ehsan.png",
    links: [],
    bio: "Ehsan is a PhD candidate in Computer Science at Simon Fraser University. His research interests focus on the application of Large Language Models (LLMs) and Graph Neural Networks (GNNs) to tabular data. He also works on sequence modeling architectures, including Transformers and Mamba, as well as deep learning applications for financial time-series prediction."
  }
];

const BINGO_PROMPTS = [
  "Works on privacy threats",
  "Works on adversarial ML",
  "Has deployed ML in production",
  "Uses OOD detection",
  "Has done threat modeling",
  "Works on explainable AI (XAI)",
  "Has read a new AI regulation",
  "Works in healthcare or finance",
  "Has done red teaming",
  "Builds ML evaluation pipelines",
  "Has an open-source ML project",
  "Has worked with SHAP",
  "Has worked with IoT security",
  "Interested in standards",
  "Uses ML monitoring tools",
  "Teaches ML / security",
  "New to robust ML",
  "Has written an ML paper",
  "Has organized a workshop",
  "Loves case studies",
  "Interested in procurement checks",
  "Builds datasets",
  "Works on fairness",
  "Works on model security",
  "Wants to collaborate"
];

/* =========================
   Helpers (lightweight)
   ========================= */

const ET_TZ = "America/Toronto";
const PT_TZ = "America/Vancouver";

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function fmtTime(date, timeZone) {
  try {
    return new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone
    }).format(date);
  } catch {
    // Fallback: browser local time, still 24h
    return new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    }).format(date);
  }
}

function fmtRangeBoth(startISO, endISO) {
  const start = new Date(startISO);
  const end = new Date(endISO);

  const sameMoment = start.getTime() === end.getTime();

  const startET = fmtTime(start, ET_TZ);
  const endET = fmtTime(end, ET_TZ);
  const startPT = fmtTime(start, PT_TZ);
  const endPT = fmtTime(end, PT_TZ);

  const et = sameMoment ? `${startET} ET` : `${startET}–${endET} ET`;
  const pt = sameMoment ? `${startPT} PT` : `${startPT}–${endPT} PT`;
  return `${et} / ${pt}`;
}

function fmtRangeBothLines(startISO, endISO) {
  const start = new Date(startISO);
  const end = new Date(endISO);

  const sameMoment = start.getTime() === end.getTime();

  const startET = fmtTime(start, ET_TZ);
  const endET = fmtTime(end, ET_TZ);
  const startPT = fmtTime(start, PT_TZ);
  const endPT = fmtTime(end, PT_TZ);

  const et = sameMoment ? `${startET} ET` : `${startET}–${endET} ET`;
  const pt = sameMoment ? `${startPT} PT` : `${startPT}–${endPT} PT`;
  return `<span class="time-line">${et}</span><span class="time-line time-line--secondary">${pt}</span>`;
}


function normalize(s) {
  return String(s || "").toLowerCase();
}

function includesAny(haystack, needles) {
  const h = normalize(haystack);
  return needles.some((n) => h.includes(normalize(n)));
}

function copyToClipboard(text) {
  const t = String(text || "");
  if (!t) return Promise.reject(new Error("Nothing to copy"));

  if (navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(t);
  }
  // Fallback for older browsers
  return new Promise((resolve, reject) => {
    const ta = document.createElement("textarea");
    ta.value = t;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
      document.body.removeChild(ta);
      resolve();
    } catch (e) {
      document.body.removeChild(ta);
      reject(e);
    }
  });
}

/* =========================
   Navigation + UI chrome
   ========================= */

function initNav() {
  const toggle = $("#navToggle");
  const nav = $("#navMenu");
  if (!toggle || !nav) return;

  const close = () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  $$(".nav__link", nav).forEach((a) => a.addEventListener("click", close));

  document.addEventListener("click", (e) => {
    if (!nav.classList.contains("is-open")) return;
    if (nav.contains(e.target) || toggle.contains(e.target)) return;
    close();
  });
}

function initToTop() {
  const btn = $("#toTop");
  if (!btn) return;

  const onScroll = () => {
    if (window.scrollY > 500) btn.classList.add("is-show");
    else btn.classList.remove("is-show");
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* =========================
   Countdown
   ========================= */

function initCountdown() {
  const el = $("#countdownValue");
  if (!el) return;

  const start = new Date(EVENT_START_ISO);

  const tick = () => {
    const now = new Date();
    const diff = start.getTime() - now.getTime();

    if (diff <= 0) {
      el.textContent = "Live / Started";
      return;
    }

    const mins = Math.floor(diff / 60000);
    const days = Math.floor(mins / (60 * 24));
    const hours = Math.floor((mins - days * 60 * 24) / 60);
    const remMins = mins % 60;

    const parts = [];
    if (days) parts.push(`${days}d`);
    parts.push(`${hours}h`);
    parts.push(`${remMins}m`);
    el.textContent = parts.join(" ");
  };

  tick();
  setInterval(tick, 30_000);
}

/* =========================
   Calendar (.ics)
   ========================= */

function toICSDate(date) {
  // UTC time in YYYYMMDDTHHMMSSZ
  return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

function buildICS() {
  const dtStart = toICSDate(new Date(EVENT_START_ISO));
  const dtEnd = toICSDate(new Date(EVENT_END_ISO));
  const stamp = toICSDate(new Date());

  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//AI4L Workshop//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${Math.random().toString(36).slice(2)}@ai4l-workshop`,
    `DTSTAMP:${stamp}`,
    `DTSTART:${dtStart}`,
    `DTEND:${dtEnd}`,
    `SUMMARY:${EVENT_TITLE}`,
    `LOCATION:${EVENT_LOCATION}`,
    `DESCRIPTION:${EVENT_DESCRIPTION.replace(/\n/g, "\\n")}`,
    "END:VEVENT",
    "END:VCALENDAR"
  ];
  return lines.join("\r\n");
}

function initCalendar() {
  const btn = $("#addToCalendar");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const ics = buildICS();
    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "AI4L-Workshop-2026.ics";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  });
}

/* =========================
   Schedule (ET/PT displayed together)
   ========================= */

const AGENDA_TYPES = [
  { key: "ALL", label: "All" },
  { key: "KEYNOTE", label: "Keynotes" },
  { key: "TECH", label: "Technical" },
  { key: "NETWORK", label: "Networking" },
  { key: "BREAK", label: "Breaks" }
];

function initAgenda() {
  const list = $("#agendaList");
  const search = $("#agendaSearch");
  const chips = $("#agendaChips");
  if (!list || !search || !chips) return;

  let activeType = "ALL";
  let q = "";

  const setActiveChip = () => {
    $$(".chip", chips).forEach((b) => {
      b.classList.toggle("is-active", b.dataset.type === activeType);
    });
  };

  const matches = (item) => {
    if (activeType !== "ALL" && item.type !== activeType) return false;

    if (!q) return true;
    const hay = [
      item.title,
      item.mode,
      (item.speakers || []).join(", "),
      item.details
    ].join(" ");
    return normalize(hay).includes(q);
  };

  const render = () => {
    const items = AGENDA.filter(matches);

    list.innerHTML = items
      .map((it) => {
        const idx = AGENDA.indexOf(it);
        const next = AGENDA[idx + 1];
        const endISO = next ? next.startISO : EVENT_END_ISO;

        const timeHtml = fmtRangeBothLines(it.startISO, endISO);
        const speakers = (it.speakers && it.speakers.length) ? it.speakers.join(", ") : "—";
        const meta = `${escapeHtml(it.mode || "—")} • ${escapeHtml(speakers)}`;
        const detailsText = (it.details && String(it.details).trim()) ? it.details : "Details will be announced.";

        return `
          <details class="schedule-item">
            <summary>
              <div class="schedule-left">
                <div class="schedule-time">${timeHtml}</div>
                <div class="schedule-hint"><span class="hint-dot" aria-hidden="true"></span> Click to expand details</div>
              </div>
              <div class="schedule-main">
                <div class="schedule-title-row">
                  <div class="schedule-title">${escapeHtml(it.title)}</div>
                  <div class="schedule-tag">${escapeHtml(it.type)}</div>
                </div>
                <div class="schedule-meta">${meta}</div>
              </div>
            </summary>
            <div class="schedule-details">${escapeHtml(detailsText)}</div>
          </details>
        `;
      })
      .join("");

    if (!items.length) {
      list.innerHTML = `<div class="card"><div class="muted"><strong>No matching items.</strong> Try a different keyword or filter.</div></div>`;
    }
  };

  chips.addEventListener("click", (e) => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    activeType = btn.dataset.type || "ALL";
    setActiveChip();
    render();
  });

  search.addEventListener("input", () => {
    q = normalize(search.value).trim();
    render();
  });

  setActiveChip();
  render();
}

/* =========================
   PDF export (Schedule)
   ========================= */

function sanitizeFilename(name) {
  return String(name || "schedule")
    .replace(/[\\/:*?\"<>|]+/g, "-")
    .replace(/\s+/g, " ")
    .trim();
}

function loadScriptOnce(src, checkFn) {
  return new Promise((resolve, reject) => {
    if (checkFn && checkFn()) return resolve();

    const existing = Array.from(document.scripts).find((s) => s.src === src);
    if (existing) {
      const done = () => resolve();
      existing.addEventListener("load", done, { once: true });
      existing.addEventListener("error", () => reject(new Error(`Failed to load ${src}`)), { once: true });
      return;
    }

    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(s);
  });
}

async function ensurePdfLibs() {
  await loadScriptOnce(
    "https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js",
    () => typeof window.html2canvas === "function"
  );
  await loadScriptOnce(
    "https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js",
    () => window.jspdf && typeof window.jspdf.jsPDF === "function"
  );
}

function getAgendaWithEnds() {
  return AGENDA.map((it, idx) => {
    const next = AGENDA[idx + 1];
    return {
      ...it,
      endISO: next ? next.startISO : EVENT_END_ISO
    };
  });
}

function buildPdfScheduleCard(it) {
  const card = document.createElement("div");
  card.className = "pdf-schedule-item";

  const topRow = document.createElement("div");
  topRow.className = "pdf-row";

  const time = document.createElement("div");
  time.className = "pdf-time";
  time.textContent = fmtRangeBoth(it.startISO, it.endISO);

  topRow.appendChild(time);

  const typeText = (it.type || "").trim();
  if (typeText) {
    const type = document.createElement("div");
    type.className = "pdf-type";
    type.textContent = typeText;
    topRow.appendChild(type);
  }

  const itemTitle = document.createElement("div");
  itemTitle.className = "pdf-item-title";
  itemTitle.textContent = it.title || "(untitled)";

  const speakers = it.speakers && it.speakers.length ? it.speakers.join(", ") : "";
  const mode = (it.mode || "").trim();

  let itemMeta = null;
  if (mode || speakers) {
    itemMeta = document.createElement("div");
    itemMeta.className = "pdf-item-meta";

    if (mode) {
      const m = document.createElement("div");
      m.className = "pdf-item-mode";
      m.textContent = mode;
      itemMeta.appendChild(m);
    }

    if (speakers) {
      const s = document.createElement("div");
      s.className = "pdf-item-speakers";
      s.textContent = speakers;
      itemMeta.appendChild(s);
    }
  }

  const details = document.createElement("div");
  details.className = "pdf-item-details";
  details.textContent =
    it.details && String(it.details).trim() ? String(it.details).trim() : "Details will be announced.";

  if (itemMeta) {
    card.append(topRow, itemTitle, itemMeta, details);
  } else {
    card.append(topRow, itemTitle, details);
  }

  return card;
}

function buildSchedulePdfPages() {
  const root = document.createElement("div");
  root.className = "pdf-root";
  root.id = "pdfScheduleRoot";

  const pagesWrap = document.createElement("div");
  pagesWrap.className = "pdf-pages";
  root.appendChild(pagesWrap);

  // IMPORTANT:
  // Pagination below uses layout metrics like `scrollHeight`. Those are unreliable
  // when the DOM subtree is detached from the document. So we attach the root
  // off-screen *before* we start measuring and splitting pages.
  document.body.appendChild(root);

  const pages = [];

  const PAGE_HEIGHT_PX = 1123; // A4 @ ~96dpi
  const createPage = (isFirst) => {
    const page = document.createElement("div");
    page.className = "pdf-page";
    page.style.height = PAGE_HEIGHT_PX + "px";

    const inner = document.createElement("div");
    inner.className = "pdf-page-inner";
    page.appendChild(inner);

    if (isFirst) {
      // Header (only on first page)
      const header = document.createElement("div");
      header.className = "pdf-header";

      const kicker = document.createElement("div");
      kicker.className = "pdf-kicker";
      kicker.textContent = "Robust AI Workshop";

      const titleText =
        (document.querySelector(".hero h1") && document.querySelector(".hero h1").textContent) ||
        EVENT_TITLE ||
        "Workshop Schedule";

      const title = document.createElement("div");
      title.className = "pdf-title";
      title.textContent = String(titleText).trim();

      const meta = document.createElement("div");
      meta.className = "pdf-meta";
      const start = new Date(EVENT_START_ISO);
      const dateStr = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: ET_TZ
      }).format(start);

      meta.textContent = `${dateStr} • ${fmtRangeBoth(EVENT_START_ISO, EVENT_END_ISO)} • ${EVENT_LOCATION}`;

      header.append(kicker, title, meta);
      inner.appendChild(header);
    }

    const sTitle = document.createElement("div");
    sTitle.className = "pdf-section-title";
    sTitle.textContent = "Schedule";
    inner.appendChild(sTitle);

    const scheduleWrap = document.createElement("div");
    scheduleWrap.className = "pdf-schedule";
    inner.appendChild(scheduleWrap);

    pagesWrap.appendChild(page);
    pages.push(page);

    return { page, scheduleWrap };
  };

  let { page: curPage, scheduleWrap: curWrap } = createPage(true);

  const items = getAgendaWithEnds();
  items.forEach((it) => {
    const card = buildPdfScheduleCard(it);
    curWrap.appendChild(card);

    // Prevent a single schedule card from being split across pages.
    if (curPage.scrollHeight > PAGE_HEIGHT_PX) {
      curWrap.removeChild(card);
      ({ page: curPage, scheduleWrap: curWrap } = createPage(false));
      curWrap.appendChild(card);

      // If a single card is too tall to fit on an empty page, allow it (rare).
      // This prevents an infinite loop.
      if (curPage.scrollHeight > PAGE_HEIGHT_PX) {
        // no-op: keep it; it will be clipped rather than looping forever
      }
    }
  });

  return { root, pages };
}


async function generateSchedulePdf() {
  await ensurePdfLibs();

  // Wait for web fonts so layout is stable in the captured canvases.
  if (document.fonts && document.fonts.ready) {
    try {
      await document.fonts.ready;
    } catch {
      // ignore
    }
  }

  const { root, pages } = buildSchedulePdfPages();

  try {
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF("p", "pt", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    for (let i = 0; i < pages.length; i++) {
      const pageEl = pages[i];

      const canvas = await window.html2canvas(pageEl, {
        // Higher scale for crisp text.
        scale: 3,
        backgroundColor: "#ffffff",
        useCORS: true,
        scrollX: 0,
        scrollY: 0
      });

      const imgData = canvas.toDataURL("image/png");

      if (i > 0) pdf.addPage();
      // Our page element matches A4 aspect ratio, so draw full-bleed to the PDF page.
      pdf.addImage(imgData, "PNG", 0, 0, pageWidth, pageHeight);
    }

    const filename = sanitizeFilename("AI4L-Workshop-2026-Schedule.pdf");
    pdf.save(filename);
  } finally {
    root.remove();
  }
}


function initSchedulePdf() {
  const btn = document.getElementById("downloadSchedulePdf");
  if (!btn) return;

  btn.addEventListener("click", async () => {
    const original = (btn.textContent || "Download PDF").trim();
    btn.disabled = true;
    btn.textContent = "Generating…";

    try {
      await generateSchedulePdf();
      btn.textContent = "Downloaded";
      setTimeout(() => (btn.textContent = original), 1400);
    } catch (e) {
      console.error(e);
      btn.textContent = "Failed";
      setTimeout(() => (btn.textContent = original), 1600);
    } finally {
      btn.disabled = false;
    }
  });
}

/* =========================
   People
   ========================= */

function initPeople() {
  const grid = $("#peopleGrid");
  const search = $("#peopleSearch");
  const chips = $("#peopleChips");
  if (!grid || !search || !chips) return;

  let activeGroup = "ALL";
  let q = "";

  const setActiveChip = () => {
    $$(".chip", chips).forEach((b) => {
      b.classList.toggle("is-active", b.dataset.group === activeGroup);
    });
  };

  const matches = (p) => {
    if (activeGroup !== "ALL" && p.group !== activeGroup) return false;

    if (!q) return true;
    return includesAny(
      [p.name, p.org, p.role].join(" "),
      [q]
    );
  };

  const renderPerson = (p) => {
    const links = (p.links || [])
      .map((l) => `<a class="person__link" href="${escapeHtml(l.url)}" target="_blank" rel="noopener">${escapeHtml(l.label)}</a>`)
      .join("");

    const shortBio = (p.bio || "").slice(0, 240);
    const needsMore = (p.bio || "").length > 240;

    return `
      <article class="card person" data-name="${escapeHtml(p.name)}">
        <div class="person__top">
          <img class="avatar" src="${escapeHtml(p.photo)}" alt="${escapeHtml(p.name)}" loading="lazy" />
          <div>
            <div class="person__name">${escapeHtml(p.name)}</div>
            <div class="person__meta">${escapeHtml(p.role)} • ${escapeHtml(p.org)}</div>
          </div>
          <span class="badge">${escapeHtml(p.group)}</span>
        </div>

        <div class="person__links">${links || ""}</div>

        <div class="person__bio">
          <span class="person__bioText">${escapeHtml(needsMore ? shortBio + "…" : (p.bio || ""))}</span>
          ${needsMore ? `<button class="person__more" type="button">Read more</button>` : ""}
        </div>
      </article>
    `;
  };

  const render = () => {
    const items = PEOPLE.filter(matches);
    grid.innerHTML = items.map(renderPerson).join("");

    if (!items.length) {
      grid.innerHTML = `<div class="card"><div class="muted"><strong>No matching people.</strong> Try a different keyword or filter.</div></div>`;
    }

    // Attach expanders
    $$(".person__more", grid).forEach((btn) => {
      btn.addEventListener("click", () => {
        const card = btn.closest(".person");
        const name = card?.dataset?.name;
        const person = PEOPLE.find((p) => p.name === name);
        const textEl = $(".person__bioText", card);
        if (!person || !textEl) return;

        const expanded = btn.dataset.expanded === "1";
        if (expanded) {
          textEl.textContent = person.bio.slice(0, 240) + "…";
          btn.textContent = "Read more";
          btn.dataset.expanded = "0";
        } else {
          textEl.textContent = person.bio;
          btn.textContent = "Show less";
          btn.dataset.expanded = "1";
        }
      });
    });
  };

  chips.addEventListener("click", (e) => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    activeGroup = btn.dataset.group || "ALL";
    setActiveChip();
    render();
  });

  search.addEventListener("input", () => {
    q = normalize(search.value).trim();
    render();
  });

  setActiveChip();
  render();
}

/* =========================
   Keynote Speakers (first 2)
   ========================= */

function initKeynoteSpeakers() {
  const grid = $("#keynoteGrid");
  if (!grid) return;

  const renderSpeaker = (s) => {
    const links = (s.links || [])
      .map((l) => `<a class="person__link" href="${escapeHtml(l.url)}" target="_blank" rel="noopener">${escapeHtml(l.label)}</a>`)
      .join("");

    const shortAbs = (s.abstract || "").slice(0, 260);
    const needsMoreAbs = (s.abstract || "").length > 260;

    const shortBio = (s.bio || "").slice(0, 240);
    const needsMoreBio = (s.bio || "").length > 240;

    return `
      <article class="card speaker" data-name="${escapeHtml(s.name)}">
        <div class="speaker__top">
          <img class="avatar" src="${escapeHtml(s.photo || '')}" alt="${escapeHtml(s.name)}" loading="lazy" />
          <div>
            <div class="speaker__name">${escapeHtml(s.name)}</div>
            <div class="speaker__role">${escapeHtml(s.role)}</div>
          </div>
        </div>

        <div class="speaker__talk">${escapeHtml(s.talk || "")}</div>

        <p class="speaker__abstract">
          <span class="speaker__absText">${escapeHtml(needsMoreAbs ? shortAbs + "…" : (s.abstract || ""))}</span>
        </p>
        ${needsMoreAbs ? `<button class="speaker__more" data-type="abstract" type="button">Read more</button>` : ""}

        ${s.bio ? `
          <div class="person__bio">
            <span class="person__bioText">${escapeHtml(needsMoreBio ? shortBio + "…" : s.bio)}</span>
          </div>
          ${needsMoreBio ? `<button class="person__more" data-type="bio" type="button">Read more</button>` : ""}
        ` : ""}

        <div class="person__links">${links}</div>
      </article>
    `;
  };

  // Render first 2 speakers (keynote speakers)
  const keynoteSpeakers = SPEAKERS.slice(0, 2);
  grid.innerHTML = keynoteSpeakers.map(renderSpeaker).join("");

  // Attach expanders for abstract
  $$(".speaker__more", grid).forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".speaker");
      const name = card?.dataset?.name;
      const sp = SPEAKERS.find((s) => s.name === name);
      const textEl = $(".speaker__absText", card);
      if (!sp || !textEl) return;

      const expanded = btn.dataset.expanded === "1";
      if (expanded) {
        textEl.textContent = sp.abstract.slice(0, 260) + "…";
        btn.textContent = "Read more";
        btn.dataset.expanded = "0";
      } else {
        textEl.textContent = sp.abstract;
        btn.textContent = "Show less";
        btn.dataset.expanded = "1";
      }
    });
  });

  // Attach expanders for bio
  $$(".person__more", grid).forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".speaker");
      const name = card?.dataset?.name;
      const sp = SPEAKERS.find((s) => s.name === name);
      const textEl = $(".person__bioText", card);
      if (!sp || !textEl) return;

      const expanded = btn.dataset.expanded === "1";
      if (expanded) {
        textEl.textContent = sp.bio.slice(0, 240) + "…";
        btn.textContent = "Read more";
        btn.dataset.expanded = "0";
      } else {
        textEl.textContent = sp.bio;
        btn.textContent = "Show less";
        btn.dataset.expanded = "1";
      }
    });
  });
}


/* =========================
   Technical Presenters (remaining speakers)
   ========================= */

function initTechnicalPresenters() {
  const grid = $("#techPresenterGrid");
  const search = $("#techPresenterSearch");
  const count = $("#techPresenterCount");
  if (!grid || !search) return;

  let q = "";

  const matches = (s) => {
    if (!q) return true;
    const hay = [s.name, s.role, s.talk, s.abstract].join(" ");
    return normalize(hay).includes(q);
  };

  const renderSpeaker = (s) => {
    const links = (s.links || [])
      .map((l) => `<a class="person__link" href="${escapeHtml(l.url)}" target="_blank" rel="noopener">${escapeHtml(l.label)}</a>`)
      .join("");

    const shortAbs = (s.abstract || "").slice(0, 260);
    const needsMore = (s.abstract || "").length > 260;

    return `
      <article class="card speaker" data-name="${escapeHtml(s.name)}">
        <div class="speaker__top">
          <div>
            <div class="speaker__name">
              ${escapeHtml(s.name)}
              <a href="#people" class="speaker__profile-link" title="View full profile in Organizers & Team Members">View Profile →</a>
            </div>
            <div class="speaker__role">${escapeHtml(s.role)}</div>
          </div>
        </div>

        <div class="speaker__talk">${escapeHtml(s.talk || "")}</div>

        <p class="speaker__abstract">
          <span class="speaker__absText">${escapeHtml(needsMore ? shortAbs + "…" : (s.abstract || ""))}</span>
        </p>

        <div class="person__links">${links}</div>

        ${needsMore ? `<button class="speaker__more" type="button">Read more</button>` : ""}
      </article>
    `;
  };

  const render = () => {
    // Get technical presenters (skip first 2 keynote speakers)
    let technicalPresenters = SPEAKERS.slice(2);
    // Reorder: move last 2 to front (Dr. Liang Xue and Dr. Dilli Prasad Sharma)
    if (technicalPresenters.length >= 5) {
      const lastTwo = technicalPresenters.slice(-2); // Get last 2
      const firstThree = technicalPresenters.slice(0, -2); // Get first 3
      technicalPresenters = [...lastTwo, ...firstThree]; // Reorder: last 2 first, then first 3
    }
    const items = technicalPresenters.filter(matches);
    if (count) count.textContent = `${items.length} presenter(s)`;

    grid.innerHTML = items.map(renderSpeaker).join("");

    if (!items.length) {
      grid.innerHTML = `<div class="card"><div class="muted"><strong>No matching presenters.</strong> Try a different keyword.</div></div>`;
    }

    $$(".speaker__more", grid).forEach((btn) => {
      btn.addEventListener("click", () => {
        const card = btn.closest(".speaker");
        const name = card?.dataset?.name;
        const sp = SPEAKERS.find((s) => s.name === name);
        const textEl = $(".speaker__absText", card);
        if (!sp || !textEl) return;

        const expanded = btn.dataset.expanded === "1";
        if (expanded) {
          textEl.textContent = sp.abstract.slice(0, 260) + "…";
          btn.textContent = "Read more";
          btn.dataset.expanded = "0";
        } else {
          textEl.textContent = sp.abstract;
          btn.textContent = "Show less";
          btn.dataset.expanded = "1";
        }
      });
    });
  };

  search.addEventListener("input", () => {
    q = normalize(search.value).trim();
    render();
  });

  render();
}


/* =========================
   Copy helpers
   ========================= */

function initMeetingLinks() {
  const ids = ["meetingLink", "meetingLinkTop", "meetingLinkBottom"];
  const url = (MEETING_URL || "").trim();

  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const text = url || "TBA";
    el.textContent = text;

    // If the element is a link, set href only when a real URL is provided.
    if (el.tagName && el.tagName.toLowerCase() === "a") {
      if (url && /^https?:\/\//i.test(url)) {
        el.href = url;
      } else {
        el.href = "#";
      }
    }
  });
}

function initCopyButtons() {
  const pairs = [
    ["copyMeeting", "meetingLink"],
    ["copyMeetingTop", "meetingLinkTop"],
    ["copyMeetingBottom", "meetingLinkBottom"]
  ];

  pairs.forEach(([btnId, linkId]) => {
    const btn = document.getElementById(btnId);
    const link = document.getElementById(linkId);
    if (!btn || !link) return;

    btn.addEventListener("click", async () => {
      try {
        await copyToClipboard(link.textContent || "");
        btn.textContent = "Copied!";
        setTimeout(() => (btn.textContent = "Copy"), 1200);
      } catch {
        btn.textContent = "Copy failed";
        setTimeout(() => (btn.textContent = "Copy"), 1400);
      }
    });
  });

  const copyEmail = $("#copyEmail");
  if (copyEmail) {
    copyEmail.addEventListener("click", async () => {
      const email = copyEmail.dataset.email || "";
      try {
        await copyToClipboard(email);
        copyEmail.textContent = "Copied!";
        setTimeout(() => (copyEmail.textContent = "Copy organizer email"), 1200);
      } catch {
        copyEmail.textContent = "Copy failed";
        setTimeout(() => (copyEmail.textContent = "Copy organizer email"), 1400);
      }
    });
  }
}

/* =========================
   Boot
   ========================= */

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initToTop();
  initCountdown();
  initCalendar();
  initAgenda();
  initSchedulePdf();
  initKeynoteSpeakers();
  initTechnicalPresenters();
  initPeople();
  initMeetingLinks();
  initCopyButtons();
});
