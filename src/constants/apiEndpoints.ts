const API_BASE_URL = `${process.env.NEXT_PUBLIC_API}/api`;

export const MY_LIST_ADD_ITEM = (id: string) =>
  `${API_BASE_URL}/user/mylist/add/${id}`;
export const MY_LIST_REMOVE_ITEM = (id: string) =>
  `${API_BASE_URL}/user/mylist/remove/${id}`;
export const MY_LIST_CHECK_ITEM = (id: string) =>
  `${API_BASE_URL}/user/mylist/${id}`;
export const MOVIE_DETAILS = (id: string) => `${API_BASE_URL}/movie/${id}`;
