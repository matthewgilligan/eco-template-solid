const now = new Date();

const eightHoursAhead = new Date(
  new Date().setTime(now.getTime() + 16 * 60 * 60 * 1000)
);

export const fetchCarbonIntensity = async () =>
  (
    await fetch(
      `https://api.carbonintensity.org.uk/regional/intensity/${now.toISOString()}/${eightHoursAhead.toISOString()}/regionid/13`
    )
  ).json();
