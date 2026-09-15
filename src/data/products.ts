import { Product } from '../types';

const assetBase = typeof window !== 'undefined' && window.location.pathname.startsWith('/kin---clear-class-project') ? '/kin---clear-class-project/' : '/';
const productImage = (slug: string) => `${assetBase}assets/products/${slug}.svg`;
import { getIngredientById } from './ingredients';

// Helper to safely get ingredients
const getIngredients = (ids: string[]) => {
  return ids.map(id => getIngredientById(id)).filter(Boolean) as any;
};

export const products: Product[] = [
  // BATH & CLEANSING
  {
    id: 'prod_1',
    name: 'Gentle Baby Wash',
    slug: 'gentle-baby-wash',
    shortBenefit: 'Tear-free cleansing for delicate skin',
    category: 'Bath & Cleansing',
    subcategory: 'Wash',
    size: '250ml',
    price: 450,
    rating: 4.8,
    reviewsCount: 124,
    image: productImage('gentle-baby-wash'),
    badge: 'Bestseller',
    description: 'A sulfate-free, tear-free body wash and shampoo that gently cleanses without stripping away natural moisture. Developed with pediatricians for your baby\'s first baths.',
    benefits: ['Tear-free formula', 'pH-balanced', 'Free from synthetic fragrances'],
    ageSuitability: 'Newborns and up',
    skinConcern: ['Everyday cleansing', 'Sensitive skin'],
    ingredients: getIngredients(['ing_15', 'ing_16', 'ing_6', 'ing_2']), // Coco-glucoside, decyl glucoside, glycerin, calendula
    usage: 'Pump a small amount onto a soft washcloth or hand. Gently lather over baby\'s skin and hair, then rinse thoroughly with lukewarm water.',
    texture: 'Lightweight foaming gel',
    fragrance: 'Fragrance-free',
    relatedProductIds: ['prod_5', 'prod_4']
  },
  {
    id: 'prod_2',
    name: 'Head-to-Toe Newborn Cleanser',
    slug: 'head-to-toe-newborn-cleanser',
    shortBenefit: 'Ultra-mild formulation for the first months',
    category: 'Bath & Cleansing',
    subcategory: 'Wash',
    size: '200ml',
    price: 495,
    rating: 4.9,
    reviewsCount: 89,
    image: productImage('head-to-toe-newborn-cleanser'),
    description: 'Designed specifically for the delicate vernix and newborn skin barrier. An ultra-mild, non-foaming cream cleanser that hydrates while it washes.',
    benefits: ['Non-foaming cream texture', 'Protects newborn skin barrier', 'Hypoallergenic'],
    ageSuitability: '0-6 months',
    skinConcern: ['Newborn', 'Dryness'],
    ingredients: getIngredients(['ing_17', 'ing_7', 'ing_1']), // Sodium cocoyl glutamate, squalane, oatmeal
    usage: 'Apply gently to wet skin with hands. Rinse lightly. Pat dry, do not rub.',
    texture: 'Creamy lotion-like wash',
    fragrance: 'Fragrance-free'
  },
  {
    id: 'prod_3',
    name: 'Tear-Free Baby Shampoo',
    slug: 'tear-free-baby-shampoo',
    shortBenefit: 'Gentle on scalp and eyes',
    category: 'Bath & Cleansing',
    subcategory: 'Shampoo',
    size: '250ml',
    price: 425,
    rating: 4.7,
    reviewsCount: 56,
    image: productImage('tear-free-baby-shampoo'),
    description: 'Formulated to cleanse fine baby hair and soothe sensitive scalps without stinging eyes. Helps prevent and manage cradle cap.',
    benefits: ['Ophthalmologist tested', 'Soothes dry scalp', 'Easy to rinse'],
    ageSuitability: 'Newborns and up',
    skinConcern: ['Everyday cleansing', 'Cradle cap'],
    ingredients: getIngredients(['ing_15', 'ing_10', 'ing_12']), // coco-glucoside, jojoba, panthenol
    usage: 'Wet hair with warm water. Apply a small amount to hands and gently massage into scalp. Rinse well.',
    texture: 'Clear gel',
    fragrance: 'Fragrance-free'
  },
  {
    id: 'prod_4',
    name: 'Calming Bedtime Bath',
    slug: 'calming-bedtime-bath',
    shortBenefit: 'Relaxing soak to prepare for sleep',
    category: 'Bath & Cleansing',
    subcategory: 'Wash',
    size: '250ml',
    price: 525,
    rating: 4.9,
    reviewsCount: 142,
    image: productImage('calming-bedtime-bath'),
    badge: 'Award Winner',
    description: 'A gentle wash infused with natural calming extracts to help signal bedtime. Cleanses gently while relaxing the senses.',
    benefits: ['Calming natural aroma', 'Non-drying', 'Tear-free'],
    ageSuitability: '3 months and up',
    skinConcern: ['Bedtime'],
    ingredients: getIngredients(['ing_16', 'ing_3', 'ing_6']), // decyl glucoside, bisabolol, glycerin
    usage: 'Add a pump to warm bath water or use directly on a washcloth during the nighttime routine.',
    texture: 'Silky gel',
    fragrance: 'Subtle natural chamomile (from bisabolol extract)'
  },

  // SKIN & MOISTURE
  {
    id: 'prod_5',
    name: 'Daily Moisturising Lotion',
    slug: 'daily-moisturising-lotion',
    shortBenefit: '24-hour hydration for sensitive skin',
    category: 'Skin & Moisture',
    subcategory: 'Lotion',
    size: '200ml',
    price: 550,
    rating: 4.9,
    reviewsCount: 208,
    image: productImage('daily-moisturising-lotion'),
    description: 'A lightweight, fast-absorbing lotion designed to protect and nourish your baby\'s skin barrier all day. Non-greasy and perfectly calming.',
    benefits: ['Fast absorption', '24-hour moisture', 'Dermatologist tested'],
    ageSuitability: 'Newborns and up',
    skinConcern: ['Dryness', 'Sensitive skin'],
    ingredients: getIngredients(['ing_1', 'ing_8', 'ing_6', 'ing_11']), // oat extract, shea butter, glycerin, ceramides
    usage: 'Massage gently over baby\'s body after bath time, or anytime skin feels dry.',
    texture: 'Lightweight lotion',
    fragrance: 'Fragrance-free'
  },
  {
    id: 'prod_6',
    name: 'Rich Barrier Cream',
    slug: 'rich-barrier-cream',
    shortBenefit: 'Intensive moisture for dry patches',
    category: 'Skin & Moisture',
    subcategory: 'Cream',
    size: '150ml',
    price: 625,
    rating: 4.8,
    reviewsCount: 112,
    image: productImage('rich-barrier-cream'),
    badge: 'Best for Winter',
    description: 'A thick, deeply nourishing cream for extremely dry or eczema-prone skin. Forms a protective layer to lock in moisture and lock out irritants.',
    benefits: ['Intensive hydration', 'Supports eczema-prone skin', 'Locks in moisture'],
    ageSuitability: 'Newborns and up',
    skinConcern: ['Severe dryness', 'Eczema-prone'],
    ingredients: getIngredients(['ing_11', 'ing_8', 'ing_14', 'ing_4']), // ceramides, shea butter, oat lipids, allantoin
    usage: 'Apply liberally to dry patches, elbows, knees, or anywhere that needs extra protection.',
    texture: 'Thick, rich cream',
    fragrance: 'Fragrance-free'
  },
  {
    id: 'prod_7',
    name: 'Sensitive Skin Face Cream',
    slug: 'sensitive-skin-face-cream',
    shortBenefit: 'Gentle hydration for rosy cheeks',
    category: 'Skin & Moisture',
    subcategory: 'Cream',
    size: '50ml',
    price: 495,
    rating: 4.6,
    reviewsCount: 78,
    image: productImage('sensitive-skin-face-cream'),
    description: 'A specialized formula for baby\'s delicate face. Prevents chapping from drool and cold weather without clogging pores.',
    benefits: ['Protects against drool rash', 'Non-comedogenic', 'Travel-friendly size'],
    ageSuitability: 'Newborns and up',
    skinConcern: ['Dryness', 'Drool rash'],
    ingredients: getIngredients(['ing_7', 'ing_9', 'ing_12']), // squalane, sunflower oil, panthenol
    usage: 'Gently dab a small amount onto baby\'s cheeks and chin as needed.',
    texture: 'Smooth, absorbing cream',
    fragrance: 'Fragrance-free'
  },
  {
    id: 'prod_8',
    name: 'Baby Massage Oil',
    slug: 'baby-massage-oil',
    shortBenefit: 'Nourishing oil for bonding time',
    category: 'Skin & Moisture',
    subcategory: 'Oil',
    size: '120ml',
    price: 575,
    rating: 4.9,
    reviewsCount: 94,
    image: productImage('baby-massage-oil'),
    description: 'A pure, cold-pressed blend of plant oils designed for infant massage. Glides smoothly, absorbs well, and supports skin elasticity.',
    benefits: ['Perfect slip for massage', 'Nourishing lipids', 'No mineral oil'],
    ageSuitability: '1 month and up',
    skinConcern: ['Bedtime', 'Dryness'],
    ingredients: getIngredients(['ing_9', 'ing_10', 'ing_7']), // sunflower oil, jojoba oil, squalane
    usage: 'Warm a few drops between your palms. Gently massage into baby\'s skin using slow, sweeping motions.',
    texture: 'Lightweight oil',
    fragrance: 'Fragrance-free'
  },

  // DIAPER CARE
  {
    id: 'prod_9',
    name: 'Soothing Diaper Cream',
    slug: 'soothing-diaper-cream',
    shortBenefit: 'Fast relief and lasting protection',
    category: 'Diaper Care',
    subcategory: 'Cream',
    size: '100g',
    price: 350,
    rating: 4.7,
    reviewsCount: 289,
    image: productImage('soothing-diaper-cream'),
    badge: 'Parent Favorite',
    description: 'Creates a thick, breathable barrier to seal out wetness and soothe chafed skin on contact. Formulated with 14% non-nano zinc oxide.',
    benefits: ['Instant relief', 'Cloth diaper safe', 'Water-resistant barrier'],
    ageSuitability: 'Newborns and up',
    skinConcern: ['Diaper rash'],
    ingredients: getIngredients(['ing_13', 'ing_8', 'ing_2']), // zinc oxide, shea butter, calendula
    usage: 'Change wet or soiled diapers promptly. Cleanse the area, allow to dry, and apply cream liberally.',
    texture: 'Opaque white paste',
    fragrance: 'Fragrance-free'
  },
  {
    id: 'prod_10',
    name: 'Protective Barrier Balm',
    slug: 'protective-barrier-balm',
    shortBenefit: 'Everyday invisible protection',
    category: 'Diaper Care',
    subcategory: 'Balm',
    size: '80g',
    price: 425,
    rating: 4.8,
    reviewsCount: 64,
    image: productImage('protective-barrier-balm'),
    description: 'A clear, smooth balm for everyday diaper changes. Protects without the mess of white pastes. Excellent for preventing rash before it starts.',
    benefits: ['Invisible barrier', 'Applies smoothly', 'No mess'],
    ageSuitability: 'Newborns and up',
    skinConcern: ['Diaper-area care', 'Everyday care'],
    ingredients: getIngredients(['ing_9', 'ing_8', 'ing_4']), // sunflower oil, shea butter, allantoin
    usage: 'Apply a thin layer to clean, dry skin at every diaper change to prevent irritation.',
    texture: 'Smooth translucent balm',
    fragrance: 'Fragrance-free'
  },
  {
    id: 'prod_11',
    name: 'Sensitive Baby Wipes',
    slug: 'sensitive-baby-wipes',
    shortBenefit: '99% water and plant-based cloth',
    category: 'Diaper Care',
    subcategory: 'Wipes',
    size: '72 Count',
    price: 299,
    rating: 4.9,
    reviewsCount: 412,
    image: productImage('sensitive-baby-wipes'),
    badge: 'Essentials',
    description: 'Extra-thick, biodegradable wipes soaked in 99% purified water and a drop of soothing aloe. Strong enough for messes, gentle enough for faces.',
    benefits: ['99% purified water', 'Biodegradable material', 'Textured for easy cleaning'],
    ageSuitability: 'Newborns and up',
    skinConcern: ['Everyday cleansing', 'Sensitive skin'],
    ingredients: getIngredients(['ing_18', 'ing_5', 'ing_16']), // water, aloe, decyl glucoside
    usage: 'Use to clean diaper area, hands, or face. Dispose in trash (do not flush).',
    texture: 'Soft, textured cloth',
    fragrance: 'Fragrance-free'
  },

  // EVERYDAY ESSENTIALS
  {
    id: 'prod_12',
    name: 'Multipurpose Baby Balm',
    slug: 'multipurpose-baby-balm',
    shortBenefit: 'Head-to-toe dry skin rescue',
    category: 'Everyday Essentials',
    subcategory: 'Balm',
    size: '40g',
    price: 399,
    rating: 4.8,
    reviewsCount: 88,
    image: productImage('multipurpose-baby-balm'),
    description: 'The "fix-everything" balm. Perfect for chapped lips, dry cuticles, scraped knees, or windburn. A diaper bag essential.',
    benefits: ['Waterless concentrated formula', 'Travel friendly', 'Soothes instantly'],
    ageSuitability: 'Newborns and up',
    skinConcern: ['Dryness', 'Everyday care'],
    ingredients: getIngredients(['ing_8', 'ing_7', 'ing_2']), // shea butter, squalane, calendula
    usage: 'Apply anywhere skin needs intense, targeted moisture and protection.',
    texture: 'Solid balm that melts on contact',
    fragrance: 'Fragrance-free'
  },
  {
    id: 'prod_13',
    name: 'Gentle Cleansing Water',
    slug: 'gentle-cleansing-water',
    shortBenefit: 'No-rinse clean for in-between baths',
    category: 'Everyday Essentials',
    subcategory: 'Wash',
    size: '200ml',
    price: 475,
    rating: 4.6,
    reviewsCount: 45,
    image: productImage('gentle-cleansing-water'),
    description: 'A micellar water formulated for babies. Perfect for cleaning spit-up, sticky hands, or freshening up when a full bath isn\'t possible.',
    benefits: ['No rinsing required', 'Removes sticky messes', 'Hydrating'],
    ageSuitability: 'Newborns and up',
    skinConcern: ['Everyday cleansing'],
    ingredients: getIngredients(['ing_18', 'ing_16', 'ing_5']), // water, decyl glucoside, aloe
    usage: 'Apply to a cotton pad or soft cloth and gently wipe skin. No need to rinse.',
    texture: 'Liquid water',
    fragrance: 'Fragrance-free'
  },
  {
    id: 'prod_14',
    name: 'Outdoor Baby Moisture Stick',
    slug: 'outdoor-baby-moisture-stick',
    shortBenefit: 'Glide-on protection for cheeks and lips',
    category: 'Everyday Essentials',
    subcategory: 'Balm',
    size: '15g',
    price: 449,
    rating: 4.9,
    reviewsCount: 134,
    image: productImage('outdoor-baby-moisture-stick'),
    description: 'An oversized balm stick that makes applying moisture to a squirmy baby easy. Protects cheeks and lips from cold wind and dry air.',
    benefits: ['Hands-free application', 'Pocket-sized', 'Creates wind barrier'],
    ageSuitability: 'Newborns and up',
    skinConcern: ['Dryness', 'Everyday care'],
    ingredients: getIngredients(['ing_8', 'ing_10', 'ing_4']), // shea, jojoba, allantoin
    usage: 'Swipe directly onto cheeks, lips, or dry patches. Reapply before going outdoors.',
    texture: 'Solid stick',
    fragrance: 'Fragrance-free'
  },

  // BUNDLES
  {
    id: 'prod_15',
    name: 'Newborn Starter Set',
    slug: 'newborn-starter-set',
    shortBenefit: 'The 4 essentials for their first months',
    category: 'Bundles',
    size: '4 Full-Size Items',
    price: 1499,
    originalPrice: 1779,
    rating: 5.0,
    reviewsCount: 67,
    image: productImage('newborn-starter-set'),
    badge: 'Perfect Gift',
    description: 'Everything you actually need, nothing you don\'t. This curated set provides the gentle foundation for your baby\'s first skincare routine. Beautifully boxed for gifting.',
    benefits: ['Saves 15%', 'Includes gifting box', 'Pediatrician approved routine'],
    ageSuitability: 'Newborns',
    skinConcern: ['Newborn', 'Everyday care'],
    ingredients: [], // Handled by individual products
    usage: 'Follow the included Routine Guide for step-by-step instructions on first baths and diaper changes.',
    texture: 'Various',
    fragrance: 'Fragrance-free',
    relatedProductIds: ['prod_2', 'prod_5', 'prod_9', 'prod_11']
  },
  {
    id: 'prod_16',
    name: 'Bath & Bedtime Ritual Set',
    slug: 'bath-bedtime-ritual-set',
    shortBenefit: 'A calming routine for better sleep',
    category: 'Bundles',
    size: '3 Full-Size Items',
    price: 1699,
    originalPrice: 1950,
    rating: 4.9,
    reviewsCount: 112,
    image: productImage('bath-bedtime-ritual-set'),
    description: 'Create a consistent, soothing wind-down routine. This trio works together to relax the senses and deeply moisturize skin through the night.',
    benefits: ['Promotes calm', 'Saves 12%', 'Deep overnight moisture'],
    ageSuitability: '3 months and up',
    skinConcern: ['Bedtime', 'Dryness'],
    ingredients: [],
    usage: 'Begin with the Calming Bath, follow with a gentle massage using the Massage Oil, and seal in moisture with the Barrier Cream.',
    texture: 'Various',
    fragrance: 'Subtle natural chamomile'
  }
];

export const getProductById = (id: string) => products.find(p => p.id === id);
export const getProductBySlug = (slug: string) => products.find(p => p.slug === slug);
