// =========================================================================
// CRISP INLINE SVG ICON LIBRARY (Lucide-aligned)
// =========================================================================
const ICONS = {
  box: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>`,
  grid: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>`,
  stockIn: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="m8 11 4 4 4-4"/><path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4"/></svg>`,
  stockOut: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15V3"/><path d="m8 7 4-4 4 4"/><path d="M8 11H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-4"/></svg>`,
  swap: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/></svg>`,
  layers: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>`,
  users: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  report: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M8 18v-1"/><path d="M12 18v-6"/><path d="M16 18v-3"/></svg>`,
  settings: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,
  shield: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>`,
  mail: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  lock: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  eye: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>`,
  eyeOff: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/></svg>`,
  search: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
  bell: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>`,
  chevronDown: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`,
  chevronLeft: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>`,
  chevronRight: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`,
  arrowRight: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
  plus: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`,
  calendar: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>`,
  warning: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>`,
  trendUp: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`,
  filter: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>`,
  download: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>`,
  upload: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>`,
  check: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
  dots: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>`,
  logout: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>`,
  menu: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`,
  close: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
  arrowDown: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>`,
  arrowUp: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5"/><path d="m5 12 7-7 7 7"/></svg>`,
  keyboard: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><path d="M6 9h.01M10 9h.01M14 9h.01M18 9h.01M8 13h.01M12 13h.01M16 13h.01M7 16h10"/></svg>`,
  monitor: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>`,
  projector: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="10" x="2" y="7" rx="2"/><circle cx="16" cy="12" r="2.5"/><path d="M6 12h4"/><path d="M6 17v2M18 17v2"/></svg>`,
  mouse: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="3" width="12" height="18" rx="6"/><path d="M12 7v4"/></svg>`,
  cpu: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect width="12" height="18" x="6" y="3" rx="2"/><path d="M10 7h4"/><circle cx="12" cy="15" r="1"/></svg>`,
  edit: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>`,
  trash: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>`,
};

// Hydrate static icon placeholders
function hydrateIcons(root = document) {
  root.querySelectorAll('[data-icon]').forEach((el) => {
    const key = el.getAttribute('data-icon');
    if (ICONS[key]) el.innerHTML = ICONS[key];
  });
}

// =========================================================================
// STATE & SEED DATA (Matching screenshots + rich interactive records)
// =========================================================================
const INITIAL_PRODUCTS = [
  {
    id: 'p1',
    name: 'Logitech K120 Keyboard',
    sku: 'IT-KB-001',
    category: 'IT Equipment',
    location: 'Computer Lab 1',
    quantity: 125,
    minLevel: 20,
    unit: 'units',
    updated: 'Nov 17, 2026',
    icon: 'keyboard',
    description: 'Spill-resistant wired USB desktop keyboard for campus lab stations.',
  },
  {
    id: 'p2',
    name: 'Dell 24" LED Monitor',
    sku: 'IT-MN-004',
    category: 'IT Equipment',
    location: 'Computer Lab 2',
    quantity: 3,
    minLevel: 10,
    unit: 'units',
    updated: 'Nov 17, 2026',
    icon: 'monitor',
    description: '24-inch Full HD IPS display with DisplayPort and HDMI inputs.',
  },
  {
    id: 'p3',
    name: 'Epson EB-E01 Projector',
    sku: 'AV-PJ-002',
    category: 'AV Equipment',
    location: 'AV Room',
    quantity: 2,
    minLevel: 5,
    unit: 'units',
    updated: 'Nov 17, 2026',
    icon: 'projector',
    description: '3300 lumens XGA 3LCD classroom multimedia projector.',
  },
  {
    id: 'p4',
    name: 'Logitech B100 Mouse',
    sku: 'IT-MS-003',
    category: 'IT Equipment',
    location: 'Computer Lab 1',
    quantity: 5,
    minLevel: 20,
    unit: 'units',
    updated: 'Nov 16, 2026',
    icon: 'mouse',
    description: 'Wired optical USB mouse with 800 DPI tracking.',
  },
  {
    id: 'p5',
    name: 'Dell OptiPlex 7010',
    sku: 'IT-SU-005',
    category: 'IT Equipment',
    location: 'Computer Lab 3',
    quantity: 48,
    minLevel: 10,
    unit: 'units',
    updated: 'Nov 16, 2026',
    icon: 'cpu',
    description: 'Small form factor desktop unit (Intel Core i5, 16GB RAM, 512GB SSD).',
  },
  {
    id: 'p6',
    name: 'A4Tech USB Keyboard',
    sku: 'IT-KB-006',
    category: 'IT Equipment',
    location: 'Computer Lab 2',
    quantity: 7,
    minLevel: 15,
    unit: 'units',
    updated: 'Nov 16, 2026',
    icon: 'keyboard',
    description: 'Standard wired USB keyboard for workstation replacements.',
  },
  {
    id: 'p7',
    name: 'Epson EcoTank L3250',
    sku: 'OF-PR-007',
    category: 'Office Equipment',
    location: 'Admin Office',
    quantity: 16,
    minLevel: 5,
    unit: 'units',
    updated: 'Nov 15, 2026',
    icon: 'box',
    description: 'Wi-Fi all-in-one integrated ink tank printer.',
  },
  {
    id: 'p8',
    name: 'TP-Link 24-Port Switch',
    sku: 'NW-SW-009',
    category: 'Networking',
    location: 'Server Room',
    quantity: 1,
    minLevel: 4,
    unit: 'units',
    updated: 'Nov 15, 2026',
    icon: 'cpu',
    description: 'Rackmount unmanaged Gigabit Ethernet switch.',
  },
  {
    id: 'p9',
    name: 'Whiteboard Marker (Black)',
    sku: 'SP-MK-010',
    category: 'Office Supplies',
    location: 'Supply Room',
    quantity: 8,
    minLevel: 25,
    unit: 'boxes',
    updated: 'Nov 14, 2026',
    icon: 'box',
    description: 'Box of 12 non-toxic dry erase bullet tip markers.',
  },
  {
    id: 'p10',
    name: 'HDMI Cable 5m',
    sku: 'AV-CB-011',
    category: 'AV Equipment',
    location: 'AV Room',
    quantity: 4,
    minLevel: 12,
    unit: 'units',
    updated: 'Nov 14, 2026',
    icon: 'projector',
    description: 'High-speed braided 5-meter HDMI 2.0 cable.',
  },
  {
    id: 'p11',
    name: 'Lab Beaker 500ml',
    sku: 'LB-GL-012',
    category: 'Lab Equipment',
    location: 'Science Lab 1',
    quantity: 6,
    minLevel: 20,
    unit: 'units',
    updated: 'Nov 13, 2026',
    icon: 'box',
    description: 'Borosilicate graduated glass beaker 500ml.',
  },
  {
    id: 'p12',
    name: 'HP LaserJet Pro M404dn',
    sku: 'OF-PR-013',
    category: 'Office Equipment',
    location: 'Registrar Office',
    quantity: 12,
    minLevel: 4,
    unit: 'units',
    updated: 'Nov 13, 2026',
    icon: 'box',
    description: 'Monochrome duplex network laser printer.',
  },
  {
    id: 'p13',
    name: 'Cisco Catalyst 2960',
    sku: 'NW-SW-014',
    category: 'Networking',
    location: 'Server Room',
    quantity: 14,
    minLevel: 5,
    unit: 'units',
    updated: 'Nov 12, 2026',
    icon: 'cpu',
    description: 'Managed Layer 2 enterprise campus switch.',
  },
  {
    id: 'p14',
    name: 'Bond Paper A4 (Ream)',
    sku: 'SP-PP-015',
    category: 'Office Supplies',
    location: 'Supply Room',
    quantity: 140,
    minLevel: 30,
    unit: 'reams',
    updated: 'Nov 12, 2026',
    icon: 'box',
    description: '80gsm A4 multipurpose copy paper, 500 sheets/ream.',
  },
  {
    id: 'p15',
    name: 'Ergonomic Office Chair',
    sku: 'FN-CH-016',
    category: 'Furniture',
    location: 'Faculty Room',
    quantity: 32,
    minLevel: 8,
    unit: 'units',
    updated: 'Nov 11, 2026',
    icon: 'box',
    description: 'Mesh-back swivel faculty chair with lumbar support.',
  },
  {
    id: 'p16',
    name: 'Digital Microscope',
    sku: 'LB-MS-017',
    category: 'Lab Equipment',
    location: 'Science Lab 1',
    quantity: 18,
    minLevel: 6,
    unit: 'units',
    updated: 'Nov 10, 2026',
    icon: 'box',
    description: 'Binocular compound microscope with USB camera.',
  },
  {
    id: 'p17',
    name: 'Shure SM58 Microphone',
    sku: 'AV-MC-018',
    category: 'AV Equipment',
    location: 'Auditorium',
    quantity: 11,
    minLevel: 4,
    unit: 'units',
    updated: 'Nov 09, 2026',
    icon: 'projector',
    description: 'Dynamic vocal microphone for auditorium events.',
  },
  {
    id: 'p18',
    name: 'APC UPS 650VA',
    sku: 'IT-UP-019',
    category: 'IT Equipment',
    location: 'Computer Lab 1',
    quantity: 24,
    minLevel: 8,
    unit: 'units',
    updated: 'Nov 08, 2026',
    icon: 'cpu',
    description: 'Uninterruptible power supply backup with surge protection.',
  },
  {
    id: 'p19',
    name: 'Brother P-Touch Labeler',
    sku: 'OF-LB-020',
    category: 'Office Equipment',
    location: 'Admin Office',
    quantity: 9,
    minLevel: 3,
    unit: 'units',
    updated: 'Nov 07, 2026',
    icon: 'box',
    description: 'Desktop asset tag thermal label printer.',
  },
  {
    id: 'p20',
    name: 'Cat6 Ethernet Patch Cord',
    sku: 'NW-CB-021',
    category: 'Networking',
    location: 'Computer Lab 3',
    quantity: 65,
    minLevel: 20,
    unit: 'units',
    updated: 'Nov 06, 2026',
    icon: 'box',
    description: '3-meter shielded Cat6 network patch cable.',
  },
  {
    id: 'p21',
    name: 'Canon EOS M50 Camera',
    sku: 'AV-CM-022',
    category: 'AV Equipment',
    location: 'AV Room',
    quantity: 9,
    minLevel: 3,
    unit: 'units',
    updated: 'Nov 05, 2026',
    icon: 'projector',
    description: 'Mirrorless documentation camera for university events.',
  },
];

const INITIAL_TRANSACTIONS = [
  {
    id: 't1',
    productId: 'p1',
    itemName: 'Logitech K120 Keyboard',
    sku: 'IT-KB-001',
    icon: 'keyboard',
    type: 'Stock In',
    qty: 25,
    date: 'Nov 17, 2026',
    status: 'Completed',
    reference: 'PO-2026-114',
    note: 'New batch for Computer Lab 1',
  },
  {
    id: 't2',
    productId: 'p2',
    itemName: 'Dell 24" LED Monitor',
    sku: 'IT-MN-004',
    icon: 'monitor',
    type: 'Stock Out',
    qty: 10,
    date: 'Nov 17, 2026',
    status: 'Completed',
    reference: 'REQ-408',
    note: 'Issued to CEIT Lab 2',
  },
  {
    id: 't3',
    productId: 'p3',
    itemName: 'Epson EB-E01 Projector',
    sku: 'AV-PJ-002',
    icon: 'projector',
    type: 'Stock Out',
    qty: 2,
    date: 'Nov 17, 2026',
    status: 'Pending',
    reference: 'REQ-412',
    note: 'Reserved for College Assembly',
  },
  {
    id: 't4',
    productId: 'p4',
    itemName: 'Logitech B100 Mouse',
    sku: 'IT-MS-003',
    icon: 'mouse',
    type: 'Stock In',
    qty: 50,
    date: 'Nov 16, 2026',
    status: 'Completed',
    reference: 'PO-2026-109',
    note: 'Quarterly restock delivery',
  },
  {
    id: 't5',
    productId: 'p5',
    itemName: 'Dell OptiPlex 7010',
    sku: 'IT-SU-005',
    icon: 'cpu',
    type: 'Stock In',
    qty: 15,
    date: 'Nov 16, 2026',
    status: 'Completed',
    reference: 'PO-2026-105',
    note: 'Computer Lab 3 expansion',
  },
  {
    id: 't6',
    productId: 'p6',
    itemName: 'A4Tech USB Keyboard',
    sku: 'IT-KB-006',
    icon: 'keyboard',
    type: 'Stock Out',
    qty: 8,
    date: 'Nov 16, 2026',
    status: 'Completed',
    reference: 'REQ-399',
    note: 'Replacement units for Lab 2',
  },
  {
    id: 't7',
    productId: 'p14',
    itemName: 'Bond Paper A4 (Ream)',
    sku: 'SP-PP-015',
    icon: 'box',
    type: 'Stock In',
    qty: 60,
    date: 'Nov 15, 2026',
    status: 'Completed',
    reference: 'PO-2026-102',
    note: 'Admin supply replenishment',
  },
  {
    id: 't8',
    productId: 'p7',
    itemName: 'Epson EcoTank L3250',
    sku: 'OF-PR-007',
    icon: 'box',
    type: 'Stock Out',
    qty: 4,
    date: 'Nov 15, 2026',
    status: 'Completed',
    reference: 'REQ-391',
    note: 'Assigned to Deans Office',
  },
  {
    id: 't9',
    productId: 'p11',
    itemName: 'Lab Beaker 500ml',
    sku: 'LB-GL-012',
    icon: 'box',
    type: 'Stock Out',
    qty: 12,
    date: 'Nov 14, 2026',
    status: 'Pending',
    reference: 'REQ-387',
    note: 'Chemistry practical session',
  },
  {
    id: 't10',
    productId: 'p13',
    itemName: 'Cisco Catalyst 2960',
    sku: 'NW-SW-014',
    icon: 'cpu',
    type: 'Stock In',
    qty: 6,
    date: 'Nov 12, 2026',
    status: 'Completed',
    reference: 'PO-2026-098',
    note: 'Campus backbone upgrade',
  },
];

const INITIAL_CATEGORIES = [
  {
    id: 'c1',
    name: 'IT Equipment',
    code: 'IT',
    description: 'Desktops, monitors, keyboards, mice, and UPS units.',
  },
  {
    id: 'c2',
    name: 'AV Equipment',
    code: 'AV',
    description: 'Projectors, microphones, cameras, and display cables.',
  },
  {
    id: 'c3',
    name: 'Office Equipment',
    code: 'OF',
    description: 'Printers, scanners, laminators, and labelers.',
  },
  {
    id: 'c4',
    name: 'Networking',
    code: 'NW',
    description: 'Switches, routers, access points, and patch cables.',
  },
  {
    id: 'c5',
    name: 'Office Supplies',
    code: 'SP',
    description: 'Paper, markers, folders, and daily consumables.',
  },
  {
    id: 'c6',
    name: 'Lab Equipment',
    code: 'LB',
    description: 'Microscopes, glassware, and scientific instruments.',
  },
  {
    id: 'c7',
    name: 'Furniture',
    code: 'FN',
    description: 'Faculty chairs, lab tables, and storage cabinets.',
  },
  {
    id: 'c8',
    name: 'Maintenance Tools',
    code: 'MT',
    description: 'Multimeters, toolkits, and repair supplies.',
  },
  {
    id: 'c9',
    name: 'Security Systems',
    code: 'SC',
    description: 'CCTV cameras, NVR units, and access badges.',
  },
  {
    id: 'c10',
    name: 'Medical & Clinic',
    code: 'MD',
    description: 'First aid kits, thermometers, and clinic supplies.',
  },
  {
    id: 'c11',
    name: 'Sports Gear',
    code: 'SG',
    description: 'Athletics and PE department equipment.',
  },
  {
    id: 'c12',
    name: 'Library Assets',
    code: 'LI',
    description: 'Barcode scanners and archival supplies.',
  },
];

const LOCATIONS = [
  'Computer Lab 1',
  'Computer Lab 2',
  'Computer Lab 3',
  'AV Room',
  'Admin Office',
  'Server Room',
  'Supply Room',
  'Science Lab 1',
  'Registrar Office',
  'Faculty Room',
  'Auditorium',
];

const INITIAL_USERS = [
  {
    id: 'u1',
    name: 'Loreyn E',
    email: 'loreyn.e@cvsu.edu.ph',
    role: 'Administrator',
    department: 'Property & Supply Office',
    status: 'Active',
    lastActive: 'Online now',
  },
  {
    id: 'u2',
    name: 'Marco Villanueva',
    email: 'm.villanueva@cvsu.edu.ph',
    role: 'Inventory Staff',
    department: 'IT & Computer Labs',
    status: 'Active',
    lastActive: '2 hours ago',
  },
  {
    id: 'u3',
    name: 'Clarisse Mendoza',
    email: 'c.mendoza@cvsu.edu.ph',
    role: 'Custodian',
    department: 'AV & Auditorium',
    status: 'Active',
    lastActive: 'Today, 9:15 AM',
  },
  {
    id: 'u4',
    name: 'Rafael Santos',
    email: 'r.santos@cvsu.edu.ph',
    role: 'Lab Technician',
    department: 'College of Science',
    status: 'Active',
    lastActive: 'Nov 16, 2026',
  },
  {
    id: 'u5',
    name: 'Andrea Bautista',
    email: 'a.bautista@cvsu.edu.ph',
    role: 'Viewer',
    department: 'Internal Audit',
    status: 'Inactive',
    lastActive: 'Nov 10, 2026',
  },
];

const appState = {
  isAuthenticated: false,
  currentPage: 'dashboard', // dashboard | inventory | add-product | stock-in | stock-out | transactions | categories | users | reports | settings
  products: structuredClone(INITIAL_PRODUCTS),
  transactions: structuredClone(INITIAL_TRANSACTIONS),
  categories: structuredClone(INITIAL_CATEGORIES),
  users: structuredClone(INITIAL_USERS),
  stockDelta: 0,
  productCountDelta: 0,
  transactionCountDelta: 0,
  dateRange: 'Nov 1 – Nov 17, 2026',

  // Dashboard activity filter & pagination
  dashTxFilter: 'All',
  dashTxPage: 1,

  // Inventory table filters
  invSearch: '',
  invCategory: 'All',
  invStatus: 'All',
  invLocation: 'All',
  invPage: 1,
  invPerPage: 7,
  selectedIds: new Set(),
  openMenuId: null,

  // Transactions page filter
  txSearch: '',
  txTypeFilter: 'All',
  txStatusFilter: 'All',

  // Add/Edit product draft
  editingProductId: null,
  uploadedImageDataUrl: null,

  // Settings
  settings: {
    campusName: 'Cavite State University — Main Campus',
    autoLowStockAlert: true,
    requireApprovalStockOut: false,
    defaultMinStock: 10,
  },
};

// =========================================================================
// COMPUTED HELPERS
// =========================================================================
function getStatus(product) {
  if (product.quantity <= 0) return 'Out of Stock';
  return product.quantity < product.minLevel ? 'Low Stock' : 'In Stock';
}

function getLowStockProducts() {
  return appState.products.filter((p) => p.quantity < p.minLevel);
}

function getMetrics() {
  const totalProducts = appState.products.length;
  const availableStocks = appState.products.reduce(
    (sum, product) => sum + Number(product.quantity || 0),
    0
  );
  const lowStockCount = getLowStockProducts().length;
  const totalTransactions = appState.transactions.length;
  const categoriesCount = appState.categories.length;
  return { totalProducts, availableStocks, lowStockCount, totalTransactions, categoriesCount };
}

function formatNumber(num) {
  return Number(num).toLocaleString('en-US');
}

function todayFormatted() {
  return 'Nov 17, 2026';
}

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function showToast(message, tone = 'success') {
  const stack = document.getElementById('toast-stack');
  const el = document.createElement('div');
  el.className = 'toast';
  const dotColor = tone === 'warning' ? '#f59e0b' : tone === 'error' ? '#ef4444' : '#34d399';
  el.innerHTML = `<span style="width:8px;height:8px;border-radius:50%;background:${dotColor};flex-shrink:0;"></span><span>${escapeHtml(message)}</span>`;
  stack.appendChild(el);
  setTimeout(() => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(6px)';
    el.style.transition = 'all 0.2s ease';
    setTimeout(() => el.remove(), 220);
  }, 3000);
}

// =========================================================================
// NAVIGATION & AUTHENTICATION
// =========================================================================
const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: 'grid', title: 'Dashboard' },
  {
    id: 'inventory',
    label: 'Inventory',
    icon: 'box',
    title: 'Inventory Management',
    badge: () => getMetrics().totalProducts,
  },
  { id: 'stock-in', label: 'Stock In', icon: 'stockIn', title: 'Stock In' },
  { id: 'stock-out', label: 'Stock Out', icon: 'stockOut', title: 'Stock Out' },
  { id: 'transactions', label: 'Transactions', icon: 'swap', title: 'Transactions' },
  { id: 'categories', label: 'Categories', icon: 'layers', title: 'Categories' },
  { id: 'users', label: 'User Management', icon: 'users', title: 'User Management' },
  { id: 'reports', label: 'Reports', icon: 'report', title: 'Reports' },
  { id: 'settings', label: 'Settings', icon: 'settings', title: 'Settings' },
];

function navigate(page, opts = {}) {
  appState.currentPage = page;
  appState.openMenuId = null;

  if (opts.invStatus) appState.invStatus = opts.invStatus;
  if (opts.invCategory) appState.invCategory = opts.invCategory;
  if (page === 'add-product' && !opts.keepEdit) {
    appState.editingProductId = null;
    appState.uploadedImageDataUrl = null;
  }

  closeMobileSidebar();
  renderSidebar();
  renderTopbar();
  renderPage();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderSidebar() {
  const nav = document.getElementById('sidebar-nav');
  nav.innerHTML = NAV_ITEMS.map((item) => {
    const isActive =
      appState.currentPage === item.id ||
      (appState.currentPage === 'add-product' && item.id === 'inventory');
    const badgeHtml = item.badge ? `<span class="nav-badge">${item.badge()}</span>` : '';
    return `
          <button class="nav-item ${isActive ? 'active' : ''}" data-nav="${item.id}">
            <span class="nav-item-left">
              <span>${ICONS[item.icon]}</span>
              <span>${item.label}</span>
            </span>
            ${badgeHtml}
          </button>
        `;
  }).join('');

  nav.querySelectorAll('[data-nav]').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (btn.dataset.nav === 'inventory') {
        appState.invStatus = 'All';
        appState.invCategory = 'All';
        appState.invLocation = 'All';
        appState.invSearch = '';
        appState.invPage = 1;
      }
      navigate(btn.dataset.nav);
    });
  });
}

function renderTopbar() {
  const titleEl = document.getElementById('topbar-title');
  if (appState.currentPage === 'add-product') {
    titleEl.textContent = 'Inventory';
  } else {
    const found = NAV_ITEMS.find((n) => n.id === appState.currentPage);
    titleEl.textContent = found ? found.title : 'Dashboard';
  }

  const lowCount = getLowStockProducts().length;
  const dot = document.getElementById('notif-dot');
  dot.classList.toggle('hidden', lowCount === 0);
}

// =========================================================================
// PAGE RENDERERS
// =========================================================================
function renderPage() {
  const container = document.getElementById('page-content');
  switch (appState.currentPage) {
    case 'dashboard':
      renderDashboard(container);
      break;
    case 'inventory':
      renderInventory(container);
      break;
    case 'add-product':
      renderAddProduct(container);
      break;
    case 'stock-in':
      renderStockMovement(container, 'Stock In');
      break;
    case 'stock-out':
      renderStockMovement(container, 'Stock Out');
      break;
    case 'transactions':
      renderTransactionsPage(container);
      break;
    case 'categories':
      renderCategoriesPage(container);
      break;
    case 'users':
      renderUsersPage(container);
      break;
    case 'reports':
      renderReportsPage(container);
      break;
    case 'settings':
      renderSettingsPage(container);
      break;
    default:
      renderDashboard(container);
  }
  hydrateIcons(container);
}

// -------------------------------------------------------------------------
// 1. DASHBOARD
// -------------------------------------------------------------------------
function renderDashboard(container) {
  const m = getMetrics();
  const lowItems = getLowStockProducts();
  const filteredTx = appState.transactions.filter(
    (t) => appState.dashTxFilter === 'All' || t.type === appState.dashTxFilter
  );
  const txPerPage = 6;
  const totalTxPages = Math.max(1, Math.ceil(filteredTx.length / txPerPage));
  appState.dashTxPage = Math.min(appState.dashTxPage, totalTxPages);
  const visibleTx = filteredTx.slice(
    (appState.dashTxPage - 1) * txPerPage,
    appState.dashTxPage * txPerPage
  );

  container.innerHTML = `
        <div class="page-header">
          <div>
            <div class="page-eyebrow">Inventory Overview</div>
            <h1 class="page-title">Welcome back, Loreyn</h1>
            <p class="page-subtitle">Here's what's happening with your campus inventory today.</p>
          </div>
          <div class="page-actions">
            <button id="dash-date-btn" class="date-pill" type="button">
              <span style="color:var(--text-muted);display:flex;">${ICONS.calendar}</span>
              <span>${appState.dateRange}</span>
              <span style="color:var(--text-muted);display:flex;">${ICONS.chevronDown}</span>
            </button>
            <button id="dash-add-btn" class="btn btn-primary" type="button">
              <span>${ICONS.plus}</span>
              <span>Add new item</span>
            </button>
          </div>
        </div>

        <div class="kpi-grid">
          <div class="card kpi-card">
            <div class="kpi-top">
              <div>
                <div class="kpi-label">Total Products</div>
                <div class="kpi-value">${formatNumber(m.totalProducts)}</div>
              </div>
              <div class="kpi-icon-box kpi-icon-slate">${ICONS.box}</div>
            </div>
            <div class="kpi-footer">
              <span class="kpi-trend-up">${ICONS.trendUp} ${12 + appState.productCountDelta}</span>
              <span>new products this month</span>
            </div>
          </div>

          <div class="card kpi-card">
            <div class="kpi-top">
              <div>
                <div class="kpi-label">Available Stocks</div>
                <div class="kpi-value">${formatNumber(m.availableStocks)}</div>
              </div>
              <div class="kpi-icon-box kpi-icon-green">${ICONS.layers}</div>
            </div>
            <div class="kpi-footer">
              <span class="kpi-trend-up">${ICONS.trendUp} 8.2%</span>
              <span>vs. last month</span>
            </div>
          </div>

          <div class="card kpi-card">
            <div class="kpi-top">
              <div>
                <div class="kpi-label">Low Stock Items</div>
                <div class="kpi-value">${formatNumber(m.lowStockCount)}</div>
              </div>
              <div class="kpi-icon-box kpi-icon-amber">${ICONS.warning}</div>
            </div>
            <div class="kpi-footer">
              <span class="kpi-trend-warn">• ${Math.min(4, m.lowStockCount)} items</span>
              <span>need immediate attention</span>
            </div>
          </div>

          <div class="card kpi-card">
            <div class="kpi-top">
              <div>
                <div class="kpi-label">Total Transactions</div>
                <div class="kpi-value">${formatNumber(m.totalTransactions)}</div>
              </div>
              <div class="kpi-icon-box kpi-icon-slate">${ICONS.swap}</div>
            </div>
            <div class="kpi-footer">
              <span class="kpi-trend-up">${ICONS.trendUp} ${18 + appState.transactionCountDelta}</span>
              <span>transactions today</span>
            </div>
          </div>
        </div>

        <div class="dashboard-grid">
          <div class="card">
            <div class="panel-header">
              <div>
                <div class="panel-title">Recent Inventory Activities</div>
                <div class="panel-subtitle">The latest stock movements across your campus.</div>
              </div>
              <div style="position:relative;">
                <button id="dash-filter-btn" class="btn btn-secondary btn-sm" type="button">
                  <span>${ICONS.filter}</span>
                  <span>${appState.dashTxFilter === 'All' ? 'Filter' : appState.dashTxFilter}</span>
                </button>
              </div>
            </div>

            <div class="table-responsive">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Item Name</th>
                    <th>Transaction Type</th>
                    <th>Quantity</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  ${visibleTx
                    .map((tx) => {
                      const isIn = tx.type === 'Stock In';
                      const statusBadge =
                        tx.status === 'Completed'
                          ? `<span class="badge badge-green"><span class="badge-dot"></span>Completed</span>`
                          : `<span class="badge badge-amber"><span class="badge-dot"></span>Pending</span>`;
                      return `
                      <tr>
                        <td>
                          <div class="item-cell">
                            <div class="item-thumb">${ICONS[tx.icon] || ICONS.box}</div>
                            <div>
                              <div class="item-name">${escapeHtml(tx.itemName)}</div>
                              <div class="item-sku">${escapeHtml(tx.sku)}</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span class="tx-type ${isIn ? 'tx-in' : 'tx-out'}">
                            ${isIn ? ICONS.arrowDown : ICONS.arrowUp}
                            <span>${tx.type}</span>
                          </span>
                        </td>
                        <td>
                          <span class="qty-strong">${isIn ? '+' : '−'}${tx.qty}</span>
                        </td>
                        <td style="white-space:nowrap;">${tx.date}</td>
                        <td>${statusBadge}</td>
                      </tr>
                    `;
                    })
                    .join('')}
                </tbody>
              </table>
            </div>

            <div class="table-footer">
              <span>Showing ${(appState.dashTxPage - 1) * txPerPage + 1}–${Math.min(appState.dashTxPage * txPerPage, filteredTx.length)} of ${m.totalTransactions} transactions</span>
              <div style="display:flex;align-items:center;gap:14px;">
                <button id="view-all-tx-btn" class="link-btn" style="display:inline-flex;align-items:center;gap:6px;font-size:12.5px;">
                  <span>View all transactions</span>
                  <span>${ICONS.arrowRight}</span>
                </button>
                <div class="pagination-controls">
                  <button class="page-btn" id="dash-tx-prev" ${appState.dashTxPage <= 1 ? 'disabled' : ''}>${ICONS.chevronLeft}</button>
                  <button class="page-btn" id="dash-tx-next" ${appState.dashTxPage >= totalTxPages ? 'disabled' : ''}>${ICONS.chevronRight}</button>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="panel-header">
              <div>
                <div class="panel-title">Low Stock Items</div>
                <div class="panel-subtitle">Items below their minimum stock level.</div>
              </div>
              <span class="badge badge-amber" style="border-radius:7px;font-weight:700;">
                ${String(lowItems.length).padStart(2, '0')}
              </span>
            </div>

            <div class="low-stock-list">
              ${lowItems
                .slice(0, 4)
                .map((item) => {
                  const pct = Math.max(
                    8,
                    Math.min(100, Math.round((item.quantity / item.minLevel) * 100))
                  );
                  return `
                  <div class="low-stock-item">
                    <div class="low-stock-row">
                      <div class="item-cell">
                        <div class="item-thumb">${item.image ? `<img src="${item.image}" alt=""/>` : ICONS[item.icon] || ICONS.box}</div>
                        <div>
                          <div class="item-name">${escapeHtml(item.name)}</div>
                          <div class="item-sku">${escapeHtml(item.sku)} · Min. ${item.minLevel} ${item.unit}</div>
                        </div>
                      </div>
                      <button class="low-stock-left" data-quick-restock="${item.id}" title="Click to restock">${item.quantity} left</button>
                    </div>
                    <div class="progress-track">
                      <div class="progress-fill" style="width:${pct}%"></div>
                    </div>
                  </div>
                `;
                })
                .join('')}
              ${lowItems.length === 0 ? `<div style="padding:18px 0;text-align:center;color:var(--text-muted);font-size:13px;">All items are well stocked.</div>` : ''}
            </div>

            <div class="low-stock-footer">
              <button id="review-low-stock-btn" class="btn btn-soft low-stock-cta" type="button">
                <span></span>
                <span>Review low stock items</span>
                <span>${ICONS.arrowRight}</span>
              </button>
              <div class="low-stock-caption">
                Showing ${Math.min(4, lowItems.length)} of ${lowItems.length} items requiring restock
              </div>
            </div>
          </div>
        </div>
      `;

  document.getElementById('dash-add-btn').addEventListener('click', () => navigate('add-product'));
  document
    .getElementById('view-all-tx-btn')
    .addEventListener('click', () => navigate('transactions'));
  document.getElementById('review-low-stock-btn').addEventListener('click', () => {
    appState.invStatus = 'Low Stock';
    appState.invPage = 1;
    navigate('inventory', { invStatus: 'Low Stock' });
  });

  document.getElementById('dash-tx-prev').addEventListener('click', () => {
    if (appState.dashTxPage > 1) {
      appState.dashTxPage--;
      renderPage();
    }
  });
  document.getElementById('dash-tx-next').addEventListener('click', () => {
    if (appState.dashTxPage < totalTxPages) {
      appState.dashTxPage++;
      renderPage();
    }
  });

  document.getElementById('dash-filter-btn').addEventListener('click', () => {
    const cycle = ['All', 'Stock In', 'Stock Out'];
    const next = cycle[(cycle.indexOf(appState.dashTxFilter) + 1) % cycle.length];
    appState.dashTxFilter = next;
    appState.dashTxPage = 1;
    renderPage();
    showToast(`Activity filter: ${next}`);
  });

  document.getElementById('dash-date-btn').addEventListener('click', () => {
    const ranges = ['Nov 1 – Nov 17, 2026', 'Oct 1 – Oct 31, 2026', 'Q4 2026 (Oct – Dec)'];
    const next = ranges[(ranges.indexOf(appState.dateRange) + 1) % ranges.length];
    appState.dateRange = next;
    renderPage();
  });

  container.querySelectorAll('[data-quick-restock]').forEach((btn) => {
    btn.addEventListener('click', () => openQuickAdjustModal(btn.dataset.quickRestock, 'Stock In'));
  });
}

// -------------------------------------------------------------------------
// 2. INVENTORY MANAGEMENT
// -------------------------------------------------------------------------
function getFilteredInventory() {
  return appState.products.filter((p) => {
    const q = appState.invSearch.trim().toLowerCase();
    const matchSearch =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.sku.toLowerCase().includes(q) ||
      p.location.toLowerCase().includes(q);
    const matchCat = appState.invCategory === 'All' || p.category === appState.invCategory;
    const matchLoc = appState.invLocation === 'All' || p.location === appState.invLocation;
    const status = getStatus(p);
    const matchStatus = appState.invStatus === 'All' || status === appState.invStatus;
    return matchSearch && matchCat && matchLoc && matchStatus;
  });
}

function renderInventory(container) {
  const m = getMetrics();
  const filtered = getFilteredInventory();
  const totalPages = Math.max(1, Math.ceil(filtered.length / appState.invPerPage));
  appState.invPage = Math.min(appState.invPage, totalPages);
  const startIdx = (appState.invPage - 1) * appState.invPerPage;
  const pageItems = filtered.slice(startIdx, startIdx + appState.invPerPage);
  const allPageSelected =
    pageItems.length > 0 && pageItems.every((i) => appState.selectedIds.has(i.id));

  container.innerHTML = `
        <div class="page-header">
          <div>
            <div class="page-eyebrow">Workspace / Inventory</div>
            <h1 class="page-title">Inventory Management</h1>
            <p class="page-subtitle">Manage university equipment, stock levels, and product records.</p>
          </div>
          <div class="page-actions">
            <button id="inv-add-btn" class="btn btn-primary" type="button">
              <span>${ICONS.plus}</span>
              <span>Add new product</span>
            </button>
          </div>
        </div>

        <div class="kpi-grid">
          <div class="card kpi-card">
            <div class="kpi-top" style="margin-bottom:0;">
              <div style="display:flex;align-items:center;gap:14px;">
                <div class="kpi-icon-box kpi-icon-slate">${ICONS.box}</div>
                <div>
                  <div class="kpi-label" style="margin-bottom:4px;">Total Products</div>
                  <div class="kpi-value">${formatNumber(m.totalProducts)}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="card kpi-card">
            <div class="kpi-top" style="margin-bottom:0;">
              <div style="display:flex;align-items:center;gap:14px;">
                <div class="kpi-icon-box kpi-icon-green">${ICONS.layers}</div>
                <div>
                  <div class="kpi-label" style="margin-bottom:4px;">Available Stocks</div>
                  <div class="kpi-value">${formatNumber(m.availableStocks)}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="card kpi-card">
            <div class="kpi-top" style="margin-bottom:0;">
              <div style="display:flex;align-items:center;gap:14px;">
                <div class="kpi-icon-box kpi-icon-amber">${ICONS.warning}</div>
                <div>
                  <div class="kpi-label" style="margin-bottom:4px;">Low Stock Items</div>
                  <div class="kpi-value">${formatNumber(m.lowStockCount)}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="card kpi-card">
            <div class="kpi-top" style="margin-bottom:0;">
              <div style="display:flex;align-items:center;gap:14px;">
                <div class="kpi-icon-box kpi-icon-slate">${ICONS.layers}</div>
                <div>
                  <div class="kpi-label" style="margin-bottom:4px;">Categories</div>
                  <div class="kpi-value">${formatNumber(m.categoriesCount)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="table-toolbar">
            <div class="toolbar-filters">
              <div class="input-wrap toolbar-search">
                <span class="input-icon-left">${ICONS.search}</span>
                <input
                  id="inv-search-input"
                  type="text"
                  class="form-control has-left-icon"
                  style="height:38px;"
                  placeholder="Search by product name or code..."
                  value="${escapeHtml(appState.invSearch)}"
                />
              </div>

              <select id="inv-cat-filter" class="form-control toolbar-select">
                <option value="All">All categories</option>
                ${appState.categories.map((c) => `<option value="${escapeHtml(c.name)}" ${appState.invCategory === c.name ? 'selected' : ''}>${escapeHtml(c.name)}</option>`).join('')}
              </select>

              <select id="inv-status-filter" class="form-control toolbar-select">
                <option value="All" ${appState.invStatus === 'All' ? 'selected' : ''}>All stock statuses</option>
                <option value="In Stock" ${appState.invStatus === 'In Stock' ? 'selected' : ''}>In Stock</option>
                <option value="Low Stock" ${appState.invStatus === 'Low Stock' ? 'selected' : ''}>Low Stock</option>
                <option value="Out of Stock" ${appState.invStatus === 'Out of Stock' ? 'selected' : ''}>Out of Stock</option>
              </select>

              <select id="inv-loc-filter" class="form-control toolbar-select">
                <option value="All">All locations</option>
                ${LOCATIONS.map((l) => `<option value="${escapeHtml(l)}" ${appState.invLocation === l ? 'selected' : ''}>${escapeHtml(l)}</option>`).join('')}
              </select>
            </div>

            <button id="inv-export-btn" class="btn btn-secondary" type="button" style="height:38px;">
              <span>${ICONS.download}</span>
              <span>Export</span>
            </button>
          </div>

          ${
            appState.selectedIds.size > 0
              ? `
            <div class="bulk-bar">
              <span><strong>${appState.selectedIds.size}</strong> product(s) selected</span>
              <div style="display:flex;gap:8px;">
                <button id="bulk-clear-btn" class="btn btn-sm btn-secondary" style="height:28px;">Clear selection</button>
                <button id="bulk-delete-btn" class="btn btn-sm btn-danger" style="height:28px;">Delete selected</button>
              </div>
            </div>
          `
              : ''
          }

          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  <th style="width:42px;">
                    <input type="checkbox" id="inv-select-all" ${allPageSelected ? 'checked' : ''} style="width:15px;height:15px;accent-color:var(--navy-900);cursor:pointer;" />
                  </th>
                  <th>Product name</th>
                  <th>Category</th>
                  <th>Location</th>
                  <th>Available</th>
                  <th>Status</th>
                  <th>Last updated</th>
                  <th style="width:52px;"></th>
                </tr>
              </thead>
              <tbody>
                ${pageItems
                  .map((item) => {
                    const status = getStatus(item);
                    const isLow = status !== 'In Stock';
                    const badgeClass =
                      status === 'In Stock'
                        ? 'badge-green'
                        : status === 'Low Stock'
                          ? 'badge-amber'
                          : 'badge-red';
                    return `
                    <tr>
                      <td>
                        <input type="checkbox" class="inv-row-check" data-id="${item.id}" ${appState.selectedIds.has(item.id) ? 'checked' : ''} style="width:15px;height:15px;accent-color:var(--navy-900);cursor:pointer;" />
                      </td>
                      <td>
                        <div class="item-cell">
                          <div class="item-thumb">${item.image ? `<img src="${item.image}" alt=""/>` : ICONS[item.icon] || ICONS.box}</div>
                          <div>
                            <div class="item-name">${escapeHtml(item.name)}</div>
                            <div class="item-sku">${escapeHtml(item.sku)}</div>
                          </div>
                        </div>
                      </td>
                      <td>${escapeHtml(item.category)}</td>
                      <td>${escapeHtml(item.location)}</td>
                      <td>
                        <span class="qty-strong ${isLow ? 'qty-low' : ''}">${item.quantity}</span>
                        <span class="qty-unit">${escapeHtml(item.unit)}</span>
                      </td>
                      <td>
                        <span class="badge ${badgeClass}"><span class="badge-dot"></span>${status}</span>
                      </td>
                      <td style="white-space:nowrap;">${item.updated}</td>
                      <td>
                        <div class="action-menu-wrap">
                          <button class="icon-dots-btn" data-menu-toggle="${item.id}" type="button">${ICONS.dots}</button>
                          ${
                            appState.openMenuId === item.id
                              ? `
                            <div class="dropdown-menu">
                              <button class="dropdown-item" data-action="stock-in" data-id="${item.id}">${ICONS.arrowDown} Quick Stock In</button>
                              <button class="dropdown-item" data-action="stock-out" data-id="${item.id}">${ICONS.arrowUp} Quick Stock Out</button>
                              <button class="dropdown-item" data-action="edit" data-id="${item.id}">${ICONS.edit} Edit product</button>
                              <button class="dropdown-item danger" data-action="delete" data-id="${item.id}">${ICONS.trash} Delete</button>
                            </div>
                          `
                              : ''
                          }
                        </div>
                      </td>
                    </tr>
                  `;
                  })
                  .join('')}
                ${
                  pageItems.length === 0
                    ? `
                  <tr>
                    <td colspan="8" style="text-align:center;padding:42px 18px;color:var(--text-muted);">
                      No products matched your current search or filter criteria.
                    </td>
                  </tr>
                `
                    : ''
                }
              </tbody>
            </table>
          </div>

          <div class="table-footer">
            <span>
              Showing ${filtered.length === 0 ? 0 : startIdx + 1}–${Math.min(startIdx + appState.invPerPage, filtered.length)} of ${filtered.length === appState.products.length ? m.totalProducts : filtered.length} products
            </span>
            <div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap;">
              <label style="display:inline-flex;align-items:center;gap:8px;">
                <span>Rows per page:</span>
                <select id="inv-per-page" class="form-control" style="height:30px;width:64px;padding:0 24px 0 10px;font-size:12.5px;">
                  ${[7, 10, 15].map((n) => `<option value="${n}" ${appState.invPerPage === n ? 'selected' : ''}>${n}</option>`).join('')}
                </select>
              </label>

              <div class="pagination-controls">
                <button class="page-btn" id="inv-prev-page" ${appState.invPage <= 1 ? 'disabled' : ''}>${ICONS.chevronLeft}</button>
                ${Array.from({ length: totalPages }, (_, i) => i + 1)
                  .map(
                    (p) => `
                  <button class="page-btn ${p === appState.invPage ? 'active' : ''}" data-inv-page="${p}">${p}</button>
                `
                  )
                  .join('')}
                <button class="page-btn" id="inv-next-page" ${appState.invPage >= totalPages ? 'disabled' : ''}>${ICONS.chevronRight}</button>
              </div>
            </div>
          </div>
        </div>
      `;

  // Bindings
  document.getElementById('inv-add-btn').addEventListener('click', () => navigate('add-product'));

  const searchInput = document.getElementById('inv-search-input');
  searchInput.addEventListener('input', (e) => {
    appState.invSearch = e.target.value;
    appState.invPage = 1;
    renderPage();
    const reFocus = document.getElementById('inv-search-input');
    reFocus.focus();
    reFocus.setSelectionRange(reFocus.value.length, reFocus.value.length);
  });

  document.getElementById('inv-cat-filter').addEventListener('change', (e) => {
    appState.invCategory = e.target.value;
    appState.invPage = 1;
    renderPage();
  });
  document.getElementById('inv-status-filter').addEventListener('change', (e) => {
    appState.invStatus = e.target.value;
    appState.invPage = 1;
    renderPage();
  });
  document.getElementById('inv-loc-filter').addEventListener('change', (e) => {
    appState.invLocation = e.target.value;
    appState.invPage = 1;
    renderPage();
  });
  document.getElementById('inv-per-page').addEventListener('change', (e) => {
    appState.invPerPage = Number(e.target.value);
    appState.invPage = 1;
    renderPage();
  });

  document
    .getElementById('inv-export-btn')
    .addEventListener('click', () => exportInventoryCSV(filtered));

  document.getElementById('inv-select-all').addEventListener('change', (e) => {
    pageItems.forEach((item) => {
      if (e.target.checked) appState.selectedIds.add(item.id);
      else appState.selectedIds.delete(item.id);
    });
    renderPage();
  });

  container.querySelectorAll('.inv-row-check').forEach((cb) => {
    cb.addEventListener('change', (e) => {
      if (e.target.checked) appState.selectedIds.add(cb.dataset.id);
      else appState.selectedIds.delete(cb.dataset.id);
      renderPage();
    });
  });

  const bulkClear = document.getElementById('bulk-clear-btn');
  if (bulkClear)
    bulkClear.addEventListener('click', () => {
      appState.selectedIds.clear();
      renderPage();
    });

  const bulkDel = document.getElementById('bulk-delete-btn');
  if (bulkDel)
    bulkDel.addEventListener('click', async () => {
      const ids = [...appState.selectedIds];
      if (!ids.length) return;
      try {
        for (const id of ids) {
          const response = await fetch('api.php?route=product-delete', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id }),
          });
          const data = await response.json();
          if (!response.ok) throw new Error(data.error || 'Could not delete product');
        }
        await hydrateFromApi();
        appState.selectedIds.clear();
        renderSidebar();
        renderTopbar();
        renderPage();
        showToast(`Deleted ${ids.length} product(s) from inventory.`);
      } catch (error) {
        showToast(error.message, 'error');
      }
    });

  container.querySelectorAll('[data-menu-toggle]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.menuToggle;
      appState.openMenuId = appState.openMenuId === id ? null : id;
      renderPage();
    });
  });

  container.querySelectorAll('[data-action]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const { action, id } = btn.dataset;
      appState.openMenuId = null;
      if (action === 'stock-in') openQuickAdjustModal(id, 'Stock In');
      if (action === 'stock-out') openQuickAdjustModal(id, 'Stock Out');
      if (action === 'edit') {
        appState.editingProductId = id;
        const prod = appState.products.find((p) => p.id === id);
        appState.uploadedImageDataUrl = prod?.image || null;
        navigate('add-product', { keepEdit: true });
      }
      if (action === 'delete') deleteProduct(id);
    });
  });

  container.querySelectorAll('[data-inv-page]').forEach((btn) => {
    btn.addEventListener('click', () => {
      appState.invPage = Number(btn.dataset.invPage);
      renderPage();
    });
  });
  document.getElementById('inv-prev-page').addEventListener('click', () => {
    if (appState.invPage > 1) {
      appState.invPage--;
      renderPage();
    }
  });
  document.getElementById('inv-next-page').addEventListener('click', () => {
    if (appState.invPage < totalPages) {
      appState.invPage++;
      renderPage();
    }
  });
}

// -------------------------------------------------------------------------
// 3. ADD / EDIT PRODUCT
// -------------------------------------------------------------------------
function renderAddProduct(container) {
  const editing = appState.editingProductId
    ? appState.products.find((p) => p.id === appState.editingProductId)
    : null;

  container.innerHTML = `
        <div class="page-header">
          <div>
            <div class="page-eyebrow">Inventory / ${editing ? 'Edit Product' : 'Add New Product'}</div>
            <h1 class="page-title">${editing ? 'Edit Product' : 'Add New Product'}</h1>
            <p class="page-subtitle">${editing ? 'Update equipment specifications, stock threshold, or storage location.' : 'Create a new equipment or supply record for your campus.'}</p>
          </div>
          <div class="page-actions">
            <button id="back-to-inv-btn" class="btn btn-secondary" type="button">
              <span>${ICONS.chevronLeft}</span>
              <span>Back to inventory</span>
            </button>
          </div>
        </div>

        <form id="product-form" novalidate>
          <div class="form-layout-grid">
            <div class="card form-card">
              <div class="form-section-title">Product information</div>
              <div class="form-section-sub">Enter the basic details of the equipment or supply.</div>

              <div class="form-group">
                <label class="form-label" for="prod-name">Product name *</label>
                <input id="prod-name" type="text" class="form-control" placeholder="e.g., Logitech K120 Keyboard" value="${escapeHtml(editing?.name || '')}" required />
              </div>

              <div class="form-row-2">
                <div class="form-group">
                  <label class="form-label" for="prod-sku">Product code / SKU *</label>
                  <input id="prod-sku" type="text" class="form-control" placeholder="e.g., IT-KB-008" value="${escapeHtml(editing?.sku || '')}" required />
                </div>
                <div class="form-group">
                  <label class="form-label" for="prod-cat">Category *</label>
                  <select id="prod-cat" class="form-control" required>
                    <option value="">Select a category</option>
                    ${appState.categories.map((c) => `<option value="${escapeHtml(c.name)}" ${editing?.category === c.name ? 'selected' : ''}>${escapeHtml(c.name)}</option>`).join('')}
                  </select>
                </div>
              </div>

              <div class="form-group" style="margin-bottom:0;">
                <label class="form-label" for="prod-desc">Description</label>
                <textarea id="prod-desc" class="form-control" placeholder="Add a brief description, specifications, or model details.">${escapeHtml(editing?.description || '')}</textarea>
              </div>

              <div class="form-divider"></div>

              <div class="form-section-title">Stock & location</div>
              <div class="form-section-sub" style="margin-bottom:18px;">Set initial quantities and alert thresholds.</div>

              <div class="form-row-3">
                <div class="form-group">
                  <label class="form-label" for="prod-qty">${editing ? 'Current quantity *' : 'Initial quantity *'}</label>
                  <input id="prod-qty" type="number" min="0" class="form-control" value="${editing ? editing.quantity : 0}" required />
                </div>
                <div class="form-group">
                  <label class="form-label" for="prod-min">Minimum stock level *</label>
                  <input id="prod-min" type="number" min="0" class="form-control" value="${editing ? editing.minLevel : appState.settings.defaultMinStock}" required />
                </div>
                <div class="form-group">
                  <label class="form-label" for="prod-unit">Unit of measurement *</label>
                  <select id="prod-unit" class="form-control" required>
                    ${['units', 'boxes', 'reams', 'sets', 'pairs', 'pcs']
                      .map(
                        (u) => `
                      <option value="${u}" ${(editing?.unit || 'units') === u ? 'selected' : ''}>${u === 'units' ? 'Unit(s)' : u.charAt(0).toUpperCase() + u.slice(1)}</option>
                    `
                      )
                      .join('')}
                  </select>
                </div>
              </div>

              <div class="form-group" style="margin-bottom:0;">
                <label class="form-label" for="prod-loc">Storage location *</label>
                <select id="prod-loc" class="form-control" required>
                  <option value="">Select a storage location</option>
                  ${LOCATIONS.map((l) => `<option value="${escapeHtml(l)}" ${editing?.location === l ? 'selected' : ''}>${escapeHtml(l)}</option>`).join('')}
                </select>
              </div>

              <div class="info-note">
                <span style="display:flex;color:var(--text-muted);">${ICONS.warning}</span>
                <span>Low stock alerts appear when quantity falls below the minimum stock level.</span>
              </div>
            </div>

            <div style="display:flex;flex-direction:column;gap:20px;">
              <div class="card form-card">
                <div class="form-section-title">Product image</div>
                <div class="form-section-sub">Optional · Add a photo for easy identification.</div>

                <input id="prod-img-input" type="file" accept="image/png,image/jpeg" class="hidden" />
                <div id="upload-dropzone" class="upload-dropzone">
                  ${
                    appState.uploadedImageDataUrl
                      ? `
                    <div class="upload-preview-wrap">
                      <img src="${appState.uploadedImageDataUrl}" class="upload-preview-img" alt="Preview" />
                    </div>
                    <div style="margin-top:10px;font-size:12.5px;font-weight:600;color:var(--text-primary);">Click to replace image</div>
                    <button type="button" id="remove-img-btn" class="link-btn" style="font-size:12px;color:#dc2626;margin-top:4px;">Remove photo</button>
                  `
                      : `
                    <div class="upload-icon-box">${ICONS.upload}</div>
                    <div style="font-size:13px;font-weight:600;color:var(--text-primary);">Click to upload or drag and drop</div>
                    <div style="font-size:11.5px;color:var(--text-muted);margin-top:3px;">PNG or JPG · Up to 5 MB</div>
                  `
                  }
                </div>

                <div style="display:flex;align-items:flex-start;gap:10px;margin-top:16px;">
                  <span style="color:var(--green-text);display:flex;margin-top:2px;">${ICONS.check}</span>
                  <div style="font-size:12px;color:var(--text-muted);line-height:1.45;">
                    A clear, square image works best.<br>You can also add an image later.
                  </div>
                </div>
              </div>

              <div class="card form-card">
                <div class="form-section-title">Before you save</div>
                <div class="form-section-sub">A few tips for accurate inventory records.</div>

                <div class="tips-list">
                  <div class="tip-item">
                    <div class="tip-check">${ICONS.check}</div>
                    <div>
                      <div class="tip-title">Use a unique product code</div>
                      <div class="tip-desc">Keep codes consistent with existing records.</div>
                    </div>
                  </div>
                  <div class="tip-item">
                    <div class="tip-check">${ICONS.check}</div>
                    <div>
                      <div class="tip-title">Set a practical minimum level</div>
                      <div class="tip-desc">Know when equipment needs restocking.</div>
                    </div>
                  </div>
                  <div class="tip-item">
                    <div class="tip-check">${ICONS.check}</div>
                    <div>
                      <div class="tip-title">Choose the correct location</div>
                      <div class="tip-desc">Make every item easy to locate and audit.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="form-bottom-bar">
            <span style="font-size:12.5px;color:var(--text-muted);">* Required fields</span>
            <div style="display:flex;align-items:center;gap:12px;">
              <button id="cancel-prod-btn" class="btn btn-secondary" type="button">Cancel</button>
              <button class="btn btn-primary" type="submit">
                <span>${ICONS.check}</span>
                <span>${editing ? 'Update product' : 'Save product'}</span>
              </button>
            </div>
          </div>
        </form>
      `;

  document.getElementById('back-to-inv-btn').addEventListener('click', () => navigate('inventory'));
  document.getElementById('cancel-prod-btn').addEventListener('click', () => navigate('inventory'));

  // Image upload handling
  const dropzone = document.getElementById('upload-dropzone');
  const fileInput = document.getElementById('prod-img-input');

  dropzone.addEventListener('click', (e) => {
    if (e.target.id === 'remove-img-btn') return;
    fileInput.click();
  });

  const removeBtn = document.getElementById('remove-img-btn');
  if (removeBtn) {
    removeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      appState.uploadedImageDataUrl = null;
      renderPage();
    });
  }

  const handleFile = (file) => {
    if (!file) return;
    if (!['image/png', 'image/jpeg'].includes(file.type)) {
      showToast('Please upload a PNG or JPG image.', 'error');
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
      appState.uploadedImageDataUrl = ev.target.result;
      renderPage();
      showToast('Product photo attached.');
    };
    reader.readAsDataURL(file);
  };

  fileInput.addEventListener('change', (e) => handleFile(e.target.files[0]));
  dropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropzone.classList.add('dragover');
  });
  dropzone.addEventListener('dragleave', () => dropzone.classList.remove('dragover'));
  dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropzone.classList.remove('dragover');
    handleFile(e.dataTransfer.files[0]);
  });

  // Submit handler: persist products to SQLite
  document.getElementById('product-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const nameEl = document.getElementById('prod-name');
    const skuEl = document.getElementById('prod-sku');
    const catEl = document.getElementById('prod-cat');
    const descEl = document.getElementById('prod-desc');
    const qtyEl = document.getElementById('prod-qty');
    const minEl = document.getElementById('prod-min');
    const unitEl = document.getElementById('prod-unit');
    const locEl = document.getElementById('prod-loc');

    let valid = true;
    [nameEl, skuEl, catEl, qtyEl, minEl, unitEl, locEl].forEach((el) => {
      el.classList.remove('is-invalid');
      if (!el.value.trim()) {
        el.classList.add('is-invalid');
        valid = false;
      }
    });
    if (!valid) {
      showToast('Please fill in all required fields.', 'error');
      return;
    }

    const payload = {
      id: editing?.id || null,
      name: nameEl.value.trim(),
      sku: skuEl.value.trim(),
      category: catEl.value,
      description: descEl.value.trim(),
      quantity: Math.max(0, Number(qtyEl.value)),
      minLevel: Math.max(0, Number(minEl.value)),
      unit: unitEl.value,
      location: locEl.value,
      image: appState.uploadedImageDataUrl,
      icon: catEl.value.includes('AV') ? 'projector' : catEl.value.includes('IT') ? 'cpu' : 'box',
      updated: todayFormatted(),
    };

    try {
      const response = await fetch('api.php?route=product-save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Could not save product');
      await hydrateFromApi();
      appState.editingProductId = null;
      appState.uploadedImageDataUrl = null;
      appState.invPage = 1;
      navigate('inventory');
      showToast(
        editing
          ? `Updated "${payload.name}" successfully.`
          : `Added "${payload.name}" to inventory.`
      );
    } catch (error) {
      showToast(error.message, 'error');
    }
  });
}

// -------------------------------------------------------------------------
// 4. STOCK IN / STOCK OUT WORKFLOWS
// -------------------------------------------------------------------------
function renderStockMovement(container, mode) {
  const isIn = mode === 'Stock In';
  const recentOfType = appState.transactions.filter((t) => t.type === mode).slice(0, 6);

  container.innerHTML = `
        <div class="page-header">
          <div>
            <div class="page-eyebrow">Workspace / ${mode}</div>
            <h1 class="page-title">${mode}</h1>
            <p class="page-subtitle">${isIn ? 'Record incoming deliveries, purchase orders, and restocked supplies.' : 'Log equipment issuances, classroom assignments, and supply withdrawals.'}</p>
          </div>
          <div class="page-actions">
            <button class="btn btn-secondary" id="goto-inv-btn" type="button">View Inventory</button>
          </div>
        </div>

        <div class="form-layout-grid">
          <form id="stock-move-form" class="card form-card">
            <div class="form-section-title">${isIn ? 'Record Stock In' : 'Record Stock Out'}</div>
            <div class="form-section-sub">Select an item and enter the movement details.</div>

            <div class="form-group">
              <label class="form-label" for="sm-product">Select product *</label>
              <select id="sm-product" class="form-control" required>
                <option value="">Choose an item from inventory...</option>
                ${appState.products
                  .map(
                    (p) => `
                  <option value="${p.id}">${escapeHtml(p.name)} (${escapeHtml(p.sku)}) — ${p.quantity} ${p.unit} available</option>
                `
                  )
                  .join('')}
              </select>
            </div>

            <div class="form-row-2">
              <div class="form-group">
                <label class="form-label" for="sm-qty">Quantity *</label>
                <input id="sm-qty" type="number" min="1" class="form-control" value="1" required />
              </div>
              <div class="form-group">
                <label class="form-label" for="sm-ref">${isIn ? 'Reference / PO Number' : 'Requisition / Recipient'}</label>
                <input id="sm-ref" type="text" class="form-control" placeholder="${isIn ? 'e.g., PO-2026-119' : 'e.g., CEIT Lab 2 / REQ-415'}" />
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="sm-status">Transaction status</label>
              <select id="sm-status" class="form-control">
                <option value="Completed">Completed (Update stock immediately)</option>
                <option value="Pending">Pending (Reserve / awaiting approval)</option>
              </select>
            </div>

            <div class="form-group" style="margin-bottom:22px;">
              <label class="form-label" for="sm-note">Remarks / Notes</label>
              <textarea id="sm-note" class="form-control" placeholder="Optional delivery details, room assignment, or condition notes."></textarea>
            </div>

            <button type="submit" class="btn btn-primary">
              <span>${isIn ? ICONS.arrowDown : ICONS.arrowUp}</span>
              <span>Submit ${mode}</span>
            </button>
          </form>

          <div class="card">
            <div class="panel-header">
              <div>
                <div class="panel-title">Recent ${mode} Logs</div>
                <div class="panel-subtitle">Latest ${mode.toLowerCase()} entries across campus.</div>
              </div>
            </div>
            <div style="padding: 0 22px 20px; display:flex; flex-direction:column; gap:14px;">
              ${recentOfType
                .map(
                  (t) => `
                <div style="display:flex;align-items:center;justify-content:space-between;padding-bottom:12px;border-bottom:1px solid #f1f5f9;">
                  <div>
                    <div class="item-name">${escapeHtml(t.itemName)}</div>
                    <div class="item-sku">${escapeHtml(t.reference || t.sku)} · ${t.date}</div>
                  </div>
                  <div style="text-align:right;">
                    <div class="qty-strong ${isIn ? 'tx-in' : ''}">${isIn ? '+' : '−'}${t.qty}</div>
                    <span class="badge ${t.status === 'Completed' ? 'badge-green' : 'badge-amber'}" style="margin-top:4px;">${t.status}</span>
                  </div>
                </div>
              `
                )
                .join('')}
            </div>
          </div>
        </div>
      `;

  document.getElementById('goto-inv-btn').addEventListener('click', () => navigate('inventory'));
  document.getElementById('stock-move-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const prodId = document.getElementById('sm-product').value;
    const qty = Number(document.getElementById('sm-qty').value);
    const ref = document.getElementById('sm-ref').value.trim();
    const status = document.getElementById('sm-status').value;
    const note = document.getElementById('sm-note').value.trim();
    const prod = appState.products.find((p) => p.id === prodId);
    if (!prod || qty <= 0) {
      showToast('Select a valid product and positive quantity.', 'error');
      return;
    }

    try {
      const response = await fetch('api.php?route=transaction-save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productId: prodId,
          type: mode,
          qty,
          status,
          date: todayFormatted(),
          reference: ref,
          note,
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Could not record transaction');
      await hydrateFromApi();
      renderSidebar();
      renderTopbar();
      renderPage();
      showToast(`${mode} recorded for ${prod.name} (${isIn ? '+' : '−'}${qty}).`);
    } catch (error) {
      showToast(error.message, 'error');
    }
  });
}

// -------------------------------------------------------------------------
// 5. TRANSACTIONS PAGE
// -------------------------------------------------------------------------
function renderTransactionsPage(container) {
  const m = getMetrics();
  const filtered = appState.transactions.filter((t) => {
    const q = appState.txSearch.trim().toLowerCase();
    const matchQ =
      !q ||
      t.itemName.toLowerCase().includes(q) ||
      t.sku.toLowerCase().includes(q) ||
      (t.reference || '').toLowerCase().includes(q);
    const matchType = appState.txTypeFilter === 'All' || t.type === appState.txTypeFilter;
    const matchStatus = appState.txStatusFilter === 'All' || t.status === appState.txStatusFilter;
    return matchQ && matchType && matchStatus;
  });

  container.innerHTML = `
        <div class="page-header">
          <div>
            <div class="page-eyebrow">Workspace / Transactions</div>
            <h1 class="page-title">Transactions</h1>
            <p class="page-subtitle">Complete audit trail of stock-ins, stock-outs, and pending campus requests.</p>
          </div>
          <div class="page-actions">
            <button id="tx-in-btn" class="btn btn-secondary" type="button">${ICONS.arrowDown} Stock In</button>
            <button id="tx-out-btn" class="btn btn-primary" type="button">${ICONS.arrowUp} Stock Out</button>
          </div>
        </div>

        <div class="card">
          <div class="table-toolbar">
            <div class="toolbar-filters">
              <div class="input-wrap toolbar-search">
                <span class="input-icon-left">${ICONS.search}</span>
                <input id="tx-search-input" class="form-control has-left-icon" style="height:38px;" placeholder="Search item, SKU, or reference..." value="${escapeHtml(appState.txSearch)}" />
              </div>
              <select id="tx-type-filter" class="form-control toolbar-select">
                <option value="All">All types</option>
                <option value="Stock In" ${appState.txTypeFilter === 'Stock In' ? 'selected' : ''}>Stock In</option>
                <option value="Stock Out" ${appState.txTypeFilter === 'Stock Out' ? 'selected' : ''}>Stock Out</option>
              </select>
              <select id="tx-status-filter" class="form-control toolbar-select">
                <option value="All">All statuses</option>
                <option value="Completed" ${appState.txStatusFilter === 'Completed' ? 'selected' : ''}>Completed</option>
                <option value="Pending" ${appState.txStatusFilter === 'Pending' ? 'selected' : ''}>Pending</option>
              </select>
            </div>
            <span style="font-size:12.5px;color:var(--text-muted);">${formatNumber(m.totalTransactions)} total records</span>
          </div>

          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th>Reference</th>
                  <th>Transaction Type</th>
                  <th>Quantity</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th style="text-align:right;">Action</th>
                </tr>
              </thead>
              <tbody>
                ${filtered
                  .map((t) => {
                    const isIn = t.type === 'Stock In';
                    return `
                    <tr>
                      <td>
                        <div class="item-cell">
                          <div class="item-thumb">${ICONS[t.icon] || ICONS.box}</div>
                          <div>
                            <div class="item-name">${escapeHtml(t.itemName)}</div>
                            <div class="item-sku">${escapeHtml(t.sku)}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div style="font-weight:500;color:var(--text-primary);">${escapeHtml(t.reference || '—')}</div>
                        <div class="item-sku">${escapeHtml(t.note || '')}</div>
                      </td>
                      <td>
                        <span class="tx-type ${isIn ? 'tx-in' : 'tx-out'}">
                          ${isIn ? ICONS.arrowDown : ICONS.arrowUp}
                          <span>${t.type}</span>
                        </span>
                      </td>
                      <td><span class="qty-strong">${isIn ? '+' : '−'}${t.qty}</span></td>
                      <td style="white-space:nowrap;">${t.date}</td>
                      <td>
                        <span class="badge ${t.status === 'Completed' ? 'badge-green' : 'badge-amber'}">
                          <span class="badge-dot"></span>${t.status}
                        </span>
                      </td>
                      <td style="text-align:right;">
                        ${
                          t.status === 'Pending'
                            ? `
                          <button class="btn btn-sm btn-primary" data-approve-tx="${t.id}" type="button">Approve</button>
                        `
                            : `<span style="font-size:12px;color:var(--text-muted);">Recorded</span>`
                        }
                      </td>
                    </tr>
                  `;
                  })
                  .join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;

  document.getElementById('tx-in-btn').addEventListener('click', () => navigate('stock-in'));
  document.getElementById('tx-out-btn').addEventListener('click', () => navigate('stock-out'));

  document.getElementById('tx-search-input').addEventListener('input', (e) => {
    appState.txSearch = e.target.value;
    renderPage();
    const el = document.getElementById('tx-search-input');
    el.focus();
    el.setSelectionRange(el.value.length, el.value.length);
  });
  document.getElementById('tx-type-filter').addEventListener('change', (e) => {
    appState.txTypeFilter = e.target.value;
    renderPage();
  });
  document.getElementById('tx-status-filter').addEventListener('change', (e) => {
    appState.txStatusFilter = e.target.value;
    renderPage();
  });

  container.querySelectorAll('[data-approve-tx]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const tx = appState.transactions.find((t) => t.id === btn.dataset.approveTx);
      if (!tx) return;
      try {
        const response = await fetch('api.php?route=transaction-approve', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: tx.id }),
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || 'Could not approve transaction');
        await hydrateFromApi();
        renderSidebar();
        renderTopbar();
        renderPage();
        showToast(`Transaction ${tx.reference} approved and stock updated.`);
      } catch (error) {
        showToast(error.message, 'error');
      }
    });
  });
}

