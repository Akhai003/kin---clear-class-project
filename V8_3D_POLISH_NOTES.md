# V8 3D Shop Smoothness + Polish

No content, products, imagery, layout, routes, or existing interactions were removed/replaced.

Changes are limited to performance/render polish inside the existing 3D showcase:
- Desktop target raised from 30fps to 60fps.
- Modern mobile target raised from 20fps to 45fps.
- Constrained/reduced-motion devices use 30fps.
- Mobile remains DPR 1 to protect Android GPU fill-rate.
- Desktop DPR can reach 1.35 for a slightly cleaner render.
- WebGL requests high-performance GPU preference.
- Stencil buffer disabled because this scene does not use it.
- Expensive realtime shadows remain disabled on compact/mobile layouts.
- Desktop shadow map reduced from 2048 to 1024 to remove a major GPU cost while preserving the shadow effect.
- Mobile keeps reduced page geometry counts.
- Renderer resize no longer mutates canvas CSS dimensions.
- Canvas gets compositor isolation / backface optimization.
- Existing ACES tone mapping, environment lighting, materials, textures, spring physics, hover, carousel, open/close, drag/orbit and product data are preserved.
