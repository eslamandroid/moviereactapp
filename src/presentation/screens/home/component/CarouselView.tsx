import { PropsWithChildren, useRef, useEffect } from "react";
import { FlatList, NativeSyntheticEvent, NativeScrollEvent, Platform } from "react-native";
import { MovieItemModel } from "../../../../domain/models/movielist/MovieModels";
import MovieCarouselItem from "./MovieCarouselItem";

const CarsouelView = ({ movies }: PropsWithChildren<{ movies: MovieItemModel[] }>) => {
    const flatListRef = useRef<FlatList<MovieItemModel>>(null);
    const indexRef = useRef(0);
    const intervalRef = useRef<any>();


    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const slideSize = event.nativeEvent.layoutMeasurement.width;
        const index = event.nativeEvent.contentOffset.x / slideSize;
        const roundIndex = Math.round(index);
        indexRef.current = roundIndex;
    }

    const startCarousel = () => {
        intervalRef.current = setInterval(() => {
            let indexCarousel = indexRef.current + 1;
            if(indexCarousel > movies.length-1){
                indexCarousel = 0; 
            }            
            flatListRef.current?.scrollToIndex({ animated: true, index: (indexCarousel) });
        }, 3000)

    }

    useEffect(() => {
        clearInterval(intervalRef.current)
        startCarousel();
    }, [])

    return (<FlatList
        data={movies}
  
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        initialNumToRender={1}
        ref={flatListRef}
        onScroll={onScroll}
        keyExtractor={(_, index) => String(index)}
        renderItem={({ item }: { item: MovieItemModel; index: number }) => (
            <MovieCarouselItem movie={item} key={item.id} />
        )}
    />)
}

export default CarsouelView;