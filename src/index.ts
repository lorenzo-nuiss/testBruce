import { Mission, Permit } from "./frame";

export const verify = (mission: Mission, permits: Permit[]): boolean => {
  console.log("permi a merge :");
  console.log(permits); // error
  const mergedPermits = mergeContinuousPermits(permits);
  console.log(mergedPermits);

  for (const permit of permits) {
    const startPermit = permit.since.getTime();
    const endPermit = permit.until.getTime();

    if (
      mission.since.getTime() >= startPermit &&
      mission.until.getTime() <= endPermit
    ) {
      console.log("true");

      return true;
    }
  }
  console.log("false");

  return false;
};

// Function to merge permits
const mergeContinuousPermits = (permits: Permit[]): Permit[] => {
  // check if not empty
  if (permits.length === 0) return [];

  // sort permits by their 'since' date in ascending order
  permits.sort((a, b) => a.since.getTime() - b.since.getTime());

  // Array to store merged permits
  const mergedPermits: Permit[] = [];

  if (permits[0]) {
    mergedPermits.push(permits[0]);
  }

  for (let i = 1; i < permits.length; i++) {
    // get the last merged permit from the array
    const lastMergedPermit = mergedPermits[mergedPermits.length - 1];
    const currentPermit = permits[i];
    if (lastMergedPermit && currentPermit) {
      const lastMergedPermitEnd = new Date(lastMergedPermit.until);
      lastMergedPermitEnd.setDate(lastMergedPermitEnd.getDate() + 1);

      // Check if the end date of the last merged permit is less than or equal to the start date of the current permit
      if (lastMergedPermitEnd.getTime() <= currentPermit.since.getTime()) {
        lastMergedPermit.until = currentPermit.until;
        console.log(lastMergedPermitEnd);
        console.log(currentPermit);
      } else {
        // console.log(mergedPermits);
        mergedPermits.push(currentPermit);
      }
    }
  }
  return mergedPermits;
};
