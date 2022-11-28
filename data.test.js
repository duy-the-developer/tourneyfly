import {
  BoltIcon,
  TrophyIcon,
  UserGroupIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

export const user = {
  name: 'Chelsea Hagon',
  email: 'chelsea.hagon@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
export const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]
export const navigation = [
  { name: 'Tournaments', href: '/', icon: TrophyIcon, current: true },
  { name: 'Quick Match', href: '/quick-match', icon: BoltIcon, current: false },
  { name: 'Teams', href: '/teams', icon: UserGroupIcon, current: false },
  { name: 'Players', href: 'players', icon: UsersIcon, current: false },
]
export const communities = [
  { name: 'Movies', href: '#' },
  { name: 'Food', href: '#' },
  { name: 'Sports', href: '#' },
  { name: 'Animals', href: '#' },
  { name: 'Science', href: '#' },
  { name: 'Dinosaurs', href: '#' },
  { name: 'Talents', href: '#' },
  { name: 'Gaming', href: '#' },
]
export const tabs = [
  { name: 'Upcoming', href: '#', current: true },
  { name: 'Groups', href: '#', current: false },
  { name: 'Results', href: '#', current: false },
]
export const questions = [
  {
    id: '81614',
    likes: '29',
    replies: '11',
    views: '2.7k',
    author: {
      name: 'Dries Vincent',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    date: 'December 9 at 11:43 AM',
    datetime: '2020-12-09T11:43:00',
    href: '#',
    title: 'What would you have done differently if you ran Jurassic Park?',
    body: `
      <p>Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.</p>
      <p>Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;</p>
    `,
  },
  // More questions...
]
export const whoToFollow = [
  {
    name: 'Leonard Krasner',
    handle: 'leonardkrasner',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More people...
]
export const trendingPosts = [
  {
    id: 1,
    user: {
      name: 'Floyd Miles',
      imageUrl:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    body: 'What books do you have on your bookshelf just to look smarter than you actually are?',
    comments: 291,
  },
  // More posts...
]
export const tournaments = [
  {
    id: 1,
    title: 'LOSERS DO DISHES',
    startDate: '2022-10-27',
    status: 'Completed',
    teamNum: 6,
  },
  {
    id: 2,
    title: 'MY TOURNAMENT',
    startDate: '2022-11-28',
    status: 'On-going',
    teamNum: 8,
  },
  {
    id: 3,
    title: 'PLAY FOR BUBBLE TEA',
    startDate: '2022-12-08',
    status: 'Upcoming',
    teamNum: 4,
  },
]
export const currentMatch = {
  id: 1,
  teamA: {
    id: '01',
    name: '925ers',
    imageUrl: 'https://cdn.countryflags.com/thumbs/brazil/flag-square-250.png',
    score: 1,
  },
  teamB: {
    id: '02',
    name: 'Team Caffeine',
    imageUrl: 'https://cdn.countryflags.com/thumbs/serbia/flag-square-250.png',
    score: 0,
  },
}

export const players = [
  {
    name: 'Mickey Mouse',
    handle: 'mickeymouse',
    href: '#',
    imageUrl:
      'https://fictionhorizon.com/wp-content/uploads/2022/08/Mickey-Mouse.jpg',
  },
  {
    name: 'Peter Pan',
    handle: 'peterpan',
    href: '#',
    imageUrl:
      'https://fictionhorizon.com/wp-content/uploads/2022/03/120-Most-Iconic-Fictional-Characters-Of-All-Time-11.jpg',
  },
  {
    name: 'Vito Corleone',
    handle: 'thegodfather',
    href: '#',
    imageUrl:
      'https://fictionhorizon.com/wp-content/uploads/2022/08/Vito-Corleone.jpg',
  },
  {
    name: 'Santa Clause',
    handle: 'papaclause',
    href: '#',
    imageUrl:
      'https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/09/the-santa-clauses-poster-feature.jpg',
  },
]

export const teams = [
  {
    id: 1,
    name: '925ers',
    imageUrl: 'https://cdn.countryflags.com/thumbs/brazil/flag-square-250.png',
    members: ['mickeymouse', 'peterpan'],
    totalPlayed: 2,
    wins: 1,
    ties: 1,
    losses: 0,
    totalPoints: 4,
  },
  {
    id: 2,
    name: 'Team Caffeine',
    imageUrl: 'https://cdn.countryflags.com/thumbs/denmark/flag-square-250.png',
    members: ['thegodfather', 'papaclause'],
    totalPlayed: 2,
    wins: 1,
    ties: 1,
    losses: 0,
    totalPoints: 4,
  },
  {
    id: 3,
    name: 'Al Capowned',
    imageUrl:
      'https://cdn.countryflags.com/thumbs/united-states-of-america/flag-square-250.png',
    members: ['mickeymouse', 'peterpan'],
    totalPlayed: 2,
    wins: 1,
    ties: 1,
    losses: 0,
    totalPoints: 4,
  },
  {
    id: 4,
    name: 'The Water Coolers',
    imageUrl: 'https://cdn.countryflags.com/thumbs/serbia/flag-square-250.png',
    members: ['thegodfather', 'papaclause'],
    totalPlayed: 2,
    wins: 1,
    ties: 1,
    losses: 0,
    totalPoints: 4,
  },
  {
    id: 5,
    name: 'C-Suite Champs',
    imageUrl: 'https://cdn.countryflags.com/thumbs/japan/flag-square-250.png',
    members: ['mickeymouse', 'peterpan'],
    totalPlayed: 2,
    wins: 1,
    ties: 1,
    losses: 0,
    totalPoints: 4,
  },
  {
    id: 6,
    name: 'Insert Team Name Here',
    imageUrl: 'https://cdn.countryflags.com/thumbs/canada/flag-square-250.png',
    members: ['thegodfather', 'papaclause'],
    totalPlayed: 2,
    wins: 1,
    ties: 1,
    losses: 0,
    totalPoints: 4,
  },
  {
    id: 7,
    name: 'Zoom Crashers',
    imageUrl: 'https://cdn.countryflags.com/thumbs/germany/flag-square-250.png',
    members: ['mickeymouse', 'peterpan'],
    totalPlayed: 2,
    wins: 1,
    ties: 1,
    losses: 0,
    totalPoints: 4,
  },
  {
    id: 8,
    name: 'HR Heros',
    imageUrl: 'https://cdn.countryflags.com/thumbs/qatar/flag-square-250.png',
    members: ['thegodfather', 'papaclause'],
    totalPlayed: 2,
    wins: 1,
    ties: 1,
    losses: 0,
    totalPoints: 4,
  },
]
