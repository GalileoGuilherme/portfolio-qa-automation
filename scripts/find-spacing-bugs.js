const https = require('https');
https.get('https://portfolio-omega-six-18.vercel.app/static/js/main.8b00ca07.js', res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Look for Endereço and Pendente in checkout
    const p = data.indexOf('Informe o endereço para entrega');
    if (p !== -1) {
      console.log('Address checkout context:');
      console.log(data.slice(p - 300, p + 200));
    }

    // Look for CASO and CENÁRIO in exercises modal
    const p2 = data.indexOf('CASO ');
    if (p2 !== -1) {
      console.log('CASO context:');
      console.log(data.slice(p2 - 100, p2 + 300));
    } else {
      // Find where "Cenário" or "CENÁRIO" appears
      let idx = 0;
      while ((idx = data.indexOf('Cen', idx)) !== -1) {
        const slice = data.slice(idx - 50, idx + 100);
        if (slice.includes('CASO') || slice.includes('caso') || slice.includes('badge')) {
          console.log('Found:', slice);
        }
        idx += 5;
      }
    }
  });
});
