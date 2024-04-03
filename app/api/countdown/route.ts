export async function GET(req: Request) {
  const targetDate = new Date('2024-12-31T23:59:59Z'); // Example: New Year's Eve 2024

  // Calculate the difference in milliseconds between the target date and the current time
  const currentTime = new Date().getTime();
  const difference = targetDate.getTime() - currentTime;
  if (difference <= 0) {
    return Response.json({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        message: 'The countdown has ended.'
    })
  }
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Send the countdown time back as a JSON response
  return Response.json({
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    message: 'The countdown has ongoing.'
})
}