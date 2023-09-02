// Categories:
// Data Engineering, Web Development, Languages, JavaScript, Tools, Python, Visualization

const skills = [
  {
    title: 'JavaScript',
    competency: 4,
    category: ['Web Development', 'Languages', 'JavaScript'],
  },
  {
    title: 'Node.JS',
    competency: 4,
    category: ['Web Development', 'JavaScript'],
  },
  {
    title: 'React',
    competency: 4,
    category: ['Web Development', 'JavaScript'],
  },
  {
    title: 'Bash',
    competency: 3,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Amazon Web Services',
    competency: 2,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Heroku',
    competency: 2,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'MongoDB',
    competency: 3,
    category: ['Web Development', 'Data Engineering', 'Tools'],
  },
  {
    title: 'SQL',
    competency: 4,
    category: ['Data Engineering', 'Languages'],
  },
  {
    title: 'Android Studio',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Unity',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Express.JS',
    competency: 3,
    category: ['Web Development', 'JavaScript'],
  },
  {
    title: 'D3',
    competency: 2,
    category: ['Web Development', 'JavaScript', 'Visualization'],
  },
  {
    title: 'Git',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Numpy',
    competency: 3,
    category: ['Data Engineering', 'Python'],
  },
  {
    title: 'Jupyter',
    competency: 3,
    category: ['Data Engineering', 'Python'],
  },
  {
    title: 'Typescript',
    competency: 1,
    category: ['Web Development', 'Languages', 'JavaScript'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 4,
    category: ['Languages', 'Python'],
  },
  {
    title: 'C++',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'MATLAB',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'R',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Pandas',
    competency: 4,
    category: ['Data Engineering', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['Data Engineering', 'Python', 'Visualization'],
  },
  {
    title: 'Scikit-Learn',
    competency: 3,
    category: ['Data Engineering', 'Python'],
  },
  {
    title: 'Pylint',
    competency: 3,
    category: ['Data Engineering', 'Python'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#773350',
  '#d89bad',
  '#413c58',
  '#b49392',
  '#40798c',
  '1b998b',
  '564e53',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
