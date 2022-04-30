import Airtable, { Error } from "airtable";

async function fetchAirtable(dbTable, setValue) {
  let base = new Airtable({
    apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
  }).base(process.env.REACT_APP_AIRTABLE_BASE_ID);
  const table = base(dbTable);
  try {
    setValue(
      await table.select({ sort: [{ field: "id", direction: "asc" }] }).all()
    );
  } catch (error) {
    console.log(error);
    throw (Error, error);
  }
}

const fetchCv = async (setCV) => {
  var base = new Airtable({
    apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
  }).base(process.env.REACT_APP_AIRTABLE_BASE_ID);
  const table = base("CV");
  try {
    const CV = await table.select({}).all();
    setCV(CV[0].fields.Attachments[0].url);
  } catch (error) {
    console.error(error);
  }
};

export { fetchAirtable, fetchCv };
