// Utility to create an image element
const createImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', (error) => reject(error));
    image.setAttribute('crossOrigin', 'anonymous'); // needed to avoid cross-origin issues on CodeSandbox
    image.src = url;
  });

/**
 * This function takes an image URL, the details of the crop area, 
 * and optionally the rotation angle, then uses the canvas API to
 * create and return a cropped version of the image.
 *
 * @param {string} imageURL - The source URL of the image to be cropped.
 * @param {object} pixelCrop - The crop area's pixel coordinates and dimensions.
 * @returns {Promise<string>} A promise that resolves with the cropped image URL.
 */
async function getCroppedImg(imageURL, pixelCrop) {
  const image = await createImage(imageURL);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  // Set canvas size to match the desired crop area
  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  // Drawing the cropped image on the canvas
  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height
  );

  // Convert canvas to Blob, then Blob to URL
  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      resolve(URL.createObjectURL(blob));
    }, 'image/jpeg');
  });
}

export default getCroppedImg;
