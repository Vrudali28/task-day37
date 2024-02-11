const { writeFile } = require("node:fs/promises");

async function createAndWriteDataIntoFile(curr_date = new Date()) {
  try {
    const formattedDate = formatDate(curr_date);

    await writeFile(
      `${formattedDate}.txt`,
      curr_date.toString()
    );

    console.log(`File "${formattedDate}.txt" has been created with content: ${curr_date.toString()}`);
  } catch (err) {
    console.error(err);
  }
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hour = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day}_${hour}-${minutes}-${seconds}`;
}

createAndWriteDataIntoFile(new Date());