// -------------------------------------------------------------------------
// 6. CATEGORIES PAGE
// -------------------------------------------------------------------------
function renderCategoriesPage(container) {
  container.innerHTML = `
        <div class="page-header">
          <div>
            <div class="page-eyebrow">Workspace / Categories</div>
            <h1 class="page-title">Categories</h1>
            <p class="page-subtitle">Organize campus equipment and supplies across ${appState.categories.length} standardized groups.</p>
          </div>
          <div class="page-actions">
            <button id="add-cat-btn" class="btn btn-primary" type="button">${ICONS.plus} Add category</button>
          </div>
        </div>

        <div class="category-grid">
          ${appState.categories
            .map((cat) => {
              const items = appState.products.filter((p) => p.category === cat.name);
              const totalUnits = items.reduce((sum, i) => sum + i.quantity, 0);
              return `
              <div class="card" style="padding:22px;display:flex;flex-direction:column;justify-content:space-between;gap:16px;">
                <div>
                  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
                    <div class="kpi-icon-box kpi-icon-slate">${ICONS.layers}</div>
                    <span class="badge badge-slate">${escapeHtml(cat.code)}</span>
                  </div>
                  <div style="font-size:16px;font-weight:700;color:var(--text-primary);margin-bottom:4px;">${escapeHtml(cat.name)}</div>
                  <div style="font-size:12.5px;color:var(--text-muted);line-height:1.5;">${escapeHtml(cat.description)}</div>
                </div>
                <div style="padding-top:14px;border-top:1px solid #f1f5f9;display:flex;align-items:center;justify-content:space-between;">
                  <span style="font-size:12.5px;color:var(--text-secondary);"><strong>${items.length}</strong> records · <strong>${totalUnits}</strong> units</span>
                  <button class="link-btn" style="font-size:12.5px;" data-filter-cat="${escapeHtml(cat.name)}">View items →</button>
                </div>
              </div>
            `;
            })
            .join('')}
        </div>
      `;

  container.querySelectorAll('[data-filter-cat]').forEach((btn) => {
    btn.addEventListener('click', () => {
      appState.invCategory = btn.dataset.filterCat;
      appState.invStatus = 'All';
      appState.invPage = 1;
      navigate('inventory', { invCategory: btn.dataset.filterCat });
    });
  });

  document.getElementById('add-cat-btn').addEventListener('click', openAddCategoryModal);
}

