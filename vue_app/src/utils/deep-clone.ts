import { isDef, isObject } from './index';

type ObjectIndex = Record<string, any>;

const { hasOwnProperty } = Object.prototype;


function assignKey(to: ObjectIndex, from: ObjectIndex, key: string) {
  const val = from[key];

  if (!isDef(val)) return;

  if (!hasOwnProperty.call(to, key) || !isObject(val)) {
    to[key] = val;
  } else {
    to[key] = deepAssign(Object(to[key]), from[key]);
  }
}

function deepAssign(to: ObjectIndex, from: ObjectIndex): ObjectIndex {
  Object.keys(from).forEach((key) => {
    assignKey(to, from, key);
  });

  return to;
}


export function deepClone(obj: object): object {
  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }

  if (typeof obj === 'object') {
    return deepAssign({}, obj);
  }

  return obj;
}
