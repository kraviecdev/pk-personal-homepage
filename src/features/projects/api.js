export const getProjects = async () => {
  const response = await fetch("https://api.github.com/users/patrick36212/repos");

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};