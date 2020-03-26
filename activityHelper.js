/**
 * Lets say that for a day to qualify, there must be one activity of greater than 5 mins
 * @param dayActivities
 * @returns {boolean} if the days activities meet the required criteria
 */
export const doesDayMeetAwardRequirements = dayActivities => {
  if (!dayActivities) {
    throw new Error('Help me');
  }

  if (!Array.isArray(dayActivities)) {
    return false;
  }

  if (dayActivities.length === 0) {
    return false;
  }

  const qualifyingActivities = dayActivities.filter(
    activity => activity.duration > 5,
  );

  return qualifyingActivities.length > 0;
};
