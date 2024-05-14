
export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  try {
    const data = req.body;
    const { field1, field2, timestamp } = data;

    // Proses data sensor sesuai keinginan Anda
    console.log(`Field 1: ${field1}`);
    console.log(`Field 2: ${field2}`);
    console.log(`Timestamp: ${timestamp}`);

    // [Opsional] Kirimkan data ke server lain atau lakukan tindakan lain
    // Contoh: menggunakan fetch untuk mengirim data ke server lain
    // await fetch('https://api.example.com/data', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ field1, field2, timestamp }),
    // });

    res.status(200).send('OK');
  } catch (error) {
    console.error('Error handling webhook:', error);
    res.status(500).send('Internal Server Error');
  }
};
