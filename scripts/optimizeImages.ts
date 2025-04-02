import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const processDirectory = async (dirPath: string) => {
   // Создаем папку min если её нет
   const minDirPath = path.join(dirPath, 'min')
   if (!fs.existsSync(minDirPath)) {
      fs.mkdirSync(minDirPath)
   }

   // Читаем все файлы в директории
   const files = fs.readdirSync(dirPath)

   for (const file of files) {
      const filePath = path.join(dirPath, file)
      const stats = fs.statSync(filePath)

      if (stats.isDirectory()) {
         // Рекурсивно обрабатываем поддиректории
         await processDirectory(filePath)
         continue
      }

      // Проверяем, является ли файл изображением
      const ext = path.extname(file).toLowerCase()
      if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
         continue
      }

      try {
         const fileName = path.basename(file, ext)
         const outputPath = path.join(minDirPath, `min-${fileName}${ext}`)

         // Пропускаем, если файл уже существует
         if (fs.existsSync(outputPath)) {
            console.log(`File already exists: ${outputPath}`)
            continue
         }

         // Обрабатываем изображение
         await sharp(filePath)
            .resize(800, 600, {
               fit: 'inside',
               withoutEnlargement: true
            })
            .jpeg({ quality: 80 })
            .toFile(outputPath)

         console.log(`Optimized: ${filePath} -> ${outputPath}`)
      } catch (error) {
         console.error(`Error processing ${filePath}:`, error)
      }
   }
}

// Получаем путь к директории с изображениями
const imagesDir = path.join(process.cwd(), 'public', 'assets', 'images')

// Запускаем обработку
processDirectory(imagesDir)
   .then(() => console.log('Image optimization completed'))
   .catch((error) => {
      console.error('Error during image optimization:', error)
      process.exit(1)
   })
