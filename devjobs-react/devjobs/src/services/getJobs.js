export async function getJobs(){
    const response = await fetch("/data.json")
    const data = response.json()
    return data
}
