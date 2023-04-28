import React from 'react';
import { Box, Image, Heading, Container, Stack, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingoption = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '2xl',
};

function Home() {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} maxH={'100vh'} p={'16'}>
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          w={'fit-content'}
          borderBottom={'2px solid'}
          m={'auto'}
        >
          Services
        </Heading>
        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
          <Text
            letterSpacing={'widest'}
            lineHeight={'87%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nisi
            nesciunt aliquid, rerum autem inventore excepturi temporibus ipsum
            ab magni, deserunt vel? Officia velit facilis, culpa consectetur
            voluptas suscipit ab quia hic tempora magnam dolore deserunt ipsam,
            tempore omnis modi id illo itaque cupiditate. Molestias corporis
            praesentium nisi corrupti iusto officiis atque consectetur voluptas
            quia autem ullam quod nesciunt fugiat voluptatibus amet eligendi
            accusamus quisquam harum, ipsa iure quas voluptate eaque mollitia.
            Animi sit, ipsam eligendi officia repellendus odit, aut nisi ab
            dicta illo nemo nam dolore minima, laboriosam dignissimos eveniet
            aliquam veritatis. Voluptate deserunt cupiditate alias, eligendi
            fuga voluptates.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    // showIndicators={false}
    showStatus={false}
    showArrows={false}
    showThumbs={false}
  >
    <Box w={'full'} h={'100vh'}>
      <Image src={img1} h={"full"} w={"full"} objectFit={"cover"} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingoption}>
        Watch The Future
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img2} h={"full"} w={"full"} objectFit={"cover"} />
      <Heading bgColor={'whiteAlpha.800'} color={'black'} {...headingoption}>
        Future Is Gaming
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img3} h={"full"} w={"full"} objectFit={"cover"} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingoption}>
        Gaming On Console
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img4} h={"full"} w={"full"} objectFit={"cover"} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingoption}>
        Night Life Is Coll
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
