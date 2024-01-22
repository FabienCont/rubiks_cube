function rad2deg(radians) {
  var pi = Math.PI;
  return radians * (180 / pi);
}

function deg2rad(degrees) {
  var pi = Math.PI;
  return degrees * (pi / 180);
}

function setAxisAngle(out, axis, rad) {
  rad *= 0.5; // Convert the angle to half angle for quaternion representation
  const sin = Math.sin(rad);
  out.x = axis[0] * sin;
  out.y = axis[1] * sin;
  out.z = axis[2] * sin;
  out.w = Math.cos(rad);
  return out;
}

function createQuat() {
  return { x: 0, y: 0, z: 0, w: 1 }
}

function eulerToQuaternion(eulerX, eulerY, eulerZ) {
  const x = Math.sin(eulerX / 2) * Math.cos(eulerY / 2) * Math.cos(eulerZ / 2) - Math.cos(eulerX / 2) * Math.sin(eulerY / 2) * Math.sin(eulerZ / 2);
  const y = Math.cos(eulerX / 2) * Math.sin(eulerY / 2) * Math.cos(eulerZ / 2) + Math.sin(eulerX / 2) * Math.cos(eulerY / 2) * Math.sin(eulerZ / 2);
  const z = Math.cos(eulerX / 2) * Math.cos(eulerY / 2) * Math.sin(eulerZ / 2) - Math.sin(eulerX / 2) * Math.sin(eulerY / 2) * Math.cos(eulerZ / 2);
  const w = Math.cos(eulerX / 2) * Math.cos(eulerY / 2) * Math.cos(eulerZ / 2) + Math.sin(eulerX / 2) * Math.sin(eulerY / 2) * Math.sin(eulerZ / 2);

  return { x, y, z, w };
}


export { createQuat, setAxisAngle, rad2deg, deg2rad, eulerToQuaternion }