/**
 * Get Full Name
 * @name getFullName Concats first name and last name
 * @param {string} firstname in Stringformat
 * @param {string} lastname in Stringformat
 * @return {string}
 */
function getFullName(firstname, lastname) {
  return `${firstname} ${lastname}`.trim();
}

/**
 * Calculate the number of days between two dates.
 * @param {*} endDate
 * @param {*} startDate
 * @returns {number} returns the number of days between two dates
 */
function days(endDate, startDate) {
  const start = typeof startDate === 'string' ? new Date(startDate) : startDate;
  const end = typeof endDate === 'string' ? new Date(endDate) : endDate;

  // return zero if dates are valid
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
    return 0;
  }

  const diffInMs = Math.abs(end.getTime() - start.getTime());
  return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
}

/**
 * Populates the image choice component with the given options
 * @param {*} imageChoiceField
 */
function populateImageChoice(imageChoiceField) {
  const response = [
    {
      id: 1,
      name: 'image1',
      url: 'https://www.example.com/image1.jpg',
    },
    {
      id: 2,
      name: 'image2',
      url: 'https://www.example.com/image2.jpg',
    },
    {
      id: 3,
      name: 'image3',
      url: 'https://www.example.com/image3.jpg',
    },
  ];
  globals.functions.setProperty(imageChoiceField, {properties: {
    options: response
  }});
}

// eslint-disable-next-line import/prefer-default-export
export { getFullName, days, populateImageChoice };
