export interface PricingPlan {
  id: string;
  name: string;
  duration: string;
  price: string;
  monthlyEquivalent: string;
  discountBadge?: string;
  popular?: boolean;
  connections: number;
  features: string[];
  ctaText: string;
}

export interface ResellerPlan {
  id: string;
  name: string;
  credits: number;
  yearsEquivalent: string;
  price: string;
  perCreditPrice: string;
  discountBadge?: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'trial-24h',
    name: '24 Hours Trial Pass',
    duration: '24 Hours',
    price: '$1.49',
    monthlyEquivalent: 'Fast Pass',
    connections: 1,
    features: [
      'Access to 60,000+ Live Channels',
      '160,000+ Movies & TV Shows (VOD)',
      '4K, FHD & HD Stream Quality',
      'Anti Freeze v9.0 Technology',
      'EPG TV Guide Included',
      'Fast 2 Minute Activation',
    ],
    ctaText: 'Test 24 Hours Now',
  },
  {
    id: 'plan-1m',
    name: '1 Month Starter',
    duration: '1 Month',
    price: '$11.99',
    monthlyEquivalent: '$11.99 / mo',
    connections: 1,
    features: [
      '60,000+ Premium 4K/FHD Channels',
      '160,000+ VOD Movies & Series',
      'Anti Freeze v9.0 Technology',
      'All Sports & Live PPV Included',
      'EPG TV Guide & 7 Day Catchup',
      'VPN Friendly & 99.9% Uptime',
      '24/7 Priority Live Support',
    ],
    ctaText: 'Get 1 Month Pass',
  },
  {
    id: 'plan-3m',
    name: '3 Months Pro',
    duration: '3 Months',
    price: '$23.99',
    monthlyEquivalent: '$7.99 / mo',
    discountBadge: 'SAVE 45%',
    connections: 1,
    features: [
      '60,000+ Premium 4K/FHD Channels',
      '160,000+ VOD Movies & Series',
      'Anti Freeze v9.0 Technology',
      'All Sports & Live PPV Included',
      'EPG TV Guide & 7 Day Catchup',
      'VPN Friendly & 99.9% Uptime',
      '24/7 Priority Live Support',
    ],
    ctaText: 'Get 3 Months Pass',
  },
  {
    id: 'plan-12m',
    name: '12 Months Ultimate',
    duration: '12 Months',
    price: '$55.99',
    monthlyEquivalent: '$4.66 / mo',
    discountBadge: 'BEST VALUE SAVE 70%',
    popular: true,
    connections: 1,
    features: [
      '60,000+ Premium 4K/FHD Channels',
      '160,000+ VOD Movies & Series',
      'Anti Freeze v9.0 Technology',
      'All Sports & Live PPV Included',
      'EPG TV Guide & 7 Day Catchup',
      'VPN Friendly & 99.9% Uptime',
      'VIP Dedicated Server Speed',
      '24/7 VIP Dedicated Support',
    ],
    ctaText: 'Claim 12 Months Pass',
  },
];

export const RESELLER_PLANS: ResellerPlan[] = [
  {
    id: 'reseller-100',
    name: 'Starter Panel',
    credits: 100,
    yearsEquivalent: '10 x 1Y Accounts',
    price: '$199',
    perCreditPrice: '$1.99 / credit',
    features: [
      'Official Xtream UI Reseller Panel',
      'Create 24H Free Trial Accounts',
      'Sub-Reseller Management Enabled',
      'Credits Never Expire',
      'Full Mag / M3U / Xtream API Support',
      'Fast 24/7 VIP Support Channel',
    ],
    ctaText: 'Get Starter Panel',
  },
  {
    id: 'reseller-250',
    name: 'Pro Reseller Panel',
    credits: 250,
    yearsEquivalent: '25 x 1Y Accounts',
    price: '$399',
    perCreditPrice: '$1.59 / credit',
    discountBadge: 'POPULAR CHOICE',
    popular: true,
    features: [
      'Official Xtream UI Reseller Panel',
      'Unlimited 24H Free Trial Accounts',
      'Sub-Reseller Creation & Management',
      'Credits Never Expire',
      'Custom DNS Binding Included',
      'Dedicated Account Manager',
    ],
    ctaText: 'Get Pro Panel',
  },
  {
    id: 'reseller-500',
    name: 'Super Reseller Panel',
    credits: 500,
    yearsEquivalent: '50 x 1Y Accounts',
    price: '$719',
    perCreditPrice: '$1.43 / credit',
    discountBadge: 'MAX PROFIT',
    features: [
      'Official Xtream UI Reseller Panel',
      'Unlimited Free Trials & Sub-Resellers',
      'Whitelabel Branding & Custom DNS',
      'Priority Server Traffic Routing',
      'Credits Never Expire',
      '1-on-1 VIP Manager & Technical Lead',
    ],
    ctaText: 'Get Super Panel',
  },
];

