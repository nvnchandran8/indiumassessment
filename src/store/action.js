export const SEASONREQUEST='SEASONREQUEST';
export const SEASONSUCCESS='SEASONSUCCESS';
export const SEASONFAILURE='SEASONFAILURE';

export const seasonRequest = () => ({
  type:'SEASONREQUEST'
})

export const seasonSuccess = (payload) => ({
  type:'SEASONSUCCESS',
  payload
})

export const seasonFailure = (payload) => ({
  type:'SEASONFAILURE',
  payload
})
