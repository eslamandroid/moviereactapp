import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import myContainer from '../../../../di/di';
import { Status } from '../../../../common/domain/either';
import { GetHomePageCase } from '../../../../domain/usecases/homepage/HomeUseCases';
import { HomePageModel } from '../../../../domain/models/homepage/HomePageModels';

const homePageUseCase = myContainer.get<GetHomePageCase>('GetHomePageCase');

// define state
export interface HomePageState {
  isLoading: boolean;
  pageData?: HomePageModel;
}

// init default state
const initState: HomePageState = {
  isLoading: false
}

export const fetchHomePage = createAsyncThunk(
  'homePageSlice/fetchHomePage',
  async () => {
    const replies = await homePageUseCase.execute();
    if (replies.status === Status.SUCCESS) {
      return replies.data;
    } else {
      return replies.message;
    }
  },
);

const homeReducerBuilder = (
  builder: ActionReducerMapBuilder<HomePageState>,
) => {
  builder.addCase(fetchHomePage.pending, (state: HomePageState) => {
    // show loading
    state.isLoading = true;
  });

  builder.addCase(fetchHomePage.fulfilled, (state, action) => {
    // logic here
    state.isLoading = false;
    state.pageData = action.payload as HomePageModel;
  });

  builder.addCase(fetchHomePage.rejected, (state, _) => {
    // error here
    state.isLoading = false;
  });
};

const homePageSlice = createSlice({
  name: 'homePage',
  initialState: initState,
  reducers: {},
  extraReducers: builder => {
    homeReducerBuilder(builder);
  },
});

export default homePageSlice.reducer;
