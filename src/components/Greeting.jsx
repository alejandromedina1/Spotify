export default function Greeting() {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  let greeting = "";

  if (currentHour < 12) {
    greeting = "Good Morning";
  } else if (currentHour < 18) {
    greeting = "Good Afternoon";
  } else if (currentHour < 22) {
    greeting = "Good Evening";
  } else {
    greeting = "Good Night";
  }

  return <h1 class="text-3xl font-bold">{greeting}</h1>;
}
