import { Text, SafeAreaView, ActivityIndicator, View, StatusBar, Platform } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../redux';
import { useEffect } from 'react';
import styles from './HomeStyle';
import { MovieItemModel } from '../../../domain/models/movielist/MovieModels';
import { ScrollView } from 'react-native-gesture-handler';
import VerticalMovieCard from './component/VerticalMovieCard';
import CarsouelView from './component/CarouselView';
import { fetchHomePage } from '../../redux/reducer/homepage/HomePageSlice';
import NowPlayingList from './component/NowPlayingView';
import { COLOR } from '../../../common/appconstants/Colors';

const HomeScreen = () => {
  const { isLoading, pageData } = useAppSelector(state => state.homePage);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchHomePage());
  }, []);

   
  return (
    <>
      <SafeAreaView style={styles.mainView}>
        {isLoading &&
          (<View style={styles.loading}>
            <ActivityIndicator color={COLOR.primaryColor} />
          </View>)}

        {(!isLoading && pageData != null) && (
          <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>

            {pageData.carousel != null && (<CarsouelView movies={pageData.carousel} />)}


            {pageData.nowPlaying != null && (<NowPlayingList movies={pageData.nowPlaying} />)}

            {pageData.popular != null && (<View>
              <Text style={styles.title}>Popular</Text>
              {pageData.popular.map((movie: MovieItemModel, index) => (
                <VerticalMovieCard movie={movie} key={index.toString()} />
              ))}
            </View>)}

          </ScrollView>
        )}
      </SafeAreaView>
    </>
  );
};
export default HomeScreen;
