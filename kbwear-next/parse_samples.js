const fs = require('fs');
const path = require('path');

const html = fs.readFileSync('f:\\KBwear\\kbwear\\samples.html', 'utf8');
// Fix regex to handle attributes order variations if any
const regex = /<img\s+src="([^"]+)"\s+alt="([^"]+)"/g;

const samples = [];
let match;
while ((match = regex.exec(html)) !== null) {
  // Only include sample images, filter out logo if matched
  if (match[1].includes('sample-')) {
    samples.push({
        src: match[1].replace('assets/', '/assets/'),
        alt: match[2]
    });
  }
}

fs.writeFileSync('f:\\KBwear\\kbwear\\kbwear-next\\samples.json', JSON.stringify(samples, null, 2));
console.log(`Extracted ${samples.length} samples.`);
