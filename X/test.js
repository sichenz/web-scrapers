const happyDL = require("happy-dl");

async function fetchTwitterData(url) {
  try {
    const result = await happyDL.twitterDownloader(url);
    // Ensure we output valid JSON even if result is undefined.
    if (result === undefined) {
      console.log(JSON.stringify({ error: "No media found or result undefined" }));
    } else {
      console.log(JSON.stringify(result));
    }
  } catch (error) {
    // Print the error to stderr and output a JSON object with the error message.
    console.error("Error fetching Twitter media details:", error);
    console.log(JSON.stringify({ error: error.message }));
  }
}

const twitterUrl = process.argv[2];
if (!twitterUrl) {
  console.error("No twitter URL provided");
  console.log(JSON.stringify({ error: "No twitter URL provided" }));
  process.exit(1);
}

fetchTwitterData(twitterUrl);
