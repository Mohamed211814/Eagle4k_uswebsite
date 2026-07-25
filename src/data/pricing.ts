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

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'trial-24h',
    name: '24 Hours Trial Pass',
    duration: '24 Hours',
    price: '$1.99',
    monthlyEquivalent: 'Instant Pass',
    connections: 1,
    features: [
      'Access to 22,000+ Live Channels',
      '80,000+ Movies & TV Shows (VOD)',
      '4K, FHD & HD Stream Quality',
      'Anti-Freeze v9.0 Technology',
      'EPG TV Guide Included',
      'Fast 2-Minute Activation',
    ],
    ctaText: 'Test 24 Hours Now',
  },
  {
    id: 'plan-1m',
    name: '1 Month Starter',
    duration: '1 Month',
    price: '$14.99',
    monthlyEquivalent: '$14.99 / mo',
    connections: 1,
    features: [
      '22,000+ Premium 4K/FHD Channels',
      '80,000+ VOD Movies & Series',
      'Anti-Freeze v9.0 Technology',
      'All Sports & Live PPV Included',
      'EPG TV Guide & 7-Day Catchup',
      'VPN Friendly & 99.9% Uptime',
      '24/7 Priority Live Support',
    ],
    ctaText: 'Get 1 Month Pass',
  },
  {
    id: 'plan-3m',
    name: '3 Months Pro',
    duration: '3 Months',
    price: '$29.99',
    monthlyEquivalent: '$10.00 / mo',
    discountBadge: 'SAVE 33%',
    connections: 1,
    features: [
      '22,000+ Premium 4K/FHD Channels',
      '80,000+ VOD Movies & Series',
      'Anti-Freeze v9.0 Technology',
      'All Sports & Live PPV Included',
      'EPG TV Guide & 7-Day Catchup',
      'VPN Friendly & 99.9% Uptime',
      '24/7 Priority Live Support',
    ],
    ctaText: 'Get 3 Months Pass',
  },
  {
    id: 'plan-12m',
    name: '12 Months Ultimate',
    duration: '12 Months',
    price: '$69.99',
    monthlyEquivalent: '$5.83 / mo',
    discountBadge: 'BEST VALUE - SAVE 60%',
    popular: true,
    connections: 2,
    features: [
      'FREE 2nd Connection Included',
      '22,000+ Premium 4K/FHD Channels',
      '80,000+ VOD Movies & Series',
      'Anti-Freeze v9.0 Technology',
      'All Sports & Live PPV Included',
      'EPG TV Guide & 7-Day Catchup',
      'VPN Friendly & 99.9% Uptime',
      'VIP Dedicated Server Speed',
      '24/7 VIP Dedicated Support',
    ],
    ctaText: 'Claim 12 Months + 2 Connections',
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
      'Open Settings on your Firestick -> My Fire TV -> Developer Options (Enable Apps from Unknown Sources).',
      'Open the "Downloader" App and enter code 289370 or search IPTV Smarters Pro.',
      'Download and Install the application.',
      'Open IPTV Smarters Pro, select "Login with Xtream Codes API".',
      'Enter the Server URL, Username, and Password sent instantly to your email after ordering.',
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
      'Start streaming instantly with Dolby Surround Sound & 4K support.',
    ],
  },
  {
    id: 'mag_box',
    name: 'MAG Box / Formuler Z',
    icon: 'Box',
    recommendedApps: ['MAG Portal', 'MYTVOnline 2/3'],
    steps: [
      'Go to MAG Settings -> System Settings -> Servers -> Portals.',
      'Set Portal 1 Name: Eagle4k',
      'Set Portal 1 URL: Enter the Portal URL provided in your activation email.',
      'Save settings and reboot your MAG device.',
      'Provide your MAC Address starting with 00:1A:79:... during checkout for instant portal binding.',
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
