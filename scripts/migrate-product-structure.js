#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// HS Code mapping for different categories
const HS_CODE_DEFAULTS = {
  handicraft: '6304.99.00',
  agriculture: '1005.90.00',
  automobile: '8708.99.90',
};

function migrateProductData(filePath, hsCodeDefault) {
  try {
    console.log(`\n📄 Processing: ${path.basename(filePath)}`);
    
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    const migratedData = data.map((product) => {
      const migrated = {
        id: product.id,
        name: product.name,
        slug: product.slug,
        image: product.image,
        description: product.description,
        sampleMoq: 1,
        mainMoq: product.moq || 1,
        hsCode: hsCodeDefault,
        orderType: 'main',
        minPrice: product.minPrice,
        maxPrice: product.maxPrice,
      };
      
      return migrated;
    });
    
    // Write back with proper formatting
    fs.writeFileSync(filePath, JSON.stringify(migratedData, null, 2), 'utf8');
    
    console.log(`✅ Migrated ${migratedData.length} products`);
    console.log(`   - Replaced 'moq' with 'sampleMoq' (1) + 'mainMoq' (original value)`);
    console.log(`   - Replaced 'quantity' with 'hsCode' (${hsCodeDefault})`);
    console.log(`   - Added 'orderType' (main)`);
    
    return true;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

async function main() {
  console.log('🚀 Starting Product Structure Migration...\n');
  
  const dataDir = path.join(__dirname, '..', 'data');
  
  const files = [
    ['handicraft.json', HS_CODE_DEFAULTS.handicraft],
    ['agriculture.json', HS_CODE_DEFAULTS.agriculture],
    ['automobile.json', HS_CODE_DEFAULTS.automobile],
  ];
  
  let successCount = 0;
  let totalCount = files.length;
  
  for (const [fileName, hsCode] of files) {
    const filePath = path.join(dataDir, fileName);
    
    if (fs.existsSync(filePath)) {
      if (migrateProductData(filePath, hsCode)) {
        successCount++;
      }
    } else {
      console.log(`⚠️  File not found: ${filePath}`);
    }
  }
  
  console.log(`\n${'='.repeat(60)}`);
  console.log(`✨ Migration Complete: ${successCount}/${totalCount} files updated`);
  console.log(`${'='.repeat(60)}\n`);
  
  if (successCount === totalCount) {
    console.log('📋 Summary:');
    console.log('  • sampleMoq: Always 1 (for samples)');
    console.log('  • mainMoq: Original MOQ value (for bulk orders)');
    console.log('  • hsCode: Default codes by category');
    console.log('  • orderType: "main" (can be overridden by form)');
    console.log('\n✅ All products ready for the new system!');
  }
}

main().catch(console.error);
