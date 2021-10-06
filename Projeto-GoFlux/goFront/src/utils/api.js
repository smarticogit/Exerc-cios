const baseURL = "http://localhost:8000/";

const headers = {
  'Content-type': 'application/json'
};

export async function get(endpoint, token) {
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  try {
    const resposta = await fetch(baseURL + endpoint, {
      method: "GET",
      headers,
    });
    const data = await resposta.json();
    return { data, erro: !resposta.ok };
  } catch (error) {
    throw error;
  }
}


export async function post(endpoint, data, method, token) { 

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  try {
    const result = await fetch(baseURL + endpoint,  {
      method,
      body: JSON.stringify(data),
      headers,
    });
    return { result, erro: !result.ok };
  } catch (error) {
    throw error;
  }
}

export async function del(endpoint, method, token) { 

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  try {
    const result = await fetch(baseURL + endpoint,  {
      method,
      headers,
    });
    console.log(result);
    return { result, erro: !result.ok };
  } catch (error) {
    throw error;
  }
}