export interface SetupDevice {
  id: string;
  name: string;
  icon: string;
  recommendedApps: string[];
  steps: string[];
}

export const SETUP_DEVICES: SetupDevice[] = [
  {
    id: 'firestick',
    name: 'Amazon Firestick / Android TV',
    icon: 'Tv',
    recommendedApps: ['IPTV Smarters Pro', 'TiviMate', 'XCIPTV', 'Downloader App'],
    steps: [
      'Open Settings on your Firestick > My Fire TV > Developer Options (Enable Apps from Unknown Sources).',
      'Open the "Downloader" App and enter code 289370 or search IPTV Smarters Pro.',
      'Download and Install the application.',
      'Open IPTV Smarters Pro, select "Login with Xtream Codes API".',
      'Enter the Server URL, Username, and Password sent quickly to your email after ordering.',
      'Click Add User & enjoy 4K Ultra HD streaming!',
    ],
  },
  {
    id: 'smarttv',
    name: 'Smart TV (Samsung / LG)',
    icon: 'Monitor',
    recommendedApps: ['SmartOne IPTV', 'IBO Player', 'Nanomid', 'SS IPTV'],
    steps: [
      'Open your Smart TV App Store (Samsung Apps / LG Content Store).',
      'Search for "IBO Player" or "SmartOne IPTV" and click Install.',
      'Open the installed app to view your TV MAC Address & Key.',
      'Provide your MAC Address during order checkout or send it to our 24/7 Live Support.',
      'Our server will activate your playlist automatically within 2 minutes!',
    ],
  },
  {
    id: 'apple',
    name: 'iOS / Apple TV / iPad',
    icon: 'Smartphone',
    recommendedApps: ['IPTV Smarters Lite', 'GSE Smart IPTV', 'Smarters Player Lite'],
    steps: [
      'Open the Apple App Store on your iPhone, iPad, or Apple TV.',
      'Search and download "Smarters Player Lite" or "GSE Smart IPTV".',
      'Open the app and choose "Add Xtream Codes API".',
      'Enter your subscription credentials from your Eagle4k activation email.',
      'Start streaming quickly with Dolby Surround Sound & 4K support.',
    ],
  },
  {
    id: 'mag_box',
    name: 'MAG Box / Formuler Z',
    icon: 'Box',
    recommendedApps: ['MAG Portal', 'MYTVOnline 2/3'],
    steps: [
      'Go to MAG Settings > System Settings > Servers > Portals.',
      'Set Portal 1 Name: Eagle4k',
      'Set Portal 1 URL: Enter the Portal URL provided in your activation email.',
      'Save settings and reboot your MAG device.',
      'Provide your MAC Address starting with 00:1A:79:... during checkout for fast portal binding.',
    ],
  },
  {
    id: 'pc_mac',
    name: 'Windows PC & Mac',
    icon: 'Laptop',
    recommendedApps: ['IPTV Smarters Desktop', 'VLC Media Player', 'VLC Player'],
    steps: [
      'Download IPTV Smarters for Windows/Mac or VLC Media Player.',
      'Install the program on your computer.',
      'Insert your M3U Playlist link or login with Xtream API details.',
      'Enjoy seamless 4K streaming with zero latency on high refresh rate monitors.',
    ],
  },
];
