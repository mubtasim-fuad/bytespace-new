import { useEffect, useState, type FormEvent } from "react";
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  Camera,
  Check,
  ChevronRight,
  CirclePlay,
  Clock3,
  Code2,
  Globe2,
  Layers3,
  Megaphone,
  Menu,
  MessageCircle,
  Palette,
  Play,
  Search,
  ShoppingBag,
  Sparkles,
  Star,
  Users,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import heroStudent from "./assets/hero-student.png";
import creatorImage from "./assets/creator.png";
import { courses, filters, type Course } from "./data";
import AuthPage from "./AuthPage";
import "./App.css";

function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      to="/"
      className={`logo ${light ? "logo-light" : ""}`}
      aria-label="ByteSpace home"
    >
      <span className="logo-mark">
        <i />
        <i />
        <i />
        <i />
      </span>
      <span>ByteSpace</span>
    </Link>
  );
}

function Header({ light = false }: { light?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <header className={`site-header ${light ? "site-header-light" : ""}`}>
      <div className="container header-inner">
        <Logo light={light} />
        <nav
          className={`main-nav ${open ? "nav-open" : ""}`}
          aria-label="Main navigation"
          onClick={() => setOpen(false)}
        >
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/courses">Courses</NavLink>
          <NavLink to="/creators">Creators</NavLink>
          <div className="mobile-nav-actions">
            <Link to="/login">Sign In</Link>
            <Link className="button button-lime" to="/register">
              Join Us <ArrowUpRight size={18} />
            </Link>
          </div>
        </nav>
        <div className="header-actions">
          <Link className="signin-link" to="/login">
            Sign In
          </Link>
          <Link className="button button-lime join-button" to="/register">
            Join Us <ArrowUpRight size={18} />
          </Link>
          <Link className="bag-link" to="/login" aria-label="Your learning bag">
            <ShoppingBag size={23} strokeWidth={1.8} />
          </Link>
        </div>
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

function HeroSearch() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate(
      `/courses${query.trim() ? `?q=${encodeURIComponent(query.trim())}` : ""}`,
    );
  }
  return (
    <form className="hero-search" onSubmit={submit} role="search">
      <Search size={22} aria-hidden="true" />
      <input
        aria-label="Search courses, topics, or creators"
        placeholder="Course, topic, creator"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button type="submit">
        Search <ArrowUpRight size={19} />
      </button>
    </form>
  );
}

function Hero() {
  return (
    <section className="hero-section grid-blue">
      <Header light />
      <div className="container hero-content">
        <h1>
          Get Access to Hundreds
          <br className="desktop-break" /> Courses Available
        </h1>
        <p>
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>
        <HeroSearch />
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="hero-lime-orbit" />
        <div className="hero-outline hero-outline-one" />
        <div className="hero-outline hero-outline-two" />
        <div className="hero-spark hero-spark-left">✳</div>
        <div className="hero-spark hero-spark-right">✦</div>
        <img className="hero-person" src={heroStudent} alt="" />
        <div className="floating-card progress-card">
          <span className="progress-icon">
            <BarChart3 size={19} />
          </span>
          <span>
            <strong>Learning Progress</strong>
            <small>Keep it up, you are doing great!</small>
            <span className="progress-track">
              <i />
            </span>
          </span>
          <b>55%</b>
        </div>
        <div className="floating-card students-card">
          <span className="student-avatars">
            <i />
            <i />
            <i />
          </span>
          <span>
            <strong>Happy Students</strong>
            <small>2K+ joining us</small>
          </span>
        </div>
        <div className="floating-card design-card">
          <span className="design-icon">
            <Palette size={26} />
          </span>
          <span>
            <strong>UI/UX Design</strong>
            <small>200 Courses</small>
          </span>
          <ArrowUpRight size={19} />
        </div>
        <div className="hero-sticker">
          1000+
          <br />
          <span>Students</span>
        </div>
      </div>
    </section>
  );
}

