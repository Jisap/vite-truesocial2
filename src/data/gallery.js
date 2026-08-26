export const galleryImages = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  src: `/images/gallery-${i + 1}.jpg`,
}));

// The source template points every video-gallery thumbnail at the same
// placeholder YouTube video — kept faithful to the source rather than
// inventing 9 different videos that don't exist.
export const galleryVideoId = "Y-x0efG1seA";
