import { Article } from '../types';

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
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1544626053-8985dc34ae63?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1596541604085-f55a153de5a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Bath & Routines',
    readTime: '4 min read',
    date: 'Dec 15, 2023',
    tags: ['Bath Time', 'Routines', 'Newborn'],
    relatedProductIds: ['prod_1', 'prod_5']
  }
];

export const getArticleById = (id: string) => articles.find(a => a.id === id);
export const getArticleBySlug = (slug: string) => articles.find(a => a.slug === slug);
