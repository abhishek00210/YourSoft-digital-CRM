import { configureStore } from "@reduxjs/toolkit";
import BookmarkDataSlice from "./Reducers/BookmarkDataSlice";
import BookmarkTabSlice from "./Reducers/BookmarkTabSlice";
import layoutReducer from "./Reducers/Layout/LayoutReducer";
import ThemeCustomizerReducer from "./Reducers/Layout/ThemeCustomizerReducer";

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
    bookmarkTab: BookmarkTabSlice,
    themeCustomizer: ThemeCustomizerReducer,
    bookmarkDataSlice: BookmarkDataSlice,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
