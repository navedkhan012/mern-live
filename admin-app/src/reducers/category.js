import { categoryConstants } from "../actions/constants";

const initinalState = {
  categories: [],
  loading: false,
};

const buildNewCategories = (parentId, categories, category) => {
  const myCategories = [];
  if (parentId === undefined) {
    return [
      ...categories,
      {
        _id: category._id,
        name: category.name,
        slug: category.slug,
        children: [],
      },
    ];
  }
  for (const cat of categories) {
    if (cat._id === parentId) {
      const newCategory = {
        _id: category._id,
        name: category.name,
        slug: category.slug,
        parentId: category.parentId,
        children: [],
      };
      myCategories.push({
        ...cat,
        children:
          cat.children.length > 0
            ? [...cat.children, newCategory]
            : [newCategory],
      });
    } else {
      myCategories.push({
        ...cat,
        children: cat.children
          ? buildNewCategories(parentId, cat.children, category)
          : [],
      });
    }
  }
  return myCategories;
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initinalState, action) => {
  switch (action.type) {
    case categoryConstants.CATEGORY_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case categoryConstants.CATEGORY_SUCCESS:
      state = {
        ...state,
        categories: action.payload.categories,
        loading: false,
      };
      break;
    case categoryConstants.CATEGORY_FAILURE:
      state = {
        ...state,
        categories: action.payload.error,
        loading: false,
      };
      break;

    case categoryConstants.ADD_CATEGORY_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case categoryConstants.ADD_CATEGORY_SUCCESS:
      const updateCategory = buildNewCategories(
        action.payload.category.parentId,
        state.categories,
        action.payload.category
      );
      state = {
        ...state,
        categories: updateCategory,
        loading: false,
      };
      break;

    case categoryConstants.ADD_CATEGORY_FAILURE:
      state = {
        ...state,
        loading: false,
      };
      break;

    default:
  }

  return state;
};
