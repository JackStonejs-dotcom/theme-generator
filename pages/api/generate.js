/**
 * BİROYA Customizer Engine & Theme Generator
 * File: generate.js
 */

const fs = require('fs');
const path = require('path');

// 25 Master Font Mapping Engine
const AVAILABLE_FONTS = [
  'Tajawal', 'Cairo', 'Amiri', 'Aref Ruqaa', 'Reem Kufi',
  'Changa', 'Lemonada', 'Lalezar', 'El Messiri', 'Scheherazade New',
  'Katibeh', 'Lateef', 'Mada', 'Noto Naskh Arabic', 'Zain',
  'Rubik', 'Playfair Display', 'Montserrat', 'Cinzel', 'Great Vibes',
  'Pacifico', 'Marcellus', 'Work Sans', 'Vibes', 'Nabla'
];

/**
 * Main Generation Handler
 * Processes incoming canvas elements, text customization, shapes, and positions.
 */
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { text, fontClass, fontSize, elements, themeMode, customDimensions } = req.body;

      // Validate Font Selection
      const selectedFont = fontClass || 'f-1';

      // Process Canvas Elements
      const processedElements = (elements || []).map((item, index) => {
        return {
          id: item.id || `element-${index}`,
          type: item.type, // 'text', 'shape', 'decor'
          content: item.content || '',
          font: item.font || selectedFont,
          size: item.size || fontSize || 48,
          position: {
            top: `${item.top || 50}%`,
            left: `${item.left || 50}%`
          },
          shapeDetails: item.type === 'shape' ? {
            kind: item.shape, // 'circle', 'square', 'rectangle'
            borderWidth: '3px',
            borderColor: '#F59E0B'
          } : null
        };
      });

      // Response Structure
      const resultData = {
        success: true,
        timestamp: new Date().toISOString(),
        theme: themeMode || 'dark',
        designSummary: {
          totalElements: processedElements.length,
          primaryText: text || '',
          primaryFontSize: `${fontSize || 48}px`,
          activeFontClass: selectedFont,
          elements: processedElements
        },
        message: 'تم معالجة وتوليد بيانات التصميم بنجاح'
      };

      return res.status(200).json(resultData);

    } catch (error) {
      console.error('Error generating design payload:', error);
      return res.status(500).json({ 
        success: false, 
        error: 'حدث خطأ أثناء معالجة بيانات التصميم',
        details: error.message 
      });
    }
  } else {
    // GET or Fallback request
    return res.status(200).json({
      status: 'active',
      service: 'BİROYA Customization & Theme Generator API',
      supportedFontsCount: AVAILABLE_FONTS.length,
      availableFonts: AVAILABLE_FONTS
    });
  }
}

/**
 * Helper function to parse SVG/Canvas configuration if exported
 */
export function buildCanvasSvgPayload(canvasState) {
  const { width = 1000, height = 1000, elements = [] } = canvasState;
  
  let svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">`;
  svgContent += `<rect width="100%" height="100%" fill="#070B14"/>`;

  elements.forEach(el => {
    const posX = (el.left / 100) * width;
    const posY = (el.top / 100) * height;

    if (el.type === 'text') {
      svgContent += `<text x="${posX}" y="${posY}" font-size="${el.size}" fill="#FCD34D" text-anchor="middle" dominant-baseline="middle">${el.content}</text>`;
    } else if (el.type === 'shape') {
      if (el.shape === 'circle') {
        svgContent += `<circle cx="${posX}" cy="${posY}" r="${(el.size || 100) / 2}" stroke="#F59E0B" stroke-width="4" fill="none"/>`;
      } else {
        svgContent += `<rect x="${posX - (el.size/2)}" y="${posY - (el.size/2)}" width="${el.size}" height="${el.size}" stroke="#F59E0B" stroke-width="4" fill="none"/>`;
      }
    }
  });

  svgContent += `</svg>`;
  return svgContent;
}
