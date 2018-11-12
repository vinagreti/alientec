export function ramdomUid(prefix = 'UID', suffix = 'UID') {
  const ramdomUid1 = `${Date.now()}-${1000 * Math.floor(Math.random())}`;
  const ramdomUid2 = `${Date.now()}-${1000 * Math.floor(Math.random())}`;
  return `${prefix}${ramdomUid1}&${ramdomUid2}${suffix}`;
}
