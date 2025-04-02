export const reduceImageResolution = (
   imageUrl: string,
   maxWidth: number = 800,
   maxHeight: number = 600,
   quality: number = 0.8
): Promise<string> => {
   return new Promise((resolve, reject) => {
      const img = new Image()
      img.crossOrigin = 'anonymous'

      img.onload = () => {
         const canvas = document.createElement('canvas')
         let width = img.width
         let height = img.height

         // Calculate new dimensions while maintaining aspect ratio
         if (width > height) {
            if (width > maxWidth) {
               height = Math.round((height * maxWidth) / width)
               width = maxWidth
            }
         } else {
            if (height > maxHeight) {
               width = Math.round((width * maxHeight) / height)
               height = maxHeight
            }
         }

         canvas.width = width
         canvas.height = height

         const ctx = canvas.getContext('2d')
         if (!ctx) {
            reject(new Error('Could not get canvas context'))
            return
         }

         ctx.drawImage(img, 0, 0, width, height)

         // Convert to base64 with specified quality
         const reducedImageUrl = canvas.toDataURL('image/jpeg', quality)
         resolve(reducedImageUrl)
      }

      img.onerror = () => {
         reject(new Error('Failed to load image'))
      }

      img.src = imageUrl
   })
}
