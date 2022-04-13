import { createAction } from '../../utils/reducer/reducerUtils';
import { CategoryActionTypes } from './categoryActionTypes';

export const setCategoryMap = (categoriesMap) => createAction(CategoryActionTypes.setCategoryMap , categoriesMap);  

