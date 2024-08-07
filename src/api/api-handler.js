export async function get(url, data) {
  try {
    const response = await fetch(`${url}/${data ? data : ""}`)
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

export async function post(url, data, isUpdate) {
  try {
    const response = await fetch(url,{
      method: isUpdate ? 'PUT' : 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    return await response.json()
  }
  catch (error) {
    console.log(error)
  }
}