import { Ingredient } from '../types';

export const ingredients: Ingredient[] = [
  // SOOTHING
  {
    id: 'ing_1',
    slug: 'colloidal-oatmeal',
    name: 'Colloidal Oatmeal',
    category: 'Soothing',
    whatItIs: 'Finely milled oats suspended in liquid.',
    role: 'Soothes and protects dry, irritated skin by forming a hydrating barrier.',
    safetyContext: 'Pediatrician recommended for sensitive skin and eczema. 100% natural and hypoallergenic.'
  },
  {
    id: 'ing_2',
    slug: 'calendula-extract',
    name: 'Calendula Extract',
    category: 'Soothing',
    whatItIs: 'An extract derived from marigold flowers.',
    role: 'Provides natural anti-inflammatory and calming properties to reduce redness.',
    safetyContext: 'Gentle on newborn skin. Sourced from organic farms without pesticides.'
  },
  {
    id: 'ing_3',
    slug: 'bisabolol',
    name: 'Bisabolol',
    category: 'Soothing',
    whatItIs: 'A natural active compound derived from chamomile.',
    role: 'Acts as a potent skin-soothing agent that helps reduce inflammation and irritation.',
    safetyContext: 'Highly purified to remove allergens associated with whole chamomile extracts.'
  },
  {
    id: 'ing_4',
    slug: 'allantoin',
    name: 'Allantoin',
    category: 'Soothing',
    whatItIs: 'A naturally occurring compound found in the comfrey plant.',
    role: 'Promotes skin healing, softens the skin, and protects against chafing.',
    safetyContext: 'FDA-recognized skin protectant. Exceptionally mild and non-toxic.'
  },
  {
    id: 'ing_5',
    slug: 'aloe-vera-juice',
    name: 'Aloe Vera Juice',
    category: 'Soothing',
    whatItIs: 'The clear, cooling liquid extracted from aloe leaves.',
    role: 'Instantly cools and hydrates irritated or sun-exposed skin.',
    safetyContext: 'Cold-pressed and filtered to remove aloin, ensuring it is completely non-irritating.'
  },

  // MOISTURISING
  {
    id: 'ing_6',
    slug: 'glycerin',
    name: 'Plant-Derived Glycerin',
    category: 'Moisturising',
    whatItIs: 'A natural humectant derived from vegetable oils.',
    role: 'Draws moisture from the air into the skin and locks it in.',
    safetyContext: 'Highly purified to ensure zero irritation. A skin-identical ingredient.'
  },
  {
    id: 'ing_7',
    slug: 'squalane',
    name: 'Squalane (Olive-Derived)',
    category: 'Moisturising',
    whatItIs: 'A stable, lightweight lipid derived from olives.',
    role: 'Mimics the skin\'s natural oils to deeply moisturize without feeling heavy or greasy.',
    safetyContext: 'Non-comedogenic (won\'t clog pores) and safe for the most sensitive newborn skin.'
  },
  {
    id: 'ing_8',
    slug: 'shea-butter',
    name: 'Shea Butter',
    category: 'Moisturising',
    whatItIs: 'A rich fat extracted from the nut of the African shea tree.',
    role: 'Deeply nourishes and helps restore the skin\'s elasticity.',
    safetyContext: 'Unrefined and ethically sourced. Extremely low allergy risk.'
  },
  {
    id: 'ing_9',
    slug: 'sunflower-seed-oil',
    name: 'Sunflower Seed Oil',
    category: 'Moisturising',
    whatItIs: 'A lightweight oil extracted from sunflower seeds.',
    role: 'Provides essential fatty acids (Linoleic acid) to support the skin barrier.',
    safetyContext: 'Cold-pressed. Clinically shown to improve skin hydration in infants without disrupting the barrier.'
  },
  {
    id: 'ing_10',
    slug: 'jojoba-oil',
    name: 'Jojoba Oil',
    category: 'Moisturising',
    whatItIs: 'A liquid wax extracted from the seeds of the jojoba shrub.',
    role: 'Closely resembles human sebum, helping to balance and moisturize without greasiness.',
    safetyContext: 'Non-allergenic and excellent for cradle cap and dry patches.'
  },

  // BARRIER SUPPORT
  {
    id: 'ing_11',
    slug: 'ceramides',
    name: 'Ceramides (NP, AP, EOP)',
    category: 'Barrier Support',
    whatItIs: 'Lipids (fats) that are naturally found in high concentrations in the uppermost layers of skin.',
    role: 'Act like the "mortar" between skin cells, keeping moisture in and irritants out.',
    safetyContext: 'Bio-identical to human skin lipids. Crucial for managing eczema.'
  },
  {
    id: 'ing_12',
    slug: 'panthenol',
    name: 'Panthenol (Vitamin B5)',
    category: 'Barrier Support',
    whatItIs: 'A provitamin of B5 that converts to pantothenic acid in the skin.',
    role: 'Enhances skin barrier repair, reduces inflammation, and heavily moisturizes.',
    safetyContext: 'Extremely well-tolerated by all skin types. Common in diaper rash treatments.'
  },
  {
    id: 'ing_13',
    slug: 'zinc-oxide',
    name: 'Zinc Oxide (Non-Nano)',
    category: 'Barrier Support',
    whatItIs: 'A powdered white mineral.',
    role: 'Creates a physical, breathable barrier on top of the skin to block moisture and soothe diaper area chafing.',
    safetyContext: 'Non-nano particles mean it sits on the skin surface and won\'t be absorbed into the bloodstream.'
  },
  {
    id: 'ing_14',
    slug: 'oat-lipids',
    name: 'Oat Lipids',
    category: 'Barrier Support',
    whatItIs: 'The oil extracted from the oat kernel.',
    role: 'Rich in ceramides and vitamin E to repair the skin barrier and prevent water loss.',
    safetyContext: 'Hypoallergenic and exceptionally gentle.'
  },

  // CLEANSING
  {
    id: 'ing_15',
    slug: 'coco-glucoside',
    name: 'Coco-Glucoside',
    category: 'Cleansing',
    whatItIs: 'A mild surfactant (cleanser) derived from coconut oil and fruit sugar.',
    role: 'Gently lifts dirt and oil from the skin without stripping away natural moisture.',
    safetyContext: 'Biodegradable, non-irritating, and completely free from harsh sulfates like SLS/SLES.'
  },
  {
    id: 'ing_16',
    slug: 'decyl-glucoside',
    name: 'Decyl Glucoside',
    category: 'Cleansing',
    whatItIs: 'A gentle, plant-derived cleanser made from corn starch and coconut.',
    role: 'Creates a light, soft foam that cleanses without disrupting the acid mantle.',
    safetyContext: 'So gentle it is commonly used in products designed for sensitive skin and baby wipes.'
  },
  {
    id: 'ing_17',
    slug: 'sodium-cocoyl-glutamate',
    name: 'Sodium Cocoyl Glutamate',
    category: 'Cleansing',
    whatItIs: 'An amino acid-based surfactant derived from coconut oil and fermented sugar.',
    role: 'Provides extremely gentle cleansing while leaving skin feeling soft, not tight.',
    safetyContext: 'Hypoallergenic, sulfate-free, and respects the skin\'s natural pH.'
  },

  // SUPPORTING
  {
    id: 'ing_18',
    slug: 'purified-water',
    name: 'Purified Water (Aqua)',
    category: 'Supporting',
    whatItIs: 'Water that has been mechanically filtered or processed to remove impurities.',
    role: 'Acts as the primary solvent and base for lotions and washes, allowing ingredients to mix.',
    safetyContext: 'Undergoes rigorous multi-stage reverse osmosis and UV purification.'
  },
  {
    id: 'ing_19',
    slug: 'cetearyl-alcohol',
    name: 'Cetearyl Alcohol',
    category: 'Supporting',
    whatItIs: 'A fatty alcohol derived from plant oils (not a drying alcohol).',
    role: 'Thickens formulas and helps water and oil mix together while softening the skin.',
    safetyContext: 'Unlike drying alcohols (like ethanol), fatty alcohols are nourishing and non-irritating.'
  },
  {
    id: 'ing_20',
    slug: 'sodium-benzoate',
    name: 'Sodium Benzoate',
    category: 'Supporting',
    whatItIs: 'A food-grade preservative naturally found in apples and cranberries.',
    role: 'Prevents harmful bacteria, mold, and yeast from growing in water-based products.',
    safetyContext: 'Safe, effective, and widely approved for use in natural and organic baby care.'
  },
  {
    id: 'ing_21',
    slug: 'potassium-sorbate',
    name: 'Potassium Sorbate',
    category: 'Supporting',
    whatItIs: 'A mild preservative naturally occurring in berries.',
    role: 'Works alongside Sodium Benzoate to keep the product safe and fresh.',
    safetyContext: 'A gentle, food-safe alternative to parabens and formaldehyde-releasing preservatives.'
  },
  {
    id: 'ing_22',
    slug: 'citric-acid',
    name: 'Citric Acid',
    category: 'Supporting',
    whatItIs: 'A natural acid found in citrus fruits.',
    role: 'Adjusts the pH of the product to perfectly match the natural acidity of baby\'s skin.',
    safetyContext: 'Used in minute amounts strictly for pH balancing. Non-irritating.'
  }
];

export const getIngredientById = (id: string) => ingredients.find(i => i.id === id);
export const getIngredientBySlug = (slug: string) => ingredients.find(i => i.slug === slug);
