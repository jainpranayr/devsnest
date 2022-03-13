import {
  Category,
  Course,
  Footer,
  NavLinks,
  Service,
  Testimonial,
} from './types'
import { HiChartBar, HiPuzzle, HiUserGroup } from 'react-icons/hi'
import {
  RiFacebookCircleLine,
  RiInstagramLine,
  RiTwitterLine,
  RiGithubLine,
  RiDiscordLine,
} from 'react-icons/ri'
import {
  BsCodeSlash,
  BsBrushFill,
  BsBank2,
  BsDiagram3Fill,
  BsCameraFill,
} from 'react-icons/bs'

export const categories: Category[] = [
  {
    title: 'All',
    slug: 'all',
    image: 'https://i.postimg.cc/0NnckzqV/4380747.jpg',
    icon: BsCodeSlash,
  },
  {
    title: 'Development',
    slug: 'development',
    image: 'https://i.postimg.cc/0NnckzqV/4380747.jpg',
    icon: BsCodeSlash,
  },
  {
    title: 'Finance',
    slug: 'finance',
    image: 'https://i.postimg.cc/nrCdwpg0/508479-PIHX4-Q-410.jpg',
    icon: BsBank2,
  },
  {
    title: 'Design',
    slug: 'design',
    image: 'https://i.postimg.cc/k5scTqPv/design.jpg',
    icon: BsBrushFill,
  },
  {
    title: 'Algorithms',
    slug: 'algorithms',
    image: 'https://i.postimg.cc/HxL3VTYd/3937464.jpg',
    icon: BsDiagram3Fill,
  },
  {
    title: 'Photography & video',
    slug: 'photography-and-video',
    image: 'https://i.postimg.cc/VNmg95pN/photography.jpg',
    icon: BsCameraFill,
  },
]