// -------------------------------------------------------------------------
// 7. USER MANAGEMENT PAGE
// -------------------------------------------------------------------------
function renderUsersPage(container) {
  container.innerHTML = `
        <div class="page-header">
          <div>
            <div class="page-eyebrow">Workspace / User Management</div>
            <h1 class="page-title">User Management</h1>
            <p class="page-subtitle">Manage authorized university personnel and inventory role permissions.</p>
          </div>
          <div class="page-actions">
            <button id="add-user-btn" class="btn btn-primary" type="button">${ICONS.plus} Add staff account</button>
          </div>
        </div>

        <div class="card">
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Staff Member</th>
                  <th>Department</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Last Active</th>
                </tr>
              </thead>
              <tbody>
                ${appState.users
                  .map(
                    (u) => `
                  <tr>
                    <td>
                      <div class="item-cell">
                        <div class="profile-avatar">${ICONS.shield}</div>
                        <div>
                          <div class="item-name">${escapeHtml(u.name)}</div>
                          <div class="item-sku">${escapeHtml(u.email)}</div>
                        </div>
                      </div>
                    </td>
                    <td>${escapeHtml(u.department)}</td>
                    <td><span class="badge badge-slate">${escapeHtml(u.role)}</span></td>
                    <td>
                      <span class="badge ${u.status === 'Active' ? 'badge-green' : 'badge-amber'}">
                        <span class="badge-dot"></span>${u.status}
                      </span>
                    </td>
                    <td>${escapeHtml(u.lastActive)}</td>
                  </tr>
                `
                  )
                  .join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;

  document.getElementById('add-user-btn').addEventListener('click', openAddUserModal);
}

// -------------------------------------------------------------------------
// 8. REPORTS PAGE
// -------------------------------------------------------------------------
function renderReportsPage(container) {
  const m = getMetrics();
  const byCategory = appState.categories.slice(0, 6).map((c) => {
    const units = appState.products
      .filter((p) => p.category === c.name)
      .reduce((s, i) => s + i.quantity, 0);
    return { name: c.name, units };
  });
  const maxUnits = Math.max(1, ...byCategory.map((b) => b.units));

  container.innerHTML = `
        <div class="page-header">
          <div>
            <div class="page-eyebrow">Workspace / Reports</div>
            <h1 class="page-title">Inventory Reports</h1>
            <p class="page-subtitle">Campus stock distribution, low-stock readiness, and exportable audit summaries.</p>
          </div>
          <div class="page-actions">
            <button id="rep-export-btn" class="btn btn-primary" type="button">${ICONS.download} Download CSV Report</button>
          </div>
        </div>

        <div class="dashboard-grid">
          <div class="card form-card">
            <div class="form-section-title">Stock Distribution by Category</div>
            <div class="form-section-sub">Active unit quantities across core campus categories.</div>
            <div style="margin-top:16px;">
              ${byCategory
                .map(
                  (row) => `
                <div class="bar-chart-row">
                  <div class="bar-chart-label">${escapeHtml(row.name)}</div>
                  <div class="bar-chart-track">
                    <div class="bar-chart-fill" style="width:${Math.max(4, Math.round((row.units / maxUnits) * 100))}%"></div>
                  </div>
                  <div style="width:65px;text-align:right;font-weight:600;font-size:13px;">${row.units} units</div>
                </div>
              `
                )
                .join('')}
            </div>
          </div>

          <div class="card form-card">
            <div class="form-section-title">Audit Snapshot</div>
            <div class="form-section-sub">Summary for ${appState.dateRange}</div>
            <div style="display:flex;flex-direction:column;gap:14px;margin-top:14px;">
              <div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid #f1f5f9;">
                <span style="color:var(--text-secondary);">Active SKUs</span>
                <strong>${formatNumber(m.totalProducts)}</strong>
              </div>
              <div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid #f1f5f9;">
                <span style="color:var(--text-secondary);">Total Stock Units</span>
                <strong>${formatNumber(m.availableStocks)}</strong>
              </div>
              <div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid #f1f5f9;">
                <span style="color:var(--text-secondary);">Items Below Minimum</span>
                <strong style="color:var(--amber-text);">${m.lowStockCount} items</strong>
              </div>
              <div style="display:flex;justify-content:space-between;padding:10px 0;">
                <span style="color:var(--text-secondary);">Pending Approvals</span>
                <strong>${appState.transactions.filter((t) => t.status === 'Pending').length}</strong>
              </div>
            </div>
          </div>
        </div>
      `;

  document
    .getElementById('rep-export-btn')
    .addEventListener('click', () => exportInventoryCSV(appState.products));
}

// -------------------------------------------------------------------------
// 9. SETTINGS PAGE
// -------------------------------------------------------------------------
function renderSettingsPage(container) {
  container.innerHTML = `
        <div class="page-header">
          <div>
            <div class="page-eyebrow">Workspace / Settings</div>
            <h1 class="page-title">System Settings</h1>
            <p class="page-subtitle">Configure campus workspace preferences and alert defaults.</p>
          </div>
        </div>

        <form id="settings-form" class="card form-card" style="max-width:720px;">
          <div class="form-section-title">Campus & Inventory Preferences</div>
          <div class="form-section-sub">Changes apply immediately across the workspace.</div>

          <div class="form-group">
            <label class="form-label" for="set-campus">University / Campus Name</label>
            <input id="set-campus" class="form-control" value="${escapeHtml(appState.settings.campusName)}" />
          </div>

          <div class="form-group">
            <label class="form-label" for="set-min">Default Minimum Stock Threshold</label>
            <input id="set-min" type="number" min="1" class="form-control" style="max-width:200px;" value="${appState.settings.defaultMinStock}" />
          </div>

          <div style="display:flex;flex-direction:column;gap:14px;margin:20px 0 24px;">
            <label class="checkbox-label">
              <input type="checkbox" id="set-alerts" ${appState.settings.autoLowStockAlert ? 'checked' : ''} />
              <span>Highlight low-stock items automatically on Dashboard and Topbar</span>
            </label>
            <label class="checkbox-label">
              <input type="checkbox" id="set-approve" ${appState.settings.requireApprovalStockOut ? 'checked' : ''} />
              <span>Require administrator approval for Stock Out requests</span>
            </label>
          </div>

          <button type="submit" class="btn btn-primary">${ICONS.check} Save settings</button>
        </form>
      `;

  document.getElementById('settings-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const settings = {
      campusName:
        document.getElementById('set-campus').value.trim() || appState.settings.campusName,
      defaultMinStock: Math.max(1, Number(document.getElementById('set-min').value)),
      autoLowStockAlert: document.getElementById('set-alerts').checked,
      requireApprovalStockOut: document.getElementById('set-approve').checked,
    };
    try {
      const response = await fetch('api.php?route=settings-save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Could not save settings');
      appState.settings = settings;
      showToast('System settings saved.');
    } catch (error) {
      showToast(error.message, 'error');
    }
  });
}

// =========================================================================
// MODALS, ACTIONS & CSV EXPORT
// =========================================================================
function closeModal() {
  document.getElementById('modal-root').innerHTML = '';
}

function openQuickAdjustModal(productId, defaultType = 'Stock In') {
  const prod = appState.products.find((p) => p.id === productId);
  if (!prod) return;
  const isIn = defaultType === 'Stock In';
  const root = document.getElementById('modal-root');
  root.innerHTML = `
        <div class="modal-backdrop" id="modal-backdrop">
          <div class="modal-box">
            <div class="modal-header">
              <div class="modal-title">${defaultType} — ${escapeHtml(prod.name)}</div>
              <button class="icon-dots-btn" id="modal-close-x" type="button">${ICONS.close}</button>
            </div>
            <form id="quick-adj-form">
              <div class="modal-body">
                <div style="background:#f8fafc;border:1px solid var(--border-light);border-radius:10px;padding:12px 14px;margin-bottom:16px;display:flex;justify-content:space-between;font-size:13px;">
                  <span>SKU: <strong>${escapeHtml(prod.sku)}</strong></span>
                  <span>Current stock: <strong>${prod.quantity} ${prod.unit}</strong></span>
                </div>
                <div class="form-group">
                  <label class="form-label" for="qa-qty">Quantity to ${isIn ? 'add' : 'deduct'} *</label>
                  <input id="qa-qty" type="number" min="1" class="form-control" value="${isIn ? Math.max(1, prod.minLevel - prod.quantity + 5) : 1}" required />
                </div>
                <div class="form-group" style="margin-bottom:0;">
                  <label class="form-label" for="qa-ref">Reference / Note</label>
                  <input id="qa-ref" type="text" class="form-control" placeholder="${isIn ? 'e.g., PO-2026-120 Restock' : 'e.g., Issued to Computer Lab 1'}" />
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" id="modal-cancel-btn" class="btn btn-secondary">Cancel</button>
                <button type="submit" class="btn btn-primary">${isIn ? 'Confirm Stock In' : 'Confirm Stock Out'}</button>
              </div>
            </form>
          </div>
        </div>
      `;

  document.getElementById('modal-close-x').addEventListener('click', closeModal);
  document.getElementById('modal-cancel-btn').addEventListener('click', closeModal);
  document.getElementById('modal-backdrop').addEventListener('click', (e) => {
    if (e.target.id === 'modal-backdrop') closeModal();
  });

  document.getElementById('quick-adj-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const qty = Number(document.getElementById('qa-qty').value);
    const ref = document.getElementById('qa-ref').value.trim();
    if (qty <= 0) return;
    try {
      const response = await fetch('api.php?route=adjust-stock', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productId: prod.id,
          type: defaultType,
          qty,
          reference: ref || undefined,
          date: todayFormatted(),
          note: `Quick ${defaultType.toLowerCase()}`,
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Could not update stock');
      await hydrateFromApi();
      closeModal();
      renderSidebar();
      renderTopbar();
      renderPage();
      showToast(`${prod.name} updated (${isIn ? '+' : '−'}${qty} ${prod.unit}).`);
    } catch (error) {
      showToast(error.message, 'error');
    }
  });
}

async function deleteProduct(id) {
  const prod = appState.products.find((p) => p.id === id);
  if (!prod) return;
  try {
    const response = await fetch('api.php?route=product-delete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Could not delete product');
    await hydrateFromApi();
    appState.selectedIds.delete(id);
    renderSidebar();
    renderTopbar();
    renderPage();
    showToast(`Removed "${prod.name}" from inventory.`, 'warning');
  } catch (error) {
    showToast(error.message, 'error');
  }
}

function openAddCategoryModal() {
  const root = document.getElementById('modal-root');
  root.innerHTML = `
        <div class="modal-backdrop" id="modal-backdrop">
          <div class="modal-box">
            <div class="modal-header">
              <div class="modal-title">Add New Category</div>
              <button class="icon-dots-btn" id="modal-close-x" type="button">${ICONS.close}</button>
            </div>
            <form id="new-cat-form">
              <div class="modal-body">
                <div class="form-group">
                  <label class="form-label">Category Name *</label>
                  <input id="nc-name" class="form-control" placeholder="e.g., Robotics Kits" required />
                </div>
                <div class="form-group">
                  <label class="form-label">Prefix Code *</label>
                  <input id="nc-code" class="form-control" placeholder="e.g., RB" maxlength="4" required />
                </div>
                <div class="form-group" style="margin-bottom:0;">
                  <label class="form-label">Description</label>
                  <textarea id="nc-desc" class="form-control" placeholder="Short description of items in this category."></textarea>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" id="modal-cancel-btn" class="btn btn-secondary">Cancel</button>
                <button type="submit" class="btn btn-primary">Save Category</button>
              </div>
            </form>
          </div>
        </div>
      `;
  document.getElementById('modal-close-x').addEventListener('click', closeModal);
  document.getElementById('modal-cancel-btn').addEventListener('click', closeModal);
  document.getElementById('modal-backdrop').addEventListener('click', (e) => {
    if (e.target.id === 'modal-backdrop') closeModal();
  });
  document.getElementById('new-cat-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('nc-name').value.trim();
    const code = document.getElementById('nc-code').value.trim().toUpperCase();
    const description =
      document.getElementById('nc-desc').value.trim() || 'Campus equipment category.';
    if (!name || !code) return;
    try {
      const response = await fetch('api.php?route=category-save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, code, description }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Could not save category');
      await hydrateFromApi();
      closeModal();
      renderPage();
      showToast(`Category "${name}" added.`);
    } catch (error) {
      showToast(error.message, 'error');
    }
  });
}

function openAddUserModal() {
  const root = document.getElementById('modal-root');
  root.innerHTML = `
        <div class="modal-backdrop" id="modal-backdrop">
          <div class="modal-box">
            <div class="modal-header">
              <div class="modal-title">Add Staff Account</div>
              <button class="icon-dots-btn" id="modal-close-x" type="button">${ICONS.close}</button>
            </div>
            <form id="new-user-form">
              <div class="modal-body">
                <div class="form-group">
                  <label class="form-label">Full Name *</label>
                  <input id="nu-name" class="form-control" placeholder="e.g., Bianca Reyes" required />
                </div>
                <div class="form-group">
                  <label class="form-label">University Email *</label>
                  <input id="nu-email" type="email" class="form-control" placeholder="b.reyes@cvsu.edu.ph" required />
                </div>
                <div class="form-group">
                  <label class="form-label">Initial Password *</label>
                  <input id="nu-password" type="password" class="form-control" value="Cvsu@2026" required />
                </div>
                <div class="form-row-2">
                  <div class="form-group" style="margin-bottom:0;">
                    <label class="form-label">Department</label>
                    <input id="nu-dept" class="form-control" placeholder="CEIT" value="Property & Supply Office" />
                  </div>
                  <div class="form-group" style="margin-bottom:0;">
                    <label class="form-label">Role</label>
                    <select id="nu-role" class="form-control">
                      <option>Inventory Staff</option>
                      <option>Custodian</option>
                      <option>Administrator</option>
                      <option>Viewer</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" id="modal-cancel-btn" class="btn btn-secondary">Cancel</button>
                <button type="submit" class="btn btn-primary">Create Account</button>
              </div>
            </form>
          </div>
        </div>
      `;
  document.getElementById('modal-close-x').addEventListener('click', closeModal);
  document.getElementById('modal-cancel-btn').addEventListener('click', closeModal);
  document.getElementById('modal-backdrop').addEventListener('click', (e) => {
    if (e.target.id === 'modal-backdrop') closeModal();
  });
  document.getElementById('new-user-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('nu-name').value.trim();
    const email = document.getElementById('nu-email').value.trim();
    const password = document.getElementById('nu-password').value;
    const department = document.getElementById('nu-dept').value.trim();
    const role = document.getElementById('nu-role').value;
    if (!name || !email || password.length < 8) {
      showToast('Enter a name, email, and password of at least 8 characters.', 'error');
      return;
    }
    try {
      const response = await fetch('api.php?route=user-save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, department, role }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Could not create staff account');
      await hydrateFromApi();
      closeModal();
      renderPage();
      showToast(`Staff account created for ${name}.`);
    } catch (error) {
      showToast(error.message, 'error');
    }
  });
}

function openCommandPalette() {
  const root = document.getElementById('modal-root');
  root.innerHTML = `
        <div class="modal-backdrop" id="modal-backdrop">
          <div class="modal-box cmd-box">
            <div style="padding:14px 18px;border-bottom:1px solid var(--border-light);display:flex;align-items:center;gap:12px;">
              <span style="color:var(--text-muted);display:flex;">${ICONS.search}</span>
              <input id="cmd-input" type="text" placeholder="Search products, SKUs, locations, or jump to page..." style="flex:1;border:none;outline:none;font-size:14.5px;color:var(--text-primary);" autofocus />
              <button class="kbd-chip" id="cmd-esc" type="button">ESC</button>
            </div>
            <div id="cmd-results" style="max-height:360px;overflow-y:auto;padding:10px;"></div>
          </div>
        </div>
      `;

  const input = document.getElementById('cmd-input');
  const resultsEl = document.getElementById('cmd-results');

  const renderResults = (query = '') => {
    const q = query.trim().toLowerCase();
    const matchingPages = NAV_ITEMS.filter((n) => !q || n.label.toLowerCase().includes(q));
    const matchingProducts = appState.products
      .filter(
        (p) =>
          !q ||
          p.name.toLowerCase().includes(q) ||
          p.sku.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q)
      )
      .slice(0, 6);

    resultsEl.innerHTML = `
          ${matchingProducts.length ? `<div style="font-size:11px;font-weight:600;color:var(--text-muted);padding:6px 10px;text-transform:uppercase;letter-spacing:0.08em;">Products</div>` : ''}
          ${matchingProducts
            .map(
              (p) => `
            <button class="dropdown-item" data-cmd-prod="${p.id}" style="justify-content:space-between;padding:9px 12px;">
              <span style="display:flex;align-items:center;gap:10px;">
                <span style="color:var(--text-muted);display:flex;">${ICONS[p.icon] || ICONS.box}</span>
                <span><strong>${escapeHtml(p.name)}</strong> <span style="color:var(--text-muted);font-size:12px;">· ${escapeHtml(p.sku)}</span></span>
              </span>
              <span class="badge ${getStatus(p) === 'In Stock' ? 'badge-green' : 'badge-amber'}">${p.quantity} ${p.unit}</span>
            </button>
          `
            )
            .join('')}
          ${matchingPages.length ? `<div style="font-size:11px;font-weight:600;color:var(--text-muted);padding:10px 10px 6px;text-transform:uppercase;letter-spacing:0.08em;">Workspace Pages</div>` : ''}
          ${matchingPages
            .map(
              (n) => `
            <button class="dropdown-item" data-cmd-nav="${n.id}" style="padding:9px 12px;">
              <span style="color:var(--text-muted);display:flex;">${ICONS[n.icon]}</span>
              <span>Go to ${n.label}</span>
            </button>
          `
            )
            .join('')}
        `;

    resultsEl.querySelectorAll('[data-cmd-nav]').forEach((btn) => {
      btn.addEventListener('click', () => {
        closeModal();
        navigate(btn.dataset.cmdNav);
      });
    });
    resultsEl.querySelectorAll('[data-cmd-prod]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const p = appState.products.find((x) => x.id === btn.dataset.cmdProd);
        closeModal();
        appState.invSearch = p ? p.sku : '';
        appState.invPage = 1;
        navigate('inventory');
      });
    });
  };

  renderResults('');
  input.focus();
  input.addEventListener('input', (e) => renderResults(e.target.value));
  document.getElementById('cmd-esc').addEventListener('click', closeModal);
  document.getElementById('modal-backdrop').addEventListener('click', (e) => {
    if (e.target.id === 'modal-backdrop') closeModal();
  });
}

function exportInventoryCSV(rows) {
  const headers = [
    'Product Name',
    'SKU',
    'Category',
    'Location',
    'Available',
    'Min Level',
    'Unit',
    'Status',
    'Last Updated',
  ];
  const csvRows = [
    headers.join(','),
    ...rows.map((r) =>
      [
        `"${r.name.replace(/"/g, '""')}"`,
        `"${r.sku}"`,
        `"${r.category}"`,
        `"${r.location}"`,
        r.quantity,
        r.minLevel,
        r.unit,
        `"${getStatus(r)}"`,
        `"${r.updated}"`,
      ].join(',')
    ),
  ];
  const blob = new Blob([csvRows.join('\n')], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'cvsu-inventory-export.csv';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  showToast(`Exported ${rows.length} product record(s) to CSV.`);
}

