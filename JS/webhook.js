const fetch = require('node-fetch'); // Ganti dengan library fetch yang sesuai dengan lingkungan hosting Anda

async function handleWebhook(req) {
  // Dapatkan data sensor dari badan permintaan
  const data = await req.json();
  const field1 = data.field1;
  const field2 = data.field2;
  const timestamp = data.timestamp;

  // Proses data sensor sesuai keinginan Anda
  console.log(`Field 1: ${field1}`);
  console.log(`Field 2: ${field2}`);
  console.log(`Timestamp: ${timestamp}`);

  // [Opsional] Kirimkan data ke server lain atau lakukan tindakan lain
  // Contoh: menggunakan fetch untuk mengirim data ke server lain
  // await fetch('https://api.example.com/data', {
  //   method: 'POST',
  //   body: JSON.stringify({ field1, field2, timestamp }),
  // });

  // Kirim respons ke ThingSpeak
  return new Response('OK', { status: 200 });
}

addEventListener('fetch', (event) => {
  if (event.request.url.endsWith('/webhook')) {
    event.respondWith(handleWebhook(event.request));
  }
});

