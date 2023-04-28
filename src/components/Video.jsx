import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

function Video() {
  const videoArr = [
    'https://youtube.com/shorts/QwMdFdWjHbk?feature=share',
    'https://youtube.com/shorts/hW4IdXQIOu0?feature=share',
    'https://youtu.be/HnY0spLCQRA',
    'https://youtu.be/MocyFoijb6g',
  ];

  const [videoSrc, setVideoSrc] = useState(videoArr[0]);

  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'}>
        <video
          controls
          controlsList="nodownload"
          src={videoSrc}
          style={{
            width: '100%',
          }}
        ></video>
        <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
          <Heading>Video Title</Heading>
          <Text>This Is For Description Area</Text>
        </VStack>
      </VStack>
      <VStack
        w={['full', 'xl']}
        alignItems={'stretch'}
        p={'8'}
        spacing={'8'}
        overflowY={'auto'}
      >
        {videoArr.map((item, index) => (
          <Button variant={'ghost'} colorScheme="purple" onClick={()=> setVideoSrc(item)}>
            Lecture {index + 1}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
}

export default Video;
