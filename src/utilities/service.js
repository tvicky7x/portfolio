export async function addMessage({ name, email, message, path }) {
  try {
    const baseUrl =
      "https://script.google.com/macros/s/AKfycbxFXeVdfSqVBDxPh51JqITgm_VXyQqJdGFFRjR6VVOPgjkUHpk0LJ-VlF7H3ujRhPMrbA/exec";

    // Create URL object
    const url = new URL(baseUrl);

    // Append query params
    url.searchParams.append("name", name);
    url.searchParams.append("email", email);
    url.searchParams.append("massage", message); // keeping 'massage' for Sheet
    url.searchParams.append("path", path);

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error adding message:", error);
    return { status: "error", message: error.message };
  }
}
