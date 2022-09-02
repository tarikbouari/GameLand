export default async function getComment() {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/AFFSRiO8tq3BNoRoizLk/comments?item_id=1');
  const data = response.json();
  return data;
}