function PartnerStrip() {
  return (
    <section className="partners" aria-label="Our learning community partners">
      <div className="container partner-inner">
        <span className="partner-label">
          Trusted by creative minds
          <br />
          around the world
        </span>
        <div className="partner-logos">
          <span className="partner-bold">✺ Layers</span>
          <span className="partner-serif">Sisyphus</span>
          <span className="partner-mark">◉ Circooles</span>
          <span className="partner-bold">◈ Catalog</span>
          <span className="partner-serif">Quotient</span>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  title,
  description,
  centered = false,
}: {
  title: string;
  description: string;
  centered?: boolean;
}) {
  return (
    <div
      className={`section-heading ${centered ? "section-heading-centered" : ""}`}
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function CourseCard({ course }: { course: Course }) {
  return (
    <article className="course-card">
      <Link
        to={`/courses/${course.slug}`}
        className="course-cover-link"
        aria-label={`View ${course.title}`}
      >
        <img src={course.cover} alt="" loading="lazy" />
        <div className="cover-badges">
          <span>{course.lessons} Lessons</span>
          <span>{course.duration}</span>
        </div>
      </Link>
      <div className="course-card-body">
        <div className="course-meta">
          <span>
            <Star size={15} fill="currentColor" /> {course.rating}
          </span>
          <span>
            <MessageCircle size={15} /> {course.comments} Comments
          </span>
        </div>
        <Link to={`/courses/${course.slug}`} className="course-title">
          {course.title}
        </Link>
        <div className="course-card-footer">
          <span className="level-pill">Beginner</span>
          <span className="learner-count">
            <Users size={16} /> 26+
          </span>
          <div className="course-price">
            <strong>$25</strong>
            <small>/lifetime</small>
          </div>
        </div>
      </div>
    </article>
  );
}

function CourseGrid({ items }: { items: Course[] }) {
  if (!items.length)
    return (
      <div className="empty-courses">
        <Search size={28} />
        <h3>No courses found yet</h3>
        <p>Try another topic or browse our featured courses.</p>
      </div>
    );
  return (
    <div className="course-grid">
      {items.map((course) => (
        <CourseCard key={course.slug} course={course} />
      ))}
    </div>
  );
}

function FeaturedCourses() {
  const [selected, setSelected] = useState("Featured");
  const shown =
    selected === "Featured"
      ? courses
      : courses.filter((course) => course.category === selected);
  return (
    <section id="featured-courses" className="section featured-section">
      <div className="container">
        <SectionHeading
          centered
          title="Discover Your Passion, Build Your Skills"
          description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
        />
        <div
          className="category-filters"
          role="group"
          aria-label="Filter courses by category"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={selected === filter ? "selected" : ""}
              onClick={() => setSelected(filter)}
              aria-pressed={selected === filter}
            >
              {filter}
            </button>
          ))}
        </div>
        <CourseGrid items={shown} />
        <div className="section-end">
          <Link className="button button-outline" to="/courses">
            Explore All Courses <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

const paths: { name: string; icon: LucideIcon }[] = [
  { name: "Design", icon: Palette },
  { name: "Development", icon: Code2 },
  { name: "IT & Software", icon: Layers3 },
  { name: "Business", icon: BriefcaseBusiness },
  { name: "Marketing", icon: Megaphone },
  { name: "Photography", icon: Camera },
];
function LearningPaths() {
  return (
    <section className="section paths-section">
      <div className="container">
        <SectionHeading
          title="Explore Diverse Learning Paths at Bytespace"
          description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
        />
        <div className="path-grid">
          {paths.map(({ name, icon: Icon }) => (
            <Link
              key={name}
              to={`/courses?q=${encodeURIComponent(name)}`}
              className="path-card"
            >
              <span>
                <Icon size={32} strokeWidth={1.8} />
              </span>
              <strong>{name}</strong>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Growth() {
  return (
    <section className="growth-section">
      <div className="container">
        <div className="growth-row">
          <div className="growth-copy">
            <span className="eyebrow">GROW WITH US</span>
            <h2>Your Path to Professional Growth Starts Here!</h2>
            <p>
              Explore a world of possibilities and build the skills to take your
              next step. Learn at your own pace from people who love what they
              do.
            </p>
            <div className="stats">
              <div>
                <strong>
                  12K<span>+</span>
                </strong>
                <small>Active learners</small>
              </div>
              <div>
                <strong>
                  70<span>+</span>
                </strong>
                <small>Expert creators</small>
              </div>
              <div>
                <strong>
                  16<span>+</span>
                </strong>
                <small>Learning paths</small>
              </div>
            </div>
            <Link className="button button-blue" to="/courses">
              Explore Courses <ArrowUpRight size={19} />
            </Link>
          </div>
          <div className="growth-art growth-art-student">
            <div className="growth-blob" />
            <img src={heroStudent} alt="Student learning online" />
            <div className="growth-note">
              <BookOpen size={19} />
              <span>
                Learn something new
                <br />
                <strong>Every day</strong>
              </span>
            </div>
          </div>
        </div>
        <div className="growth-row growth-row-creator">
          <div className="growth-art growth-art-creator">
            <div className="growth-blob" />
            <img src={creatorImage} alt="Creator sharing a course" />
            <div className="growth-note growth-note-creator">
              <Star size={19} fill="currentColor" />
              <span>
                Share your skills
                <br />
                <strong>Inspire others</strong>
              </span>
            </div>
          </div>
          <div className="growth-copy">
            <span className="eyebrow">FOR CREATORS</span>
            <h2>Create & Manage Courses Easily.</h2>
            <p>
              Turn what you know into a course people will love. ByteSpace gives
              you the tools to organize your lessons, connect with learners, and
              grow your community.
            </p>
            <ul className="check-list">
              <li>
                <Check size={18} /> Create courses with an easy to use editor
              </li>
              <li>
                <Check size={18} /> Share your expertise with curious learners
              </li>
              <li>
                <Check size={18} /> Build a community around your ideas
              </li>
            </ul>
            <Link className="button button-blue" to="/register">
              Become a Creator <ArrowUpRight size={19} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function CreatorCta() {
  return (
    <section className="creator-cta grid-blue">
      <div className="cta-ring cta-ring-one" />
      <div className="cta-ring cta-ring-two" />
      <span className="cta-spark" aria-hidden="true">
        ✳
      </span>
      <div className="container cta-content">
        <span className="eyebrow">YOUR JOURNEY STARTS HERE</span>
        <h2>Unlock Your Potential as a Creator with ByteSpace</h2>
        <p>
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become part of a community of
          over 10,000 local and international creators.
        </p>
        <Link className="button button-lime" to="/register">
          Join as Creator <ArrowUpRight size={19} />
        </Link>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    initials: "SM",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    initials: "JL",
    quote:
      "I’ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it my go-to for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    initials: "AB",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It’s fulfilling to see my courses making a positive impact on learners globally.",
  },
];
function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="container">
        <SectionHeading
          title="Discover What Our Community Is Saying"
          description="At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform."
        />
        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <article className="testimonial-card" key={item.name}>
              <div className="quote-mark">“</div>
              <p>“{item.quote}”</p>
              <div className="testimonial-bottom">
                <span className={`avatar avatar-${index}`}>
                  {item.initials}
                </span>
                <span>
                  <strong>{item.name}</strong>
                  <small>{item.role}</small>
                </span>
                <span
                  className="testimonial-stars"
                  aria-label="5 out of 5 stars"
                >
                  ★★★★★
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const [status, setStatus] = useState("");
  function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Newsletter signup is a frontend preview.");
  }
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Logo />
            <p>
              Stay up to date with our latest features and releases by joining
              our newsletter.
            </p>
            <form className="newsletter" onSubmit={subscribe}>
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Enter your email"
              />
              <button type="submit" aria-label="Subscribe to newsletter">
                <ArrowRight size={21} />
              </button>
            </form>
            <small aria-live="polite">
              {status ||
                "By subscribing, you agree to our Privacy Policy and consent to receive updates from our company."}
            </small>
          </div>
          <div className="footer-column">
            <h3>Browse</h3>
            <Link to="/courses">Featured Courses</Link>
            <Link to="/courses">Featured Categories</Link>
            <Link to="/courses?q=Business">Business</Link>
            <Link to="/courses?q=Design">Design</Link>
            <Link to="/courses?q=Development">Development</Link>
            <Link to="/courses?q=Marketing">Marketing</Link>
          </div>
          <div className="footer-column">
            <h3>Categories</h3>
            <Link to="/courses?q=Photography">Photography</Link>
            <Link to="/courses?q=Finance">Finance</Link>
            <Link to="/courses?q=Data Science">Data Science</Link>
            <Link to="/courses?q=Productivity">Productivity</Link>
          </div>
          <div className="footer-column">
            <h3>Platform</h3>
            <Link to="/register">Become a Creator</Link>
            <Link to="/creators">Creators</Link>
            <span>Contact</span>
            <Link to="/">About</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 ByteSpace. All rights reserved.</span>
          <div>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookie Settings</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <PartnerStrip />
      <FeaturedCourses />
      <LearningPaths />
      <Growth />
      <CreatorCta />
      <Testimonials />
      <Footer />
    </>
  );
}

function CoursesPage() {
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState(params.get("q") || "");
  const value = params.get("q")?.toLowerCase().trim() || "";
  const filtered = value
    ? courses.filter((course) =>
        `${course.title} ${course.category} ${course.description}`
          .toLowerCase()
          .includes(value),
      )
    : courses;
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setParams(query.trim() ? { q: query.trim() } : {});
  }
  return (
    <>
      <Header />
      <main className="catalog-page">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={15} /> Courses
          </div>
          <div className="catalog-intro">
            <div>
              <span className="eyebrow">EXPLORE COURSES</span>
              <h1>
                Find something new
                <br />
                to learn today.
              </h1>
              <p>
                Discover courses built by inspiring creators for curious minds.
              </p>
            </div>
            <div className="catalog-decor">
              <Sparkles size={100} strokeWidth={1} />
            </div>
          </div>
          <form className="catalog-search" onSubmit={submit} role="search">
            <Search size={21} />
            <input
              aria-label="Search courses"
              placeholder="Search courses and topics"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <button className="button button-blue" type="submit">
              Search
            </button>
          </form>
          <div className="catalog-results">
            <h2>
              {value ? `Results for “${params.get("q")}”` : "Featured Courses"}
            </h2>
            <span>
              {filtered.length} {filtered.length === 1 ? "course" : "courses"}
            </span>
          </div>
          <CourseGrid items={filtered} />
        </div>
      </main>
      <Footer />
    </>
  );
}

function CoursePage() {
  const { slug } = useParams();
  const course = courses.find((item) => item.slug === slug);
  const [tab, setTab] = useState<"overview" | "lessons" | "reviews">(
    "overview",
  );
  if (!course) return <NotFoundPage />;
  return (
    <>
      <Header />
      <main className="course-detail">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={15} />
            <Link to="/courses">Courses</Link>
            <ChevronRight size={15} />
            {course.title}
          </div>
          <div className="course-detail-head">
            <div>
              <span className="eyebrow">{course.category.toUpperCase()}</span>
              <h1>{course.title}</h1>
              <p>{course.description}</p>
              <div className="detail-metrics">
                <span>
                  <Star size={16} fill="currentColor" /> {course.rating} rating
                </span>
                <span>
                  <Users size={16} /> 26+ students
                </span>
                <span>
                  <Clock3 size={16} /> {course.duration}
                </span>
              </div>
            </div>
            <div className="detail-cover">
              <img src={course.cover} alt="" />
              <span>
                <Play size={23} fill="currentColor" />
              </span>
            </div>
          </div>
          <div className="detail-layout">
            <div>
              <div
                className="detail-tabs"
                role="tablist"
                aria-label="Course information"
              >
                {(["overview", "lessons", "reviews"] as const).map((item) => (
                  <button
                    key={item}
                    type="button"
                    role="tab"
                    aria-selected={tab === item}
                    className={tab === item ? "active" : ""}
                    onClick={() => setTab(item)}
                  >
                    {item[0].toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>
              {tab === "overview" && (
                <div className="detail-content">
                  <h2>About this course</h2>
                  <p>
                    {course.description} Take your time, practice what you
                    learn, and build skills you can use right away.
                  </p>
                  <h3>What you’ll learn</h3>
                  <ul className="check-list">
                    <li>
                      <Check size={18} /> Build confidence in the fundamentals
                    </li>
                    <li>
                      <Check size={18} /> Practice with hands-on projects
                    </li>
                    <li>
                      <Check size={18} /> Apply your skills to real world ideas
                    </li>
                  </ul>
                </div>
              )}
              {tab === "lessons" && (
                <div className="detail-content">
                  <h2>Course lessons</h2>
                  {[
                    "Getting started",
                    "Building the foundation",
                    "Put it into practice",
                    "Next steps",
                  ].map((lesson, index) => (
                    <div className="lesson-row" key={lesson}>
                      <CirclePlay size={21} />
                      <span>
                        {String(index + 1).padStart(2, "0")}. {lesson}
                      </span>
                      <small>{index === 0 ? "Preview" : "Lesson"}</small>
                    </div>
                  ))}
                </div>
              )}
              {tab === "reviews" && (
                <div className="detail-content">
                  <h2>Student reviews</h2>
                  <div className="review-card">
                    <div className="testimonial-stars">★★★★★</div>
                    <p>
                      “A thoughtful course that makes learning feel approachable
                      and fun.”
                    </p>
                    <strong>— Sarah M.</strong>
                  </div>
                </div>
              )}
            </div>
            <aside className="enroll-card">
              <span>Lifetime access</span>
              <div>
                <strong>$25</strong>
                <small> /lifetime</small>
              </div>
              <Link className="button button-blue" to="/register">
                Start Learning <ArrowRight size={19} />
              </Link>
              <ul>
                <li>
                  <BookOpen size={17} /> {course.lessons} lessons
                </li>
                <li>
                  <Clock3 size={17} /> {course.duration}
                </li>
                <li>
                  <Globe2 size={17} /> Learn at your own pace
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function CreatorsPage() {
  return (
    <>
      <Header />
      <main className="creators-page">
        <div className="container creators-layout">
          <div>
            <span className="eyebrow">CREATE WITH BYTESPACE</span>
            <h1>Your knowledge can inspire the world.</h1>
            <p>
              Share what you know, build your own course, and connect with a
              community that loves to learn.
            </p>
            <Link className="button button-blue" to="/register">
              Join as Creator <ArrowUpRight size={19} />
            </Link>
          </div>
          <div className="creators-portrait">
            <span />
            <img src={creatorImage} alt="Creator smiling with a tablet" />
          </div>
        </div>
      </main>
      <LearningPaths />
      <CreatorCta />
      <Footer />
    </>
  );
}
function NotFoundPage() {
  return (
    <>
      <Header />
      <main className="not-found">
        <div className="container">
          <span className="not-found-number">404</span>
          <h1>Oops, you’ve wandered off course.</h1>
          <p>Let’s get you back to a space where you can keep learning.</p>
          <Link className="button button-blue" to="/">
            Back to Home <ArrowRight size={19} />
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
}
function CoursesRoute() {
  const location = useLocation();
  return <CoursesPage key={location.search} />;
}
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthPage mode="login" />} />
        <Route path="/register" element={<AuthPage mode="register" />} />
        <Route path="/courses" element={<CoursesRoute />} />
        <Route path="/courses/:slug" element={<CoursePage />} />
        <Route path="/creators" element={<CreatorsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