// =========================================================================
// GLOBAL UI EVENTS (LOGIN, NOTIFICATIONS, MOBILE DRAWER, KEYBOARD)
// =========================================================================
function renderNotificationsPopover() {
  const pop = document.getElementById('notif-popover');
  const low = getLowStockProducts();
  pop.innerHTML = `
        <div style="padding:14px 16px;border-bottom:1px solid var(--border-light);display:flex;justify-content:space-between;align-items:center;">
          <strong style="font-size:13.5px;">Inventory Alerts</strong>
          <span class="badge badge-amber">${low.length} low stock</span>
        </div>
        <div style="max-height:280px;overflow-y:auto;">
          ${low
            .slice(0, 5)
            .map(
              (item) => `
            <button class="dropdown-item" data-notif-restock="${item.id}" style="border-radius:0;padding:11px 16px;border-bottom:1px solid #f4f6f9;justify-content:space-between;">
              <div>
                <div style="font-weight:600;font-size:13px;">${escapeHtml(item.name)}</div>
                <div style="font-size:11.5px;color:var(--text-muted);">${escapeHtml(item.location)} · Min ${item.minLevel} ${item.unit}</div>
              </div>
              <span style="color:var(--amber-text);font-weight:700;font-size:12px;">${item.quantity} left</span>
            </button>
          `
            )
            .join('')}
        </div>
        <div style="padding:10px 14px;text-align:center;background:#fafbfd;">
          <button id="notif-view-all" class="link-btn" style="font-size:12.5px;">Review all low stock items →</button>
        </div>
      `;

  pop.querySelectorAll('[data-notif-restock]').forEach((btn) => {
    btn.addEventListener('click', () => {
      pop.classList.add('hidden');
      openQuickAdjustModal(btn.dataset.notifRestock, 'Stock In');
    });
  });

  document.getElementById('notif-view-all').addEventListener('click', () => {
    pop.classList.add('hidden');
    appState.invStatus = 'Low Stock';
    navigate('inventory', { invStatus: 'Low Stock' });
  });
}

function closeMobileSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('open');
}

function enterApp() {
  appState.isAuthenticated = true;
  document.getElementById('login-view').classList.add('hidden');
  document.getElementById('app-view').classList.remove('hidden');
  renderSidebar();
  renderTopbar();
  renderPage();
}

async function signOut() {
  try {
    await fetch('api.php?route=logout', { method: 'POST' });
  } catch (_) {}
  appState.isAuthenticated = false;
  document.getElementById('app-view').classList.add('hidden');
  document.getElementById('login-view').classList.remove('hidden');
  document.getElementById('login-password').value = '';
  showToast('Signed out of Administrator Portal.');
}

async function hydrateFromApi() {
  try {
    const response = await fetch('api.php?route=bootstrap');
    if (!response.ok) throw new Error('Database unavailable');
    const data = await response.json();
    appState.products = data.products || [];
    appState.categories = data.categories || [];
    appState.users = data.users || [];
    appState.transactions = data.transactions || [];
    if (data.settings) appState.settings = { ...appState.settings, ...data.settings };
  } catch (error) {
    console.error(error);
  }
}

// Boot
document.addEventListener('DOMContentLoaded', async () => {
  hydrateIcons(document);
  try {
    const sessionResponse = await fetch('api.php?route=session');
    const sessionData = await sessionResponse.json();
    if (sessionData.authenticated) {
      await hydrateFromApi();
      enterApp();
    }
  } catch (_) {}

  // Password eye toggle
  const pwInput = document.getElementById('login-password');
  const pwToggle = document.getElementById('toggle-password');
  pwToggle.addEventListener('click', () => {
    const isHidden = pwInput.type === 'password';
    pwInput.type = isHidden ? 'text' : 'password';
    pwToggle.innerHTML = isHidden ? ICONS.eyeOff : ICONS.eye;
  });

  document.getElementById('forgot-password-btn').addEventListener('click', () => {
    showToast('Password reset link sent to your CvSU university email.');
  });

  document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    const pw = document.getElementById('login-password').value.trim();
    if (!email || !pw) {
      showToast('Please enter your university email and password.', 'error');
      return;
    }
    try {
      const response = await fetch('api.php?route=login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password: pw }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Login failed');
      await hydrateFromApi();
      enterApp();
      showToast(`Welcome back, ${data.name || 'Loreyn'}!`);
    } catch (error) {
      showToast(error.message, 'error');
    }
  });

  document.getElementById('signout-btn').addEventListener('click', signOut);
  document.getElementById('global-search-btn').addEventListener('click', openCommandPalette);
  document.getElementById('profile-btn').addEventListener('click', () => navigate('settings'));

  document.getElementById('notif-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    const pop = document.getElementById('notif-popover');
    if (pop.classList.contains('hidden')) {
      renderNotificationsPopover();
      pop.classList.remove('hidden');
    } else {
      pop.classList.add('hidden');
    }
  });

  document.getElementById('mobile-menu-btn').addEventListener('click', () => {
    document.getElementById('sidebar').classList.add('open');
    document.getElementById('sidebar-overlay').classList.add('open');
  });
  document.getElementById('sidebar-overlay').addEventListener('click', closeMobileSidebar);

  // Click outside closes dropdowns & popovers
  document.addEventListener('click', () => {
    document.getElementById('notif-popover').classList.add('hidden');
    if (appState.openMenuId) {
      appState.openMenuId = null;
      if (appState.currentPage === 'inventory') renderPage();
    }
  });

  // Cmd+K / Ctrl+K shortcut & Escape
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      if (!appState.isAuthenticated) return;
      e.preventDefault();
      openCommandPalette();
    }
    if (e.key === 'Escape') {
      closeModal();
      document.getElementById('notif-popover').classList.add('hidden');
    }
  });
});
