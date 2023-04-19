const fs = require('fs');

const createDirectoryIfNotExists = (path) => {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }
  return Promise.resolve(path);
};

const writeJSON = (path, data) => {
  if (data instanceof Object && !Array.isArray(data)) {
    fs.writeFileSync(path, JSON.stringify(data));
    return Promise.resolve();
  } else {
    return Promise.reject(new Error('Invalid Data'));
  }
};

const app = async () => {
  try {
    const path = await createDirectoryIfNotExists('./helloFolder');
    await writeJSON(`${path}/myName.json`, { name: 'Bay' });
  } catch (err) {
    console.log(err);
  }
};

app();