export const courses: Course[] = [
  {
    title: 'Personal Financial Well-Being',
    id: 'f1',
    image: 'https://i.postimg.cc/mkRtjyDw/finance-1.jpg',
    description:
      "<p>Money is important.</p><p>Money sets limits on your dreams, hinders or magnifies your happiness, and dictates the quality of your life.</p><p>And yet... They taught you next to NOTHING about how to manage it in school! The result has been a generation who has mismanaged budgets, racked up debts, defaulted on mortgages, lost investments, and failed to keep retirement plans. While a small proportion of the country has figured out how to make money work for them, most of us are part of the shrinking middle class who are losing out.</p><p>That's where Personal Financial Well Being comes in. University Instructor and former Silicon Valley Chief Financial Officer Richard Okumoto has developed this course for the Dot University to narrow the Wealth GAP and demystify personal money management.</p>",
    rating: 4.3,
    category: 'finance',
    students_enrolled: 5000,
    total_seats: 7000,
    seats_available: 2000,
    duration: '10hr',
    price: 5000,
  },
  {
    title: 'The Complete Financial Analyst Training & Investing Course',
    id: 'f2',
    image: 'https://i.postimg.cc/cJrYthgt/finance-2.jpg',
    description:
      "<p>This course is taught by Chris Haroun who also went through the Goldman Sachs financial analyst training program as well as the new hire training programs of other top finance companies. Chris has also started his own hedge fund and venture capital firms and is an award winning MBA school professor. He teaches based on real life practical experience.</p><p>Do you have what it takes to complete this 22+ hour comprehensive finance training program? I'll see you on the other side.</p>",
    rating: 4.3,
    category: 'finance',
    students_enrolled: 7000,
    total_seats: 10000,
    seats_available: 3000,
    duration: '22hr',
    price: 5000,
  },
  {
    title: 'Finance for Non-Finance: Learn Quick and Easy',
    id: 'f3',
    image: 'https://i.postimg.cc/J4Mk5MHL/finance-3.jpg',
    description:
      "<p>Do you want to <strong>master finance concepts</strong> without spending a lot of your time on books, web search and long-hour boring courses?</p><p>Are you a non-financial manager who wants a <strong>raise, better job or to open a new business?</strong> </p><p>You have come to the right place!</p><p>This course is easy to understand and it's designed in explainer video format to convey financial fundamentals in a way that makes everything clear and understandable. You will receive detailed explanations, practical cases and quizzes.</p><p>Within <strong>4-5 hours</strong> you'll obtain all the essentials of basic finance and budgeting. It will boost your business and financial literacy, resulting in well-informed economic decisions.</p>",
    rating: 4.5,
    category: 'finance',
    students_enrolled: 3000,
    total_seats: 7000,
    seats_available: 4000,
    duration: '5hr',
    price: 5000,
  },
  {
    title: 'The Complete 2022 Web Development Bootcamp',
    id: 'd1',
    image: 'https://i.postimg.cc/xdwkJ2VB/dev-2.jpg',
    description:
      "<p>Welcome to the Complete Web Development Bootcamp, <strong>the only course you need</strong> to learn to code and become a full-stack web developer.</p><p>At 30+ hours, this Web Development course is without a doubt the <strong>most comprehensive</strong> web development course available online. Even if you have zero programming experience, this course will take you from <strong>beginner to mastery</strong>.</p><p>We'll take you step-by-step through engaging video tutorials and teach you everything you need to know to succeed as a web developer.</p><p>The course includes over 30 hours of HD video tutorials and builds your programming knowledge while making real-world websites and web apps.</p>",
    rating: 4.7,
    category: 'development',
    students_enrolled: 10000,
    total_seats: 15000,
    seats_available: 5000,
    duration: '30hr',
    price: 5000,
  },
  {
    title: 'Modern JavaScript (Complete guide, from Novice to Ninja)',
    id: 'd2',
    image: 'https://i.postimg.cc/xdwkJ2VB/dev-2.jpg',
    description:
      "<p>Hey gang, and welcome to your first step on the path to becoming a JavaScript ninja! In this course I'll be teaching you my absolute favourite language (JavaScript!) from the very beginning, right through to creating fully-fledged, dynamic & interactive web experiences.</p><p>We'll cover all the basics to get you up-and-running quickly, before diving in to some of the really fun stuff like <strong>web-page manipulation</strong>, creating <strong>interactive forms</strong>, popups & other cool effects. Along the way we'll be using the latest additions to the JavaScript specification (<strong>ES6, 7 & beyond</strong>) and maintaining good coding standards to keep our code clean and effective!<p>TOnce we master the basics, we'll dive into several real-life JavaScript projects, including an <strong>interactive quiz, a weather app, a real-time chat application and a small UI library</strong> you can use in all your future projects!</p><p>We'll also take a look at some more advanced topics - <strong>object oriented programming, asynchronous code, real-time databases</strong> using Firebase (including a new chapter about Firebase 9) and much more. Finally, we'll be setting up a modern work-flow using Webpack & Babel, so that by the end of this course you'll be no less than a <strong>black-belt JavaScript developer</strong> with a lot of coding techniques in your tool-belt.</p>",
    rating: 4.8,
    category: 'development',
    students_enrolled: 9000,
    total_seats: 15000,
    seats_available: 6000,
    duration: '15hr',
    price: 5000,
  },
  {
    title: '2022 Python Data Analysis & Visualization Masterclass',
    id: 'd3',
    image: 'https://i.postimg.cc/cJrYthgt/finance-2.jpg',
    description:
      "<p>Welcome to (what I think is) the web's best course on <strong>Pandas, Matplotlib, Seaborn, and more!</strong> This course will level up your data skills to help you grow your career in Data Science, Machine Learning, Finance, Web Development, or any tech-adjacent field.</p><p>This is a tightly structured course that covers a ton, but it's all broken down into human-sized pieces rather than an overwhelming reference manual that throws everything at you at once. After each and every new topic, you'll have the chance to practice what you're learning and challenge yourself with exercises and projects. We work with dozens of fun and real-world datasets including Amazon bestsellers, Rivian stock prices, Presidential Tweets, Bitcoin historic data, and UFO sightings.</p><p>I think that about wraps it up! The topics in this courses are extremely visual and immediate, which makes them a joy to teach (and hopefully for you to learn).   If you have even a passing interest in these topics, you'll likely enjoy the course and tear through it quickly.  This stuff might seem intimidating, but it's actually really approachable and fun! I'm not kidding when I say this is my favorite course I've ever made. I hope you enjoy it too.</p>",
    rating: 4.7,
    category: 'development',
    students_enrolled: 4000,
    total_seats: 5000,
    seats_available: 1000,
    duration: '20hr',
    price: 5000,
  },
  {
    title: 'Become a UX Designer | Learn the Skills & Get the Job',
    id: 'u1',
    image: 'https://i.postimg.cc/zXt9FD2b/design-1.jpg',
    description:
      "<p>User Experience, or UX, is an exciting field. It's essentially about empowering people to do the things they want to do, which is both fun and gratifying. And, <strong>having a great user experience drives business success.</strong></p><p><strong>Learning UX, however, can be a challenge</strong>. Since it's a relatively young field, there's no real gold standard yet for how things are practiced, or taught, which can frustrate people who are just trying to learn things the right way, in order to apply UX immediately to what they're doing, as well as students looking to become practitioners.</p><p>I created this course because I believe your time is precious, and you shouldn't have to hunt around to get a practical foundation in UX. Or watch 24 hours of videos. This course takes you through the <strong>key concepts and steps of UX, as they would occur across a real-world project, so you gain a complete understanding of how to practice UX</strong> - from Research, to Strategy, to Design. And the confidence that comes with these new skills.</p><p>After taking the course you'll possess a powerful understanding of UX and the key activities related to the field. You'll also be able to take that knowledge, and put it to use to <strong>make better work and advance your career!</strong></p>",
    rating: 4.5,
    category: 'design',
    students_enrolled: 6300,
    total_seats: 8000,
    seats_available: 1700,
    duration: '6hr',
    price: 5000,
  },
  {
    title: 'The Branding Masterclass The Entire Brand Design Process',
    id: 'u2',
    image: 'https://i.postimg.cc/cHRpRQP0/design-2.jpg',
    description:
      '<p>The brand development process plays a critical part of the marketing and success of a company. I want to show you not only what successful brand design looks like but also how to brainstorm these concepts and ideas to finally turn that spark of an idea into a fully finished project ready for the client presentation, your portfolio and the world.</p><p>This class gently guides you through this process with a practical real world branding project using a case study for a sushi restaurant and delivery service. I created this course so you can start to offer branding packages to land bigger higher paying clients and propel yourself to the next level in your design career.</p><p>This course comes loaded with a 50 page brand design guide that details the entire class in an easy to read accessible pdf. This course comes with style presentation Adobe photoshop template, an Adobe Illustrator brand presentation template and an Adobe Photoshop Behance portfolio template and more.</p>',
    rating: 4.8,
    category: 'design',
    students_enrolled: 7500,
    total_seats: 9000,
    seats_available: 1500,
    duration: '8hr',
    price: 5000,
  },
  {
    title: 'Canva Master Course',
    id: 'u3',
    image: 'https://i.postimg.cc/wjWLBZvd/design-3.jpg',
    description:
      "<p>This course is your one-stop shop if you want to learn how to get started with Canva but also start building your visual brand.</p><p>Some of the features we'll talk about in the course include: publishing your designs directly on social media from Canva, Scheduling social media posts from Canva, creating animated text and GIFs and building simple websites and landing pages with Canva!</p><p>By joining this course you'll also gain access to a community of 34k Canva lovers in our <strong>discord</strong> server where I publish tutorials and Canva news weekly.</p>",
    rating: 4.7,
    category: 'design',
    students_enrolled: 6800,
    total_seats: 8000,
    seats_available: 1200,
    duration: '9hr',
    price: 5000,
  },
  {
    title: 'Master the Coding Interview: Data Structures + Algorithms',
    id: 'a1',
    image: 'https://i.postimg.cc/HnHCRSbr/dsa-1.jpg',
    description:
      '<p>Want to land a job at a great tech company like Google, Microsoft, Facebook, Netflix, Amazon, or other companies but you are intimidated by the interview process and the coding questions? Do you find yourself feeling like you get "stuck" every time you get asked a coding question? This course is your answer. Using the strategies, lessons, and exercises in this course, you will learn how to land offers from all sorts of companies.</p><p>Many developers who are "self taught", feel that one of the main disadvantages they face compared to college educated graduates in computer science is the fact that they don\'t have knowledge about algorithms, data structures and the notorious Big-O Notation. Get on the same level as someone with computer science degree by learning the fundamental building blocks of computer science which will give you a big boost during interviews. <strong>You will also get access to our private online chat community with thousands of developers online to help you get through the course.</strong></p>',
    rating: 4.7,
    category: 'algorithms',
    students_enrolled: 9500,
    total_seats: 11000,
    seats_available: 1500,
    duration: '19hr',
    price: 5000,
  },
  {
    title: 'JavaScript Algorithms and Data Structures Masterclass',
    id: 'a2',
    image: 'https://i.postimg.cc/PfmDDPxy/dsa-2.jpg',
    description:
      "<p>This course crams months of computer science and interview prep material into 20 hours of video. The content is based directly on last semester of my in-person coding bootcamps, where my students go on to land <strong>6-figure developer jobs</strong>. I cover the exact same computer science content that has helped my students ace interviews at huge companies like <strong>Google, Tesla, Amazon,</strong> and <strong>Facebook</strong>. Nothing is watered down for an online audience; this is the real deal :) We start with the basics and then eventually cover “advanced topics” that similar courses shy away from like <strong>Heaps, Graphs, and Dijkstra's Shortest Path Algorithm</strong>. </p><p>I start by teaching you how to analyze your code's time and space complexity using <strong>Big O notation</strong>.  We cover the ins and outs of <strong>Recursion</strong>.  We learn a 5-step approach to solving any difficult coding problem. We cover common programming patterns. We implement popular <strong>searching algorithms</strong>. We write 6 different <strong>sorting algorithms</strong>: Bubble, Selection, Insertion, Quick, Merge, and Radix Sort.   Then, we switch gears and implement our own data structures from scratch, including <strong>linked lists, trees, heaps, hash tables, and graphs</strong>.  We learn to traverse trees and graphs, and cover <strong>Dijkstra's Shortest Path Algorithm</strong>.  The course also includes an entire section devoted to <strong>Dynamic Programming</strong>.</p>",
    rating: 4.8,
    category: 'algorithms',
    students_enrolled: 6500,
    total_seats: 8300,
    seats_available: 1800,
    duration: '20hr',
    price: 5000,
  },
  {
    title: 'Data Structures & Algorithms - Python',
    id: 'a3',
    image: 'https://i.postimg.cc/PrrgDvyn/dsa-3.jpg',
    description:
      '<p>Welcome to the Data Structures and Algorithms in Python, the most modern, and the most complete Data Structures and Algorithms in Python course on the internet.</p><p>At 40+ hours, this is the most comprehensive course online to help you ace your coding interviews and learn about Data Structures and Algorithms in Python. You will see <strong>100+ Interview Questions</strong> done at the top technology companies such as Apple,Amazon, Google and Microsoft and how to face Interviews with comprehensive visual explanatory video materials which will bring you closer towards landing the tech job of your dreams!</p>',
    rating: 4.6,
    category: 'algorithms',
    students_enrolled: 5900,
    total_seats: 7400,
    seats_available: 1500,
    duration: '40hr',
    price: 5000,
  },
]

