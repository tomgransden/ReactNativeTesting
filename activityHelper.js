/**
 * Lets say that for a day to qualify, there must be one activity of greater than 5 mins
 * @param dayActivities
 * @returns {boolean} if the days activities meet the required criteria
 */
export const doesDayMeetAwardRequirements = dayActivities => {
  if (!dayActivities) {
    return false;
  }

  if (!Array.isArray(dayActivities)) {
    return false;
  }

  if (dayActivities.length === 0) {
    return false;
  }

  const qualifyingActivities = dayActivities.find(
    activity => activity.duration > 5,
  );

  return qualifyingActivities ? true : false;
};
