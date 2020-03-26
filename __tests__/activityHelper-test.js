import {doesDayMeetAwardRequirements} from '../activityHelper';

const nonQualifyingDay = [
  {title: 'Cycling', duration: 3, day: 'Monday'},
  {title: 'Darts', duration: 4, day: 'Monday'},
];

const qualifyingDay = [
  {title: 'Cycling', duration: 1, day: 'Monday'},
  {title: 'Darts', duration: 3, day: 'Monday'},
  {title: 'Football', duration: 20, day: 'Monday'},
];

describe('activityHelper', () => {
  describe('doesDayMeetAwardRequirements', () => {
    it('Throws an error when null passed in', () => {
      expect(() => doesDayMeetAwardRequirements(null)).toThrowError();
    });

    it('Throws an errorc when undefined passed in', () => {
      expect(() => doesDayMeetAwardRequirements(undefined)).toThrowError();
    });

    it('Returns false when string passed in', () => {
      const result = doesDayMeetAwardRequirements('mockString');
      expect(result).toBe(false);
    });

    it('Returns false when number passed in', () => {
      const result = doesDayMeetAwardRequirements(123);
      expect(result).toBe(false);
    });

    it('Returns false when empty array passed in', () => {
      const result = doesDayMeetAwardRequirements([]);
      expect(result).toBe(false);
    });

    it('Returns false for non qualifying day', () => {
      const result = doesDayMeetAwardRequirements(nonQualifyingDay);
      expect(result).toBe(false);
    });

    it('Returns true for a qualifying day', () => {
      const result = doesDayMeetAwardRequirements(qualifyingDay);
      expect(result).toBe(true);
    });
  });
});