export const services: Service[] = [
  {
    name: 'Beginner Friendly',
    description:
      'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
    icon: HiChartBar,
  },
  {
    name: 'Project Based Learning',
    description:
      'Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis. Nibh urna non parturient.',
    icon: HiPuzzle,
  },
  {
    name: 'Dedicated Peer Groups',
    description:
      'Etiam cras augue ornare pretium sit malesuada morbi orci, venenatis. Dictum lacus.',
    icon: HiUserGroup,
  },
]

export const footer: Footer[] = [
  {
    name: 'Facebook',
    href: '#',
    icon: RiFacebookCircleLine,
  },
  {
    name: 'Instagram',
    href: '#',
    icon: RiInstagramLine,
  },
  {
    name: 'Twitter',
    href: '#',
    icon: RiTwitterLine,
  },
  {
    name: 'GitHub',
    href: '#',
    icon: RiGithubLine,
  },
  {
    name: 'Discord',
    href: '#',
    icon: RiDiscordLine,
  },
]

export const navLinks: NavLinks[] = [
  {
    name: 'About',
    href: '/',
  },
  {
    name: 'Courses',
    href: '/courses/all',
  },
  {
    name: 'Community',
    href: '/community',
  },
]

export const testimonials: Testimonial[] = [
  {
    text: 'Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
    author: 'Jheny William',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    text: 'Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
    author: 'Lois Prince',
    image: 'https://randomuser.me/api/portraits/men/60.jpg',
  },
  {
    text: 'Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
    author: 'Jane Doe',
    image: 'https://randomuser.me/api/portraits/women/81.jpg',
  },
]
