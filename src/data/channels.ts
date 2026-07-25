export interface ChannelCategory {
  id: string;
  name: string;
  icon: string;
  count: number;
}

export interface ChannelItem {
  id: string;
  name: string;
  category: string;
  country: string;
  quality: '4K HDR' | 'FHD 1080p' | '60 FPS';
  badge?: string;
  logoText: string;
  gradient: string;
}

export interface VodItem {
  id: string;
  title: string;
  category: 'Movie' | 'Series';
  genre: string;
  year: number;
  rating: string;
  quality: '4K Ultra HD' | 'FHD';
  badge?: string;
}

export const CATEGORIES: ChannelCategory[] = [
  { id: 'all', name: 'All Channels', icon: 'Tv', count: 22450 },
  { id: 'sports', name: 'Sports & Live PPV', icon: 'Trophy', count: 3200 },
  { id: 'usa_uk', name: 'USA & UK Premium', icon: 'Globe', count: 4850 },
  { id: 'cinema', name: 'Movies & Cinema', icon: 'Film', count: 2100 },
  { id: 'arabic', name: 'Arabic VIP', icon: 'Star', count: 3400 },
  { id: 'europe', name: 'Europe & Latam', icon: 'Zap', count: 5200 },
  { id: 'kids', name: 'Kids & Family', icon: 'Smile', count: 1200 },
  { id: 'documentary', name: 'Discovery & Docs', icon: 'Compass', count: 1500 },
];

export const FEATURED_CHANNELS: ChannelItem[] = [
  {
    id: 'ch-1',
    name: 'Sky Sports Main Event 4K',
    category: 'sports',
    country: 'UK',
    quality: '4K HDR',
    badge: 'LIVE 60FPS',
    logoText: 'SKY 4K',
    gradient: 'from-blue-600 to-indigo-900',
  },
  {
    id: 'ch-2',
    name: 'TNT Sports 1 Ultra HD',
    category: 'sports',
    country: 'UK',
    quality: '4K HDR',
    badge: 'UCL LIVE',
    logoText: 'TNT HD',
    gradient: 'from-red-600 to-amber-600',
  },
  {
    id: 'ch-3',
    name: 'DAZN 1 4K Sports',
    category: 'sports',
    country: 'EU/USA',
    quality: '4K HDR',
    badge: 'BOXING PPV',
    logoText: 'DAZN 4K',
    gradient: 'from-slate-800 to-zinc-950',
  },
  {
    id: 'ch-4',
    name: 'beIN Sports HD 1 Premium',
    category: 'arabic',
    country: 'Arabic/MENA',
    quality: '4K HDR',
    badge: 'WORLD CUP',
    logoText: 'beIN 4K',
    gradient: 'from-purple-700 to-slate-900',
  },
  {
    id: 'ch-5',
    name: 'HBO Max Ultra Cinema',
    category: 'cinema',
    country: 'USA',
    quality: '4K HDR',
    badge: 'DOLBY VISION',
    logoText: 'HBO 4K',
    gradient: 'from-purple-900 to-indigo-950',
  },
  {
    id: 'ch-6',
    name: 'ESPN+ Live Events 4K',
    category: 'sports',
    country: 'USA',
    quality: '60 FPS',
    badge: 'UFC PPV',
    logoText: 'ESPN+',
    gradient: 'from-red-700 to-red-950',
  },
  {
    id: 'ch-7',
    name: 'Canal+ Premium 4K',
    category: 'europe',
    country: 'France',
    quality: '4K HDR',
    badge: 'F1 LIVE',
    logoText: 'CANAL+',
    gradient: 'from-zinc-800 to-black',
  },
  {
    id: 'ch-8',
    name: 'NBC Sports Network 4K',
    category: 'usa_uk',
    country: 'USA',
    quality: 'FHD 1080p',
    badge: 'PREMIER LEAGUE',
    logoText: 'NBCSN',
    gradient: 'from-amber-600 to-purple-900',
  },
  {
    id: 'ch-9',
    name: 'SSC Sports 1 HD',
    category: 'arabic',
    country: 'Saudi',
    quality: 'FHD 1080p',
    badge: 'SAUDI PRO',
    logoText: 'SSC HD',
    gradient: 'from-emerald-700 to-teal-950',
  },
  {
    id: 'ch-10',
    name: 'SuperSport Grandstand 4K',
    category: 'sports',
    country: 'South Africa',
    quality: '4K HDR',
    badge: 'RUGBY / F1',
    logoText: 'SUPER 4K',
    gradient: 'from-blue-700 to-cyan-900',
  },
  {
    id: 'ch-11',
    name: 'National Geographic Wild 4K',
    category: 'documentary',
    country: 'Global',
    quality: '4K HDR',
    badge: 'NATURE 4K',
    logoText: 'NAT GEO',
    gradient: 'from-yellow-600 to-stone-900',
  },
  {
    id: 'ch-12',
    name: 'Disney+ Cinema 4K',
    category: 'kids',
    country: 'Global',
    quality: '4K HDR',
    badge: 'FAMILY',
    logoText: 'DISNEY 4K',
    gradient: 'from-sky-600 to-blue-900',
  },
];

export const VOD_SAMPLE: VodItem[] = [
  { id: 'v-1', title: 'Dune: Part Two', category: 'Movie', genre: 'Sci-Fi / Action', year: 2024, rating: '8.7', quality: '4K Ultra HD', badge: 'TOP WATCHED' },
  { id: 'v-2', title: 'Gladiator II', category: 'Movie', genre: 'Action / Drama', year: 2024, rating: '8.4', quality: '4K Ultra HD', badge: 'NEW RELEASE' },
  { id: 'v-3', title: 'House of the Dragon S2', category: 'Series', genre: 'Fantasy / Action', year: 2024, rating: '8.9', quality: '4K Ultra HD', badge: 'FULL SEASON' },
  { id: 'v-4', title: 'The Penguin', category: 'Series', genre: 'Crime / Thriller', year: 2024, rating: '8.8', quality: '4K Ultra HD', badge: 'POPULAR' },
  { id: 'v-5', title: 'Deadpool & Wolverine', category: 'Movie', genre: 'Comedy / Action', year: 2024, rating: '8.6', quality: '4K Ultra HD', badge: '4K DOLBY' },
  { id: 'v-6', title: 'Kingdom of the Planet of the Apes', category: 'Movie', genre: 'Sci-Fi', year: 2024, rating: '8.1', quality: '4K Ultra HD' },
];
