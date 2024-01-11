export default async function imageFetch(pokemonName) {
  const URL = `https://ex.traction.one/pokedex/pokemon/${pokemonName}`;
  const response = await fetch(URL, {
    method: 'GET',
    headers: {
      'User-Agent': 'BastionDiscordBot (https://bastion.traction.one, v10.13.0)',
    },
  });
  const data = await response.json();
  return data.sprites;
}
