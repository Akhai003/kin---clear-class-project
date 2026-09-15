import { Article } from '../types';

const assetBase = typeof window !== 'undefined' && window.location.pathname.startsWith('/kin---clear-class-project') ? '/kin---clear-class-project/' : '/';
const editorialImage = (name: string) => `${assetBase}assets/editorial/${name}.svg`;

export const articles: Article[] = [
  {
    id: 'art_1',
    slug: 'understanding-baby-skin-barrier',
    title: 'Understanding the Baby Skin Barrier',
    excerpt: 'Why newborn skin loses moisture twice as fast as adult skin, and how to protect it.',
    content: `
## The Invisible Shield
When your baby is born, their skin is undergoing a massive transition from a watery environment to the dry air of the outside world. This transition puts significant stress on the skin barrier.

The skin barrier, or stratum corneum, is the outermost layer of the skin. Think of it like a brick wall. The skin cells are the bricks, and the lipids (fats) are the mortar holding them together. 

In newborns, this "mortar" is less developed. The cells are smaller and the lipid layer is thinner. Because of this, baby skin loses water up to two times faster than adult skin, a process known as Transepidermal Water Loss (TEWL).

## Why It Matters
When the skin barrier is compromised or underdeveloped, two things happen:
1. **Moisture escapes easily**, leading to dry, flaky skin.
2. **Irritants enter easily**, leading to redness, rashes, and potential eczema flare-ups.

## How to Protect the Barrier
Protecting your baby's skin isn't about applying as many products as possible. It's about applying the *right* products at the *right* time.

- **Don't over-wash:** Water itself can be drying. Keep baths short (5-10 minutes) and use lukewarm water.
- **Use gentle, pH-balanced cleansers:** Harsh soaps strip away natural lipids. Look for cleansers formulated specifically for baby skin.
- **Moisturize immediately:** Apply a moisturizer within three minutes of taking your baby out of the bath. This "locks in" the hydration before it can evaporate.
- **Look for barrier-building ingredients:** Ceramides, squalane, and oat lipids directly supplement the skin's natural "mortar."

By understanding how delicate this barrier is, you can make informed choices that keep your baby's skin resilient and calm.
    `,
    image: editorialImage('baby-skin'),
    category: 'Baby Skin 101',
    readTime: '4 min read',
    date: 'Oct 12, 2023',
    tags: ['Newborn', 'Skin Health', 'Dryness'],
    relatedProductIds: ['prod_5', 'prod_6', 'prod_12']
  },
  {
    id: 'art_2',
    slug: 'how-to-read-ingredient-list',
    title: 'How to Read a Baby-Care Ingredient List',
    excerpt: 'A practical guide to cutting through the jargon and spotting hidden irritants.',
    content: `
## Decoding the Label
Flipping over a bottle of baby lotion and seeing a paragraph of unpronounceable chemical names can be daunting. But reading an ingredient list doesn't require a chemistry degree. You just need to know the basic rules.

## Rule 1: Order Matters
Ingredients are listed in order of concentration. The first ingredient is what the product contains the most of (usually water or aloe). Ingredients listed at the very end are present in the smallest amounts (usually preservatives or pH adjusters).

## Rule 2: Don't Fear Long Words
Just because a word is long or sounds scientific doesn't mean it's harmful. 
- *Butyrospermum Parkii* is just the botanical name for Shea Butter.
- *Tocopherol* is Vitamin E.
- *Sodium Benzoate* is a safe, food-grade preservative found in apples.

## Rule 3: Spot the Hidden Fragrance
"Fragrance" or "Parfum" is a loophole term. Under current regulations, a company can hide dozens of undisclosed chemicals under this one word, protecting it as a "trade secret." 

For sensitive baby skin, fragrance is the number one cause of contact dermatitis. Always look for products that are explicitly labeled "Fragrance-Free." (Note: "Unscented" does not mean fragrance-free; it often means masking chemicals have been added to hide the smell of other ingredients).

## Rule 4: Identify the Cleansers (Surfactants)
In washes and shampoos, look for gentle surfactants. Avoid SLS (Sodium Lauryl Sulfate) and SLES, which can strip the skin barrier. Instead, look for gentle, plant-derived alternatives like *Coco-Glucoside* or *Decyl Glucoside*.

At Kin & Clear, we believe transparency is the ultimate form of safety. That's why our Ingredient Library explains exactly what every ingredient is, in plain English.
    `,
    image: editorialImage('ingredient-label'),
    category: 'Ingredients Explained',
    readTime: '5 min read',
    date: 'Nov 04, 2023',
    tags: ['Ingredients', 'Safety', 'First-Time Parents'],
    relatedIngredientIds: ['ing_15', 'ing_8']
  },
  {
    id: 'art_3',
    slug: 'building-tear-free-bath-routine',
    title: 'Building a Simple, Tear-Free Bath Routine',
    excerpt: 'Step-by-step guidance for making bath time calm, safe, and bonding.',
    content: `
## Rethinking Bath Time
Bath time can be a wonderful bonding experience, but for many new parents, it feels like a stressful, slippery chore. The key to a successful bath time is preparation and simplicity.

## Step 1: Gather Everything Beforehand
Never leave a baby unattended in a bath, even for a second. Before you turn on the water, ensure everything is within arm's reach:
- Towel (preferably hooded)
- Washcloth
- Gentle Baby Wash
- Clean diaper
- Moisturizing lotion

## Step 2: The Perfect Temperature
Aim for water that is around 37°C (98.6°F) — body temperature. It should feel comfortably warm, not hot, on the inside of your wrist. The room itself should also be warm to prevent shivering when they get out.

## Step 3: Start from the Top
Wash your baby's face first with just water and a soft cloth. Then move to the hair, using a tear-free shampoo. Rinse by cupping water in your hand and pouring it gently backward over their head, protecting their eyes. 

## Step 4: Keep it Brief
Babies don't need long, soaking baths. 5 to 10 minutes is plenty. Any longer, and the water will begin to dry out their delicate skin barrier.

## Step 5: The 3-Minute Rule
As soon as you lift your baby out, wrap them immediately in a towel and gently pat them dry (don't rub). While their skin is still slightly damp, apply a moisturizer to lock in the hydration. This is known as the "3-Minute Rule" and is crucial for preventing dry skin and eczema.
    `,
    image: editorialImage('bath-routine'),
    category: 'Bath & Routines',
    readTime: '4 min read',
    date: 'Dec 15, 2023',
    tags: ['Bath Time', 'Routines', 'Newborn'],
    relatedProductIds: ['prod_1', 'prod_5']
  }
  ,{
    id: 'art_4', slug: 'why-baby-skin-gets-dry', title: 'Why Baby Skin Gets Dry So Quickly',
    excerpt: 'A simple explanation of water loss, weather, bath habits, and what a moisturiser is actually doing.',
    content: `## Why dryness is common\nBaby skin is thinner and still developing, so it can lose water more quickly than adult skin. Warm rooms, long baths, dry weather and frequent cleansing can all add to that water loss.\n\n## Keep the routine simple\nUse lukewarm water, keep baths short, choose a gentle cleanser only where needed, and apply moisturiser while skin is still slightly damp. The goal is not to coat the skin in many products; it is to reduce unnecessary stripping and support the barrier.\n\n## When to ask for help\nPersistent cracking, oozing, swelling or a rash that is getting worse deserves professional medical advice rather than more product experimentation.`,
    image: editorialImage('hydration'), category: 'Baby Skin 101', readTime: '5 min read', date: 'Jan 08, 2024', tags: ['Dryness','Baby Skin','Routine'], relatedProductIds: ['prod_5','prod_6']
  },
  {
    id: 'art_5', slug: 'fragrance-free-explained', title: 'What Does “Fragrance-Free” Actually Mean?',
    excerpt: 'Why fragrance language can be confusing and what to look for when comparing labels.',
    content: `## Start with the label\nFragrance language can be confusing because scent, masking ingredients and botanical extracts are not always described in the same way. A clear product page should tell you whether fragrance has intentionally been added and why.\n\n## Context matters\nA single marketing claim cannot tell you whether a complete formula will suit every baby. Use fragrance information alongside the full ingredient list, usage directions and your child’s individual needs.`,
    image: editorialImage('clear-labels'), category: 'Ingredients Explained', readTime: '4 min read', date: 'Jan 19, 2024', tags: ['Ingredients','Labels','Fragrance']
  },
  {
    id: 'art_6', slug: 'simple-diaper-care-routine', title: 'A Simple Diaper-Care Routine',
    excerpt: 'Clean gently, allow the area to dry, and understand where a barrier product fits.',
    content: `## Three useful steps\nClean only as much as needed, pat rather than scrub, and give the skin a moment to dry before the fresh diaper goes on.\n\n## Where barrier products fit\nA barrier balm or cream can reduce direct contact with moisture and friction. Use products according to their directions and seek medical advice for severe, persistent or unusual rashes.`,
    image: editorialImage('diaper-care'), category: 'Bath & Routines', readTime: '4 min read', date: 'Feb 03, 2024', tags: ['Diaper Care','Routine','Basics'], relatedProductIds: ['prod_9','prod_10','prod_11']
  },
  {
    id: 'art_7', slug: 'colloidal-oatmeal-explained', title: 'Ingredient Deep Dive: Colloidal Oatmeal',
    excerpt: 'What colloidal oatmeal is, why it appears in sensitive-skin products, and how to read the claim in context.',
    content: `## What it is\nColloidal oatmeal is finely milled oat material prepared so it can disperse through a topical formula. It is used in products designed to feel soothing and supportive on dry skin.\n\n## The whole formula still matters\nAn ingredient can be useful without making the entire product automatically right for everyone. Concentration, the rest of the formula and how the product is used all matter.`,
    image: editorialImage('oatmeal'), category: 'Ingredients Explained', readTime: '6 min read', date: 'Feb 18, 2024', tags: ['Oatmeal','Ingredients','Sensitive Skin'], relatedIngredientIds: ['ing_1']
  },
  {
    id: 'art_8', slug: 'newborn-care-kit', title: 'What Do You Actually Need in a Newborn Care Kit?',
    excerpt: 'A deliberately short list for parents who would rather start simple and add only when needed.',
    content: `## Start smaller than the internet suggests\nA gentle cleanser, a straightforward moisturiser, diaper-changing basics and a few soft cloths cover many everyday situations. You can add specialised products when a real need appears.\n\n## Fewer decisions can be useful\nA smaller routine makes it easier to notice how the skin responds and which product is doing what.`,
    image: editorialImage('simple-routine'), category: 'First-Time Parent Guides', readTime: '5 min read', date: 'Mar 02, 2024', tags: ['Newborn','Checklist','First-Time Parents'], relatedProductIds: ['prod_15']
  },
  {
    id: 'art_9', slug: 'lotion-vs-cream', title: 'Lotion vs Cream: Which Texture Fits the Routine?',
    excerpt: 'A practical comparison of lighter lotions and richer creams without turning texture into a rule.',
    content: `## Lotion\nLotions usually spread easily and can suit quick everyday moisturising.\n\n## Cream\nCreams are generally richer and can feel more protective when skin is very dry.\n\n## Choose for the situation\nClimate, body area, how dry the skin feels and personal preference can all influence which texture is easier to use consistently.`,
    image: editorialImage('formulation'), category: 'Product Guides', readTime: '4 min read', date: 'Mar 16, 2024', tags: ['Moisturiser','Product Guide','Texture'], relatedProductIds: ['prod_5','prod_6']
  },
  {
    id: 'art_10', slug: 'bedtime-wind-down-routine', title: 'Building a Calm Bedtime Wind-Down',
    excerpt: 'A low-stimulation bath-and-moisture sequence that keeps the focus on comfort, not complexity.',
    content: `## Routine before products\nDimmer light, a predictable order and fewer transitions can make bedtime feel calmer. If bath time is part of the routine, keep it short and comfortable.\n\n## After the bath\nPat dry, moisturise if needed, dress comfortably and move on. The routine does not need a long list of products to feel complete.`,
    image: editorialImage('parent-care'), category: 'Bath & Routines', readTime: '5 min read', date: 'Apr 01, 2024', tags: ['Bedtime','Bath','Routine'], relatedProductIds: ['prod_4','prod_8','prod_16']
  },
  {
    id: 'art_11', slug: 'why-preservatives-exist', title: 'Why Water-Based Products Need Preservation',
    excerpt: 'Preservatives are easy to fear and important to understand: here is the role they play in a formula.',
    content: `## Water changes the risk\nProducts that contain water can support microbial growth if they are not appropriately preserved. Preservation systems are designed to help the product remain safe during its intended use.\n\n## Evaluate the complete system\nPackaging, pH, ingredient compatibility, concentration and expected use all influence preservation. “Preservative-free” is not automatically a better goal for every formula.`,
    image: editorialImage('formulation'), category: 'Ingredients Explained', readTime: '6 min read', date: 'Apr 14, 2024', tags: ['Preservatives','Formula','Ingredients']
  },
  {
    id: 'art_12', slug: 'compare-baby-products', title: 'How to Compare Baby Products Without Getting Overwhelmed',
    excerpt: 'Ignore the front-label noise and compare purpose, ingredients, directions and fit for your routine.',
    content: `## Compare the job first\nTwo products can look similar but be intended for different jobs. Start with what you need the product to do.\n\n## Then compare the evidence you can actually see\nRead the ingredient list, usage directions, age guidance, size, price and relevant warnings. Treat broad marketing language as a prompt to look for more context, not as the conclusion.`,
    image: editorialImage('ingredient-label'), category: 'First-Time Parent Guides', readTime: '6 min read', date: 'May 02, 2024', tags: ['Shopping','Labels','First-Time Parents']
  }

];

export const getArticleById = (id: string) => articles.find(a => a.id === id);
export const getArticleBySlug = (slug: string) => articles.find(a => a.slug === slug);
