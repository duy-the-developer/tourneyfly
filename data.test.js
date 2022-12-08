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
	{
		name: 'Sign out',
		href: '/api/auth/logout',
	},
]
export const navigation = [
	{ name: 'Tournaments', href: '/', icon: TrophyIcon, current: true },
	{
		name: 'Quick Match',
		href: '/quick-match',
		icon: BoltIcon,
		current: false,
	},
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

export const currentMatch = {
	id: 1,
	teamA: {
		id: '01',
		name: '925ers',
		imageUrl:
			'https://cdn.countryflags.com/thumbs/brazil/flag-square-250.png',
		score: 1,
	},
	teamB: {
		id: '02',
		name: 'Team Caffeine',
		imageUrl:
			'https://cdn.countryflags.com/thumbs/serbia/flag-square-250.png',
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
		id: 'a',
		name: '925ers',
		imageUrl:
			'https://cdn.countryflags.com/thumbs/brazil/flag-square-250.png',
		members: ['mickeymouse', 'peterpan'],
		totalPlayed: 2,
		wins: 1,
		ties: 1,
		losses: 0,
		totalPoints: 7,
		results: {
			a: null,
			b: '2-0',
			c: '2-2',
			d: '1-2',
			e: '2-1',
			f: '3-0',
			g: '1-4',
			h: '0-0',
		},
	},
	{
		id: 'e',
		name: 'Team Caffeine',
		imageUrl:
			'https://cdn.countryflags.com/thumbs/denmark/flag-square-250.png',
		members: ['thegodfather', 'papaclause'],
		totalPlayed: 2,
		wins: 2,
		ties: 1,
		losses: 0,
		totalPoints: 4,
		results: {
			a: '0-2',
			b: '2-2',
			c: '2-1',
			d: '1-2',
			e: null,
			f: '3-0',
			g: '1-4',
			h: '0-0',
		},
	},
	{
		id: 'b',
		name: 'Al Capowned',
		imageUrl:
			'https://cdn.countryflags.com/thumbs/united-states-of-america/flag-square-250.png',
		members: ['mickeymouse', 'peterpan'],
		totalPlayed: 2,
		wins: 6,
		ties: 1,
		losses: 0,
		totalPoints: 2,
		results: {
			a: '2-2',
			b: null,
			c: '2-0',
			d: '1-2',
			e: '2-1',
			f: '3-0',
			g: '1-4',
			h: '0-0',
		},
	},
	{
		id: 'd',
		name: 'The Water Coolers',
		imageUrl:
			'https://cdn.countryflags.com/thumbs/serbia/flag-square-250.png',
		members: ['thegodfather', 'papaclause'],
		totalPlayed: 2,
		wins: 3,
		ties: 1,
		losses: 0,
		totalPoints: 9,
		results: {
			a: '2-1',
			b: '2-0',
			c: '2-2',
			d: null,
			e: '2-1',
			f: '3-0',
			g: '1-4',
			h: '0-0',
		},
	},
	{
		id: 'c',
		name: 'C-Suite Champs',
		imageUrl:
			'https://cdn.countryflags.com/thumbs/japan/flag-square-250.png',
		members: ['mickeymouse', 'peterpan'],
		totalPlayed: 2,
		wins: 5,
		ties: 1,
		losses: 0,
		totalPoints: 14,
		results: {
			a: '1-2',
			b: '2-0',
			c: null,
			d: '1-2',
			e: '2-2',
			f: '3-0',
			g: '1-4',
			h: '0-0',
		},
	},
	{
		id: 'f',
		name: 'Insert Team Name Here',
		imageUrl:
			'https://cdn.countryflags.com/thumbs/canada/flag-square-250.png',
		members: ['thegodfather', 'papaclause'],
		totalPlayed: 2,
		wins: 4,
		ties: 1,
		losses: 0,
		totalPoints: 12,
		results: {
			a: '0-3',
			b: '2-0',
			c: '2-2',
			d: '1-2',
			e: '2-1',
			f: null,
			g: '1-4',
			h: '0-0',
		},
	},
	{
		id: 'g',
		name: 'Zoom Crashers',
		imageUrl:
			'https://cdn.countryflags.com/thumbs/germany/flag-square-250.png',
		members: ['mickeymouse', 'peterpan'],
		totalPlayed: 2,
		wins: 8,
		ties: 1,
		losses: 0,
		totalPoints: 5,
		results: {
			a: '4-1',
			b: '2-0',
			c: '2-2',
			d: '1-2',
			e: '2-1',
			f: '3-0',
			g: null,
			h: '0-0',
		},
	},
	{
		id: 'h',
		name: 'HR Heroes',
		imageUrl:
			'https://cdn.countryflags.com/thumbs/qatar/flag-square-250.png',
		members: ['thegodfather', 'papaclause'],
		totalPlayed: 2,
		wins: 7,
		ties: 1,
		losses: 0,
		totalPoints: 10,
		results: {
			a: '0-0',
			b: '2-0',
			c: '2-2',
			d: '1-2',
			e: '2-1',
			f: '3-0',
			g: '1-4',
			h: null,
		},
	},
]
export const countries = [
	{
		id: 1,
		name: 'Qatar',
		imageUrl:
			'https://cdn.countryflags.com/thumbs/qatar/flag-square-250.png',
	},
	{
		id: 2,
		name: 'Ecuador',
		imageUrl:
			'https://cdn.countryflags.com/thumbs/ecuador/flag-square-250.png',
	},
	{
		id: 3,
		name: 'Senegal',
		imageUrl:
			'https://cdn.countryflags.com/thumbs/senegal/flag-square-250.png',
	},
	{
		id: 4,
		name: 'Netherlands',
		imageUrl:
			'https://cdn.countryflags.com/thumbs/netherlands/flag-square-250.png',
	},
	{
		id: 5,
		name: 'England',
		imageUrl:
			'https://cdn.countryflags.com/thumbs/england/flag-square-250.png',
	},
	{
		id: 6,
		name: 'IR Iran',
		imageUrl:
			'https://cdn.countryflags.com/thumbs/iran/flag-square-250.png',
	},
	{
		id: 7,
		name: 'USA',
		imageUrl:
			'https://cdn.countryflags.com/thumbs/united-states-of-america/flag-square-250.png',
	},
	{
		id: 8,
		name: 'Wales',
		imageUrl:
			'https://cdn.countryflags.com/thumbs/wales/flag-square-250.png',
	},
	{
		id: 9,
		name: 'Argentina',
		imageUrl:
			'https://cdn.countryflags.com/thumbs/argentina/flag-square-250.png',
	},
	{
		id: 10,
		name: 'Saudi Arabia',
		imageUrl:
			'https://cdn.countryflags.com/thumbs/saudi-arabia/flag-square-250.png',
	},
	{
		id: 11,
		name: 'Mexico',
		imageUrl:
			'https://cdn.countryflags.com/thumbs/mexico/flag-square-250.png',
	},
	{
		id: 12,
		name: 'Poland',
		imageUrl:
			'https://cdn.countryflags.com/thumbs/poland/flag-square-250.png',
	},
	{
		id: 13,
		name: 'France',
		imageUrl:
			'https://cdn.countryflags.com/thumbs/france/flag-square-250.png',
	},
	{
		id: 14,
		name: 'Australia',
		imageUrl:
			'https://cdn.countryflags.com/thumbs/australia/flag-square-250.png',
	},
	{
		id: 15,
		name: 'Denmark',
		imageUrl:
			'https://cdn.countryflags.com/thumbs/denmark/flag-square-250.png',
	},
	{
		id: 16,
		name: 'Tunisia',
		imageUrl:
			'https://cdn.countryflags.com/thumbs/tunisia/flag-square-250.png',
	},
	{
		id: 17,
		name: 'Spain',
		imageUrl:
			'https://cdn.countryflags.com/thumbs/spain/flag-square-250.png',
	},
	{
		id: 18,
		name: 'Costa Rica',
		imageUrl:
			'https://cdn.countryflags.com/thumbs/costa-rica/flag-square-250.png',
	},
	{
		id: 19,
		name: 'Germany',
		imageUrl:
			'https://cdn.countryflags.com/thumbs/germany/flag-square-250.png',
	},
	{
		id: 20,
		name: 'Japan',
		imageUrl:
			'https://cdn.countryflags.com/thumbs/japan/flag-square-250.png',
	},
	{
		id: 21,
		name: 'Belgium',
		imageUrl:
			'https://cdn.countryflags.com/thumbs/belgium/flag-square-250.png',
	},
	{
		id: 22,
		name: 'Canada',
		imageUrl:
			'https://cdn.countryflags.com/thumbs/canada/flag-square-250.png',
	},
	{
		id: 23,
		name: 'Morocco',
		imageUrl:
			'https://cdn.countryflags.com/thumbs/morocco/flag-square-250.png',
	},
	{
		id: 24,
		name: 'Croatia',
		imageUrl:
			'https://cdn.countryflags.com/thumbs/croatia/flag-square-250.png',
	},
	{
		id: 25,
		name: 'Brazil',
		imageUrl:
			'https://cdn.countryflags.com/thumbs/brazil/flag-square-250.png',
	},
	{
		id: 26,
		name: 'Serbia',
		imageUrl:
			'https://cdn.countryflags.com/thumbs/serbia/flag-square-250.png',
	},
	{
		id: 27,
		name: 'Switzerland',
		imageUrl:
			'https://cdn.countryflags.com/thumbs/switzerland/flag-square-250.png',
	},
	{
		id: 28,
		name: 'Cameroon',
		imageUrl:
			'https://cdn.countryflags.com/thumbs/cameroon/flag-square-250.png',
	},
	{
		id: 29,
		name: 'Portugal',
		imageUrl:
			'https://cdn.countryflags.com/thumbs/portugal/flag-square-250.png',
	},
	{
		id: 30,
		name: 'Ghana',
		imageUrl:
			'https://cdn.countryflags.com/thumbs/ghana/flag-square-250.png',
	},
	{
		id: 31,
		name: 'Uruquay',
		imageUrl:
			'https://cdn.countryflags.com/thumbs/uruguay/flag-square-250.png',
	},
	{
		id: 32,
		name: 'Korea Republic',
		imageUrl:
			'https://cdn.countryflags.com/thumbs/south-korea/flag-square-250.png',
	},
]
