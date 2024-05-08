import {IsliderElementContent} from "./types";

export function useSliderContent() {

    const sliderContent: IsliderElementContent[] = [
        {
            id: 1,
            title: "title1",
            describe: 'describe1',
            image: 'https://images.squarespace-cdn.com/content/v1/61c4da8eb1b30a201b9669f2/1696691175374-MJY4VWB1KS8NU3DE3JK1/Sounds-of-Nature.jpg'
        },
        {
            id: 2,
            title: "title2",
            describe: 'describe2',
            image: 'https://static.sadhguru.org/d/46272/1633199491-1633199490440.jpg'
        },
        {
            id: 3,
            title: "title3",
            describe: 'describe3',
            image: 'https://orionphilosophy.com/wp-content/uploads/2020/03/Nature2.jpg'
        },
        {
            id: 4,
            title: "title4",
            describe: 'describe4',
            image: 'https://static.vecteezy.com/system/resources/thumbnails/030/353/613/small_2x/natural-background-ai-generated-photo.jpg'
        }
    ]

    return {sliderContent}
}