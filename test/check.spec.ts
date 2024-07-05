import { verify } from "../src";
import { Mission, Permit } from "../src/frame";

const mission1: Mission = {
  since: new Date("2022-12-01T00:00:00.000Z"),
  until: new Date("2022-12-05T00:00:00.000Z"),
};
const mission2: Mission = {
  since: new Date("2022-12-01T00:00:00.000Z"),
  until: new Date("2022-12-10T00:00:00.000Z"),
};

const permit1: Permit = {
  since: new Date("2022-12-01T00:00:00.000Z"),
  until: new Date("2022-12-04T00:00:00.000Z"),
};
const permit2: Permit = {
  since: new Date("2022-12-05T00:00:00.000Z"),
  until: new Date("2022-12-10T00:00:00.000Z"),
};
const permit3: Permit = {
  since: new Date("2022-11-01T00:00:00.000Z"),
  until: new Date("2022-12-12T00:00:00.000Z"),
};
const permit4: Permit = {
  since: new Date("2022-12-06T00:00:00.000Z"),
  until: new Date("2022-12-10T00:00:00.000Z"),
};

describe("check that function verify work as expected", () => {
  test("scenario", () => {
    expect(verify(mission1, [permit1])).toBe(false);
    expect(verify(mission1, [permit1, permit2])).toBe(true);
    expect(verify(mission1, [permit3])).toBe(true);
    expect(verify(mission1, [permit1, permit4])).toBe(false);
    expect(verify(mission1, [permit1, permit2, permit3, permit4])).toBe(true);
    expect(verify(mission2, [permit1])).toBe(false);
    expect(verify(mission2, [permit3])).toBe(true);
    expect(verify(mission1, [permit3])).toBe(true);
  });
});
