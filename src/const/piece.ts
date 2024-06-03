// Box
export const BOX_TOP_THICKNESS = 1 / 16;
export const BOX_SIDE_THICKNESS = 1.2 / 16;

export const BOX_HEIGHT = 9.6 / 16;
export const FLAT_BOX_HEIGHT = 3.2 / 16;

export const BASIC_SIZE = 8 / 16;

// Top Cylinder
export const TOP_CYLINDER_RADIUS = 2.4 / 16;
export const TOP_CYLINDER_HEIGHT = 1.6 / 16;

// Inner Cylinder
export const INNER_CYLINDER_INNER_RADIUS = 2.4 / 16;
export const INNER_CYLINDER_OUTER_RADIUS = 3.2 / 16;

export const INNER_CYLINDER_TALL_HEIGHT = BOX_HEIGHT - BOX_TOP_THICKNESS;
export const INNER_CYLINDER_FLAT_HEIGHT = FLAT_BOX_HEIGHT - BOX_TOP_THICKNESS;

export const INNER_CYLINDER_THETA = 24;

// Inside box
export const INNER_SURFACE_THICKNESS = 0.8 / 16;
export const INNER_SURFACE_HEIGHT = 6.4 / 16;
export const INNER_SURFACE_WIDTH =
  BASIC_SIZE - BOX_SIDE_THICKNESS - INNER_CYLINDER_OUTER_RADIUS;
