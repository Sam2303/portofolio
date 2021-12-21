import Airtable, { Error } from 'airtable';


async function fetchAirtable( dbTable ) {
    let base = new Airtable({
        apiKey: process.env.REACT_APP_AIRTABLE_API_KEY
    }).base(process.env.REACT_APP_AIRTABLE_BASE_ID);
    const table = base(dbTable)
    try {
        return await table
            .select({ sort: [{ field: "id", direction: "asc" }] })
            .all() 
    } catch (error) {
        console.log(error);
        throw(Error, error)
    }
}


export { fetchAirtable }